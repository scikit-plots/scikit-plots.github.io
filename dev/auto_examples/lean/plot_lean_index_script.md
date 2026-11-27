> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-lean-plot-lean-index-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Gather the Evidence on a Lean Proof with LeanIndex[#](#gather-the-evidence-on-a-lean-proof-with-leanindex "Link to this heading")

A reviewer of a formal proof asks three questions first: what does the
theorem claim, what does its proof rest on, and does any of that rest on
`sorry`, an axiom, `native_decide` or code that adds declarations when
Lean builds the project? `LeanIndex` answers them from the source
text, every item with its file and lines. This example goes from a project
of three files to a generated one of a few hundred:

1. a project summary;
2. a dossier: the statement, what it unfolds to, the path to each flag;
3. what a proof can see: imports decide, not names alone;
4. what a proof could use without naming it;
5. code that adds declarations no source line spells;
6. an incomplete index hides nothing;
7. discovery: rules, patterns, claims and anomalies;
8. helper documents for people and models, exported twice;
9. a pipeline check with `--fail-on`;
10. a generated project, timed.

Everything runs on files the example writes: no Lean toolchain, no download.

> **Note**
> The index is lexical: it reads the text, it does not check proofs. A
dossier without red flags is not a proof; that is for Lean’s kernel
(`lake build`, `#print axioms`, an independent replay), which every
report names.
```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import contextlib
import io
import json
import tempfile
import textwrap
import time
from pathlib import Path

from scikitplot.lean import AUDIT_FLAGS, LeanIndex
from scikitplot.lean._index import main

work = Path(tempfile.mkdtemp(prefix="lean_index_"))


def project(name, files):
    """Write *files* (path to Lean source) under a new folder and return it."""
    root = work / name
    for path, source in files.items():
        target = root / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(textwrap.dedent(source).lstrip("\n"), encoding="utf-8")
    return root


def where(item):
    return f"{item['file']}:{item['line_start']}"

```

## 1. A project summary[#](#a-project-summary "Link to this heading")

Three files: definitions that state a claim, lemmas (one of them left
`sorry`), and the main results. `LeanIndex.summary` covers the
whole project; every flag comes with where it is.

```
demo = project(
    "demo",
    {
        "Demo/Defs.lean": """
            /-- What the project claims. -/
            def Claim : Prop := ∀ n : Nat, Good n
            def Good (n : Nat) : Prop := n = n
        """,
        "Demo/Lemmas.lean": """
            import Demo.Defs
            namespace Demo
            theorem good_all (n : Nat) : Good n := rfl
            theorem shaky : 1 = 2 := sorry
            end Demo
        """,
        "Demo/Main.lean": """
            import Demo.Lemmas
            open Demo
            theorem main : Claim := fun n => good_all n
            theorem main_shaky (k : Nat) : Claim ∧ k = k :=
              ⟨fun n => by have := shaky; exact good_all n, rfl⟩
        """,
    },
)
index = LeanIndex.from_folder(demo)
summary = index.summary()
print(summary["files"], "files,", summary["declarations"], "declarations")
print("flags:", {flag: [where(i) for i in listing["items"]] for flag, listing in summary["flags"].items()})
print("missing project modules:", summary["imports"]["missing_modules"]["count"])

```
```
3 files, 6 declarations
flags: {'sorry': ['Demo/Lemmas.lean:4']}
missing project modules: 0

```

## 2. A dossier[#](#a-dossier "Link to this heading")

`LeanIndex.dossier` quotes the statement and the project
definitions it unfolds to (what the claim **means**), follows the proof
through every declaration it names, and gives the path to each flag. The
verdict never claims more than the text shows.

```
clean = index.dossier("main")
print(clean["verdict"])
print("statement:", clean["target"]["statement"])
print("unfolds to:", [d["declaration"] for d in clean["statement"]["local_definitions"]["items"]])

flagged = index.dossier("main_shaky")
print(flagged["verdict"], flagged["flags_found"])
for item in flagged["dependencies"]["red_flags"]["items"]:
    print(" ", item["declaration"], "at", where(item), "via",
          " -> ".join(step["from"] for step in item["path"]) or "a direct use")
print("\n".join(f"  {c['check']}: {c['status']}" for c in flagged["checks"]))

```
```
no lexical red flags; kernel check pending
statement: theorem main : Claim
unfolds to: ['Claim', 'Good']
lexical red flags: named_dependencies ['sorry']
  Demo.shaky at Demo/Lemmas.lean:4 via main_shaky
  statement_definitions: review
  vacuous_definitions: pass
  named_dependencies: fail
  implicit_dependencies: pass
  duplicate_names: pass
  imported_modules_present: pass
  source_text: pass
  kernel: not_checked

```

`LeanIndex.render` turns any report into Markdown, every item
keeping its `file:line`.

```
print(LeanIndex.render(clean)[:600])

```
```
# Evidence dossier: `main`

**Verdict:** no lexical red flags; kernel check pending.

## Statement (theorem at `Demo/Main.lean:3`)

```lean
theorem main : Claim
```

## What the statement means
- `Claim` (def, `Demo/Defs.lean:1`)

```lean
/-- What the project claims. -/
def Claim : Prop := ∀ n : Nat, Good n
```

- `Good` (def, `Demo/Defs.lean:3`)

```lean
def Good (n : Nat) : Prop := n = n
```

From dependencies: none.

## What the proof names
3 declarations in 2 files (found by name: 3 exact, 0 by prefix, 0 by suffix).

## Used without a name: 0

## Checks
- statement_definitions: **review**

```

## 3. What a proof can see[#](#what-a-proof-can-see "Link to this heading")

A name links only into the proof’s own file and the files it imports, as
Lean sees them. Here `helper` is declared twice: once in an imported
file (clean), once in a scratch file nothing imports (`sorry`). Only
the first is a dependency; `visibility="all"` links by text alone.

```
scoped = project(
    "scoped",
    {
        "S/Core.lean": "theorem helper : True := trivial\n",
        "S/Main.lean": "import S.Core\ntheorem main : True := helper\n",
        "Scratch/Try.lean": "theorem helper' : True := sorry\ntheorem helper : True := sorry\n",
    },
)
for visibility in ("imports", "all"):
    report = LeanIndex.from_folder(scoped, visibility=visibility).dossier("main")
    print(f"{visibility:>7}: flags {report['flags_found']}")

```
```
imports: flags []
    all: flags ['sorry']

```

## 4. What a proof could use without naming it[#](#what-a-proof-could-use-without-naming-it "Link to this heading")

Lean finds instances, `@[simp]` lemmas and notation without their names
in the proof. A dossier lists the flagged ones in the proof’s environment
(files it imports; its own file before it) as risks to review.

```
implicit = project(
    "implicit",
    {
        "I/Inst.lean": "instance seen : Inhabited Nat := sorry\n",
        "I/Far.lean": "instance unseen : Inhabited Nat := sorry\n",
        "I/Main.lean": "import I.Inst\ntheorem main : True := trivial\n",
    },
)
report = LeanIndex.from_folder(implicit).dossier("main")
print(report["verdict"])
print([(r["declaration"], where(r)) for r in report["implicit_risks"]["items"]])

```
```
no lexical red flags; kernel check pending
[('seen', 'I/Inst.lean:1')]

```

## 5. Code that adds declarations[#](#code-that-adds-declarations "Link to this heading")

A command the project defines (here `copy_all`) can run code that adds
declarations when Lean builds the file: their source is nowhere. Commands
are learned from the project, and each invocation that reaches
`addDecl` is reported with the path to it.

```
generated = project(
    "generated",
    {
        "G/Meta.lean": """
            open Lean Elab Command
            def mkCopies : CommandElabM Unit := do
              liftCoreM (addDecl default)
            elab "copy_all" : command => mkCopies
        """,
        "G/Use.lean": "import G.Meta\ncopy_all\ntheorem plain : 1 = 1 := rfl\n",
    },
)
for item in LeanIndex.from_folder(generated).summary()["generators"]["items"]:
    adder = item["adds_declarations_at"]
    print(item["invocation"]["kind"], "at", where(item["invocation"]),
          "runs", adder["declaration"], "at", where(adder))

```
```
copy_all at G/Use.lean:2 runs mkCopies at G/Meta.lean:2

```

## 6. An incomplete index hides nothing[#](#an-incomplete-index-hides-nothing "Link to this heading")

`main` names `stale`, a `sorry` in a file it does not import: from
the project root, that is no dependency. Indexed from the subfolder
`S/`, `import S.Core` matches no file, so what `main` sees is
unknown: it sees everything rather than nothing, and the check on
imported modules fails and says why. Index a project from its root.

```
partial = project(
    "partial",
    {
        "S/Core.lean": "theorem helper : True := trivial\n",
        "S/Old.lean": "theorem stale : True := sorry\n",
        "S/Main.lean": "import S.Core\ntheorem main : True := stale\n",
    },
)
for root in (partial, partial / "S"):
    report = LeanIndex.from_folder(root).dossier("main")
    status = {c["check"]: c["status"] for c in report["checks"]}["imported_modules_present"]
    print(f"from {root.name}/: flags {report['flags_found']}, imported modules: {status}")

```
```
from partial/: flags [], imported modules: pass
from S/: flags ['sorry'], imported modules: fail

```

## 7. Discovery[#](#discovery "Link to this heading")

`LeanIndex.discover` lists candidates, each by a stated rule:
results named from many files (rules), theorems of one statement shape
(patterns), what is stated without proof (claims), and questions the
structure raises (anomalies). A candidate is not a conclusion.

```
found = index.discover()
print("rules:", [i["declaration"] for i in found["rules"]["load_bearing_theorems"]["items"]])
print("concepts:", [i["declaration"] for i in found["rules"]["central_concepts"]["items"]])
print("claims:", [i["declaration"] for i in found["claims"]["claim_definitions"]["items"]])
print("unproven:", [i["declaration"] for i in found["claims"]["unproven"]["items"]])
print("headline results:", [i["declaration"] for i in found["headline_results"]["items"]])

```
```
rules: ['Demo.good_all', 'Demo.shaky']
concepts: ['Good', 'Claim']
claims: ['Claim', 'Good']
unproven: ['Demo.shaky']
headline results: ['main', 'main_shaky']

```

## 8. Helper documents, exported twice[#](#helper-documents-exported-twice "Link to this heading")

`LeanIndex.export` writes the summary, discovery, a dossier per
headline result (and per target) as Markdown and JSON, and one JSON
record per item for a corpus or an MCP server. Exporting again with
fewer targets removes what it no longer writes, and nothing else.

```
out = work / "helpers"
first = index.export(out, targets=["Demo.good_all"])  # not a headline result
second = index.export(out)
print(len(first), "then", len(second), "files;", sorted(set(first) - set(second)))
record = json.loads((out / "records.jsonl").read_text(encoding="utf-8").splitlines()[0])
print({k: record[k] for k in ("section", "title", "file", "line_start")})

```
```
15 then 13 files; ['dossiers/Demo.good_all-23fb20e7.json', 'dossiers/Demo.good_all-23fb20e7.md']
{'section': 'rule', 'title': 'rule: Demo.good_all', 'file': 'Demo/Lemmas.lean', 'line_start': 3}

```

## 9. A pipeline check[#](#a-pipeline-check "Link to this heading")

`python -m scikitplot.lean FOLDER --target NAME --fail-on sorry` (or
`scikitplot lean ...`) exits 1 when the flag is found. A misspelled flag
is refused, so a typo cannot pass a pipeline.

```
print(sorted(AUDIT_FLAGS))
for target in ("main", "main_shaky"):
    with contextlib.redirect_stdout(io.StringIO()):
        status = main([str(demo), "--target", target, "--fail-on", "sorry"])
    print(f"{target}: exit {status}")

```
```
['add_decl', 'admit', 'after_exit', 'axiom', 'extern', 'implemented_by', 'native', 'skip_kernel_tc', 'sorry', 'unsafe']
main: exit 0
main_shaky: exit 1

```

## 10. A generated project[#](#a-generated-project "Link to this heading")

A chain of 300 modules of 20 theorems each, one `sorry` near the start.
Indexing is linear in the text; a dossier at the far end follows the
proof back through every module to the flag.

```
files = {}
for m in range(300):
    head = f"import Big.M{m - 1}\n" if m else ""
    body = [f"theorem t{m}_{i} : {i} = {i} := rfl" for i in range(20)]
    if m:
        body.append(f"theorem link{m} : True := link{m - 1}")
    else:
        body.append("theorem link0 : True := sorry")
    files[f"Big/M{m}.lean"] = head + "\n".join(body) + "\n"
big = project("big", files)

start = time.perf_counter()
big_index = LeanIndex.from_folder(big)
indexed = time.perf_counter() - start
start = time.perf_counter()
far = big_index.dossier("link299")
asked = time.perf_counter() - start
print(f"{len(files)} files indexed in {indexed:.2f} s; dossier in {asked:.3f} s")
print(far["verdict"], "-", far["dependencies"]["declarations"], "declarations reached")

```
```
300 files indexed in 0.89 s; dossier in 0.007 s
lexical red flags: named_dependencies - 299 declarations reached

```

Tags: [model-workflow: lean](../../_tags/model-workflow-lean.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 1.061 seconds)

[![Launch binder](../../_images/binder_badge_logo26.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/lean/plot_lean_index_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo26.svg)](../../lite/lab/index.html?path=auto_examples/lean/plot_lean_index_script.ipynb)

[`Download Jupyter notebook: plot_lean_index_script.ipynb`](../../_downloads/b0a277dce413459eafa6f2e782290425/plot_lean_index_script.ipynb)

[`Download Python source code: plot_lean_index_script.py`](../../_downloads/77e8061fe499c1600e54d2aa6a73c2e5/plot_lean_index_script.py)

[`Download zipped: plot_lean_index_script.zip`](../../_downloads/cd8f47b2cce25264892627585c6ed9c6/plot_lean_index_script.zip)

Related examples

![](../../_images/sphx_glr_plot_lean_audit_script_thumb.png)

[Audit an AI-Assisted Formal Proof with LeanIndex](plot_lean_audit_script.html)

Audit an AI-Assisted Formal Proof with LeanIndex![](../../_images/sphx_glr_plot_lean_layers_script_thumb.png)

[Index a Lean Project over its Saved Dependencies with LeanIndex](plot_lean_layers_script.html)

Index a Lean Project over its Saved Dependencies with LeanIndex![](../../_images/sphx_glr_plot_corpus_lean_reader_script_thumb.png)

[Read Lean Proofs with LeanReader: Tracing Every Line of a Formal Development](../corpus/plot_corpus_lean_reader_script.html)

Read Lean Proofs with LeanReader: Tracing Every Line of a Formal Development![](../../_images/sphx_glr_plot_06_multifile_support_files_thumb.png)

[Multi-file builds: .pxi includes and external headers](../cython/plot_06_multifile_support_files.html)

Multi-file builds: .pxi includes and external headers

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)