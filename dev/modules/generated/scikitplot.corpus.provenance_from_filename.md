# provenance\_from\_filename[#](#provenance-from-filename "Link to this heading")

scikitplot.corpus.provenance\_from\_filename(**filename**, **source\_type=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_metadata/_metadata.py#L502)[#](#scikitplot.corpus.provenance_from_filename "Link to this definition")
:   Extract provenance metadata from a source filename using heuristics.

    Designed for corpora organised by the Project Gutenberg naming
    convention: `Surname_Firstname_Title_Year.ext` or
    `Author-Title.ext`. Falls back gracefully — always returns a dict,
    even if no patterns are detected.

    Parameters:
    :   ****filename****str
        :   Source filename (basename or full path; only the basename is used).

        ****source\_type****str or None, optional
        :   `SourceType` value string to include in the result. Default: `None`.

    Returns:
    :   dict[str, Any]
        :   Dict with zero or more of: `"source_author"`, `"source_title"`,
            `"source_date"`, `"source_type"`. Suitable for passing as
            `source_provenance` to
            `from_file`.

    Parameters:
    :   * ****filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****source\_type**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Examples

    Try it in your browser!
    ```
    >>> provenance_from_filename("Shakespeare_William_Hamlet_1603.xml")
    {'source_author': 'Shakespeare William', 'source_title': 'Hamlet',
     'source_date': '1603'}

    ```
    ```
    >>> provenance_from_filename("dickens-great-expectations.txt")
    {'source_author': 'Dickens', 'source_title': 'Great Expectations'}

    ```
    ```
    >>> provenance_from_filename("document.pdf")
    {}

    ```
    Go BackOpen In Tab