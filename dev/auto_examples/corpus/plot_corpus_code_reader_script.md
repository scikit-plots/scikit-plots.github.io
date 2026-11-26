> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-code-reader-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Read Source Code with CodeReader: from One File to a Whole Project[#](#read-source-code-with-codereader-from-one-file-to-a-whole-project "Link to this heading")

[`CodeReader`](../../modules/generated/scikitplot.corpus.CodeReader.html#scikitplot.corpus.CodeReader "scikitplot.corpus.CodeReader") turns source and configuration files into chunks of whole
lines, each with its language and the lines it came from. This example goes
from the simplest case to a project-sized one:

1. one Python file, one chunk per block of lines;
2. the chunk size, from one line per chunk to the whole file;
3. many languages in one folder, with the language taken from the extension;
4. a language the reader does not know, added by subclassing;
5. awkward input: an empty file, a file without a final newline, Windows
   line endings, a non-UTF-8 file and a binary file;
6. a check that every line of every file lands in exactly one chunk.

Everything runs on files the example writes into a temporary folder: no
download, no optional package.

> **Note**
> A file is read as it is, comments and secrets included. Redact
configuration files before sharing a corpus built from them.
```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import tempfile
from collections import Counter
from dataclasses import dataclass
from pathlib import Path

from scikitplot.corpus import CodeReader

work = Path(tempfile.mkdtemp(prefix="code_reader_"))


def chunks(path, **options):
    """Return the chunks a CodeReader makes of *path*."""
    return list(CodeReader(input_path=path, **options).get_raw_chunks())

```

## 1. One file[#](#one-file "Link to this heading")

Each chunk carries `language`, `line_start` and `line_end` (1-based,
inclusive), so any line of text can be traced back to the file.

```
script = work / "stats.py"
script.write_text(
    "import math\n"
    "\n"
    "\n"
    "def mean(xs):\n"
    "    return sum(xs) / len(xs)\n"
    "\n"
    "\n"
    "def std(xs):\n"
    "    m = mean(xs)\n"
    "    return math.sqrt(sum((x - m) ** 2 for x in xs) / len(xs))\n",
    encoding="utf-8",
)
for chunk in chunks(script, lines_per_chunk=4):
    print(chunk["language"], chunk["line_start"], chunk["line_end"], repr(chunk["text"][:30]))

```
```
python 1 4 'import math\n\n\ndef mean(xs):'
python 5 8 '    return sum(xs) / len(xs)\n\n'
python 9 10 '    m = mean(xs)\n    return ma'

```

## 2. Chunk size[#](#chunk-size "Link to this heading")

`lines_per_chunk` sets the block size; `None` keeps the whole file in
one chunk. Smaller chunks give finer retrieval; larger ones keep context.

```
for size in (1, 3, 200, None):
    print(f"lines_per_chunk={size!s:>4}: {len(chunks(script, lines_per_chunk=size))} chunks")

```
```
lines_per_chunk=   1: 6 chunks
lines_per_chunk=   3: 4 chunks
lines_per_chunk= 200: 1 chunks
lines_per_chunk=None: 1 chunks

```

## 3. Many languages in one folder[#](#many-languages-in-one-folder "Link to this heading")

The extension decides the language. [`CodeReader.languages`](../../modules/generated/scikitplot.corpus.CodeReader.html#scikitplot.corpus.CodeReader.languages "scikitplot.corpus.CodeReader.languages") lists the
mapping; [`DocumentReader.create`](../../modules/generated/scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.create "scikitplot.corpus.DocumentReader.create") picks this reader for each of them.

```
print(len(CodeReader.languages), "extensions, for example:",
      {ext: CodeReader.languages[ext] for ext in (".py", ".rs", ".sql", ".sh")
       if ext in CodeReader.languages})

project = work / "project"
project.mkdir()
(project / "main.rs").write_text('fn main() {\n    println!("hi");\n}\n', encoding="utf-8")
(project / "query.sql").write_text("SELECT name\nFROM users;\n", encoding="utf-8")
(project / "run.sh").write_text("#!/bin/sh\necho ok\n", encoding="utf-8")
(project / "notes.txt").write_text("not code: another reader's file\n", encoding="utf-8")

by_language = Counter()
for path in sorted(project.iterdir()):
    if path.suffix in CodeReader.languages:
        for chunk in chunks(path):
            by_language[chunk["language"]] += chunk["line_end"] - chunk["line_start"] + 1
print(dict(sorted(by_language.items())))

```
```
95 extensions, for example: {'.py': 'python', '.rs': 'rust', '.sql': 'sql', '.sh': 'shell'}
{'rust': 3, 'shell': 2, 'sql': 2}

```

## 4. A language of your own[#](#a-language-of-your-own "Link to this heading")

Subclass to add an extension. The new class registers it (the last class
registered for an extension wins).

```
@dataclass
class MiniLangReader(CodeReader):
    """Read ``.mini`` files as the language ``mini``."""

    file_types = [".mini"]
    languages = {".mini": "mini"}


mini = work / "hello.mini"
mini.write_text("say hello\nsay world\n", encoding="utf-8")
print([c["language"] for c in MiniLangReader(input_path=mini).get_raw_chunks()])

```
```
['mini']

```

## 5. Awkward input[#](#awkward-input "Link to this heading")

Edge cases are handled explicitly: line endings become `"\n"`, the
encoding is detected and recorded, an empty file gives no chunk, and a
binary file is refused with a clear error instead of producing noise.

```
cases = {
    "empty.py": b"",
    "no_final_newline.py": b"x = 1\ny = 2",
    "windows.py": b"a = 1\r\nb = 2\r\n",
    "latin1.py": "name = 'café'\n".encode("latin-1"),
    "binary.py": b"\x00\x01\x02\x03" * 64,
}
for name, data in cases.items():
    path = work / name
    path.write_bytes(data)
    try:
        got = chunks(path)
    except ValueError as exc:
        print(f"{name:20} refused: {str(exc)[:60]}")
        continue
    texts = [c["text"] for c in got]
    print(f"{name:20} {len(got)} chunk(s) {texts!r} encoding={got[0]['encoding'] if got else None}")

```
```
empty.py             0 chunk(s) [] encoding=None
no_final_newline.py  1 chunk(s) ['x = 1\ny = 2'] encoding=utf-8
windows.py           1 chunk(s) ['a = 1\nb = 2'] encoding=utf-8
latin1.py            1 chunk(s) ["name = 'café'"] encoding=cp1252
binary.py            refused: TextReader: binary.py is not a text file: it holds a NUL byt

```

## 6. Every line accounted for[#](#every-line-accounted-for "Link to this heading")

For a large file the chunks must partition the lines: no line lost, none
repeated. This check is cheap and worth running on your own data.

```
big = work / "big.py"
big.write_text("".join(f"value_{i} = {i}\n" for i in range(10_000)), encoding="utf-8")
got = chunks(big, lines_per_chunk=333)
covered = [n for c in got for n in range(c["line_start"], c["line_end"] + 1)]
assert covered == list(range(1, 10_001)), "lines lost or repeated"
print(f"{len(got)} chunks cover all 10,000 lines exactly once")

```
```
31 chunks cover all 10,000 lines exactly once

```

Tags: [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.021 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_code_reader_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_code_reader_script.ipynb)

[`Download Jupyter notebook: plot_corpus_code_reader_script.ipynb`](../../_downloads/d80c65da6ac6cb43e2f26625d69130b5/plot_corpus_code_reader_script.ipynb)

[`Download Python source code: plot_corpus_code_reader_script.py`](../../_downloads/21061578668b03059a6234ea9213cc77/plot_corpus_code_reader_script.py)

[`Download zipped: plot_corpus_code_reader_script.zip`](../../_downloads/390c21a75bdbc3375e2f00aa7988120c/plot_corpus_code_reader_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_lean_reader_script_thumb.png)

[Read Lean Proofs with LeanReader: Tracing Every Line of a Formal Development](plot_corpus_lean_reader_script.html)

Read Lean Proofs with LeanReader: Tracing Every Line of a Formal Development![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[Compare Corpus Chunking Strategies on OCR Text](plot_corpus_knowledge_script.html)

Compare Corpus Chunking Strategies on OCR Text![](../../_images/sphx_glr_plot_corpus_backend_policy_script_thumb.png)

[Customize Corpus backends and readiness policies](plot_corpus_backend_policy_script.html)

Customize Corpus backends and readiness policies![](../../_images/sphx_glr_plot_cleanprompt_packs_formats_script_thumb.png)

[Cleanprompt Packs and Formats: Records, Configs and Whole Folders](../cleanprompt/plot_cleanprompt_packs_formats_script.html)

Cleanprompt Packs and Formats: Records, Configs and Whole Folders

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)