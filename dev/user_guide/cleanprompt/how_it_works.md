# How it works[#](#how-it-works "Link to this heading")

A redaction is four steps, and the last one happens after the model has
answered:

```
detect ── resolve ── assign ── rewrite ──▶ [ the model ] ──▶ restore

```

Each step is shaped by one question: **can this step return successfully while
having hidden less than it claims?** A privacy tool that silently does less is
worse than one that refuses, because the caller sends the result.

## 1. Detect[#](#detect "Link to this heading")

Every detector reads the ****original text**** and reports **spans**: a start, an
end, a category (`EMAIL`, `PHONE`, `PERSON` …) and the matched value.
No detector ever sees text another stage has already rewritten; that is how a
placeholder never ends up inside another placeholder.

Three kinds of detector contribute:

****Structural patterns.**** Curated regular expressions, each with a written
intent, positive and negative examples that the test suite executes, and — where
a shape is not enough — a small validator: a card number must also pass the
Luhn check, an IBAN the mod-97 check, an IPv4 address must have octets in
range. `python -m scikitplot.cleanprompt kinds` lists them.

****Exact terms.**** Anything you name with `hide=` / `--hide` is found
wherever it occurs.

****Entity engines**** (optional). spaCy or NLTK recognise names, organisations,
places and similar categories no regular expression can.
[Names, organisations and places](entity_detection.html#cleanprompt-entity-detection) covers them.

### A second reading: the detection view[#](#a-second-reading-the-detection-view "Link to this heading")

A value can be written so it reads the same to a person — and to a language
model — while a pattern no longer matches it: an invisible zero-width space
inside an address, full-width letters, a non-breaking space or a non-breaking
hyphen inside a telephone number.

```
written     mail ada<ZWSP>@example.com      (an invisible character inside)
view        mail ada@example.com            (format characters removed)
found       EMAIL at view offsets 5..20
mapped      EMAIL at original offsets 5..21  (the invisible character included)
sent        mail [EMAIL-1]
restored    mail ada<ZWSP>@example.com      (exactly as written)

```

Structural and exact-term detectors therefore read the text twice: as written,
and through a ****view**** in which every Unicode **format** character (zero-width
spaces and joiners, the word joiner, the byte-order mark, the soft hyphen,
bidirectional controls, tag characters) is removed and every other non-ASCII
character is folded to its single-character compatibility form (full-width
letters and digits, mathematical letters, Unicode spaces, dashes and
apostrophes). A letter or digit of another script that looks like one ASCII
letter or digit (Cyrillic or Greek letters that look Latin) is then folded to
it, from a table generated from the Unicode confusables data. ASCII is read
exactly as written, so line breaks stay line breaks.

Spans found in the view are mapped back onto the original text before they
join the others. The text itself is never changed: the vault keeps the value
exactly as it was written, invisible characters included, and restoration puts
exactly that back. The view can only add detections.

Only detectors whose results depend on nothing but the text they are given
read the view — structural patterns, pack patterns and exact terms. Entity
engines read the original only, and so do the detectors a structured format
builds from a document’s layout (fields, regions, JSON tokens), because their
positions were computed from the original. Field **names** are read through the
same view, so a header written `n<ZWSP>ame` still names the `name` field.

Formats whose names are found inside a line (variable names, code identifiers)
are split a second time over a stricter view that only removes format
characters and folds nothing, so it has exactly the original’s commas, quotes
and line breaks. Each field found there is mapped back onto the original, so
`export DB_PASS<ZWSP>WORD=...` names `DB_PASSWORD`. The positions still
come from the original. JSON string values are scanned through the full view
and then kept inside their quotes.

## 2. Resolve[#](#resolve "Link to this heading")

Detectors disagree, and their spans overlap. When two spans overlap only
partly, they are ****merged into one span over their full extent****. Dropping the
loser would leave the characters only it covered in the output, which is a
disclosure; merging is coarser — two values can become one placeholder — but it
cannot leak, and it round-trips exactly. When one span contains another, the
outer one wins. [`OverlapStrategy`](../../modules/generated/scikitplot.cleanprompt.OverlapStrategy.html#scikitplot.cleanprompt.OverlapStrategy "scikitplot.cleanprompt.OverlapStrategy") makes the arbitration explicit, and
its strict mode turns any overlap into an error.

## 3. Assign[#](#assign "Link to this heading")

Each distinct value gets one label, numbered per category in order of first
appearance: `[EMAIL-1]`, `[EMAIL-2]`, `[PERSON-1]`. The same value gets
the same label every time it occurs, and two different values never share
one. Within a conversation — [`Session`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session "scikitplot.cleanprompt.Session"), or the command line’s
`encode` in its default append mode — a value keeps its label across turns,
so a reply that quotes an earlier placeholder still restores to the right
value.

Entity labels are normalised to one vocabulary before they are assigned:
spaCy says `ORG` where NLTK says `ORGANIZATION`, and without the
normalisation a vault written with one engine would not restore under the
other.

## 4. Rewrite[#](#rewrite "Link to this heading")

One pass over the original text replaces every resolved span with its label.
The result is a [`RedactionResult`](../../modules/generated/scikitplot.cleanprompt.RedactionResult.html#scikitplot.cleanprompt.RedactionResult "scikitplot.cleanprompt.RedactionResult") whose `text` is safe to send and
whose `vault` is not. They are different types precisely so that no
serializer can emit both by accident.

## 5. Restore[#](#restore "Link to this heading")

The hop to the model is the one step this library does not control, and a
language model rewrites what it is given. Replies come back with
`[email-1]`, `[EMAIL_1]`, `[EMAIL 1]`, Markdown-escaped brackets, or a
label wrapped across a line.

[`restore`](../../modules/generated/scikitplot.cleanprompt.restore.html#scikitplot.cleanprompt.restore "scikitplot.cleanprompt.restore") and [`decode`](../../modules/generated/scikitplot.cleanprompt.decode.html#scikitplot.cleanprompt.decode "scikitplot.cleanprompt.decode") therefore recognise a bounded set of such
rewrites — and act on one ****only**** when it resolves to a label the vault
actually holds, so ordinary bracketed text such as `[note 2]` is left
alone. Every repair is reported. `decode --exact` on the command line, or
`lenient=False` in Python, restores only the exact issued spelling. A
restoration that resolves nothing while the vault is not empty says so rather
than reporting a quiet zero.

A spelling of that kind can also be in your own text before it is cleaned:
`[email_1]` written in a note, say. Encoding then issues no value under the
label it would be read as, so the spelling has nothing to resolve to and
comes back exactly as you wrote it. In a session, a spelling typed in a later
message that matches a label issued earlier is hidden as a value of its own,
so it too comes back as written, and a model’s rewrite of the earlier label
is still repaired.

## Placeholders or surrogates[#](#placeholders-or-surrogates "Link to this heading")

`placeholder` is the default style: stable bracket tokens such as
`[EMAIL-1]` make it obvious that the text was transformed, and they cannot be
mistaken for real data.

`surrogate` (`--style surrogate`) puts an invented but ordinary-looking
value where a proper noun is the natural replacement — `PERSON`, `ORG`,
`GPE`, `LOC`, `FAC`, `EMAIL`, `PHONE`, `URL` — so the text reads as
prose and a model has nothing to normalise. Contact details use reserved forms
(`example.invalid` addresses and links, the `+1 555 0100`–`0199`
fiction block for telephone numbers). Credentials and identifiers —
`CREDIT_CARD`, `IBAN`, `SSN_US`, `AWS_ACCESS_KEY`, `JWT`,
`PRIVATE_KEY`, `MAC`, `IPV4`, `IPV6` — and `NORP` keep their
placeholders: a plausible card number or key can be mistaken for real, acted
on, or by chance **be** real.

A stand-in is never one that already occurs in the text, one already issued,
or one that contains a value the conversation holds; after a bounded search it
falls back to a placeholder. The style is part of the placeholder grammar, so
a vault written in one style is refused, not half-read, by the other.

### Your own invented names[#](#your-own-invented-names "Link to this heading")

The built-in names are English-sounding. `Marion Holt` in a Finnish or
Turkish paragraph reads oddly, and a model may comment on it. A ****surrogate
set**** is a small file with your own lists:

```
# nordic.yaml
name: nordic
version: 1
summary: Nordic-sounding invented names.
kinds:
  PERSON: {first: [Aino, Eero, Liv], last: [Halvorsen, Lindgren, Virtanen]}
  ORG:    {first: [Fjord, Norrsken], second: [Data, Logistik]}
  GPE:    [Granvik, Solberga]
avoid: [data, will, may]     # optional: words no stand-in may be

```
```
cleanprompt encode --ner --style surrogate --surrogates nordic.yaml \
  "Ada Lovelace met Grace Hopper at the Acme Corporation in Paris"
# Aino Halvorsen met Eero Virtanen at Fjord Data in Granvik

```

* `PERSON` and `ORG` take two lists, which are combined so that
  consecutive people do not share a surname. `GPE`, `LOC` and `FAC`
  take one list. A kind the set leaves out uses the built-in names.
* E-mail addresses, telephone numbers and links are always built by
  CleanPrompt in their reserved forms, and credentials and identifiers always
  keep placeholders. A set that lists `EMAIL`, `PHONE`, `URL` or any
  other kind is refused, with the reason.
* Each entry must read as a name, and no two entries may look alike:
  letters, spaces and `' - .` and the typographic apostrophe, 1–64
  characters, starting and ending with a letter. Combining marks may follow
  a letter, at most two in a row. Full-width, circled and other
  drawn-differently forms of a letter are refused, an entry must be in one
  script (so a Cyrillic `\u0410` cannot pass for a Latin `A`), and
  spellings that differ only in how a letter and its marks were typed are
  stored once, composed. Digits, `@`, `/`, brackets and invisible
  characters (zero-width characters, variation selectors, fillers) are
  refused. So is an entry that a default core pattern or a built-in pack
  pattern would detect, since the next encode would hide the stand-in
  itself. Combined names (`Aino Halvorsen`) are checked again when they
  are issued.
* ****Keep ordinary words out with**** `avoid`. `decode` restores a
  stand-in wherever it appears in the reply, so an entry such as `The` or
  `Ash` would turn every `The` in the model’s answer into your value.
  List the words of your language and domain under `avoid`: an entry
  equal to one is refused when the set loads, and no stand-in equal to one
  is issued at run time, including a combined name (`Liv Holt`) and the
  built-in names of a kind the set leaves out. Words are compared as
  `decode` compares a rewritten stand-in, ignoring case, full-width and
  other compatibility forms, and separators (`Ash-Vale` and `ash vale`
  are one word). Nothing is avoided unless you list it: CleanPrompt ships
  no word list, because which words are ordinary depends on your language.
  `avoid` holds at most 4096 words and is part of the set’s identity.
* Every rule above still applies: no stand-in already in the text, none
  issued twice, none containing a value the conversation holds. When a set
  runs out of names, the remaining values get placeholders.
* `--surrogates` without `--style surrogate` is refused. The flag never
  switches the style on by itself.
* `decode` needs no set file. The vault records which set wrote it, as
  `name@version#digest`, and the digest changes when any entry changes. To
  continue an existing vault with `--vault-mode append` (`encode`’s
  default), pass the same `--style` and set again: appending with another
  style or set is refused, so one vault never mixes two kinds of stand-in.

### One action per kind[#](#one-action-per-kind "Link to this heading")

The style applies to every kind. An ****action**** overrides it for one kind:

`tokenize`
:   a placeholder (`[EMAIL-1]`), whatever the style;

`surrogate`
:   an invented stand-in, whatever the style; only for the kinds listed above;

`report`
:   leave the value where it is and list it: for detections you want to see
    before deciding, such as a noisy pattern. The text is ****not**** safe to
    send: a run prints an `ALERT`, `doctor` lists the kind as a blind spot,
    and [`Guard`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard "scikitplot.cleanprompt.Guard") and the MCP server refuse to send it unless you
    `allow` the value;

`block`
:   refuse the whole text. Nothing is returned, the error names kinds and
    counts but no value, and `batch` reports that file as refused and goes
    on with the others.

```
python -m scikitplot.cleanprompt redact --action EMAIL=surrogate --action CREDIT_CARD=block
python -m scikitplot.cleanprompt batch notes/ --out safe/ --action PHONE=report

```

In Python, `FluentCleanPrompt().action("EMAIL", "surrogate")`, or
`RedactionPolicy(actions={"EMAIL": "surrogate"})`; in a plan file,
`"actions": {"EMAIL": "surrogate"}`; in a config file, an `actions` table.
A kind without an action follows the style, so a policy without actions
behaves exactly as before. A misspelt kind is refused, never ignored.

When detections of different kinds overlap and merge into one value, the
strictest wins: `block`, then hiding (`tokenize` or `surrogate`), then
`report`. Between the two hiding actions the merged value’s own kind
decides, as the style does.

## Coverage[#](#coverage "Link to this heading")

Which surface finds each kind of value, generated from the library’s own
registries, so it cannot drift from what the code does. **Default** means the
kind is found without choosing a pack or narrowing the kinds: a core pattern
that runs by default, or an entity label the engines report by default (the
engines themselves need the `ner` or `nltk` tier). A pack’s patterns and
fields run when the pack is selected (`--pack`, or `auto` for the
formats that ask for it). **Stand-in** means `--style surrogate` and the
`surrogate` action can replace it with an invented value; every other kind
gets a placeholder.

For your own plan, with its actions applied, run:

```
python -m scikitplot.cleanprompt kinds --matrix --action PHONE=report --format json

```

| Kind | Found by | Default | Stand-in |
| --- | --- | --- | --- |
| `ADDRESS` | field in `personal` |  |  |
| `AWS_ACCESS_KEY` | core pattern | yes |  |
| `AWS_ARN` | pattern in `cloud` |  |  |
| `AZURE_CONNECTION` | pattern in `cloud` |  |  |
| `BANK_ACCOUNT` | field in `finance` |  |  |
| `BEARER_TOKEN` | pattern in `secrets` |  |  |
| `CARD` | field in `finance` |  |  |
| `CLINICAL` | field in `patient` |  |  |
| `CLINICAL_DATE` | field in `patient` |  |  |
| `CLINICIAN` | field in `patient` |  |  |
| `CLOUD_ID` | field in `cloud` |  |  |
| `COLUMN` | the runtime |  |  |
| `CREDIT_CARD` | core pattern (validated) | yes |  |
| `CUSTOM` | the runtime |  |  |
| `DEMOGRAPHIC` | field in `personal` |  |  |
| `DEVICE_ID` | field in `records` |  |  |
| `DIAGNOSIS` | field in `patient` |  |  |
| `DOB` | pattern in `personal`; field in `personal` |  |  |
| `EMAIL` | core pattern; field in `personal` | yes | yes |
| `EVENT` | entity engine | yes |  |
| `FAC` | entity engine | yes | yes |
| `FIGURE` | the runtime |  |  |
| `FINANCIAL` | field in `finance` |  |  |
| `GEO` | pattern in `records`; field in `records` |  |  |
| `GITHUB_TOKEN` | pattern in `secrets` |  |  |
| `GOOGLE_API_KEY` | pattern in `secrets` |  |  |
| `GPE` | entity engine | yes | yes |
| `HOST` | field in `cloud` |  |  |
| `IBAN` | core pattern (validated) | yes |  |
| `ICD10` | pattern in `patient` |  |  |
| `IMEI` | pattern in `records` |  |  |
| `INSURANCE_ID` | field in `patient` |  |  |
| `IPV4` | core pattern (validated) | yes |  |
| `IPV6` | core pattern | yes |  |
| `JOB` | field in `addressbook` |  |  |
| `JWT` | core pattern | yes |  |
| `LANGUAGE` | entity engine | yes |  |
| `LAW` | entity engine | yes |  |
| `LOC` | entity engine | yes | yes |
| `LOCATION` | field in `addressbook` |  |  |
| `MAC` | core pattern | yes |  |
| `MAIL_PARTY` | field in `email` |  |  |
| `MAIL_ROUTE` | field in `email` |  |  |
| `MEDICATION` | field in `patient` |  |  |
| `MESSAGE_ID` | pattern in `email`; field in `email` |  |  |
| `MISC` | entity engine (on request) |  |  |
| `MRN` | pattern in `patient`; field in `patient` |  |  |
| `NATIONAL_ID` | field in `personal` |  |  |
| `NHS_NUMBER` | pattern in `patient`; field in `patient` |  |  |
| `NINO` | pattern in `personal` |  |  |
| `NORP` | entity engine | yes |  |
| `NOTE` | field in `addressbook` |  |  |
| `NPI` | pattern in `patient`; field in `patient` |  |  |
| `ORG` | field in `addressbook`; entity engine | yes | yes |
| `OUTPUT` | the runtime |  |  |
| `PATH` | the runtime |  |  |
| `PERSON` | field in `personal`; entity engine | yes | yes |
| `PHONE` | core pattern (validated); field in `personal` | yes | yes |
| `PRIVATE_KEY` | core pattern | yes |  |
| `PRIVATE_KEY_BLOCK` | pattern in `secrets` |  |  |
| `PRODUCT` | entity engine | yes |  |
| `PROFILE` | field in `addressbook` |  |  |
| `RECORD_ID` | field in `records` |  |  |
| `ROUTING_NUMBER` | pattern in `finance` |  |  |
| `SECRET` | field in `secrets` |  |  |
| `SLACK_TOKEN` | pattern in `secrets` |  |  |
| `SORT_CODE` | pattern in `finance` |  |  |
| `SSN_US` | core pattern (validated) | yes |  |
| `STRIPE_KEY` | pattern in `secrets` |  |  |
| `TAX_ID` | field in `finance` |  |  |
| `TAX_ID_DE` | pattern in `de`; field in `de` |  |  |
| `TCKN` | pattern in `personal` |  |  |
| `TITLE_CASE` | core pattern (validated) |  |  |
| `UK_POSTCODE` | pattern in `addressbook` |  |  |
| `URL` | core pattern | yes | yes |
| `URL_CREDENTIALS` | pattern in `secrets` |  |  |
| `VCARD` | field in `addressbook` |  |  |
| `VEHICLE_PLATE` | field in `vehicle` |  |  |
| `VIN` | pattern in `vehicle`; field in `vehicle` |  |  |
| `WORK_OF_ART` | entity engine | yes |  |

## The guarantees, in plain words[#](#the-guarantees-in-plain-words "Link to this heading")

Nine core runtime invariants hold for every redaction, and the test suite and
probes measure them on randomised documents:

| Invariant | What it means for you |
| --- | --- |
| Round trip | restoring the redacted text gives back exactly the original, as long as the original contained no literal placeholder of the active grammar |
| No leakage | no detected value survives in the redacted text |
| Determinism | the same text and policy give byte-identical output in any process |
| Statelessness | one [`Redactor`](../../modules/generated/scikitplot.cleanprompt.Redactor.html#scikitplot.cleanprompt.Redactor "scikitplot.cleanprompt.Redactor") can process many documents; they never affect each other’s numbering |
| Disjointedness | resolved spans never overlap |
| Detector purity | no detector reads rewritten text (the detection view is a reading of the original, mapped back, not a rewrite) |
| Idempotence | redacting already-redacted text finds nothing new |
| Bounded | input size, span count and pattern count are limited by the policy; exceeding a limit raises, it never truncates silently |
| Value identity | equal values get one label; different values never share one |

These are guarantees about ****detected values****. They do not make an inactive
detector detect anything; see [What it protects, and what it does not](security_and_limits.html#cleanprompt-security).