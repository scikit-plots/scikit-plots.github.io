> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-who-zip-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Process a Mixed-Media ZIP Archive with Corpus[#](#process-a-mixed-media-zip-archive-with-corpus "Link to this heading")

A ZIP archive can contain different source types. [`ZipReader`](../../modules/generated/scikitplot.corpus.ZipReader.html#scikitplot.corpus.ZipReader "scikitplot.corpus.ZipReader") applies
the Corpus archive-safety boundary, extracts supported members into temporary
storage, dispatches each member to its registered reader, and yields one
document stream.

This example focuses on that routing behavior:

* inspect the archive manifest without extracting it,
* process the archive through [`CorpusPipeline`](../../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline"),
* preserve `archive.zip/member.ext` provenance,
* compare documents produced by each member,
* show generic per-extension reader configuration,
* keep ASR/model-heavy execution explicitly opt-in.

The primary gallery path does ****not**** enable Whisper and does not export CSV.
An MP3 without a companion transcript therefore contributes no text unless ASR
is intentionally enabled. OCR/PDF member capabilities are allowed to fail
softly at the member boundary according to [`ZipReader`](../../modules/generated/scikitplot.corpus.ZipReader.html#scikitplot.corpus.ZipReader "scikitplot.corpus.ZipReader") semantics; other
successfully readable members remain available.

## Archive security[#](#archive-security "Link to this heading")

`ZipReader` enforces file-count and expanded-byte limits, rejects path
traversal and symlink-like unsafe members, filters hidden/system entries, and
caps nested archive depth. Security-limit failures are not converted into
gallery skips.

## Optional capability rule[#](#optional-capability-rule "Link to this heading")

Missing optional reader capabilities may cause an individual archive member to
produce no documents, but they do not invalidate documents already produced by
other members. Optional Whisper execution is separately gated by an explicit
environment opt-in.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import os
import importlib.util
import zipfile
from collections import Counter, defaultdict
from pathlib import Path

from scikitplot.corpus import (
    CorpusPipeline,
    DocumentReader,
    SentenceBackend,
    SentenceChunker,
    SentenceChunkerConfig,
)

_RUN_ASR = os.environ.get("SCIKITPLOT_GALLERY_RUN_ASR", "").strip().lower() in {
    "1",
    "true",
    "yes",
    "on",
}

```

## Resolve the bundled ZIP asset[#](#resolve-the-bundled-zip-asset "Link to this heading")

Missing gallery assets are reported as a local skip. The example never
turns a missing sidecar into an automatic network request.

```
def _resolve_example_dir() -> Path:
    """Resolve the example directory across scripts and Sphinx-Gallery."""
    file = globals().get("__file__")
    if file:
        return Path(file).resolve().parent
    return Path.cwd().resolve()


_EXAMPLE_DIR = _resolve_example_dir()
_DATA_DIR = _EXAMPLE_DIR / "data"
_ZIP_PATH = _DATA_DIR / "WHO-EURO-2025-12555-52329-80560-eng.zip"

```

## Inspect the archive manifest[#](#inspect-the-archive-manifest "Link to this heading")

Python’s stdlib `zipfile` is used only to list member names and declared
uncompressed sizes. `ZipReader` remains responsible for secure extraction
and reader dispatch.

```
manifest: list[tuple[str, int]] = []

if not _ZIP_PATH.exists():
    print(f"[SKIP] Bundled ZIP is unavailable: {_ZIP_PATH}")
else:
    with zipfile.ZipFile(_ZIP_PATH, "r") as archive:
        manifest = [
            (info.filename, info.file_size)
            for info in archive.infolist()
            if not info.is_dir()
        ]

    print(f"Archive: {_ZIP_PATH.name}")
    print(f"Members: {len(manifest)}")
    for name, size in manifest:
        print(f"  {name:60s} {size:>10,} bytes")

```
```
Archive: WHO-EURO-2025-12555-52329-80560-eng.zip
Members: 3
  can-people-afford-to-pay-for-health-care.mp3                    401,709 bytes
  WHO-EURO-2025-12555-52329-80560-eng.pdf                          80,767 bytes
  WHO-EURO-2025-12555-52329-80560-eng.pdf.jpg                       8,968 bytes

```

## Configure the portable archive pipeline[#](#configure-the-portable-archive-pipeline "Link to this heading")

The primary path uses the REGEX sentence chunker and ****no**** media-specific
reader kwargs.

Consequences:

* PDF text is extracted when a supported PDF backend is available.
* Image OCR is attempted by the registered ImageReader; if its optional OCR
  capability is unavailable, ZipReader skips only that member.
* MP3 transcription remains disabled, so an audio member without a companion
  transcript yields no text rather than initializing a Whisper model.

```
result_zip = None
documents = ()

if not _ZIP_PATH.exists():
    print("[SKIP] ZIP processing: local archive asset is unavailable.")
else:
    pipeline = CorpusPipeline(
        chunker=SentenceChunker(
            SentenceChunkerConfig(
                backend=SentenceBackend.REGEX,
                strip_whitespace=True,
                include_offsets=True,
            )
        )
    )

    result_zip = pipeline.run(_ZIP_PATH)
    documents = result_zip.documents

    print(f"Documents produced: {result_zip.n_documents}")

```
```
Documents produced: 112

```

## Summarize documents by archive member[#](#summarize-documents-by-archive-member "Link to this heading")

`CorpusDocument.input_path` now preserves the logical archive member path,
for example:

`WHO-....zip/WHO-....pdf`

This makes routing and provenance inspectable after the archive reader has
flattened all member streams into one corpus.

```
docs_by_member: dict[str, list] = defaultdict(list)

for doc in documents:
    docs_by_member[doc.input_path].append(doc)

if documents:
    print("\nProduced-document summary")
    print("=" * 100)
    print(f"{'member':64s} {'source type':14s} {'docs':>6s}")
    print("-" * 100)

    for member_path, member_docs in sorted(docs_by_member.items()):
        source_types = Counter(str(doc.source_type) for doc in member_docs)
        source_summary = ",".join(
            f"{source_type}:{count}"
            for source_type, count in sorted(source_types.items())
        )
        print(
            f"{member_path[-64:]:64s} "
            f"{source_summary:14.14s} "
            f"{len(member_docs):>6d}"
        )
else:
    print(
        "[SKIP] No archive member produced text documents. "
        "Optional PDF/OCR capabilities may be unavailable."
    )

```
```
Produced-document summary
====================================================================================================
member                                                           source type      docs
----------------------------------------------------------------------------------------------------
2555-52329-80560-eng.zip/WHO-EURO-2025-12555-52329-80560-eng.pdf research:110      110
-52329-80560-eng.zip/WHO-EURO-2025-12555-52329-80560-eng.pdf.jpg image:2             2

```

## Compare manifest members with corpus output[#](#compare-manifest-members-with-corpus-output "Link to this heading")

A member can legitimately produce zero text documents. In this archive the
MP3 does so in the portable path because `transcribe=False` by default.

```
produced_suffixes: Counter[str] = Counter()

for member_path, member_docs in docs_by_member.items():
    suffix = Path(member_path).suffix.lower()
    produced_suffixes[suffix] += len(member_docs)

if manifest:
    print("\nMember outcome")
    print("=" * 92)

    for member_name, _size in manifest:
        suffix = Path(member_name).suffix.lower()
        n_docs = sum(
            len(member_docs)
            for path, member_docs in docs_by_member.items()
            if path.endswith(f"/{member_name}")
            or path == f"{_ZIP_PATH.name}/{member_name}"
        )

        if n_docs:
            status = f"{n_docs} documents"
        elif suffix in {".mp3", ".wav", ".flac", ".ogg", ".m4a"}:
            status = "0 documents (ASR disabled unless companion text exists)"
        else:
            status = "0 documents (reader produced no text / capability unavailable)"

        print(f"  {member_name:60s} → {status}")

```
```
Member outcome
============================================================================================
  can-people-afford-to-pay-for-health-care.mp3                 → 0 documents (ASR disabled unless companion text exists)
  WHO-EURO-2025-12555-52329-80560-eng.pdf                      → 110 documents
  WHO-EURO-2025-12555-52329-80560-eng.pdf.jpg                  → 2 documents

```

## Inspect bounded member examples[#](#inspect-bounded-member-examples "Link to this heading")

Show one document per contributing member rather than a large dataframe dump.

```
for member_path, member_docs in sorted(docs_by_member.items()):
    doc = member_docs[0]
    print(f"\n{member_path}")
    print("-" * min(len(member_path), 88))
    print(f"source_type: {doc.source_type}")
    if doc.page_number is not None:
        print(f"page: {doc.page_number}")
    if doc.ocr_engine:
        print(f"ocr_engine: {doc.ocr_engine}")
    print(f"text: {doc.text[:260]!r}")

```
```
WHO-EURO-2025-12555-52329-80560-eng.zip/WHO-EURO-2025-12555-52329-80560-eng.pdf
-------------------------------------------------------------------------------
source_type: research
page: 0
text: 'Can people afford \nto pay for health care?'

WHO-EURO-2025-12555-52329-80560-eng.zip/WHO-EURO-2025-12555-52329-80560-eng.pdf.jpg
-----------------------------------------------------------------------------------
source_type: image
page: 0
ocr_engine: tesseract
text: '= re\ncan people afford\ntopay for health care?'

```

## Per-extension reader configuration[#](#per-extension-reader-configuration "Link to this heading")

`ZipReader.reader_kwargs` is a mapping from extension to constructor kwargs
for that member’s reader.

Extension keys are normalized to lower case and gain a leading dot, so both
`"MP3"` and `".mp3"` target the audio reader.

Creating this reader does not process the archive or initialize optional
backends.

```
configured_reader = None

if not _ZIP_PATH.exists():
    print("[SKIP] Per-extension configuration: ZIP asset is unavailable.")
else:
    configured_reader = DocumentReader.create(
        _ZIP_PATH,
        reader_kwargs={
            "MP3": {
                "transcribe": True,
                "whisper_model": "small",
            },
            ".jpg": {
                "backend": "tesseract",
                "preprocess_grayscale": True,
            },
            ".pdf": {
                "prefer_backend": "pypdf",
            },
        },
    )

    print("Normalized per-extension configuration:")
    for extension, options in sorted(configured_reader.reader_kwargs.items()):
        print(f"  {extension}: {options}")

```
```
Normalized per-extension configuration:
  .jpg: {'backend': 'tesseract', 'preprocess_grayscale': True}
  .mp3: {'transcribe': True, 'whisper_model': 'small'}
  .pdf: {'prefer_backend': 'pypdf'}

```

## Equivalent nested CorpusPipeline configuration[#](#equivalent-nested-corpuspipeline-configuration "Link to this heading")

`CorpusPipeline.reader_kwargs` configures the ****outer**** reader. Because
the selected outer reader is ZipReader, its own per-extension mapping is
nested one level deeper under `"reader_kwargs"`.

This pipeline object is intentionally not executed here; doing so would opt
the MP3 member into Whisper and could trigger model resolution.

```
advanced_pipeline = CorpusPipeline(
    chunker=SentenceChunker(
        SentenceChunkerConfig(
            backend=SentenceBackend.REGEX,
        )
    ),
    reader_kwargs={
        "reader_kwargs": {
            ".mp3": {
                "transcribe": True,
                "whisper_model": "small",
            },
            ".jpg": {
                "backend": "tesseract",
                "preprocess_grayscale": True,
            },
            ".pdf": {
                "prefer_backend": "pypdf",
            },
        }
    },
)

print("Advanced pipeline configured (not executed by default).")

```
```
Advanced pipeline configured (not executed by default).

```

## Optional real ASR for the MP3 member[#](#optional-real-asr-for-the-mp3-member "Link to this heading")

To execute the model-backed archive path manually:

```
SCIKITPLOT_GALLERY_RUN_ASR=1 python plot_corpus_who_zip_script.py

```

The normal gallery build never enables it.

```
def _probe_whisper_backend() -> tuple[bool, str]:
    """Check only for an installed Whisper Python backend."""
    if importlib.util.find_spec("faster_whisper") is not None:
        return True, "faster-whisper is installed"
    if importlib.util.find_spec("whisper") is not None:
        return True, "openai-whisper is installed"
    return False, "neither faster-whisper nor openai-whisper is installed"


whisper_ready, whisper_reason = _probe_whisper_backend()
asr_result = None

if not _ZIP_PATH.exists():
    print("[SKIP] Archive ASR: ZIP asset is unavailable.")
elif not _RUN_ASR:
    print(
        "[SKIP] Archive ASR: optional execution is disabled. "
        "Set SCIKITPLOT_GALLERY_RUN_ASR=1 to opt in."
    )
elif not whisper_ready:
    print(f"[SKIP] Archive ASR: {whisper_reason}")
else:
    # The explicitly enabled runtime may resolve model weights.  Unexpected
    # errors after this opt-in are allowed to surface.
    asr_result = advanced_pipeline.run(_ZIP_PATH)

    audio_docs = [
        doc
        for doc in asr_result.documents
        if str(doc.source_type) == "audio"
    ]

    print(f"ASR-enabled archive documents: {asr_result.n_documents}")
    print(f"Audio documents: {len(audio_docs)}")
    for doc in audio_docs[:3]:
        print(
            f"  {doc.input_path} "
            f"{doc.timecode_start!r}→{doc.timecode_end!r} "
            f"{doc.text[:160]!r}"
        )

```
```
ASR-enabled archive documents: 120
Audio documents: 5
  WHO-EURO-2025-12555-52329-80560-eng.zip/can-people-afford-to-pay-for-health-care.mp3 0.0→6.0 'Can people afford to pay for healthcare in Europe?'
  WHO-EURO-2025-12555-52329-80560-eng.zip/can-people-afford-to-pay-for-health-care.mp3 6.0→9.0 'The short answer is not everyone.'
  WHO-EURO-2025-12555-52329-80560-eng.zip/can-people-afford-to-pay-for-health-care.mp3 9.0→14.0 'No country in Europe has achieved universal health coverage.'

```

## Takeaway[#](#takeaway "Link to this heading")

A practical archive workflow is:

`inspect manifest → let ZipReader route members → summarize provenance`.

Add per-extension OCR/ASR/PDF backend settings only when those capabilities
are intentionally provisioned. Missing optional member capabilities should
not erase evidence successfully extracted from other members.

Tags: [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 12.140 seconds)

[![Launch binder](../../_images/binder_badge_logo4.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_who_zip_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo4.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_who_zip_script.ipynb)

[`Download Jupyter notebook: plot_corpus_who_zip_script.ipynb`](../../_downloads/3ff754f2e621589fcccb26490f98e361/plot_corpus_who_zip_script.ipynb)

[`Download Python source code: plot_corpus_who_zip_script.py`](../../_downloads/a2ce57f29ea909768cbe1f2cb8e7430e/plot_corpus_who_zip_script.py)

[`Download zipped: plot_corpus_who_zip_script.zip`](../../_downloads/772aad89379fb773388039d57b46e4c9/plot_corpus_who_zip_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[Process an MP3 with Corpus](plot_corpus_a_tale_of_two_cities_mp3_script.html)

Process an MP3 with Corpus![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[Build a Multi-Source WHO Corpus](plot_corpus_who_per_file_script.html)

Build a Multi-Source WHO Corpus![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[Compare Corpus Chunking Strategies on OCR Text](plot_corpus_knowledge_script.html)

Compare Corpus Chunking Strategies on OCR Text![](../../_images/sphx_glr_plot_corpus_who_youtube_script_thumb.png)

[Process a YouTube Transcript with Corpus](plot_corpus_who_youtube_script.html)

Process a YouTube Transcript with Corpus

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)