# ValidationResult[#](#validationresult "Link to this heading")

class scikitplot.corpus.ValidationResult(**valid**, **errors=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1017)[#](#scikitplot.corpus.ValidationResult "Link to this definition")
:   Aggregate result of a validation pass.

    Parameters:
    :   ****valid****bool
        :   `True` if no errors were found.

        ****errors****list[ValidationError]
        :   All validation errors. Empty when **valid** is `True`.

    Parameters:
    :   * ****valid**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****errors**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**ValidationError**](scikitplot.corpus.ValidationError.html#scikitplot.corpus.ValidationError "scikitplot.corpus._types.ValidationError")**]**)

    Examples

    Try it in your browser!
    ```
    >>> result = ValidationResult(valid=True, errors=[])
    >>> result.valid
    True

    ```
    Go BackOpen In Tab

    errors: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[ValidationError](scikitplot.corpus.ValidationError.html#scikitplot.corpus.ValidationError "scikitplot.corpus._types.ValidationError")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1017)[#](#scikitplot.corpus.ValidationResult.errors "Link to this definition")

    raise\_if\_invalid(**context=''**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1038)[#](#scikitplot.corpus.ValidationResult.raise_if_invalid "Link to this definition")
    :   Raise a `ValueError` if this result is invalid.

        Parameters:
        :   ****context****str, optional
            :   Extra context prepended to the error message.

        Raises:
        :   ValueError
            :   If `valid` is `False`, with all error messages joined.

        Parameters:
        :   ****context**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   None

    valid: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L1017)[#](#scikitplot.corpus.ValidationResult.valid "Link to this definition")