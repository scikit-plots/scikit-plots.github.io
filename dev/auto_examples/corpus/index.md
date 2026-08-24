# Corpus[#](#corpus "Link to this heading")

Examples for [`corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") are ordered as a learning path rather
than by implementation detail.

```
# 💡 corpus Need additionals packages
curl -O https://raw.githubusercontent.com/scikit-plots/scikit-plots/main/requirements/corpus.txt
pip install -r requirements/corpus.txt
pip install scikit-plots[corpus]

# (Recommended)
# !pip install datasets transformers
# !pip install nltk gensim langdetect faster-whisper openai-whisper pytesseract youtube-transcript-api
# sudo apt-get install tesseract-ocr

```
> **See also**
> * [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk)
* [semantica-agi/semantica](https://github.com/semantica-agi/semantica)
* <https://docs.getsemantica.ai/guides/distance-intelligence/#common-pitfalls>

## Start here[#](#start-here "Link to this heading")

1. ****Configure Corpus declaratively**** — learn `FluentCorpus`, immutable
   plans, validation, branching, fingerprints, and the `materialize()`
   boundary.
2. ****Build and search a real Hamlet corpus**** — use
   `RuntimeCorpus` end to end: `run()`, `add()`, storage, retrieval,
   export, and lifecycle.
3. ****Compare chunking strategies**** — compare sentence, word, fixed-window, and
   morphological semantic chunking on the same OCR text.
4. ****Process an MP3**** — learn audio provenance and companion-transcript
   precedence without requiring Whisper in the normal gallery path.
5. ****Process a mixed-media ZIP**** — inspect archive-member routing,
   `archive.zip/member.ext` provenance, and per-extension reader settings.
6. ****Process a YouTube transcript**** — execute a deterministic local proxy,
   configure the real YouTube reader, and keep the live transcript request
   explicit and optional.
7. ****Build a multi-source WHO corpus**** — see the explicit stage-by-stage
   integration path, partial source success, keyword retrieval, adapters, and
   where `CorpusBuilder` fits.

## Which API should I use?[#](#which-api-should-i-use "Link to this heading")

| Goal | Start with |
| --- | --- |
| Process one source with direct stage control | `CorpusPipeline` |
| Build/search heterogeneous sources with partial-success reporting | `CorpusBuilder` |
| Create immutable, reusable, branchable configuration | `FluentCorpus` |
| Execute a Fluent plan and manage runtime state/lifecycle | `RuntimeCorpus` |
| Extend vector indexing/retrieval directly | `RetrievalIndex` / `VectorIndexBackend` |

## Capability matrix[#](#capability-matrix "Link to this heading")

The normal gallery path prefers deterministic local execution. Optional
capabilities are either preflighted and skipped when unavailable, or shown as
configuration-only examples.

| Example | Normal path | Optional capability | Behavior when unavailable |
| --- | --- | --- | --- |
| FluentCorpus basics | local/core | none | not applicable |
| Hamlet RuntimeCorpus | local/core + NumPy | native Annoy branch | configuration only; not built |
| OCR chunking comparison | local image | Tesseract, NLTK | explicit `SKIP` for unavailable capability |
| MP3 ingestion | MP3 + local SRT companion | NLTK, Whisper | optional sections `SKIP` |
| Mixed-media ZIP | local archive | PDF/OCR/Whisper readers | individual optional member capability may produce no documents; archive-security failures still fail |
| YouTube transcript | local synthetic proxy | youtube-transcript-api + network, NLTK | live/optional sections `SKIP` |
| WHO multi-source integration | local sidecars only | PDF/OCR/Whisper | each unavailable source reports `SKIP`; successful evidence remains |

## Gallery reliability rule[#](#gallery-reliability-rule "Link to this heading")

The examples distinguish optional capability absence from real defects:

`missing optional package/resource/native capability/network opt-in`
:   Report a visible, specific `SKIP` and continue when the example can
    remain truthful.

`invalid public API / security-policy failure / installed-backend defect`
:   Fail visibly. The gallery must not convert a real regression into a skip.

A missing local sidecar never silently enables public-network access.

## Install only what you need[#](#install-only-what-you-need "Link to this heading")

The core text/runtime examples use the normal Corpus installation. Media and
NLP examples may additionally use packages such as NLTK, an OCR backend,
Whisper, or `youtube-transcript-api`. System tools such as Tesseract may also
be required for the corresponding optional path.

Do not install every optional dependency merely to read the gallery. The
portable path is designed to remain useful when those capabilities are absent.

## Browser / WASM note[#](#browser-wasm-note "Link to this heading")

Declarative configuration, local text processing, and portable brute-force
retrieval are the strongest browser/WASM candidates. OCR, Whisper, native ANN
backends, and live external services depend on the actual JupyterLite/xeus
runtime and should not be assumed available until verified in that target
environment.

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[Process an MP3 with Corpus](plot_corpus_a_tale_of_two_cities_mp3_script.html)

Process an MP3 with Corpus![](../../_images/sphx_glr_plot_corpus_fluent_corpus_script_thumb.png)

[Configure Corpus with FluentCorpus](plot_corpus_fluent_corpus_script.html)

Configure Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v1_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](plot_corpus_fluent_hamlet_retrieval_script_v1.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v2_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](plot_corpus_fluent_hamlet_retrieval_script_v2.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[Compare Corpus Chunking Strategies on OCR Text](plot_corpus_knowledge_script.html)

Compare Corpus Chunking Strategies on OCR Text![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[Build a Multi-Source WHO Corpus](plot_corpus_who_per_file_script.html)

Build a Multi-Source WHO Corpus![](../../_images/sphx_glr_plot_corpus_who_youtube_script_thumb.png)

[Process a YouTube Transcript with Corpus](plot_corpus_who_youtube_script.html)

Process a YouTube Transcript with Corpus![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[Process a Mixed-Media ZIP Archive with Corpus](plot_corpus_who_zip_script.html)

Process a Mixed-Media ZIP Archive with Corpus