# ValidationError[#](#validationerror "Link to this heading")

class scikitplot.corpus.ValidationError(**field**, **message**, **value=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L923)[#](#scikitplot.corpus.ValidationError "Link to this definition")
:   A single validation failure raised during corpus processing.

    Parameters:
    :   ****field****str
        :   The name of the field or attribute that failed validation.

        ****message****str
        :   Human-readable description of the failure.

        ****value****Any
        :   The offending value (stored as-is for diagnostics).

    Parameters:
    :   * ****field**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    field: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L923)[#](#scikitplot.corpus.ValidationError.field "Link to this definition")

    message: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L923)[#](#scikitplot.corpus.ValidationError.message "Link to this definition")

    value: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.corpus.ValidationError.value "Link to this definition")