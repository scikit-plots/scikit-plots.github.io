> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-knowledge-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# corpus Knowledge and Information local .png with examples[#](#corpus-knowledge-and-information-local-png-with-examples "Link to this heading")

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
    SourceType,
    DocumentReader,
    CorpusDocument,
    CorpusPipeline,
    SentenceBackend,
    SentenceChunker,
    SentenceChunkerConfig,
    ExportFormat,
    EnricherConfig,
    NLPEnricher,
    WordChunkerConfig,
    StemmingBackend,
    LemmatizationBackend,
    WordChunker,
    FixedWindowChunkerConfig,
    FixedWindowChunker,
    StopwordSource,
    WindowUnit,
    TokenizerBackend,
)

```

## 1. Word chunker by document[#](#word-chunker-by-document "Link to this heading")

via [`CorpusPipeline`](../../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline")

```
pipeline_zip = CorpusPipeline(
    chunker=WordChunker(
        WordChunkerConfig(
            chunk_by="document",
            stemmer=StemmingBackend.PORTER,
            nltk_language="english",
            tokenizer=TokenizerBackend.NLTK,
            lemmatizer=LemmatizationBackend.NLTK_WORDNET,
            stopwords=StopwordSource.BUILTIN,
            lowercase=True,
            remove_punctuation=True,
            min_token_length=2,
            ngram_range=(1,1),
        )
    ),
    output_dir=Path("output/"),
    export_format=ExportFormat.CSV,
)
result_zip = pipeline_zip.run(Path("data/echo_of_the_wise/AI_Generated_Image_1ix.png"))
result_zip

```
```
PipelineResult(source='data/echo_of_the_wise/AI_Generated_Image_1ix.png', n_documents=1, n_omitted=0, n_embedded=0, elapsed=4.3s, output=output/AI_Generated_Image_1ix.csv)

```
```
import pandas as pd
from pprint import pprint

print("Word chunker by document")
pprint(pd.read_csv(result_zip.output_path).head().to_dict())

```
```
Word chunker by document
{'act': {0: nan},
 'bbox': {0: nan},
 'char_end': {0: 861},
 'char_start': {0: 0},
 'chunk_index': {0: 0},
 'chunking_strategy': {0: 'custom'},
 'collection_id': {0: nan},
 'confidence': {0: 0.6372},
 'content_hash': {0: '6a406fd997f6814b7150ec03f001938a'},
 'doc_id': {0: 'cddbb4132e9ed33c'},
 'doi': {0: nan},
 'frame_index': {0: nan},
 'image_height': {0: 1024},
 'image_width': {0: 1024},
 'isbn': {0: nan},
 'keywords': {0: nan},
 'language': {0: nan},
 'lemmas': {0: nan},
 'line_number': {0: nan},
 'modality': {0: 'text'},
 'normalized_text': {0: nan},
 'ocr_engine': {0: 'tesseract'},
 'page_number': {0: 0},
 'paragraph_index': {0: nan},
 'parent_doc_id': {0: nan},
 'raw_dtype': {0: nan},
 'raw_shape': {0: nan},
 'scene_number': {0: nan},
 'section_type': {0: 'text'},
 'source_author': {0: nan},
 'source_date': {0: nan},
 'source_file': {0: 'AI_Generated_Image_1ix.png'},
 'source_title': {0: nan},
 'source_type': {0: 'image'},
 'stems': {0: nan},
 'text': {0: 'ire uursacesc caraga io 10 bi6dokew erna monet 1b aoe maa ett '
             'rco rsp eo ere memmnminsan erklaren kannst hast du creerona eat '
             'brome ccrlhi petesercn verstanden explain sa onan co oiag '
             'understand well enough ge vida nd tron sa ea ae nia apiotoréanc '
             'aaseavsp0¢ richard feynman albert einstein 384322 bc 356323 bc '
             'mieza macedonia 19181988 new york usa princeton pasadena 991955 '
             'ulm princeton onsen venient cc ae crore mokoeoeri ae bartend aa '
             've es clenrecemnnc ahupiingao ka taea pombelcuic ssri lic pye '
             'matterhow much kaov word reach onli far person understand ugh '
             'glen lat cs lb cle lage ernest rutherford mevlana 18711937 '
             'nelson nz cambridg warm ed balkh konya sato le scholar ace '
             'simplic mark os true knowledg focus pocus distract cenit innoc '
             'know world convers sto person intellig vision knowledg limit '
             'speaker limit listen mevlana wisdom 12071273 balkh konya'},
 'timecode_end': {0: nan},
 'timecode_start': {0: nan},
 'tokens': {0: nan},
 'total_frames': {0: 1},
 'url': {0: nan}}

```

## 1. Word chunker by sentence[#](#word-chunker-by-sentence "Link to this heading")

via [`CorpusPipeline`](../../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline")

```
pipeline_zip = CorpusPipeline(
    chunker=WordChunker(
        WordChunkerConfig(
            chunk_by="sentence",
            stemmer=StemmingBackend.SNOWBALL,
            nltk_language="english",
            tokenizer=TokenizerBackend.SIMPLE,
            lemmatizer=LemmatizationBackend.NLTK_WORDNET,
            stopwords=StopwordSource.BUILTIN,
            lowercase=True,
            remove_punctuation=True,
            min_token_length=2,
            ngram_range=(1,1),
        )
    ),
    output_dir=Path("output/"),
    export_format=ExportFormat.CSV,
)
result_zip = pipeline_zip.run(Path("data/echo_of_the_wise/AI_Generated_Image_1ix.png"))
result_zip

```
```
PipelineResult(source='data/echo_of_the_wise/AI_Generated_Image_1ix.png', n_documents=4, n_omitted=1, n_embedded=0, elapsed=4.1s, output=output/AI_Generated_Image_1ix.csv)

```
```
import pandas as pd
from pprint import pprint

print("Word chunker by sentence")
pprint(pd.read_csv(result_zip.output_path).head().to_dict())

```
```
Word chunker by sentence
{'act': {0: nan, 1: nan, 2: nan, 3: nan},
 'bbox': {0: nan, 1: nan, 2: nan, 3: nan},
 'char_end': {0: 274, 1: 522, 2: 22, 3: 35},
 'char_start': {0: 0, 1: 0, 2: 0, 3: 0},
 'chunk_index': {0: 0, 1: 1, 2: 2, 3: 4},
 'chunking_strategy': {0: 'custom', 1: 'custom', 2: 'custom', 3: 'custom'},
 'collection_id': {0: nan, 1: nan, 2: nan, 3: nan},
 'confidence': {0: 0.6372, 1: 0.6372, 2: 0.6372, 3: 0.6372},
 'content_hash': {0: '33f68ead927ced8f1830ab83e041f48f',
                  1: 'b425c02b6305598e94c04a129e24f714',
                  2: '357043daf50f1a2c8969664f442c153e',
                  3: '0e3d11aeb9c648a124ea5a868a59f79e'},
 'doc_id': {0: 'cddbb4132e9ed33c',
            1: '373e950c24f9fe97',
            2: '8f7b55bd79324031',
            3: '999aca3ee85e1488'},
 'doi': {0: nan, 1: nan, 2: nan, 3: nan},
 'frame_index': {0: nan, 1: nan, 2: nan, 3: nan},
 'image_height': {0: 1024, 1: 1024, 2: 1024, 3: 1024},
 'image_width': {0: 1024, 1: 1024, 2: 1024, 3: 1024},
 'isbn': {0: nan, 1: nan, 2: nan, 3: nan},
 'keywords': {0: nan, 1: nan, 2: nan, 3: nan},
 'language': {0: nan, 1: nan, 2: nan, 3: nan},
 'lemmas': {0: nan, 1: nan, 2: nan, 3: nan},
 'line_number': {0: nan, 1: nan, 2: nan, 3: nan},
 'modality': {0: 'text', 1: 'text', 2: 'text', 3: 'text'},
 'normalized_text': {0: nan, 1: nan, 2: nan, 3: nan},
 'ocr_engine': {0: 'tesseract', 1: 'tesseract', 2: 'tesseract', 3: 'tesseract'},
 'page_number': {0: 0, 1: 0, 2: 0, 3: 0},
 'paragraph_index': {0: nan, 1: nan, 2: nan, 3: nan},
 'parent_doc_id': {0: nan, 1: nan, 2: nan, 3: nan},
 'raw_dtype': {0: nan, 1: nan, 2: nan, 3: nan},
 'raw_shape': {0: nan, 1: nan, 2: nan, 3: nan},
 'scene_number': {0: nan, 1: nan, 2: nan, 3: nan},
 'section_type': {0: 'text', 1: 'text', 2: 'text', 3: 'text'},
 'source_author': {0: nan, 1: nan, 2: nan, 3: nan},
 'source_date': {0: nan, 1: nan, 2: nan, 3: nan},
 'source_file': {0: 'AI_Generated_Image_1ix.png',
                 1: 'AI_Generated_Image_1ix.png',
                 2: 'AI_Generated_Image_1ix.png',
                 3: 'AI_Generated_Image_1ix.png'},
 'source_title': {0: nan, 1: nan, 2: nan, 3: nan},
 'source_type': {0: 'image', 1: 'image', 2: 'image', 3: 'image'},
 'stems': {0: nan, 1: nan, 2: nan, 3: nan},
 'text': {0: 'ire uursacesc caraga io 10 bi6dokew erna monet 1b aoe maa ett '
             'rco rsp eo ere memmnminsan erklaren kannst hast du creerona eat '
             'brome ccrlhi petesercn verstanden cannot explain sas onan co '
             'oiag understand well enough ge vida nd tron sa ea ae nia '
             'apiotoréanc aaseavsp0¢ richard',
          1: 'feynman albert einstein 384322 bc 356323 bc mieza macedonia '
             '19181988 new york usa princeton pasadena 991955 ulm princeton '
             'onsen venient cc ae crore mokoeoeri ae bartend aa ve es '
             'clenrecemnnc ahupiingao ka taea pombelcuic ssri lic pye '
             'matterhow much kaov word reach onli far person understand ugh '
             'glen lat cs lb cle lage ernest rutherford mevlana 18711937 '
             'nelson nz cambridg warm ed balkh konya sato le scholar ace '
             'simplic mark os true knowledg focus pocus distract cenit innoc '
             'know world convers sto person intellig vision',
          2: 'knowledg limit speaker',
          3: 'mevlana wisdom 12071273 balkh konya'},
 'timecode_end': {0: nan, 1: nan, 2: nan, 3: nan},
 'timecode_start': {0: nan, 1: nan, 2: nan, 3: nan},
 'tokens': {0: nan, 1: nan, 2: nan, 3: nan},
 'total_frames': {0: 1, 1: 1, 2: 1, 3: 1},
 'url': {0: nan, 1: nan, 2: nan, 3: nan}}

```

## 2. Sentence chunker[#](#sentence-chunker "Link to this heading")

via [`CorpusPipeline`](../../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline")

```
pipeline_zip = CorpusPipeline(
    chunker=SentenceChunker(
        SentenceChunkerConfig(
            backend=SentenceBackend.NLTK,
            nltk_language="english",
            strip_whitespace=True,
            include_offsets=True,
        ),
    ),
    output_dir=Path("output/"),
    export_format=ExportFormat.CSV,
)
result_zip = pipeline_zip.run(Path("data/echo_of_the_wise/AI_Generated_Image_1ix.png"))
result_zip

```
```
PipelineResult(source='data/echo_of_the_wise/AI_Generated_Image_1ix.png', n_documents=8, n_omitted=0, n_embedded=0, elapsed=4.3s, output=output/AI_Generated_Image_1ix.csv)

```
```
import pandas as pd
from pprint import pprint

print("Sentence chunker")
pprint(pd.read_csv(result_zip.output_path).head().to_dict())

```
```
Sentence chunker
{'act': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'bbox': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'char_end': {0: 229, 1: 299, 2: 607, 3: 1011, 4: 1179},
 'char_start': {0: 6, 1: 230, 2: 301, 3: 608, 4: 1013},
 'chunk_index': {0: 0, 1: 1, 2: 2, 3: 3, 4: 4},
 'chunking_strategy': {0: 'sentence',
                       1: 'sentence',
                       2: 'sentence',
                       3: 'sentence',
                       4: 'sentence'},
 'collection_id': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'confidence': {0: 0.6372, 1: 0.6372, 2: 0.6372, 3: 0.6372, 4: 0.6372},
 'content_hash': {0: '72d9a66ad2010fe6f95c336e9b967aef',
                  1: '2ae9055ee90f61d3ed9a6ee7a8425acc',
                  2: '929db36bee285ec5d8f380cacba9e157',
                  3: '8fd437ea14514826c2c1dcae91e2c3c3',
                  4: '1890c9fdc4ee3b5ba62205dd8c1c7cf0'},
 'doc_id': {0: '033fe979c6bb209c',
            1: '2829df524657858f',
            2: '4f3824727d6cf878',
            3: '2c4188cef46cee22',
            4: 'b203e048a59ee500'},
 'doi': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'frame_index': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'image_height': {0: 1024, 1: 1024, 2: 1024, 3: 1024, 4: 1024},
 'image_width': {0: 1024, 1: 1024, 2: 1024, 3: 1024, 4: 1024},
 'isbn': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'keywords': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'language': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'lemmas': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'line_number': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'modality': {0: 'text', 1: 'text', 2: 'text', 3: 'text', 4: 'text'},
 'normalized_text': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'ocr_engine': {0: 'tesseract',
                1: 'tesseract',
                2: 'tesseract',
                3: 'tesseract',
                4: 'tesseract'},
 'page_number': {0: 0, 1: 0, 2: 0, 3: 0, 4: 0},
 'paragraph_index': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'parent_doc_id': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'raw_dtype': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'raw_shape': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'scene_number': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'section_type': {0: 'text', 1: 'text', 2: 'text', 3: 'text', 4: 'text'},
 'source_author': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'source_date': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'source_file': {0: 'AI_Generated_Image_1ix.png',
                 1: 'AI_Generated_Image_1ix.png',
                 2: 'AI_Generated_Image_1ix.png',
                 3: 'AI_Generated_Image_1ix.png',
                 4: 'AI_Generated_Image_1ix.png'},
 'source_title': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'source_type': {0: 'image', 1: 'image', 2: 'image', 3: 'image', 4: 'image'},
 'stems': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'text': {0: 'ire uursacesced Caraga io\n'
             '10 Bi6doKew 8 Erna monet) 1b / aoe Maa ETT\n'
             'RCO RSP eo ere\n'
             '\n'
             'Memmnminsane(s)\n'
             'erklaren kannst, hast du\n'
             'Creerona eats\n'
             '\n'
             ' \n'
             ' \n'
             '      \n'
             '     \n'
             '   \n'
             ' \n'
             ' \n'
             ' \n'
             ' \n'
             ' \n'
             '  \n'
             ' \n'
             '\n'
             ' \n'
             '\n'
             'Brome ccrlhy | |\n'
             ' Petesercne | verstanden.',
          1: '>\n'
             'If you cannot explain\n'
             '» Sas ONAN Co oiag\n'
             'understand it well enough.',
          2: 'ge VIDA ND TRON\n'
             '\n'
             'Sa eas\n'
             'aE Nia)\n'
             '\n'
             '   \n'
             '\n'
             '‘ApiotoréAnc + AASEavSp0¢ , Richard P. Feynman j Albert '
             'Einstein\n'
             '\n'
             '384-322 BC - 356-323 BC | Mieza, Macedonia 1918-1988 | New York, '
             'USA — Princeton — Pasadena 99-1955 | Ulm — Princeton\n'
             '\n'
             ' \n'
             ' \n'
             ' \n'
             ' \n'
             '  \n'
             '  \n'
             ' \n'
             ' \n'
             '   \n'
             '\n'
             'ONSEN\n'
             'venient Cc ae\n'
             '| Crore mokoeoeri ae} A\n'
             '\n'
             'to a bartender.',
          3: 'aa ve, r\n'
             'es Clenrecemnnc\n'
             'ahupiingao ka taea\n'
             'POMBELCUICIC IN\n'
             'SSRI LIC\n'
             '\n'
             ' \n'
             '\n'
             'Pye matterhow much you kaov\n'
             'your words reach only as far as the\n'
             'other person can understand,\n'
             '\n'
             ': ugh $9) glen a lat 9 CS lb cle Lage I y\n'
             '\n'
             ' \n'
             '\n'
             '       \n'
             ' \n'
             '\n'
             'Ernest Rutherford F Mevlana\n'
             '1871-1937 | Nelson, NZ > Cambridge _—_ warm, Ed 3 | Balkh > '
             'Konya\n'
             '\n'
             '           \n'
             ' \n'
             '\n'
             'Sato r le Scholar aCe Is\n'
             '\n'
             'Simplicity is the mark\n'
             '7 Os true knowledge.',
          4: '“ (Focused)  (Pocused) | (Distracted)\n'
             '\n'
             'cenit)\n'
             '(Innocent)\n'
             '\n'
             '   \n'
             '\n'
             'You may know all the worlds, but the conversation sto,\n'
             'j at the other person’s intelligence and vision.'},
 'timecode_end': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'timecode_start': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'tokens': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'total_frames': {0: 1, 1: 1, 2: 1, 3: 1, 4: 1},
 'url': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan}}

```

## 3. Fixed Window chunker by chars[#](#fixed-window-chunker-by-chars "Link to this heading")

via [`CorpusPipeline`](../../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline")

```
pipeline_zip = CorpusPipeline(
    chunker=FixedWindowChunker(
        FixedWindowChunkerConfig(
            unit=WindowUnit.CHARS,
            min_length=10,
        )
    ),
    output_dir=Path("output/"),
    export_format=ExportFormat.CSV,
)
result_zip = pipeline_zip.run(Path("data/echo_of_the_wise/AI_Generated_Image_1ix.png"))
result_zip

```
```
PipelineResult(source='data/echo_of_the_wise/AI_Generated_Image_1ix.png', n_documents=5, n_omitted=0, n_embedded=0, elapsed=3.7s, output=output/AI_Generated_Image_1ix.csv)

```
```
import pandas as pd
from pprint import pprint

print("Fixed Window chunker by chars")
pprint(pd.read_csv(result_zip.output_path).head().to_dict())

```
```
Fixed Window chunker by chars
{'act': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'bbox': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'char_end': {0: 506, 1: 768, 2: 1023, 3: 1279, 4: 1293},
 'char_start': {0: 0, 1: 256, 2: 512, 3: 768, 4: 1024},
 'chunk_index': {0: 0, 1: 1, 2: 2, 3: 3, 4: 4},
 'chunking_strategy': {0: 'fixed_window',
                       1: 'fixed_window',
                       2: 'fixed_window',
                       3: 'fixed_window',
                       4: 'fixed_window'},
 'collection_id': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'confidence': {0: 0.6372, 1: 0.6372, 2: 0.6372, 3: 0.6372, 4: 0.6372},
 'content_hash': {0: '671592852b8acb95a8d8fc55b86a1d65',
                  1: '04b7e8f4f1e97f02ddf5494b2733a001',
                  2: 'b2e1a3305d1a2c6cb62f0a85a9139004',
                  3: 'ed5fb80c57aa1440f5cdbff9c548ddae',
                  4: '94cbe0d3b596da3d27f721698e46d4d7'},
 'doc_id': {0: '033fe979c6bb209c',
            1: 'f0beb35fc68a949b',
            2: '3dfc7e6e9304011c',
            3: 'fba7147bfc0a189c',
            4: '0c3188c73ed9b48c'},
 'doi': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'frame_index': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'image_height': {0: 1024, 1: 1024, 2: 1024, 3: 1024, 4: 1024},
 'image_width': {0: 1024, 1: 1024, 2: 1024, 3: 1024, 4: 1024},
 'isbn': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'keywords': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'language': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'lemmas': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'line_number': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'modality': {0: 'text', 1: 'text', 2: 'text', 3: 'text', 4: 'text'},
 'normalized_text': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'ocr_engine': {0: 'tesseract',
                1: 'tesseract',
                2: 'tesseract',
                3: 'tesseract',
                4: 'tesseract'},
 'page_number': {0: 0, 1: 0, 2: 0, 3: 0, 4: 0},
 'paragraph_index': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'parent_doc_id': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'raw_dtype': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'raw_shape': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'scene_number': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'section_type': {0: 'text', 1: 'text', 2: 'text', 3: 'text', 4: 'text'},
 'source_author': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'source_date': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'source_file': {0: 'AI_Generated_Image_1ix.png',
                 1: 'AI_Generated_Image_1ix.png',
                 2: 'AI_Generated_Image_1ix.png',
                 3: 'AI_Generated_Image_1ix.png',
                 4: 'AI_Generated_Image_1ix.png'},
 'source_title': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'source_type': {0: 'image', 1: 'image', 2: 'image', 3: 'image', 4: 'image'},
 'stems': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'text': {0: 'ire uursacesced Caraga io\n'
             '10 Bi6doKew 8 Erna monet) 1b / aoe Maa ETT\n'
             'RCO RSP eo ere\n'
             '\n'
             'Memmnminsane(s)\n'
             'erklaren kannst, hast du\n'
             'Creerona eats\n'
             '\n'
             ' \n'
             ' \n'
             '      \n'
             '     \n'
             '   \n'
             ' \n'
             ' \n'
             ' \n'
             ' \n'
             ' \n'
             '  \n'
             ' \n'
             '\n'
             ' \n'
             '\n'
             'Brome ccrlhy | |\n'
             ' Petesercne | verstanden.\n'
             '>\n'
             'If you cannot explain\n'
             '» Sas ONAN Co oiag\n'
             'understand it well enough.\n'
             '\n'
             'ge VIDA ND TRON\n'
             '\n'
             'Sa eas\n'
             'aE Nia)\n'
             '\n'
             '   \n'
             '\n'
             '‘ApiotoréAnc + AASEavSp0¢ , Richard P. Feynman j Albert '
             'Einstein\n'
             '\n'
             '384-322 BC - 356-323 BC | Mieza, Macedonia 1918-1988 | New York, '
             'USA — Princeton — Pasadena 99-1955 | Ulm —',
          1: 'Sas ONAN Co oiag\n'
             'understand it well enough.\n'
             '\n'
             'ge VIDA ND TRON\n'
             '\n'
             'Sa eas\n'
             'aE Nia)\n'
             '\n'
             '   \n'
             '\n'
             '‘ApiotoréAnc + AASEavSp0¢ , Richard P. Feynman j Albert '
             'Einstein\n'
             '\n'
             '384-322 BC - 356-323 BC | Mieza, Macedonia 1918-1988 | New York, '
             'USA — Princeton — Pasadena 99-1955 | Ulm — Princeton\n'
             '\n'
             ' \n'
             ' \n'
             ' \n'
             ' \n'
             '  \n'
             '  \n'
             ' \n'
             ' \n'
             '   \n'
             '\n'
             'ONSEN\n'
             'venient Cc ae\n'
             '| Crore mokoeoeri ae} A\n'
             '\n'
             'to a bartender. aa ve, r\n'
             'es Clenrecemnnc\n'
             'ahupiingao ka taea\n'
             'POMBELCUICIC IN\n'
             'SSRI LIC\n'
             '\n'
             ' \n'
             '\n'
             'Pye matterhow much you kaov\n'
             'your words reach only as far as the\n'
             'other person can unders',
          2: 'Princeton\n'
             '\n'
             ' \n'
             ' \n'
             ' \n'
             ' \n'
             '  \n'
             '  \n'
             ' \n'
             ' \n'
             '   \n'
             '\n'
             'ONSEN\n'
             'venient Cc ae\n'
             '| Crore mokoeoeri ae} A\n'
             '\n'
             'to a bartender. aa ve, r\n'
             'es Clenrecemnnc\n'
             'ahupiingao ka taea\n'
             'POMBELCUICIC IN\n'
             'SSRI LIC\n'
             '\n'
             ' \n'
             '\n'
             'Pye matterhow much you kaov\n'
             'your words reach only as far as the\n'
             'other person can understand,\n'
             '\n'
             ': ugh $9) glen a lat 9 CS lb cle Lage I y\n'
             '\n'
             ' \n'
             '\n'
             '       \n'
             ' \n'
             '\n'
             'Ernest Rutherford F Mevlana\n'
             '1871-1937 | Nelson, NZ > Cambridge _—_ warm, Ed 3 | Balkh > '
             'Konya\n'
             '\n'
             '           \n'
             ' \n'
             '\n'
             'Sato r le Scholar aCe Is\n'
             '\n'
             'Simplicity is the mark\n'
             '7 Os true knowledge.\n'
             '\n'
             '“ (Focused)',
          3: 'tand,\n'
             '\n'
             ': ugh $9) glen a lat 9 CS lb cle Lage I y\n'
             '\n'
             ' \n'
             '\n'
             '       \n'
             ' \n'
             '\n'
             'Ernest Rutherford F Mevlana\n'
             '1871-1937 | Nelson, NZ > Cambridge _—_ warm, Ed 3 | Balkh > '
             'Konya\n'
             '\n'
             '           \n'
             ' \n'
             '\n'
             'Sato r le Scholar aCe Is\n'
             '\n'
             'Simplicity is the mark\n'
             '7 Os true knowledge.\n'
             '\n'
             '“ (Focused)  (Pocused) | (Distracted)\n'
             '\n'
             'cenit)\n'
             '(Innocent)\n'
             '\n'
             '   \n'
             '\n'
             'You may know all the worlds, but the conversation sto,\n'
             'j at the other person’s intelligence and vision. Knowledge is\n'
             'not limited by the speaker. It is limited by the listener.\n'
             '\n'
             "Mevlana's Wisdom\n"
             '1207-1273',
          4: '(Pocused) | (Distracted)\n'
             '\n'
             'cenit)\n'
             '(Innocent)\n'
             '\n'
             '   \n'
             '\n'
             'You may know all the worlds, but the conversation sto,\n'
             'j at the other person’s intelligence and vision. Knowledge is\n'
             'not limited by the speaker. It is limited by the listener.\n'
             '\n'
             "Mevlana's Wisdom\n"
             '1207-1273 | Balkh + Konya'},
 'timecode_end': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'timecode_start': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'tokens': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'total_frames': {0: 1, 1: 1, 2: 1, 3: 1, 4: 1},
 'url': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan}}

```

## 3. Fixed Window chunker by tokens[#](#fixed-window-chunker-by-tokens "Link to this heading")

via [`CorpusPipeline`](../../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline")

```
pipeline_zip = CorpusPipeline(
    chunker=FixedWindowChunker(
        FixedWindowChunkerConfig(
            unit=WindowUnit.TOKENS,
            min_length=10,
        )
    ),
    output_dir=Path("output/"),
    export_format=ExportFormat.CSV,
)
result_zip = pipeline_zip.run(Path("data/echo_of_the_wise/AI_Generated_Image_1ix.png"))
result_zip

```
```
PipelineResult(source='data/echo_of_the_wise/AI_Generated_Image_1ix.png', n_documents=1, n_omitted=0, n_embedded=0, elapsed=3.6s, output=output/AI_Generated_Image_1ix.csv)

```
```
import pandas as pd
from pprint import pprint

print("Fixed Window chunker by tokens")
pprint(pd.read_csv(result_zip.output_path).head().to_dict())

```
```
Fixed Window chunker by tokens
{'act': {0: nan},
 'bbox': {0: nan},
 'char_end': {0: 1171},
 'char_start': {0: 6},
 'chunk_index': {0: 0},
 'chunking_strategy': {0: 'fixed_window'},
 'collection_id': {0: nan},
 'confidence': {0: 0.6372},
 'content_hash': {0: 'c250ed74816a460c2a6a541c63968145'},
 'doc_id': {0: '14578619132abab9'},
 'doi': {0: nan},
 'frame_index': {0: nan},
 'image_height': {0: 1024},
 'image_width': {0: 1024},
 'isbn': {0: nan},
 'keywords': {0: nan},
 'language': {0: nan},
 'lemmas': {0: nan},
 'line_number': {0: nan},
 'modality': {0: 'text'},
 'normalized_text': {0: nan},
 'ocr_engine': {0: 'tesseract'},
 'page_number': {0: 0},
 'paragraph_index': {0: nan},
 'parent_doc_id': {0: nan},
 'raw_dtype': {0: nan},
 'raw_shape': {0: nan},
 'scene_number': {0: nan},
 'section_type': {0: 'text'},
 'source_author': {0: nan},
 'source_date': {0: nan},
 'source_file': {0: 'AI_Generated_Image_1ix.png'},
 'source_title': {0: nan},
 'source_type': {0: 'image'},
 'stems': {0: nan},
 'text': {0: 'ire uursacesced Caraga io 10 Bi6doKew 8 Erna monet) 1b / aoe Maa '
             'ETT RCO RSP eo ere Memmnminsane(s) erklaren kannst, hast du '
             'Creerona eats Brome ccrlhy | | Petesercne | verstanden. > If you '
             'cannot explain » Sas ONAN Co oiag understand it well enough. ge '
             'VIDA ND TRON Sa eas aE Nia) ‘ApiotoréAnc + AASEavSp0¢ , Richard '
             'P. Feynman j Albert Einstein 384-322 BC - 356-323 BC | Mieza, '
             'Macedonia 1918-1988 | New York, USA — Princeton — Pasadena '
             '99-1955 | Ulm — Princeton ONSEN venient Cc ae | Crore mokoeoeri '
             'ae} A to a bartender. aa ve, r es Clenrecemnnc ahupiingao ka '
             'taea POMBELCUICIC IN SSRI LIC Pye matterhow much you kaov your '
             'words reach only as far as the other person can understand, : '
             'ugh $9) glen a lat 9 CS lb cle Lage I y Ernest Rutherford F '
             'Mevlana 1871-1937 | Nelson, NZ > Cambridge _—_ warm, Ed 3 | '
             'Balkh > Konya Sato r le Scholar aCe Is Simplicity is the mark 7 '
             'Os true knowledge. “ (Focused) (Pocused) | (Distracted) cenit) '
             '(Innocent) You may know all the worlds, but the conversation '
             'sto, j at the other person’s intelligence and vision. Knowledge '
             'is not limited by the speaker. It is limited by the listener. '
             "Mevlana's Wisdom 1207-1273 | Balkh + Konya"},
 'timecode_end': {0: nan},
 'timecode_start': {0: nan},
 'tokens': {0: nan},
 'total_frames': {0: 1},
 'url': {0: nan}}

```
```
from IPython.display import FileLink, FileLinks

# Replace 'path/to/your_file.csv' with your actual file path
FileLink(result_zip.source)

```
Path (data/echo\_of\_the\_wise/AI\_Generated\_Image\_1ix.png) doesn't exist. It may still be in the process of being generated, or you may have the incorrect path.  
  
```
# import matplotlib.pyplot as plt
# import matplotlib.image as mpimg

# plt.figure(dpi=300)  # Set DPI to 150
# img = mpimg.imread(result_zip.source)
# plt.imshow(img)
# plt.axis('off')  # hides axes
# plt.show()

```

Tags: [model-type: classification](../../_tags/model-type-classification.html) [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 20.144 seconds)

[![Launch binder](../../_images/binder_badge_logo4.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_knowledge_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo4.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_knowledge_script.ipynb)

[`Download Jupyter notebook: plot_corpus_knowledge_script.ipynb`](../../_downloads/03d2342478eb1dcd2ccaabfc27527592/plot_corpus_knowledge_script.ipynb)

[`Download Python source code: plot_corpus_knowledge_script.py`](../../_downloads/87bcb576061c2ea06beafd9df4c81887/plot_corpus_knowledge_script.py)

[`Download zipped: plot_corpus_knowledge_script.zip`](../../_downloads/b1fa817840036a2ad9ee0f00f5a6f0a8/plot_corpus_knowledge_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[corpus WHO European Region local .zip with examples](plot_corpus_who_zip_script.html)

corpus WHO European Region local .zip with examples![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_corpus_who_youtube_shorts_script_thumb.png)

[corpus WHO European Region YouTube shorts with examples](plot_corpus_who_youtube_shorts_script.html)

corpus WHO European Region YouTube shorts with examples![](../../_images/sphx_glr_plot_annoy_cython_0benchmark_thumb.png)

[Index (cython) python-api benchmark with examples](../annoy/plot_annoy_cython_0benchmark.html)

Index (cython) python-api benchmark with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)