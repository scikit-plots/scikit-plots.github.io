# documents\_to\_polars[#](#documents-to-polars "Link to this heading")

scikitplot.corpus.documents\_to\_polars(**docs**, **\***, **include\_embedding=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e137512/scikitplot/corpus/_schema.py#L2626)[#](#scikitplot.corpus.documents_to_polars "Link to this definition")
:   Convert a list of [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") instances to a
    `polars.DataFrame`.

    Parameters:
    :   ****docs****list of CorpusDocument
        :   Documents to convert. Must be non-empty.

        ****include\_embedding****bool, optional
        :   When `True`, include a column `"embedding"` with list-of-float
            values. Default: `False`.

    Returns:
    :   polars.DataFrame
        :   One row per document. Metadata fields are promoted to columns.
            An empty DataFrame with schema columns is returned when `docs` is
            empty rather than raising — an empty corpus is a valid pipeline result.

    Raises:
    :   ImportError
        :   If `polars` is not installed.

    Parameters:
    :   * ****docs**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument")**]**)
        * ****include\_embedding**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   pl.DataFrame

    Examples

    Try it in your browser!
    ```
    >>> docs = [CorpusDocument.create("f.txt", i, f"Sentence {i}.") for i in range(3)]
    >>> df = documents_to_polars(docs)
    >>> len(df)
    3

    ```
    Go BackOpen In Tab