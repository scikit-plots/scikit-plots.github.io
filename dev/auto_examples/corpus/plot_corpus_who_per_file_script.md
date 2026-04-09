> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-who-per-file-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# corpus WHO European Region local or url per file with examples[#](#corpus-who-european-region-local-or-url-per-file-with-examples "Link to this heading")

Examples related to the [`corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") submodule.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## Download the related packages[#](#download-the-related-packages "Link to this heading")

First we download the media preproccess libraries (text, image, audio or video).

```
pip install nltk gensim langdetect faster-whisper openai-whisper pytesseract youtube-transcript-api
sudo apt-get install tesseract-ocr

curl -O https://raw.githubusercontent.com/scikit-plots/scikit-plots/main/requirements/corpus.txt
pip install -r requirements/corpus.txt
pip install scikit-plots[corpus]

```
> **See also**
> * galleries/examples/00-jupyter\_notebooks/corpus/plot\_corpus\_from\_any\_media\_notebook.ipynb
```
# import faster_whisper
# import whisper  # openai-whisper
# import youtube_transcript_api

```
```
import os
import json
import sys
import textwrap
from pathlib import Path

import scikitplot as sp
from scikitplot import corpus
from scikitplot.corpus import (
    DocumentReader,
    CorpusPipeline,
    SentenceChunker,
    ExportFormat,
    CorpusDocument,
    SourceType,
)

from scikitplot.corpus._schema import (
    CorpusDocument,
    SourceType,
    MatchMode,
    SectionType,
    ChunkingStrategy,
    _PROMOTED_RAW_KEYS,
)
from scikitplot.corpus._base import DocumentReader, DefaultFilter
from scikitplot.corpus._normalizers import (
    NormalizationPipeline,
    UnicodeNormalizer,
    WhitespaceNormalizer,
)
from scikitplot.corpus._enrichers._nlp_enricher import NLPEnricher, EnricherConfig
from scikitplot.corpus._similarity._similarity import (
    SimilarityIndex,
    SearchConfig,
    SearchResult,
)
from scikitplot.corpus._adapters import (
    to_langchain_documents,
    to_langgraph_state,
    to_mcp_resources,
    to_mcp_tool_result,
    to_huggingface_dataset,
    to_rag_tuples,
    to_jsonl,
    MCPCorpusServer,
)

```
```
# ===========================================================================
# HELPER: print section banners
# ===========================================================================

def banner(title: str, char: str = "=") -> None:
    line = char * 72
    print(f"\n{line}\n  {title}\n{line}\n")

def mini_banner(title: str) -> None:
    print(f"\n  --- {title} ---\n")

def show_doc(doc: CorpusDocument, index: int = 0) -> None:
    """Pretty-print a single CorpusDocument."""
    text_preview = doc.text[:100].replace("\n", " ")
    norm_preview = (doc.normalized_text or "")[:80].replace("\n", " ")
    print(f"  [{index:3d}] doc_id={doc.doc_id[:12]}…  source_type={doc.source_type}")
    print(f"        text: {text_preview!r}…")
    if norm_preview:
        print(f"        norm: {norm_preview!r}…")
    if doc.tokens:
        print(f"        tokens({len(doc.tokens)}): {doc.tokens[:8]}…")
    if doc.keywords:
        print(f"        keywords: {doc.keywords[:6]}")
    if doc.timecode_start is not None:
        print(f"        timecode: {doc.timecode_start:.1f}s – {doc.timecode_end:.1f}s")
    if doc.confidence is not None:
        print(f"        confidence: {doc.confidence:.3f}")
    if doc.page_number is not None:
        print(f"        page: {doc.page_number}")

```
```
# ===========================================================================
# PHASE 1: INGEST — Process all 5 source types via DocumentReader
# ===========================================================================

banner("PHASE 1: INGEST — 5 Source Types via DocumentReader")

all_documents: list[CorpusDocument] = []
source_log: list[dict] = []

# --- Source ①: Web Article (HTML) ---
# In production: DocumentReader.from_url("https://www.who.int/europe/news/item/...")
# Here we use the local text proxy (same content)
# https://archive.org/download/WHO-documents
mini_banner("Source ①: Web Article (text proxy for HTML URL)")
try:
    if Path("who_health_care_article_raw_html.txt").exists():
        # from local raw html page
        reader = DocumentReader.create(
            Path("who_health_care_article_raw_html.txt"),
            source_type=SourceType.WEB,
            source_title="Out-of-pocket payments for health care unaffordable for millions in Europe",
            source_author="WHO Regional Office for Europe",
            source_date="2023-12-12",
            collection_id="who-greece-financial-protection",
        )
    else:
        # from url raw html page DocumentReader.from_url for raw html
        reader = DocumentReader.from_url(
            "https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows",
        )
    docs = list(reader.get_documents())
    all_documents.extend(docs)
    source_log.append({"type": "web_article", "n_docs": len(docs), "status": "OK"})
    print(f"  ✓ Web article: {len(docs)} chunks ingested")
    if docs:
        show_doc(docs[0], 0)
except Exception as e:
    source_log.append({"type": "web_article", "n_docs": 0, "status": f"ERROR: {e}"})
    print(f"  ✗ Web article: {e}")

```
```
========================================================================
  PHASE 1: INGEST — 5 Source Types via DocumentReader
========================================================================


  --- Source ①: Web Article (text proxy for HTML URL) ---

  ✓ Web article: 91 chunks ingested
  [  0] doc_id=9432e3e0cdf3…  source_type=web
        text: 'Out-of-pocket payments for primary health care unaffordable for millions in Europe, new WHO report s'…

```
```
docs[60].text

```
```
'Catastrophic out-of-pocket payments are mainly driven by household spending on services that are commonly delivered or managed in primary-care settings, indicating important gaps in the coverage of primary care in many countries.'

```
```
all_documents[60].text

```
```
'Catastrophic out-of-pocket payments are mainly driven by household spending on services that are commonly delivered or managed in primary-care settings, indicating important gaps in the coverage of primary care in many countries.'

```
```
# --- Source ②: YouTube Transcript ---
# In production: DocumentReader.from_url("https://youtu.be/rwPISgZcYIk")
# "https://youtu.be/rwPISgZcYIk",  # https://www.youtube.com/watch?v=rwPISgZcYIk
mini_banner("Source ②: YouTube Transcript (text proxy)")
try:
    if Path("who_video_transcript.txt").exists():
        # TODO: Not implemented from local for raw video embedding support
        # from local video Transcript
        reader = DocumentReader.create(
            Path("who_video_transcript.txt"),
            source_type=SourceType.VIDEO,
            source_title="Can people afford to pay for health care? WHO Europe",
            collection_id="who-greece-financial-protection",
        )
    else:
        # TODO: Not implemented pdf from DocumentReader.from_url for raw video embedding support
        # from url video Transcript
        reader = DocumentReader.from_url("https://youtu.be/rwPISgZcYIk")
    docs = list(reader.get_documents())
    all_documents.extend(docs)
    source_log.append({"type": "youtube_transcript", "n_docs": len(docs), "status": "OK"})
    print(f"  ✓ YouTube transcript: {len(docs)} chunks ingested")
    if docs:
        show_doc(docs[0], 0)
except Exception as e:
    source_log.append({"type": "youtube_transcript", "n_docs": 0, "status": f"ERROR: {e}"})
    print(f"  ✗ YouTube transcript: {e}")

```
```
  --- Source ②: YouTube Transcript (text proxy) ---

  ✗ YouTube transcript: YouTubeReader: could not retrieve transcripts for video 'rwPISgZcYIk':
Could not retrieve a transcript for the video https://www.youtube.com/watch?v=rwPISgZcYIk! This is most likely caused by:

YouTube is blocking requests from your IP. This usually is due to one of the following reasons:
- You have done too many requests and your IP has been blocked by YouTube
- You are doing requests from an IP belonging to a cloud provider (like AWS, Google Cloud Platform, Azure, etc.). Unfortunately, most IPs from cloud providers are blocked by YouTube.

There are two things you can do to work around this:
1. Use proxies to hide your IP address, as explained in the "Working around IP bans" section of the README (https://github.com/jdepoix/youtube-transcript-api?tab=readme-ov-file#working-around-ip-bans-requestblocked-or-ipblocked-exception).
2. (NOT RECOMMENDED) If you authenticate your requests using cookies, you will be able to continue doing requests for a while. However, YouTube will eventually permanently ban the account that you have used to authenticate with! So only do this if you don't mind your account being banned!

If you are sure that the described cause is not responsible for this error and that a transcript should be retrievable, please create an issue at https://github.com/jdepoix/youtube-transcript-api/issues. Please add which version of youtube_transcript_api you are using and provide the information needed to replicate the error. Also make sure that there are no open issues which already describe your problem!

```
```
# docs[0].text

```
```
# --- Source ③: PDF Report ---
# In production: fetch PDF from URL then DocumentReader.create("report.pdf")
mini_banner("Source ③: PDF Report (text proxy)")
try:
    if Path("WHO-EURO-2025-12555-52329-80560-eng.pdf").exists():
        # from local pdf
        reader = DocumentReader.create(
            Path("WHO-EURO-2025-12555-52329-80560-eng.pdf"),
            source_type=SourceType.RESEARCH,
            source_title="Financial Protection Review: Greece Summary",
            source_author="WHO Barcelona Office",
            source_date="2023-01-01",
            doi="10.2307/who-greece-fp-2023",
            collection_id="who-greece-financial-protection",
        )
    else:
        # TODO: Not implemented pdf from DocumentReader.from_url pdf url link
        reader = DocumentReader.from_url(
            "https://iris.who.int/server/api/core/bitstreams/7ad66865-7f23-4485-8cf5-7b3d78bdf4f9/content",
        )
        pass
    docs = list(reader.get_documents())
    all_documents.extend(docs)
    source_log.append({"type": "pdf_report", "n_docs": len(docs), "status": "OK"})
    print(f"  ✓ PDF report: {len(docs)} chunks ingested")
    if docs:
        show_doc(docs[0], 0)
except Exception as e:
    source_log.append({"type": "pdf_report", "n_docs": 0, "status": f"ERROR: {e}"})
    print(f"  ✗ PDF report: {e}")

```
```
--- Source ③: PDF Report (text proxy) ---

✗ PDF report: Neither pdfminer.six nor pypdf is installed. Install at least one:
pip install pdfminer.six
pip install pypdf

```
```
# docs[0].text

```
```
# --- Source ④: Document Scan (Image OCR) ---
mini_banner("Source ④: Document Scan (JPG → OCR)")
image_path = Path("WHO-EURO-2025-12555-52329-80560-eng.pdf.jpg")
try:
    if image_path.exists():
        # TODO: Not implemented image from local
        reader = DocumentReader.create(
            image_path,
            source_type=SourceType.IMAGE,
            source_title="WHO Greece Report — Page 1 Scan",
            collection_id="who-greece-financial-protection",
        )
    else:
        # TODO: Not implemented for image DocumentReader.from_url image url link
        reader = DocumentReader.from_url(
            "https://iris.who.int/server/api/core/bitstreams/d57241c0-512d-4cfc-9ead-91a83eea83f0/content",
            source_type=SourceType.IMAGE,
        )
        pass
    docs = list(reader.get_documents())
    all_documents.extend(docs)
    source_log.append({"type": "image_ocr", "n_docs": len(docs), "status": "OK"})
    print(f"  ✓ Image OCR: {len(docs)} chunks ingested")
    if docs:
        show_doc(docs[0], 0)
except ImportError as e:
    source_log.append({"type": "image_ocr", "n_docs": 0, "status": f"SKIP (dep missing): {e}"})
    print(f"  ⚠ Image OCR skipped (dependency not installed): {type(e).__name__}")
    print(f"    In production: pip install pytesseract Pillow")
except Exception as e:
    source_log.append({"type": "image_ocr", "n_docs": 0, "status": f"ERROR: {e}"})
    print(f"  ✗ Image OCR: {e}")

```
```
--- Source ④: Document Scan (JPG → OCR) ---

✓ Image OCR: 1 chunks ingested
[  0] doc_id=54c988bceb4a…  source_type=image
      text: '= re can people afford topay for health care?  New evidence on financial protection  InGreece! summa'…
      confidence: 0.598
      page: 0

```
```
# docs[0].text

```
```
# --- Source ⑤: Audio Podcast (MP3 → ASR) ---
mini_banner("Source ⑤: Audio Podcast (MP3 → ASR)")
audio_path = Path("data/can-people-afford-to-pay-for-health-care.mp3")
try:
    if audio_path.exists():
        # TODO: Not implemented audio from local
        reader = DocumentReader.create(
            audio_path,
            source_type=SourceType.AUDIO,
            source_title="Can people afford to pay for health care? (podcast)",
            collection_id="who-greece-financial-protection",
            transcribe=True,
            # If Needed like (animal sounds)
            # [ERROR: AudioReader: classify=True requires a 'classifier' callable. Provide a function with signature: classifier(path: Path, offset: float, duration: float) -> list[dict[str, Any]].]
            # classify=True,
            # classifier=my_classifier,
        )
    else:
        # TODO: Not implemented audio from DocumentReader.from_url audio file url link
        # https://archive.org/details/makingcon-241016/makingcon-241016_promo.mp3
        # https://www.bbc.com/audio/play/w3ct6vk6
        reader = DocumentReader.from_url(
            "https://archive.org/download/makingcon-241016/makingcon-241016_promo.mp3",
            transcribe=True,
        )
        pass
    docs = list(reader.get_documents())
    all_documents.extend(docs)
    source_log.append({"type": "audio_asr", "n_docs": len(docs), "status": "OK"})
    print(f"  ✓ Audio ASR: {len(docs)} chunks ingested")
    if docs:
        show_doc(docs[0], 0)
except ImportError as e:
    source_log.append({"type": "audio_asr", "n_docs": 0, "status": f"SKIP (dep missing)"})
    print(f"  ⚠ Audio ASR skipped (dependency not installed): {type(e).__name__}")
    print(f"    In production: pip install faster-whisper librosa")
except Exception as e:
    source_log.append({"type": "audio_asr", "n_docs": 0, "status": f"ERROR: {e}"})
    print(f"  ✗ Audio ASR: {e}")

```
```
--- Source ⑤: Audio Podcast (MP3 → ASR) ---

✓ Audio ASR: 5 chunks ingested
[  0] doc_id=7c39f4d500e1…  source_type=audio
      text: 'Can people afford to pay for health care in Europe?'…
      timecode: 0.0s – 6.0s
      confidence: 0.854

```
```
# docs[0].text

```
```
# --- Ingestion Summary ---
mini_banner("Ingestion Summary")
for entry in source_log:
    status = "✓" if entry["status"] == "OK" else "⚠"
    print(f"  {status} {entry['type']:25s} → {entry['n_docs']:3d} docs  [{entry['status']}]")
print(f"\n  Total documents in corpus: {len(all_documents)}")

```
```
  --- Ingestion Summary ---

  ✓ web_article               →  91 docs  [OK]
  ⚠ youtube_transcript        →   0 docs  [ERROR: YouTubeReader: could not retrieve transcripts for video 'rwPISgZcYIk':
Could not retrieve a transcript for the video https://www.youtube.com/watch?v=rwPISgZcYIk! This is most likely caused by:

YouTube is blocking requests from your IP. This usually is due to one of the following reasons:
- You have done too many requests and your IP has been blocked by YouTube
- You are doing requests from an IP belonging to a cloud provider (like AWS, Google Cloud Platform, Azure, etc.). Unfortunately, most IPs from cloud providers are blocked by YouTube.

There are two things you can do to work around this:
1. Use proxies to hide your IP address, as explained in the "Working around IP bans" section of the README (https://github.com/jdepoix/youtube-transcript-api?tab=readme-ov-file#working-around-ip-bans-requestblocked-or-ipblocked-exception).
2. (NOT RECOMMENDED) If you authenticate your requests using cookies, you will be able to continue doing requests for a while. However, YouTube will eventually permanently ban the account that you have used to authenticate with! So only do this if you don't mind your account being banned!

If you are sure that the described cause is not responsible for this error and that a transcript should be retrievable, please create an issue at https://github.com/jdepoix/youtube-transcript-api/issues. Please add which version of youtube_transcript_api you are using and provide the information needed to replicate the error. Also make sure that there are no open issues which already describe your problem!]
  ⚠ pdf_report                →   0 docs  [ERROR: Neither pdfminer.six nor pypdf is installed. Install at least one:
  pip install pdfminer.six
  pip install pypdf]
  ✓ image_ocr                 →   1 docs  [OK]
  ✓ audio_asr                 →   5 docs  [OK]

  Total documents in corpus: 97

```
```
# ===========================================================================
# PHASE 2: NORMALIZE — Clean text for embedding quality
# ===========================================================================

banner("PHASE 2: NORMALIZE — Unicode + Whitespace cleanup")

normalizer = NormalizationPipeline([
    UnicodeNormalizer(),
    WhitespaceNormalizer(),
])
all_documents = normalizer.normalize_batch(all_documents)

n_normalised = sum(1 for d in all_documents if d.normalized_text)
print(f"  ✓ Normalised {n_normalised}/{len(all_documents)} documents")
if all_documents:
    d = all_documents[0]
    print(f"  Example (doc 0):")
    print(f"    text[:80]:           {d.text[:80]!r}")
    print(f"    normalized_text[:80]: {(d.normalized_text or '')[:80]!r}")

```
```
========================================================================
  PHASE 2: NORMALIZE — Unicode + Whitespace cleanup
========================================================================

  ✓ Normalised 97/97 documents
  Example (doc 0):
    text[:80]:           'Out-of-pocket payments for primary health care unaffordable for millions in Euro'
    normalized_text[:80]: 'Out-of-pocket payments for primary health care unaffordable for millions in Euro'

```
```
# ===========================================================================
# PHASE 3: ENRICH — Tokenize + keywords for KEYWORD/BM25 search
# ===========================================================================

banner("PHASE 3: ENRICH — Tokens + Keywords (NLPEnricher)")

enricher = NLPEnricher(config=EnricherConfig(
    tokenizer="simple",
    keyword_extractor="frequency",
    max_keywords=15,
    remove_stopwords=True,
    min_token_length=3,
))
all_documents = enricher.enrich_documents(all_documents)

n_enriched = sum(1 for d in all_documents if d.tokens)
print(f"  ✓ Enriched {n_enriched}/{len(all_documents)} documents")
if all_documents:
    d = all_documents[0]
    print(f"  Example (doc 0):")
    print(f"    tokens({len(d.tokens or [])}): {(d.tokens or [])[:10]}…")
    print(f"    keywords: {(d.keywords or [])[:8]}")

```
```
========================================================================
  PHASE 3: ENRICH — Tokens + Keywords (NLPEnricher)
========================================================================

  ✓ Enriched 97/97 documents
  Example (doc 0):
    tokens(11): ['pocket', 'payments', 'primary', 'health', 'care', 'unaffordable', 'millions', 'europe', 'new', 'report']…
    keywords: ['pocket', 'payments', 'primary', 'health', 'care', 'unaffordable', 'millions', 'europe']

```
```
# ===========================================================================
# PHASE 4: INDEX — Build SimilarityIndex (KEYWORD mode, no embeddings)
# ===========================================================================

banner("PHASE 4: INDEX — Build SimilarityIndex (BM25 keyword mode)")

index = SimilarityIndex(config=SearchConfig(match_mode="keyword", top_k=5))
index.build(all_documents)
print(f"  ✓ Index built: {index.n_documents} documents, dense={index.has_embeddings}")

```
```
========================================================================
  PHASE 4: INDEX — Build SimilarityIndex (BM25 keyword mode)
========================================================================

  ✓ Index built: 97 documents, dense=False

```
```
# ===========================================================================
# PHASE 5: SEARCH — Multi-mode queries
# ===========================================================================

banner("PHASE 5: SEARCH — Multi-mode queries against the corpus")

queries = [
    ("catastrophic health spending Greece", "keyword"),
    ("poorest households", "keyword"),
    ("out-of-pocket payments medicines", "keyword"),
    ("dental care", "strict"),
    ("WHO Barcelona", "strict"),
]

for query, mode in queries:
    mini_banner(f'Search: "{query}" (mode={mode})')
    cfg = SearchConfig(match_mode=mode, top_k=3)
    results = index.search(query, config=cfg)
    if not results:
        print("  (no results)")
    for i, res in enumerate(results):
        text_preview = res.doc.text[:90].replace("\n", " ")
        src = res.doc.source_title or res.doc.source_file
        print(f"  [{i+1}] score={res.score:.4f}  src={src}")
        print(f"      {text_preview!r}…")

```
```
========================================================================
  PHASE 5: SEARCH — Multi-mode queries against the corpus
========================================================================


  --- Search: "catastrophic health spending Greece" (mode=keyword) ---

  [1] score=6.3942  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'Out-of-pocket payments lead to catastrophic health spending for between 1% and 20% of hous'…
  [2] score=5.4036  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'The report provides an assessment of financial protection for 40 countries (including all '…
  [3] score=3.9819  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'Catastrophic out-of-pocket payments are mainly driven by household spending on services th'…

  --- Search: "poorest households" (mode=keyword) ---

  [1] score=5.8803  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'Out-of-pocket payments lead to catastrophic health spending for between 1% and 20% of hous'…
  [2] score=2.6516  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'Using new pre-pandemic data from 2019, the report finds that out-of-pocket payments for ou'…
  [3] score=1.3198  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'Financial hardship caused by out-of-pocket payments for medicines, medical products such a'…

  --- Search: "out-of-pocket payments medicines" (mode=keyword) ---

  [1] score=6.4551  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'Primary-care coverage should include treatment, not just consultation and diagnosis. This '…
  [2] score=5.3309  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'Redesigning health coverage policy to reduce out-of-pocket payments'…
  [3] score=5.1315  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'Using new pre-pandemic data from 2019, the report finds that out-of-pocket payments for ou'…

  --- Search: "dental care" (mode=strict) ---

  [1] score=1.0000  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'Financial hardship caused by out-of-pocket payments for medicines, medical products such a'…
  [2] score=1.0000  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'Using new pre-pandemic data from 2019, the report finds that out-of-pocket payments for ou'…
  [3] score=1.0000  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'Primary-care coverage should include treatment, not just consultation and diagnosis. This '…

  --- Search: "WHO Barcelona" (mode=strict) ---

  [1] score=1.0000  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'She added, “I congratulate the WHO Barcelona Office for Health Systems Financing on the la'…
  [2] score=1.0000  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'WHO/Europe monitors financial protection through the WHO Barcelona Office for Health Syste'…
  [3] score=1.0000  src=https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
      'WHO Barcelona Office for Health Systems Financing (Spain)'…

```
```
# ===========================================================================
# PHASE 6: ADAPTERS — Export to every downstream format
# ===========================================================================

banner("PHASE 6: ADAPTERS — Export to LangChain / MCP / RAG / LangGraph / HF")

# --- 6a: LangChain Documents ---
mini_banner("6a: LangChain Documents")
lc_docs = to_langchain_documents(all_documents)
first = lc_docs[0]
if isinstance(first, dict):
    print(f"  ✓ {len(lc_docs)} LangChain docs (dict fallback — langchain not installed)")
    print(f"    keys: {list(first.keys())}")
    print(f"    page_content[:80]: {first['page_content'][:80]!r}")
    print(f"    metadata keys: {sorted(first['metadata'].keys())[:10]}")
else:
    print(f"  ✓ {len(lc_docs)} LangChain Document objects")

# --- 6b: LangGraph State ---
mini_banner("6b: LangGraph State")
state = to_langgraph_state(
    all_documents,
    query="catastrophic health spending",
    match_mode="keyword",
)
print(f"  ✓ LangGraph state dict:")
print(f"    keys: {sorted(state.keys())}")
print(f"    n_results: {state['n_results']}")
print(f"    query: {state['query']!r}")

# --- 6c: MCP Resources ---
mini_banner("6c: MCP Resources (Model Context Protocol)")
resources = to_mcp_resources(all_documents[:3])
for r in resources[:2]:
    print(f"  resource:")
    print(f"    uri:      {r['uri']}")
    print(f"    name:     {r['name']}")
    print(f"    mimeType: {r['mimeType']}")
    print(f"    text[:60]: {r['text'][:60]!r}…")

# --- 6d: MCP Tool Result ---
mini_banner("6d: MCP Tool Result (tools/call response)")
tool_result = to_mcp_tool_result(all_documents[:3])
print(f"  ✓ MCP tool result:")
print(f"    isError: {tool_result['isError']}")
print(f"    content items: {len(tool_result['content'])}")
for item in tool_result["content"][:2]:
    print(f"    [{item['type']}] text[:60]: {item['text'][:60]!r}…")
    print(f"         annotations: {item['annotations']}")

# --- 6e: MCP Server (adapter class) ---
mini_banner("6e: MCP Server Adapter")
mcp_server = MCPCorpusServer(index=index, server_name="who-corpus")
tools = mcp_server.list_tools()
print(f"  ✓ MCPCorpusServer: {mcp_server}")
print(f"    tools: {[t['name'] for t in tools]}")
print(f"    tool schema: {json.dumps(tools[0]['inputSchema'], indent=6)[:200]}…")

# --- 6f: HuggingFace Dataset ---
mini_banner("6f: HuggingFace Dataset")
hf = to_huggingface_dataset(all_documents)
if isinstance(hf, dict):
    print(f"  ✓ HuggingFace column dict (datasets lib not installed)")
    print(f"    columns: {sorted(hf.keys())}")
    print(f"    rows: {len(hf['text'])}")
else:
    print(f"  ✓ HuggingFace Dataset: {hf}")

# --- 6g: RAG Tuples ---
mini_banner("6g: RAG Tuples (text, metadata, embedding)")
tuples = to_rag_tuples(all_documents[:3])
for i, (text, meta, emb) in enumerate(tuples):
    print(f"  [{i}] text[:50]: {text[:50]!r}")
    print(f"      meta keys: {sorted(meta.keys())[:8]}")
    print(f"      embedding: {type(emb).__name__}")

# --- 6h: JSONL ---
mini_banner("6h: JSONL Streaming")
lines = list(to_jsonl(all_documents[:3]))
print(f"  ✓ {len(lines)} JSONL lines")
for i, line in enumerate(lines[:2]):
    obj = json.loads(line)
    print(f"  [{i}] keys: {sorted(obj.keys())[:8]}…  text[:50]: {obj['text'][:50]!r}")

```
```
========================================================================
  PHASE 6: ADAPTERS — Export to LangChain / MCP / RAG / LangGraph / HF
========================================================================


  --- 6a: LangChain Documents ---

  ✓ 97 LangChain docs (dict fallback — langchain not installed)
    keys: ['page_content', 'metadata']
    page_content[:80]: 'Out-of-pocket payments for primary health care unaffordable for millions in Euro'
    metadata keys: ['char_end', 'char_start', 'chunk_index', 'chunking_strategy', 'doc_id', 'element_index', 'html_tag', 'section_type', 'source_file', 'source_type']

  --- 6b: LangGraph State ---

  ✓ LangGraph state dict:
    keys: ['documents', 'match_mode', 'n_results', 'query']
    n_results: 97
    query: 'catastrophic health spending'

  --- 6c: MCP Resources (Model Context Protocol) ---

  resource:
    uri:      corpus://9432e3e0cdf3de0d
    name:     https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
    mimeType: text/plain
    text[:60]: 'Out-of-pocket payments for primary health care unaffordable '…
  resource:
    uri:      corpus://d4100a2a7807259d
    name:     https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows
    mimeType: text/plain
    text[:60]: 'Regions WHO Regional websites Africa Americas South-East Asi'…

  --- 6d: MCP Tool Result (tools/call response) ---

  ✓ MCP tool result:
    isError: False
    content items: 3
    [text] text[:60]: 'Out-of-pocket payments for primary health care unaffordable '…
         annotations: {'doc_id': '9432e3e0cdf3de0d', 'source_file': 'https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows', 'source_title': None, 'chunk_index': 0, 'score': None}
    [text] text[:60]: 'Regions WHO Regional websites Africa Americas South-East Asi'…
         annotations: {'doc_id': 'd4100a2a7807259d', 'source_file': 'https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-payments-for-primary-health-care-unaffordable-for-millions-in-europe-new-who-report-shows', 'source_title': None, 'chunk_index': 2, 'score': None}

  --- 6e: MCP Server Adapter ---

  ✓ MCPCorpusServer: MCPCorpusServer(name='who-corpus', n_docs=97)
    tools: ['corpus_search']
    tool schema: {
      "type": "object",
      "properties": {
            "query": {
                  "type": "string",
                  "description": "Search query text"
            },
            "top_k": {
  …

  --- 6f: HuggingFace Dataset ---

  ✓ HuggingFace column dict (datasets lib not installed)
    columns: ['chunk_index', 'doc_id', 'language', 'metadata_json', 'source_file', 'source_title', 'source_type', 'text']
    rows: 97

  --- 6g: RAG Tuples (text, metadata, embedding) ---

  [0] text[:50]: 'Out-of-pocket payments for primary health care una'
      meta keys: ['char_end', 'char_start', 'chunk_index', 'chunking_strategy', 'doc_id', 'element_index', 'html_tag', 'section_type']
      embedding: NoneType
  [1] text[:50]: 'Regions WHO Regional websites Africa Americas Sout'
      meta keys: ['char_end', 'char_start', 'chunk_index', 'chunking_strategy', 'doc_id', 'element_index', 'html_tag', 'section_type']
      embedding: NoneType
  [2] text[:50]: 'Countries Albania Andorra Armenia Austria Azerbaij'
      meta keys: ['char_end', 'char_start', 'chunk_index', 'chunking_strategy', 'doc_id', 'element_index', 'html_tag', 'section_type']
      embedding: NoneType

  --- 6h: JSONL Streaming ---

  ✓ 3 JSONL lines
  [0] keys: ['char_end', 'char_start', 'chunk_index', 'chunking_strategy', 'doc_id', 'element_index', 'html_tag', 'section_type']…  text[:50]: 'Out-of-pocket payments for primary health care una'
  [1] keys: ['char_end', 'char_start', 'chunk_index', 'chunking_strategy', 'doc_id', 'element_index', 'html_tag', 'section_type']…  text[:50]: 'Regions WHO Regional websites Africa Americas Sout'

```
```
# ===========================================================================
# PHASE 7: SHOW REAL URL USAGE (code-only, not executed)
# ===========================================================================

banner("PHASE 7: PRODUCTION USAGE — All 5 Real Sources")

PRODUCTION_CODE = '''
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PRODUCTION: Process all 5 real sources via CorpusBuilder
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

from scikitplot.corpus import CorpusBuilder, BuilderConfig

builder = CorpusBuilder(BuilderConfig(
    chunker="paragraph",
    normalize=True,
    normalizer_steps=["unicode", "whitespace"],
    enrich=True,
    enricher_kwargs={"keyword_extractor": "frequency", "max_keywords": 15},
    embed=True,                    # requires: pip install sentence-transformers
    embedding_model="all-MiniLM-L6-v2",
    build_index=True,
    collection_id="who-greece-financial-protection",
    source_author="WHO Regional Office for Europe",
))

# ① Web Article (HTML)
result = builder.build([
    "https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-"
    "payments-for-primary-health-care-unaffordable-for-millions-in-"
    "europe-new-who-report-shows",
])

# ② YouTube Video
result = builder.build([
    # "https://youtu.be/rwPISgZcYIk",  # https://www.youtube.com/watch?v=rwPISgZcYIk
    "https://youtu.be/rwPISgZcYIk?si=TddW-0bwBRF_4_qU",
])

# ③ PDF (download first, then process locally)
import urllib.request
urllib.request.urlretrieve(
    "https://iris.who.int/server/api/core/bitstreams/"
    "7ad66865-7f23-4485-8cf5-7b3d78bdf4f9/content",
    "who_greece_report.pdf",
)
result = builder.build(["who_greece_report.pdf"])

# ④ Image scan (local file or downloaded URL)
result = builder.build(["WHO-EURO-2025-12555-52329-80560-eng_pdf.jpg"])

# ⑤ Audio podcast (local MP3)
result = builder.build(["can-people-afford-to-pay-for-health-care.mp3"])

# ━━━ Or process ALL at once: ━━━
result = builder.build([
    "https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-...",
    "https://youtu.be/rwPISgZcYIk",  # https://www.youtube.com/watch?v=rwPISgZcYIk
    "who_greece_report.pdf",
    "scan.jpg",
    "podcast.mp3",
])

# ━━━ Search ━━━
results = builder.search("catastrophic health spending", match_mode="hybrid")
for r in results:
    print(f"  score={r.score:.4f}  {r.doc.text[:80]}")

# ━━━ Export to ANY consumer ━━━
lc_docs = builder.to_langchain()           # LangChain
state   = builder.to_langgraph_state()     # LangGraph
mcp     = builder.to_mcp_tool_result("...")  # MCP server
hf      = builder.to_huggingface()         # HuggingFace
rag     = builder.to_rag_tuples()          # Vector store
retriever = builder.to_langchain_retriever()  # LangChain retriever
server  = builder.to_mcp_server()          # Full MCP server
builder.export("corpus.parquet")           # File export
'''

print(textwrap.dedent(PRODUCTION_CODE))

```
```
========================================================================
  PHASE 7: PRODUCTION USAGE — All 5 Real Sources
========================================================================


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# PRODUCTION: Process all 5 real sources via CorpusBuilder
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

from scikitplot.corpus import CorpusBuilder, BuilderConfig

builder = CorpusBuilder(BuilderConfig(
    chunker="paragraph",
    normalize=True,
    normalizer_steps=["unicode", "whitespace"],
    enrich=True,
    enricher_kwargs={"keyword_extractor": "frequency", "max_keywords": 15},
    embed=True,                    # requires: pip install sentence-transformers
    embedding_model="all-MiniLM-L6-v2",
    build_index=True,
    collection_id="who-greece-financial-protection",
    source_author="WHO Regional Office for Europe",
))

# ① Web Article (HTML)
result = builder.build([
    "https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-"
    "payments-for-primary-health-care-unaffordable-for-millions-in-"
    "europe-new-who-report-shows",
])

# ② YouTube Video
result = builder.build([
    # "https://youtu.be/rwPISgZcYIk",  # https://www.youtube.com/watch?v=rwPISgZcYIk
    "https://youtu.be/rwPISgZcYIk?si=TddW-0bwBRF_4_qU",
])

# ③ PDF (download first, then process locally)
import urllib.request
urllib.request.urlretrieve(
    "https://iris.who.int/server/api/core/bitstreams/"
    "7ad66865-7f23-4485-8cf5-7b3d78bdf4f9/content",
    "who_greece_report.pdf",
)
result = builder.build(["who_greece_report.pdf"])

# ④ Image scan (local file or downloaded URL)
result = builder.build(["WHO-EURO-2025-12555-52329-80560-eng_pdf.jpg"])

# ⑤ Audio podcast (local MP3)
result = builder.build(["can-people-afford-to-pay-for-health-care.mp3"])

# ━━━ Or process ALL at once: ━━━
result = builder.build([
    "https://www.who.int/europe/news/item/12-12-2023-out-of-pocket-...",
    "https://youtu.be/rwPISgZcYIk",  # https://www.youtube.com/watch?v=rwPISgZcYIk
    "who_greece_report.pdf",
    "scan.jpg",
    "podcast.mp3",
])

# ━━━ Search ━━━
results = builder.search("catastrophic health spending", match_mode="hybrid")
for r in results:
    print(f"  score={r.score:.4f}  {r.doc.text[:80]}")

# ━━━ Export to ANY consumer ━━━
lc_docs = builder.to_langchain()           # LangChain
state   = builder.to_langgraph_state()     # LangGraph
mcp     = builder.to_mcp_tool_result("...")  # MCP server
hf      = builder.to_huggingface()         # HuggingFace
rag     = builder.to_rag_tuples()          # Vector store
retriever = builder.to_langchain_retriever()  # LangChain retriever
server  = builder.to_mcp_server()          # Full MCP server
builder.export("corpus.parquet")           # File export

```
```
# ===========================================================================
# SUMMARY
# ===========================================================================

banner("SUMMARY")

print(f"  Sources processed:  {len(source_log)}")
print(f"  Total documents:    {len(all_documents)}")
print(f"  Normalised:         {n_normalised}")
print(f"  Enriched (tokens):  {n_enriched}")
print(f"  Index documents:    {index.n_documents}")
print(f"  Dense embeddings:   {index.has_embeddings}")
print()
print("  Adapter outputs demonstrated:")
print("    ✓ LangChain Documents      → to_langchain_documents()")
print("    ✓ LangGraph State          → to_langgraph_state()")
print("    ✓ MCP Resources            → to_mcp_resources()")
print("    ✓ MCP Tool Result          → to_mcp_tool_result()")
print("    ✓ MCP Server Adapter       → MCPCorpusServer()")
print("    ✓ HuggingFace Dataset      → to_huggingface_dataset()")
print("    ✓ RAG Vector Store Tuples  → to_rag_tuples()")
print("    ✓ JSONL Streaming          → to_jsonl()")
print()
print("  Source types supported:")
for st in SourceType:
    print(f"    • {st.value}")
print()
print("  Pipeline complete. All 5 source types → unified corpus → any consumer.")

```
```
========================================================================
  SUMMARY
========================================================================

  Sources processed:  5
  Total documents:    97
  Normalised:         97
  Enriched (tokens):  97
  Index documents:    97
  Dense embeddings:   False

  Adapter outputs demonstrated:
    ✓ LangChain Documents      → to_langchain_documents()
    ✓ LangGraph State          → to_langgraph_state()
    ✓ MCP Resources            → to_mcp_resources()
    ✓ MCP Tool Result          → to_mcp_tool_result()
    ✓ MCP Server Adapter       → MCPCorpusServer()
    ✓ HuggingFace Dataset      → to_huggingface_dataset()
    ✓ RAG Vector Store Tuples  → to_rag_tuples()
    ✓ JSONL Streaming          → to_jsonl()

  Source types supported:
    • book
    • article
    • research
    • biography
    • play
    • poem
    • news
    • blog
    • newsletter
    • press_release
    • audio
    • podcast
    • lecture
    • interview
    • video
    • movie
    • subtitle
    • web
    • wiki
    • social_media
    • forum
    • faq
    • documentation
    • tutorial
    • manual
    • report
    • legal
    • medical
    • patent
    • spreadsheet
    • dataset
    • code
    • email
    • chat
    • image
    • unknown

  Pipeline complete. All 5 source types → unified corpus → any consumer.

```

Tags: [model-type: classification](../../_tags/model-type-classification.html) [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 9.778 seconds)

[![Launch binder](../../_images/binder_badge_logo4.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_who_per_file_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo4.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_who_per_file_script.ipynb)

[`Download Jupyter notebook: plot_corpus_who_per_file_script.ipynb`](../../_downloads/9466f181166917995d30d548ac0003b5/plot_corpus_who_per_file_script.ipynb)

[`Download Python source code: plot_corpus_who_per_file_script.py`](../../_downloads/3bed8f76d7875cdf6ef28603f2ec6b20/plot_corpus_who_per_file_script.py)

[`Download zipped: plot_corpus_who_per_file_script.zip`](../../_downloads/5b62bdbe8ebbfd43113841a32e4898d0/plot_corpus_who_per_file_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_who_youtube_shorts_script_thumb.png)

[corpus WHO European Region YouTube shorts with examples](plot_corpus_who_youtube_shorts_script.html)

corpus WHO European Region YouTube shorts with examples![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[corpus WHO European Region local .zip with examples](plot_corpus_who_zip_script.html)

corpus WHO European Region local .zip with examples![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](../cython/plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)