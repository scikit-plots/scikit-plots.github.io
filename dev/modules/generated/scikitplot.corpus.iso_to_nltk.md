# iso\_to\_nltk[#](#iso-to-nltk "Link to this heading")

scikitplot.corpus.iso\_to\_nltk(**code**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/6d916ad/scikitplot/corpus/_chunkers/_language_data.py#L1220)[#](#scikitplot.corpus.iso_to_nltk "Link to this definition")
:   Resolve an ISO 639-1/639-3 code to a canonical NLTK language name.

    Parameters:
    :   ****code****str
        :   ISO 639-1 two-letter code (e.g. `"en"`, `"ar"`) or ISO 639-3
            three-letter code (e.g. `"grc"` for Ancient Greek), or already-
            canonical NLTK name (e.g. `"english"`). Case-insensitive.

    Returns:
    :   str
        :   Canonical lowercase NLTK-compatible language name. Falls back to
            **code** itself if the code is not found in the registry (so passing
            `"english"` returns `"english"` unchanged).

    Parameters:
    :   ****code**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    Examples

    Try it in your browser!
    ```
    >>> iso_to_nltk("en")
    'english'
    >>> iso_to_nltk("ar")
    'arabic'
    >>> iso_to_nltk("english")
    'english'
    >>> iso_to_nltk("grc")
    'ancient_greek'
    >>> iso_to_nltk("zz")  # unknown → returned as-is
    'zz'

    ```
    Go BackOpen In Tab