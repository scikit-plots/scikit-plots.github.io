# Not[#](#not "Link to this heading")

class scikitplot.corpus.Not(**clause**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L310)[#](#scikitplot.corpus.Not "Link to this definition")
:   Negates a sub-expression.

    Parameters:
    :   ****clause**** ([**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter"))

    clause: [Filter](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L310)[#](#scikitplot.corpus.Not.clause "Link to this definition")

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L115)[#](#scikitplot.corpus.Not.describe "Link to this definition")
    :   Return a readable rendering of the expression.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    matches(**document**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L316)[#](#scikitplot.corpus.Not.matches "Link to this definition")
    :   Whether the inner clause does not match.

        Parameters:
        :   ****document**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    operators()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L320)[#](#scikitplot.corpus.Not.operators "Link to this definition")
    :   Return `{'Not'}` plus every nested operator.

        Return type:
        :   [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]