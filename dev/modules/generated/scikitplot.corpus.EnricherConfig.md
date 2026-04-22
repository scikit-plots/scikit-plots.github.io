# EnricherConfig[#](#enricherconfig "Link to this heading")

class scikitplot.corpus.EnricherConfig(**language=None**, **tokenizer='simple'**, **custom\_tokenizer=None**, **spacy\_model='en\_core\_web\_sm'**, **lemmatizer=None**, **custom\_lemmatizer=None**, **stemmer=None**, **custom\_stemmer=None**, **stemmer\_language='english'**, **keyword\_extractor='frequency'**, **keyword\_extractor\_kwargs=None**, **max\_keywords=20**, **save\_token\_scores=False**, **lowercase\_tokens=True**, **remove\_stopwords=True**, **extra\_stopwords=None**, **min\_token\_length=2**, **remove\_punctuation=True**, **strip\_unicode\_punctuation=False**, **pos\_tags=False**, **ner\_entities=False**, **sentence\_count=False**, **char\_count=False**, **type\_token\_ratio=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/corpus/_enrichers/_nlp_enricher.py#L239)[#](#scikitplot.corpus.EnricherConfig "Link to this definition")
:   Configuration for [`NLPEnricher`](scikitplot.corpus.NLPEnricher.html#scikitplot.corpus.NLPEnricher "scikitplot.corpus.NLPEnricher").

    Parameters:
    :   ****language****str or list[str] or None, optional
        :   Language(s) to use for stopword loading and tokenisation.
            Accepts:

            * `None` — auto-detect per document from the text content
            * `"en"` — ISO 639-1 two-letter code, resolved to NLTK name
            * `"english"` — NLTK-style full language name
            * `["en", "ar"]` — multi-language: union stopwords for both

            Supports 200+ world languages via `_language_data`.
            See `coerce_language` for the full resolution
            chain, including regional aliases (`"chilean_spanish"` → `"spanish"`,
            `"new_zealand_english"` → `"english"`, etc.).

        ****tokenizer****str
        :   Tokenisation backend:

            * `"simple"` (default) — regex `\\w+` (Unicode-aware, no deps)
            * `"nltk"` — `nltk.tokenize.word_tokenize`
            * `"spacy"` — spaCy tokenizer (requires `spacy_model`)
            * `"custom"` — use `custom_tokenizer`

        ****custom\_tokenizer****callable or TokenizerProtocol or None
        :   User tokenizer for `tokenizer="custom"`. Accepts any object with a
            `tokenize(text: str) -> list[str]` method, or a plain callable.
            Useful for MeCab (Japanese), jieba (Chinese), camel-tools (Arabic),
            Stanza (100+ languages), HuggingFace tokenizers, etc.

        ****spacy\_model****str
        :   spaCy model name, used for `tokenizer="spacy"` or
            `lemmatizer="spacy"` or `pos_tags=True` or `ner_entities=True`.
            Example: `"en_core_web_sm"`.

        ****lemmatizer****str or None
        :   Lemmatisation backend: `"spacy"`, `"nltk"`, `"custom"`, or
            `None` (skip).

        ****custom\_lemmatizer****callable or LemmatizerProtocol or None
        :   User lemmatizer for `lemmatizer="custom"`. Must have a
            `lemmatize(word: str, pos: str | None = None) -> str` method,
            or be a plain callable.

        ****stemmer****str or None
        :   Stemming backend: `"porter"`, `"snowball"`, `"lancaster"`,
            `"custom"`, or `None` (skip).

        ****custom\_stemmer****callable or StemmerProtocol or None
        :   User stemmer for `stemmer="custom"`. Must have a
            `stem(word: str) -> str` method, or be a plain callable.

        ****stemmer\_language****str or list[str] or None
        :   Language(s) for the Snowball stemmer. Accepts the same forms as
            **language**. Defaults to `"english"`.

        ****keyword\_extractor****str or None
        :   Keyword extraction backend: `"frequency"`, `"tfidf"`,
            `"yake"`, `"keybert"`, or `None` (skip).

            * `"frequency"` — top-N by raw term count (no deps)
            * `"tfidf"` — top-N by within-document TF-IDF score (no deps)
            * `"yake"` — unsupervised statistical (requires `yake`)
            * `"keybert"` — embedding-based (requires `keybert`)

        ****keyword\_extractor\_kwargs****dict or None
        :   Extra kwargs forwarded to the keyword extractor (e.g. YAKE
            language setting, KeyBERT model name).

        ****max\_keywords****int
        :   Maximum number of keywords to extract per document.

        ****save\_token\_scores****bool
        :   When `True` and `keyword_extractor="tfidf"`, store per-token
            TF-IDF scores as a `token_scores: dict` in document metadata.

        ****lowercase\_tokens****bool
        :   Lowercase all tokens before further processing.

        ****remove\_stopwords****bool
        :   Remove stopwords. Stopword language(s) follow **language**.

        ****extra\_stopwords****frozenset[str] or None
        :   Additional custom stopwords merged with the detected/specified list.

        ****min\_token\_length****int
        :   Discard tokens shorter than this (after lowercasing).

        ****remove\_punctuation****bool
        :   Remove tokens that are entirely ASCII punctuation.

        ****strip\_unicode\_punctuation****bool
        :   Remove Unicode punctuation characters from token text (superset of
            **remove\_punctuation**; handles CJK `。！？`, Arabic `،؟`, etc.).

        ****pos\_tags****bool
        :   When `True`, populate a `pos_tags` list in document metadata
            (requires `tokenizer="spacy"` or `lemmatizer="spacy"`).

        ****ner\_entities****bool
        :   When `True`, populate a `ner_entities` list in document metadata
            (requires `tokenizer="spacy"` or `lemmatizer="spacy"`).

        ****sentence\_count****bool
        :   When `True`, compute and store the sentence count in document
            metadata (uses multi-script regex, no external deps).

        ****char\_count****bool
        :   When `True`, store raw character count in document metadata.

        ****type\_token\_ratio****bool
        :   When `True`, store lexical diversity (unique/total tokens) in
            document metadata. Useful for LLM context quality assessment.

    Parameters:
    :   * ****language**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****tokenizer**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****custom\_tokenizer**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****spacy\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****lemmatizer**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****custom\_lemmatizer**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****stemmer**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****custom\_stemmer**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****stemmer\_language**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****keyword\_extractor**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****keyword\_extractor\_kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****max\_keywords**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****save\_token\_scores**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****lowercase\_tokens**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****remove\_stopwords**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****extra\_stopwords**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****min\_token\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****remove\_punctuation**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****strip\_unicode\_punctuation**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****pos\_tags**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****ner\_entities**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****sentence\_count**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****char\_count**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****type\_token\_ratio**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Notes

    ****User note:**** For RAG pipelines:

    * `tokenizer="simple"` + `keyword_extractor="tfidf"` + no
      stemmer/lemmatizer is fast and works for all Latin-script languages.
    * For multilingual RAG: set `language=["en", "ar"]` and the enricher
      will union stopwords for both languages automatically.
    * For linguistic research: `tokenizer="spacy"` + `lemmatizer="spacy"`
      + `pos_tags=True` + `ner_entities=True` gives the richest output.
    * For LLM fine-tuning data: enable `sentence_count`, `char_count`,
      `type_token_ratio`, and `save_token_scores` to add quality signals
      to each document.

    ****Developer note:**** All NLP backends are lazy-loaded and cached on
    `NLPEnricher._*` attributes. The class is NOT thread-safe. Use
    separate instances per thread.

    char\_count: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.EnricherConfig.char_count "Link to this definition")

    custom\_lemmatizer: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.corpus.EnricherConfig.custom_lemmatizer "Link to this definition")

    custom\_stemmer: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.corpus.EnricherConfig.custom_stemmer "Link to this definition")

    custom\_tokenizer: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.corpus.EnricherConfig.custom_tokenizer "Link to this definition")

    extra\_stopwords: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.corpus.EnricherConfig.extra_stopwords "Link to this definition")

    keyword\_extractor: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = 'frequency'[#](#scikitplot.corpus.EnricherConfig.keyword_extractor "Link to this definition")

    keyword\_extractor\_kwargs: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.corpus.EnricherConfig.keyword_extractor_kwargs "Link to this definition")

    language: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.corpus.EnricherConfig.language "Link to this definition")

    lemmatizer: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.EnricherConfig.lemmatizer "Link to this definition")

    lowercase\_tokens: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.EnricherConfig.lowercase_tokens "Link to this definition")

    max\_keywords: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 20[#](#scikitplot.corpus.EnricherConfig.max_keywords "Link to this definition")

    min\_token\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 2[#](#scikitplot.corpus.EnricherConfig.min_token_length "Link to this definition")

    ner\_entities: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.EnricherConfig.ner_entities "Link to this definition")

    pos\_tags: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.EnricherConfig.pos_tags "Link to this definition")

    remove\_punctuation: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.EnricherConfig.remove_punctuation "Link to this definition")

    remove\_stopwords: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.EnricherConfig.remove_stopwords "Link to this definition")

    save\_token\_scores: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.EnricherConfig.save_token_scores "Link to this definition")

    sentence\_count: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.EnricherConfig.sentence_count "Link to this definition")

    spacy\_model: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'en\_core\_web\_sm'[#](#scikitplot.corpus.EnricherConfig.spacy_model "Link to this definition")

    stemmer: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.EnricherConfig.stemmer "Link to this definition")

    stemmer\_language: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = 'english'[#](#scikitplot.corpus.EnricherConfig.stemmer_language "Link to this definition")

    strip\_unicode\_punctuation: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.EnricherConfig.strip_unicode_punctuation "Link to this definition")

    tokenizer: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'simple'[#](#scikitplot.corpus.EnricherConfig.tokenizer "Link to this definition")

    type\_token\_ratio: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.EnricherConfig.type_token_ratio "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](../../auto_examples/corpus/plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples