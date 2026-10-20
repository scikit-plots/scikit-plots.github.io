# NotEq[#](#noteq "Link to this heading")

class scikitplot.corpus.NotEq(**field**, **value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L205)[#](#scikitplot.corpus.NotEq "Link to this definition")
:   `field != value`.

    Notes

    A ****missing**** field does not satisfy `NotEq`. Treating absence as
    inequality would make `NotEq` match documents that have no such field at
    all, which is almost never what a caller means; use `Not(Exists(field))`
    to ask that question deliberately.

    Parameters:
    :   * ****field**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L179)[#](#scikitplot.corpus.NotEq.describe "Link to this definition")
    :   Return a readable rendering of the expression.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    field: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L205)[#](#scikitplot.corpus.NotEq.field "Link to this definition")

    matches(**document**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L220)[#](#scikitplot.corpus.NotEq.matches "Link to this definition")
    :   Whether the field is present and differs from [`value`](#scikitplot.corpus.NotEq.value "scikitplot.corpus.NotEq.value").

        Parameters:
        :   ****document**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    operators()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L231)[#](#scikitplot.corpus.NotEq.operators "Link to this definition")
    :   Return `{'NotEq'}`.

        Return type:
        :   [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L183)[#](#scikitplot.corpus.NotEq.to_dict "Link to this definition")
    :   Return the JSON form; see [`filter_to_dict`](scikitplot.corpus.filter_to_dict.html#scikitplot.corpus.filter_to_dict "scikitplot.corpus.filter_to_dict").

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    value: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L205)[#](#scikitplot.corpus.NotEq.value "Link to this definition")