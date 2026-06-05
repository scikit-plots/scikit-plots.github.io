> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-a-tale-of-two-cities-mp3-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# corpus A Tale of Two Cities .mp3 with examples[#](#corpus-a-tale-of-two-cities-mp3-with-examples "Link to this heading")

Examples related to the [`corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") submodule.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

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
    SentenceChunkerConfig,
    ExportFormat,
    CorpusDocument,
    SourceType,
    SentenceBackend,
    EnricherConfig,
    NLPEnricher,
)

```

## Audio URL transcription[#](#audio-url-transcription "Link to this heading")

Pass `transcribe=True` and `whisper_model` via `reader_kwargs`.
These kwargs are forwarded by the pipeline to the [`AudioReader`](../../modules/generated/scikitplot.corpus.AudioReader.html#scikitplot.corpus.AudioReader "scikitplot.corpus.AudioReader")
constructor — for both [`run`](../../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline.run "scikitplot.corpus.CorpusPipeline.run") (local files) and
[`run_url`](../../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline.run_url "scikitplot.corpus.CorpusPipeline.run_url") (remote URLs).

```
pipeline = CorpusPipeline(
    chunker=SentenceChunker(SentenceChunkerConfig(backend=SentenceBackend.NLTK)),
    output_path=Path("output/"),
    export_format=ExportFormat.CSV,
    reader_kwargs={
        "transcribe": True,
        "whisper_model": "base",  # "tiny" | "base" | "small" | "medium" | "large"
    },
)
pipeline

```
```
<scikitplot.corpus._pipeline.CorpusPipeline object at 0x7c7294d0ca10>

```
```
# https://archive.org/compress/tale_two_cities_librivox/formats=128KBPS%20MP3&file=/tale_two_cities_librivox.zip
# https://archive.org/details/tale_two_cities_librivox/tale_of_two_cities_01_dickens.mp3
# result = pipeline.run_url(
#     "https://archive.org/details/tale_two_cities_librivox/tale_of_two_cities_01_dickens.mp3"
# )
result = pipeline.run(
    # "https://archive.org/details/tale_two_cities_librivox/tale_of_two_cities_01_dickens.mp3"
    "data/tale_of_two_cities_01_dickens_64kb.mp3"
)
result

```
```
Warning: You are sending unauthenticated requests to the HF Hub. Please set a HF_TOKEN to enable higher rate limits and faster downloads.

PipelineResult(input_path='data/tale_of_two_cities_01_dickens_64kb.mp3', output_path=output/tale_of_two_cities_01_dickens_64kb.csv, export_format=csv, n_documents=5, n_read=5, n_omitted=0, n_embedded=0, elapsed_seconds=15.7s)

```
```
print(result.documents)

```
```
(CorpusDocument(doc_id='0ebc331b56884da7', input_path='tale_of_two_cities_01_dickens_64kb.mp3', chunk_index=0, source_type='audio', section_type='transcript', words=5), CorpusDocument(doc_id='ffc792ccefb8dcbb', input_path='tale_of_two_cities_01_dickens_64kb.mp3', chunk_index=1, source_type='audio', section_type='transcript', words=8), CorpusDocument(doc_id='bae9c18760f8b047', input_path='tale_of_two_cities_01_dickens_64kb.mp3', chunk_index=2, source_type='audio', section_type='transcript', words=9), CorpusDocument(doc_id='daf77219c79474ee', input_path='tale_of_two_cities_01_dickens_64kb.mp3', chunk_index=3, source_type='audio', section_type='transcript', words=5), CorpusDocument(doc_id='a5ad6c6785b63a4e', input_path='tale_of_two_cities_01_dickens_64kb.mp3', chunk_index=4, source_type='audio', section_type='transcript', words=8))

```
```
print(result.documents[0].text, result.documents[1].text)

```
```
This is a Libravox Recording. All Libravox recordings are in the public domain.

```
```
rich1 = NLPEnricher(
    EnricherConfig("nltk", lemmatizer="nltk", stemmer="snowball")
).enrich_documents(result.documents[:1])
rich1

```
```
[CorpusDocument(doc_id='0ebc331b56884da7', input_path='tale_of_two_cities_01_dickens_64kb.mp3', chunk_index=0, source_type='audio', section_type='transcript', words=5)]

```
```
print(rich1[0].keywords, rich1[0].lemmas, rich1[0].stems)

```
```
['libravox', 'recording'] None ['libravox', 'record']

```

Tags: [model-type: classification](../../_tags/model-type-classification.html) [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 15.822 seconds)

[![Launch binder](../../_images/binder_badge_logo4.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_a_tale_of_two_cities_mp3_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo4.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_a_tale_of_two_cities_mp3_script.ipynb)

[`Download Jupyter notebook: plot_corpus_a_tale_of_two_cities_mp3_script.ipynb`](../../_downloads/452f509437bad7949d83b58b8ed4d586/plot_corpus_a_tale_of_two_cities_mp3_script.ipynb)

[`Download Python source code: plot_corpus_a_tale_of_two_cities_mp3_script.py`](../../_downloads/2e9ea8ee11bb6e9572a270efbabc9f49/plot_corpus_a_tale_of_two_cities_mp3_script.py)

[`Download zipped: plot_corpus_a_tale_of_two_cities_mp3_script.zip`](../../_downloads/d95b4519d0b92da5d7e7839f1bd017e6/plot_corpus_a_tale_of_two_cities_mp3_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[corpus WHO European Region local .zip with examples](plot_corpus_who_zip_script.html)

corpus WHO European Region local .zip with examples![](../../_images/sphx_glr_plot_corpus_who_youtube_shorts_script_thumb.png)

[corpus WHO European Region YouTube shorts with examples](plot_corpus_who_youtube_shorts_script.html)

corpus WHO European Region YouTube shorts with examples![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)