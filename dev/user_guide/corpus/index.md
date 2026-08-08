# Corpus User Guide[#](#corpus-user-guide "Link to this heading")

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