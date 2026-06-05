# nltk\_to\_iso[#](#nltk-to-iso "Link to this heading")

scikitplot.corpus.nltk\_to\_iso(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/6d916ad/scikitplot/corpus/_chunkers/_language_data.py#L1261)[#](#scikitplot.corpus.nltk_to_iso "Link to this definition")
:   Resolve a canonical NLTK language name to its primary ISO 639-1 code.

    Parameters:
    :   ****name****str
        :   NLTK-style language name (e.g. `"english"`).

    Returns:
    :   str
        :   ISO 639-1 two-letter code, or **name** if not found.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    Examples

    Try it in your browser!
    ```
    >>> nltk_to_iso("english")
    'en'
    >>> nltk_to_iso("arabic")
    'ar'

    ```
    Go BackOpen In Tab