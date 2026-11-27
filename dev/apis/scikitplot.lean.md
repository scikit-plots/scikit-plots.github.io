# scikitplot.lean[#](#module-scikitplot.lean "Link to this heading")

Evidence on a Lean project, read from its source text.

`LeanIndex` indexes a Lean 4 (or Lean 3) project’s declarations, the
names each one uses and the audit flags its code raises, and answers:

* `LeanIndex.summary`: the project (sizes, flags, duplicate names,
  imports no file provides, syntax extensions, generated declarations);
* `LeanIndex.dossier`: the evidence on one theorem (its statement and
  the definitions it unfolds to, what its proof names and the path to each
  flag, what it could use without naming, checks with a verdict);
* `LeanIndex.discover` and `LeanIndex.export`: candidate rules,
  patterns, claims and anomalies, written as documents for people and
  models.

`defined_commands` returns the command keywords a file defines, to
read files one at a time as an index reads a folder.

Every item names its file and lines; nothing here is a proof. Lean’s kernel
decides proofs (`lake build`, `#print axioms`, a replay).

From the shell: `python -m scikitplot.lean FOLDER [--target NAME]
[--fail-on sorry]`.

## Modules[#](#modules "Link to this heading")

* `_syntax`: the Lean language core (lexer, command splitter,
  `LEAN_FLAGS`), shared with [`scikitplot.corpus.LeanReader`](../modules/generated/scikitplot.corpus.LeanReader.html#scikitplot.corpus.LeanReader "scikitplot.corpus.LeanReader").
* `_index`: `LeanIndex` and the command line.
* `_discovery`: discovery and the helper documents, loaded on first use.

Notes

****Developer.**** Standard library only; nothing is imported from
[`scikitplot.corpus`](scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") (the corpus reader depends on this package, never
the reverse).

****User guide.**** See the [Evidence on Lean projects](../user_guide/lean/index.html#lean-index) section for further details.

## Index and evidence[#](#index-and-evidence "Link to this heading")

Class inheritance

![Inheritance diagram of LeanIndex](../_images/inheritance-dbd8d7dc78d3a3bbab0e0672981640bfd0861828.png)

|  |  |
| --- | --- |
| `LeanIndex` | Declarations of a Lean project, their audit flags and the names they use. |

## Reading files one at a time[#](#reading-files-one-at-a-time "Link to this heading")

|  |  |
| --- | --- |
| `defined_commands` | Return the command keywords a Lean file's text defines, with the line of each. |

## Audit flags[#](#audit-flags "Link to this heading")

|  |  |
| --- | --- |
| `AUDIT_FLAGS` | frozenset() -> empty frozenset object frozenset(iterable) -> frozenset object |
| `LEAN_FLAGS` |  |