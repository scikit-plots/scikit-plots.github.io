# In[#](#in "Link to this heading")

class scikitplot.corpus.In(**field**, **values**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L236)[#](#scikitplot.corpus.In "Link to this definition")
:   `field in values`.

    Parameters:
    :   * ****field**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****values**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**,** **...****]**)

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L179)[#](#scikitplot.corpus.In.describe "Link to this definition")
    :   Return a readable rendering of the expression.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    field: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L236)[#](#scikitplot.corpus.In.field "Link to this definition")

    matches(**document**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L248)[#](#scikitplot.corpus.In.matches "Link to this definition")
    :   Whether the field’s value is among [`values`](#scikitplot.corpus.In.values "scikitplot.corpus.In.values").

        Parameters:
        :   ****document**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    operators()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L255)[#](#scikitplot.corpus.In.operators "Link to this definition")
    :   Return `{'In'}`.

        Return type:
        :   [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L183)[#](#scikitplot.corpus.In.to_dict "Link to this definition")
    :   Return the JSON form; see [`filter_to_dict`](scikitplot.corpus.filter_to_dict.html#scikitplot.corpus.filter_to_dict "scikitplot.corpus.filter_to_dict").

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    values: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_filters.py#L236)[#](#scikitplot.corpus.In.values "Link to this definition")