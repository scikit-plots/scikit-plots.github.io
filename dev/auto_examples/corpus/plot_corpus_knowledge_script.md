> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-knowledge-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# corpus Knowledge and Information local .png with examples[#](#corpus-knowledge-and-information-local-png-with-examples "Link to this heading")

Examples related to the [`corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") submodule.
Demonstrates all four chunkers (WordChunker-by-document, WordChunker-by-sentence,
SentenceChunker, FixedWindowChunker-chars, FixedWindowChunker-tokens) on an
image file containing multi-script text extracted via OCR.

## Notes[#](#notes "Link to this heading")

****User note:**** Run from any working directory — paths are resolved relative
to this script’s location, not the caller’s CWD.

****Developer note:**** `FileLink` / `FileLinks` (IPython display utilities)
are guarded behind `_IN_JUPYTER` so this script executes correctly in
plain Python, pytest, Docker CI, and notebook contexts alike.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import os
import sys
from pathlib import Path
from pprint import pprint

import matplotlib.image as mpimg
import matplotlib.pyplot as plt
import pandas as pd

import scikitplot as sp  # noqa: F401  (kept for side effects / version logging)
from scikitplot.corpus import (
    CorpusPipeline,
    ExportFormat,
    FixedWindowChunker,
    FixedWindowChunkerConfig,
    NLPEnricher,
    EnricherConfig,
    SentenceBackend,
    SentenceChunker,
    SentenceChunkerConfig,
    SourceType,
    StemmingBackend,
    StopwordSource,
    TokenizerBackend,
    LemmatizationBackend,
    WindowUnit,
    WordChunker,
    WordChunkerConfig,
)

# ---------------------------------------------------------------------------
# Path resolution — always relative to this file, not caller's CWD.
# ---------------------------------------------------------------------------

# _SCRIPT_DIR: Path = Path(__file__).resolve().parent
_SCRIPT_DIR = Path.cwd()
_DATA_DIR: Path = _SCRIPT_DIR / "data"
_OUTPUT_DIR: Path = _SCRIPT_DIR / "output"
_IMAGE_PATH: Path = _DATA_DIR / "echo_of_the_wise" / "AI_Generated_Image_1ix.png"

# Detect Jupyter environment once — used to guard IPython display utilities.
_IN_JUPYTER: bool = "ipykernel" in sys.modules

# ---------------------------------------------------------------------------
# Helper: build a pipeline and run it on the shared image path.
# ---------------------------------------------------------------------------


def _run(chunker: object, label: str) -> object:
    """Build a CorpusPipeline, run it, print head, return result.

    Parameters
    ----------
    chunker : object
        An instantiated chunker (WordChunker, SentenceChunker, etc.).
    label : str
        Human-readable label printed before the CSV head.

    Returns
    -------
    object
        The pipeline run result (carries ``output_path`` and ``input_path``).
    """
    pipeline = CorpusPipeline(
        chunker=chunker,
        output_path=_OUTPUT_DIR,
        export_format=ExportFormat.CSV,
    )
    result = pipeline.run(_IMAGE_PATH)

    print(f"\n{'=' * 60}")
    print(label)
    print("=" * 60)
    df = pd.read_csv(result.output_path)
    pprint(df.head().to_dict())
    return result

```

## 1. Word chunker — chunk\_by=”document”[#](#word-chunker-chunk-by-document "Link to this heading")

One chunk per image (all OCR text joined as a single document).
Demonstrates PORTER stemming + BUILTIN stopwords.

```
result_word_doc = _run(
    WordChunker(
        WordChunkerConfig(
            chunk_by="document",
            stemmer=StemmingBackend.PORTER,
            nltk_language="english",
            tokenizer=TokenizerBackend.NLTK,
            lemmatizer=LemmatizationBackend.NLTK_WORDNET,
            stopwords=StopwordSource.BUILTIN,
            lowercase=True,
            remove_punctuation=False,
            min_token_length=2,
            ngram_range=(1, 1),
        )
    ),
    label="Word chunker — chunk_by='document' (PORTER stemming)",
)

```
```
============================================================
Word chunker — chunk_by='document' (PORTER stemming)
============================================================
{'act': {0: nan},
 'bbox': {0: nan},
 'char_end': {0: 873},
 'char_start': {0: 0},
 'chunk_index': {0: 0},
 'chunking_strategy': {0: 'custom'},
 'collection_id': {0: nan},
 'confidence': {0: 0.6372},
 'content_hash': {0: '8db16ee6ad399ec05154ba6a29e2c8a6'},
 'doc_id': {0: 'cddbb4132e9ed33c'},
 'doi': {0: nan},
 'frame_index': {0: nan},
 'image_height': {0: 1024},
 'image_width': {0: 1024},
 'input_path': {0: 'AI_Generated_Image_1ix.png'},
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
 'source_title': {0: nan},
 'source_type': {0: 'image'},
 'stems': {0: nan},
 'text': {0: 'ire uursacesc caraga io 10 bi6dokew erna monet 1b aoe maa ett '
             'rco rsp eo ere memmnminsan erklaren kannst hast du creerona eat '
             'brome ccrlhi petesercn verstanden explain sa onan co oiag '
             'understand well enough ge vida nd tron sa ea ae nia apiotoréanc '
             'aaseavsp0¢ richard p. feynman albert einstein 384-322 bc 356-323 '
             'bc mieza macedonia 1918-1988 new york usa princeton pasadena '
             '99-1955 ulm princeton onsen venient cc ae crore mokoeoeri ae '
             'bartend aa ve es clenrecemnnc ahupiingao ka taea pombelcuic ssri '
             'lic pye matterhow much kaov word reach onli far person '
             'understand ugh glen lat cs lb cle lage ernest rutherford mevlana '
             '1871-1937 nelson nz cambridg warm ed balkh konya sato le scholar '
             'ace simplic mark os true knowledg focus pocus distract cenit '
             'innoc know world convers sto person intellig vision knowledg '
             "limit speaker limit listen mevlana 's wisdom 1207-1273 balkh "
             'konya'},
 'timecode_end': {0: nan},
 'timecode_start': {0: nan},
 'tokens': {0: nan},
 'total_frames': {0: 1},
 'url': {0: nan}}

```

## 2. Word chunker — chunk\_by=”sentence”[#](#word-chunker-chunk-by-sentence "Link to this heading")

One chunk per sentence, each tokenised separately.
Demonstrates SNOWBALL stemming on English text.

```
result_word_sent = _run(
    WordChunker(
        WordChunkerConfig(
            chunk_by="sentence",
            stemmer=StemmingBackend.SNOWBALL,
            nltk_language="english",
            tokenizer=TokenizerBackend.SIMPLE,
            lemmatizer=LemmatizationBackend.NLTK_WORDNET,
            stopwords=StopwordSource.BUILTIN,
            lowercase=True,
            remove_punctuation=False,
            min_token_length=2,
            ngram_range=(1, 1),
        )
    ),
    label="Word chunker — chunk_by='sentence' (SNOWBALL stemming)",
)

```
```
============================================================
Word chunker — chunk_by='sentence' (SNOWBALL stemming)
============================================================
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
 'input_path': {0: 'AI_Generated_Image_1ix.png',
                1: 'AI_Generated_Image_1ix.png',
                2: 'AI_Generated_Image_1ix.png',
                3: 'AI_Generated_Image_1ix.png'},
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

## 3. Sentence chunker (NLTK backend)[#](#sentence-chunker-nltk-backend "Link to this heading")

Splits OCR text into individual sentences; preserves raw text with offsets.

```
result_sentence = _run(
    SentenceChunker(
        SentenceChunkerConfig(
            backend=SentenceBackend.NLTK,
            nltk_language="english",
            strip_whitespace=True,
            include_offsets=True,
        )
    ),
    label="Sentence chunker (NLTK backend)",
)

```
```
============================================================
Sentence chunker (NLTK backend)
============================================================
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
 'input_path': {0: 'AI_Generated_Image_1ix.png',
                1: 'AI_Generated_Image_1ix.png',
                2: 'AI_Generated_Image_1ix.png',
                3: 'AI_Generated_Image_1ix.png',
                4: 'AI_Generated_Image_1ix.png'},
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

## 4. Fixed Window chunker — unit=CHARS[#](#fixed-window-chunker-unit-chars "Link to this heading")

Splits by character count regardless of word/sentence boundaries.

```
result_fw_chars = _run(
    FixedWindowChunker(
        FixedWindowChunkerConfig(
            unit=WindowUnit.CHARS,
            window_size=512,
            step_size=256,
            min_length=10,
        )
    ),
    label="Fixed Window chunker — unit=CHARS (window=512, step=256)",
)

```
```
============================================================
Fixed Window chunker — unit=CHARS (window=512, step=256)
============================================================
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
 'input_path': {0: 'AI_Generated_Image_1ix.png',
                1: 'AI_Generated_Image_1ix.png',
                2: 'AI_Generated_Image_1ix.png',
                3: 'AI_Generated_Image_1ix.png',
                4: 'AI_Generated_Image_1ix.png'},
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

## 5. Fixed Window chunker — unit=TOKENS[#](#fixed-window-chunker-unit-tokens "Link to this heading")

Splits by whitespace-delimited token count.
CJK text is auto-handled via character-level fallback.

```
result_fw_tokens = _run(
    FixedWindowChunker(
        FixedWindowChunkerConfig(
            unit=WindowUnit.TOKENS,
            window_size=64,
            step_size=32,
            min_length=10,
        )
    ),
    label="Fixed Window chunker — unit=TOKENS (window=64, step=32)",
)

```
```
============================================================
Fixed Window chunker — unit=TOKENS (window=64, step=32)
============================================================
{'act': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'bbox': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'char_end': {0: 352, 1: 560, 2: 746, 3: 752, 4: 1098},
 'char_start': {0: 6, 1: 230, 2: 405, 3: 435, 4: 777},
 'chunk_index': {0: 0, 1: 1, 2: 2, 3: 3, 4: 4},
 'chunking_strategy': {0: 'fixed_window',
                       1: 'fixed_window',
                       2: 'fixed_window',
                       3: 'fixed_window',
                       4: 'fixed_window'},
 'collection_id': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'confidence': {0: 0.6372, 1: 0.6372, 2: 0.6372, 3: 0.6372, 4: 0.6372},
 'content_hash': {0: '6ec041942787956ac51b4fe44674856b',
                  1: 'a4e5f3bc8d179a2e6a4e422d58e632e1',
                  2: '93c35634eb6d7e679f07d04429d07d85',
                  3: '7f2941cc0c1702425a21d38c343d735c',
                  4: '594f83ff7ed721cf3797cc954d9c6c70'},
 'doc_id': {0: '14578619132abab9',
            1: 'a52bde7151592af4',
            2: 'efd17d43a8360abc',
            3: '0b1428dfd3b9383e',
            4: '82c5d8c562da48a2'},
 'doi': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'frame_index': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'image_height': {0: 1024, 1: 1024, 2: 1024, 3: 1024, 4: 1024},
 'image_width': {0: 1024, 1: 1024, 2: 1024, 3: 1024, 4: 1024},
 'input_path': {0: 'AI_Generated_Image_1ix.png',
                1: 'AI_Generated_Image_1ix.png',
                2: 'AI_Generated_Image_1ix.png',
                3: 'AI_Generated_Image_1ix.png',
                4: 'AI_Generated_Image_1ix.png'},
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
 'source_title': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'source_type': {0: 'image', 1: 'image', 2: 'image', 3: 'image', 4: 'image'},
 'stems': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'text': {0: 'ire uursacesced Caraga io 10 Bi6doKew 8 Erna monet) 1b / aoe Maa '
             'ETT RCO RSP eo ere Memmnminsane(s) erklaren kannst, hast du '
             'Creerona eats Brome ccrlhy | | Petesercne | verstanden. > If you '
             'cannot explain » Sas ONAN Co oiag understand it well enough. ge '
             'VIDA ND TRON Sa eas aE Nia) ‘ApiotoréAnc + AASEavSp0¢ , Richard '
             'P. Feynman j Albert Einstein',
          1: '> If you cannot explain » Sas ONAN Co oiag understand it well '
             'enough. ge VIDA ND TRON Sa eas aE Nia) ‘ApiotoréAnc + AASEavSp0¢ '
             ', Richard P. Feynman j Albert Einstein 384-322 BC - 356-323 BC | '
             'Mieza, Macedonia 1918-1988 | New York, USA — Princeton — '
             'Pasadena 99-1955 | Ulm — Princeton ONSEN venient Cc ae | Crore '
             'mokoeoeri ae} A to',
          2: '384-322 BC - 356-323 BC | Mieza, Macedonia 1918-1988 | New York, '
             'USA — Princeton — Pasadena 99-1955 | Ulm — Princeton ONSEN '
             'venient Cc ae | Crore mokoeoeri ae} A to a bartender. aa ve, r '
             'es Clenrecemnnc ahupiingao ka taea POMBELCUICIC IN SSRI LIC Pye '
             'matterhow much you kaov your words reach only as far as the '
             'other person can understand, :',
          3: 'a bartender. aa ve, r es Clenrecemnnc ahupiingao ka taea '
             'POMBELCUICIC IN SSRI LIC Pye matterhow much you kaov your words '
             'reach only as far as the other person can understand, : ugh $9) '
             'glen a lat 9 CS lb cle Lage I y Ernest Rutherford F Mevlana '
             '1871-1937 | Nelson, NZ > Cambridge _—_ warm, Ed 3 | Balkh > '
             'Konya Sato r',
          4: 'ugh $9) glen a lat 9 CS lb cle Lage I y Ernest Rutherford F '
             'Mevlana 1871-1937 | Nelson, NZ > Cambridge _—_ warm, Ed 3 | '
             'Balkh > Konya Sato r le Scholar aCe Is Simplicity is the mark 7 '
             'Os true knowledge. “ (Focused) (Pocused) | (Distracted) cenit) '
             '(Innocent) You may know all the worlds, but the conversation '
             'sto, j at the'},
 'timecode_end': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'timecode_start': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'tokens': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan},
 'total_frames': {0: 1, 1: 1, 2: 1, 3: 1, 4: 1},
 'url': {0: nan, 1: nan, 2: nan, 3: nan, 4: nan}}

```

## Display the source image[#](#display-the-source-image "Link to this heading")

Renders inline in Jupyter; opens a matplotlib window otherwise.

```
print(f"\nSource image: {result_fw_tokens.input_path}")

if _IN_JUPYTER:
    # IPython display utilities — only import inside Jupyter to avoid
    # ImportError in plain Python / CI environments.
    from IPython.display import FileLink  # noqa: PLC0415

    display(FileLink(str(result_fw_tokens.input_path)))  # noqa: F821

# plt.figure(figsize=(8, 8), dpi=150)
# img = mpimg.imread(result_fw_tokens.input_path)
# plt.imshow(img)
# plt.axis("off")
# plt.title("Source image (OCR input)", fontsize=12)
# plt.tight_layout()
# plt.show()

```
```
Source image: /home/circleci/repo/galleries/examples/corpus/data/echo_of_the_wise/AI_Generated_Image_1ix.png

```

Tags: [model-type: classification](../../_tags/model-type-classification.html) [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 19.898 seconds)

[![Launch binder](../../_images/binder_badge_logo4.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_knowledge_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo4.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_knowledge_script.ipynb)

[`Download Jupyter notebook: plot_corpus_knowledge_script.ipynb`](../../_downloads/03d2342478eb1dcd2ccaabfc27527592/plot_corpus_knowledge_script.ipynb)

[`Download Python source code: plot_corpus_knowledge_script.py`](../../_downloads/87bcb576061c2ea06beafd9df4c81887/plot_corpus_knowledge_script.py)

[`Download zipped: plot_corpus_knowledge_script.zip`](../../_downloads/b1fa817840036a2ad9ee0f00f5a6f0a8/plot_corpus_knowledge_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[corpus WHO European Region local .zip with examples](plot_corpus_who_zip_script.html)

corpus WHO European Region local .zip with examples![](../../_images/sphx_glr_plot_corpus_who_youtube_shorts_script_thumb.png)

[corpus WHO European Region YouTube shorts with examples](plot_corpus_who_youtube_shorts_script.html)

corpus WHO European Region YouTube shorts with examples![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)