# Eq[#](#eq "Link to this heading")

class scikitplot.corpus.Eq(**field**, **value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L120)[#](#scikitplot.corpus.Eq "Link to this definition")
:   `field == value`.

    Parameters:
    :   * ****field**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L115)[#](#scikitplot.corpus.Eq.describe "Link to this definition")
    :   Return a readable rendering of the expression.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    field: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L120)[#](#scikitplot.corpus.Eq.field "Link to this definition")

    matches(**document**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L127)[#](#scikitplot.corpus.Eq.matches "Link to this definition")
    :   Whether the field equals [`value`](#scikitplot.corpus.Eq.value "scikitplot.corpus.Eq.value").

        Parameters:
        :   ****document**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    operators()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L132)[#](#scikitplot.corpus.Eq.operators "Link to this definition")
    :   Return `{'Eq'}`.

        Return type:
        :   [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    value: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_filters.py#L120)[#](#scikitplot.corpus.Eq.value "Link to this definition")