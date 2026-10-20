# require\_index[#](#require-index "Link to this heading")

scikitplot.rank\_bm25.require\_index(**value**, **count**, **\***, **name='index'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/rank_bm25/_validation.py#L91)[#](#scikitplot.rank_bm25.require_index "Link to this definition")
:   Return `value` as a position valid in `[0, count)`.

    Parameters:
    :   ****value****object
        :   Candidate position.

        ****count****int
        :   Number of rows available.

        ****name****str, optional
        :   Parameter name as the calling function spells it.

    Returns:
    :   int
        :   The validated position.

    Raises:
    :   TypeError
        :   If the value is not an integer, or is a `bool`.

        IndexError
        :   If the position is negative or not below `count`. Negative values are
            refused rather than counted from the end.

    Parameters:
    :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> require_index(2, 5)
    2
    >>> require_index(-1, 5)
    Traceback (most recent call last):
        ...
    IndexError: index -1 is outside [0, 5); negative positions are not counted from the end.

    ```
    Go BackOpen In Tab