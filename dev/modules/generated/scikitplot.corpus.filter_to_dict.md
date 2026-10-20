# filter\_to\_dict[#](#filter-to-dict "Link to this heading")

scikitplot.corpus.filter\_to\_dict(**expression**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_filters.py#L586)[#](#scikitplot.corpus.filter_to_dict "Link to this definition")
:   Return the JSON form of a filter expression.

    Parameters:
    :   ****expression****Filter
        :   Any expression of the nine operators.

    Returns:
    :   dict
        :   `{"op": "eq", "field": ..., "value": ...}`, `{"op": "in", "field":
            ..., "values": [...]}`, `{"op": "range", "field": ..., "lo": ...,
            "hi": ...}`, `{"op": "exists", "field": ...}`, `{"op": "and",
            "args": [...]}`, `{"op": "or", "args": [...]}`, `{"op": "not",
            "arg": {...}}`; `not_eq` and `not_in` like `eq` and `in`.
            Enum values are written as their values.

    Raises:
    :   ValueError
        :   If a value is not a JSON scalar (or is not finite), naming its path.

        TypeError
        :   If `expression` is not one of the nine operators.

    Parameters:
    :   ****expression**** ([**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter"))

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> filter_to_dict(And(Eq("language", "en"), Not(Exists("parent_doc_id"))))
    {'op': 'and', 'args': [{'op': 'eq', 'field': 'language', 'value': 'en'}, {'op': 'not', 'arg': {'op': 'exists', 'field': 'parent_doc_id'}}]}

    ```
    Go BackOpen In Tab