> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-who-per-file-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Build a Multi-Source WHO Corpus[#](#build-a-multi-source-who-corpus "Link to this heading")

This is the broad, explicit integration showcase for [`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus").

It follows one collection through:

`ingest → normalize → enrich → index → search → adapt`.

Five source shapes are represented independently:

* a saved web-article proxy,
* a saved YouTube-transcript proxy,
* a PDF report,
* an image scan,
* an audio file.

The normal gallery path is ****local-first and offline****. If a local sidecar is
missing, that source is reported as `SKIP`. The example does not silently
turn a missing gallery asset into a public-network request.

This file intentionally uses the lower-level public components so the stage
boundaries and per-source partial-success behavior are visible. For higher
level orchestration, use [`CorpusBuilder`](../../modules/generated/scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder"); for reusable immutable
configuration and a stateful runtime lifecycle, use
`FluentCorpus` / `RuntimeCorpus`.

## Optional capability rule[#](#optional-capability-rule "Link to this heading")

A missing local asset or optional dependency is reported as a specific
`SKIP`. Successfully ingested evidence from other sources remains usable.

Unexpected failures after a capability preflight are ****not**** swallowed. That
keeps real API, reader, security, and installed-backend defects visible.

The live WHO/YouTube/media URLs are shown later as explicit code-only examples.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import importlib.util
import json
import os
import shutil
from collections import Counter
from pathlib import Path

from scikitplot.corpus import (
    BuilderConfig,
    CorpusBuilder,
    CorpusDocument,
    DocumentReader,
    EnricherConfig,
    MCPCorpusServer,
    NLPEnricher,
    NormalizationPipeline,
    RetrievalConfig,
    RetrievalIndex,
    SourceType,
    UnicodeNormalizer,
    WhitespaceNormalizer,
    to_huggingface_dataset,
    to_jsonl,
    to_langchain_documents,
    to_langgraph_state,
    to_mcp_resources,
    to_mcp_tool_result,
    to_rag_tuples,
)

# os.environ["SCIKITPLOT_GALLERY_RUN_ASR"] = "1"
# os.environ["SCIKITPLOT_CORPUS_ALLOW_DOWNLOADS"] = "1"
_RUN_ASR = os.environ.get("SCIKITPLOT_GALLERY_RUN_ASR", "1").strip().lower() in {
    "1",
    "true",
    "yes",
    "on",
}
_SCIKITPLOT_CORPUS_ALLOW_DOWNLOADS = os.getenv("SCIKITPLOT_CORPUS_ALLOW_DOWNLOADS", "1").strip().lower() in {
    "1",
    "true",
    "yes",
    "on",
}

```

## Resolve local gallery assets[#](#resolve-local-gallery-assets "Link to this heading")

Sphinx-Gallery can execute generated copies of examples, so paths are anchored
to the example directory rather than the caller’s working directory.

```
def _resolve_example_dir() -> Path:
    """Resolve the example directory across scripts and Sphinx-Gallery."""
    file = globals().get("__file__")
    if file:
        return Path(file).resolve().parent
    return Path.cwd().resolve()


_EXAMPLE_DIR = _resolve_example_dir()
_DATA_DIR = _EXAMPLE_DIR / "data"

_WEB_TEXT_PATH = _DATA_DIR / "who_health_care_article_raw_html.txt"
_VIDEO_TEXT_PATH = _DATA_DIR / "who_video_transcript.txt"
_PDF_PATH = _DATA_DIR / "WHO-EURO-2025-12555-52329-80560-eng.pdf"
_IMAGE_PATH = _DATA_DIR / "WHO-EURO-2025-12555-52329-80560-eng.pdf.jpg"
_AUDIO_PATH = _DATA_DIR / "can-people-afford-to-pay-for-health-care.mp3"

_COLLECTION_ID = "who-greece-financial-protection"

```

## External/live source equivalents — not executed[#](#external-live-source-equivalents-not-executed "Link to this heading")

These URLs document the corresponding live sources. They are never used as
an implicit fallback merely because a local sidecar is missing.

```
WHO_ARTICLE_URL = (
    "https://www.who.int/europe/news/item/"
    "12-12-2023-out-of-pocket-payments-for-primary-health-care-"
    "unaffordable-for-millions-in-europe-new-who-report-shows"
)
WHO_VIDEO_URL = "https://youtu.be/rwPISgZcYIk"
WHO_PDF_URL = (
    "https://iris.who.int/server/api/core/bitstreams/"
    "7ad66865-7f23-4485-8cf5-7b3d78bdf4f9/content"
)
WHO_IMAGE_URL = (
    "https://iris.who.int/server/api/core/bitstreams/"
    "d57241c0-512d-4cfc-9ead-91a83eea83f0/content"
)

print("Live-source equivalents are documented but not fetched:")
for label, url in [
    ("web", WHO_ARTICLE_URL),
    ("video", WHO_VIDEO_URL),
    ("pdf", WHO_PDF_URL),
    ("image", WHO_IMAGE_URL),
]:
    print(f"  {label:5s} {url}")

```
```
Live-source equivalents are documented but not fetched:
  web   https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
  video https://youtu.be/rwPISgZcYIk
  pdf   https://iris.who.int/server/api/core/bitstreams/7ad66865-7f23-4485-8cf5-7b3d78bdf4f9/content
  image https://iris.who.int/server/api/core/bitstreams/d57241c0-512d-4cfc-9ead-91a83eea83f0/content

```

## Small display/status helpers[#](#small-display-status-helpers "Link to this heading")

```
def banner(title: str) -> None:
    """Print a visible phase separator."""
    line = "=" * 76
    print(f"\n{line}\n{title}\n{line}")


def show_doc(doc: CorpusDocument, index: int = 0) -> None:
    """Print a bounded evidence preview."""
    preview = doc.text[:120].replace("\n", " ")
    print(
        f"  [{index}] source_type={doc.source_type} "
        f"input={doc.input_path!r}"
    )
    if doc.source_title:
        print(f"      title: {doc.source_title}")
    if doc.page_number is not None:
        print(f"      page: {doc.page_number}")
    if doc.timecode_start is not None:
        end = (
            "?"
            if doc.timecode_end is None
            else f"{doc.timecode_end:.1f}s"
        )
        print(f"      time: {doc.timecode_start:.1f}s → {end}")
    if doc.confidence is not None:
        print(f"      confidence: {doc.confidence:.3f}")
    if doc.ocr_engine:
        print(f"      OCR: {doc.ocr_engine}")
    print(f"      text: {preview!r}")


source_log: list[dict[str, object]] = []
all_documents: list[CorpusDocument] = []


def _record(
    label: str,
    *,
    status: str,
    documents: list[CorpusDocument] | None = None,
    detail: str = "",
) -> None:
    """Record one source outcome and retain successful documents."""
    docs = documents or []
    if docs:
        all_documents.extend(docs)

    source_log.append(
        {
            "source": label,
            "status": status,
            "documents": len(docs),
            "detail": detail,
        }
    )

    marker = "✓" if status == "OK" else "↷"
    suffix = f" — {detail}" if detail else ""
    print(f"{marker} {label}: {len(docs)} documents [{status}]{suffix}")

    if docs:
        show_doc(docs[0])

```

## Capability preflights[#](#capability-preflights "Link to this heading")

These checks do not install dependencies or download model/resource data.

```
def _pdf_ready() -> tuple[bool, str]:
    """Check whether at least one built-in PDF extraction backend exists."""
    if importlib.util.find_spec("pdfminer") is not None:
        return True, "pdfminer.six available"
    if importlib.util.find_spec("pypdf") is not None:
        return True, "pypdf available"
    return False, "neither pdfminer.six nor pypdf is installed"


def _ocr_ready() -> tuple[bool, str]:
    """Check the default Tesseract image-reader capability."""
    if importlib.util.find_spec("PIL") is None:
        return False, "Pillow is not installed"
    if importlib.util.find_spec("pytesseract") is None:
        return False, "pytesseract is not installed"
    if shutil.which("tesseract") is None:
        return False, "Tesseract executable is not available on PATH"
    return True, "pytesseract + Tesseract available"


def _whisper_ready() -> tuple[bool, str]:
    """Check only for an installed supported Whisper Python backend."""
    if importlib.util.find_spec("faster_whisper") is not None:
        return True, "faster-whisper installed"
    if importlib.util.find_spec("whisper") is not None:
        return True, "openai-whisper installed"
    return False, "neither faster-whisper nor openai-whisper is installed"

```

## Phase 1 — ingest heterogeneous local sources[#](#phase-1-ingest-heterogeneous-local-sources "Link to this heading")

Every source is independent. A missing optional source does not erase
evidence already read from another source.

```
banner("PHASE 1 — INGEST LOCAL SOURCES")

```
```
============================================================================
PHASE 1 — INGEST LOCAL SOURCES
============================================================================

```

## Source 1 — saved web article[#](#source-1-saved-web-article "Link to this heading")

The local text/HTML proxy is labelled as web evidence. Missing local data is
a gallery packaging skip, not a reason to contact the public URL.

```
if not _WEB_TEXT_PATH.exists():
    _record(
        "web article",
        status="SKIP",
        detail=f"local sidecar missing: {_WEB_TEXT_PATH.name}",
    )
else:
    web_reader = DocumentReader.create(
        _WEB_TEXT_PATH,
        source_type=SourceType.WEB,
        source_title=(
            "Out-of-pocket payments for health care "
            "unaffordable for millions in Europe"
        ),
        source_author="WHO Regional Office for Europe",
        source_date="2023-12-12",
        collection_id=_COLLECTION_ID,
    )
    _record(
        "web article",
        status="OK",
        documents=list(web_reader.get_documents()),
    )

```
```
↷ web article: 0 documents [SKIP] — local sidecar missing: who_health_care_article_raw_html.txt

```

## Source 2 — saved YouTube transcript proxy[#](#source-2-saved-youtube-transcript-proxy "Link to this heading")

The dedicated YouTube gallery covers live caption retrieval. Here a saved
transcript sidecar keeps this broad integration example deterministic.

```
if not _VIDEO_TEXT_PATH.exists():
    _record(
        "YouTube transcript proxy",
        status="SKIP",
        detail=f"local sidecar missing: {_VIDEO_TEXT_PATH.name}",
    )
else:
    video_reader = DocumentReader.create(
        _VIDEO_TEXT_PATH,
        source_type=SourceType.VIDEO,
        source_title="Can people afford to pay for health care? WHO Europe",
        collection_id=_COLLECTION_ID,
    )
    _record(
        "YouTube transcript proxy",
        status="OK",
        documents=list(video_reader.get_documents()),
    )

```
```
↷ YouTube transcript proxy: 0 documents [SKIP] — local sidecar missing: who_video_transcript.txt

```

## Source 3 — PDF report[#](#source-3-pdf-report "Link to this heading")

The local PDF is executed only when a built-in PDF backend is present.

```
pdf_ready, pdf_reason = _pdf_ready()

if not _PDF_PATH.exists():
    _record(
        "PDF report",
        status="SKIP",
        detail=f"local sidecar missing: {_PDF_PATH.name}",
    )
elif not pdf_ready:
    _record("PDF report", status="SKIP", detail=pdf_reason)
else:
    pdf_reader = DocumentReader.create(
        _PDF_PATH,
        source_type=SourceType.RESEARCH,
        source_title="Financial Protection Review: Greece Summary",
        source_author="WHO Barcelona Office",
        source_date="2023-01-01",
        collection_id=_COLLECTION_ID,
    )
    _record(
        "PDF report",
        status="OK",
        documents=list(pdf_reader.get_documents()),
    )

```
```
✓ PDF report: 6 documents [OK]
  [0] source_type=research input='WHO-EURO-2025-12555-52329-80560-eng.pdf'
      title: Financial Protection Review: Greece Summary
      page: 0
      text: 'Can people afford  to pay for health care?  New evidence on  financial protection  in Greece: summary This review assess'

```

## Source 4 — image OCR[#](#source-4-image-ocr "Link to this heading")

OCR is optional. Missing Pillow/pytesseract/Tesseract is a bounded skip.
After a successful preflight, unexpected OCR errors are allowed to surface.

```
ocr_ready, ocr_reason = _ocr_ready()

if not _IMAGE_PATH.exists():
    _record(
        "image OCR",
        status="SKIP",
        detail=f"local sidecar missing: {_IMAGE_PATH.name}",
    )
elif not ocr_ready:
    _record("image OCR", status="SKIP", detail=ocr_reason)
else:
    image_reader = DocumentReader.create(
        _IMAGE_PATH,
        source_type=SourceType.IMAGE,
        source_title="WHO Greece Report — Page 1 Scan",
        collection_id=_COLLECTION_ID,
        backend="tesseract",
        preprocess_grayscale=True,
    )
    _record(
        "image OCR",
        status="OK",
        documents=list(image_reader.get_documents()),
    )

```
```
✓ image OCR: 1 documents [OK]
  [0] source_type=image input='WHO-EURO-2025-12555-52329-80560-eng.pdf.jpg'
      title: WHO Greece Report — Page 1 Scan
      page: 0
      confidence: 0.670
      OCR: tesseract
      text: '   {can people afford 7  topay for health care? New evidence on financial protection InGreece summary    \x0c'

```

## Source 5 — optional audio ASR[#](#source-5-optional-audio-asr "Link to this heading")

Audio transcription is intentionally opt-in in this broad example. The
dedicated audio gallery demonstrates the offline companion-transcript path.

To execute Whisper manually:

```
SCIKITPLOT_GALLERY_RUN_ASR=1 python plot_corpus_who_per_file_script.py

```
```
whisper_ready, whisper_reason = _whisper_ready()

if not _AUDIO_PATH.exists():
    _record(
        "audio ASR",
        status="SKIP",
        detail=f"local sidecar missing: {_AUDIO_PATH.name}",
    )
elif not _RUN_ASR:
    _record(
        "audio ASR",
        status="SKIP",
        detail="optional ASR disabled; set SCIKITPLOT_GALLERY_RUN_ASR=1",
    )
elif not whisper_ready:
    _record("audio ASR", status="SKIP", detail=whisper_reason)
else:
    audio_reader = DocumentReader.create(
        _AUDIO_PATH,
        source_type=SourceType.AUDIO,
        source_title="Can people afford to pay for health care? (podcast)",
        collection_id=_COLLECTION_ID,
        transcribe=True,
        whisper_model="base",
    )
    _record(
        "audio ASR",
        status="OK",
        documents=list(audio_reader.get_documents()),
    )

```
```
✓ audio ASR: 5 documents [OK]
  [0] source_type=audio input='can-people-afford-to-pay-for-health-care.mp3'
      title: Can people afford to pay for health care? (podcast)
      time: 0.0s → 6.0s
      confidence: 0.854
      text: 'Can people afford to pay for health care in Europe?'

```

## Ingestion summary[#](#ingestion-summary "Link to this heading")

This is the key partial-success view: every source keeps its own status.

```
print("\nSource outcome summary")
print("-" * 92)
print(f"{'source':28s} {'status':8s} {'docs':>6s}  detail")
print("-" * 92)

for entry in source_log:
    print(
        f"{str(entry['source']):28.28s} "
        f"{str(entry['status']):8s} "
        f"{int(entry['documents']):>6d}  "
        f"{entry['detail']}"
    )

print(f"\nTotal retained documents: {len(all_documents)}")

source_types = Counter(str(doc.source_type) for doc in all_documents)
if source_types:
    print("Documents by source type:")
    for source_type, count in sorted(source_types.items()):
        print(f"  {source_type:12s} {count:4d}")

```
```
Source outcome summary
--------------------------------------------------------------------------------------------
source                       status     docs  detail
--------------------------------------------------------------------------------------------
web article                  SKIP          0  local sidecar missing: who_health_care_article_raw_html.txt
YouTube transcript proxy     SKIP          0  local sidecar missing: who_video_transcript.txt
PDF report                   OK            6
image OCR                    OK            1
audio ASR                    OK            5

Total retained documents: 12
Documents by source type:
  audio           5
  image           1
  research        6

```

## Phase 2 — normalize[#](#phase-2-normalize "Link to this heading")

Normalization creates a stable text representation while retaining the
original evidence in `CorpusDocument.text`.

```
banner("PHASE 2 — NORMALIZE")

normalizer = NormalizationPipeline(
    [
        UnicodeNormalizer(),
        WhitespaceNormalizer(),
    ]
)

all_documents = normalizer.normalize_batch(all_documents)
n_normalised = sum(
    1 for doc in all_documents if doc.normalized_text is not None
)

print(f"Normalized: {n_normalised}/{len(all_documents)}")
if all_documents:
    show_doc(all_documents[0])

```
```
============================================================================
PHASE 2 — NORMALIZE
============================================================================
Normalized: 12/12
  [0] source_type=research input='WHO-EURO-2025-12555-52329-80560-eng.pdf'
      title: Financial Protection Review: Greece Summary
      page: 0
      text: 'Can people afford  to pay for health care?  New evidence on  financial protection  in Greece: summary This review assess'

```

## Phase 3 — dependency-free lexical enrichment[#](#phase-3-dependency-free-lexical-enrichment "Link to this heading")

SIMPLE tokenization + frequency keywords are enough for the BM25 demonstration.
Stopword removal is disabled so this phase does not require NLTK data.

```
banner("PHASE 3 — ENRICH FOR LEXICAL RETRIEVAL")

enricher = NLPEnricher(
    EnricherConfig(
        tokenizer="simple",
        keyword_extractor="frequency",
        max_keywords=15,
        remove_stopwords=False,
        min_token_length=3,
    )
)

all_documents = enricher.enrich_documents(all_documents)
n_enriched = sum(1 for doc in all_documents if doc.tokens)

print(f"Enriched: {n_enriched}/{len(all_documents)}")
if all_documents:
    show_doc(all_documents[0])

```
```
============================================================================
PHASE 3 — ENRICH FOR LEXICAL RETRIEVAL
============================================================================
Enriched: 12/12
  [0] source_type=research input='WHO-EURO-2025-12555-52329-80560-eng.pdf'
      title: Financial Protection Review: Greece Summary
      page: 0
      text: 'Can people afford  to pay for health care?  New evidence on  financial protection  in Greece: summary This review assess'

```

## Phase 4 — build a keyword index[#](#phase-4-build-a-keyword-index "Link to this heading")

Dense embeddings are intentionally not required in this broad integration
example. Keyword retrieval keeps the executed path portable.

```
banner("PHASE 4 — BUILD KEYWORD INDEX")

index: RetrievalIndex | None = None

if not all_documents:
    print("[SKIP] Index build: no source produced documents.")
else:
    index = RetrievalIndex(
        config=RetrievalConfig(
            match_mode="keyword",
            top_k=5,
        )
    )
    index.build(all_documents)

    print(f"Indexed documents: {index.n_documents}")
    print(f"Dense embeddings present: {index.has_embeddings}")

```
```
============================================================================
PHASE 4 — BUILD KEYWORD INDEX
============================================================================
Indexed documents: 12
Dense embeddings present: False

```

## Phase 5 — search one index under two policies[#](#phase-5-search-one-index-under-two-policies "Link to this heading")

`keyword` ranks lexical relevance. `strict` performs exact-text matching.
Search policy can change without rebuilding this lexical corpus.

```
banner("PHASE 5 — SEARCH")

queries = [
    ("catastrophic health spending Greece", "keyword"),
    ("out-of-pocket payments medicines", "keyword"),
    ("dental care", "strict"),
]

if index is None:
    print("[SKIP] Search: no index was built.")
else:
    for query, mode in queries:
        print(f"\n{mode.upper()}: {query!r}")

        response = index.search(
            query,
            config=RetrievalConfig(
                match_mode=mode,
                top_k=3,
            ),
        )

        print(f"status={response.status} hits={len(response)}")

        for rank, hit in enumerate(response, start=1):
            source = hit.doc.source_title or hit.doc.input_path
            preview = hit.doc.text[:100].replace("\n", " ")
            print(
                f"  [{rank}] score={hit.score:.4f} "
                f"source={source!r}"
            )
            print(f"      {preview!r}")

```
```
============================================================================
PHASE 5 — SEARCH
============================================================================

KEYWORD: 'catastrophic health spending Greece'
status=success hits=3
  [1] score=5.7230 source='Financial Protection Review: Greece Summary'
      'Can people afford  to pay for health care?  New evidence on  financial protection  in Greece: summar'
  [2] score=5.2795 source='Financial Protection Review: Greece Summary'
      'Fig. 2. Breakdown of catastrophic  health spending by type of health  care and consumption quintile '
  [3] score=4.4449 source='Financial Protection Review: Greece Summary'
      'Fig. 3. Households with catastrophic  health spending and out-of-pocket  payments as a share of curr'

KEYWORD: 'out-of-pocket payments medicines'
status=success hits=3
  [1] score=6.5389 source='Financial Protection Review: Greece Summary'
      'Fig. 3. Households with catastrophic  health spending and out-of-pocket  payments as a share of curr'
  [2] score=6.4360 source='Financial Protection Review: Greece Summary'
      'Fig. 2. Breakdown of catastrophic  health spending by type of health  care and consumption quintile '
  [3] score=3.6609 source='Can people afford to pay for health care? (podcast)'
      "When people have to pay out of pocket for health care and they can't afford it,"

STRICT: 'dental care'
status=success hits=3
  [1] score=1.0000 source='Financial Protection Review: Greece Summary'
      'Fig. 2. Breakdown of catastrophic  health spending by type of health  care and consumption quintile '
  [2] score=1.0000 source='Financial Protection Review: Greece Summary'
      'Fig. 3. Households with catastrophic  health spending and out-of-pocket  payments as a share of curr'
  [3] score=1.0000 source='Financial Protection Review: Greece Summary'
      '• continued underfunding of the health system – public  spending on health has risen since the econo'

```

## Phase 6 — adapt by user goal[#](#phase-6-adapt-by-user-goal "Link to this heading")

The adapters all consume the same canonical CorpusDocument collection. They
are grouped here by **why** a user would choose them rather than presented as a
flat list of unrelated conversions.

```
banner("PHASE 6 — ADAPT FOR DOWNSTREAM CONSUMERS")

```
```
============================================================================
PHASE 6 — ADAPT FOR DOWNSTREAM CONSUMERS
============================================================================

```

## 6A. Agent/framework handoff — LangChain and LangGraph[#](#a-agent-framework-handoff-langchain-and-langgraph "Link to this heading")

These adapters are dependency-soft by design: when LangChain is unavailable,
equivalent plain-Python structures are returned.

```
print("\nAgent/framework handoff")

lc_docs = to_langchain_documents(all_documents[:3])
print(f"LangChain-compatible documents: {len(lc_docs)}")
if lc_docs:
    first = lc_docs[0]
    if isinstance(first, dict):
        print("  representation: plain dict fallback")
        print(f"  keys: {sorted(first)}")
    else:
        print(f"  representation: {type(first).__name__}")

langgraph_state = to_langgraph_state(
    all_documents[:3],
    query="catastrophic health spending",
    match_mode="keyword",
)

print(f"LangGraph state keys: {sorted(langgraph_state)}")
print(f"LangGraph results: {langgraph_state['n_results']}")

```
```
Agent/framework handoff
LangChain-compatible documents: 3
  representation: Document
LangGraph state keys: ['documents', 'match_mode', 'n_results', 'query']
LangGraph results: 3

```

## 6B. Protocol handoff — MCP[#](#b-protocol-handoff-mcp "Link to this heading")

MCP resources expose addressable evidence. The server adapter reuses the
same RetrievalIndex when one is available.

```
print("\nProtocol handoff — MCP")

mcp_resources = to_mcp_resources(all_documents[:3])
print(f"MCP resources: {len(mcp_resources)}")
for resource in mcp_resources[:2]:
    print(f"  {resource['uri']} → {resource['text'][:70]!r}")

mcp_tool = to_mcp_tool_result(all_documents[:3])
print(f"MCP tool content items: {len(mcp_tool['content'])}")
print(f"MCP tool isError: {mcp_tool['isError']}")

if index is None:
    print("[SKIP] MCP search server: no index was built.")
else:
    mcp_server = MCPCorpusServer(
        index=index,
        server_name="who-corpus",
    )
    tool_names = [tool["name"] for tool in mcp_server.list_tools()]
    print(f"MCP server tools: {tool_names}")

```
```
Protocol handoff — MCP
MCP resources: 3
  corpus://0f29e28833142922 → 'Can people afford \nto pay for health care? \nNew evidence on \nfinancial'
  corpus://b649dce7516ea847 → 'Fig. 2. Breakdown of catastrophic \nhealth spending by type of health \n'
MCP tool content items: 3
MCP tool isError: False
MCP server tools: ['corpus_search']

```

## 6C. Data/RAG interchange — HuggingFace, RAG tuples, JSONL[#](#c-data-rag-interchange-huggingface-rag-tuples-jsonl "Link to this heading")

```
print("\nData and RAG interchange")

hf_data = to_huggingface_dataset(all_documents[:3])
if isinstance(hf_data, dict):
    print(f"HuggingFace fallback columns: {sorted(hf_data)}")
    print(f"HuggingFace fallback rows: {len(hf_data.get('text', []))}")
else:
    print(f"HuggingFace representation: {type(hf_data).__name__}")
    print(f"HuggingFace rows: {len(hf_data)}")

rag_rows = to_rag_tuples(all_documents[:3])
print(f"RAG tuples: {len(rag_rows)}")

jsonl_rows = list(to_jsonl(all_documents[:3]))
print(f"JSONL rows: {len(jsonl_rows)}")
if jsonl_rows:
    first_json = json.loads(jsonl_rows[0])
    print(f"JSONL first text: {first_json['text'][:80]!r}")

```
```
Data and RAG interchange
HuggingFace representation: Dataset
HuggingFace rows: 3
RAG tuples: 3
JSONL rows: 3
JSONL first text: 'Can people afford \nto pay for health care? \nNew evidence on \nfinancial protectio'

```

## Where CorpusBuilder fits[#](#where-corpusbuilder-fits "Link to this heading")

This file deliberately exposes each stage. Most applications do not need to
keep those variables synchronized manually.

`CorpusBuilder` is the higher-level choice when the goal is:

`many sources → partial success → normalize/enrich/index → adapters`.

Creating the configuration below performs no source I/O and needs no model.

```
builder_config = BuilderConfig(
    chunker=None,
    normalize=True,
    normalizer_steps=["unicode", "whitespace"],
    enrich=True,
    enricher_kwargs={
        "tokenizer": "simple",
        "keyword_extractor": "frequency",
        "remove_stopwords": False,
        "max_keywords": 15,
    },
    embed=False,
    build_index=True,
    retrieval_config=RetrievalConfig(
        match_mode="keyword",
        top_k=5,
    ),
    collection_id=_COLLECTION_ID,
)

builder = CorpusBuilder(builder_config)

print("\nHigher-level alternative:")
print("  CorpusBuilder configured:", type(builder).__name__)
print("  embeddings enabled:", builder.config.embed)
print("  index enabled:", builder.config.build_index)

# A real application can then call:
#
# .. code-block:: python
#
#    result = builder.build(local_sources)
#    print(result.summary())
#    print(result.errors)      # structured per-source diagnostics
#    hits = builder.search("catastrophic health spending")
#
# ``BuildResult.errors`` is the structured partial-success surface.

```
```
Higher-level alternative:
  CorpusBuilder configured: CorpusBuilder
  embeddings enabled: False
  index enabled: True

```

## Where FluentCorpus / RuntimeCorpus fits[#](#where-fluentcorpus-runtimecorpus-fits "Link to this heading")

Use `FluentCorpus` when configuration itself needs to be immutable,
inspectable, branchable, and fingerprinted; materialize it into
`RuntimeCorpus` when that plan becomes operational.

The current RuntimeCorpus sequence path is intentionally fail-fast for a
coherent runtime generation. Therefore this broad “some sources may fail,
keep the rest” scenario is a particularly natural fit for `CorpusBuilder`
or explicit source-by-source orchestration.

## Live source usage — explicit, code-only[#](#live-source-usage-explicit-code-only "Link to this heading")

Network ingestion is intentionally separated from missing-sidecar handling.
Enable it in an application only when the network and remote-service
dependency are part of the intended runtime.

```
web_docs = list(DocumentReader.from_url(WHO_ARTICLE_URL).get_documents())
video_docs = list(DocumentReader.from_url(WHO_VIDEO_URL).get_documents())
pdf_docs = list(
    DocumentReader.from_url(
        WHO_PDF_URL,
        source_type=SourceType.RESEARCH,
    ).get_documents()
)

```

URL validation, redirects, download limits, and SSRF policy remain owned by
the Corpus URL/reader layer; this gallery does not bypass them.

## Final summary[#](#final-summary "Link to this heading")

```
banner("SUMMARY")

n_ok = sum(1 for entry in source_log if entry["status"] == "OK")
n_skipped = sum(1 for entry in source_log if entry["status"] == "SKIP")

print(f"Sources represented:  {len(source_log)}")
print(f"Sources succeeded:    {n_ok}")
print(f"Sources skipped:      {n_skipped}")
print(f"Documents retained:   {len(all_documents)}")
print(f"Normalized:           {n_normalised}")
print(f"Enriched:             {n_enriched}")
print(f"Index documents:      {index.n_documents if index is not None else 0}")
print(
    "Dense embeddings:     "
    f"{index.has_embeddings if index is not None else False}"
)
print("Network requests:     0 in the normal gallery path")

```
```
============================================================================
SUMMARY
============================================================================
Sources represented:  5
Sources succeeded:    3
Sources skipped:      2
Documents retained:   12
Normalized:           12
Enriched:             12
Index documents:      12
Dense embeddings:     False
Network requests:     0 in the normal gallery path

```

## Takeaway[#](#takeaway "Link to this heading")

Keep source failures observable and keep successful evidence.

Use:

* explicit components when teaching/debugging stage boundaries,
* `CorpusBuilder` for broad heterogeneous partial-success workflows,
* `FluentCorpus` + `RuntimeCorpus` for reusable declarative runtime plans.

Tags: [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 4.815 seconds)

[![Launch binder](../../_images/binder_badge_logo4.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_who_per_file_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo4.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_who_per_file_script.ipynb)

[`Download Jupyter notebook: plot_corpus_who_per_file_script.ipynb`](../../_downloads/9466f181166917995d30d548ac0003b5/plot_corpus_who_per_file_script.ipynb)

[`Download Python source code: plot_corpus_who_per_file_script.py`](../../_downloads/3bed8f76d7875cdf6ef28603f2ec6b20/plot_corpus_who_per_file_script.py)

[`Download zipped: plot_corpus_who_per_file_script.zip`](../../_downloads/5b62bdbe8ebbfd43113841a32e4898d0/plot_corpus_who_per_file_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[Process an MP3 with Corpus](plot_corpus_a_tale_of_two_cities_mp3_script.html)

Process an MP3 with Corpus![](../../_images/sphx_glr_plot_corpus_who_youtube_script_thumb.png)

[Process a YouTube Transcript with Corpus](plot_corpus_who_youtube_script.html)

Process a YouTube Transcript with Corpus![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[Process a Mixed-Media ZIP Archive with Corpus](plot_corpus_who_zip_script.html)

Process a Mixed-Media ZIP Archive with Corpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)