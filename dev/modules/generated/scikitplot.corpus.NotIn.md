# NotIn[#](#notin "Link to this heading")

class scikitplot.corpus.NotIn(**field**, **values**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_filters.py#L185)[#](#scikitplot.corpus.NotIn "Link to this definition")
:   `field not in values`; a missing field does not match.

    Parameters:
    :   * ****field**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****values**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**,** **...****]**)

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_filters.py#L115)[#](#scikitplot.corpus.NotIn.describe "Link to this definition")
    :   Return a readable rendering of the expression.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    field: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_filters.py#L185)[#](#scikitplot.corpus.NotIn.field "Link to this definition")

    matches(**document**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_filters.py#L196)[#](#scikitplot.corpus.NotIn.matches "Link to this definition")
    :   Whether the field is present and not among [`values`](#scikitplot.corpus.NotIn.values "scikitplot.corpus.NotIn.values").

        Parameters:
        :   ****document**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    operators()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_filters.py#L203)[#](#scikitplot.corpus.NotIn.operators "Link to this definition")
    :   Return `{'NotIn'}`.

        Return type:
        :   [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    values: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_filters.py#L185)[#](#scikitplot.corpus.NotIn.values "Link to this definition")