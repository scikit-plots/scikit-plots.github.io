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
6. extensions on purpose left out or shared, and `language=`;
7. the encoding policy: exact, a list of candidates, a function;
8. limits: file size and text size, refused or truncated;
9. from chunks to documents: metadata, short blocks kept, `filter_`;
10. one call for a mixed folder with [`DocumentReader.create`](../../modules/generated/scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.create "scikitplot.corpus.DocumentReader.create");
11. a small code search that cites `file:line`;
12. a generated project: every line accounted for, the same result twice,
    timed.

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
import re
import time
from collections import Counter
from dataclasses import dataclass
from pathlib import Path

from scikitplot.corpus import CodeReader, DefaultFilter, DocumentReader

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

## 6. Extensions left out, shared, or yours to name[#](#extensions-left-out-shared-or-yours-to-name "Link to this heading")

`.env` is left out on purpose (it holds secrets). Extensions two common
languages share are left out rather than guessed (`.m` is MATLAB or
Objective-C); `.h` is too common to leave out, so it is named
`"c/c++"`. `language=` records the name you know.

```
print({ext: CodeReader.languages.get(ext, "(not read)") for ext in (".env", ".m", ".pl", ".h")})


@dataclass
class MatlabReader(CodeReader):
    """Read ``.m`` files, known here to be MATLAB."""

    file_types = [".m"]
    languages = {".m": "matlab"}


matlab = work / "solve.m"
matlab.write_text("x = A \\ b;\ndisp(x)\n", encoding="utf-8")
print([c["language"] for c in MatlabReader(input_path=matlab).get_raw_chunks()])
print([c["language"] for c in chunks(script, language="python3")][:1])

```
```
{'.env': '(not read)', '.m': '(not read)', '.pl': '(not read)', '.h': 'c/c++'}
['matlab']
['python3']

```

## 7. The encoding policy[#](#the-encoding-policy "Link to this heading")

By default the encoding is detected by fixed rules, the same on every
machine (byte-order mark, binary check, UTF-8, cp1252, latin-1). A codec
name is strict; a list takes the first codec that decodes the whole file;
a function chooses from the bytes. The codec used is in every chunk.

```
legacy = work / "legacy.py"
legacy.write_bytes("msg = 'Grüße aus Köln'\n".encode("cp1252"))
print("detected:", chunks(legacy)[0]["encoding"])
try:
    chunks(legacy, encoding="utf-8")
except UnicodeDecodeError as exc:
    print("strict utf-8:", type(exc).__name__)
print("candidates:", chunks(legacy, encoding=["utf-8", "cp1252"])[0]["encoding"])
print("function:", chunks(legacy, encoding=lambda raw: "cp1252")[0]["text"])

```
```
detected: cp1252
strict utf-8: UnicodeDecodeError
candidates: cp1252
function: msg = 'Grüße aus Köln'

```

## 8. Limits[#](#limits "Link to this heading")

`max_file_bytes` refuses a file larger than you meant to read (default
50 MB) before anything is read. `max_text_chars` bounds the text one
file may yield as documents: refused by default, or cut with
`on_text_limit="truncate"`, which marks the document it cuts.

```
try:
    chunks(script, max_file_bytes=100)
except ValueError as exc:
    print("refused:", str(exc)[:70])
try:
    list(CodeReader(input_path=script, max_text_chars=50).get_documents())
except ValueError as exc:
    print("refused:", str(exc)[:70])
cut = list(
    CodeReader(input_path=script, max_text_chars=50, on_text_limit="truncate").get_documents()
)
print("truncated:", sum(len(d.text) for d in cut), "characters,",
      [d.metadata.get("text_truncated", False) for d in cut])

```
```
refused: CodeReader: stats.py is 151 bytes, which exceeds max_file_bytes=100.
refused: CodeReader: stats.py yields more than max_text_chars=50 characters of
truncated: 50 characters, [True]

```

## 9. From chunks to documents[#](#from-chunks-to-documents "Link to this heading")

[`DocumentReader.get_documents`](../../modules/generated/scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.get_documents "scikitplot.corpus.DocumentReader.get_documents") turns chunks into validated
documents; the language and the lines move into `metadata`. Short
blocks of code (`}`, `42`) are kept: the default filter,
[`CodeAwareFilter`](../../modules/generated/scikitplot.corpus.CodeAwareFilter.html#scikitplot.corpus.CodeAwareFilter "scikitplot.corpus.CodeAwareFilter"), keeps any code that is not blank and judges
other text as prose. Pass `filter_` to choose another.

```
braces = work / "braces.c"
braces.write_text("int main(void) {\n  return 42;\n}\n", encoding="utf-8")
docs = list(CodeReader(input_path=braces, lines_per_chunk=1).get_documents())
for doc in docs:
    print(repr(doc.text), doc.metadata["language"], doc.metadata["line_start"])
prose_rules = DefaultFilter(min_words=2, min_chars=1)
kept = [d.text for d in CodeReader(input_path=braces, lines_per_chunk=1, filter_=prose_rules).get_documents()]
print("with a prose filter:", kept)

```
```
'int main(void) {' c 1
'  return 42;' c 2
'}' c 3
with a prose filter: ['int main(void) {', '  return 42;']

```

## 10. A mixed folder in one call[#](#a-mixed-folder-in-one-call "Link to this heading")

[`DocumentReader.create`](../../modules/generated/scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.create "scikitplot.corpus.DocumentReader.create") picks the reader for each file by its
extension: code goes to this reader, other files to theirs.

```
mixed = sorted(project.iterdir())
reader = DocumentReader.create(*mixed)
by_reader = Counter()
for doc in reader.get_documents():
    by_reader[(doc.input_path, doc.metadata.get("language", "-"))] += 1
print(dict(sorted(by_reader.items())))

```
```
{('main.rs', 'rust'): 1, ('notes.txt', '-'): 1, ('query.sql', 'sql'): 1, ('run.sh', 'shell'): 1}

```

## 11. A small code search that cites its sources[#](#a-small-code-search-that-cites-its-sources "Link to this heading")

Because every document keeps its file and lines, any answer can point at
them. Here a plain word-overlap ranking over a few files; a corpus
pipeline with an embedder does the same at scale.

```
library = work / "library"
library.mkdir()
(library / "io.py").write_text(
    "def read_csv(path):\n    return open(path).read().split(',')\n\n"
    "def write_csv(path, rows):\n    open(path, 'w').write(','.join(rows))\n",
    encoding="utf-8",
)
(library / "math.rs").write_text(
    "fn mean(xs: &[f64]) -> f64 {\n    xs.iter().sum::<f64>() / xs.len() as f64\n}\n",
    encoding="utf-8",
)
documents = [
    doc
    for path in sorted(library.iterdir())
    for doc in CodeReader(input_path=path, lines_per_chunk=3).get_documents()
]


def words(text):
    """Lower-case words, with identifiers split (``write_csv`` -> write, csv)."""
    return set(re.findall(r"[a-z]+", text.lower()))


def search(query, k=2):
    wanted = words(query)
    scored = [(len(wanted & words(doc.text)), doc) for doc in documents]
    for score, doc in sorted(scored, key=lambda item: -item[0])[:k]:
        print(f"  {score}  {doc.input_path}:{doc.metadata['line_start']}-{doc.metadata['line_end']}"
              f"  {doc.text.splitlines()[0]}")


search("write csv rows")
search("mean of xs")

```
```
3  io.py:4-5  def write_csv(path, rows):
1  io.py:1-3  def read_csv(path):
2  math.rs:1-3  fn mean(xs: &[f64]) -> f64 {
0  io.py:1-3  def read_csv(path):

```

## 12. A generated project[#](#a-generated-project "Link to this heading")

A few hundred files of mixed languages. The chunks of each file partition
its lines (no line lost, none repeated), reading twice gives the same
result, and the time is in proportion to the text.

```
generated = work / "generated"
generated.mkdir()
templates = {
    ".py": "value_{i} = {i}\n",
    ".js": "const v{i} = {i};\n",
    ".sql": "SELECT {i};\n",
}
for n in range(300):
    ext = list(templates)[n % len(templates)]
    body = "".join(templates[ext].format(i=i) for i in range(200 + n))
    (generated / f"f{n:03d}{ext}").write_text(body, encoding="utf-8")

start = time.perf_counter()
lines = 0
signature = []
for path in sorted(generated.iterdir()):
    got = chunks(path, lines_per_chunk=97)
    covered = [n for c in got for n in range(c["line_start"], c["line_end"] + 1)]
    expected = path.read_text(encoding="utf-8").count("\n")
    assert covered == list(range(1, expected + 1)), f"{path.name}: lines lost or repeated"
    lines += expected
    signature.append(tuple((c["line_start"], c["text"]) for c in got))
elapsed = time.perf_counter() - start
again = [tuple((c["line_start"], c["text"]) for c in chunks(p, lines_per_chunk=97))
         for p in sorted(generated.iterdir())]
assert again == signature, "a second read differs"
print(f"300 files, {lines:,} lines, each line in exactly one chunk; "
      f"read twice, identical; {elapsed:.2f} s")

```
```
300 files, 104,850 lines, each line in exactly one chunk; read twice, identical; 0.18 s

```

Tags: [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.449 seconds)

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

Customize Corpus backends and readiness policies![](../../_images/sphx_glr_plot_corpus_hamlet_custom_components_script_thumb.png)

[Write Your Own Corpus Components: a Hamlet Walkthrough](plot_corpus_hamlet_custom_components_script.html)

Write Your Own Corpus Components: a Hamlet Walkthrough

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)