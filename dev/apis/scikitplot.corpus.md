# scikitplot.corpus[#](#module-scikitplot.corpus "Link to this heading")

## scikitplot.corpus[#](#id1 "Link to this heading")

A production-grade document corpus ingestion, chunking, filtering,
embedding, and export pipeline for NLP and ML workflows.

This package is a ground-up rewrite of the `remarx.sentence.corpus`
module, preserving all proven design patterns while resolving every known
correctness, robustness, and maintainability issue identified during the
migration audit.

Standardized NLP/ML Workflow:
`Sourcing → Reading → Chunking → Filtering → Normalizing → Embedding → Exporting`.

> **See also**
> * [Princeton-CDH/remarx](https://github.com/Princeton-CDH/remarx)
* <https://princeton-cdh.github.io/remarx/api/>

Examples

Try it in your browser!

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
...     output_path=Path("output/"),
...     format=ExportFormat.PARQUET,
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
...     input_path=Path("chapter01.txt"),
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
Go BackOpen In Tab

****User guide.**** See the [Corpus User Guide](../user_guide/corpus/index.html#corpus-index) section for further details.

## Adapter layer[#](#adapter-layer "Link to this heading")

|  |  |
| --- | --- |
| [`to_langchain_documents`](../modules/generated/scikitplot.corpus.to_langchain_documents.html#scikitplot.corpus.to_langchain_documents "scikitplot.corpus.to_langchain_documents") | Convert `CorpusDocument` instances to LangChain `Document`. |
| [`to_langgraph_state`](../modules/generated/scikitplot.corpus.to_langgraph_state.html#scikitplot.corpus.to_langgraph_state "scikitplot.corpus.to_langgraph_state") | Convert documents to a LangGraph-compatible state dict. |
| [`to_mcp_resources`](../modules/generated/scikitplot.corpus.to_mcp_resources.html#scikitplot.corpus.to_mcp_resources "scikitplot.corpus.to_mcp_resources") | Convert documents to MCP `resources/read` response format. |
| [`to_mcp_tool_result`](../modules/generated/scikitplot.corpus.to_mcp_tool_result.html#scikitplot.corpus.to_mcp_tool_result "scikitplot.corpus.to_mcp_tool_result") | Format documents as an MCP `tools/call` response. |
| [`to_huggingface_dataset`](../modules/generated/scikitplot.corpus.to_huggingface_dataset.html#scikitplot.corpus.to_huggingface_dataset "scikitplot.corpus.to_huggingface_dataset") | Convert documents to a HuggingFace `Dataset`. |
| [`to_rag_tuples`](../modules/generated/scikitplot.corpus.to_rag_tuples.html#scikitplot.corpus.to_rag_tuples "scikitplot.corpus.to_rag_tuples") | Convert documents to `(text, metadata, embedding)` tuples. |
| [`to_jsonl`](../modules/generated/scikitplot.corpus.to_jsonl.html#scikitplot.corpus.to_jsonl "scikitplot.corpus.to_jsonl") | Yield documents as newline-delimited JSON strings. |
| [`to_numpy_arrays`](../modules/generated/scikitplot.corpus.to_numpy_arrays.html#scikitplot.corpus.to_numpy_arrays "scikitplot.corpus.to_numpy_arrays") | Convert documents to a dict of NumPy arrays suitable for batch ML. |
| [`to_tensorflow_dataset`](../modules/generated/scikitplot.corpus.to_tensorflow_dataset.html#scikitplot.corpus.to_tensorflow_dataset "scikitplot.corpus.to_tensorflow_dataset") | Convert documents to a `tf.data.Dataset`. |
| [`to_torch_dataloader`](../modules/generated/scikitplot.corpus.to_torch_dataloader.html#scikitplot.corpus.to_torch_dataloader "scikitplot.corpus.to_torch_dataloader") | Convert documents to a `torch.utils.data.DataLoader`. |
| [`LangChainCorpusRetriever`](../modules/generated/scikitplot.corpus.LangChainCorpusRetriever.html#scikitplot.corpus.LangChainCorpusRetriever "scikitplot.corpus.LangChainCorpusRetriever") | LangChain-compatible retriever backed by `SimilarityIndex`. |
| [`MCPCorpusServer`](../modules/generated/scikitplot.corpus.MCPCorpusServer.html#scikitplot.corpus.MCPCorpusServer "scikitplot.corpus.MCPCorpusServer") | MCP server adapter for corpus search. |

## Archive-within-archive[#](#archive-within-archive "Link to this heading")

|  |  |
| --- | --- |
| [`extract_archive`](../modules/generated/scikitplot.corpus.extract_archive.html#scikitplot.corpus.extract_archive "scikitplot.corpus.extract_archive") | Extract an archive to a destination directory. |
| [`is_archive`](../modules/generated/scikitplot.corpus.is_archive.html#scikitplot.corpus.is_archive "scikitplot.corpus.is_archive") | Check if a file path has a supported archive extension. |

## Base Classes[#](#base-classes "Link to this heading")

|  |  |
| --- | --- |
| [`ChunkerBase`](../modules/generated/scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus.ChunkerBase") | Abstract base class for all text chunkers. |
| [`DefaultFilter`](../modules/generated/scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter") | Standard noise filter ported and improved from remarx's `include_sentence`. |
| [`DocumentReader`](../modules/generated/scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus.DocumentReader") | Abstract base class for all format-specific document readers. |
| [`DummyReader`](../modules/generated/scikitplot.corpus.DummyReader.html#scikitplot.corpus.DummyReader "scikitplot.corpus.DummyReader") | A no-op reader that validates source existence and accessibility. |
| [`FilterBase`](../modules/generated/scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus.FilterBase") | Abstract base class for corpus document filters. |
| [`PipelineGuard`](../modules/generated/scikitplot.corpus.PipelineGuard.html#scikitplot.corpus.PipelineGuard "scikitplot.corpus.PipelineGuard") | Wrap any document stream with resilience, deduplication, and checkpointing. |

## Chunkers[#](#chunkers "Link to this heading")

|  |  |
| --- | --- |
| [`ChunkerBridge`](../modules/generated/scikitplot.corpus.ChunkerBridge.html#scikitplot.corpus.ChunkerBridge "scikitplot.corpus.ChunkerBridge") | Adapter that wraps a new-style chunker as a `ChunkerBase`- compatible object. |
| [`FixedWindowChunkerBridge`](../modules/generated/scikitplot.corpus.FixedWindowChunkerBridge.html#scikitplot.corpus.FixedWindowChunkerBridge "scikitplot.corpus.FixedWindowChunkerBridge") | Bridge for `FixedWindowChunker` → `ChunkerBase` contract. |
| [`ParagraphChunkerBridge`](../modules/generated/scikitplot.corpus.ParagraphChunkerBridge.html#scikitplot.corpus.ParagraphChunkerBridge "scikitplot.corpus.ParagraphChunkerBridge") | Bridge for `ParagraphChunker` → `ChunkerBase` contract. |
| [`SentenceChunkerBridge`](../modules/generated/scikitplot.corpus.SentenceChunkerBridge.html#scikitplot.corpus.SentenceChunkerBridge "scikitplot.corpus.SentenceChunkerBridge") | Bridge for `SentenceChunker` → `ChunkerBase` contract. |
| [`WordChunkerBridge`](../modules/generated/scikitplot.corpus.WordChunkerBridge.html#scikitplot.corpus.WordChunkerBridge "scikitplot.corpus.WordChunkerBridge") | Bridge for `WordChunker` → `ChunkerBase` contract. |
| [`bridge_chunker`](../modules/generated/scikitplot.corpus.bridge_chunker.html#scikitplot.corpus.bridge_chunker "scikitplot.corpus.bridge_chunker") | Wrap **chunker** in a bridge if it is a new-style chunker. |
| [`register_bridge`](../modules/generated/scikitplot.corpus.register_bridge.html#scikitplot.corpus.register_bridge "scikitplot.corpus.register_bridge") | Register a custom bridge for a user-defined chunker class. |
| [`unregister_bridge`](../modules/generated/scikitplot.corpus.unregister_bridge.html#scikitplot.corpus.unregister_bridge "scikitplot.corpus.unregister_bridge") | Remove a previously registered bridge for **chunker\_class**. |
| [`TokenizerProtocol`](../modules/generated/scikitplot.corpus.TokenizerProtocol.html#scikitplot.corpus.TokenizerProtocol "scikitplot.corpus.TokenizerProtocol") | Structural protocol for word tokenizers. |
| [`SentenceSplitterProtocol`](../modules/generated/scikitplot.corpus.SentenceSplitterProtocol.html#scikitplot.corpus.SentenceSplitterProtocol "scikitplot.corpus.SentenceSplitterProtocol") | Structural protocol for sentence segmenters. |
| [`StemmerProtocol`](../modules/generated/scikitplot.corpus.StemmerProtocol.html#scikitplot.corpus.StemmerProtocol "scikitplot.corpus.StemmerProtocol") | Structural protocol for word stemmers. |
| [`LemmatizerProtocol`](../modules/generated/scikitplot.corpus.LemmatizerProtocol.html#scikitplot.corpus.LemmatizerProtocol "scikitplot.corpus.LemmatizerProtocol") | Structural protocol for word lemmatizers. |
| [`FunctionTokenizer`](../modules/generated/scikitplot.corpus.FunctionTokenizer.html#scikitplot.corpus.FunctionTokenizer "scikitplot.corpus.FunctionTokenizer") | Wrap any `Callable[[str], list[str]]` as a [`TokenizerProtocol`](../modules/generated/scikitplot.corpus.TokenizerProtocol.html#scikitplot.corpus.TokenizerProtocol "scikitplot.corpus.TokenizerProtocol"). |
| [`FunctionSentenceSplitter`](../modules/generated/scikitplot.corpus.FunctionSentenceSplitter.html#scikitplot.corpus.FunctionSentenceSplitter "scikitplot.corpus.FunctionSentenceSplitter") | Wrap any `Callable[[str], list[str]]` as a [`SentenceSplitterProtocol`](../modules/generated/scikitplot.corpus.SentenceSplitterProtocol.html#scikitplot.corpus.SentenceSplitterProtocol "scikitplot.corpus.SentenceSplitterProtocol"). |
| [`FunctionStemmer`](../modules/generated/scikitplot.corpus.FunctionStemmer.html#scikitplot.corpus.FunctionStemmer "scikitplot.corpus.FunctionStemmer") | Wrap any `Callable[[str], str]` as a [`StemmerProtocol`](../modules/generated/scikitplot.corpus.StemmerProtocol.html#scikitplot.corpus.StemmerProtocol "scikitplot.corpus.StemmerProtocol"). |
| [`FunctionLemmatizer`](../modules/generated/scikitplot.corpus.FunctionLemmatizer.html#scikitplot.corpus.FunctionLemmatizer "scikitplot.corpus.FunctionLemmatizer") | Wrap any `Callable[[str, Optional[str]], str]` as a [`LemmatizerProtocol`](../modules/generated/scikitplot.corpus.LemmatizerProtocol.html#scikitplot.corpus.LemmatizerProtocol "scikitplot.corpus.LemmatizerProtocol"). |
| [`CustomTokenizerRegistry`](../modules/generated/scikitplot.corpus.CustomTokenizerRegistry.html#scikitplot.corpus.CustomTokenizerRegistry "scikitplot.corpus.CustomTokenizerRegistry") | Thread-safe module-level registry for named custom components. |
| [`register_tokenizer`](../modules/generated/scikitplot.corpus.register_tokenizer.html#scikitplot.corpus.register_tokenizer "scikitplot.corpus.register_tokenizer") | Register a named [`TokenizerProtocol`](../modules/generated/scikitplot.corpus.TokenizerProtocol.html#scikitplot.corpus.TokenizerProtocol "scikitplot.corpus.TokenizerProtocol") implementation. |
| [`get_tokenizer`](../modules/generated/scikitplot.corpus.get_tokenizer.html#scikitplot.corpus.get_tokenizer "scikitplot.corpus.get_tokenizer") | Retrieve a registered tokenizer by name. |
| [`register_sentence_splitter`](../modules/generated/scikitplot.corpus.register_sentence_splitter.html#scikitplot.corpus.register_sentence_splitter "scikitplot.corpus.register_sentence_splitter") | Register a named [`SentenceSplitterProtocol`](../modules/generated/scikitplot.corpus.SentenceSplitterProtocol.html#scikitplot.corpus.SentenceSplitterProtocol "scikitplot.corpus.SentenceSplitterProtocol") implementation. |
| [`get_sentence_splitter`](../modules/generated/scikitplot.corpus.get_sentence_splitter.html#scikitplot.corpus.get_sentence_splitter "scikitplot.corpus.get_sentence_splitter") | Retrieve a registered sentence splitter by name. |
| [`register_stemmer`](../modules/generated/scikitplot.corpus.register_stemmer.html#scikitplot.corpus.register_stemmer "scikitplot.corpus.register_stemmer") | Register a named [`StemmerProtocol`](../modules/generated/scikitplot.corpus.StemmerProtocol.html#scikitplot.corpus.StemmerProtocol "scikitplot.corpus.StemmerProtocol") implementation. |
| [`get_stemmer`](../modules/generated/scikitplot.corpus.get_stemmer.html#scikitplot.corpus.get_stemmer "scikitplot.corpus.get_stemmer") | Retrieve a registered stemmer by name. |
| [`register_lemmatizer`](../modules/generated/scikitplot.corpus.register_lemmatizer.html#scikitplot.corpus.register_lemmatizer "scikitplot.corpus.register_lemmatizer") | Register a named [`LemmatizerProtocol`](../modules/generated/scikitplot.corpus.LemmatizerProtocol.html#scikitplot.corpus.LemmatizerProtocol "scikitplot.corpus.LemmatizerProtocol") implementation. |
| [`get_lemmatizer`](../modules/generated/scikitplot.corpus.get_lemmatizer.html#scikitplot.corpus.get_lemmatizer "scikitplot.corpus.get_lemmatizer") | Retrieve a registered lemmatizer by name. |
| [`ScriptType`](../modules/generated/scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType "scikitplot.corpus.ScriptType") | Dominant Unicode script detected in a text sample. |
| [`detect_script`](../modules/generated/scikitplot.corpus.detect_script.html#scikitplot.corpus.detect_script "scikitplot.corpus.detect_script") | Detect the dominant Unicode script in **text**. |
| [`is_cjk_char`](../modules/generated/scikitplot.corpus.is_cjk_char.html#scikitplot.corpus.is_cjk_char "scikitplot.corpus.is_cjk_char") | Return `True` if **ch** is a CJK / Japanese / Korean character. |
| [`is_rtl_char`](../modules/generated/scikitplot.corpus.is_rtl_char.html#scikitplot.corpus.is_rtl_char "scikitplot.corpus.is_rtl_char") | Return `True` if **ch** belongs to a right-to-left script. |
| [`split_cjk_chars`](../modules/generated/scikitplot.corpus.split_cjk_chars.html#scikitplot.corpus.split_cjk_chars "scikitplot.corpus.split_cjk_chars") | Split **text** into individual CJK character tokens. |
| [`MULTI_SCRIPT_SENTENCE_RE_PATTERN`](../modules/generated/scikitplot.corpus.MULTI_SCRIPT_SENTENCE_RE_PATTERN.html#scikitplot.corpus.MULTI_SCRIPT_SENTENCE_RE_PATTERN "scikitplot.corpus.MULTI_SCRIPT_SENTENCE_RE_PATTERN") | str(object='') -> str str(bytes\_or\_buffer[, encoding[, errors]]) -> str |
| [`FixedWindowChunker`](../modules/generated/scikitplot.corpus.FixedWindowChunker.html#scikitplot.corpus.FixedWindowChunker "scikitplot.corpus.FixedWindowChunker") | Produce fixed-size sliding-window chunks over a document. |
| [`FixedWindowChunkerConfig`](../modules/generated/scikitplot.corpus.FixedWindowChunkerConfig.html#scikitplot.corpus.FixedWindowChunkerConfig "scikitplot.corpus.FixedWindowChunkerConfig") | Configuration for [`FixedWindowChunker`](../modules/generated/scikitplot.corpus.FixedWindowChunker.html#scikitplot.corpus.FixedWindowChunker "scikitplot.corpus.FixedWindowChunker"). |
| [`WindowUnit`](../modules/generated/scikitplot.corpus.WindowUnit.html#scikitplot.corpus.WindowUnit "scikitplot.corpus.WindowUnit") | Unit of measurement for window size and step. |
| [`ISO_TO_NLTK`](../modules/generated/scikitplot.corpus.ISO_TO_NLTK.html#scikitplot.corpus.ISO_TO_NLTK "scikitplot.corpus.ISO_TO_NLTK") |  |
| [`ISO_TO_NAME`](../modules/generated/scikitplot.corpus.ISO_TO_NAME.html#scikitplot.corpus.ISO_TO_NAME "scikitplot.corpus.ISO_TO_NAME") |  |
| [`NLTK_TO_ISO`](../modules/generated/scikitplot.corpus.NLTK_TO_ISO.html#scikitplot.corpus.NLTK_TO_ISO "scikitplot.corpus.NLTK_TO_ISO") |  |
| [`NLTK_STOPWORD_LANGUAGES`](../modules/generated/scikitplot.corpus.NLTK_STOPWORD_LANGUAGES.html#scikitplot.corpus.NLTK_STOPWORD_LANGUAGES "scikitplot.corpus.NLTK_STOPWORD_LANGUAGES") | frozenset() -> empty frozenset object frozenset(iterable) -> frozenset object |
| [`BUILTIN_LANG_STOPWORDS`](../modules/generated/scikitplot.corpus.BUILTIN_LANG_STOPWORDS.html#scikitplot.corpus.BUILTIN_LANG_STOPWORDS "scikitplot.corpus.BUILTIN_LANG_STOPWORDS") |  |
| [`coerce_language`](../modules/generated/scikitplot.corpus.coerce_language.html#scikitplot.corpus.coerce_language "scikitplot.corpus.coerce_language") | Normalise any language specifier into a list of canonical NLTK names. |
| [`resolve_stopwords`](../modules/generated/scikitplot.corpus.resolve_stopwords.html#scikitplot.corpus.resolve_stopwords "scikitplot.corpus.resolve_stopwords") | Return a frozenset of stopwords for one or more languages. |
| [`iso_to_nltk`](../modules/generated/iso_to_nltk-func.html#scikitplot.corpus.iso_to_nltk "scikitplot.corpus.iso_to_nltk") | Resolve an ISO 639-1/639-3 code to a canonical NLTK language name. |
| [`nltk_to_iso`](../modules/generated/nltk_to_iso-func.html#scikitplot.corpus.nltk_to_iso "scikitplot.corpus.nltk_to_iso") | Resolve a canonical NLTK language name to its primary ISO 639-1 code. |
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

## Downloader[#](#downloader "Link to this heading")

|  |  |
| --- | --- |
| [`AnyDownloader`](../modules/generated/scikitplot.corpus.AnyDownloader.html#scikitplot.corpus.AnyDownloader "scikitplot.corpus.AnyDownloader") | Auto-dispatching downloader with multi-URL and per-parameter list support. |
| [`BaseDownloader`](../modules/generated/scikitplot.corpus.BaseDownloader.html#scikitplot.corpus.BaseDownloader "scikitplot.corpus.BaseDownloader") | Abstract base class for all format-specific URL downloaders. |
| [`CustomDownloader`](../modules/generated/scikitplot.corpus.CustomDownloader.html#scikitplot.corpus.CustomDownloader "scikitplot.corpus.CustomDownloader") | Wraps a user-supplied callable as a [`BaseDownloader`](../modules/generated/scikitplot.corpus.BaseDownloader.html#scikitplot.corpus.BaseDownloader "scikitplot.corpus.BaseDownloader"). |
| [`DownloadResult`](../modules/generated/scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus.DownloadResult") | Immutable result object returned by every [`BaseDownloader`](../modules/generated/scikitplot.corpus.BaseDownloader.html#scikitplot.corpus.BaseDownloader "scikitplot.corpus.BaseDownloader"). |
| [`GitHubDownloader`](../modules/generated/scikitplot.corpus.GitHubDownloader.html#scikitplot.corpus.GitHubDownloader "scikitplot.corpus.GitHubDownloader") | GitHub URL downloader with automatic blob → raw normalisation. |
| [`GoogleDriveDownloader`](../modules/generated/scikitplot.corpus.GoogleDriveDownloader.html#scikitplot.corpus.GoogleDriveDownloader "scikitplot.corpus.GoogleDriveDownloader") | Google Drive share-link downloader. |
| [`WebDownloader`](../modules/generated/scikitplot.corpus.WebDownloader.html#scikitplot.corpus.WebDownloader "scikitplot.corpus.WebDownloader") | Generic HTTP/HTTPS file downloader. |
| [`YouTubeDownloader`](../modules/generated/scikitplot.corpus.YouTubeDownloader.html#scikitplot.corpus.YouTubeDownloader "scikitplot.corpus.YouTubeDownloader") | YouTube content downloader. |

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
| [`MultimodalEmbeddingEngine`](../modules/generated/scikitplot.corpus.MultimodalEmbeddingEngine.html#scikitplot.corpus.MultimodalEmbeddingEngine "scikitplot.corpus.MultimodalEmbeddingEngine") | Unified embedding engine for any [`CorpusDocument`](../modules/generated/scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") modality — text, image, audio, video, or multimodal. |

## Enricher[#](#enricher "Link to this heading")

|  |  |
| --- | --- |
| [`BUILTIN_STOPWORDS`](../modules/generated/scikitplot.corpus.BUILTIN_STOPWORDS.html#scikitplot.corpus.BUILTIN_STOPWORDS "scikitplot.corpus.BUILTIN_STOPWORDS") | frozenset() -> empty frozenset object frozenset(iterable) -> frozenset object |
| [`EnricherConfig`](../modules/generated/scikitplot.corpus.EnricherConfig.html#scikitplot.corpus.EnricherConfig "scikitplot.corpus.EnricherConfig") | Configuration for [`NLPEnricher`](../modules/generated/scikitplot.corpus.NLPEnricher.html#scikitplot.corpus.NLPEnricher "scikitplot.corpus.NLPEnricher"). |
| [`NLPEnricher`](../modules/generated/scikitplot.corpus.NLPEnricher.html#scikitplot.corpus.NLPEnricher "scikitplot.corpus.NLPEnricher") | Pipeline component that populates NLP enrichment fields on [`CorpusDocument`](../modules/generated/scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"). |

## Export[#](#export "Link to this heading")

|  |  |
| --- | --- |
| [`export_documents`](../modules/generated/scikitplot.corpus.export_documents.html#scikitplot.corpus.export_documents "scikitplot.corpus.export_documents") | Export a list of documents to `output_path` in the given format. |
| [`load_documents`](../modules/generated/scikitplot.corpus.load_documents.html#scikitplot.corpus.load_documents "scikitplot.corpus.load_documents") | Load [`CorpusDocument`](../modules/generated/scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") instances from a previously exported file. |

## Metadata[#](#metadata "Link to this heading")

|  |  |
| --- | --- |
| [`CollectionManifest`](../modules/generated/scikitplot.corpus.CollectionManifest.html#scikitplot.corpus.CollectionManifest "scikitplot.corpus.CollectionManifest") | Descriptor for a named corpus collection. |
| [`CorpusStats`](../modules/generated/scikitplot.corpus.CorpusStats.html#scikitplot.corpus.CorpusStats "scikitplot.corpus.CorpusStats") | Aggregate statistics over a [`CorpusDocument`](../modules/generated/scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") collection. |
| [`compute_stats`](../modules/generated/scikitplot.corpus.compute_stats.html#scikitplot.corpus.compute_stats "scikitplot.corpus.compute_stats") | Compute aggregate statistics over a document collection. |
| [`provenance_from_filename`](../modules/generated/scikitplot.corpus.provenance_from_filename.html#scikitplot.corpus.provenance_from_filename "scikitplot.corpus.provenance_from_filename") | Extract provenance metadata from a source filename using heuristics. |

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
| [`NormalizerConfig`](../modules/generated/scikitplot.corpus.NormalizerConfig.html#scikitplot.corpus.NormalizerConfig "scikitplot.corpus.NormalizerConfig") | Abstract base configuration for text normaliser implementations. |
| [`TextNormalizer`](../modules/generated/scikitplot.corpus.TextNormalizer.html#scikitplot.corpus.TextNormalizer "scikitplot.corpus.TextNormalizer") | Pipeline component that populates `normalized_text` on [`CorpusDocument`](../modules/generated/scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") instances. |
| [`normalize_text`](../modules/generated/scikitplot.corpus.normalize_text.html#scikitplot.corpus.normalize_text "scikitplot.corpus.normalize_text") | Normalise **text** according to **config**. |

## Pipeline[#](#pipeline "Link to this heading")

|  |  |
| --- | --- |
| [`CorpusPipeline`](../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline") | Orchestrates the full corpus ingestion pipeline. |
| [`PipelineResult`](../modules/generated/scikitplot.corpus.PipelineResult.html#scikitplot.corpus.PipelineResult "scikitplot.corpus.PipelineResult") |  |
| [`create_corpus`](../modules/generated/scikitplot.corpus.create_corpus.html#scikitplot.corpus.create_corpus "scikitplot.corpus.create_corpus") | Create and export a corpus from a single source file. |

## Readers[#](#readers "Link to this heading")

|  |  |
| --- | --- |
| [`ALTOReader`](../modules/generated/scikitplot.corpus.ALTOReader.html#scikitplot.corpus.ALTOReader "scikitplot.corpus.ALTOReader") | ALTO XML reader for scanned document archives. |
| [`AudioReader`](../modules/generated/scikitplot.corpus.AudioReader.html#scikitplot.corpus.AudioReader "scikitplot.corpus.AudioReader") | Text extraction from audio files via companion transcript/lyrics parsing, Whisper ASR, and optional audio classification. |
| [`CustomReader`](../modules/generated/scikitplot.corpus.CustomReader.html#scikitplot.corpus.CustomReader "scikitplot.corpus.CustomReader") | Fully user-customizable reader for any file extension and resource type. |
| [`normalize_extractor_output`](../modules/generated/scikitplot.corpus.normalize_extractor_output.html#scikitplot.corpus.normalize_extractor_output "scikitplot.corpus.normalize_extractor_output") | Coerce an extractor return value to a list of raw chunk dicts. |
| [`ImageReader`](../modules/generated/scikitplot.corpus.ImageReader.html#scikitplot.corpus.ImageReader "scikitplot.corpus.ImageReader") | OCR-based text extraction from raster image files. |
| [`PDFReader`](../modules/generated/scikitplot.corpus.PDFReader.html#scikitplot.corpus.PDFReader "scikitplot.corpus.PDFReader") | PDF document reader with pdfminer.six → pypdf cascade. |
| [`MarkdownReader`](../modules/generated/scikitplot.corpus.MarkdownReader.html#scikitplot.corpus.MarkdownReader "scikitplot.corpus.MarkdownReader") | Markdown document reader. |
| [`ReSTReader`](../modules/generated/scikitplot.corpus.ReSTReader.html#scikitplot.corpus.ReSTReader "scikitplot.corpus.ReSTReader") | reStructuredText document reader. |
| [`TextReader`](../modules/generated/scikitplot.corpus.TextReader.html#scikitplot.corpus.TextReader "scikitplot.corpus.TextReader") | Plain-text document reader. |
| [`VideoReader`](../modules/generated/scikitplot.corpus.VideoReader.html#scikitplot.corpus.VideoReader "scikitplot.corpus.VideoReader") | Text extraction from video files via subtitle parsing and/or automatic speech recognition. |
| [`WebReader`](../modules/generated/scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader") | Fetch a web page and extract structured text via BeautifulSoup. |
| [`YouTubeReader`](../modules/generated/scikitplot.corpus.YouTubeReader.html#scikitplot.corpus.YouTubeReader "scikitplot.corpus.YouTubeReader") | Extract the transcript of a YouTube video using `youtube-transcript-api`. |
| [`TEIReader`](../modules/generated/scikitplot.corpus.TEIReader.html#scikitplot.corpus.TEIReader "scikitplot.corpus.TEIReader") | TEI/XML document reader with dramatic structure extraction. |
| [`XMLReader`](../modules/generated/scikitplot.corpus.XMLReader.html#scikitplot.corpus.XMLReader "scikitplot.corpus.XMLReader") | Generic XML document reader with configurable XPath. |
| [`ZipReader`](../modules/generated/scikitplot.corpus.ZipReader.html#scikitplot.corpus.ZipReader "scikitplot.corpus.ZipReader") | Generic ZIP archive reader — dispatches each member to its natural reader. |

## Registry[#](#registry "Link to this heading")

|  |  |
| --- | --- |
| [`ComponentRegistry`](../modules/generated/scikitplot.corpus.ComponentRegistry.html#scikitplot.corpus.ComponentRegistry "scikitplot.corpus.ComponentRegistry") | Central look-up table for corpus pipeline components. |
| [`registry`](../modules/generated/scikitplot.corpus.registry.html#scikitplot.corpus.registry "scikitplot.corpus.registry") | Central look-up table for corpus pipeline components. |

## Similarity[#](#similarity "Link to this heading")

|  |  |
| --- | --- |
| [`SearchConfig`](../modules/generated/scikitplot.corpus.SearchConfig.html#scikitplot.corpus.SearchConfig "scikitplot.corpus.SearchConfig") | Configuration for similarity search. |
| [`SearchResult`](../modules/generated/scikitplot.corpus.SearchResult.html#scikitplot.corpus.SearchResult "scikitplot.corpus.SearchResult") | A single search result. |
| [`SimilarityIndex`](../modules/generated/scikitplot.corpus.SimilarityIndex.html#scikitplot.corpus.SimilarityIndex "scikitplot.corpus.SimilarityIndex") | Multi-mode similarity index over `CorpusDocument` collections. |

## Schema[#](#schema "Link to this heading")

|  |  |
| --- | --- |
| [`SectionType`](../modules/generated/scikitplot.corpus.SectionType.html#scikitplot.corpus.SectionType "scikitplot.corpus.SectionType") | Semantic label for the role of a text chunk within its source document. |
| [`ChunkingStrategy`](../modules/generated/scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus.ChunkingStrategy") | Describes how a [`CorpusDocument`](../modules/generated/scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") was segmented from raw text. |
| [`ExportFormat`](../modules/generated/scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus.ExportFormat") | Supported serialisation targets for a completed corpus. |
| [`SourceType`](../modules/generated/scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus.SourceType") | Semantic label for the kind of source from which a document was read. |
| [`MatchMode`](../modules/generated/scikitplot.corpus.MatchMode.html#scikitplot.corpus.MatchMode "scikitplot.corpus.MatchMode") | Search mode for intertextual matching queries against a corpus index. |
| [`Modality`](../modules/generated/scikitplot.corpus.Modality.html#scikitplot.corpus.Modality "scikitplot.corpus.Modality") | Primary content modality of a [`CorpusDocument`](../modules/generated/scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument"). |
| [`ErrorPolicy`](../modules/generated/scikitplot.corpus.ErrorPolicy.html#scikitplot.corpus.ErrorPolicy "scikitplot.corpus.ErrorPolicy") | Per-document error handling strategy for [`PipelineGuard`](../modules/generated/scikitplot.corpus.PipelineGuard.html#scikitplot.corpus.PipelineGuard "scikitplot.corpus.PipelineGuard"). |
| [`CorpusDocument`](../modules/generated/scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") | Canonical representation of a single text chunk in a processed corpus. |
| [`_PROMOTED_RAW_KEYS`](../modules/generated/scikitplot.corpus._PROMOTED_RAW_KEYS.html#scikitplot.corpus._PROMOTED_RAW_KEYS "scikitplot.corpus._PROMOTED_RAW_KEYS") | frozenset() -> empty frozenset object frozenset(iterable) -> frozenset object |
| [`documents_to_pandas`](../modules/generated/scikitplot.corpus.documents_to_pandas.html#scikitplot.corpus.documents_to_pandas "scikitplot.corpus.documents_to_pandas") | Convert a list of [`CorpusDocument`](../modules/generated/scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") instances to a `pandas.DataFrame`. |
| [`documents_to_polars`](../modules/generated/scikitplot.corpus.documents_to_polars.html#scikitplot.corpus.documents_to_polars "scikitplot.corpus.documents_to_polars") | Convert a list of [`CorpusDocument`](../modules/generated/scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") instances to a `polars.DataFrame`. |

## Source[#](#source "Link to this heading")

|  |  |
| --- | --- |
| [`CorpusSource`](../modules/generated/scikitplot.corpus.CorpusSource.html#scikitplot.corpus.CorpusSource "scikitplot.corpus.CorpusSource") | Declarative descriptor for one or more document sources. |
| [`SourceEntry`](../modules/generated/scikitplot.corpus.SourceEntry.html#scikitplot.corpus.SourceEntry "scikitplot.corpus.SourceEntry") | A single resolved source entry yielded by [`CorpusSource.iter_entries`](../modules/generated/scikitplot.corpus.CorpusSource.html#scikitplot.corpus.CorpusSource.iter_entries "scikitplot.corpus.CorpusSource.iter_entries"). |
| [`SourceKind`](../modules/generated/scikitplot.corpus.SourceKind.html#scikitplot.corpus.SourceKind "scikitplot.corpus.SourceKind") | Discriminant for the kind of source an entry represents. |

## Storage[#](#storage "Link to this heading")

|  |  |
| --- | --- |
| [`InMemoryStorage`](../modules/generated/scikitplot.corpus.InMemoryStorage.html#scikitplot.corpus.InMemoryStorage "scikitplot.corpus.InMemoryStorage") | Thread-safe in-memory dict store. |
| [`JSONLStorage`](../modules/generated/scikitplot.corpus.JSONLStorage.html#scikitplot.corpus.JSONLStorage "scikitplot.corpus.JSONLStorage") | Append-friendly JSONL (newline-delimited JSON) flat-file store. |
| [`QueryResult`](../modules/generated/scikitplot.corpus.QueryResult.html#scikitplot.corpus.QueryResult "scikitplot.corpus.QueryResult") | Result container returned by [`StorageBase.query`](../modules/generated/scikitplot.corpus.StorageBase.html#scikitplot.corpus.StorageBase.query "scikitplot.corpus.StorageBase.query"). |
| [`SQLiteStorage`](../modules/generated/scikitplot.corpus.SQLiteStorage.html#scikitplot.corpus.SQLiteStorage "scikitplot.corpus.SQLiteStorage") | SQLite-backed corpus store with FTS5 full-text search. |
| [`StorageBase`](../modules/generated/scikitplot.corpus.StorageBase.html#scikitplot.corpus.StorageBase "scikitplot.corpus.StorageBase") | Abstract base class for all corpus storage backends. |
| [`StorageQuery`](../modules/generated/scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus.StorageQuery") | Query parameters for [`StorageBase.query`](../modules/generated/scikitplot.corpus.StorageBase.html#scikitplot.corpus.StorageBase.query "scikitplot.corpus.StorageBase.query"). |

## URL[#](#url "Link to this heading")

|  |  |
| --- | --- |
| [`URLKind`](../modules/generated/scikitplot.corpus.URLKind.html#scikitplot.corpus.URLKind "scikitplot.corpus.URLKind") | Classification of a URL for routing to the correct handler. |
| [`classify_url`](../modules/generated/scikitplot.corpus.classify_url.html#scikitplot.corpus.classify_url "scikitplot.corpus.classify_url") | Classify a URL into one of the known [`URLKind`](../modules/generated/scikitplot.corpus.URLKind.html#scikitplot.corpus.URLKind "scikitplot.corpus.URLKind") categories. |
| [`download_url`](../modules/generated/scikitplot.corpus.download_url.html#scikitplot.corpus.download_url "scikitplot.corpus.download_url") | Download a URL to a local file. |
| [`infer_extension`](../modules/generated/scikitplot.corpus.infer_extension.html#scikitplot.corpus.infer_extension "scikitplot.corpus.infer_extension") | Infer a file extension from HTTP response headers and URL path. |
| [`probe_url_kind`](../modules/generated/scikitplot.corpus.probe_url_kind.html#scikitplot.corpus.probe_url_kind "scikitplot.corpus.probe_url_kind") | Probe a URL with a HEAD request to classify by Content-Type. |
| [`resolve_url`](../modules/generated/scikitplot.corpus.resolve_url.html#scikitplot.corpus.resolve_url "scikitplot.corpus.resolve_url") | Resolve a provider-specific URL to a direct-download URL. |