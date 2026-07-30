# Corpus User Guide[#](#corpus-user-guide "Link to this heading")

****diagram****

* [Corpus User Guide Diagram Schema](corpus_user_guide_schema.html)
  * [At a glance](corpus_user_guide_schema.html#at-a-glance)
  * [Architecture for maintainers](corpus_user_guide_schema.html#architecture-for-maintainers)
  * [Public API](corpus_user_guide_schema.html#public-api)
  * [CorpusPipeline](corpus_user_guide_schema.html#corpuspipeline)
  * [CorpusBuilder](corpus_user_guide_schema.html#corpusbuilder)
  * [Sources, URLs, and downloads](corpus_user_guide_schema.html#sources-urls-and-downloads)
  * [Readers and archives](corpus_user_guide_schema.html#readers-and-archives)
  * [Chunking](corpus_user_guide_schema.html#chunking)
  * [Text transformation](corpus_user_guide_schema.html#text-transformation)
  * [Embeddings and search](corpus_user_guide_schema.html#embeddings-and-search)
  * [Persistence and export](corpus_user_guide_schema.html#persistence-and-export)
  * [Integrations and metadata](corpus_user_guide_schema.html#integrations-and-metadata)
  * [Extensibility](corpus_user_guide_schema.html#extensibility)
  * [Reliability and contracts](corpus_user_guide_schema.html#reliability-and-contracts)
  * [Security and platform evolution](corpus_user_guide_schema.html#security-and-platform-evolution)

****diagram****

* [Corpus Mermaid Diagram Include Catalog](diagram_include_catalog.html)
  * [00 Corpus At A Glance Logical](diagram_include_catalog.html#corpus-at-a-glance-logical)
  * [01 Corpus Physical Module Map](diagram_include_catalog.html#corpus-physical-module-map)
  * [02 Public Api Facade Flow](diagram_include_catalog.html#public-api-facade-flow)
  * [03 Pipeline Execution Flow](diagram_include_catalog.html#pipeline-execution-flow)
  * [04 Pipeline Lifecycle State](diagram_include_catalog.html#pipeline-lifecycle-state)
  * [05 Corpus Builder Flow](diagram_include_catalog.html#corpus-builder-flow)
  * [06 Corpus Builder Lifecycle State](diagram_include_catalog.html#corpus-builder-lifecycle-state)
  * [07 Source Resolution Flow](diagram_include_catalog.html#source-resolution-flow)
  * [08 Url Handler Flow](diagram_include_catalog.html#url-handler-flow)
  * [09 Downloader Dispatch Flow](diagram_include_catalog.html#downloader-dispatch-flow)
  * [10 Document Reader Factory Flow](diagram_include_catalog.html#document-reader-factory-flow)
  * [11 Reader Family Flow](diagram_include_catalog.html#reader-family-flow)
  * [12 Archive Processing Flow](diagram_include_catalog.html#archive-processing-flow)
  * [13 Chunker Family Flow](diagram_include_catalog.html#chunker-family-flow)
  * [14 Multilingual Semantic Chunking Flow](diagram_include_catalog.html#multilingual-semantic-chunking-flow)
  * [15 Normalization Flow](diagram_include_catalog.html#normalization-flow)
  * [16 Nlp Enrichment Flow](diagram_include_catalog.html#nlp-enrichment-flow)
  * [17 Embedding Flow](diagram_include_catalog.html#embedding-flow)
  * [18 Similarity Search Flow](diagram_include_catalog.html#similarity-search-flow)
  * [19 Storage Backend Flow](diagram_include_catalog.html#storage-backend-flow)
  * [20 Sqlite Storage Lifecycle State](diagram_include_catalog.html#sqlite-storage-lifecycle-state)
  * [21 Export Flow](diagram_include_catalog.html#export-flow)
  * [22 Adapter Flow](diagram_include_catalog.html#adapter-flow)
  * [23 Metadata Flow](diagram_include_catalog.html#metadata-flow)
  * [24 Component Registry Flow](diagram_include_catalog.html#component-registry-flow)
  * [25 Custom Hooks Flow](diagram_include_catalog.html#custom-hooks-flow)
  * [26 Pipeline Guard State](diagram_include_catalog.html#pipeline-guard-state)
  * [27 Schema And Types Flow](diagram_include_catalog.html#schema-and-types-flow)
  * [28 Error Propagation Flow](diagram_include_catalog.html#error-propagation-flow)
  * [29 Security And Resource Policy Target](diagram_include_catalog.html#security-and-resource-policy-target)
  * [30 Platform Capability Flow](diagram_include_catalog.html#platform-capability-flow)
  * [31 Compatibility Layer Flow](diagram_include_catalog.html#compatibility-layer-flow)

## Corpus (Remarks Citation) Generation[#](#corpus-remarks-citation-generation "Link to this heading")

![Corpus Architecture](../../_images/scikitplot_corpus_architecture.svg)

## Quick start[#](#quick-start "Link to this heading")

Examples

```
# First we download the media preproccess libraries (text, image, audio or video).
# pip install nltk gensim langdetect faster-whisper openai-whisper pytesseract youtube-transcript-api
# sudo apt-get install tesseract-ocr
# pip install scikit-plots[corpus]
from scikitplot import corpus

print(corpus.__doc__)

```

Examples

* [corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html#sphx-glr-auto-examples-corpus-plot-corpus-who-per-file-script-py): Example notebook.

> **See also**
> Google’s language-detection:

* [google/cld3](https://github.com/google/cld3)
* <https://pypi.org/project/gcld3/>
* [Mimino666/langdetect](https://github.com/Mimino666/langdetect)
* [shuyo/language-detection](https://github.com/shuyo/language-detection)
* [Abhijit-2592/spacy-langdetect](https://github.com/Abhijit-2592/spacy-langdetect)
* <https://spacy.io/models/en>

facebookresearch:

* [facebookresearch/fastText](https://github.com/facebookresearch/fastText)
* <https://fasttext.cc/>
* [facebookresearch/faiss](https://github.com/facebookresearch/faiss)
* <https://research.facebook.com/research-areas/facebook-ai-research-fair/>