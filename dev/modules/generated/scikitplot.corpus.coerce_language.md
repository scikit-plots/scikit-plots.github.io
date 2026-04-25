# coerce\_language[#](#coerce-language "Link to this heading")

scikitplot.corpus.coerce\_language(**lang**, **\***, **default='english'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_chunkers/_language_data.py#L1285)[#](#scikitplot.corpus.coerce_language "Link to this definition")
:   Normalise any language specifier into a list of canonical NLTK names.

    Accepts all three forms used by chunkers and the enricher:

    * `None` → `[default]` (caller passes text for auto-detect separately)
    * `"en"` → `["english"]`
    * `"english"` → `["english"]`
    * `["en", "ar"]` → `["english", "arabic"]`
    * `["english"]` → `["english"]`

    Parameters:
    :   ****lang****str or list[str] or None
        :   Language specifier.

        ****default****str, optional
        :   Canonical NLTK name to use when **lang** is `None`.
            Default `"english"`.

    Returns:
    :   list[str]
        :   Non-empty list of canonical lowercase NLTK language names.
            Duplicates are removed while preserving order.

    Raises:
    :   TypeError
        :   If **lang** is not a `str`, `list`, or `None`.

        ValueError
        :   If **lang** is an empty list.

    Parameters:
    :   * ****lang**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****default**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    Examples

    Try it in your browser!
    ```
    >>> coerce_language(None)
    ['english']
    >>> coerce_language("en")
    ['english']
    >>> coerce_language(["en", "ar"])
    ['english', 'arabic']
    >>> coerce_language("english")
    ['english']

    ```
    Go BackOpen In Tab