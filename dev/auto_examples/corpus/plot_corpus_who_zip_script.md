> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-who-zip-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# corpus WHO European Region local .zip with examples[#](#corpus-who-european-region-local-zip-with-examples "Link to this heading")

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

## ZIP archive with per-extension kwargs[#](#zip-archive-with-per-extension-kwargs "Link to this heading")

Pass a nested `"reader_kwargs"` key to configure individual member types
inside the archive independently. Global kwargs go alongside it; per-extension
values always win when both specify the same key.

The pattern mirrors the `ZipReader`
constructor signature — the pipeline threads the outer dict straight through.

```
# zip_to_doc = list(
#     DocumentReader.create(
#         "data/WHO-EURO-2025-12555-52329-80560-eng.zip",
#         reader_kwargs={
#             ".mp3": {"transcribe": True, "whisper_model": "small"},
#             # ".jpg": {"backend": "easyocr"},   # uncomment to enable OCR on images
#         },
#     ).get_documents()
# )
# zip_to_doc

```

## The same ZIP via [`CorpusPipeline`](../../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline")[#](#the-same-zip-via-corpuspipeline "Link to this heading")

```
pipeline_zip = CorpusPipeline(
    chunker=SentenceChunker(SentenceChunkerConfig(backend=SentenceBackend.NLTK)),
    output_path=Path("output/"),
    export_format=ExportFormat.CSV,
    reader_kwargs={
        "reader_kwargs": {
            ".mp3": {"transcribe": True, "whisper_model": "small"},
            # ".jpg": {"backend": "easyocr"},
        },
    },
)
result_zip = pipeline_zip.run(Path("data/WHO-EURO-2025-12555-52329-80560-eng.zip"))
result_zip

```
```
Warning: You are sending unauthenticated requests to the HF Hub. Please set a HF_TOKEN to enable higher rate limits and faster downloads.

PipelineResult(input_path='data/WHO-EURO-2025-12555-52329-80560-eng.zip', output_path=output/WHO-EURO-2025-12555-52329-80560-eng.csv, export_format=csv, n_documents=7, n_read=8, n_omitted=1, n_embedded=0, elapsed_seconds=17.1s)

```
```
import pandas as pd
from pprint import pprint

pprint(pd.read_csv(result_zip.output_path).head().to_dict())

```
```
{'act': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'bbox': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'char_end': {0: 50, 1: 33, 2: 60, 3: 78, 4: 61},
 'char_start': {0: 0, 1: 0, 2: 0, 3: 0, 4: 0},
 'chunk_index': {0: 0, 1: 1, 2: 2, 3: 3, 4: 4},
 'chunking_strategy': {0: 'sentence',
                       1: 'sentence',
                       2: 'sentence',
                       3: 'sentence',
                       4: 'sentence'},
 'collection_id': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'confidence': {0: 0.8465, 1: 0.8465, 2: 0.8465, 3: 0.8465, 4: 0.8465},
 'content_hash': {0: '28540b9739ee232fb67a4e1088555ddd',
                  1: '2c8eb5cb7f068b42310a62d951f9a103',
                  2: '31a24d3e03ce1119627d5bff9a29dfa6',
                  3: '14312e5e9f2c77936f3da344dc9d8869',
                  4: '7c2b137120a08fcffd38c67e655cb899'},
 'doc_id': {0: '63533d90661689f9',
            1: 'af4a96b6f8cccd60',
            2: 'adb1682d7e30a156',
            3: '854e98d6f9240e55',
            4: 'da326479e13bf3ce'},
 'doi': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'frame_index': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'image_height': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'image_width': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'input_path': {0: 'WHO-EURO-2025-12555-52329-80560-eng.zip',
                1: 'WHO-EURO-2025-12555-52329-80560-eng.zip',
                2: 'WHO-EURO-2025-12555-52329-80560-eng.zip',
                3: 'WHO-EURO-2025-12555-52329-80560-eng.zip',
                4: 'WHO-EURO-2025-12555-52329-80560-eng.zip'},
 'isbn': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'keywords': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'language': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'lemmas': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'line_number': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'modality': {0: 'text', 1: 'text', 2: 'text', 3: 'text', 4: 'text'},
 'normalized_text': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'ocr_engine': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'page_number': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'paragraph_index': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'parent_doc_id': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'raw_dtype': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'raw_shape': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'scene_number': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'section_type': {0: 'transcript',
                  1: 'transcript',
                  2: 'transcript',
                  3: 'transcript',
                  4: 'transcript'},
 'source_author': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'source_date': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'source_title': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'source_type': {0: 'audio', 1: 'audio', 2: 'audio', 3: 'audio', 4: 'audio'},
 'stems': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'text': {0: 'Can people afford to pay for healthcare in Europe?',
          1: 'The short answer is not everyone.',
          2: 'No country in Europe has achieved universal health coverage.',
          3: 'When people have to pay out of pocket for healthcare and they '
             "can't afford it,",
          4: 'they either have to cut spending on other basic needs like...'},
 'timecode_end': {0: 6.0, 1: 9.0, 2: 14.0, 3: 21.0, 4: 25.0},
 'timecode_start': {0: 0.0, 1: 6.0, 2: 9.0, 3: 17.0, 4: 21.0},
 'tokens': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'total_frames': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'url': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan}}

```

Tags: [model-type: classification](../../_tags/model-type-classification.html) [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 17.088 seconds)

[![Launch binder](../../_images/binder_badge_logo4.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_who_zip_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo4.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_who_zip_script.ipynb)

[`Download Jupyter notebook: plot_corpus_who_zip_script.ipynb`](../../_downloads/3ff754f2e621589fcccb26490f98e361/plot_corpus_who_zip_script.ipynb)

[`Download Python source code: plot_corpus_who_zip_script.py`](../../_downloads/a2ce57f29ea909768cbe1f2cb8e7430e/plot_corpus_who_zip_script.py)

[`Download zipped: plot_corpus_who_zip_script.zip`](../../_downloads/772aad89379fb773388039d57b46e4c9/plot_corpus_who_zip_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_corpus_who_youtube_shorts_script_thumb.png)

[corpus WHO European Region YouTube shorts with examples](plot_corpus_who_youtube_shorts_script.html)

corpus WHO European Region YouTube shorts with examples![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)