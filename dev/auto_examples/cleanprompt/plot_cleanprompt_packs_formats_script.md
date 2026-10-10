> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cleanprompt-plot-cleanprompt-packs-formats-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Cleanprompt Packs and Formats: Records, Configs and Whole Folders[#](#cleanprompt-packs-and-formats-records-configs-and-whole-folders "Link to this heading")

Patterns find values by their **shape**: an address looks like an address. A
record says what its values are in its **keys**, and a pattern cannot read a key:

```
{"mrn": "00412345"}          an eight-digit number, to a pattern
DB_PASSWORD=pw-1             four characters, to a pattern
member_id,M-00412            nothing at all, to a pattern

```

Packs close that gap. A ****pack**** is a validated YAML definition of what to hide
in one domain — `personal`, `addressbook`, `patient`, `finance`,
`secrets`, `records`, `email`, `cloud`, and `pandas`/`numpy`/
`sklearn` for code. A ****format**** says how a kind of file is read — CSV by its
header, JSON by its keys, `.env` by `KEY=value`, a Word file by extracting
its text — and which packs suit it. [`FluentCleanPrompt`](../../modules/generated/scikitplot.cleanprompt.FluentCleanPrompt.html#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt.FluentCleanPrompt") combines them
into one immutable plan, and [`Cleaner`](../../modules/generated/scikitplot.cleanprompt.Cleaner.html#scikitplot.cleanprompt.Cleaner "scikitplot.cleanprompt.Cleaner") applies the plan to text, files,
folders and zip archives under one shared vault.

Every value in this example is reserved and cannot reach anybody.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import io
import json
import os
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path

from scikitplot.cleanprompt import (
    CleanPromptError,
    FluentCleanPrompt,
    builtin_catalog,
    encode,
    load_custom,
)

_WORKSPACE = tempfile.TemporaryDirectory(prefix="scikitplot-cleanprompt-packs-")
_HOME = Path(_WORKSPACE.name)
os.environ["CLEANPROMPT_VAULT"] = str(_HOME / "vault.json")


def show(label: str, text: str) -> None:
    """Print a labelled block with the workspace path masked."""
    print("── {0} ──".format(label))
    print(text.replace(_WORKSPACE.name, "<workspace>").rstrip("\n"))
    print()

```

## 1. The leak packs exist to close[#](#the-leak-packs-exist-to-close "Link to this heading")

A patient record through the pattern engine alone. Nothing in it has the
shape of an address, a card or a telephone number, so nothing is hidden.

```
RECORD = (
    '{"patient": {"mrn": "00412345", "name": "Marion Holt", '
    '"diagnosis": "E11.9", "insurer_id": "ZX-4471-09", "age": 61}}'
)
patterns_only, _ = encode(RECORD)
show("patterns only", patterns_only)
assert "00412345" in patterns_only  # the measured defect, CP-048

cleaner = FluentCleanPrompt().materialize()  # packs('auto'): the format chooses
safe = cleaner.encode_text(RECORD, "json")
show("with packs", safe.text)
for secret in ("00412345", "Marion Holt", "E11.9", "ZX-4471-09"):
    assert secret not in safe.text
assert cleaner.decode(safe.text) == RECORD
print("report:", json.dumps(safe.report["kinds"]))

```
```
── patterns only ──
{"patient": {"mrn": "00412345", "name": "Marion Holt", "diagnosis": "E11.9", "insurer_id": "ZX-4471-09", "age": 61}}

── with packs ──
{"patient": {"mrn": "[MRN-1]", "name": "[PERSON-1]", "diagnosis": "[DIAGNOSIS-1]", "insurer_id": "[INSURANCE_ID-1]", "age": 61}}

report: {"DIAGNOSIS": 1, "INSURANCE_ID": 1, "MRN": 1, "PERSON": 1}

```

The output is still JSON, and it stays JSON even for numbers: a hidden JSON
number becomes a reserved negative number rather than `[MRN-1]`, which no
parser would open and which a model would “repair” into a string.

```
numbers = FluentCleanPrompt().packs("patient").materialize()
numeric = numbers.encode_text('{"mrn": 20417, "visits": 3}', "json")
show("a hidden number", numeric.text)
json.loads(numeric.text)
assert numbers.decode(numeric.text) == '{"mrn": 20417, "visits": 3}'

```
```
── a hidden number ──
{"mrn": -9900000001, "visits": 3}

```

## 2. What is available[#](#what-is-available "Link to this heading")

Everything is data, compiled into a JSON file the standard library reads, so
listing it needs nothing installed.

```
catalog = builtin_catalog()
for spec in catalog.resolve_packs("all"):
    print(
        "pack   {0:<12} fields={1:<2} patterns={2}  {3}".format(
            spec.name, len(spec.fields), len(spec.patterns), spec.summary[:60]
        )
    )
print()
for name in ("csv", "json", "env", "notebook", "docx", "archive"):
    spec = catalog.formats[name]
    print(
        "format {0:<9} {1:<16} round trip={2!s:<5} auto packs={3}".format(
            name, ",".join(spec.extensions), spec.round_trip, ",".join(spec.packs)
        )
    )

```
```
pack   personal     fields=9  patterns=3  Names, contact details, birth dates and national identifiers
pack   addressbook  fields=7  patterns=1  Contact entries - organisation, role, postal and web details
pack   cloud        fields=2  patterns=2  Drive, bucket, project, tenant and account identifiers, and
pack   email        fields=3  patterns=1  Message headers - senders, recipients, message ids and routi
pack   finance      fields=4  patterns=2  Account and routing numbers, salaries, tax identifiers and c
pack   numpy        fields=0  patterns=0  NumPy field-naming arguments and dtype codes, for notebooks
pack   pandas       fields=0  patterns=0  pandas column-naming arguments and dtype spellings, for note
pack   patient      fields=9  patterns=4  Clinical identifiers, dates, diagnoses and medications in pa
pack   records      fields=3  patterns=2  Customer, account, employee, student and device identifiers
pack   secrets      fields=1  patterns=7  Passwords, tokens, API keys and connection strings in code a
pack   sklearn      fields=0  patterns=0  scikit-learn column lists in ColumnTransformer and friends,

format csv       .csv             round trip=True  auto packs=finance,patient,personal,records,secrets
format json      .geojson,.har,.json round trip=True  auto packs=finance,patient,personal,records,secrets
format env       .env,.envrc,.flaskenv round trip=True  auto packs=cloud,personal,secrets
format notebook  .ipynb           round trip=True  auto packs=numpy,pandas,secrets,sklearn
format docx      .docm,.docx      round trip=False auto packs=finance,patient,personal,secrets
format archive   .zip             round trip=True  auto packs=finance,patient,personal,secrets

```

## 3. Three ways to choose[#](#three-ways-to-choose "Link to this heading")

`all` for everything, one pack for one domain, or any combination. A pack’s
requirements come with it: `addressbook` needs `personal`.

```
CONTACTS = "name,email,title,org\nMarion Holt,marion@example.com,Analyst,Acme Ltd\n"
for selection in (("all",), ("addressbook",), ("personal", "finance")):
    one = FluentCleanPrompt().packs(*selection).materialize()
    encoded = one.encode_text(CONTACTS, "csv")
    print("{0:<22} packs={1}".format(" + ".join(selection), encoded.report["packs"]))
    print("  ", encoded.text.splitlines()[1])
    assert one.decode(encoded.text) == CONTACTS

```
```
all                    packs=['personal', 'addressbook', 'cloud', 'email', 'finance', 'numpy', 'pandas', 'patient', 'records', 'secrets', 'sklearn']
   [PERSON-1],[EMAIL-1],[JOB-1],[ORG-1]
addressbook            packs=['personal', 'addressbook']
   [PERSON-1],[EMAIL-1],[JOB-1],[ORG-1]
personal + finance     packs=['personal', 'finance']
   [PERSON-1],[EMAIL-1],Analyst,Acme Ltd

```

## 4. A plan is immutable, validated and fingerprinted[#](#a-plan-is-immutable-validated-and-fingerprinted "Link to this heading")

Each setter returns a new builder. Setting one domain twice is refused unless
you say what you meant, and a broken plan reports every problem at once.

```
base = FluentCleanPrompt().packs("patient")
print(base.packs("finance", conflict="extend").plan().packs)
try:
    base.packs("finance")
except CleanPromptError as error:
    print("refused:", error)

problems = FluentCleanPrompt().packs("patinet").formats("docz").style("fancy").validate()
for problem in problems:
    print("problem:", problem.splitlines()[0])
assert len(problems) == 3

first = FluentCleanPrompt().packs("patient", "finance").formats("csv", ".json").plan()
second = FluentCleanPrompt().formats(".json", "csv").packs("finance", "patient").plan()
assert first.fingerprint() == second.fingerprint()
print("same plan, any order:", first.fingerprint()[:16])

```
```
('finance', 'patient')
refused: packs is already set to ('patient',); pass conflict='replace' or conflict='extend'
problem: style: 'fancy' is not one of placeholder, surrogate
problem: formats: unknown format 'docz'; did you mean docx, .docx, .docm? Known formats: archive, csv, docx, email, env, html, ini, javascript, json, jsonl, markdown, notebook, pdf, pptx, python, rlang, rst, shell, sql, text, tsv, vcard, xlsx, yaml
problem: packs: unknown pack 'patinet'; did you mean patient? Known packs: addressbook, cloud, email, finance, numpy, pandas, patient, personal, records, secrets, sklearn
same plan, any order: c63c7e3e49f2e48f

```

## 5. Your own pack, from a JSON file[#](#your-own-pack-from-a-json-file "Link to this heading")

A custom definition is validated exactly like a built-in: unknown keys are
errors, and every pattern’s examples are executed before it is used. JSON
needs nothing installed; YAML needs PyYAML and says so when it is missing.

****A pack file is trusted configuration, like code.**** Its regular expressions
run on every document you encode with it. Validation checks that they mean
what their examples say; it cannot prove that one finishes quickly on every
input. Python’s `re` backtracks, so a pattern such as `^(a+)+$` takes
time that doubles with each extra character of a near-match — a document
could stall the run. So: load pack files only from people you would accept
code from, review a new pattern for nested repetition (`(x+)+`,
`(x*)*`, `(x|x)+`), and prefer a bounded form (`\d{6}` rather than
`\d+`) wherever the identifier has a fixed shape — as the one below does.

```
hr_pack = {
    "name": "hr",
    "version": 1,
    "summary": "Our HR identifiers.",
    "requires": ["personal"],
    "fields": [{"names": ["badge_id", "employee_number"], "kind": "EMPLOYEE", "role": "id"}],
    "patterns": [
        {
            "kind": "EMPLOYEE",
            "pattern": r"(?i)\bbadge\s*:?\s*(?P<value>EMP-\d{6})\b",
            "intent": "A badge number written with its label.",
            "examples_yes": ["badge: EMP-004121"],
            "examples_no": ["EMP-12"],
        }
    ],
}
hr_path = _HOME / "hr.json"
hr_path.write_text(json.dumps(hr_pack), encoding="utf-8")
print("loaded:", sorted(load_custom(hr_path).packs))

hr = FluentCleanPrompt().custom(str(hr_path)).packs("hr").materialize()
roster = hr.encode_text("badge_id,full_name\nEMP-004121,Marion Holt\n", "csv")
note = hr.encode_text("Visitor badge: EMP-004121 signed in.\n", "text")
show("roster", roster.text)
show("note", note.text)
assert "[EMPLOYEE-1]" in roster.text and "[EMPLOYEE-1]" in note.text  # one value, one label

try:
    import yaml  # noqa: F401
except ImportError:
    print("SKIP: PyYAML is not installed, so the YAML form is not shown")
else:
    yaml_path = _HOME / "hr.yaml"
    yaml_path.write_text(yaml.safe_dump(hr_pack), encoding="utf-8")
    print("YAML loads the same:", sorted(load_custom(yaml_path).packs) == ["hr"])

```
```
loaded: ['hr']
── roster ──
badge_id,full_name
[EMPLOYEE-1],[PERSON-1]

── note ──
Visitor badge: [EMPLOYEE-1] signed in.

YAML loads the same: True

```

## 6. A whole folder[#](#a-whole-folder "Link to this heading")

Every file a selected format reads is encoded into a mirror folder under one
vault. A file no format reads is skipped, one that cannot be read safely is
refused; neither is written, so nothing unexamined leaves.

```
def _docx(paragraphs):
    namespace = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
    body = "".join("<w:p><w:r><w:t>{0}</w:t></w:r></w:p>".format(p) for p in paragraphs)
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, "w") as archive:
        archive.writestr(
            "word/document.xml",
            '<w:document xmlns:w="{0}"><w:body>{1}</w:body></w:document>'.format(namespace, body),
        )
    return buffer.getvalue()


project = _HOME / "project"
(project / "config").mkdir(parents=True)
(project / ".git").mkdir()
(project / "contacts.csv").write_text(
    "name,phone,member_id\nMarion Holt,+1 555 010 4477,M-00412\n", encoding="utf-8"
)
(project / "patient.json").write_text(RECORD, encoding="utf-8")
(project / "config" / ".env").write_text(
    "DB_HOST=db.internal.example\nDB_PASSWORD=pw-correct-horse\n", encoding="utf-8"
)
(project / "visit.docx").write_bytes(_docx(["Seen today. MRN: 00412345.", "Follow up in two weeks."]))
(project / "broken.json").write_text("{", encoding="utf-8")
(project / "logo.png").write_bytes(b"\x89PNG")
(project / ".git" / "config").write_text("[remote]\n", encoding="utf-8")

team = FluentCleanPrompt().materialize()
for item in team.encode_tree(project, _HOME / "safe"):
    print("{0:<8} {1:<18} {2}".format(item.status, item.relative, item.reason or item.output))

show("safe/visit.docx.txt", (_HOME / "safe" / "visit.docx.txt").read_text(encoding="utf-8"))
show("safe/config/.env", (_HOME / "safe" / "config" / ".env").read_text(encoding="utf-8"))

```
```
skipped  .git/              folder is never read
refused  broken.json        not valid JSON, so no field could be located: Expecting property name enclosed in double quotes: line 1 column 2 (char 1)
encoded  contacts.csv       contacts.csv
skipped  logo.png           no selected format reads this file
encoded  patient.json       patient.json
encoded  visit.docx         visit.docx.txt
encoded  config/.env        config/.env
── safe/visit.docx.txt ──
Seen today. MRN: [MRN-1].
Follow up in two weeks.

── safe/config/.env ──
DB_HOST=[HOST-1]
DB_PASSWORD=[SECRET-1]

```

The Word note and the JSON record name the same patient number, and both say
`[MRN-1]`: the vault is shared, and a labelled pattern hides the value, not
its label. Decoding the folder restores every round-trip file byte for byte.

```
list(team.decode_tree(_HOME / "safe", _HOME / "back"))
for name in ("contacts.csv", "patient.json", "config/.env"):
    assert (_HOME / "back" / name).read_bytes() == (project / name).read_bytes()
print("restored byte for byte: contacts.csv, patient.json, config/.env")

```
```
restored byte for byte: contacts.csv, patient.json, config/.env

```

## 7. A zip archive[#](#a-zip-archive "Link to this heading")

Members are handled like files. A member whose name climbs out of the archive
is refused, a nested archive is not opened, and the output is deterministic.

```
bundle = _HOME / "bundle.zip"
with zipfile.ZipFile(bundle, "w") as archive:
    archive.write(project / "contacts.csv", "contacts.csv")
    archive.write(project / "patient.json", "records/patient.json")
    archive.writestr("../escape.txt", "x")
for item in team.encode_archive(bundle, _HOME / "bundle.safe.zip"):
    print("{0:<8} {1:<22} {2}".format(item.status, item.relative, item.reason))
with zipfile.ZipFile(_HOME / "bundle.safe.zip") as archive:
    print("written:", archive.namelist())

```
```
refused  ../escape.txt          its name climbs out of the archive with '..'
encoded  contacts.csv
encoded  records/patient.json
written: ['contacts.csv', 'records/patient.json']

```

## 8. With the corpus submodule[#](#with-the-corpus-submodule "Link to this heading")

[`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") reads documents; cleanprompt makes them safe before
they are embedded, indexed or prompted. Either works without the other.

```
try:
    from scikitplot.corpus import CorpusDocument
except ImportError as error:  # the bridge is optional in both directions
    print("SKIP: scikitplot.corpus is not importable here:", error)
else:
    from scikitplot.cleanprompt import redact_documents

    documents = [
        CorpusDocument.create("visit.txt", 0, "Seen today. MRN: 00412345.", metadata={"patient_name": "Marion Holt"})
    ]
    (safe_doc,) = redact_documents(documents, team)
    print(safe_doc.text, safe_doc.metadata)
    assert "00412345" not in safe_doc.text

team.clear()

```
```
Seen today. MRN: [MRN-1]. {'patient_name': '[PERSON-1]'}

```

## 9. The same from the command line[#](#the-same-from-the-command-line "Link to this heading")

`packs` lists and checks definitions; `batch` encodes a folder or a zip
and writes the vault that `batch --decode` and `decode` read.

```
def _cli() -> list[str]:
    executable = shutil.which("scikitplot")
    if executable:
        return [executable, "cleanprompt"]
    return [sys.executable, "-m", "scikitplot.cleanprompt"]


def run(*arguments: str, limit: int = 12):
    completed = subprocess.run([*_cli(), *arguments], input="", capture_output=True, text=True)
    shown = " ".join(one.replace(_WORKSPACE.name, "<workspace>") for one in arguments)
    print("$ cleanprompt", shown)
    lines = completed.stdout.replace(_WORKSPACE.name, "<workspace>").rstrip("\n").split("\n")
    if len(lines) > limit:
        lines = lines[:limit] + ["... ({0} more)".format(len(lines) - limit)]
    print("  " + "\n  ".join(lines))
    print("  exit", completed.returncode)
    return completed


run("packs", "--check")
done = run("batch", str(project), "--out", str(_HOME / "cli-safe"), "--pack", "all", "-f", "json", limit=6)
assert done.returncode == 1  # broken.json was refused, and a pipeline must see that
run("batch", str(_HOME / "cli-safe"), "--decode", "--out", str(_HOME / "cli-back"), limit=4)
assert (_HOME / "cli-back" / "patient.json").read_text(encoding="utf-8") == RECORD

```
```
$ cleanprompt packs --check
  problems: -
  compiled: matches the YAML
  status: ok
  exit 0
$ cleanprompt batch <workspace>/project --out <workspace>/cli-safe --pack all -f json
  {
    "items": [
      {
        "status": "skipped",
        "relative": ".git/",
        "format": null,
  ... (80 more)
  exit 1
$ cleanprompt batch <workspace>/cli-safe --decode --out <workspace>/cli-back
  items:
    status: decoded
    relative: contacts.csv
    format: -
  ... (32 more)
  exit 0

```

## 10. Cleanup[#](#cleanup "Link to this heading")

```
os.environ.pop("CLEANPROMPT_VAULT", None)
_WORKSPACE.cleanup()
print("Temporary workspace cleaned:", not Path(_WORKSPACE.name).exists())

```
```
Temporary workspace cleaned: True

```

Tags: [model-workflow: cleanprompt](../../_tags/model-workflow-cleanprompt.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 2.223 seconds)

[![Launch binder](../../_images/binder_badge_logo3.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cleanprompt/plot_cleanprompt_packs_formats_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo3.svg)](../../lite/lab/index.html?path=auto_examples/cleanprompt/plot_cleanprompt_packs_formats_script.ipynb)

[`Download Jupyter notebook: plot_cleanprompt_packs_formats_script.ipynb`](../../_downloads/842a00bb73192d2b4b4d628deeefa40e/plot_cleanprompt_packs_formats_script.ipynb)

[`Download Python source code: plot_cleanprompt_packs_formats_script.py`](../../_downloads/30a50452f7608688563eca578f238486/plot_cleanprompt_packs_formats_script.py)

[`Download zipped: plot_cleanprompt_packs_formats_script.zip`](../../_downloads/3f8d27b2810219ac91719e58edcf09e2/plot_cleanprompt_packs_formats_script.zip)

Related examples

![](../../_images/sphx_glr_plot_cleanprompt_guard_agents_script_thumb.png)

[Cleanprompt as a Gate: Any Model, Any Agent, Nothing Private Leaves](plot_cleanprompt_guard_agents_script.html)

Cleanprompt as a Gate: Any Model, Any Agent, Nothing Private Leaves![](../../_images/sphx_glr_plot_cleanprompt_notebooks_script_thumb.png)

[Cleanprompt for Notebooks: Sending an Analysis Without Sending the Data](plot_cleanprompt_notebooks_script.html)

Cleanprompt for Notebooks: Sending an Analysis Without Sending the Data![](../../_images/sphx_glr_plot_cleanprompt_recipes_script_thumb.png)

[Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents](plot_cleanprompt_recipes_script.html)

Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)