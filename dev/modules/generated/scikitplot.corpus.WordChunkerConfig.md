# WordChunkerConfig[#](#wordchunkerconfig "Link to this heading")

class scikitplot.corpus.WordChunkerConfig(**tokenizer=TokenizerBackend.SIMPLE**, **stemmer=StemmingBackend.NONE**, **lemmatizer=LemmatizationBackend.NONE**, **stopwords=StopwordSource.BUILTIN**, **spacy\_model=None**, **nltk\_language='english'**, **lowercase=True**, **remove\_punctuation=True**, **remove\_numbers=False**, **min\_token\_length=2**, **max\_token\_length=None**, **ngram\_range=(1, 1)**, **chunk\_by='document'**, **include\_offsets=False**, **build\_gensim\_corpus=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_chunkers/_word.py#L201)[#](#scikitplot.corpus.WordChunkerConfig "Link to this definition")
:   Configuration for [`WordChunker`](scikitplot.corpus.WordChunker.html#scikitplot.corpus.WordChunker "scikitplot.corpus.WordChunker").

    Parameters:
    :   ****tokenizer****TokenizerBackend
        :   Word tokenisation strategy.

        ****stemmer****StemmingBackend
        :   Stemming algorithm. Applied after lowercasing, before stopword
            removal. Mutually exclusive with **lemmatizer** (stemmer takes
            precedence when both are not `NONE`).

        ****lemmatizer****LemmatizationBackend
        :   Lemmatization backend. Applied when **stemmer** is `NONE`.

        ****stopwords****StopwordSource
        :   Source of stopword list used for filtering.

        ****spacy\_model****str or None
        :   spaCy model name. Required for `SPACY` tokenizer/lemmatizer.

        ****nltk\_language****str
        :   Language for NLTK stemmers and stopwords (e.g. `"english"`).

        ****lowercase****bool
        :   Convert all tokens to lowercase before processing.

        ****remove\_punctuation****bool
        :   Strip punctuation-only tokens.

        ****remove\_numbers****bool
        :   Drop tokens that are purely numeric.

        ****min\_token\_length****int
        :   Drop tokens shorter than this (after normalisation).

        ****max\_token\_length****int or None
        :   Drop tokens longer than this. `None` disables the limit.

        ****ngram\_range****tuple[int, int]
        :   Inclusive `(min_n, max_n)` n-gram range to extract alongside
            unigrams. `(1, 1)` disables n-gram extraction.

        ****chunk\_by****str
        :   Granularity of output `Chunk` objects.
            `"document"` returns one chunk per input text.
            `"sentence"` splits on sentence boundaries first, then
            processes each sentence as a separate chunk.

        ****include\_offsets****bool
        :   Store character offsets in each chunk.

        ****build\_gensim\_corpus****bool
        :   If `True`, attach a `gensim`-compatible `(token_id, count)`
            BoW representation to each chunk’s metadata (requires Gensim).

    Parameters:
    :   * ****tokenizer**** ([**TokenizerBackend**](scikitplot.corpus.TokenizerBackend.html#scikitplot.corpus.TokenizerBackend "scikitplot.corpus._chunkers._word.TokenizerBackend"))
        * ****stemmer**** ([**StemmingBackend**](scikitplot.corpus.StemmingBackend.html#scikitplot.corpus.StemmingBackend "scikitplot.corpus._chunkers._word.StemmingBackend"))
        * ****lemmatizer**** ([**LemmatizationBackend**](scikitplot.corpus.LemmatizationBackend.html#scikitplot.corpus.LemmatizationBackend "scikitplot.corpus._chunkers._word.LemmatizationBackend"))
        * ****stopwords**** ([**StopwordSource**](scikitplot.corpus.StopwordSource.html#scikitplot.corpus.StopwordSource "scikitplot.corpus._chunkers._word.StopwordSource"))
        * ****spacy\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****nltk\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****lowercase**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****remove\_punctuation**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****remove\_numbers**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****min\_token\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_token\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****ngram\_range**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]**)
        * ****chunk\_by**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****include\_offsets**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****build\_gensim\_corpus**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    build\_gensim\_corpus: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.WordChunkerConfig.build_gensim_corpus "Link to this definition")

    chunk\_by: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'document'[#](#scikitplot.corpus.WordChunkerConfig.chunk_by "Link to this definition")

    include\_offsets: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.WordChunkerConfig.include_offsets "Link to this definition")

    lemmatizer: [LemmatizationBackend](scikitplot.corpus.LemmatizationBackend.html#scikitplot.corpus.LemmatizationBackend "scikitplot.corpus._chunkers._word.LemmatizationBackend") = 'none'[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_chunkers/_word.py#L)[#](#scikitplot.corpus.WordChunkerConfig.lemmatizer "Link to this definition")

    lowercase: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.WordChunkerConfig.lowercase "Link to this definition")

    max\_token\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.WordChunkerConfig.max_token_length "Link to this definition")

    min\_token\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 2[#](#scikitplot.corpus.WordChunkerConfig.min_token_length "Link to this definition")

    ngram\_range: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"), [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")] = (1, 1)[#](#scikitplot.corpus.WordChunkerConfig.ngram_range "Link to this definition")

    nltk\_language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'english'[#](#scikitplot.corpus.WordChunkerConfig.nltk_language "Link to this definition")

    remove\_numbers: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.WordChunkerConfig.remove_numbers "Link to this definition")

    remove\_punctuation: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.WordChunkerConfig.remove_punctuation "Link to this definition")

    spacy\_model: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.WordChunkerConfig.spacy_model "Link to this definition")

    stemmer: [StemmingBackend](scikitplot.corpus.StemmingBackend.html#scikitplot.corpus.StemmingBackend "scikitplot.corpus._chunkers._word.StemmingBackend") = 'none'[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_chunkers/_word.py#L)[#](#scikitplot.corpus.WordChunkerConfig.stemmer "Link to this definition")

    stopwords: [StopwordSource](scikitplot.corpus.StopwordSource.html#scikitplot.corpus.StopwordSource "scikitplot.corpus._chunkers._word.StopwordSource") = 'builtin'[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_chunkers/_word.py#L)[#](#scikitplot.corpus.WordChunkerConfig.stopwords "Link to this definition")

    tokenizer: [TokenizerBackend](scikitplot.corpus.TokenizerBackend.html#scikitplot.corpus.TokenizerBackend "scikitplot.corpus._chunkers._word.TokenizerBackend") = 'simple'[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_chunkers/_word.py#L)[#](#scikitplot.corpus.WordChunkerConfig.tokenizer "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples