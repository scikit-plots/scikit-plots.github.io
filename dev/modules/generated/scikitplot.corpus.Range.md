# Range[#](#range "Link to this heading")

class scikitplot.corpus.Range(**field**, **lo=None**, **hi=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L208)[#](#scikitplot.corpus.Range "Link to this definition")
:   `lo <= field <= hi`, with either bound optional.

    Parameters:
    :   ****field****str


        ****lo****Any, optional
        :   Inclusive lower bound. `None` leaves the range open below.

        ****hi****Any, optional
        :   Inclusive upper bound. `None` leaves the range open above.

    Parameters:
    :   * ****field**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****lo**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****hi**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L115)[#](#scikitplot.corpus.Range.describe "Link to this definition")
    :   Return a readable rendering of the expression.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    field: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L208)[#](#scikitplot.corpus.Range.field "Link to this definition")

    hi: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.corpus.Range.hi "Link to this definition")

    lo: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.corpus.Range.lo "Link to this definition")

    matches(**document**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L225)[#](#scikitplot.corpus.Range.matches "Link to this definition")
    :   Whether the field lies within the bounds.

        Notes

        A value that cannot be compared with a bound does ****not**** match, rather
        than raising: a filter is a predicate over heterogeneous documents, and
        one badly-typed field should exclude that document, not the query.

        Parameters:
        :   ****document**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    operators()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L247)[#](#scikitplot.corpus.Range.operators "Link to this definition")
    :   Return `{'Range'}`.

        Return type:
        :   [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]