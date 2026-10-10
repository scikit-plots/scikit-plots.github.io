# Or[#](#or "Link to this heading")

class scikitplot.corpus.Or(**\*clauses**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L289)[#](#scikitplot.corpus.Or "Link to this definition")
:   At least one sub-expression must match. Empty `Or` matches nothing.

    Parameters:
    :   ****clauses**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter")**,** **...****]**)

    clauses: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Filter](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L289)[#](#scikitplot.corpus.Or.clauses "Link to this definition")

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L115)[#](#scikitplot.corpus.Or.describe "Link to this definition")
    :   Return a readable rendering of the expression.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    matches(**document**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L298)[#](#scikitplot.corpus.Or.matches "Link to this definition")
    :   Whether any clause matches.

        Parameters:
        :   ****document**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    operators()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L302)[#](#scikitplot.corpus.Or.operators "Link to this definition")
    :   Return `{'Or'}` plus every nested operator.

        Return type:
        :   [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]