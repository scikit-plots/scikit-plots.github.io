> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cleanprompt-plot-cleanprompt-cli-usage-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Cleanprompt on the Command Line: Single Commands and Edge Cases[#](#cleanprompt-on-the-command-line-single-commands-and-edge-cases "Link to this heading")

A reference for the command line, organised as **the ordinary form first, then
the things that bite**. The second half is the longer one, because the failures
a redaction tool can have at the shell are not evenly distributed: almost all
of them are about ****how the text gets in****.

The command line is reachable three ways, all the same code:

```
scikitplot cleanprompt doctor          # the project-wide CLI
python -m scikitplot.cleanprompt doctor
python -m scikitplot cleanprompt doctor

```

Two frontends parse it — `click` when installed, `argparse` otherwise — and
`--frontend` forces either. They are required to read a command line the same
way; this example asserts that rather than claiming it.

Exit codes, which is what a script actually consumes:

| Status | Meaning |
| --- | --- |
| `0` | the command did what it was asked |
| `1` | a handled error: no vault, unreadable file, wrong passphrase, `--strict` found a placeholder the vault does not hold |
| `2` | a usage error: unknown option, unknown command, an abbreviation |
| `3` | `scan` only: sensitive values were present |
| `69` | an optional tier is required and is not installed |
| `130` | interrupted |
| `141` | the reader closed the pipe, as `| head` does |

Every value printed below is reserved and cannot reach anybody.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

_WORKSPACE = tempfile.TemporaryDirectory(prefix="scikitplot-cleanprompt-cli-")
_HOME = Path(_WORKSPACE.name)
_VAULT = _HOME / "vault.json"

os.environ["CLEANPROMPT_VAULT"] = str(_VAULT)


def _cli() -> list[str]:
    """Return the command prefix that reaches this submodule's CLI."""
    executable = shutil.which("scikitplot")
    if executable:
        return [executable, "cleanprompt"]
    return [sys.executable, "-m", "scikitplot.cleanprompt"]


CLI = _cli()


def _mask(text: str) -> str:
    return text.replace(_WORKSPACE.name, "<workspace>")


def _echo(argument: str) -> str:
    single_line = _mask(argument).replace("\n", "⏎")
    if len(single_line) > 52:
        single_line = single_line[:49] + "..."
    if single_line == "" or " " in argument:
        return '"{0}"'.format(single_line)
    return single_line


def run(
    *arguments: str,
    stdin_text: str | None = None,
    limit: int = 0,
    expect: int | None = None,
) -> subprocess.CompletedProcess:
    """Run one CLI command and show the command, both streams and the status."""
    completed = subprocess.run(
        [*CLI, *arguments],
        input=stdin_text if stdin_text is not None else "",
        capture_output=True,
        text=True,
    )
    print("$ cleanprompt", " ".join(_echo(one) for one in arguments))
    for label, stream in (("out", completed.stdout), ("err", completed.stderr)):
        if not stream:
            continue
        lines = _mask(stream).rstrip("\n").split("\n")
        if limit and len(lines) > limit:
            lines = lines[:limit] + ["... ({0} more)".format(len(lines) - limit)]
        print("  {0} │ {1}".format(label, "\n      │ ".join(lines)))
    print("  exit │", completed.returncode)
    if expect is not None:
        assert completed.returncode == expect, "expected exit {0}".format(expect)
    return completed

```

## Part one — the ordinary forms[#](#part-one-the-ordinary-forms "Link to this heading")

### 1. The four ways to give it text[#](#the-four-ways-to-give-it-text "Link to this heading")

One command, four input routes. They exist because a shell is not a good
place to type a paragraph, and most of the edge cases later in this example
are somebody discovering that.

```
PROMPT = "Mail ada@example.com about the outage on 192.0.2.10."

```

****As an argument.**** Fine for short text. Quote it.

```
run("encode", "--quiet", "--vault-mode", "overwrite", PROMPT)

```
```
$ cleanprompt encode --quiet --vault-mode overwrite "Mail ada@example.com about the outage on 192.0.2.10."
  out │ Mail [EMAIL-1] about the outage on [IPV4-1].
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'encode', '--quiet', '--vault-mode', 'overwrite', 'Mail ada@example.com about the outage on 192.0.2.10.'], returncode=0, stdout='Mail [EMAIL-1] about the outage on [IPV4-1].\n', stderr='')

```

****From a file****, with `--in`. No quoting rules apply at all.

```
source = _HOME / "prompt.txt"
source.write_text(PROMPT, encoding="utf-8")

run("encode", "--quiet", "--vault-mode", "overwrite", "--in", str(source))

```
```
$ cleanprompt encode --quiet --vault-mode overwrite --in <workspace>/prompt.txt
  out │ Mail [EMAIL-1] about the outage on [IPV4-1].
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'encode', '--quiet', '--vault-mode', 'overwrite', '--in', '/tmp/scikitplot-cleanprompt-cli-7_bf2yvl/prompt.txt'], returncode=0, stdout='Mail [EMAIL-1] about the outage on [IPV4-1].\n', stderr='')

```

****From standard input****, with `--in -` or by omitting the text. This is
the route a pipeline uses.

```
run("encode", "--quiet", "--vault-mode", "overwrite", "--in", "-", stdin_text=PROMPT)

```
```
$ cleanprompt encode --quiet --vault-mode overwrite --in -
  out │ Mail [EMAIL-1] about the outage on [IPV4-1].
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'encode', '--quiet', '--vault-mode', 'overwrite', '--in', '-'], returncode=0, stdout='Mail [EMAIL-1] about the outage on [IPV4-1].\n', stderr='')

```

****From a heredoc****, which is standard input with the shell’s quoting turned
off entirely. This is the answer to “how do I paste a paragraph”:

```
cleanprompt encode --quiet <<'EOF'
Mail ada@example.com about the outage on 192.0.2.10.
It has (parentheses), $dollars, `backticks` and 'quotes'.
EOF

```

The quoted delimiter `<<'EOF'` is the load-bearing part: it stops the shell
expanding anything between the markers. Without the quotes, `$dollars`
becomes empty and `` `backticks` `` are executed.

```
AWKWARD = (
    "Mail ada@example.com about the outage on 192.0.2.10.\n"
    "It has (parentheses), $dollars, `backticks` and 'quotes'."
)

run("encode", "--quiet", "--vault-mode", "overwrite", stdin_text=AWKWARD)

```
```
$ cleanprompt encode --quiet --vault-mode overwrite
  out │ Mail [EMAIL-1] about the outage on [IPV4-1].
      │ It has (parentheses), $dollars, `backticks` and 'quotes'.
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'encode', '--quiet', '--vault-mode', 'overwrite'], returncode=0, stdout="Mail [EMAIL-1] about the outage on [IPV4-1].\nIt has (parentheses), $dollars, `backticks` and 'quotes'.\n", stderr='')

```

### 2. Where the output goes[#](#where-the-output-goes "Link to this heading")

The prompt goes to ****standard output****; every report, warning and summary
goes to ****standard error****. That split is the whole reason the command is
usable in a pipeline: `-q` silences the summary, and stdout carries nothing
but the text to paste.

```
bare = run("encode", "--quiet", "--vault-mode", "overwrite", PROMPT)

print()
print("stdout is exactly the prompt:", repr(bare.stdout))
print("stderr is empty under --quiet:", bare.stderr == "")

```
```
$ cleanprompt encode --quiet --vault-mode overwrite "Mail ada@example.com about the outage on 192.0.2.10."
  out │ Mail [EMAIL-1] about the outage on [IPV4-1].
  exit │ 0

stdout is exactly the prompt: 'Mail [EMAIL-1] about the outage on [IPV4-1].\n'
stderr is empty under --quiet: True

```

Without `-q` the same stdout is produced and the summary appears beside it.
Redirecting one does not affect the other:

```
cleanprompt encode --in draft.txt > clean.txt      # keep the summary on screen
cleanprompt encode --in draft.txt 2>/dev/null      # keep only the prompt
cleanprompt encode --in draft.txt | pbcopy         # straight to the clipboard
cleanprompt encode --in draft.txt --out clean.txt  # no shell redirection

```
```
run("encode", "--vault-mode", "overwrite", "--out", str(_HOME / "clean.txt"), PROMPT)
print("file written:", (_HOME / "clean.txt").read_text(encoding="utf-8").strip())

```
```
$ cleanprompt encode --vault-mode overwrite --out <workspace>/clean.txt "Mail ada@example.com about the outage on 192.0.2.10."
  err │ vault: <workspace>/vault.json (overwrite, 2 value(s))
      │ warning: Names, organisations, places and other named entities not detected
      │   spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)
  exit │ 0
file written: Mail [EMAIL-1] about the outage on [IPV4-1].

```

### 3. The commands, and when to reach for each[#](#the-commands-and-when-to-reach-for-each "Link to this heading")

`encode` and `decode` are the pair. The rest answer other questions.

```
run("kinds", limit=6)

```
```
$ cleanprompt kinds
  out │ kinds:
      │   AWS_ACCESS_KEY:
      │     intent: An AWS access key identifier, recognised by its documented four-character resource-type prefix and sixteen-character body.
      │     priority: 95
      │     enabled_by_default: yes
      │     validated: no
      │ ... (84 more)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'kinds'], returncode=0, stdout='kinds:\n  AWS_ACCESS_KEY:\n    intent: An AWS access key identifier, recognised by its documented four-character resource-type prefix and sixteen-character body.\n    priority: 95\n    enabled_by_default: yes\n    validated: no\n    confidence: 1.0\n  CREDIT_CARD:\n    intent: A payment card number in the common four-group layout. Luhn decides, so long order numbers and identifiers are not swept in.\n    priority: 90\n    enabled_by_default: yes\n    validated: yes\n    confidence: 1.0\n  EMAIL:\n    intent: An email address, following the RFC 5322 dot-atom local part and an RFC 1035 label-based domain. The top-level label is letters, digits or hyphen only; the upstream class \'[A-Z|a-z]\' admitted a literal pipe, which is defect CP-005.\n    priority: 80\n    enabled_by_default: yes\n    validated: no\n    confidence: 1.0\n  IBAN:\n    intent: An international bank account number. The structural shape alone is far too permissive, so the mod-97 checksum decides.\n    priority: 90\n    enabled_by_default: yes\n    validated: yes\n    confidence: 1.0\n  IPV4:\n    intent: A dotted-quad IPv4 address. The octet range is checked by a validator rather than by an unreadable alternation. The guards reject a longer dotted run such as \'1.2.3.4.5\' without rejecting an address at the end of a sentence: the trailing dot only disqualifies the match when a digit follows it (CP-028).\n    priority: 60\n    enabled_by_default: yes\n    validated: yes\n    confidence: 1.0\n  IPV6:\n    intent: An IPv6 address in its common full or partially compressed forms. Placed above IPv4 so that an embedded dotted quad is not split. The trailing dot is rejected only when something follows it, so an address ending a sentence is still found (CP-028).\n    priority: 65\n    enabled_by_default: yes\n    validated: no\n    confidence: 1.0\n  JWT:\n    intent: A JSON Web Token. Anchored on the base64 of \'{"\' so that an arbitrary three-part dotted identifier is not mistaken for one.\n    priority: 95\n    enabled_by_default: yes\n    validated: no\n    confidence: 1.0\n  MAC:\n    intent: A hardware (MAC) address in colon or hyphen notation. Ranked above IPV6 because the two shapes collide: six colon-separated pairs of hex digits is a valid IPv6 fragment and an exact MAC, and equal-length spans are arbitrated by priority.\n    priority: 70\n    enabled_by_default: yes\n    validated: no\n    confidence: 1.0\n  PHONE:\n    intent: A telephone number written with separators, or with an international prefix. A validator enforces a 7-to-15 digit count and rejects ISO-8601 dates, which the upstream expression matched (defect CP-013).\n    priority: 40\n    enabled_by_default: yes\n    validated: yes\n    confidence: 0.85\n  PRIVATE_KEY:\n    intent: A PEM-armoured private key block. Highest priority because the body contains base64 that other patterns would otherwise carve up.\n    priority: 100\n    enabled_by_default: yes\n    validated: no\n    confidence: 1.0\n  SSN_US:\n    intent: A United States Social Security number in its hyphenated form. Only the hyphenated shape is matched, because a bare nine-digit run is indistinguishable from countless other identifiers.\n    priority: 85\n    enabled_by_default: yes\n    validated: yes\n    confidence: 1.0\n  TITLE_CASE:\n    intent: A run of two or more capitalised words, which is what most personal and organisation names look like. DISABLED BY DEFAULT and deliberately so: it is the only pattern here whose precision is not high. It exists because without the optional \'ner\' tier there is otherwise nothing at all that can find a person\'s name, and a redaction tool that silently cannot see names is worse than one that over-redacts visibly. Enable it explicitly, or use the suggestion surface instead, which shows candidates and lets a person choose.\n    priority: 20\n    enabled_by_default: no\n    validated: yes\n    confidence: 0.45\n  URL:\n    intent: An absolute http, https or ftp URL, built from the RFC 3986 unreserved and sub-delimiter sets written out explicitly. The upstream class \'[$-_@.&+]\' was read by the engine as the range 0x24 to 0x5F, which is defect CP-004. A URL may not end on sentence punctuation, so a trailing full stop, comma or bracket is left in the text instead of being swallowed into the placeholder (CP-029).\n    priority: 70\n    enabled_by_default: yes\n    validated: no\n    confidence: 1.0\nprofiles:\n  balanced:\n    - case_insensitive\n    - kinds\n  minimal:\n    - case_insensitive\n    - kinds\n  strict:\n    - case_insensitive\n    - kinds\nstatus: ok\n', stderr='')

```

`inspect` is a dry run: it reports what **would** be removed and writes
nothing at all — no vault, no output file. Use it before trusting a policy.

```
run("inspect", "--format", "json", PROMPT, limit=12)

```
```
$ cleanprompt inspect --format json "Mail ada@example.com about the outage on 192.0.2.10."
  out │ {
      │   "outcome": "warning",
      │   "headline": "redacted 2 value(s): EMAIL=1, IPV4=1",
      │   "detail": "Placeholders are stable; restore the reply with the same vault. Note that names, organisations, places and other named entities are still not being detected.",
      │   "would_redact": [
      │     {
      │       "placeholder": "[EMAIL-1]",
      │       "kind": "EMAIL",
      │       "occurrences": 1,
      │       "detector": "regex:EMAIL",
      │       "confidence": 1.0
      │     },
      │ ... (118 more)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'inspect', '--format', 'json', 'Mail ada@example.com about the outage on 192.0.2.10.'], returncode=0, stdout='{\n  "outcome": "warning",\n  "headline": "redacted 2 value(s): EMAIL=1, IPV4=1",\n  "detail": "Placeholders are stable; restore the reply with the same vault. Note that names, organisations, places and other named entities are still not being detected.",\n  "would_redact": [\n    {\n      "placeholder": "[EMAIL-1]",\n      "kind": "EMAIL",\n      "occurrences": 1,\n      "detector": "regex:EMAIL",\n      "confidence": 1.0\n    },\n    {\n      "placeholder": "[IPV4-1]",\n      "kind": "IPV4",\n      "occurrences": 1,\n      "detector": "regex:IPV4",\n      "confidence": 1.0\n    }\n  ],\n  "suggestions": [\n    {\n      "text": "Mail",\n      "count": 1,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 0\n    }\n  ],\n  "diagnosis": {\n    "headline": "12 structural detectors are active. Names, organisations and places are NOT being detected.",\n    "healthy": false,\n    "ner_active": false,\n    "active_kinds": [\n      "AWS_ACCESS_KEY",\n      "CREDIT_CARD",\n      "EMAIL",\n      "IBAN",\n      "IPV4",\n      "IPV6",\n      "JWT",\n      "MAC",\n      "PHONE",\n      "PRIVATE_KEY",\n      "SSN_US",\n      "URL"\n    ],\n    "inactive_kinds": [\n      "TITLE_CASE"\n    ],\n    "tiers": {\n      "ner": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "spacy",\n        "version": "3.8.16",\n        "supported": "spacy>=3.4,<5",\n        "detail": "spacy 3.8.16 satisfies spacy>=3.4,<5",\n        "install_hint": "pip install \\"spacy>=3.4,<5\\"",\n        "purpose": "named-entity detection"\n      },\n      "nltk": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "nltk",\n        "version": "3.10.3",\n        "supported": "nltk>=3.6,<4",\n        "detail": "nltk 3.10.3 satisfies nltk>=3.6,<4",\n        "install_hint": "pip install \\"nltk>=3.6,<4\\"",\n        "purpose": "named-entity detection without spaCy (English only)"\n      },\n      "web": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "flask",\n        "version": "3.1.3",\n        "supported": "flask>=2.2,<4",\n        "detail": "flask 3.1.3 satisfies flask>=2.2,<4",\n        "install_hint": "pip install \\"flask>=2.2,<4\\"",\n        "purpose": "the local web interface"\n      },\n      "crypto": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "cryptography",\n        "version": "50.0.2",\n        "supported": "cryptography>=41",\n        "detail": "cryptography 50.0.2 satisfies cryptography>=41",\n        "install_hint": "pip install \\"cryptography>=41\\"",\n        "purpose": "the Fernet vault cipher (--cipher fernet); encryption itself needs no tier"\n      }\n    },\n    "blind_spots": [\n      {\n        "category": "Names, organisations, places and other named entities",\n        "reason": "named-entity detection is not running, and no regular expression can recognise a person\'s name",\n        "remedy": "spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)",\n        "examples": [\n          "a person\'s full name",\n          "a company or institution",\n          "a city or country"\n        ],\n        "severity": "high"\n      },\n      {\n        "category": "Capitalised multi-word names (partial cover)",\n        "reason": "the TITLE_CASE pattern is available but not enabled; it finds runs of capitalised words without needing spaCy, at the cost of false positives",\n        "remedy": "add TITLE_CASE to the detection kinds (--kinds ... TITLE_CASE), or use --suggest to review candidates and hide them explicitly",\n        "examples": [\n          "Mustafa Kemal",\n          "Acme Corporation"\n        ],\n        "severity": "medium"\n      },\n      {\n        "category": "Disabled structural patterns",\n        "reason": "1 built-in pattern(s) are not enabled: TITLE_CASE",\n        "remedy": "drop --kinds to enable every built-in pattern",\n        "examples": [\n          "TITLE_CASE"\n        ],\n        "severity": "medium"\n      }\n    ]\n  },\n  "actions": [\n    "spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)",\n    "Review 1 suggested term(s) and hide any that matter."\n  ],\n  "status": "ok"\n}\n', stderr='')

```

`scan` is the same detection with a script’s interface: status `3` when
it finds something, `0` when it does not. This is the CI gate.

```
run("scan", "--kinds", "EMAIL", "nothing sensitive here", limit=2, expect=0)
run("scan", "--kinds", "EMAIL", "mail ada@example.com", limit=2, expect=3)

```
```
$ cleanprompt scan --kinds EMAIL "nothing sensitive here"
  out │ clean: yes
      │ findings: 0
      │ ... (32 more)
  exit │ 0
$ cleanprompt scan --kinds EMAIL "mail ada@example.com"
  out │ clean: no
      │ findings: 1
      │ ... (34 more)
  exit │ 3

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'scan', '--kinds', 'EMAIL', 'mail ada@example.com'], returncode=3, stdout="clean: no\nfindings: 1\nmax_findings: 0\nby_kind:\n  EMAIL: 1\nplaceholders:\n  - [EMAIL-1]\nblind_spots:\n  category: Names, organisations, places and other named entities\n  reason: named-entity detection is not running, and no regular expression can recognise a person's name\n  remedy: spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)\n  examples:\n    - a person's full name\n    - a company or institution\n    - a city or country\n  severity: high\n\n  category: Capitalised multi-word names (partial cover)\n  reason: the TITLE_CASE pattern is available but not enabled; it finds runs of capitalised words without needing spaCy, at the cost of false positives\n  remedy: add TITLE_CASE to the detection kinds (--kinds ... TITLE_CASE), or use --suggest to review candidates and hide them explicitly\n  examples:\n    - Mustafa Kemal\n    - Acme Corporation\n  severity: medium\n\n  category: Disabled structural patterns\n  reason: 12 built-in pattern(s) are not enabled: AWS_ACCESS_KEY, CREDIT_CARD, IBAN, IPV4, IPV6, JWT, MAC, PHONE, PRIVATE_KEY, SSN_US, TITLE_CASE, URL\n  remedy: drop --kinds to enable every built-in pattern\n  examples:\n    - AWS_ACCESS_KEY\n    - CREDIT_CARD\n    - IBAN\n    - IPV4\n  severity: medium\n\nstatus: found\n", stderr='')

```

`doctor` reports what is active ****and what is blind****. A redaction tool
that finds nothing looks exactly like a clean bill of health, so this command
exists to make the difference visible.

```
run("doctor", "--format", "json", limit=6)

```
```
$ cleanprompt doctor --format json
  out │ {
      │   "headline": "12 structural detectors are active. Names, organisations and places are NOT being detected.",
      │   "healthy": false,
      │   "tiers": {
      │     "ner": {
      │       "status": "AVAILABLE",
      │ ... (241 more)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'doctor', '--format', 'json'], returncode=0, stdout='{\n  "headline": "12 structural detectors are active. Names, organisations and places are NOT being detected.",\n  "healthy": false,\n  "tiers": {\n    "ner": {\n      "status": "AVAILABLE",\n      "available": true,\n      "distribution": "spacy",\n      "version": "3.8.16",\n      "supported": "spacy>=3.4,<5",\n      "detail": "spacy 3.8.16 satisfies spacy>=3.4,<5",\n      "install_hint": "pip install \\"spacy>=3.4,<5\\"",\n      "purpose": "named-entity detection"\n    },\n    "nltk": {\n      "status": "AVAILABLE",\n      "available": true,\n      "distribution": "nltk",\n      "version": "3.10.3",\n      "supported": "nltk>=3.6,<4",\n      "detail": "nltk 3.10.3 satisfies nltk>=3.6,<4",\n      "install_hint": "pip install \\"nltk>=3.6,<4\\"",\n      "purpose": "named-entity detection without spaCy (English only)"\n    },\n    "web": {\n      "status": "AVAILABLE",\n      "available": true,\n      "distribution": "flask",\n      "version": "3.1.3",\n      "supported": "flask>=2.2,<4",\n      "detail": "flask 3.1.3 satisfies flask>=2.2,<4",\n      "install_hint": "pip install \\"flask>=2.2,<4\\"",\n      "purpose": "the local web interface"\n    },\n    "crypto": {\n      "status": "AVAILABLE",\n      "available": true,\n      "distribution": "cryptography",\n      "version": "50.0.2",\n      "supported": "cryptography>=41",\n      "detail": "cryptography 50.0.2 satisfies cryptography>=41",\n      "install_hint": "pip install \\"cryptography>=41\\"",\n      "purpose": "the Fernet vault cipher (--cipher fernet); encryption itself needs no tier"\n    }\n  },\n  "detection": {\n    "active_kinds": [\n      "AWS_ACCESS_KEY",\n      "CREDIT_CARD",\n      "EMAIL",\n      "IBAN",\n      "IPV4",\n      "IPV6",\n      "JWT",\n      "MAC",\n      "PHONE",\n      "PRIVATE_KEY",\n      "SSN_US",\n      "URL"\n    ],\n    "inactive_kinds": [\n      "TITLE_CASE"\n    ],\n    "ner_active": false,\n    "ner_requested": false,\n    "ner_ready": false,\n    "ner_error": null,\n    "ner_remedy": null,\n    "total_patterns": 13\n  },\n  "blind_spots": [\n    {\n      "category": "Names, organisations, places and other named entities",\n      "reason": "named-entity detection is not running, and no regular expression can recognise a person\'s name",\n      "remedy": "spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)",\n      "examples": [\n        "a person\'s full name",\n        "a company or institution",\n        "a city or country"\n      ],\n      "severity": "high"\n    },\n    {\n      "category": "Capitalised multi-word names (partial cover)",\n      "reason": "the TITLE_CASE pattern is available but not enabled; it finds runs of capitalised words without needing spaCy, at the cost of false positives",\n      "remedy": "add TITLE_CASE to the detection kinds (--kinds ... TITLE_CASE), or use --suggest to review candidates and hide them explicitly",\n      "examples": [\n        "Mustafa Kemal",\n        "Acme Corporation"\n      ],\n      "severity": "medium"\n    },\n    {\n      "category": "Disabled structural patterns",\n      "reason": "1 built-in pattern(s) are not enabled: TITLE_CASE",\n      "remedy": "drop --kinds to enable every built-in pattern",\n      "examples": [\n        "TITLE_CASE"\n      ],\n      "severity": "medium"\n    }\n  ],\n  "entity_engines": {\n    "mode": "auto",\n    "language": "en",\n    "selected": [\n      "spacy"\n    ],\n    "ready": true,\n    "engines": {\n      "spacy": {\n        "installed": true,\n        "language_supported": true,\n        "assets_checked": true,\n        "assets_ready": true,\n        "ready": true,\n        "status": "AVAILABLE",\n        "reason": "spaCy 3.8.16 with model \'en_core_web_sm\'",\n        "remedy": "",\n        "model": "en_core_web_sm",\n        "missing": [],\n        "version": "3.8.16",\n        "usable": true,\n        "languages": [\n          "*"\n        ],\n        "needs_model": true,\n        "summary": "statistical models, many languages, best quality",\n        "install_hint": "pip install \\"spacy>=3.4,<5\\"",\n        "detail": "spaCy 3.8.16 with model \'en_core_web_sm\'"\n      },\n      "nltk": {\n        "installed": true,\n        "language_supported": true,\n        "assets_checked": true,\n        "assets_ready": true,\n        "ready": true,\n        "status": "AVAILABLE",\n        "reason": "NLTK 3.10.3 with its data packages",\n        "remedy": "",\n        "model": null,\n        "missing": [],\n        "version": "3.10.3",\n        "usable": true,\n        "languages": [\n          "en"\n        ],\n        "needs_model": true,\n        "summary": "classic chunker, English only, small download",\n        "install_hint": "pip install \\"nltk>=3.6,<4\\"",\n        "detail": "NLTK 3.10.3 with its data packages"\n      }\n    },\n    "canonical_labels": [\n      "PERSON",\n      "ORG",\n      "GPE",\n      "LOC",\n      "FAC",\n      "NORP",\n      "EVENT",\n      "WORK_OF_ART",\n      "PRODUCT",\n      "LAW",\n      "LANGUAGE",\n      "MISC"\n    ]\n  },\n  "nltk_corpora": {\n    "available": true,\n    "missing": [],\n    "install_hint": "",\n    "checked": true\n  },\n  "languages": {\n    "requested": "en",\n    "supported": true,\n    "model": "en_core_web_sm",\n    "model_installed": true,\n    "model_version": "3.8.0",\n    "install_hint": "python -m spacy download en_core_web_sm",\n    "resolution": {\n      "language": "en",\n      "requested_size": "sm",\n      "resolved_size": "sm",\n      "fallback": false\n    },\n    "installed_models": {\n      "en_core_web_sm": "3.8.0"\n    },\n    "supported_languages": {\n      "ca": "Catalan",\n      "da": "Danish",\n      "de": "German",\n      "el": "Greek",\n      "en": "English",\n      "es": "Spanish",\n      "fi": "Finnish",\n      "fr": "French",\n      "hr": "Croatian",\n      "it": "Italian",\n      "ja": "Japanese",\n      "ko": "Korean",\n      "lt": "Lithuanian",\n      "mk": "Macedonian",\n      "nb": "Norwegian Bokmal",\n      "nl": "Dutch",\n      "pl": "Polish",\n      "pt": "Portuguese",\n      "ro": "Romanian",\n      "ru": "Russian",\n      "sl": "Slovenian",\n      "sv": "Swedish",\n      "uk": "Ukrainian",\n      "zh": "Chinese"\n    }\n  },\n  "configuration": {\n    "profile": null,\n    "config_file": null,\n    "ner_engine": "auto",\n    "language": "en",\n    "model_size": "sm",\n    "policy_fingerprint": "33ad5234bfede14e",\n    "grammar_fingerprint": "0e7c5e996585e57b",\n    "vault_path": "/tmp/scikitplot-cleanprompt-cli-7_bf2yvl/vault.json",\n    "vault_exists": true,\n    "case_insensitive": false,\n    "overlap": "LONGEST_WINS",\n    "allow": [],\n    "limits": {\n      "max_input_chars": 1000000,\n      "max_spans": 100000,\n      "max_entries": 50000,\n      "max_literal_terms": 10000,\n      "max_literal_length": 4096\n    }\n  },\n  "environment": {\n    "python": "3.12.15",\n    "platform": "linux",\n    "cli_frontend": "click",\n    "vault_key_set": false,\n    "web_secret_key_set": false\n  },\n  "status": "degraded"\n}\n', stderr='')

```

## Part two — the edge cases[#](#part-two-the-edge-cases "Link to this heading")

### 4. The shell eats the text before the program sees it[#](#the-shell-eats-the-text-before-the-program-sees-it "Link to this heading")

The most common first failure, and it is not this program’s error message:

```
$ cleanprompt encode Our customer (Acme Ltd) wrote from ada@example.com
bash: syntax error near unexpected token `('

```

`bash:` is the clue — the shell failed, so the program never ran. Three
fixes, in increasing order of robustness:

```
cleanprompt encode 'Our customer (Acme Ltd) wrote from ada@example.com'
cleanprompt encode --in draft.txt
cleanprompt encode <<'EOF'
Our customer (Acme Ltd) wrote from ada@example.com
EOF

```

Single quotes are enough for parentheses. For a paragraph with quotes of its
own, use a file or a heredoc: there is no quoting to get wrong.

```
run(
    "encode",
    "--quiet",
    "--vault-mode",
    "overwrite",
    "Our customer (Acme Ltd) wrote from ada@example.com",
)

```
```
$ cleanprompt encode --quiet --vault-mode overwrite "Our customer (Acme Ltd) wrote from ada@example.com"
  out │ Our customer (Acme Ltd) wrote from [EMAIL-1]
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'encode', '--quiet', '--vault-mode', 'overwrite', 'Our customer (Acme Ltd) wrote from ada@example.com'], returncode=0, stdout='Our customer (Acme Ltd) wrote from [EMAIL-1]\n', stderr='')

```

### 5. Text that starts with a dash[#](#text-that-starts-with-a-dash "Link to this heading")

A value beginning with `-` looks like an option. `--` ends the options
and everything after it is text — the POSIX convention, honoured identically
by both frontends.

```
run("inspect", "--secret is ada@example.com", limit=4, expect=2)

```
```
$ cleanprompt inspect "--secret is ada@example.com"
  err │ Usage: python -m scikitplot.cleanprompt inspect [OPTIONS] [TEXT_ARGS]...
      │ Try 'python -m scikitplot.cleanprompt inspect --help' for help.
      │
      │ Error: No such option '--secret is ada@example.com'.
  exit │ 2

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'inspect', '--secret is ada@example.com'], returncode=2, stdout='', stderr="Usage: python -m scikitplot.cleanprompt inspect [OPTIONS] [TEXT_ARGS]...\nTry 'python -m scikitplot.cleanprompt inspect --help' for help.\n\nError: No such option '--secret is ada@example.com'.\n")

```

With the delimiter, the same text is read as text.

```
run("inspect", "--", "--secret is ada@example.com", limit=4, expect=0)

```
```
$ cleanprompt inspect -- "--secret is ada@example.com"
  out │ outcome: warning
      │ headline: redacted 1 value(s): EMAIL=1
      │ detail: Placeholders are stable; restore the reply with the same vault. Note that names, organisations, places and other named entities are still not being detected.
      │ would_redact:
      │ ... (91 more)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'inspect', '--', '--secret is ada@example.com'], returncode=0, stdout='outcome: warning\nheadline: redacted 1 value(s): EMAIL=1\ndetail: Placeholders are stable; restore the reply with the same vault. Note that names, organisations, places and other named entities are still not being detected.\nwould_redact:\n  placeholder: [EMAIL-1]\n  kind: EMAIL\n  occurrences: 1\n  detector: regex:EMAIL\n  confidence: 1.0\n\nsuggestions: -\ndiagnosis:\n  headline: 12 structural detectors are active. Names, organisations and places are NOT being detected.\n  healthy: no\n  ner_active: no\n  active_kinds:\n    - AWS_ACCESS_KEY\n    - CREDIT_CARD\n    - EMAIL\n    - IBAN\n    - IPV4\n    - IPV6\n    - JWT\n    - MAC\n    - PHONE\n    - PRIVATE_KEY\n    - SSN_US\n    - URL\n  inactive_kinds:\n    - TITLE_CASE\n  tiers:\n    ner:\n      status: AVAILABLE\n      available: yes\n      distribution: spacy\n      version: 3.8.16\n      supported: spacy>=3.4,<5\n      detail: spacy 3.8.16 satisfies spacy>=3.4,<5\n      install_hint: pip install "spacy>=3.4,<5"\n      purpose: named-entity detection\n    nltk:\n      status: AVAILABLE\n      available: yes\n      distribution: nltk\n      version: 3.10.3\n      supported: nltk>=3.6,<4\n      detail: nltk 3.10.3 satisfies nltk>=3.6,<4\n      install_hint: pip install "nltk>=3.6,<4"\n      purpose: named-entity detection without spaCy (English only)\n    web:\n      status: AVAILABLE\n      available: yes\n      distribution: flask\n      version: 3.1.3\n      supported: flask>=2.2,<4\n      detail: flask 3.1.3 satisfies flask>=2.2,<4\n      install_hint: pip install "flask>=2.2,<4"\n      purpose: the local web interface\n    crypto:\n      status: AVAILABLE\n      available: yes\n      distribution: cryptography\n      version: 50.0.2\n      supported: cryptography>=41\n      detail: cryptography 50.0.2 satisfies cryptography>=41\n      install_hint: pip install "cryptography>=41"\n      purpose: the Fernet vault cipher (--cipher fernet); encryption itself needs no tier\n  blind_spots:\n    category: Names, organisations, places and other named entities\n    reason: named-entity detection is not running, and no regular expression can recognise a person\'s name\n    remedy: spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)\n    examples:\n      - a person\'s full name\n      - a company or institution\n      - a city or country\n    severity: high\n\n    category: Capitalised multi-word names (partial cover)\n    reason: the TITLE_CASE pattern is available but not enabled; it finds runs of capitalised words without needing spaCy, at the cost of false positives\n    remedy: add TITLE_CASE to the detection kinds (--kinds ... TITLE_CASE), or use --suggest to review candidates and hide them explicitly\n    examples:\n      - Mustafa Kemal\n      - Acme Corporation\n    severity: medium\n\n    category: Disabled structural patterns\n    reason: 1 built-in pattern(s) are not enabled: TITLE_CASE\n    remedy: drop --kinds to enable every built-in pattern\n    examples:\n      - TITLE_CASE\n    severity: medium\n\nactions:\n  - spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)\nstatus: ok\n', stderr='')

```

Only the ****first**** `--` is consumed, so a literal `--` inside the text
survives, and text that is exactly `--` is passed through.

```
run("encode", "--quiet", "--vault-mode", "overwrite", "--", "use -- to end options")
run("encode", "--quiet", "--vault-mode", "overwrite", "--", "--")

```
```
$ cleanprompt encode --quiet --vault-mode overwrite -- "use -- to end options"
  out │ use -- to end options
  exit │ 0
$ cleanprompt encode --quiet --vault-mode overwrite -- --
  out │ --
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'encode', '--quiet', '--vault-mode', 'overwrite', '--', '--'], returncode=0, stdout='--\n', stderr='')

```

The one place the two frontends still differ is a dash-leading ****option
value**** given in separated form. Use the attached spelling, which both
accept:

```
cleanprompt encode --hide=-secret "the -secret token"   # both frontends
cleanprompt encode --hide -secret "the -secret token"   # click only

```

Closing the gap would mean overriding a private argparse method that has
moved between releases, so it is documented rather than papered over.

```
run("encode", "--quiet", "--vault-mode", "overwrite", "--hide=-secret", "the -secret token")

for frontend in ("click", "argparse"):
    result = subprocess.run(
        [*CLI, "--frontend", frontend, "encode", "-q", "--vault-mode", "overwrite",
         "--hide", "-secret", "the -secret token"],
        capture_output=True,
        text=True,
        input="",
    )
    print("{0:<9} separated --hide: exit {1}".format(frontend, result.returncode))

```
```
$ cleanprompt encode --quiet --vault-mode overwrite --hide=-secret "the -secret token"
  out │ the [CUSTOM-1] token
  exit │ 0
click     separated --hide: exit 0
argparse  separated --hide: exit 2

```

### 6. A mistyped option must not become your prompt[#](#a-mistyped-option-must-not-become-your-prompt "Link to this heading")

This is the failure mode worth being strict about. If a mistyped flag were
accepted as text, the tool would quietly redact the flag and send the **real**
prompt — which is still sitting in the next argument — to the model. Both
frontends refuse with status `2`.

```
run("inspect", "--nosuchoption", "ada@example.com", limit=4, expect=2)

```
```
$ cleanprompt inspect --nosuchoption ada@example.com
  err │ Usage: python -m scikitplot.cleanprompt inspect [OPTIONS] [TEXT_ARGS]...
      │ Try 'python -m scikitplot.cleanprompt inspect --help' for help.
      │
      │ Error: No such option '--nosuchoption'.
  exit │ 2

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'inspect', '--nosuchoption', 'ada@example.com'], returncode=2, stdout='', stderr="Usage: python -m scikitplot.cleanprompt inspect [OPTIONS] [TEXT_ARGS]...\nTry 'python -m scikitplot.cleanprompt inspect --help' for help.\n\nError: No such option '--nosuchoption'.\n")

```

Abbreviations are refused for the same reason. `--form` is an unambiguous
prefix of `--format` **today**; it stops being one the day an option called
`--formal` is added, and a script that worked for a year then breaks on an
upgrade it never used.

```
run("inspect", "--form", "json", "ada@example.com", limit=4, expect=2)
run("inspect", "--format", "json", "ada@example.com", limit=2, expect=0)

```
```
$ cleanprompt inspect --form json ada@example.com
  err │ Usage: python -m scikitplot.cleanprompt inspect [OPTIONS] [TEXT_ARGS]...
      │ Try 'python -m scikitplot.cleanprompt inspect --help' for help.
      │
      │ Error: No such option '--form'. (Did you mean one of: '--format', '--log-format'?)
  exit │ 2
$ cleanprompt inspect --format json ada@example.com
  out │ {
      │   "outcome": "warning",
      │ ... (113 more)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'inspect', '--format', 'json', 'ada@example.com'], returncode=0, stdout='{\n  "outcome": "warning",\n  "headline": "redacted 1 value(s): EMAIL=1",\n  "detail": "Placeholders are stable; restore the reply with the same vault. Note that names, organisations, places and other named entities are still not being detected.",\n  "would_redact": [\n    {\n      "placeholder": "[EMAIL-1]",\n      "kind": "EMAIL",\n      "occurrences": 1,\n      "detector": "regex:EMAIL",\n      "confidence": 1.0\n    }\n  ],\n  "suggestions": [],\n  "diagnosis": {\n    "headline": "12 structural detectors are active. Names, organisations and places are NOT being detected.",\n    "healthy": false,\n    "ner_active": false,\n    "active_kinds": [\n      "AWS_ACCESS_KEY",\n      "CREDIT_CARD",\n      "EMAIL",\n      "IBAN",\n      "IPV4",\n      "IPV6",\n      "JWT",\n      "MAC",\n      "PHONE",\n      "PRIVATE_KEY",\n      "SSN_US",\n      "URL"\n    ],\n    "inactive_kinds": [\n      "TITLE_CASE"\n    ],\n    "tiers": {\n      "ner": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "spacy",\n        "version": "3.8.16",\n        "supported": "spacy>=3.4,<5",\n        "detail": "spacy 3.8.16 satisfies spacy>=3.4,<5",\n        "install_hint": "pip install \\"spacy>=3.4,<5\\"",\n        "purpose": "named-entity detection"\n      },\n      "nltk": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "nltk",\n        "version": "3.10.3",\n        "supported": "nltk>=3.6,<4",\n        "detail": "nltk 3.10.3 satisfies nltk>=3.6,<4",\n        "install_hint": "pip install \\"nltk>=3.6,<4\\"",\n        "purpose": "named-entity detection without spaCy (English only)"\n      },\n      "web": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "flask",\n        "version": "3.1.3",\n        "supported": "flask>=2.2,<4",\n        "detail": "flask 3.1.3 satisfies flask>=2.2,<4",\n        "install_hint": "pip install \\"flask>=2.2,<4\\"",\n        "purpose": "the local web interface"\n      },\n      "crypto": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "cryptography",\n        "version": "50.0.2",\n        "supported": "cryptography>=41",\n        "detail": "cryptography 50.0.2 satisfies cryptography>=41",\n        "install_hint": "pip install \\"cryptography>=41\\"",\n        "purpose": "the Fernet vault cipher (--cipher fernet); encryption itself needs no tier"\n      }\n    },\n    "blind_spots": [\n      {\n        "category": "Names, organisations, places and other named entities",\n        "reason": "named-entity detection is not running, and no regular expression can recognise a person\'s name",\n        "remedy": "spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)",\n        "examples": [\n          "a person\'s full name",\n          "a company or institution",\n          "a city or country"\n        ],\n        "severity": "high"\n      },\n      {\n        "category": "Capitalised multi-word names (partial cover)",\n        "reason": "the TITLE_CASE pattern is available but not enabled; it finds runs of capitalised words without needing spaCy, at the cost of false positives",\n        "remedy": "add TITLE_CASE to the detection kinds (--kinds ... TITLE_CASE), or use --suggest to review candidates and hide them explicitly",\n        "examples": [\n          "Mustafa Kemal",\n          "Acme Corporation"\n        ],\n        "severity": "medium"\n      },\n      {\n        "category": "Disabled structural patterns",\n        "reason": "1 built-in pattern(s) are not enabled: TITLE_CASE",\n        "remedy": "drop --kinds to enable every built-in pattern",\n        "examples": [\n          "TITLE_CASE"\n        ],\n        "severity": "medium"\n      }\n    ]\n  },\n  "actions": [\n    "spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)"\n  ],\n  "status": "ok"\n}\n', stderr='')

```

### 7. Both frontends read the same command line[#](#both-frontends-read-the-same-command-line "Link to this heading")

A divergence here is a bug, not a preference. The check is mechanical.

```
CASES = [
    ["inspect", "--format", "json", "ada@example.com"],
    ["inspect", "--form", "json", "ada@example.com"],
    ["inspect", "--", "--secret is ada@example.com"],
    ["inspect", "--nosuchoption", "x"],
    ["kinds"],
    ["-V"],
]

divergences = []
for case in CASES:
    statuses = {}
    for frontend in ("argparse", "click"):
        completed = subprocess.run(
            [*CLI, "--frontend", frontend, *case],
            capture_output=True,
            text=True,
            input="",
        )
        statuses[frontend] = completed.returncode
    agree = statuses["argparse"] == statuses["click"]
    if not agree:
        divergences.append((case, statuses))
    print(
        "{0:<6} argparse={1} click={2}  {3}".format(
            "agree" if agree else "DIFFER",
            statuses["argparse"],
            statuses["click"],
            " ".join(case),
        )
    )

assert divergences == [], divergences

```
```
agree  argparse=0 click=0  inspect --format json ada@example.com
agree  argparse=2 click=2  inspect --form json ada@example.com
agree  argparse=0 click=0  inspect -- --secret is ada@example.com
agree  argparse=2 click=2  inspect --nosuchoption x
agree  argparse=0 click=0  kinds
agree  argparse=0 click=0  -V

```

### 8. Pipes, and a reader that leaves early[#](#pipes-and-a-reader-that-leaves-early "Link to this heading")

`| head` closes the pipe as soon as it has what it wants. That is not an
error this program can act on, so it exits quietly with the conventional
`141` rather than printing `error: [Errno 32] Broken pipe` over a
perfectly correct command line.

```
writer = subprocess.Popen(
    [*CLI, "kinds", "--format", "json"],
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True,
)
first_line = writer.stdout.readline() if writer.stdout else ""
if writer.stdout:
    writer.stdout.close()
pipe_errors = writer.stderr.read() if writer.stderr else ""
writer.wait(timeout=60)

print("first line read:", first_line.strip())
print("stderr from the writer:", repr(pipe_errors))
print("writer status:", writer.returncode)
assert "Broken pipe" not in pipe_errors
assert "Exception ignored" not in pipe_errors

```
```
first line read: {
stderr from the writer: ''
writer status: 0

```

### 9. Degenerate input[#](#degenerate-input "Link to this heading")

Empty text, whitespace, and a text that is **already** redacted. None of these
is an error; all of them have to behave predictably.

The third is invariant `I6`, idempotence: running `encode` on its own
output must not re-redact the placeholders into `[CUSTOM-1]` nonsense.

```
run("encode", "--quiet", "--vault-mode", "overwrite", "", expect=0)
run("encode", "--quiet", "--vault-mode", "overwrite", "   ", expect=0)

once = run("encode", "--quiet", "--vault-mode", "overwrite", PROMPT).stdout
twice = run("encode", "--quiet", "--vault-mode", "append", "--in", "-", stdin_text=once)

print()
print("idempotent:", once.strip() == twice.stdout.strip())
assert once.strip() == twice.stdout.strip()

```
```
$ cleanprompt encode --quiet --vault-mode overwrite ""
  exit │ 0
$ cleanprompt encode --quiet --vault-mode overwrite "   "
  out │
  exit │ 0
$ cleanprompt encode --quiet --vault-mode overwrite "Mail ada@example.com about the outage on 192.0.2.10."
  out │ Mail [EMAIL-1] about the outage on [IPV4-1].
  exit │ 0
$ cleanprompt encode --quiet --vault-mode append --in -
  out │ Mail [EMAIL-1] about the outage on [IPV4-1].
  exit │ 0

idempotent: True

```

### 10. A value at the end of a sentence[#](#a-value-at-the-end-of-a-sentence "Link to this heading")

Worth its own case because it was a real defect twice, in opposite
directions: a sentence-final IP address was not detected at all, and a URL
swallowed the sentence’s full stop into the placeholder. Both are checked by
a class-level test now, so a pattern added next year is checked the same way.

```
run(
    "inspect",
    "--format",
    "json",
    "The host is 192.0.2.10. See https://example.com/docs.",
    limit=14,
)

```
```
$ cleanprompt inspect --format json "The host is 192.0.2.10. See https://example.com/d..."
  out │ {
      │   "outcome": "warning",
      │   "headline": "redacted 2 value(s): IPV4=1, URL=1",
      │   "detail": "Placeholders are stable; restore the reply with the same vault. Note that names, organisations, places and other named entities are still not being detected.",
      │   "would_redact": [
      │     {
      │       "placeholder": "[IPV4-1]",
      │       "kind": "IPV4",
      │       "occurrences": 1,
      │       "detector": "regex:IPV4",
      │       "confidence": 1.0
      │     },
      │     {
      │       "placeholder": "[URL-1]",
      │ ... (116 more)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'inspect', '--format', 'json', 'The host is 192.0.2.10. See https://example.com/docs.'], returncode=0, stdout='{\n  "outcome": "warning",\n  "headline": "redacted 2 value(s): IPV4=1, URL=1",\n  "detail": "Placeholders are stable; restore the reply with the same vault. Note that names, organisations, places and other named entities are still not being detected.",\n  "would_redact": [\n    {\n      "placeholder": "[IPV4-1]",\n      "kind": "IPV4",\n      "occurrences": 1,\n      "detector": "regex:IPV4",\n      "confidence": 1.0\n    },\n    {\n      "placeholder": "[URL-1]",\n      "kind": "URL",\n      "occurrences": 1,\n      "detector": "regex:URL",\n      "confidence": 1.0\n    }\n  ],\n  "suggestions": [\n    {\n      "text": "See",\n      "count": 1,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 24\n    }\n  ],\n  "diagnosis": {\n    "headline": "12 structural detectors are active. Names, organisations and places are NOT being detected.",\n    "healthy": false,\n    "ner_active": false,\n    "active_kinds": [\n      "AWS_ACCESS_KEY",\n      "CREDIT_CARD",\n      "EMAIL",\n      "IBAN",\n      "IPV4",\n      "IPV6",\n      "JWT",\n      "MAC",\n      "PHONE",\n      "PRIVATE_KEY",\n      "SSN_US",\n      "URL"\n    ],\n    "inactive_kinds": [\n      "TITLE_CASE"\n    ],\n    "tiers": {\n      "ner": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "spacy",\n        "version": "3.8.16",\n        "supported": "spacy>=3.4,<5",\n        "detail": "spacy 3.8.16 satisfies spacy>=3.4,<5",\n        "install_hint": "pip install \\"spacy>=3.4,<5\\"",\n        "purpose": "named-entity detection"\n      },\n      "nltk": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "nltk",\n        "version": "3.10.3",\n        "supported": "nltk>=3.6,<4",\n        "detail": "nltk 3.10.3 satisfies nltk>=3.6,<4",\n        "install_hint": "pip install \\"nltk>=3.6,<4\\"",\n        "purpose": "named-entity detection without spaCy (English only)"\n      },\n      "web": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "flask",\n        "version": "3.1.3",\n        "supported": "flask>=2.2,<4",\n        "detail": "flask 3.1.3 satisfies flask>=2.2,<4",\n        "install_hint": "pip install \\"flask>=2.2,<4\\"",\n        "purpose": "the local web interface"\n      },\n      "crypto": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "cryptography",\n        "version": "50.0.2",\n        "supported": "cryptography>=41",\n        "detail": "cryptography 50.0.2 satisfies cryptography>=41",\n        "install_hint": "pip install \\"cryptography>=41\\"",\n        "purpose": "the Fernet vault cipher (--cipher fernet); encryption itself needs no tier"\n      }\n    },\n    "blind_spots": [\n      {\n        "category": "Names, organisations, places and other named entities",\n        "reason": "named-entity detection is not running, and no regular expression can recognise a person\'s name",\n        "remedy": "spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)",\n        "examples": [\n          "a person\'s full name",\n          "a company or institution",\n          "a city or country"\n        ],\n        "severity": "high"\n      },\n      {\n        "category": "Capitalised multi-word names (partial cover)",\n        "reason": "the TITLE_CASE pattern is available but not enabled; it finds runs of capitalised words without needing spaCy, at the cost of false positives",\n        "remedy": "add TITLE_CASE to the detection kinds (--kinds ... TITLE_CASE), or use --suggest to review candidates and hide them explicitly",\n        "examples": [\n          "Mustafa Kemal",\n          "Acme Corporation"\n        ],\n        "severity": "medium"\n      },\n      {\n        "category": "Disabled structural patterns",\n        "reason": "1 built-in pattern(s) are not enabled: TITLE_CASE",\n        "remedy": "drop --kinds to enable every built-in pattern",\n        "examples": [\n          "TITLE_CASE"\n        ],\n        "severity": "medium"\n      }\n    ]\n  },\n  "actions": [\n    "spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)",\n    "Review 1 suggested term(s) and hide any that matter."\n  ],\n  "status": "ok"\n}\n', stderr='')

```

### 11. `decode` when the model did not return the label you issued[#](#decode-when-the-model-did-not-return-the-label-you-issued "Link to this heading")

Between `encode` and `decode` the text passes through a language model,
and a model rewrites tokens: it lower-cases the label, swaps the hyphen for
an underscore or a space, escapes the brackets for Markdown, or wraps it
across a line.

`decode` accepts that bounded set and ****reports every repair****. It does
not accept an invented label, and ordinary prose like `[note 2]` is
returned untouched.

```
run("encode", "--quiet", "--vault-mode", "overwrite", "Mail ada@example.com or bob@example.com")
run("decode", "I wrote to [email_1] and [EMAIL 2]; see [note 2] for the rest.")

```
```
$ cleanprompt encode --quiet --vault-mode overwrite "Mail ada@example.com or bob@example.com"
  out │ Mail [EMAIL-1] or [EMAIL-2]
  exit │ 0
$ cleanprompt decode "I wrote to [email_1] and [EMAIL 2]; see [note 2] ..."
  out │ I wrote to ada@example.com and bob@example.com; see [note 2] for the rest.
  err │ restored 2 placeholder(s); 2 repaired: [email_1] -> [EMAIL-1], [EMAIL 2] -> [EMAIL-2]
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'decode', 'I wrote to [email_1] and [EMAIL 2]; see [note 2] for the rest.'], returncode=0, stdout='I wrote to ada@example.com and bob@example.com; see [note 2] for the rest.\n', stderr='restored 2 placeholder(s); 2 repaired: [email_1] -> [EMAIL-1], [EMAIL 2] -> [EMAIL-2]\n')

```

`--exact` turns the leniency off for a caller who depends on the strict
reading, and `--strict` turns an unknown placeholder into an error instead
of leaving it in place.

```
run("decode", "--exact", "I wrote to [email_1].")
run("decode", "--strict", "what about [EMAIL-9]?", expect=1)

```
```
$ cleanprompt decode --exact "I wrote to [email_1]."
  out │ I wrote to [email_1].
  err │ restored 0 placeholder(s); 2 vault entr(y/ies) unused
      │   nothing was restored: check the reply still contains the placeholders as they were issued
  exit │ 0
$ cleanprompt decode --strict "what about [EMAIL-9]?"
  err │ error: placeholder '[EMAIL-9]' is not present in the vault
  exit │ 1

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'decode', '--strict', 'what about [EMAIL-9]?'], returncode=1, stdout='', stderr="error: placeholder '[EMAIL-9]' is not present in the vault\n")

```

### 12. Cleanup[#](#cleanup "Link to this heading")

```
run("forget", "--force")

os.environ.pop("CLEANPROMPT_VAULT", None)
_WORKSPACE.cleanup()

print("Temporary workspace cleaned:", not Path(_WORKSPACE.name).exists())

```
```
$ cleanprompt forget --force
  err │ deleted <workspace>/vault.json
      │   it held 2 value(s): EMAIL=2
      │   note: this unlinks the file. On a journalling filesystem or an SSD the bytes may survive; use --encrypt with a key you hold for values that must not be recoverable.
  exit │ 0
Temporary workspace cleaned: True

```

Tags: [model-workflow: cleanprompt](../../_tags/model-workflow-cleanprompt.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html) [purpose: reference](../../_tags/purpose-reference.html)

****Total running time of the script:**** (0 minutes 33.832 seconds)

[![Launch binder](../../_images/binder_badge_logo3.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cleanprompt/plot_cleanprompt_cli_usage_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo3.svg)](../../lite/lab/index.html?path=auto_examples/cleanprompt/plot_cleanprompt_cli_usage_script.ipynb)

[`Download Jupyter notebook: plot_cleanprompt_cli_usage_script.ipynb`](../../_downloads/cbfd6211016b1e6c13bd6e07f7f5ef51/plot_cleanprompt_cli_usage_script.ipynb)

[`Download Python source code: plot_cleanprompt_cli_usage_script.py`](../../_downloads/39a4571bf111829ff4159feaa3eaca9f/plot_cleanprompt_cli_usage_script.py)

[`Download zipped: plot_cleanprompt_cli_usage_script.zip`](../../_downloads/c82438e881d86de92c96ca61d7f9703a/plot_cleanprompt_cli_usage_script.zip)

Related examples

![](../../_images/sphx_glr_plot_cleanprompt_basics_script_thumb.png)

[Cleanprompt Basics: Hide a Value, Then Get It Back](plot_cleanprompt_basics_script.html)

Cleanprompt Basics: Hide a Value, Then Get It Back![](../../_images/sphx_glr_plot_cleanprompt_recipes_script_thumb.png)

[Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents](plot_cleanprompt_recipes_script.html)

Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)