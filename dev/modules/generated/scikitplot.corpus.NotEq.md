# NotEq[#](#noteq "Link to this heading")

class scikitplot.corpus.NotEq(**field**, **value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L137)[#](#scikitplot.corpus.NotEq "Link to this definition")
:   `field != value`.

    Notes

    A ****missing**** field does not satisfy `NotEq`. Treating absence as
    inequality would make `NotEq` match documents that have no such field at
    all, which is almost never what a caller means; use `Not(Exists(field))`
    to ask that question deliberately.

    Parameters:
    :   * ****field**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L115)[#](#scikitplot.corpus.NotEq.describe "Link to this definition")
    :   Return a readable rendering of the expression.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    field: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L137)[#](#scikitplot.corpus.NotEq.field "Link to this definition")

    matches(**document**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L152)[#](#scikitplot.corpus.NotEq.matches "Link to this definition")
    :   Whether the field is present and differs from [`value`](#scikitplot.corpus.NotEq.value "scikitplot.corpus.NotEq.value").

        Parameters:
        :   ****document**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    operators()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L157)[#](#scikitplot.corpus.NotEq.operators "Link to this definition")
    :   Return `{'NotEq'}`.

        Return type:
        :   [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    value: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L137)[#](#scikitplot.corpus.NotEq.value "Link to this definition")