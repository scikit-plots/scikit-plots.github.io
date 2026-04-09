# EnricherConfig[#](#enricherconfig "Link to this heading")

class scikitplot.corpus.EnricherConfig(**tokenizer='simple'**, **spacy\_model='en\_core\_web\_sm'**, **lemmatizer=None**, **stemmer=None**, **stemmer\_language='english'**, **keyword\_extractor='frequency'**, **max\_keywords=20**, **lowercase\_tokens=True**, **remove\_stopwords=True**, **min\_token\_length=2**, **remove\_punctuation=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_enrichers/_nlp_enricher.py#L55)[#](#scikitplot.corpus.EnricherConfig "Link to this definition")
:   Configuration for [`NLPEnricher`](scikitplot.corpus.NLPEnricher.html#scikitplot.corpus.NLPEnricher "scikitplot.corpus.NLPEnricher").

    Parameters:
    :   ****tokenizer****str
        :   Tokenisation backend: `"simple"` (regex `\\w+`),
            `"nltk"` (`nltk.tokenize.word_tokenize`), or
            `"spacy"` (spaCy tokenizer).

        ****spacy\_model****str
        :   spaCy model name, used when `tokenizer="spacy"` or
            `lemmatizer="spacy"`.

        ****lemmatizer****str or None
        :   Lemmatisation backend: `"spacy"`, `"nltk"`
            (`WordNetLemmatizer`), or `None` (skip).

        ****stemmer****str or None
        :   Stemming backend: `"porter"`, `"snowball"`,
            `"lancaster"`, or `None` (skip).

        ****stemmer\_language****str
        :   Language for Snowball stemmer.

        ****keyword\_extractor****str or None
        :   Keyword extraction backend: `"frequency"` (top-N by
            term frequency), `"yake"`, `"keybert"`, or `None`
            (skip).

        ****max\_keywords****int
        :   Maximum keywords to extract per document.

        ****lowercase\_tokens****bool
        :   Lowercase all tokens before further processing.

        ****remove\_stopwords****bool
        :   Remove stopwords. Uses NLTK’s English stopword list when
            available, otherwise a small built-in set.

        ****min\_token\_length****int
        :   Discard tokens shorter than this (after lowercasing).

        ****remove\_punctuation****bool
        :   Remove tokens that are entirely punctuation.

    Parameters:
    :   * ****tokenizer**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****spacy\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****lemmatizer**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****stemmer**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****stemmer\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****keyword\_extractor**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****max\_keywords**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****lowercase\_tokens**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****remove\_stopwords**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****min\_token\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****remove\_punctuation**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Notes

    ****User note:**** For RAG pipelines, `tokenizer="simple"` with
    `keyword_extractor="frequency"` is usually sufficient.
    For linguistic research, use `"spacy"` with
    `lemmatizer="spacy"` for best accuracy.

    keyword\_extractor: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = 'frequency'[#](#scikitplot.corpus.EnricherConfig.keyword_extractor "Link to this definition")

    lemmatizer: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.EnricherConfig.lemmatizer "Link to this definition")

    lowercase\_tokens: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.EnricherConfig.lowercase_tokens "Link to this definition")

    max\_keywords: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 20[#](#scikitplot.corpus.EnricherConfig.max_keywords "Link to this definition")

    min\_token\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 2[#](#scikitplot.corpus.EnricherConfig.min_token_length "Link to this definition")

    remove\_punctuation: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.EnricherConfig.remove_punctuation "Link to this definition")

    remove\_stopwords: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.EnricherConfig.remove_stopwords "Link to this definition")

    spacy\_model: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'en\_core\_web\_sm'[#](#scikitplot.corpus.EnricherConfig.spacy_model "Link to this definition")

    stemmer: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.EnricherConfig.stemmer "Link to this definition")

    stemmer\_language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'english'[#](#scikitplot.corpus.EnricherConfig.stemmer_language "Link to this definition")

    tokenizer: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'simple'[#](#scikitplot.corpus.EnricherConfig.tokenizer "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](../../auto_examples/corpus/plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples