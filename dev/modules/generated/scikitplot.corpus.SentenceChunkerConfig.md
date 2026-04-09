# SentenceChunkerConfig[#](#sentencechunkerconfig "Link to this heading")

class scikitplot.corpus.SentenceChunkerConfig(**backend=SentenceBackend.REGEX**, **min\_length=10**, **overlap=0**, **spacy\_model=None**, **nltk\_language='english'**, **strip\_whitespace=True**, **include\_offsets=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_chunkers/_sentence.py#L155)[#](#scikitplot.corpus.SentenceChunkerConfig "Link to this definition")
:   Configuration for [`SentenceChunker`](scikitplot.corpus.SentenceChunker.html#scikitplot.corpus.SentenceChunker "scikitplot.corpus.SentenceChunker").

    Parameters:
    :   ****backend****SentenceBackend
        :   Splitting strategy. `REGEX` has no extra dependencies.
            `NLTK` requires the **punkt** model.
            `SPACY` requires a loaded model name via **spacy\_model**.

        ****min\_length****int
        :   Minimum character length for a sentence to be kept.

        ****overlap****int
        :   Number of preceding sentences to prepend as context.

        ****spacy\_model****str or None
        :   Spacy model name, e.g. `"en_core_web_sm"`.
            Required when **backend** is `SPACY`.

        ****nltk\_language****str
        :   Language string forwarded to `nltk.tokenize.sent_tokenize`.

        ****strip\_whitespace****bool
        :   Strip leading/trailing whitespace from each sentence.

        ****include\_offsets****bool
        :   Compute character offsets (`start_char`, `end_char`).

    Parameters:
    :   * ****backend**** ([**SentenceBackend**](scikitplot.corpus.SentenceBackend.html#scikitplot.corpus.SentenceBackend "scikitplot.corpus._chunkers._sentence.SentenceBackend"))
        * ****min\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****overlap**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****spacy\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****nltk\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****strip\_whitespace**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****include\_offsets**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    backend: [SentenceBackend](scikitplot.corpus.SentenceBackend.html#scikitplot.corpus.SentenceBackend "scikitplot.corpus._chunkers._sentence.SentenceBackend") = 'regex'[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_chunkers/_sentence.py#L)[#](#scikitplot.corpus.SentenceChunkerConfig.backend "Link to this definition")

    include\_offsets: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.SentenceChunkerConfig.include_offsets "Link to this definition")

    min\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 10[#](#scikitplot.corpus.SentenceChunkerConfig.min_length "Link to this definition")

    nltk\_language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'english'[#](#scikitplot.corpus.SentenceChunkerConfig.nltk_language "Link to this definition")

    overlap: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.corpus.SentenceChunkerConfig.overlap "Link to this definition")

    spacy\_model: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.SentenceChunkerConfig.spacy_model "Link to this definition")

    strip\_whitespace: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.SentenceChunkerConfig.strip_whitespace "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](../../auto_examples/corpus/plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples![](../../_images/sphx_glr_plot_corpus_who_youtube_shorts_script_thumb.png)

[corpus WHO European Region YouTube shorts with examples](../../auto_examples/corpus/plot_corpus_who_youtube_shorts_script.html)

corpus WHO European Region YouTube shorts with examples![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[corpus WHO European Region local .zip with examples](../../auto_examples/corpus/plot_corpus_who_zip_script.html)

corpus WHO European Region local .zip with examples