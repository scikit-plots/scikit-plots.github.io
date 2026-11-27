> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-lean-plot-lean-audit-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Audit an AI-Assisted Formal Proof with LeanIndex[#](#audit-an-ai-assisted-formal-proof-with-leanindex "Link to this heading")

A formal proof that Lean accepts can still prove less than it seems to.
When a model writes much of a development, a reviewer has to check what
the theorem **says** as carefully as whether it is proved. This example
builds a small project with the gaps a reviewer looks for and shows the
report that exposes each one:

1. a headline theorem whose statement unfolds to a predicate that says
   nothing (a **vacuous** predicate);
2. `sorry` hidden behind notation (`bad_setᶜ`);
3. an axiom and `native_decide` among the dependencies;
4. text Lean would refuse to read;
5. the same checks as a gate in continuous integration, and the exit
   codes it uses;
6. what only Lean’s kernel can settle.

Everything runs on files the example writes: no Lean toolchain, no
download, and no claim about any real project.

> **Note**
> The index reads text. A clean report says that the text shows none of
these gaps; whether the proof holds is for Lean’s kernel, which every
report names (`lake build`, `#print axioms`, an independent replay).
```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import contextlib
import io
import tempfile
import textwrap
from pathlib import Path

from scikitplot.lean import LeanIndex
from scikitplot.lean._index import main

work = Path(tempfile.mkdtemp(prefix="lean_audit_"))


def project(name, files):
    """Write *files* (path to Lean source) under a new folder and return it."""
    root = work / name
    for path, source in files.items():
        target = root / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(textwrap.dedent(source).lstrip("\n"), encoding="utf-8")
    return root


def checks(report):
    """Return a dossier's checks as ``{name: status}``."""
    return {check["check"]: check["status"] for check in report["checks"]}

```

## The project under review[#](#the-project-under-review "Link to this heading")

Four files. `Defs` holds what the claims mean, `Sets` a set built
with `sorry`, `Fast` a lemma that rests on an axiom and on
`native_decide`, and `Main` the results a summary would quote.

```
audit = project(
    "audit",
    {
        "Audit/Defs.lean": """
            /-- Every number is remarkable. -/
            def Remarkable (n : Nat) : Prop := True
            /-- A number is balanced when it equals itself. -/
            def Balanced (n : Nat) : Prop := n = n
        """,
        "Audit/Sets.lean": """
            def bad_set : Set Nat := sorry
        """,
        "Audit/Fast.lean": """
            axiom shortcut : 2 ^ 64 > 0
            theorem big_fact : 2 ^ 64 > 0 := by native_decide
        """,
        "Audit/Main.lean": """
            import Audit.Defs
            import Audit.Sets
            import Audit.Fast
            theorem grand_claim : ∀ n, Remarkable n := fun _ => trivial
            theorem honest_claim : ∀ n, Balanced n := fun _ => rfl
            theorem covers_all : bad_setᶜ = ∅ := rfl
            theorem uses_fast : 2 ^ 64 > 0 := big_fact
            theorem uses_axiom : 2 ^ 64 > 0 := shortcut
        """,
    },
)
index = LeanIndex.from_folder(audit)

```

## 1. Read what the statement means[#](#read-what-the-statement-means "Link to this heading")

`grand_claim` reads like a strong result, and Lean accepts its proof.
But it unfolds to `Remarkable`, whose body is `True`: the theorem says
nothing about any number. The dossier quotes each definition the
statement unfolds to and marks the vacuous one, and the check
`vacuous_definitions` asks for a review. `honest_claim` unfolds to a
definition that uses its parameter and passes.

```
for name in ("grand_claim", "honest_claim"):
    report = index.dossier(name)
    print(name, "->", checks(report)["vacuous_definitions"])
    for definition in report["statement"]["local_definitions"]["items"]:
        print("   unfolds to", definition["declaration"], "|", definition.get("vacuous", "uses its subject"))

```
```
grand_claim -> review
   unfolds to Remarkable | its body is the constant proposition `True`
honest_claim -> pass
   unfolds to Balanced | uses its subject

```

Across the project, `LeanIndex.discover` lists every vacuous
predicate, most used first, with its reason. Two rules decide it: a body
of `True`, `False` and connectives only, or a body that uses none of
the definition’s parameters.

```
for item in index.discover()["claims"]["vacuous_predicates"]["items"]:
    print(item["declaration"], "at", f"{item['file']}:{item['line_start']}", "-", item["vacuous"])

```
```
Remarkable at Audit/Defs.lean:1 - its body is the constant proposition `True`

```

## 2. Follow the proof to every flag[#](#follow-the-proof-to-every-flag "Link to this heading")

`covers_all` names `bad_set` only through the complement notation
`ᶜ`. Identifiers are read with Lean’s own characters, so `bad_setᶜ`
names `bad_set`, and the `sorry` behind it is found, with the path.

```
report = index.dossier("covers_all")
print(report["verdict"])
for item in report["dependencies"]["red_flags"]["items"]:
    print("  ", item["declaration"], item.get("flags"), "via", [step["from"] for step in item["path"]] or "a direct use")

```
```
lexical red flags: named_dependencies
   bad_set ['sorry'] via ['covers_all']

```

## 3. Assumptions and shortcuts[#](#assumptions-and-shortcuts "Link to this heading")

An axiom is an assumption the kernel accepts without proof;
`native_decide` trusts compiled code instead of the kernel. Both are
flagged where they are and in every dossier that reaches them.

```
for name in ("uses_fast", "uses_axiom"):
    report = index.dossier(name)
    print(name, "->", report["flags_found"], "|", report["verdict"])

```
```
uses_fast -> ['native'] | lexical red flags: named_dependencies
uses_axiom -> ['axiom'] | lexical red flags: named_dependencies

```

## 4. Text Lean would refuse[#](#text-lean-would-refuse "Link to this heading")

A file with an `end` that names the wrong scope does not build, and the
names after it may be placed in the wrong namespace. The summary lists
such places by file and line, and a dossier whose files have one asks
for a review.

```
broken = project(
    "broken",
    {
        "Broken/A.lean": """
            namespace Claims
            def Nice (n : Nat) : Prop := n = n
            end Clams
            theorem nice_all : ∀ n, Claims.Nice n := fun _ => rfl
        """,
    },
)
broken_index = LeanIndex.from_folder(broken)
for problem in broken_index.summary()["source_problems"]["items"]:
    print(f"{problem['file']}:{problem['line']}: {problem['problem']}")
print("source_text:", checks(broken_index.dossier("nice_all"))["source_text"])

```
```
Broken/A.lean:3: `end Clams` does not match `namespace Claims`
source_text: review

```

## 5. The same checks in continuous integration[#](#the-same-checks-in-continuous-integration "Link to this heading")

`python -m scikitplot.lean FOLDER --target NAME --fail-on FLAG` exits 1
when a flag is found, 0 when none is, and 2 when the target is not one
declaration (missing, or ambiguous): a renamed theorem never passes a
gate silently.

```
for argv in (
    ["--target", "honest_claim", "--fail-on", "sorry"],
    ["--target", "covers_all", "--fail-on", "sorry"],
    ["--target", "uses_axiom", "--fail-on", "axiom"],
    ["--target", "grand_claim_v2", "--fail-on", "sorry"],
):
    with contextlib.redirect_stdout(io.StringIO()), contextlib.redirect_stderr(io.StringIO()):
        status = main([str(audit), *argv])
    print(" ".join(argv), "-> exit", status)

```
```
--target honest_claim --fail-on sorry -> exit 0
--target covers_all --fail-on sorry -> exit 1
--target uses_axiom --fail-on axiom -> exit 1
--target grand_claim_v2 --fail-on sorry -> exit 2

```

## 6. What only the kernel settles[#](#what-only-the-kernel-settles "Link to this heading")

A report without red flags says the text shows none of these gaps; it
does not say the proof holds. Each dossier ends with the steps that do.

```
for step in index.dossier("honest_claim")["kernel_steps"]:
    print("-", step)

```
```
- lake build
- #print axioms honest_claim  -- expect only propext, Classical.choice, Quot.sound
- lean4checker (replay every declaration through the kernel)

```

Tags: [model-workflow: lean](../../_tags/model-workflow-lean.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.039 seconds)

[![Launch binder](../../_images/binder_badge_logo26.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/lean/plot_lean_audit_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo26.svg)](../../lite/lab/index.html?path=auto_examples/lean/plot_lean_audit_script.ipynb)

[`Download Jupyter notebook: plot_lean_audit_script.ipynb`](../../_downloads/4fd04d4e771e093bb78c71cc4685ea41/plot_lean_audit_script.ipynb)

[`Download Python source code: plot_lean_audit_script.py`](../../_downloads/3064c78a34a910e9a906e2fc41b094cc/plot_lean_audit_script.py)

[`Download zipped: plot_lean_audit_script.zip`](../../_downloads/bc47482c4bf9ce233d866f3a438da5a2/plot_lean_audit_script.zip)

Related examples

![](../../_images/sphx_glr_plot_lean_index_script_thumb.png)

[Gather the Evidence on a Lean Proof with LeanIndex](plot_lean_index_script.html)

Gather the Evidence on a Lean Proof with LeanIndex![](../../_images/sphx_glr_plot_corpus_lean_reader_script_thumb.png)

[Read Lean Proofs with LeanReader: Tracing Every Line of a Formal Development](../corpus/plot_corpus_lean_reader_script.html)

Read Lean Proofs with LeanReader: Tracing Every Line of a Formal Development![](../../_images/sphx_glr_plot_lean_layers_script_thumb.png)

[Index a Lean Project over its Saved Dependencies with LeanIndex](plot_lean_layers_script.html)

Index a Lean Project over its Saved Dependencies with LeanIndex![](../../_images/sphx_glr_plot_levenshtein_ranking_script_thumb.png)

[Rank fuzzy matches](../levenshtein/plot_levenshtein_ranking_script.html)

Rank fuzzy matches

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)