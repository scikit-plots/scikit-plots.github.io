> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cleanprompt-plot-cleanprompt-notebooks-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Cleanprompt for Notebooks: Sending an Analysis Without Sending the Data[#](#cleanprompt-for-notebooks-sending-an-analysis-without-sending-the-data "Link to this heading")

A notebook is not prose, and what leaks out of one is not what leaks out of a
paragraph. Three classes run through every stage of a project — exploration,
analytics, modelling, model analysis — and none is reachable by matching
patterns in text:

****Identifiers, not values.**** `customer_ssn` contains no social-security
number. It discloses that the dataset does, which is often the more sensitive
fact.

****Structure, not content.**** `/home/marion.holt/work/acme-churn/` names a
person and a client project in nine tokens, none of which any pattern matches.

****Rendered data.**** The code can be spotless while the **output** beneath it holds
two hundred real rows. This is the leak people are least aware of, because they
are reading the code.

The hard part is not hiding these. It is hiding them and still getting useful
help, because a model’s advice depends on the schema’s semantics:

```
df['acct_balance_usd']  →  numeric and skewed, wants a log
df['region_code']       →  categorical, wants encoding
df['signup_date']       →  temporal, a leakage risk
df['customer_ssn']      →  an identifier, not a feature at all

```

Replace those four with `[COLUMN-1..4]` and the information the advice depends
on is exactly the information that was removed. So the stand-in keeps the
****role**** and discards the name — `id_1`, `amount_1`, `date_1`,
`category_1` — and “drop `id_1`, log-transform `amount_1`, one-hot
`category_1`” decodes back into your own column names.

Every value in this example is reserved and cannot reach anybody.

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

_WORKSPACE = tempfile.TemporaryDirectory(prefix="scikitplot-cleanprompt-nb-")
_HOME = Path(_WORKSPACE.name)

os.environ["CLEANPROMPT_VAULT"] = str(_HOME / "vault.json")


def _cli() -> list[str]:
    executable = shutil.which("scikitplot")
    if executable:
        return [executable, "cleanprompt"]
    return [sys.executable, "-m", "scikitplot.cleanprompt"]


CLI = _cli()


def run(*arguments: str, limit: int = 0):
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

```

## 1. A notebook with the leaks that actually occur[#](#a-notebook-with-the-leaks-that-actually-occur "Link to this heading")

Built here rather than shipped, so you can see exactly what goes in: a
markdown cell naming the client, a load from a production path, a rendered
`head()` with real rows, a `value_counts()` with real segment names, a
traceback carrying a home directory, and a plot title.

```
NOTEBOOK = {
    "cells": [
        {
            "cell_type": "markdown",
            "metadata": {},
            "source": [
                "# Q1 churn model — Acme Financial\n",
                "\n",
                "Pull from `/mnt/prod/exports/2026_q1_acme_customers.parquet`.\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": 1,
            "metadata": {},
            "outputs": [
                {
                    "output_type": "execute_result",
                    "execution_count": 1,
                    "metadata": {},
                    "data": {
                        "text/plain": [
                            "   customer_ssn  acct_balance_usd region_code\n",
                            "0  123-45-6789           14320.55    AC-NORTH\n",
                            "1  987-65-4321            2210.00    AC-SOUTH\n",
                        ]
                    },
                }
            ],
            "source": [
                "import pandas as pd\n",
                "df = pd.read_parquet("
                "'/mnt/prod/exports/2026_q1_acme_customers.parquet')\n",
                "df = df[['customer_ssn', 'acct_balance_usd', 'signup_date',\n",
                "         'region_code', 'internal_risk_score_v3', 'churned']]\n",
                "df.head(2)\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": 2,
            "metadata": {},
            "outputs": [
                {
                    "output_type": "stream",
                    "name": "stdout",
                    "text": ["AC-NORTH    41822\nAC-SOUTH    18204\n"],
                }
            ],
            "source": ["print(df['region_code'].value_counts())\n"],
        },
        {
            "cell_type": "code",
            "execution_count": 3,
            "metadata": {},
            "outputs": [
                {
                    "output_type": "error",
                    "ename": "KeyError",
                    "evalue": "'acct_balance'",
                    "traceback": [
                        "File /home/marion.holt/work/acme-churn/features.py:18",
                        "KeyError: 'acct_balance'",
                    ],
                }
            ],
            "source": [
                "X = df.drop(columns=['churned', 'customer_ssn'])\n",
                "X['balance_log'] = np.log1p(X.acct_balance)\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": 4,
            "metadata": {},
            "outputs": [
                {
                    "output_type": "display_data",
                    "metadata": {},
                    "data": {"image/png": "iVBORw0KGgoAAAANSUhEUgAAA" * 12},
                }
            ],
            "source": [
                "plt.barh(X.columns, model.feature_importances_)\n",
                "plt.title('Acme drivers — internal_risk_score_v3 dominates')\n",
            ],
        },
    ],
    "metadata": {"kernelspec": {"name": "acme-churn", "display_name": "acme-churn"}},
    "nbformat": 4,
    "nbformat_minor": 5,
}

source = _HOME / "churn.ipynb"
source.write_text(json.dumps(NOTEBOOK, indent=1), encoding="utf-8")

print("notebook written:", source.name, "-", source.stat().st_size, "bytes")

```
```
notebook written: churn.ipynb - 2485 bytes

```

## 2. What the prose pipeline alone would find[#](#what-the-prose-pipeline-alone-would-find "Link to this heading")

Worth seeing before the fix, because the failure is not that it finds
nothing — it finds three things and reports success.

```
run("inspect", "--as", "text", "--format", "json", "--in", str(source), limit=3)

```
```
$ cleanprompt inspect --as text --format json --in <workspace>/churn.ipynb
  out │ {
      │   "outcome": "warning",
      │   "headline": "redacted 2 value(s): PHONE=1, SSN_US=1",
      │ ... (193 more)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'inspect', '--as', 'text', '--format', 'json', '--in', '/tmp/scikitplot-cleanprompt-nb-fxst5okf/churn.ipynb'], returncode=0, stdout='{\n  "outcome": "warning",\n  "headline": "redacted 2 value(s): PHONE=1, SSN_US=1",\n  "detail": "Placeholders are stable; restore the reply with the same vault. Note that names, organisations, places and other named entities are still not being detected.",\n  "would_redact": [\n    {\n      "placeholder": "[SSN_US-1]",\n      "kind": "SSN_US",\n      "occurrences": 1,\n      "detector": "regex:SSN_US",\n      "confidence": 1.0\n    },\n    {\n      "placeholder": "[PHONE-1]",\n      "kind": "PHONE",\n      "occurrences": 1,\n      "detector": "regex:PHONE",\n      "confidence": 0.85\n    }\n  ],\n  "suggestions": [\n    {\n      "text": "KGgoAAAANSUhEUgAAAiVBORw",\n      "count": 11,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 1876\n    },\n    {\n      "text": "X",\n      "count": 4,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 1568\n    },\n    {\n      "text": "AC",\n      "count": 3,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 538\n    },\n    {\n      "text": "NORTH",\n      "count": 2,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 541\n    },\n    {\n      "text": "SOUTH",\n      "count": 2,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 599\n    },\n    {\n      "text": "KeyError",\n      "count": 2,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 1369\n    },\n    {\n      "text": "Q",\n      "count": 1,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 87\n    },\n    {\n      "text": "Acme Financial",\n      "count": 1,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 109\n    },\n    {\n      "text": "Pull",\n      "count": 1,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 143\n    },\n    {\n      "text": "File",\n      "count": 1,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 1440\n    },\n    {\n      "text": "KGgoAAAANSUhEUgAAA",\n      "count": 1,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 2151\n    },\n    {\n      "text": "Acme",\n      "count": 1,\n      "reason": "capitalised word run, not matched by any active detector",\n      "first_offset": 2278\n    }\n  ],\n  "diagnosis": {\n    "headline": "12 structural detectors are active. Names, organisations and places are NOT being detected.",\n    "healthy": false,\n    "ner_active": false,\n    "active_kinds": [\n      "AWS_ACCESS_KEY",\n      "CREDIT_CARD",\n      "EMAIL",\n      "IBAN",\n      "IPV4",\n      "IPV6",\n      "JWT",\n      "MAC",\n      "PHONE",\n      "PRIVATE_KEY",\n      "SSN_US",\n      "URL"\n    ],\n    "inactive_kinds": [\n      "TITLE_CASE"\n    ],\n    "tiers": {\n      "ner": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "spacy",\n        "version": "3.8.16",\n        "supported": "spacy>=3.4,<5",\n        "detail": "spacy 3.8.16 satisfies spacy>=3.4,<5",\n        "install_hint": "pip install \\"spacy>=3.4,<5\\"",\n        "purpose": "named-entity detection"\n      },\n      "nltk": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "nltk",\n        "version": "3.10.3",\n        "supported": "nltk>=3.6,<4",\n        "detail": "nltk 3.10.3 satisfies nltk>=3.6,<4",\n        "install_hint": "pip install \\"nltk>=3.6,<4\\"",\n        "purpose": "named-entity detection without spaCy (English only)"\n      },\n      "web": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "flask",\n        "version": "3.1.3",\n        "supported": "flask>=2.2,<4",\n        "detail": "flask 3.1.3 satisfies flask>=2.2,<4",\n        "install_hint": "pip install \\"flask>=2.2,<4\\"",\n        "purpose": "the local web interface"\n      },\n      "crypto": {\n        "status": "AVAILABLE",\n        "available": true,\n        "distribution": "cryptography",\n        "version": "50.0.2",\n        "supported": "cryptography>=41",\n        "detail": "cryptography 50.0.2 satisfies cryptography>=41",\n        "install_hint": "pip install \\"cryptography>=41\\"",\n        "purpose": "the Fernet vault cipher (--cipher fernet); encryption itself needs no tier"\n      }\n    },\n    "blind_spots": [\n      {\n        "category": "Names, organisations, places and other named entities",\n        "reason": "named-entity detection is not running, and no regular expression can recognise a person\'s name",\n        "remedy": "spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)",\n        "examples": [\n          "a person\'s full name",\n          "a company or institution",\n          "a city or country"\n        ],\n        "severity": "high"\n      },\n      {\n        "category": "Capitalised multi-word names (partial cover)",\n        "reason": "the TITLE_CASE pattern is available but not enabled; it finds runs of capitalised words without needing spaCy, at the cost of false positives",\n        "remedy": "add TITLE_CASE to the detection kinds (--kinds ... TITLE_CASE), or use --suggest to review candidates and hide them explicitly",\n        "examples": [\n          "Mustafa Kemal",\n          "Acme Corporation"\n        ],\n        "severity": "medium"\n      },\n      {\n        "category": "Disabled structural patterns",\n        "reason": "1 built-in pattern(s) are not enabled: TITLE_CASE",\n        "remedy": "drop --kinds to enable every built-in pattern",\n        "examples": [\n          "TITLE_CASE"\n        ],\n        "severity": "medium"\n      }\n    ]\n  },\n  "actions": [\n    "spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)",\n    "Review 12 suggested term(s) and hide any that matter."\n  ],\n  "status": "ok"\n}\n', stderr='')

```

The two real values in the rendered table are caught, and an address. The
column names, the production path, the analyst’s home directory, the segment
names and the figure all go to the model, and nothing says so.

## 3. Reading it as a notebook instead[#](#reading-it-as-a-notebook-instead "Link to this heading")

`--as` is inferred from the suffix, so in practice you type neither of
these. `--infer-roles` is the one worth typing: without it a column becomes
`field_1`, which is safe and tells the model nothing.

```
clean = _HOME / "churn.clean.ipynb"

run(
    "encode",
    "--vault-mode",
    "overwrite",
    "--infer-roles",
    "--in",
    str(source),
    "--out",
    str(clean),
)

```
```
$ cleanprompt encode --vault-mode overwrite --infer-roles --in <workspace>/churn.ipynb --out <workspace>/churn.clean.ipynb
  err │ vault: <workspace>/vault.json (overwrite, 14 value(s))
      │ read as notebook: binary=1, code=10, metadata=58, output=4, prose=3, traceback=4
      │   7 column name(s) hidden; 7 with an established role
      │     amount_1       <- role amount (inferred)
      │     amount_2       <- role amount (inferred)
      │     flag_1         <- role flag (inferred)
      │     id_1           <- role id (inferred)
      │     score_1        <- role score (inferred)
      │     category_1     <- role category (inferred)
      │     date_1         <- role date (inferred)
      │ warning: Names, organisations, places and other named entities not detected
      │   spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'encode', '--vault-mode', 'overwrite', '--infer-roles', '--in', '/tmp/scikitplot-cleanprompt-nb-fxst5okf/churn.ipynb', '--out', '/tmp/scikitplot-cleanprompt-nb-fxst5okf/churn.clean.ipynb'], returncode=0, stdout='', stderr='vault: /tmp/scikitplot-cleanprompt-nb-fxst5okf/vault.json (overwrite, 14 value(s))\nread as notebook: binary=1, code=10, metadata=58, output=4, prose=3, traceback=4\n  7 column name(s) hidden; 7 with an established role\n    amount_1       <- role amount (inferred)\n    amount_2       <- role amount (inferred)\n    flag_1         <- role flag (inferred)\n    id_1           <- role id (inferred)\n    score_1        <- role score (inferred)\n    category_1     <- role category (inferred)\n    date_1         <- role date (inferred)\nwarning: Names, organisations, places and other named entities not detected\n  spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)\n')

```

Read that report rather than skimming it. Three of its lines are the ones
that matter:

* `read as notebook: code=…, output=…, traceback=…` — the document was
  understood as a structure, not as a wall of text.
* `N column name(s) hidden; M with an established role` — when `M` is
  below `N`, the rest became `field_n` and the model lost that context.
* anything beginning `NOT hidden` or `NOT read` — the two places where a
  column can exist and not be protected.

## 4. What the model receives[#](#what-the-model-receives "Link to this heading")

```
redacted = json.loads(clean.read_text(encoding="utf-8"))

for index, cell in enumerate(redacted["cells"], start=1):
    body = "".join(cell["source"]).rstrip()
    print("--- cell {0} ({1}) ---".format(index, cell["cell_type"]))
    print(body)
    for output in cell.get("outputs", []):
        print("    [{0}] {1}".format(output["output_type"], json.dumps(output)[:96]))

```
```
--- cell 1 (markdown) ---
# Q1 churn model — Acme Financial

Pull from `/data/dataset_1.parquet`.
--- cell 2 (code) ---
import pandas as pd
df = pd.read_parquet('/data/dataset_1.parquet')
df = df[['id_1', 'amount_1', 'date_1',
         'category_1', 'score_1', 'flag_1']]
df.head(2)
    [execute_result] {"output_type": "execute_result", "execution_count": 1, "metadata": {}, "data": {"text/plain": [
--- cell 3 (code) ---
print(df['category_1'].value_counts())
    [stream] {"output_type": "stream", "name": "stdout", "text": ["[OUTPUT-4]"]}
--- cell 4 (code) ---
X = df.drop(columns=['flag_1', 'id_1'])
X['amount_2'] = np.log1p(X.acct_balance)
    [error] {"output_type": "error", "ename": "KeyError", "evalue": "'acct_balance'", "traceback": ["File /d
--- cell 5 (code) ---
plt.barh(X.columns, model.feature_importances_)
plt.title('Acme drivers — score_1 dominates')
    [display_data] {"output_type": "display_data", "metadata": {}, "data": {"image/png": "[FIGURE-1]"}}

```

Four things in that output are worth naming.

The ****code still reads as code****. `df[['id_1', 'amount_1', 'date_1',
'category_1', 'score_1', 'flag_1']]` is something a model can work with.

`X.acct_balance` became `X.amount_…` even though attribute access is
deliberately **not** used to discover a column. Discovery is conservative and
works only from unambiguous positions; rewriting, once the name is known,
covers every occurrence. Collapsing the two would either miss columns or
corrupt code.

The ****rendered outputs are gone****, not filtered. An output is not a
description of the data, it **is** the data, and parsing inside a pandas repr
means a silent leak every time the repr changes. The figure is gone for the
same reason: a chart of real data shows real axis labels.

The ****structure survived****. `output_type`, `execution_count` and the cell
ids are byte-identical, so the file still opens.

## 5. The payoff: a reply, decoded[#](#the-payoff-a-reply-decoded "Link to this heading")

Paste the clean notebook into any chat. The answer comes back in stand-ins,
and `decode` turns it into your own schema — including code the model wrote
that did not exist when you encoded.

```
REPLY = (
    "Three things. Drop id_1 — it is an identifier, not a feature, and "
    "leaving it in will leak. Log-transform amount_1, which is skewed. "
    "One-hot category_1, and check date_1 for target leakage:\n\n"
    "    X = df.drop(columns=['id_1'])\n"
    "    X['amount_1'] = np.log1p(X['amount_1'])\n"
    "    X = pd.get_dummies(X, columns=['category_1'])\n"
)

run("decode", REPLY)

```
```
$ cleanprompt decode "Three things. Drop id_1 — it is an identifier, not a feature, and leaving it in will leak. Log-transform amount_1, which is skewed. One-hot category_1, and check date_1 for target leakage:

    X = df.drop(columns=['id_1'])
    X['amount_1'] = np.log1p(X['amount_1'])
    X = pd.get_dummies(X, columns=['category_1'])
"
  out │ Three things. Drop customer_ssn — it is an identifier, not a feature, and leaving it in will leak. Log-transform acct_balance_usd, which is skewed. One-hot region_code, and check signup_date for target leakage:
      │
      │     X = df.drop(columns=['customer_ssn'])
      │     X['acct_balance_usd'] = np.log1p(X['acct_balance_usd'])
      │     X = pd.get_dummies(X, columns=['region_code'])
  err │ restored 4 placeholder(s); 10 vault entr(y/ies) unused
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'decode', "Three things. Drop id_1 — it is an identifier, not a feature, and leaving it in will leak. Log-transform amount_1, which is skewed. One-hot category_1, and check date_1 for target leakage:\n\n    X = df.drop(columns=['id_1'])\n    X['amount_1'] = np.log1p(X['amount_1'])\n    X = pd.get_dummies(X, columns=['category_1'])\n"], returncode=0, stdout="Three things. Drop customer_ssn — it is an identifier, not a feature, and leaving it in will leak. Log-transform acct_balance_usd, which is skewed. One-hot region_code, and check signup_date for target leakage:\n\n    X = df.drop(columns=['customer_ssn'])\n    X['acct_balance_usd'] = np.log1p(X['acct_balance_usd'])\n    X = pd.get_dummies(X, columns=['region_code'])\n", stderr='restored 4 placeholder(s); 10 vault entr(y/ies) unused\n')

```

That is the property the whole design is for. The advice is specific and
correct, the code is pasteable, and the model never saw a column name, a
path, a row or a figure.

## 6. Everything is restorable, exactly[#](#everything-is-restorable-exactly "Link to this heading")

The notebook itself round-trips byte for byte, which is what makes it safe to
work on the redacted copy and put the values back at the end.

```
restored = _HOME / "churn.restored.ipynb"
run("decode", "--quiet", "--in", str(clean), "--out", str(restored))

print()
print(
    "notebook round trip exact:",
    restored.read_text(encoding="utf-8") == source.read_text(encoding="utf-8"),
)
assert restored.read_text(encoding="utf-8") == source.read_text(encoding="utf-8")

```
```
$ cleanprompt decode --quiet --in <workspace>/churn.clean.ipynb --out <workspace>/churn.restored.ipynb
  exit │ 0

notebook round trip exact: True

```

## 7. What is still not hidden, and why[#](#what-is-still-not-hidden-and-why "Link to this heading")

One thing survives on purpose, and the report says so every time.

```
text = clean.read_text(encoding="utf-8")
for probe in (
    "customer_ssn",
    "123-45-6789",
    "AC-NORTH",
    "/mnt/prod",
    "marion.holt",
    "internal_risk_score_v3",
    "Acme",
):
    print("  {0:<24} survives: {1}".format(probe, probe in text))

```
```
customer_ssn             survives: False
123-45-6789              survives: False
AC-NORTH                 survives: False
/mnt/prod                survives: False
marion.holt              survives: False
internal_risk_score_v3   survives: False
Acme                     survives: True

```

`Acme` is a named entity, and no regular expression recognises one. That is
the blind spot `doctor` reports and the entity tier exists for. Two
remedies, and the second needs nothing installed:

```
cleanprompt encode --ner --in analysis.ipynb --out analysis.clean.ipynb
cleanprompt encode --hide "Acme Financial" --hide Acme --in analysis.ipynb

```

The point is not that the tool catches everything. It is that the tool says
what it did not catch, every time, instead of reporting three values removed
and calling the file clean.

```
run("encode", "--quiet", "--vault-mode", "overwrite", "--infer-roles",
    "--hide", "Acme", "--in", str(source), "--out", str(clean))

print("with --hide Acme, 'Acme' survives:", "Acme" in clean.read_text(encoding="utf-8"))

```
```
$ cleanprompt encode --quiet --vault-mode overwrite --infer-roles --hide Acme --in <workspace>/churn.ipynb --out <workspace>/churn.clean.ipynb
  exit │ 0
with --hide Acme, 'Acme' survives: False

```

## 8. Declaring what inference cannot know[#](#declaring-what-inference-cannot-know "Link to this heading")

`--infer-roles` reads names, and a name is not evidence of a type. Where it
matters, say so: a declared role always wins and is reported as `declared`
rather than `inferred`.

`--add-column` answers the other half — a column the conservative discovery
rule could not establish, which the report names for you.

```
run(
    "encode",
    "--quiet",
    "--vault-mode",
    "overwrite",
    "--columns",
    "churned:target,acct_balance_usd:amount,internal_risk_score_v3:score",
    "--in",
    str(source),
    "--out",
    str(clean),
)

print("target column reads as:", "target" in clean.read_text(encoding="utf-8"))

```
```
$ cleanprompt encode --quiet --vault-mode overwrite --columns churned:target,acct_balance_usd:amount,internal_risk_score_v3:score --in <workspace>/churn.ipynb --out <workspace>/churn.clean.ipynb
  exit │ 0
target column reads as: True

```

## 9. A module, and any other stage[#](#a-module-and-any-other-stage "Link to this heading")

The same pipeline reads a `.py` file, so a feature builder, a training
script or a scoring job goes through unchanged.

```
module = _HOME / "features.py"
module.write_text(
    '"""Feature builder. Reads /mnt/prod/exports/q1_acme.parquet."""\n'
    "import pandas as pd\n"
    "\n"
    'ID_COLUMNS = ["customer_ssn", "acct_external_ref"]\n'
    'TARGET = "churned"\n'
    "\n"
    "def build(path):\n"
    "    df = pd.read_parquet(path)\n"
    '    df["balance_log"] = np.log1p(df["acct_balance_usd"])\n'
    "    return df.drop(columns=ID_COLUMNS), df[TARGET]\n",
    encoding="utf-8",
)

run("encode", "--vault-mode", "overwrite", "--infer-roles", "--in", str(module))

```
```
$ cleanprompt encode --vault-mode overwrite --infer-roles --in <workspace>/features.py
  out │ """Feature builder. Reads /data/dataset_1.parquet."""
      │ import pandas as pd
      │
      │ ID_COLUMNS = ["id_2", "id_1"]
      │ TARGET = "flag_1"
      │
      │ def build(path):
      │     df = pd.read_parquet(path)
      │     df["amount_2"] = np.log1p(df["amount_1"])
      │     return df.drop(columns=ID_COLUMNS), df[TARGET]
  err │ vault: <workspace>/vault.json (overwrite, 6 value(s))
      │ read as python: code=1
      │   5 column name(s) hidden; 5 with an established role
      │     amount_1       <- role amount (inferred)
      │     id_1           <- role id (inferred)
      │     amount_2       <- role amount (inferred)
      │     flag_1         <- role flag (inferred)
      │     id_2           <- role id (inferred)
      │ warning: Names, organisations, places and other named entities not detected
      │   spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'encode', '--vault-mode', 'overwrite', '--infer-roles', '--in', '/tmp/scikitplot-cleanprompt-nb-fxst5okf/features.py'], returncode=0, stdout='"""Feature builder. Reads /data/dataset_1.parquet."""\nimport pandas as pd\n\nID_COLUMNS = ["id_2", "id_1"]\nTARGET = "flag_1"\n\ndef build(path):\n    df = pd.read_parquet(path)\n    df["amount_2"] = np.log1p(df["amount_1"])\n    return df.drop(columns=ID_COLUMNS), df[TARGET]\n', stderr='vault: /tmp/scikitplot-cleanprompt-nb-fxst5okf/vault.json (overwrite, 6 value(s))\nread as python: code=1\n  5 column name(s) hidden; 5 with an established role\n    amount_1       <- role amount (inferred)\n    id_1           <- role id (inferred)\n    amount_2       <- role amount (inferred)\n    flag_1         <- role flag (inferred)\n    id_2           <- role id (inferred)\nwarning: Names, organisations, places and other named entities not detected\n  spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)\n')

```

Note what happened to `ID_COLUMNS` and `TARGET`. Neither is a column
name, and neither was guessed at: they are names bound to string literals,
and the discovery walk resolves a name used as a selector against the literal
it was bound to — possibly several cells earlier. Without that, a module
written the way careful people write them would leak every column it
declared at the top.

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
      │   it held 6 value(s): COLUMN=5, PATH=1
      │   note: this unlinks the file. On a journalling filesystem or an SSD the bytes may survive; use --encrypt with a key you hold for values that must not be recoverable.
  exit │ 0
Temporary workspace cleaned: True

```

Tags: [model-workflow: cleanprompt](../../_tags/model-workflow-cleanprompt.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 5.613 seconds)

[![Launch binder](../../_images/binder_badge_logo3.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cleanprompt/plot_cleanprompt_notebooks_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo3.svg)](../../lite/lab/index.html?path=auto_examples/cleanprompt/plot_cleanprompt_notebooks_script.ipynb)

[`Download Jupyter notebook: plot_cleanprompt_notebooks_script.ipynb`](../../_downloads/96523cfe6a5ed7a2afdf52a8fa3daa53/plot_cleanprompt_notebooks_script.ipynb)

[`Download Python source code: plot_cleanprompt_notebooks_script.py`](../../_downloads/54bc86a1ba5ccf1b7fe45fd448662c80/plot_cleanprompt_notebooks_script.py)

[`Download zipped: plot_cleanprompt_notebooks_script.zip`](../../_downloads/f947abe994a04d345cbd157011a369a1/plot_cleanprompt_notebooks_script.zip)

Related examples

![](../../_images/sphx_glr_plot_cleanprompt_recipes_script_thumb.png)

[Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents](plot_cleanprompt_recipes_script.html)

Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents![](../../_images/sphx_glr_plot_cleanprompt_cli_usage_script_thumb.png)

[Cleanprompt on the Command Line: Single Commands and Edge Cases](plot_cleanprompt_cli_usage_script.html)

Cleanprompt on the Command Line: Single Commands and Edge Cases![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle![](../../_images/sphx_glr_plot_cleanprompt_basics_script_thumb.png)

[Cleanprompt Basics: Hide a Value, Then Get It Back](plot_cleanprompt_basics_script.html)

Cleanprompt Basics: Hide a Value, Then Get It Back

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)