# resolve\_stopwords[#](#resolve-stopwords "Link to this heading")

scikitplot.corpus.resolve\_stopwords(**lang**, **\***, **default='english'**, **extra=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_chunkers/_language_data.py#L1353)[#](#scikitplot.corpus.resolve_stopwords "Link to this definition")
:   Return a frozenset of stopwords for one or more languages.

    Looks up each language in [`BUILTIN_LANG_STOPWORDS`](scikitplot.corpus.BUILTIN_LANG_STOPWORDS.html#scikitplot.corpus.BUILTIN_LANG_STOPWORDS "scikitplot.corpus.BUILTIN_LANG_STOPWORDS"). Languages
    that are in NLTK’s stopwords corpus but absent from the built-in table
    are silently skipped (callers should use NLTK directly for those).

    Parameters:
    :   ****lang****str or list[str] or None
        :   Language specifier. Accepts the same forms as [`coerce_language`](scikitplot.corpus.coerce_language.html#scikitplot.corpus.coerce_language "scikitplot.corpus.coerce_language").

        ****default****str, optional
        :   Fallback language when **lang** is `None`.

        ****extra****frozenset[str] or None, optional
        :   Additional custom stopwords to union with the result.

    Returns:
    :   frozenset[str]
        :   Union of stopwords across all requested languages plus **extra**.

    Parameters:
    :   * ****lang**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****default**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****extra**** ([**frozenset**](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Return type:
    :   [frozenset](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    Examples

    Try it in your browser!
    ```
    >>> "the" in resolve_stopwords("english")
    True
    >>> words = resolve_stopwords(["en", "hi"])
    >>> "और" in words and "the" in words
    True
    >>> resolve_stopwords(None, extra=frozenset(["foo"]))
    frozenset({'foo', ...})

    ```
    Go BackOpen In Tab