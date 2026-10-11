> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cleanprompt-plot-cleanprompt-moderate-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle[#](#cleanprompt-moderate-policies-entities-and-the-vault-s-lifecycle "Link to this heading")

Three things separate a first use of this submodule from a considered one:

1. ****What gets looked for.**** A policy is data, and a profile is a named bundle
   of it. Widening the policy is how you stop missing things; narrowing it is
   how you stop false positives.
2. ****What a regular expression cannot find.**** No pattern recognises a person’s
   name. Two optional entity engines can, they disagree with each other, and
   knowing **how** they disagree is the point of this section.
3. ****Where the removed values live, and for how long.**** The vault is the part
   that persists, and most operational mistakes are about it.

This example runs on a bare installation. The entity sections report a specific
`SKIP` when their engine is absent and the rest continues.

Every value below is reserved and cannot reach anybody.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import json
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

_WORKSPACE = tempfile.TemporaryDirectory(prefix="scikitplot-cleanprompt-moderate-")
_HOME = Path(_WORKSPACE.name)
_VAULT = _HOME / "vault.json"

os.environ["CLEANPROMPT_VAULT"] = str(_VAULT)


def _cli() -> list[str]:
    executable = shutil.which("scikitplot")
    if executable:
        return [executable, "cleanprompt"]
    return [sys.executable, "-m", "scikitplot.cleanprompt"]


CLI = _cli()


def run(*arguments: str, limit: int = 0) -> subprocess.CompletedProcess:
    """Run one CLI command and show both streams, with paths masked."""
    completed = subprocess.run(
        [*CLI, *arguments], input="", capture_output=True, text=True
    )
    shown = " ".join(
        ('"{0}"'.format(one) if " " in one else one).replace(
            _WORKSPACE.name, "<workspace>"
        )
        for one in arguments
    )
    print("$ cleanprompt", shown)
    for label, stream in (("out", completed.stdout), ("err", completed.stderr)):
        if not stream:
            continue
        lines = stream.replace(_WORKSPACE.name, "<workspace>").rstrip("\n").split("\n")
        if limit and len(lines) > limit:
            lines = lines[:limit] + ["... ({0} more)".format(len(lines) - limit)]
        print("  {0} │ {1}".format(label, "\n      │ ".join(lines)))
    print("  exit │", completed.returncode)
    return completed


SAMPLE = (
    "Marion Holt at Northwind Logistics in Ankara mailed ada@example.com "
    "from 192.0.2.10 about card 4242 4242 4242 4242; call +1 555 0142."
)

print(SAMPLE)

```
```
Marion Holt at Northwind Logistics in Ankara mailed ada@example.com from 192.0.2.10 about card 4242 4242 4242 4242; call +1 555 0142.

```

## 1. A policy is data[#](#a-policy-is-data "Link to this heading")

[`RedactionPolicy`](../../modules/generated/scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt.RedactionPolicy") is a frozen dataclass, and
[`evolve`](../../modules/generated/scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy.evolve "scikitplot.cleanprompt.RedactionPolicy.evolve") returns a new one rather than mutating the one
you hold. Two policies with the same fields have the same fingerprint, in
this process and in the next one, which is what makes a redaction
reproducible.

```
from scikitplot.cleanprompt import DEFAULT_POLICY, Redactor, restore  # noqa: E402

narrow = DEFAULT_POLICY.evolve(kinds=("EMAIL", "PHONE"))
wide = DEFAULT_POLICY.evolve(case_insensitive=True)

for name, policy in (("default", DEFAULT_POLICY), ("narrow", narrow), ("wide", wide)):
    outcome = Redactor(policy=policy).redact(SAMPLE)
    print(
        "{0:<8} {1}  kinds={2}".format(
            name, policy.fingerprint, len(policy.kinds) if policy.kinds else "all"
        )
    )
    print("         ", outcome.text)

```
```
default  33ad5234bfede14e  kinds=all
          Marion Holt at Northwind Logistics in Ankara mailed [EMAIL-1] from [IPV4-1] about card [CREDIT_CARD-1]; call [PHONE-1].
narrow   46b3972142b5c3fc  kinds=2
          Marion Holt at Northwind Logistics in Ankara mailed [EMAIL-1] from 192.0.2.10 about card [PHONE-1] 4242; call [PHONE-2].
wide     7722752f7bf922b6  kinds=all
          Marion Holt at Northwind Logistics in Ankara mailed [EMAIL-1] from [IPV4-1] about card [CREDIT_CARD-1]; call [PHONE-1].

```

Look at what `narrow` did to the card number before reading on:

```
about card [PHONE-1] 4242; call [PHONE-2]

```

Turning `CREDIT_CARD` off did not leave the card alone. It let the
`PHONE` pattern match a **fragment** of it, and a fragment is worse than
nothing: the tool reports success, the summary says two values were removed,
and four digits of a card number go to the model anyway.

This is the argument against narrowing a policy to “the kinds I care about”.
The kinds are not independent — a longer, higher-priority pattern normally
wins the overlap, and removing it promotes whatever was underneath. Narrow a
policy only with `inspect` in front of you, and prefer `--allow` to
exempt a specific surface over `--kinds` to switch a category off.

## 2. Profiles: named bundles of the same data[#](#profiles-named-bundles-of-the-same-data "Link to this heading")

The command line takes `--profile` instead of a policy object. Three are
built in, and they differ in exactly one dimension each — which kinds are
enabled, and whether case is significant.

`minimal`
:   `EMAIL`, `PHONE`, `URL`. For text you mostly trust.

`balanced` **(default)**
:   every pattern that is on by default: twelve of the thirteen.

`strict`
:   the same, plus `TITLE_CASE`, and case-insensitive matching.
    `TITLE_CASE` finds runs of capitalised words without needing spaCy, at
    the cost of false positives — which is exactly the trade you want when
    the alternative is sending a name to a model.

```
for profile in ("minimal", "balanced", "strict"):
    run("inspect", "--profile", profile, "--format", "json", SAMPLE, limit=3)

```
```
$ cleanprompt inspect --profile minimal --format json "Marion Holt at Northwind Logistics in Ankara mailed ada@example.com from 192.0.2.10 about card 4242 4242 4242 4242; call +1 555 0142."
  out │ {
      │   "outcome": "warning",
      │   "headline": "redacted 3 value(s): EMAIL=1, PHONE=2",
      │ ... (149 more)
  exit │ 0
$ cleanprompt inspect --profile balanced --format json "Marion Holt at Northwind Logistics in Ankara mailed ada@example.com from 192.0.2.10 about card 4242 4242 4242 4242; call +1 555 0142."
  out │ {
      │   "outcome": "warning",
      │   "headline": "redacted 4 value(s): CREDIT_CARD=1, EMAIL=1, IPV4=1, PHONE=1",
      │ ... (153 more)
  exit │ 0
$ cleanprompt inspect --profile strict --format json "Marion Holt at Northwind Logistics in Ankara mailed ada@example.com from 192.0.2.10 about card 4242 4242 4242 4242; call +1 555 0142."
  out │ {
      │   "outcome": "warning",
      │   "headline": "redacted 6 value(s): CREDIT_CARD=1, EMAIL=1, IPV4=1, PHONE=1, TITLE_CASE=2",
      │ ... (135 more)
  exit │ 0

```

The difference is visible in the redaction itself: `strict` catches the name
and the company that the others cannot.

```
for profile in ("balanced", "strict"):
    result = run("encode", "--quiet", "--vault-mode", "overwrite", "--profile", profile, SAMPLE)
    print("   {0:<9} {1}".format(profile, result.stdout.strip()))

```
```
$ cleanprompt encode --quiet --vault-mode overwrite --profile balanced "Marion Holt at Northwind Logistics in Ankara mailed ada@example.com from 192.0.2.10 about card 4242 4242 4242 4242; call +1 555 0142."
  out │ Marion Holt at Northwind Logistics in Ankara mailed [EMAIL-1] from [IPV4-1] about card [CREDIT_CARD-1]; call [PHONE-1].
  exit │ 0
   balanced  Marion Holt at Northwind Logistics in Ankara mailed [EMAIL-1] from [IPV4-1] about card [CREDIT_CARD-1]; call [PHONE-1].
$ cleanprompt encode --quiet --vault-mode overwrite --profile strict "Marion Holt at Northwind Logistics in Ankara mailed ada@example.com from 192.0.2.10 about card 4242 4242 4242 4242; call +1 555 0142."
  out │ [TITLE_CASE-1] at [TITLE_CASE-2] in Ankara mailed [EMAIL-1] from [IPV4-1] about card [CREDIT_CARD-1]; call [PHONE-1].
  exit │ 0
   strict    [TITLE_CASE-1] at [TITLE_CASE-2] in Ankara mailed [EMAIL-1] from [IPV4-1] about card [CREDIT_CARD-1]; call [PHONE-1].

```

## 3. What a regular expression cannot do[#](#what-a-regular-expression-cannot-do "Link to this heading")

`TITLE_CASE` is a blunt instrument: it finds capitalised runs, which
includes names and also includes the first word of a sentence. For real
entity detection there are two optional engines, and they are genuinely
different tools rather than two spellings of one.

| Mode | Engine | Character |
| --- | --- | --- |
| `spacy` | statistical models | many languages, better quality, needs a model download |
| `nltk` | the classic chunker | English only, needs four data packages, no model to download |
| `both` | union of the two | widest cover; overlaps are arbitrated by the policy |
| `auto` | spaCy, else NLTK | the default; use it unless you have a reason |
| `none` | patterns only | explicit, so it cannot be mistaken for a failed engine |

```
from scikitplot.cleanprompt import build_detectors, describe_engines  # noqa: E402
from scikitplot.cleanprompt._exceptions import CapabilityError  # noqa: E402

engines = describe_engines(language="en", mode="auto", check_assets=True)

for name, report in engines["engines"].items():
    print(
        "{0:<6} installed={1!s:<5} data={2!s:<5} ready={3!s:<5} {4}".format(
            name,
            report["installed"],
            report["assets_ready"],
            report["ready"],
            report["remedy"] or report["summary"],
        )
    )
print("auto would run:", engines["selected"] or "(nothing ready)")

```
```
spacy  installed=True  data=True  ready=True  statistical models, many languages, best quality
nltk   installed=True  data=True  ready=True  classic chunker, English only, small download
auto would run: ['spacy']

```

****Installed is not ready.**** An engine needs three things: its package, a
language it can read, and its data — a spaCy **model**, or NLTK’s **data
packages**. The commonest way entity detection fails is the package without
the data, so the report shows the three separately and, where one is missing,
the one command that supplies it. `auto` picks only an engine that is
ready; `doctor` reports the same thing from the command line:

```
python -m scikitplot.cleanprompt doctor --ner --format json

```

and its `detection.ner_ready` and `detection.ner_remedy` fields are the
ones to read.

The same sentence, through each mode that is ready here. Where an engine is
not, the mode reports a specific `SKIP` — with the remedy — rather than
quietly falling back: a redaction that found nothing must never look like one
that found nothing to find.

`build_detectors(required=True)` is the check: it refuses an engine whose
package, language or data is missing, **before** any text is read, and it is
the same function `doctor`, `inspect`, [`encode`](../../modules/generated/scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode") and the web app
use, so they cannot disagree. The `try` still wraps the detection as well,
because a model that is present can still fail to load — a damaged download,
say — and an example must not crash a documentation build over that.

```
from scikitplot.cleanprompt import encode  # noqa: E402

for mode in ("none", "spacy", "nltk", "both"):
    try:
        build_detectors(mode=mode, language="en", required=(mode != "none"))
        outcome = encode(SAMPLE, ner=(mode != "none"), engine=mode)
    except CapabilityError as exc:
        print("[SKIP] {0:<6} {1}".format(mode, exc.install_hint or str(exc)[:96]))
        continue
    print("{0:<6} {1}".format(mode, outcome.text))

```
```
none   Marion Holt at Northwind Logistics in Ankara mailed [EMAIL-1] from [IPV4-1] about card [CREDIT_CARD-1]; call [PHONE-1].
spacy  [ORG-1] at [ORG-2] in [GPE-1] mailed [EMAIL-1] from [IPV4-1] about card [CREDIT_CARD-1]; call [PHONE-1].
nltk   [PERSON-1] [ORG-1] at [FAC-1] in [GPE-1] mailed [EMAIL-1] from [IPV4-1] about card [CREDIT_CARD-1]; call [PHONE-1].
both   [ORG-1] at [ORG-2] in [GPE-1] mailed [EMAIL-1] from [IPV4-1] about card [CREDIT_CARD-1]; call [PHONE-1].

```

If `both` reported a `SKIP` above while `spacy` worked, that is the
design rather than a defect. `both` means both, and an engine that cannot
run is reported instead of dropped: silently continuing with half the
requested cover is how a redaction comes back looking successful having never
looked for the thing you were worried about. Ask for `auto` when you want
“whichever is available”.

Read that output carefully rather than picking a winner. On this sentence
the two engines disagree about what “Marion Holt” is — one labels it a
person, the other an organisation — and `both` inherits whichever span wins
the overlap arbitration.

The label is not the point. What matters is that the value left the text in
every case, and that the label is **stable**, so restoration puts the same
value back regardless of which engine was right about the category.

## 4. Other languages[#](#other-languages "Link to this heading")

spaCy carries models for many languages; `--lang` selects one and
`--model-size` chooses between `sm`, `md`, `lg` and `trf`. The
model is resolved before anything is loaded, so an unavailable combination
fails with a name and an install command rather than a traceback.

```
from scikitplot.cleanprompt import (  # noqa: E402
    installed_models,
    resolve_model,
    supported_languages,
)

print("languages with a model mapping:", len(supported_languages()))
print(" ", ", ".join(supported_languages()))
print()
print("installed right now:", installed_models() or "(none)")
print()

for language, size in (("en", "sm"), ("de", "sm"), ("ja", "sm"), ("fr", "lg")):
    model, detail = resolve_model(language=language, size=size)
    print(
        "{0} {1:<3} -> {2:<22} fallback={3}".format(
            language, size, model, detail["fallback"]
        )
    )

```
```
languages with a model mapping: 24
  ca, da, de, el, en, es, fi, fr, hr, it, ja, ko, lt, mk, nb, nl, pl, pt, ro, ru, sl, sv, uk, zh

installed right now: {'en_core_web_sm': '3.8.0'}

en sm  -> en_core_web_sm         fallback=False
de sm  -> de_core_news_sm        fallback=False
ja sm  -> ja_core_news_sm        fallback=False
fr lg  -> fr_core_news_lg        fallback=False

```

A language whose model is not installed is reported, not guessed at:

```
run("doctor", "--lang", "de", "--format", "json", limit=4)

```
```
$ cleanprompt doctor --lang de --format json
  out │ {
      │   "headline": "12 structural detectors are active. Names, organisations and places are NOT being detected.",
      │   "healthy": false,
      │   "tiers": {
      │ ... (238 more)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'doctor', '--lang', 'de', '--format', 'json'], returncode=0, stdout='{\n  "headline": "12 structural detectors are active. Names, organisations and places are NOT being detected.",\n  "healthy": false,\n  "tiers": {\n    "ner": {\n      "status": "AVAILABLE",\n      "available": true,\n      "distribution": "spacy",\n      "version": "3.8.16",\n      "supported": "spacy>=3.4,<5",\n      "detail": "spacy 3.8.16 satisfies spacy>=3.4,<5",\n      "install_hint": "pip install \\"spacy>=3.4,<5\\"",\n      "purpose": "named-entity detection"\n    },\n    "nltk": {\n      "status": "AVAILABLE",\n      "available": true,\n      "distribution": "nltk",\n      "version": "3.10.3",\n      "supported": "nltk>=3.6,<4",\n      "detail": "nltk 3.10.3 satisfies nltk>=3.6,<4",\n      "install_hint": "pip install \\"nltk>=3.6,<4\\"",\n      "purpose": "named-entity detection without spaCy (English only)"\n    },\n    "web": {\n      "status": "AVAILABLE",\n      "available": true,\n      "distribution": "flask",\n      "version": "3.1.3",\n      "supported": "flask>=2.2,<4",\n      "detail": "flask 3.1.3 satisfies flask>=2.2,<4",\n      "install_hint": "pip install \\"flask>=2.2,<4\\"",\n      "purpose": "the local web interface"\n    },\n    "crypto": {\n      "status": "AVAILABLE",\n      "available": true,\n      "distribution": "cryptography",\n      "version": "50.0.2",\n      "supported": "cryptography>=41",\n      "detail": "cryptography 50.0.2 satisfies cryptography>=41",\n      "install_hint": "pip install \\"cryptography>=41\\"",\n      "purpose": "the Fernet vault cipher (--cipher fernet); encryption itself needs no tier"\n    }\n  },\n  "detection": {\n    "active_kinds": [\n      "AWS_ACCESS_KEY",\n      "CREDIT_CARD",\n      "EMAIL",\n      "IBAN",\n      "IPV4",\n      "IPV6",\n      "JWT",\n      "MAC",\n      "PHONE",\n      "PRIVATE_KEY",\n      "SSN_US",\n      "URL"\n    ],\n    "inactive_kinds": [\n      "TITLE_CASE"\n    ],\n    "ner_active": false,\n    "ner_requested": false,\n    "ner_ready": false,\n    "ner_error": null,\n    "ner_remedy": null,\n    "total_patterns": 13\n  },\n  "blind_spots": [\n    {\n      "category": "Names, organisations, places and other named entities",\n      "reason": "named-entity detection is not running, and no regular expression can recognise a person\'s name",\n      "remedy": "spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)",\n      "examples": [\n        "a person\'s full name",\n        "a company or institution",\n        "a city or country"\n      ],\n      "severity": "high"\n    },\n    {\n      "category": "Capitalised multi-word names (partial cover)",\n      "reason": "the TITLE_CASE pattern is available but not enabled; it finds runs of capitalised words without needing spaCy, at the cost of false positives",\n      "remedy": "add TITLE_CASE to the detection kinds (--kinds ... TITLE_CASE), or use --suggest to review candidates and hide them explicitly",\n      "examples": [\n        "Mustafa Kemal",\n        "Acme Corporation"\n      ],\n      "severity": "medium"\n    },\n    {\n      "category": "Disabled structural patterns",\n      "reason": "1 built-in pattern(s) are not enabled: TITLE_CASE",\n      "remedy": "drop --kinds to enable every built-in pattern",\n      "examples": [\n        "TITLE_CASE"\n      ],\n      "severity": "medium"\n    }\n  ],\n  "entity_engines": {\n    "mode": "auto",\n    "language": "de",\n    "selected": [],\n    "ready": true,\n    "engines": {\n      "spacy": {\n        "installed": true,\n        "language_supported": true,\n        "assets_checked": true,\n        "assets_ready": false,\n        "ready": false,\n        "status": "MISCONFIGURED",\n        "reason": "spaCy is installed but model \'de_core_news_sm\' is not",\n        "remedy": "python -m spacy download de_core_news_sm",\n        "model": "de_core_news_sm",\n        "missing": [],\n        "version": "3.8.16",\n        "usable": false,\n        "languages": [\n          "*"\n        ],\n        "needs_model": true,\n        "summary": "statistical models, many languages, best quality",\n        "install_hint": "pip install \\"spacy>=3.4,<5\\"",\n        "detail": "spaCy is installed but model \'de_core_news_sm\' is not"\n      },\n      "nltk": {\n        "installed": true,\n        "language_supported": false,\n        "assets_checked": false,\n        "assets_ready": null,\n        "ready": false,\n        "status": "MISCONFIGURED",\n        "reason": "nltk does not support language \'de\'; it handles en",\n        "remedy": "choose another engine for \'de\' (--ner-engine spacy)",\n        "model": null,\n        "missing": [],\n        "version": "3.10.3",\n        "usable": false,\n        "languages": [\n          "en"\n        ],\n        "needs_model": true,\n        "summary": "classic chunker, English only, small download",\n        "install_hint": "pip install \\"nltk>=3.6,<4\\"",\n        "detail": "nltk does not support language \'de\'; it handles en"\n      }\n    },\n    "canonical_labels": [\n      "PERSON",\n      "ORG",\n      "GPE",\n      "LOC",\n      "FAC",\n      "NORP",\n      "EVENT",\n      "WORK_OF_ART",\n      "PRODUCT",\n      "LAW",\n      "LANGUAGE",\n      "MISC"\n    ]\n  },\n  "nltk_corpora": {\n    "checked": false\n  },\n  "languages": {\n    "requested": "de",\n    "supported": true,\n    "model": "de_core_news_sm",\n    "model_installed": false,\n    "model_version": null,\n    "install_hint": "python -m spacy download de_core_news_sm",\n    "resolution": {\n      "language": "de",\n      "requested_size": "sm",\n      "resolved_size": "sm",\n      "fallback": false\n    },\n    "installed_models": {\n      "en_core_web_sm": "3.8.0"\n    },\n    "supported_languages": {\n      "ca": "Catalan",\n      "da": "Danish",\n      "de": "German",\n      "el": "Greek",\n      "en": "English",\n      "es": "Spanish",\n      "fi": "Finnish",\n      "fr": "French",\n      "hr": "Croatian",\n      "it": "Italian",\n      "ja": "Japanese",\n      "ko": "Korean",\n      "lt": "Lithuanian",\n      "mk": "Macedonian",\n      "nb": "Norwegian Bokmal",\n      "nl": "Dutch",\n      "pl": "Polish",\n      "pt": "Portuguese",\n      "ro": "Romanian",\n      "ru": "Russian",\n      "sl": "Slovenian",\n      "sv": "Swedish",\n      "uk": "Ukrainian",\n      "zh": "Chinese"\n    }\n  },\n  "configuration": {\n    "profile": null,\n    "config_file": null,\n    "ner_engine": "auto",\n    "language": "de",\n    "model_size": "sm",\n    "policy_fingerprint": "33ad5234bfede14e",\n    "grammar_fingerprint": "0e7c5e996585e57b",\n    "vault_path": "/tmp/scikitplot-cleanprompt-moderate-dxbyi0gx/vault.json",\n    "vault_exists": true,\n    "case_insensitive": false,\n    "overlap": "LONGEST_WINS",\n    "allow": [],\n    "limits": {\n      "max_input_chars": 1000000,\n      "max_spans": 100000,\n      "max_entries": 50000,\n      "max_literal_terms": 10000,\n      "max_literal_length": 4096\n    }\n  },\n  "environment": {\n    "python": "3.12.15",\n    "platform": "linux",\n    "cli_frontend": "click",\n    "vault_key_set": false,\n    "web_secret_key_set": false\n  },\n  "status": "degraded"\n}\n', stderr='')

```

## 5. The vault: where it lives[#](#the-vault-where-it-lives "Link to this heading")

A vault holds the removed values ****in clear text****. Its default location is
deliberately **not** the working directory — this tool runs inside checkouts,
and a vault beside the input file is one `git add .` from committing the
values you were trying not to send.

The resolution order is:

1. `--vault PATH`
2. `$CLEANPROMPT_VAULT`
3. `$XDG_STATE_HOME/cleanprompt/vault.json`
4. `~/.local/state/cleanprompt/vault.json` (`%LOCALAPPDATA%` on Windows)

The directory is created `0700` and the file `0600`. This example set
step 2 in its first cell, which is what every documentation build should do.

```
from scikitplot.cleanprompt._cli import default_vault_path  # noqa: E402

print("resolved here:", str(default_vault_path()).replace(_WORKSPACE.name, "<workspace>"))

```
```
resolved here: <workspace>/vault.json

```

## 6. The vault: append or overwrite[#](#the-vault-append-or-overwrite "Link to this heading")

The two modes answer two different questions, and the commands differ in
their defaults because they are used differently.

`encode` defaults to `append`
:   a conversation. A value keeps the label it was first given, and a reply
    quoting an earlier turn still restores.

`redact` defaults to `overwrite`
:   a scripted pass over a document. Each run starts clean, which is what a
    reproducible pipeline needs.

```
run("forget", "--force")
run("encode", "--quiet", "mail ada@example.com")
run("encode", "--quiet", "ada@example.com again, plus bob@example.com")

print()
print("the vault after two appends:")
print(
    json.dumps(
        json.loads(_VAULT.read_text(encoding="utf-8"))["entries"],
        indent=2,
        sort_keys=True,
    )
)

```
```
$ cleanprompt forget --force
  err │ deleted <workspace>/vault.json
      │   it held 6 value(s): CREDIT_CARD=1, EMAIL=1, IPV4=1, PHONE=1, TITLE_CASE=2
      │   note: this unlinks the file. On a journalling filesystem or an SSD the bytes may survive; use --encrypt with a key you hold for values that must not be recoverable.
  exit │ 0
$ cleanprompt encode --quiet "mail ada@example.com"
  out │ mail [EMAIL-1]
  exit │ 0
$ cleanprompt encode --quiet "ada@example.com again, plus bob@example.com"
  out │ [EMAIL-1] again, plus [EMAIL-2]
  exit │ 0

the vault after two appends:
{
  "[EMAIL-1]": "ada@example.com",
  "[EMAIL-2]": "bob@example.com"
}

```

`--vault-mode overwrite` on the same command starts again, and `ada` is
renumbered from one because nothing was carried over.

```
run("encode", "--quiet", "--vault-mode", "overwrite", "only bob@example.com")
print()
print("after overwrite:", json.loads(_VAULT.read_text(encoding="utf-8"))["entries"])

```
```
$ cleanprompt encode --quiet --vault-mode overwrite "only bob@example.com"
  out │ only [EMAIL-1]
  exit │ 0

after overwrite: {'[EMAIL-1]': 'bob@example.com'}

```

## 7. The vault: what is inside it[#](#the-vault-what-is-inside-it "Link to this heading")

Format 2 records the entries ****and**** an index of label/kind/ordinal. The
index is what makes append possible: without it, a second run would renumber
from `[EMAIL-1]` while the existing vault already used that label for
something else, and restoration would return the wrong person’s address.

A format-1 vault has no index, so appending to one is refused rather than
merged. It still restores normally — the refusal stays narrow.

```
document = json.loads(_VAULT.read_text(encoding="utf-8"))

print("format             :", document["format"])
print("encrypted          :", document["encrypted"])
print("grammar fingerprint:", document["grammar_fingerprint"])
print("policy fingerprint :", document["policy_fingerprint"])
print("index              :", document["index"])

```
```
format             : 2
encrypted          : False
grammar fingerprint: 0e7c5e996585e57b
policy fingerprint : 33ad5234bfede14e
index              : [{'kind': 'EMAIL', 'label': '[EMAIL-1]', 'ordinal': 1}]

```

## 8. Ending a conversation[#](#ending-a-conversation "Link to this heading")

`forget` is the counterpart to `encode`’s accumulation. Without
`--force` it is a dry run, and it is honest about what deleting a file does
and does not guarantee.

```
run("forget")
run("forget", "--force")

```
```
$ cleanprompt forget
  err │ would delete <workspace>/vault.json
      │   it held 1 value(s): EMAIL=1
      │   re-run with --force to delete it
  exit │ 0
$ cleanprompt forget --force
  err │ deleted <workspace>/vault.json
      │   it held 1 value(s): EMAIL=1
      │   note: this unlinks the file. On a journalling filesystem or an SSD the bytes may survive; use --encrypt with a key you hold for values that must not be recoverable.
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'forget', '--force'], returncode=0, stdout='', stderr='deleted /tmp/scikitplot-cleanprompt-moderate-dxbyi0gx/vault.json\n  it held 1 value(s): EMAIL=1\n  note: this unlinks the file. On a journalling filesystem or an SSD the bytes may survive; use --encrypt with a key you hold for values that must not be recoverable.\n')

```

## 9. Surrogates: a stand-in that reads as prose[#](#surrogates-a-stand-in-that-reads-as-prose "Link to this heading")

`[PERSON-1]` is unmistakable, which is its virtue and its cost: bracket
tokens are exactly the thing a model is most likely to rewrite, and some
models handle a sentence full of them badly.

`--style surrogate` substitutes an invented but ordinary-looking value for
the kinds where one is safe, and keeps the placeholder for the kinds where it
is not.

```
from scikitplot.cleanprompt import TagStyle  # noqa: E402

surrogate = DEFAULT_POLICY.evolve(tag_style=TagStyle(style="surrogate"))

plain = Redactor().redact(SAMPLE, extra_terms=["Marion Holt"], extra_kind="PERSON")
fancy = Redactor(policy=surrogate).redact(
    SAMPLE, extra_terms=["Marion Holt"], extra_kind="PERSON"
)

print("placeholder:", plain.text)
print()
print("surrogate  :", fancy.text)

```
```
placeholder: [PERSON-1] at Northwind Logistics in Ankara mailed [EMAIL-1] from [IPV4-1] about card [CREDIT_CARD-1]; call [PHONE-1].

surrogate  : Devin Nakamura at Northwind Logistics in Ankara mailed devin.nakamura@example.invalid from [IPV4-1] about card [CREDIT_CARD-1]; call +1 555 0100.

```

Note which kinds kept their placeholder. A plausible-looking card number or
access key is a hazard rather than a convenience: a person could act on it,
or a system could. Names, organisations, places, addresses, telephone
numbers and URLs get a stand-in; credentials do not.

The generated contact details are reserved forms and cannot reach anybody —
`example.invalid` is reserved permanently by [****RFC 2606****](https://datatracker.ietf.org/doc/html/rfc2606.html) and the telephone
numbers come from the North American fiction block.

A stand-in is chosen from a fixed list by its ****ordinal****, never from the
value it replaces, and it is never one that would show a value the text
holds. The first invented person, **Marion Holt**, was skipped because the
sentence really contains a Marion Holt. The first invented address,
`marion.holt@example.invalid`, was skipped for the same reason: written
with a dot it is still that name (`CP-105`; before round 26 only a
one-word name was caught this way). Both moved on to the next entry, which
is why the person and the address now share it.

The round trip is exact either way:

```
from scikitplot.cleanprompt._surrogates import surrogate_for  # noqa: E402

print("surrogate round trip:", restore(fancy.text, fancy.vault, policy=surrogate).text == SAMPLE)
assert restore(fancy.text, fancy.vault, policy=surrogate).text == SAMPLE

print(
    "same stand-in for any value at EMAIL ordinal 1:",
    surrogate_for("EMAIL", 1) == surrogate_for("EMAIL", 1),
)
print("no original value in the surrogate text:", "ada@example.com" not in fancy.text)
assert "ada@example.com" not in fancy.text

```
```
surrogate round trip: True
same stand-in for any value at EMAIL ordinal 1: True
no original value in the surrogate text: True

```

The style is part of the ****grammar****, not of the wider policy, so a vault
written in one style cannot be read as the other. That is deliberate: the
two produce entirely different stand-ins for the same value.

```
from scikitplot.cleanprompt import PolicyError  # noqa: E402

try:
    restore(fancy.text, fancy.vault, policy=DEFAULT_POLICY)
except PolicyError as exc:
    print("cross-style restore refused:", str(exc)[:90])

```
```
cross-style restore refused: this vault was issued under placeholder grammar 1a85d3ad0a8a8e6f but restoration was asked

```

On the command line, `decode` reads the style back out of the vault, so a
surrogate conversation needs no extra argument on the way home.

```
run("encode", "--quiet", "--vault-mode", "overwrite", "--style", "surrogate", "Mail ada@example.com")
run("decode", "I wrote to marion.holt@example.invalid.")

```
```
$ cleanprompt encode --quiet --vault-mode overwrite --style surrogate "Mail ada@example.com"
  out │ Mail marion.holt@example.invalid
  exit │ 0
$ cleanprompt decode "I wrote to marion.holt@example.invalid."
  out │ I wrote to ada@example.com.
  err │ restored 1 placeholder(s)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'decode', 'I wrote to marion.holt@example.invalid.'], returncode=0, stdout='I wrote to ada@example.com.\n', stderr='restored 1 placeholder(s)\n')

```

### Your own invented names[#](#your-own-invented-names "Link to this heading")

The built-in names are English-sounding. A ****surrogate set**** supplies your
own lists, for a language or a fictional cast your team recognises. The set
can change only names: e-mail addresses, telephone numbers and links keep
their reserved forms, and credentials keep placeholders. The vault records
the set by its identity (`name@version#digest`), so `decode` needs no
set file, and editing any entry gives a new identity.

```
from scikitplot.cleanprompt import load_surrogate_set  # noqa: E402

set_path = _HOME / "nordic.json"
set_path.write_text(
    json.dumps(
        {
            "name": "nordic",
            "version": 1,
            "summary": "Nordic-sounding invented names.",
            "kinds": {
                "PERSON": {
                    "first": ["Aino", "Eero", "Liv"],
                    "last": ["Halvorsen", "Lindgren", "Virtanen"],
                }
            },
        }
    ),
    encoding="utf-8",
)
nordic = load_surrogate_set(set_path)
print("set identity:", nordic.identity)

local = DEFAULT_POLICY.evolve(tag_style=TagStyle(style="surrogate", surrogate_set=nordic))
named = Redactor(policy=local).redact(SAMPLE, extra_terms=["Marion Holt"], extra_kind="PERSON")
print("with the set:", named.text)
assert restore(named.text, named.vault, policy=local).text == SAMPLE

# A set that tries to invent a contact form is refused, with the reason.
try:
    from scikitplot.cleanprompt import PackError  # noqa: E402

    set_path.write_text(
        json.dumps({"name": "bad", "version": 1, "summary": "x", "kinds": {"EMAIL": ["Aino"]}}),
        encoding="utf-8",
    )
    load_surrogate_set(set_path)
except PackError as exc:
    print("refused:", exc.problems[0][:72], "...")

```
```
set identity: nordic@1#a6d43cca8bda5762
with the set: Aino Halvorsen at Northwind Logistics in Ankara mailed devin.nakamura@example.invalid from [IPV4-1] about card [CREDIT_CARD-1]; call +1 555 0100.
refused: kinds.EMAIL: e-mail addresses, telephone numbers and links are always bu ...

```

## 10. Cleanup[#](#cleanup "Link to this heading")

```
run("forget", "--force")

os.environ.pop("CLEANPROMPT_VAULT", None)
_WORKSPACE.cleanup()

print("Temporary workspace cleaned:", not Path(_WORKSPACE.name).exists())

```
```
$ cleanprompt forget --force
  err │ deleted <workspace>/vault.json
      │   it held 1 value(s): EMAIL=1
      │   note: this unlinks the file. On a journalling filesystem or an SSD the bytes may survive; use --encrypt with a key you hold for values that must not be recoverable.
  exit │ 0
Temporary workspace cleaned: True

```

Tags: [model-workflow: cleanprompt](../../_tags/model-workflow-cleanprompt.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 19.534 seconds)

[![Launch binder](../../_images/binder_badge_logo3.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cleanprompt/plot_cleanprompt_moderate_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo3.svg)](../../lite/lab/index.html?path=auto_examples/cleanprompt/plot_cleanprompt_moderate_script.ipynb)

[`Download Jupyter notebook: plot_cleanprompt_moderate_script.ipynb`](../../_downloads/db1bea116e3ed3debc97163fdc9f1e3d/plot_cleanprompt_moderate_script.ipynb)

[`Download Python source code: plot_cleanprompt_moderate_script.py`](../../_downloads/f780847672ec420a7db1ac97eab7c26b/plot_cleanprompt_moderate_script.py)

[`Download zipped: plot_cleanprompt_moderate_script.zip`](../../_downloads/9ca671704942a3a6d4801c9e8db6c1b7/plot_cleanprompt_moderate_script.zip)

Related examples

![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases![](../../_images/sphx_glr_plot_cleanprompt_cli_usage_script_thumb.png)

[Cleanprompt on the Command Line: Single Commands and Edge Cases](plot_cleanprompt_cli_usage_script.html)

Cleanprompt on the Command Line: Single Commands and Edge Cases![](../../_images/sphx_glr_plot_cleanprompt_recipes_script_thumb.png)

[Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents](plot_cleanprompt_recipes_script.html)

Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)