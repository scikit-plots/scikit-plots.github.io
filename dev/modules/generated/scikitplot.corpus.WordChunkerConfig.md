# WordChunkerConfig[#](#wordchunkerconfig "Link to this heading")

class scikitplot.corpus.WordChunkerConfig(**tokenizer=TokenizerBackend.SIMPLE**, **custom\_tokenizer=None**, **stemmer=StemmingBackend.NONE**, **custom\_stemmer=None**, **lemmatizer=LemmatizationBackend.NONE**, **custom\_lemmatizer=None**, **stopwords=StopwordSource.BUILTIN**, **custom\_stopwords=None**, **spacy\_model=None**, **nltk\_language='english'**, **lowercase=True**, **remove\_punctuation=True**, **strip\_unicode\_punctuation=False**, **remove\_numbers=False**, **min\_token\_length=2**, **max\_token\_length=None**, **ngram\_range=(1, 1)**, **chunk\_by='document'**, **include\_offsets=False**, **build\_gensim\_corpus=False**, **multilang\_config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_chunkers/_word.py#L294)[#](#scikitplot.corpus.WordChunkerConfig "Link to this definition")
:   Configuration for [`WordChunker`](scikitplot.corpus.WordChunker.html#scikitplot.corpus.WordChunker "scikitplot.corpus.WordChunker").

    Parameters:
    :   ****tokenizer****TokenizerBackend
        :   Word tokenisation strategy.

        ****custom\_tokenizer****TokenizerProtocol or Callable[[str], list[str]] or None
        :   User-supplied tokenizer used when `tokenizer=TokenizerBackend.CUSTOM`.
            Accepts any object satisfying [`TokenizerProtocol`](scikitplot.corpus.TokenizerProtocol.html#scikitplot.corpus.TokenizerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.TokenizerProtocol")
            **or** a plain callable. Callables are auto-wrapped in
            [`FunctionTokenizer`](scikitplot.corpus.FunctionTokenizer.html#scikitplot.corpus.FunctionTokenizer "scikitplot.corpus._chunkers._custom_tokenizer.FunctionTokenizer").
            Example libraries: MeCab, jieba, camel-tools, Stanza, HuggingFace.

        ****stemmer****StemmingBackend
        :   Stemming algorithm. Applied after lowercasing, before stopword
            removal. Mutually exclusive with **lemmatizer** (stemmer takes
            precedence when both are not `NONE`).

        ****custom\_stemmer****StemmerProtocol or Callable[[str], str] or None
        :   User-supplied stemmer used when `stemmer=StemmingBackend.CUSTOM`.

        ****lemmatizer****LemmatizationBackend
        :   Lemmatization backend. Applied when **stemmer** is `NONE`.

        ****custom\_lemmatizer****LemmatizerProtocol or Callable or None
        :   User-supplied lemmatizer used when
            `lemmatizer=LemmatizationBackend.CUSTOM`.

        ****stopwords****StopwordSource
        :   Source of stopword list used for filtering.

        ****custom\_stopwords****frozenset[str] or None
        :   Additional stopwords merged with the source list. Lowercasing
            is applied before membership testing, so case does not matter.

        ****spacy\_model****str or None
        :   spaCy model name. Required for `SPACY` tokenizer/lemmatizer.

        ****nltk\_language****str
        :   Language for NLTK stemmers and stopwords (e.g. `"english"`).

        ****lowercase****bool
        :   Convert all tokens to lowercase before processing.

        ****remove\_punctuation****bool
        :   Strip ASCII punctuation-only tokens.

        ****strip\_unicode\_punctuation****bool
        :   Strip **all** Unicode punctuation from tokens (superset of
            **remove\_punctuation**). Handles CJK punctuation (`。！？`),
            Arabic punctuation (`،؟`), and all other `unicodedata`
            `P*` category characters. When `True`, **remove\_punctuation**
            is implicitly satisfied and need not be set separately.

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
        * ****custom\_tokenizer**** ([**TokenizerProtocol**](scikitplot.corpus.TokenizerProtocol.html#scikitplot.corpus.TokenizerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.TokenizerProtocol") **|** [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]** **|** **None**)
        * ****stemmer**** ([**StemmingBackend**](scikitplot.corpus.StemmingBackend.html#scikitplot.corpus.StemmingBackend "scikitplot.corpus._chunkers._word.StemmingBackend"))
        * ****custom\_stemmer**** ([**StemmerProtocol**](scikitplot.corpus.StemmerProtocol.html#scikitplot.corpus.StemmerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.StemmerProtocol") **|** [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****lemmatizer**** ([**LemmatizationBackend**](scikitplot.corpus.LemmatizationBackend.html#scikitplot.corpus.LemmatizationBackend "scikitplot.corpus._chunkers._word.LemmatizationBackend"))
        * ****custom\_lemmatizer**** ([**LemmatizerProtocol**](scikitplot.corpus.LemmatizerProtocol.html#scikitplot.corpus.LemmatizerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.LemmatizerProtocol") **|** [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None****]****,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****stopwords**** ([**StopwordSource**](scikitplot.corpus.StopwordSource.html#scikitplot.corpus.StopwordSource "scikitplot.corpus._chunkers._word.StopwordSource"))
        * ****custom\_stopwords**** ([**frozenset**](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****spacy\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****nltk\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****lowercase**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****remove\_punctuation**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****strip\_unicode\_punctuation**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****remove\_numbers**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****min\_token\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_token\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****ngram\_range**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]**)
        * ****chunk\_by**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'document'****,** **'sentence'****]**)
        * ****include\_offsets**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****build\_gensim\_corpus**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****multilang\_config**** (**MultilangConfig** **|** **None**)

    Notes

    ****User note (multi-language):**** For CJK text, set
    `tokenizer=TokenizerBackend.CUSTOM` with a character-level or
    morpheme-level tokenizer (jieba, MeCab, kss). Set
    `remove_punctuation=False, strip_unicode_punctuation=True` to
    strip CJK punctuation without removing ideographs.

    For Arabic / Ottoman / Persian, use `tokenizer=TokenizerBackend.CUSTOM`
    with camel-tools or Stanza. Set `nltk_language="arabic"` when using
    NLTK stopwords.

    ****Developer note:**** Callable fields (`custom_tokenizer`,
    `custom_stemmer`, `custom_lemmatizer`) are excluded from `__hash__`
    and `__eq__` (`hash=False, compare=False`) so that two configs with
    identical settings but different callable objects are treated as equal
    for caching purposes. Compare callables explicitly when identity matters.

    build\_gensim\_corpus: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.WordChunkerConfig.build_gensim_corpus "Link to this definition")

    chunk\_by: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")['document', 'sentence'] = 'document'[#](#scikitplot.corpus.WordChunkerConfig.chunk_by "Link to this definition")

    custom\_lemmatizer: [LemmatizerProtocol](scikitplot.corpus.LemmatizerProtocol.html#scikitplot.corpus.LemmatizerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.LemmatizerProtocol") | [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")], [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.WordChunkerConfig.custom_lemmatizer "Link to this definition")

    custom\_stemmer: [StemmerProtocol](scikitplot.corpus.StemmerProtocol.html#scikitplot.corpus.StemmerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.StemmerProtocol") | [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")], [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.WordChunkerConfig.custom_stemmer "Link to this definition")

    custom\_stopwords: [frozenset](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.WordChunkerConfig.custom_stopwords "Link to this definition")

    custom\_tokenizer: [TokenizerProtocol](scikitplot.corpus.TokenizerProtocol.html#scikitplot.corpus.TokenizerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.TokenizerProtocol") | [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")], [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.WordChunkerConfig.custom_tokenizer "Link to this definition")

    include\_offsets: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.WordChunkerConfig.include_offsets "Link to this definition")

    lemmatizer: [LemmatizationBackend](scikitplot.corpus.LemmatizationBackend.html#scikitplot.corpus.LemmatizationBackend "scikitplot.corpus._chunkers._word.LemmatizationBackend") = 'none'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_chunkers/_word.py#L)[#](#scikitplot.corpus.WordChunkerConfig.lemmatizer "Link to this definition")

    lowercase: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.WordChunkerConfig.lowercase "Link to this definition")

    max\_token\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.WordChunkerConfig.max_token_length "Link to this definition")

    min\_token\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 2[#](#scikitplot.corpus.WordChunkerConfig.min_token_length "Link to this definition")

    multilang\_config: MultilangConfig | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.WordChunkerConfig.multilang_config "Link to this definition")
    :   Multilang feature flags (`MultilangConfig` or `None`).

        When set, each word chunk is enriched with a
        `chunk.metadata["multilang"]` dict containing script detection,
        semanteme info (tokens → SemantemeInfo list), grapheme counts,
        preprocessing trace, raw text, stopword counts, timing, and other
        provenance fields.

    ngram\_range: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"), [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")] = (1, 1)[#](#scikitplot.corpus.WordChunkerConfig.ngram_range "Link to this definition")

    nltk\_language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = 'english'[#](#scikitplot.corpus.WordChunkerConfig.nltk_language "Link to this definition")
    :   Language(s) for NLTK stopwords, Snowball stemmer, and NLTK tokenizer.

        Accepts:

        * `"en"` or `"english"` — single language (backward-compatible)
        * `["en", "ar"]` — multi-language: union stopwords for both
        * `None` — auto-detect from text using detect\_script

        All ISO 639-1 codes (`"en"`, `"ar"`, `"hi"`, …) and NLTK names
        (`"english"`, `"arabic"`, …) are accepted. Regional aliases such
        as `"chilean_spanish"`, `"new_zealand_english"`, and `"ottoman_turkish"`
        are resolved automatically. 200+ languages via `_language_data`.

    remove\_numbers: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.WordChunkerConfig.remove_numbers "Link to this definition")

    remove\_punctuation: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.WordChunkerConfig.remove_punctuation "Link to this definition")

    spacy\_model: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.WordChunkerConfig.spacy_model "Link to this definition")

    stemmer: [StemmingBackend](scikitplot.corpus.StemmingBackend.html#scikitplot.corpus.StemmingBackend "scikitplot.corpus._chunkers._word.StemmingBackend") = 'none'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_chunkers/_word.py#L)[#](#scikitplot.corpus.WordChunkerConfig.stemmer "Link to this definition")

    stopwords: [StopwordSource](scikitplot.corpus.StopwordSource.html#scikitplot.corpus.StopwordSource "scikitplot.corpus._chunkers._word.StopwordSource") = 'builtin'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_chunkers/_word.py#L)[#](#scikitplot.corpus.WordChunkerConfig.stopwords "Link to this definition")

    strip\_unicode\_punctuation: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.WordChunkerConfig.strip_unicode_punctuation "Link to this definition")

    tokenizer: [TokenizerBackend](scikitplot.corpus.TokenizerBackend.html#scikitplot.corpus.TokenizerBackend "scikitplot.corpus._chunkers._word.TokenizerBackend") = 'simple'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_chunkers/_word.py#L)[#](#scikitplot.corpus.WordChunkerConfig.tokenizer "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples