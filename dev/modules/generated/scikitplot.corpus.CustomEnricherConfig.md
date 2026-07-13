# CustomEnricherConfig[#](#customenricherconfig "Link to this heading")

class scikitplot.corpus.CustomEnricherConfig(**custom\_tokenizer=None**, **custom\_lemmatizer=None**, **custom\_stemmer=None**, **custom\_keyword\_extractor=None**, **custom\_stopwords=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_custom_hooks.py#L540)[#](#scikitplot.corpus.CustomEnricherConfig "Link to this definition")
:   Custom backend callables for [`CustomNLPEnricher`](scikitplot.corpus.CustomNLPEnricher.html#scikitplot.corpus.CustomNLPEnricher "scikitplot.corpus.CustomNLPEnricher").

    Every field is optional. When set it ****replaces**** the corresponding
    built-in backend in `NLPEnricher`.
    `None` means “use the built-in backend from `EnricherConfig`”.

    Parameters:
    :   ****custom\_tokenizer****callable or None, optional
        :   Replaces the built-in tokenizer. Signature:

            ```
            def custom_tokenizer(text: str) -> list[str]: ...

            ```

        ****custom\_lemmatizer****callable or None, optional
        :   Replaces the built-in lemmatizer. Signature:

            ```
            def custom_lemmatizer(tokens: list[str]) -> list[str]: ...

            ```

        ****custom\_stemmer****callable or None, optional
        :   Replaces the built-in stemmer. Signature:

            ```
            def custom_stemmer(tokens: list[str]) -> list[str]: ...

            ```

        ****custom\_keyword\_extractor****callable or None, optional
        :   Replaces the built-in keyword extractor. Signature:

            ```
            def custom_keyword_extractor(
                text: str,
                tokens: list[str],
            ) -> list[str]: ...

            ```

        ****custom\_stopwords****frozenset[str] or None, optional
        :   Replaces the built-in stopword set used by `_filter_tokens`.
            When `None` the built-in NLTK / fallback set is used.

    Parameters:
    :   * ****custom\_tokenizer**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]** **|** **None**)
        * ****custom\_lemmatizer**** (**Callable****[****[**[**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]** **|** **None**)
        * ****custom\_stemmer**** (**Callable****[****[**[**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]** **|** **None**)
        * ****custom\_keyword\_extractor**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]** **|** **None**)
        * ****custom\_stopwords**** ([**frozenset**](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Notes

    ****User note:**** Pass a [`CustomEnricherConfig`](#scikitplot.corpus.CustomEnricherConfig "scikitplot.corpus.CustomEnricherConfig") together with the
    standard `EnricherConfig` to
    [`CustomNLPEnricher`](scikitplot.corpus.CustomNLPEnricher.html#scikitplot.corpus.CustomNLPEnricher "scikitplot.corpus.CustomNLPEnricher"). Built-in fields (`tokenizer`,
    `lemmatizer`, etc.) in `EnricherConfig`
    are still honoured for any stage that has no custom callable.

    Examples

    Try it in your browser!

    Replace keyword extraction with a KeyBERT-based extractor:

    ```
    from keybert import KeyBERT

    _kb = KeyBERT()

    def kb_extractor(text, tokens):
        return [kw for kw, _ in _kb.extract_keywords(text, top_n=10)]

    ccfg = CustomEnricherConfig(custom_keyword_extractor=kb_extractor)
    enricher = CustomNLPEnricher(custom_config=ccfg)

    ```
    Go BackOpen In Tab

    custom\_keyword\_extractor: Callable[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]], [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomEnricherConfig.custom_keyword_extractor "Link to this definition")

    custom\_lemmatizer: Callable[[[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]], [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomEnricherConfig.custom_lemmatizer "Link to this definition")

    custom\_stemmer: Callable[[[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]], [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomEnricherConfig.custom_stemmer "Link to this definition")

    custom\_stopwords: [frozenset](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomEnricherConfig.custom_stopwords "Link to this definition")

    custom\_tokenizer: Callable[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")], [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomEnricherConfig.custom_tokenizer "Link to this definition")