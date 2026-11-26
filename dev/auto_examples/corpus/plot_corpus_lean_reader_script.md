> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-lean-reader-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Read Lean Proofs with LeanReader: Tracing Every Line of a Formal Development[#](#read-lean-proofs-with-leanreader-tracing-every-line-of-a-formal-development "Link to this heading")

[Lean](https://lean-lang.org/) proofs can run to millions of lines, far past
what a person can keep track of. [`LeanReader`](../../modules/generated/scikitplot.corpus.LeanReader.html#scikitplot.corpus.LeanReader "scikitplot.corpus.LeanReader") splits a `.lean` file
into one chunk per Lean command: a `theorem`, a `def`, a `namespace`.
Each chunk records where it is, what it declares and the audit flags it
raises. This example goes from the simplest case to the hard ones:

1. one file: what a chunk carries;
2. statements without proofs (`proofs="drop"`), for reading claims;
3. audit flags: `sorry`, `native_decide`, `axiom`, code after `#exit`;
4. choosing what to read: `kinds`, `watch`, `commands`;
5. very long proofs read in parts (`lines_per_chunk`);
6. Lean 3 sources (`dialect="lean3"`);
7. hostile input: unclosed comments, too-deep scopes;
8. a generated project of thousands of declarations, with a check that
   every line lands in exactly one chunk.

Everything runs on files the example writes: no Lean toolchain, no download.

> **Note**
> The reader is lexical: it reads the text, it does not check proofs.
A file without flags is not proved correct; that is for Lean’s kernel
(`lake build`, `#print axioms`).
```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import tempfile
from collections import Counter
from pathlib import Path

from scikitplot.corpus import LEAN_FLAGS, LeanReader

work = Path(tempfile.mkdtemp(prefix="lean_reader_"))


def read(text, name="Demo.lean", **options):
    """Write *text* to a file and return the chunks LeanReader makes of it."""
    path = work / name
    path.write_text(text, encoding="utf-8")
    return list(LeanReader(input_path=path, **options).get_raw_chunks())


def show(chunks, *keys):
    for c in chunks:
        extra = {k: c[k] for k in keys if k in c}
        print(f"{c['line_start']:>3}-{c['line_end']:<3} {c['lean_kind']:<10}",
              c.get("declaration", ""), extra)

```

## 1. One file[#](#one-file "Link to this heading")

Imports, namespaces, doc comments and declarations each become a chunk.
A doc comment stays with the declaration it documents; `declaration` is
the full name, namespace included.

```
source = """\
import Mathlib.Data.Nat.Basic

namespace Demo

/-- Adding zero changes nothing. -/
theorem add_zero' (n : Nat) : n + 0 = n := by
  simp

def double (n : Nat) : Nat := 2 * n

end Demo
"""
show(read(source), "namespace", "imports")

```
```
 1-1   import      {'imports': ['Mathlib.Data.Nat.Basic']}
 3-3   context     {}
 5-7   theorem    Demo.add_zero' {'namespace': 'Demo'}
 9-9   def        Demo.double {'namespace': 'Demo'}
11-11  context     {'namespace': 'Demo'}

```

## 2. Statements without proofs[#](#statements-without-proofs "Link to this heading")

`proofs="drop"` keeps what a declaration claims and leaves out how it is
proved. `proof_line_start`/`proof_line_end` say where the proof was.

```
for c in read(source, proofs="drop"):
    if c["lean_kind"] == "theorem":
        print(repr(c["text"]), c.get("proof_line_start"), c.get("proof_line_end"))

```
```
"/-- Adding zero changes nothing. -/\ntheorem add_zero' (n : Nat) : n + 0 = n" 6 7

```

## 3. Audit flags[#](#audit-flags "Link to this heading")

Some constructs let a “proof” through without the kernel checking it.
The reader flags them in code only, never in comments or strings. A
comment line belongs to the declaration after it (`fast` starts at 2).
Everything after `#exit` is flagged too, since Lean never reads it.

```
print(sorted(set(LEAN_FLAGS.values())))
risky = """\
theorem gap : 1 = 2 := by sorry
-- a comment saying sorry is not flagged
theorem fast : 2 ^ 10 = 1024 := by native_decide
axiom trust_me : False
#exit
theorem never_checked : True := trivial
"""
show(read(risky, "Risky.lean"), "flags")

```
```
['add_decl', 'admit', 'extern', 'implemented_by', 'native', 'skip_kernel_tc', 'sorry', 'unsafe']
  1-1   theorem    gap {'flags': ['sorry']}
  2-3   theorem    fast {'flags': ['native']}
  4-4   axiom      trust_me {'flags': ['axiom']}
  5-5   #exit       {}
  6-6   theorem    never_checked {'flags': ['after_exit']}

```

## 4. Choosing what to read[#](#choosing-what-to-read "Link to this heading")

`kinds` keeps some kinds of command; `watch` marks chunks naming the
identifiers you care about; `commands` adds a project’s own command
keywords, so their uses become chunks of their own.

```
print([c["declaration"] for c in read(source, kinds=["theorem"])])
print([c.get("watched") for c in read(source, watch=["double"]) if "watched" in c])
custom = "theorem a : True := trivial\nmy_check a\ntheorem b : True := trivial\n"
print([c["lean_kind"] for c in read(custom, "Custom.lean")])
print([c["lean_kind"] for c in read(custom, "Custom.lean", commands=["my_check"])])

```
```
["Demo.add_zero'"]
[['double']]
['theorem', 'theorem']
['theorem', 'my_check', 'theorem']

```

## 5. Very long proofs[#](#very-long-proofs "Link to this heading")

A proof of thousands of lines is read in parts of `lines_per_chunk`
lines; `part` numbers them, and every part keeps the declaration name.

```
long_proof = "theorem big : True := by\n" + "  skip\n" * 1_000 + "  trivial\n"
parts = read(long_proof, "Long.lean", lines_per_chunk=300)
print([(c["part"], c["line_start"], c["line_end"]) for c in parts])

```
```
[(1, 1, 300), (2, 301, 600), (3, 601, 900), (4, 901, 1002)]

```

## 6. Lean 3[#](#lean-3 "Link to this heading")

Lean 3 proofs use `begin ... end` blocks; `dialect="lean3"` reads them
as one command each.

```
lean3 = """\
import data.nat.basic

theorem add_comm' (a b : ℕ) : a + b = b + a :=
begin
  exact nat.add_comm a b,
end
"""
show(read(lean3, "Old.lean", dialect="lean3"))

```
```
1-1   import      {}
3-6   theorem    add_comm' {}

```

## 7. Hostile input[#](#hostile-input "Link to this heading")

A comment that never closes swallows the rest of the file as comment, as
Lean would. Scopes nested deeper than `max_scope_depth` are refused with
a clear error instead of using unbounded memory.

```
print([c["section_type"] for c in read("/- never closed\ntheorem x : True := trivial\n", "Open.lean")])
try:
    read("namespace N\n" * 1_000, "Deep.lean", max_scope_depth=256)
except ValueError as exc:
    print("refused:", str(exc)[:70])

```
```
['text']
refused: LeanReader: Deep.lean nests more than max_scope_depth=256 namespaces a

```

## 8. A generated project[#](#a-generated-project "Link to this heading")

Thousands of small declarations, a few of them flagged. Counting the
flags points straight at the lines to review, and the partition check
proves no line was lost or read twice.

```
lines = ["namespace Big"]
for i in range(5_000):
    proof = "by sorry" if i % 1_000 == 999 else "rfl"
    lines.append(f"theorem t{i} : {i} = {i} := {proof}")
lines.append("end Big")
big = read("\n".join(lines) + "\n", "Big.lean")

flags = Counter(flag for c in big for flag in c.get("flags", ()))
print(f"{len(big)} chunks; flags: {dict(flags)}")
print([f"{c['declaration']} at line {c['line_start']}" for c in big if c.get("flags")])

covered = [n for c in big for n in range(c["line_start"], c["line_end"] + 1)]
assert covered == list(range(1, len(lines) + 1)), "lines lost or repeated"
print(f"all {len(lines):,} lines are in exactly one chunk")

```
```
5002 chunks; flags: {'sorry': 5}
['Big.t999 at line 1001', 'Big.t1999 at line 2001', 'Big.t2999 at line 3001', 'Big.t3999 at line 4001', 'Big.t4999 at line 5001']
all 5,002 lines are in exactly one chunk

```

Tags: [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.229 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_lean_reader_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_lean_reader_script.ipynb)

[`Download Jupyter notebook: plot_corpus_lean_reader_script.ipynb`](../../_downloads/ed115fbeaed66c1e85c66302859b9d7d/plot_corpus_lean_reader_script.ipynb)

[`Download Python source code: plot_corpus_lean_reader_script.py`](../../_downloads/a42adb5256fba95786a649ad287ae15a/plot_corpus_lean_reader_script.py)

[`Download zipped: plot_corpus_lean_reader_script.zip`](../../_downloads/9f7cbde3534d0fd3a78732ac15a2c34b/plot_corpus_lean_reader_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_code_reader_script_thumb.png)

[Read Source Code with CodeReader: from One File to a Whole Project](plot_corpus_code_reader_script.html)

Read Source Code with CodeReader: from One File to a Whole Project![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_profiler_thumb.png)

[Profile a Notebook Cell with %%scikitplot\_profile](../ipymagic/plot_ipymagic_scikit-plots_profiler.html)

Profile a Notebook Cell with %%scikitplot\_profile![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[Compare Corpus Chunking Strategies on OCR Text](plot_corpus_knowledge_script.html)

Compare Corpus Chunking Strategies on OCR Text

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)