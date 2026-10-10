# The Python API[#](#the-python-api "Link to this heading")

Three levels, from the smallest boundary to full control. Pick the highest one
that does the job.

| Level | Use it when |
| --- | --- |
| [`encode`](../../modules/generated/scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode") / [`decode`](../../modules/generated/scikitplot.cleanprompt.decode.html#scikitplot.cleanprompt.decode "scikitplot.cleanprompt.decode") | one prompt, one reply |
| [`Session`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session "scikitplot.cleanprompt.Session") | a conversation: the same value keeps the same label across turns |
| [`Redactor`](../../modules/generated/scikitplot.cleanprompt.Redactor.html#scikitplot.cleanprompt.Redactor "scikitplot.cleanprompt.Redactor") / [`restore`](../../modules/generated/scikitplot.cleanprompt.restore.html#scikitplot.cleanprompt.restore "scikitplot.cleanprompt.restore") | you choose the policy, the detectors and the overlap rule yourself |

## One exchange: `encode` and `decode`[#](#one-exchange-encode-and-decode "Link to this heading")

Use [`encode`](../../modules/generated/scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode") when you want the smallest safe boundary around one prompt:

```
from scikitplot.cleanprompt import encode, decode

encoded = encode(
    "Mail ada@example.com about the Acme renewal",
    hide=["Acme"],
)
encoded.text
# 'Mail [EMAIL-1] about the [CUSTOM-1] renewal'

```

Only `encoded.text` goes to the model. Keep `encoded.handle` local:

```
model_reply = "I will contact [EMAIL-1] about [CUSTOM-1]."
decode(model_reply, encoded.handle)
# 'I will contact ada@example.com about Acme.'

```

[`encode`](../../modules/generated/scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode") returns an [`EncodedPrompt`](../../modules/generated/scikitplot.cleanprompt.EncodedPrompt.html#scikitplot.cleanprompt.EncodedPrompt "scikitplot.cleanprompt.EncodedPrompt") with three parts:

`EncodedPrompt.text`
:   The redacted text intended to cross the model boundary.

`EncodedPrompt.handle`
:   The local restoration authority. It owns a [`Vault`](../../modules/generated/scikitplot.cleanprompt.Vault.html#scikitplot.cleanprompt.Vault "scikitplot.cleanprompt.Vault") containing the
    removed values and ****must not be sent with the prompt****.

`EncodedPrompt.report`
:   Local diagnostics describing what happened and which detection surfaces
    were active. Reports can include suggested terms derived from the input, so
    review them before logging, attaching, or transmitting them.

It unpacks as a pair:

```
safe_text, handle = encode("Write to ada@example.com")

```

Call [`Handle.clear`](../../modules/generated/scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle.clear "scikitplot.cleanprompt.Handle.clear") when the restoration authority is no longer needed.
A [`Handle`](../../modules/generated/scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt.Handle") is frozen and its representation shows counts, never
values. [`Handle.export`](../../modules/generated/scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle.export "scikitplot.cleanprompt.Handle.export") and [`Handle.load`](../../modules/generated/scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle.load "scikitplot.cleanprompt.Handle.load") make it JSON-portable,
which is an explicit operation whose output contains the values — store it as
you would a password.

`decode(reply, handle, strict=True)` refuses a reply that contains a
placeholder the handle never issued, instead of leaving it in place.

### What `encode` can be told[#](#what-encode-can-be-told "Link to this heading")

`profile=`
:   `"minimal"`, `"balanced"` (the default) or `"strict"` — see
    **Profiles** below.

`hide=`
:   Exact additional values that must be replaced, for example a project code
    name. `word_boundary=True` matches them only as whole words.

`allow=`
:   Values that must ****not**** be replaced even when a detector finds them.

`kinds=`
:   Restrict the structural pattern categories considered. Narrow with care:
    switching `CREDIT_CARD` off does not leave a card alone, it lets a
    shorter pattern match a **fragment** of it. Prefer `allow=` for a
    specific surface.

`ignore_case=`
:   Match exact terms regardless of case.

`ner=True`
:   Add a named-entity engine; `engine=` (`"auto"`, `"spacy"`,
    `"nltk"`, `"both"`, `"none"`), `language=`, `size=` and
    `model=` select it. A request that cannot be met raises
    `CapabilityError` with the remedy — see
    [Names, organisations and places](entity_detection.html#cleanprompt-entity-detection).

`policy=` / `registry=`
:   A full [`RedactionPolicy`](../../modules/generated/scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt.RedactionPolicy") or [`DetectorRegistry`](../../modules/generated/scikitplot.cleanprompt.DetectorRegistry.html#scikitplot.cleanprompt.DetectorRegistry "scikitplot.cleanprompt.DetectorRegistry"), for the
    cases the keywords do not cover.

### Profiles[#](#profiles "Link to this heading")

| Profile | Intended starting point | Trade-off |
| --- | --- | --- |
| `minimal` | email, phone, and URL contact details | narrowest built-in pattern surface |
| `balanced` | the default high-precision structural patterns | normal general-purpose starting point |
| `strict` | the default set plus title-case detection, with case folding | broader coverage and more false positives |

## A conversation: `Session`[#](#a-conversation-session "Link to this heading")

A conversation needs one vault across turns so that the same value keeps the
same label. [`Session`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session "scikitplot.cleanprompt.Session") owns that lifetime deliberately:

```
from scikitplot.cleanprompt import session

with session() as chat:
    first = chat.encode("Mail ada@example.com")
    second = chat.encode("Remind ada@example.com tomorrow")
    # both turns use the same EMAIL label
    restored = chat.decode("I reminded [EMAIL-1].")

```

Leaving the context manager clears the session’s vault. Use one session per
conversation.

[`Session.encode`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session.encode "scikitplot.cleanprompt.Session.encode") returns a plain string — unlike the module-level
[`encode`](../../modules/generated/scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode") — because the session owns the one handle. Handing back a
per-turn copy would invite decoding turn three with turn one’s handle, which
silently restores the wrong values.

For model clients that already accept a callable, [`Session.roundtrip`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session.roundtrip "scikitplot.cleanprompt.Session.roundtrip")
keeps the boundary narrow:

```
with session() as chat:
    reply = chat.roundtrip(
        "Mail ada@example.com",
        send=lambda safe: "Sent to " + safe.split()[-1],
    )

```

The callable receives only the redacted prompt and returns the model reply.
That callable is the whole integration seam: any function taking a string and
returning a string works, which is why no provider needs to be known here.

[`Session.decode_report`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session.decode_report "scikitplot.cleanprompt.Session.decode_report") returns the full restoration report;
[`Session.turns`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session.turns "scikitplot.cleanprompt.Session.turns") and [`Session.report`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session.report "scikitplot.cleanprompt.Session.report") describe the conversation so
far without showing a value.

## Full control: `Redactor` and `restore`[#](#full-control-redactor-and-restore "Link to this heading")

Use [`Redactor`](../../modules/generated/scikitplot.cleanprompt.Redactor.html#scikitplot.cleanprompt.Redactor "scikitplot.cleanprompt.Redactor") when you need explicit detector or overlap control:

```
from scikitplot.cleanprompt import Redactor, restore

redactor = Redactor()
result = redactor.redact(
    "Mail ada@example.com about Project North",
    extra_terms=["Project North"],
)
result.text
# 'Mail [EMAIL-1] about [CUSTOM-1]'

restored = restore(result.text, result.vault)
restored.text
# 'Mail ada@example.com about Project North'

```

A [`Redactor`](../../modules/generated/scikitplot.cleanprompt.Redactor.html#scikitplot.cleanprompt.Redactor "scikitplot.cleanprompt.Redactor") is stateless between documents. State that must survive
turns belongs in [`Session`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session "scikitplot.cleanprompt.Session"), [`Guard`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard "scikitplot.cleanprompt.Guard"), or a persisted vault rather
than hidden process globals. To continue numbering from an earlier pass, pass
its entries explicitly: `redactor.redact(text, seed=previous.entries)`.

[`restore`](../../modules/generated/scikitplot.cleanprompt.restore.html#scikitplot.cleanprompt.restore "scikitplot.cleanprompt.restore") returns a `RestorationResult` rather than a bare string:
`text`, the labels it restored, the rewritten spellings it `repaired`, the
`unknown` placeholders it could not resolve, and vault entries left unused.

### A policy is data[#](#a-policy-is-data "Link to this heading")

[`RedactionPolicy`](../../modules/generated/scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt.RedactionPolicy") is a frozen dataclass; [`RedactionPolicy.evolve`](../../modules/generated/scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy.evolve "scikitplot.cleanprompt.RedactionPolicy.evolve")
returns a new one. Two policies with the same fields have the same
fingerprint in any process, which is what makes a redaction reproducible.

```
from scikitplot.cleanprompt import DEFAULT_POLICY, TagStyle

surrogate = DEFAULT_POLICY.evolve(tag_style=TagStyle(style="surrogate"))
Redactor(policy=surrogate).redact("Mail ada@example.com").text

```

Its fields are `kinds`, `allow`, `tag_style` (the placeholder grammar and
style), `overlap` (an [`OverlapStrategy`](../../modules/generated/scikitplot.cleanprompt.OverlapStrategy.html#scikitplot.cleanprompt.OverlapStrategy "scikitplot.cleanprompt.OverlapStrategy")), `limits` (input size,
span and term bounds; exceeding one raises), `case_insensitive`,
`min_confidence` and `preserve_placeholders`.

### Your own detector[#](#your-own-detector "Link to this heading")

A detector is an object with a `name`, a `kind`, a `priority` and a
`detect(text, policy)` method yielding `Span` objects over the text it
was given. [`RegexDetector`](../../modules/generated/scikitplot.cleanprompt.RegexDetector.html#scikitplot.cleanprompt.RegexDetector "scikitplot.cleanprompt.RegexDetector") and [`LiteralDetector`](../../modules/generated/scikitplot.cleanprompt.LiteralDetector.html#scikitplot.cleanprompt.LiteralDetector "scikitplot.cleanprompt.LiteralDetector") cover most needs:

```
from scikitplot.cleanprompt import DetectorRegistry, LiteralDetector, default_registry

registry = default_registry()
registry.add(LiteralDetector(["Project North", "Northwind"], kind="PROJECT"))
Redactor(registry=registry).redact("Northwind ships Project North").text
# '[PROJECT-1] ships [PROJECT-2]'

```

[`RegexDetector`](../../modules/generated/scikitplot.cleanprompt.RegexDetector.html#scikitplot.cleanprompt.RegexDetector "scikitplot.cleanprompt.RegexDetector") and [`LiteralDetector`](../../modules/generated/scikitplot.cleanprompt.LiteralDetector.html#scikitplot.cleanprompt.LiteralDetector "scikitplot.cleanprompt.LiteralDetector") also read the detection
view ([How it works](how_it_works.html#cleanprompt-how-it-works)), so a term written with an invisible
character inside it is still found. A detector of your own reads it only if
it sets the class attribute `reads_view = True` — which is correct only when
every offset it yields indexes the string passed to `detect`.

## Diagnosis in Python[#](#diagnosis-in-python "Link to this heading")

[`diagnose`](../../modules/generated/scikitplot.cleanprompt.diagnose.html#scikitplot.cleanprompt.diagnose "scikitplot.cleanprompt.diagnose") reports what a policy and registry can and cannot see —
active kinds, inactive kinds, tier status and blind spots — without importing
an optional dependency:

```
from scikitplot.cleanprompt import diagnose

report = diagnose()
report.healthy, report.headline()

```

An empty redaction result is not evidence that the text contains no sensitive
information: it can also mean that a relevant detector is disabled or
unavailable. That is why every surface reports the result **together with** what
was looking.