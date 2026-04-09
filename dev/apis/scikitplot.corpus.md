# scikitplot.corpus[#](#module-scikitplot.corpus "Link to this heading")

## scikitplot.corpus[#](#id1 "Link to this heading")

A production-grade document corpus ingestion, chunking, filtering,
embedding, and export pipeline for NLP and ML workflows.

This package is a ground-up rewrite of the `remarx.sentence.corpus`
module, preserving all proven design patterns while resolving every known
correctness, robustness, and maintainability issue identified during the
migration audit.

The Universal/Standard NLP/ML Workflow:
`Sourcing → Reading → Chunking → Filtering → Normalizing → Embedding → Exporting`.

> **See also**
> * <https://github.com/Princeton-CDH/remarx>
* <https://princeton-cdh.github.io/remarx/api/>

Examples

Single file, no embedding:

```
>>> from pathlib import Path
>>> from scikitplot.corpus import CorpusPipeline, ParagraphChunker
>>> pipeline = CorpusPipeline(chunker=ParagraphChunker())
>>> result = pipeline.run(Path("article.txt"))
>>> print(f"{result.n_documents} chunks from {result.source}")

```

Batch processing with sentence chunking:

```
>>> from scikitplot.corpus import CorpusPipeline, SentenceChunker, ExportFormat
>>> pipeline = CorpusPipeline(
...     # chunker=SentenceChunker(SentenceChunkerConfig(backend=SentenceBackend.NLTK)),
...     chunker=SentenceChunker("en_core_web_sm"),  # default backend spacy
...     output_dir=Path("output/"),
...     export_format=ExportFormat.PARQUET,
... )
>>> results = pipeline.run_batch(list(Path("corpus/").glob("*.txt")))

```

URL ingestion:

```
>>> # https://archive.org/download/WHO-documents
>>> # https://www.who.int/europe/news/item/...
>>> result = pipeline.run_url("https://en.wikipedia.org/wiki/Python")

```

YouTube transcript:

```
>>> result = pipeline.run("https://www.youtube.com/watch?v=rwPISgZcYIk")

```

Image OCR:

```
>>> reader = DocumentReader.create(Path("scan.png"))
>>> docs = list(reader.get_documents())

```

Video transcription (subtitle-first):

```
>>> # Richard Feynman - The Character of Physical Law (1964) - Complete - Better Audio
>>> # https://www.youtube.com/watch?v=kEx-gRfuhhk
>>> reader = DocumentReader.create(Path("lecture.mp4"))
>>> docs = list(reader.get_documents())

```

With embeddings:

```
>>> from scikitplot.corpus import EmbeddingEngine
>>> engine = EmbeddingEngine(backend="sentence_transformers")
>>> pipeline = CorpusPipeline(
...     chunker=ParagraphChunker(),
...     embedding_engine=engine,
... )
>>> result = pipeline.run(Path("article.txt"))
>>> result.documents[0].has_embedding
True

```

Convenience function (direct replacement for remarx `create_corpus`):

```
>>> from scikitplot.corpus import create_corpus
>>> result = create_corpus(
...     input_file=Path("chapter01.txt"),
...     output_path=Path("output/chapter01.csv"),
... )

```
```
>>> from scikitplot.corpus import CorpusBuilder, BuilderConfig
>>> builder = CorpusBuilder(
...     BuilderConfig(
...         chunker="paragraph",
...         normalize=True,
...         enrich=True,
...         embed=True,
...         build_index=True,
...     )
... )
>>> result = builder.build("./data/")
>>> results = builder.search("quantum computing")
>>> lc_docs = builder.to_langchain()
>>> mcp_response = builder.to_mcp_tool_result("quantum computing")

```

****User guide.**** See the [Corpus Generation](../user_guide/corpus/index.html#corpus-index) section for further details.

## Base[#](#base "Link to this heading")

|  |  |
| --- | --- |
| [`ChunkerBase`](../modules/generated/scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus.ChunkerBase") | Abstract base class for all text chunkers. |
| [`DefaultFilter`](../modules/generated/scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter") | Standard noise filter ported and improved from remarx's `include_sentence`. |
| [`DocumentReader`](../modules/generated/scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus.DocumentReader") | Abstract base class for all format-specific document readers. |
| [`DummyReader`](../modules/generated/scikitplot.corpus.DummyReader.html#scikitplot.corpus.DummyReader "scikitplot.corpus.DummyReader") | A no-op reader that validates source existence and accessibility. |
| [`FilterBase`](../modules/generated/scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus.FilterBase") | Abstract base class for corpus document filters. |
| [`PipelineGuard`](../modules/generated/scikitplot.corpus.PipelineGuard.html#scikitplot.corpus.PipelineGuard "scikitplot.corpus.PipelineGuard") | Wrap any document stream with resilience, deduplication, and checkpointing. |
| [`_MultiSourceReader`](../modules/generated/scikitplot.corpus._MultiSourceReader.html#scikitplot.corpus._MultiSourceReader "scikitplot.corpus._MultiSourceReader") | Chains multiple [`DocumentReader`](../modules/generated/scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus.DocumentReader") instances into one stream. |
| [`_is_url`](../modules/generated/scikitplot.corpus._is_url.html#scikitplot.corpus._is_url "scikitplot.corpus._is_url") | Return `True` if **s** is a string that looks like an HTTP(S) URL. |

## Chunkers[#](#chunkers "Link to this heading")

|  |  |
| --- | --- |
| [`ChunkerBridge`](../modules/generated/scikitplot.corpus.ChunkerBridge.html#scikitplot.corpus.ChunkerBridge "scikitplot.corpus.ChunkerBridge") | Adapter that wraps a new-style chunker as a `ChunkerBase`- compatible object. |
| [`FixedWindowChunkerBridge`](../modules/generated/scikitplot.corpus.FixedWindowChunkerBridge.html#scikitplot.corpus.FixedWindowChunkerBridge "scikitplot.corpus.FixedWindowChunkerBridge") | Bridge for `FixedWindowChunker` → `ChunkerBase` contract. |
| [`ParagraphChunkerBridge`](../modules/generated/scikitplot.corpus.ParagraphChunkerBridge.html#scikitplot.corpus.ParagraphChunkerBridge "scikitplot.corpus.ParagraphChunkerBridge") | Bridge for `ParagraphChunker` → `ChunkerBase` contract. |
| [`SentenceChunkerBridge`](../modules/generated/scikitplot.corpus.SentenceChunkerBridge.html#scikitplot.corpus.SentenceChunkerBridge "scikitplot.corpus.SentenceChunkerBridge") | Bridge for `SentenceChunker` → `ChunkerBase` contract. |
| [`WordChunkerBridge`](../modules/generated/scikitplot.corpus.WordChunkerBridge.html#scikitplot.corpus.WordChunkerBridge "scikitplot.corpus.WordChunkerBridge") | Bridge for `WordChunker` → `ChunkerBase` contract. |
| [`bridge_chunker`](../modules/generated/scikitplot.corpus.bridge_chunker.html#scikitplot.corpus.bridge_chunker "scikitplot.corpus.bridge_chunker") | Wrap **chunker** in a bridge if it is a new-style chunker. |
| [`FixedWindowChunker`](../modules/generated/scikitplot.corpus.FixedWindowChunker.html#scikitplot.corpus.FixedWindowChunker "scikitplot.corpus.FixedWindowChunker") | Produce fixed-size sliding-window chunks over a document. |
| [`FixedWindowChunkerConfig`](../modules/generated/scikitplot.corpus.FixedWindowChunkerConfig.html#scikitplot.corpus.FixedWindowChunkerConfig "scikitplot.corpus.FixedWindowChunkerConfig") | Configuration for [`FixedWindowChunker`](../modules/generated/scikitplot.corpus.FixedWindowChunker.html#scikitplot.corpus.FixedWindowChunker "scikitplot.corpus.FixedWindowChunker"). |
| [`WindowUnit`](../modules/generated/scikitplot.corpus.WindowUnit.html#scikitplot.corpus.WindowUnit "scikitplot.corpus.WindowUnit") | Unit of measurement for window size and step. |
| [`ParagraphChunker`](../modules/generated/scikitplot.corpus.ParagraphChunker.html#scikitplot.corpus.ParagraphChunker "scikitplot.corpus.ParagraphChunker") | Split a document into paragraph-level `Chunk` objects. |
| [`ParagraphChunkerConfig`](../modules/generated/scikitplot.corpus.ParagraphChunkerConfig.html#scikitplot.corpus.ParagraphChunkerConfig "scikitplot.corpus.ParagraphChunkerConfig") | Configuration for [`ParagraphChunker`](../modules/generated/scikitplot.corpus.ParagraphChunker.html#scikitplot.corpus.ParagraphChunker "scikitplot.corpus.ParagraphChunker"). |
| [`SentenceBackend`](../modules/generated/scikitplot.corpus.SentenceBackend.html#scikitplot.corpus.SentenceBackend "scikitplot.corpus.SentenceBackend") | Supported sentence-splitting backends. |
| [`SentenceChunker`](../modules/generated/scikitplot.corpus.SentenceChunker.html#scikitplot.corpus.SentenceChunker "scikitplot.corpus.SentenceChunker") | Split a document into sentence-level `Chunk` objects. |
| [`SentenceChunkerConfig`](../modules/generated/scikitplot.corpus.SentenceChunkerConfig.html#scikitplot.corpus.SentenceChunkerConfig "scikitplot.corpus.SentenceChunkerConfig") | Configuration for [`SentenceChunker`](../modules/generated/scikitplot.corpus.SentenceChunker.html#scikitplot.corpus.SentenceChunker "scikitplot.corpus.SentenceChunker"). |
| [`LemmatizationBackend`](../modules/generated/scikitplot.corpus.LemmatizationBackend.html#scikitplot.corpus.LemmatizationBackend "scikitplot.corpus.LemmatizationBackend") | Lemmatization backend. |
| [`StemmingBackend`](../modules/generated/scikitplot.corpus.StemmingBackend.html#scikitplot.corpus.StemmingBackend "scikitplot.corpus.StemmingBackend") | Stemming algorithm. |
| [`StopwordSource`](../modules/generated/scikitplot.corpus.StopwordSource.html#scikitplot.corpus.StopwordSource "scikitplot.corpus.StopwordSource") | Stopword list source. |
| [`TokenizerBackend`](../modules/generated/scikitplot.corpus.TokenizerBackend.html#scikitplot.corpus.TokenizerBackend "scikitplot.corpus.TokenizerBackend") | Word tokenisation backend. |
| [`WordChunker`](../modules/generated/scikitplot.corpus.WordChunker.html#scikitplot.corpus.WordChunker "scikitplot.corpus.WordChunker") | Process a document at word level, producing normalised token chunks. |
| [`WordChunkerConfig`](../modules/generated/scikitplot.corpus.WordChunkerConfig.html#scikitplot.corpus.WordChunkerConfig "scikitplot.corpus.WordChunkerConfig") | Configuration for [`WordChunker`](../modules/generated/scikitplot.corpus.WordChunker.html#scikitplot.corpus.WordChunker "scikitplot.corpus.WordChunker"). |

## Corpus Builder[#](#corpus-builder "Link to this heading")

|  |  |
| --- | --- |
| [`BuildResult`](../modules/generated/scikitplot.corpus.BuildResult.html#scikitplot.corpus.BuildResult "scikitplot.corpus.BuildResult") | Result of a corpus build operation. |
| [`BuilderConfig`](../modules/generated/scikitplot.corpus.BuilderConfig.html#scikitplot.corpus.BuilderConfig "scikitplot.corpus.BuilderConfig") | Configuration for [`CorpusBuilder`](../modules/generated/scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder"). |
| [`CorpusBuilder`](../modules/generated/scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder") | Unified corpus builder — end-to-end pipeline orchestrator. |

## Custom Hooks[#](#custom-hooks "Link to this heading")

|  |  |
| --- | --- |
| [`BuilderFactories`](../modules/generated/scikitplot.corpus.BuilderFactories.html#scikitplot.corpus.BuilderFactories "scikitplot.corpus.BuilderFactories") | Component factory callables for [`FactoryCorpusBuilder`](../modules/generated/scikitplot.corpus.FactoryCorpusBuilder.html#scikitplot.corpus.FactoryCorpusBuilder "scikitplot.corpus.FactoryCorpusBuilder"). |
| [`CustomChunker`](../modules/generated/scikitplot.corpus.CustomChunker.html#scikitplot.corpus.CustomChunker "scikitplot.corpus.CustomChunker") | Wrap any callable as a [`ChunkerBase`](../modules/generated/scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase"). |
| [`CustomEnricherConfig`](../modules/generated/scikitplot.corpus.CustomEnricherConfig.html#scikitplot.corpus.CustomEnricherConfig "scikitplot.corpus.CustomEnricherConfig") | Custom backend callables for [`CustomNLPEnricher`](../modules/generated/scikitplot.corpus.CustomNLPEnricher.html#scikitplot.corpus.CustomNLPEnricher "scikitplot.corpus.CustomNLPEnricher"). |
| [`CustomFilter`](../modules/generated/scikitplot.corpus.CustomFilter.html#scikitplot.corpus.CustomFilter "scikitplot.corpus.CustomFilter") | Wrap any callable as a [`FilterBase`](../modules/generated/scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase"). |
| [`CustomNLPEnricher`](../modules/generated/scikitplot.corpus.CustomNLPEnricher.html#scikitplot.corpus.CustomNLPEnricher "scikitplot.corpus.CustomNLPEnricher") | `NLPEnricher` extended with fully-replaceable NLP backends. |
| [`CustomNormalizer`](../modules/generated/scikitplot.corpus.CustomNormalizer.html#scikitplot.corpus.CustomNormalizer "scikitplot.corpus.CustomNormalizer") | Wrap any callable as a `NormalizerBase`. |
| [`CustomSimilarityIndex`](../modules/generated/scikitplot.corpus.CustomSimilarityIndex.html#scikitplot.corpus.CustomSimilarityIndex "scikitplot.corpus.CustomSimilarityIndex") | `SimilarityIndex` extended with a fully-replaceable custom scorer callable. |
| [`FactoryCorpusBuilder`](../modules/generated/scikitplot.corpus.FactoryCorpusBuilder.html#scikitplot.corpus.FactoryCorpusBuilder "scikitplot.corpus.FactoryCorpusBuilder") | [`CorpusBuilder`](../modules/generated/scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus._corpus_builder.CorpusBuilder") extended with pluggable component factories. |
| [`HookableCorpusPipeline`](../modules/generated/scikitplot.corpus.HookableCorpusPipeline.html#scikitplot.corpus.HookableCorpusPipeline "scikitplot.corpus.HookableCorpusPipeline") | [`CorpusPipeline`](../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus._pipeline.CorpusPipeline") extended with per-stage lifecycle hooks. |
| [`PipelineHooks`](../modules/generated/scikitplot.corpus.PipelineHooks.html#scikitplot.corpus.PipelineHooks "scikitplot.corpus.PipelineHooks") | Lifecycle callbacks for [`HookableCorpusPipeline`](../modules/generated/scikitplot.corpus.HookableCorpusPipeline.html#scikitplot.corpus.HookableCorpusPipeline "scikitplot.corpus.HookableCorpusPipeline"). |

## Embeddings[#](#embeddings "Link to this heading")

|  |  |
| --- | --- |
| [`DEFAULT_CACHE_DIR`](../modules/generated/scikitplot.corpus.DEFAULT_CACHE_DIR.html#scikitplot.corpus.DEFAULT_CACHE_DIR "scikitplot.corpus.DEFAULT_CACHE_DIR") | Path subclass for non-Windows systems. |
| [`DEFAULT_MODEL`](../modules/generated/scikitplot.corpus.DEFAULT_MODEL.html#scikitplot.corpus.DEFAULT_MODEL "scikitplot.corpus.DEFAULT_MODEL") | str(object='') -> str str(bytes\_or\_buffer[, encoding[, errors]]) -> str |
| [`EmbeddingEngine`](../modules/generated/scikitplot.corpus.EmbeddingEngine.html#scikitplot.corpus.EmbeddingEngine "scikitplot.corpus.EmbeddingEngine") | Multi-backend sentence embedding engine with SHA-256 file caching. |
| [`DEFAULT_AUDIO_MODEL`](../modules/generated/scikitplot.corpus.DEFAULT_AUDIO_MODEL.html#scikitplot.corpus.DEFAULT_AUDIO_MODEL "scikitplot.corpus.DEFAULT_AUDIO_MODEL") | str(object='') -> str str(bytes\_or\_buffer[, encoding[, errors]]) -> str |
| [`DEFAULT_IMAGE_MODEL`](../modules/generated/scikitplot.corpus.DEFAULT_IMAGE_MODEL.html#scikitplot.corpus.DEFAULT_IMAGE_MODEL "scikitplot.corpus.DEFAULT_IMAGE_MODEL") | str(object='') -> str str(bytes\_or\_buffer[, encoding[, errors]]) -> str |
| [`DEFAULT_TEXT_MODEL`](../modules/generated/scikitplot.corpus.DEFAULT_TEXT_MODEL.html#scikitplot.corpus.DEFAULT_TEXT_MODEL "scikitplot.corpus.DEFAULT_TEXT_MODEL") | str(object='') -> str str(bytes\_or\_buffer[, encoding[, errors]]) -> str |
| [`LLMTrainingExporter`](../modules/generated/scikitplot.corpus.LLMTrainingExporter.html#scikitplot.corpus.LLMTrainingExporter "scikitplot.corpus.LLMTrainingExporter") | Export a corpus with embeddings to LLM training formats. |
| [`MultimodalEmbeddingEngine`](../modules/generated/scikitplot.corpus.MultimodalEmbeddingEngine.html#scikitplot.corpus.MultimodalEmbeddingEngine "scikitplot.corpus.MultimodalEmbeddingEngine") | Unified embedding engine for any `CorpusDocument` modality — text, image, audio, video, or multimodal. |

## Enricher[#](#enricher "Link to this heading")

|  |  |
| --- | --- |
| [`BUILTIN_STOPWORDS`](../modules/generated/scikitplot.corpus.BUILTIN_STOPWORDS.html#scikitplot.corpus.BUILTIN_STOPWORDS "scikitplot.corpus.BUILTIN_STOPWORDS") | frozenset() -> empty frozenset object frozenset(iterable) -> frozenset object |
| [`EnricherConfig`](../modules/generated/scikitplot.corpus.EnricherConfig.html#scikitplot.corpus.EnricherConfig "scikitplot.corpus.EnricherConfig") | Configuration for [`NLPEnricher`](../modules/generated/scikitplot.corpus.NLPEnricher.html#scikitplot.corpus.NLPEnricher "scikitplot.corpus.NLPEnricher"). |
| [`NLPEnricher`](../modules/generated/scikitplot.corpus.NLPEnricher.html#scikitplot.corpus.NLPEnricher "scikitplot.corpus.NLPEnricher") | Pipeline component that populates NLP enrichment fields on `CorpusDocument`. |

## Export[#](#export "Link to this heading")

|  |  |
| --- | --- |
| [`export_documents`](../modules/generated/scikitplot.corpus.export_documents.html#scikitplot.corpus.export_documents "scikitplot.corpus.export_documents") | Export a list of documents to `output_path` in the given format. |
| [`load_documents`](../modules/generated/scikitplot.corpus.load_documents.html#scikitplot.corpus.load_documents "scikitplot.corpus.load_documents") | Load `CorpusDocument` instances from a previously exported file. |

## Normalizers[#](#normalizers "Link to this heading")

|  |  |
| --- | --- |
| [`DedupLinesNormalizer`](../modules/generated/scikitplot.corpus.DedupLinesNormalizer.html#scikitplot.corpus.DedupLinesNormalizer "scikitplot.corpus.DedupLinesNormalizer") | Remove exact duplicate lines while preserving first-occurrence order. |
| [`HTMLStripNormalizer`](../modules/generated/scikitplot.corpus.HTMLStripNormalizer.html#scikitplot.corpus.HTMLStripNormalizer "scikitplot.corpus.HTMLStripNormalizer") | Remove HTML and XML tags from the document text. |
| [`LanguageDetectionNormalizer`](../modules/generated/scikitplot.corpus.LanguageDetectionNormalizer.html#scikitplot.corpus.LanguageDetectionNormalizer "scikitplot.corpus.LanguageDetectionNormalizer") | Detect document language and set `CorpusDocument.language`. |
| [`LowercaseNormalizer`](../modules/generated/scikitplot.corpus.LowercaseNormalizer.html#scikitplot.corpus.LowercaseNormalizer "scikitplot.corpus.LowercaseNormalizer") | Convert the document text to lowercase. |
| [`NormalizationPipeline`](../modules/generated/scikitplot.corpus.NormalizationPipeline.html#scikitplot.corpus.NormalizationPipeline "scikitplot.corpus.NormalizationPipeline") | Apply a sequence of normalisers in order. |
| [`NormalizerBase`](../modules/generated/scikitplot.corpus.NormalizerBase.html#scikitplot.corpus.NormalizerBase "scikitplot.corpus.NormalizerBase") | Abstract base class for all text normalisers. |
| [`UnicodeNormalizer`](../modules/generated/scikitplot.corpus.UnicodeNormalizer.html#scikitplot.corpus.UnicodeNormalizer "scikitplot.corpus.UnicodeNormalizer") | Apply Unicode normalisation (NFC, NFD, NFKC, or NFKD). |
| [`WhitespaceNormalizer`](../modules/generated/scikitplot.corpus.WhitespaceNormalizer.html#scikitplot.corpus.WhitespaceNormalizer "scikitplot.corpus.WhitespaceNormalizer") | Collapse runs of whitespace and optionally strip leading/trailing space. |
| [`NormalizerConfig`](../modules/generated/scikitplot.corpus.NormalizerConfig.html#scikitplot.corpus.NormalizerConfig "scikitplot.corpus.NormalizerConfig") | Configuration for [`TextNormalizer`](../modules/generated/scikitplot.corpus.TextNormalizer.html#scikitplot.corpus.TextNormalizer "scikitplot.corpus.TextNormalizer"). |
| [`TextNormalizer`](../modules/generated/scikitplot.corpus.TextNormalizer.html#scikitplot.corpus.TextNormalizer "scikitplot.corpus.TextNormalizer") | Pipeline component that populates `normalized_text` on `CorpusDocument` instances. |
| [`normalize_text`](../modules/generated/scikitplot.corpus.normalize_text.html#scikitplot.corpus.normalize_text "scikitplot.corpus.normalize_text") | Normalise **text** according to **config**. |

## Pipeline[#](#pipeline "Link to this heading")

|  |  |
| --- | --- |
| [`CorpusPipeline`](../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline") | Orchestrates the full corpus ingestion pipeline. |
| [`PipelineResult`](../modules/generated/scikitplot.corpus.PipelineResult.html#scikitplot.corpus.PipelineResult "scikitplot.corpus.PipelineResult") | Immutable summary of a single pipeline run. |
| [`create_corpus`](../modules/generated/scikitplot.corpus.create_corpus.html#scikitplot.corpus.create_corpus "scikitplot.corpus.create_corpus") | Create and export a corpus from a single source file. |

## Readers[#](#readers "Link to this heading")

|  |  |
| --- | --- |
| [`ALTOReader`](../modules/generated/scikitplot.corpus.ALTOReader.html#scikitplot.corpus.ALTOReader "scikitplot.corpus.ALTOReader") | ALTO XML reader for scanned document archives. |
| [`AudioReader`](../modules/generated/scikitplot.corpus.AudioReader.html#scikitplot.corpus.AudioReader "scikitplot.corpus.AudioReader") | Text extraction from audio files via companion transcript/lyrics parsing, Whisper ASR, and optional audio classification. |
| [`CustomReader`](../modules/generated/scikitplot.corpus.CustomReader.html#scikitplot.corpus.CustomReader "scikitplot.corpus.CustomReader") | Fully user-customizable reader for any file extension and resource type. |
| [`ImageReader`](../modules/generated/scikitplot.corpus.ImageReader.html#scikitplot.corpus.ImageReader "scikitplot.corpus.ImageReader") | OCR-based text extraction from raster image files. |
| [`MarkdownReader`](../modules/generated/scikitplot.corpus.MarkdownReader.html#scikitplot.corpus.MarkdownReader "scikitplot.corpus.MarkdownReader") | Markdown document reader. |
| [`PDFReader`](../modules/generated/scikitplot.corpus.PDFReader.html#scikitplot.corpus.PDFReader "scikitplot.corpus.PDFReader") | PDF document reader with pdfminer.six → pypdf cascade. |
| [`ReSTReader`](../modules/generated/scikitplot.corpus.ReSTReader.html#scikitplot.corpus.ReSTReader "scikitplot.corpus.ReSTReader") | reStructuredText document reader. |
| [`TEIReader`](../modules/generated/scikitplot.corpus.TEIReader.html#scikitplot.corpus.TEIReader "scikitplot.corpus.TEIReader") | TEI/XML document reader with dramatic structure extraction. |
| [`TextReader`](../modules/generated/scikitplot.corpus.TextReader.html#scikitplot.corpus.TextReader "scikitplot.corpus.TextReader") | Plain-text document reader. |
| [`VideoReader`](../modules/generated/scikitplot.corpus.VideoReader.html#scikitplot.corpus.VideoReader "scikitplot.corpus.VideoReader") | Text extraction from video files via subtitle parsing and/or automatic speech recognition. |
| [`WebReader`](../modules/generated/scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader") | Fetch a web page and extract structured text via BeautifulSoup. |
| [`XMLReader`](../modules/generated/scikitplot.corpus.XMLReader.html#scikitplot.corpus.XMLReader "scikitplot.corpus.XMLReader") | Generic XML document reader with configurable XPath. |
| [`YouTubeReader`](../modules/generated/scikitplot.corpus.YouTubeReader.html#scikitplot.corpus.YouTubeReader "scikitplot.corpus.YouTubeReader") | Extract the transcript of a YouTube video using `youtube-transcript-api`. |
| [`ZipReader`](../modules/generated/scikitplot.corpus.ZipReader.html#scikitplot.corpus.ZipReader "scikitplot.corpus.ZipReader") | Generic ZIP archive reader — dispatches each member to its natural reader. |

## Similarity[#](#similarity "Link to this heading")

|  |  |
| --- | --- |
| [`SearchConfig`](../modules/generated/scikitplot.corpus.SearchConfig.html#scikitplot.corpus.SearchConfig "scikitplot.corpus.SearchConfig") | Configuration for similarity search. |
| [`SearchResult`](../modules/generated/scikitplot.corpus.SearchResult.html#scikitplot.corpus.SearchResult "scikitplot.corpus.SearchResult") | A single search result. |
| [`SimilarityIndex`](../modules/generated/scikitplot.corpus.SimilarityIndex.html#scikitplot.corpus.SimilarityIndex "scikitplot.corpus.SimilarityIndex") | Multi-mode similarity index over `CorpusDocument` collections. |

## Source[#](#source "Link to this heading")

|  |  |
| --- | --- |
| [`CorpusSource`](../modules/generated/scikitplot.corpus.CorpusSource.html#scikitplot.corpus.CorpusSource "scikitplot.corpus.CorpusSource") | Declarative descriptor for one or more document sources. |
| [`SourceEntry`](../modules/generated/scikitplot.corpus.SourceEntry.html#scikitplot.corpus.SourceEntry "scikitplot.corpus.SourceEntry") | A single resolved source entry yielded by [`CorpusSource.iter_entries`](../modules/generated/scikitplot.corpus.CorpusSource.html#scikitplot.corpus.CorpusSource.iter_entries "scikitplot.corpus.CorpusSource.iter_entries"). |
| [`SourceKind`](../modules/generated/scikitplot.corpus.SourceKind.html#scikitplot.corpus.SourceKind "scikitplot.corpus.SourceKind") | Discriminant for the kind of source an entry represents. |