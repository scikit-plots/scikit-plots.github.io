# filter\_from\_dict[#](#filter-from-dict "Link to this heading")

scikitplot.corpus.filter\_from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_filters.py#L663)[#](#scikitplot.corpus.filter_from_dict "Link to this definition")
:   Rebuild a filter expression from its JSON form, refusing anything off contract.

    Parameters:
    :   ****data****dict
        :   As written by [`filter_to_dict`](scikitplot.corpus.filter_to_dict.html#scikitplot.corpus.filter_to_dict "scikitplot.corpus.filter_to_dict"), possibly from an untrusted caller.

    Returns:
    :   Filter
        :   The expression; `filter_to_dict(filter_from_dict(d)) == d` for every
            accepted `d`.

    Raises:
    :   ValueError
        :   For an unknown `op`, a missing or unknown key, a field a filter may
            not name (see [`filterable_fields`](scikitplot.corpus.filterable_fields.html#scikitplot.corpus.filterable_fields "scikitplot.corpus.filterable_fields"); `metadata.<key>` is
            allowed), a value that is not a finite JSON scalar, a list where none
            belongs (or none where one does), a string longer than
            `MAX_FILTER_STRING`, an integer beyond `+/-2**63`, or a tree of
            more than `MAX_FILTER_DEPTH` levels, `MAX_FILTER_NODES`
            nodes or `MAX_FILTER_VALUES` values. The message names the path.

    Parameters:
    :   ****data**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter")

    Examples

    Try it in your browser!
    ```
    >>> filter_from_dict({"op": "in", "field": "language", "values": ["en", "de"]})
    In(field='language', values=('en', 'de'))

    ```
    Go BackOpen In Tab