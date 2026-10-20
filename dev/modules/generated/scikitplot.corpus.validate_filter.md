# validate\_filter[#](#validate-filter "Link to this heading")

scikitplot.corpus.validate\_filter(**expression**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_filters.py#L774)[#](#scikitplot.corpus.validate_filter "Link to this definition")
:   Return `expression` checked and frozen to the JSON-able form.

    Parameters:
    :   ****expression****Filter or mapping
        :   A filter expression, or its JSON form.

    Returns:
    :   Filter
        :   A new tree of the nine built-in operators holding only JSON scalars
            and naming only filterable fields: `filter_from_dict(filter_to_dict(
            expression))`. Nothing reachable from it can be mutated afterwards.

    Raises:
    :   TypeError
        :   If `expression` is neither a [`Filter`](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus.Filter") nor a mapping, or holds
            a node that is not one of the nine operators.

        ValueError
        :   As [`filter_from_dict`](scikitplot.corpus.filter_from_dict.html#scikitplot.corpus.filter_from_dict "scikitplot.corpus.filter_from_dict") and [`filter_to_dict`](scikitplot.corpus.filter_to_dict.html#scikitplot.corpus.filter_to_dict "scikitplot.corpus.filter_to_dict").

    Parameters:
    :   ****expression**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter")