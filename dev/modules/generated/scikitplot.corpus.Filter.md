# Filter[#](#filter "Link to this heading")

class scikitplot.corpus.Filter[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_filters.py#L95)[#](#scikitplot.corpus.Filter "Link to this definition")
:   Base class for filter expressions.

    Notes

    ****Developer.**** Subclasses implement [`matches`](#scikitplot.corpus.Filter.matches "scikitplot.corpus.Filter.matches") and [`operators`](#scikitplot.corpus.Filter.operators "scikitplot.corpus.Filter.operators").
    Composition uses the explicit [`And`](scikitplot.corpus.And.html#scikitplot.corpus.And "scikitplot.corpus.And") / [`Or`](scikitplot.corpus.Or.html#scikitplot.corpus.Or "scikitplot.corpus.Or") / [`Not`](scikitplot.corpus.Not.html#scikitplot.corpus.Not "scikitplot.corpus.Not")
    nodes rather than operator overloading: `&` and `|` read as bitwise
    operations and their precedence relative to comparisons is a classic source
    of silently wrong predicates.

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_filters.py#L115)[#](#scikitplot.corpus.Filter.describe "Link to this definition")
    :   Return a readable rendering of the expression.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    matches(**document**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_filters.py#L107)[#](#scikitplot.corpus.Filter.matches "Link to this definition")
    :   Whether `document` satisfies this expression.

        Parameters:
        :   ****document**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    operators()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_filters.py#L111)[#](#scikitplot.corpus.Filter.operators "Link to this definition")
    :   Names of every operator appearing in this expression.

        Return type:
        :   [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]