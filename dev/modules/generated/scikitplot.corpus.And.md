# And[#](#and "Link to this heading")

class scikitplot.corpus.And(**\*clauses**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_filters.py#L268)[#](#scikitplot.corpus.And "Link to this definition")
:   All sub-expressions must match. Empty `And` matches everything.

    Parameters:
    :   ****clauses**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter")**,** **...****]**)

    clauses: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Filter](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_filters.py#L268)[#](#scikitplot.corpus.And.clauses "Link to this definition")

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_filters.py#L115)[#](#scikitplot.corpus.And.describe "Link to this definition")
    :   Return a readable rendering of the expression.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    matches(**document**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_filters.py#L277)[#](#scikitplot.corpus.And.matches "Link to this definition")
    :   Whether every clause matches.

        Parameters:
        :   ****document**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    operators()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_filters.py#L281)[#](#scikitplot.corpus.And.operators "Link to this definition")
    :   Return `{'And'}` plus every nested operator.

        Return type:
        :   [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]