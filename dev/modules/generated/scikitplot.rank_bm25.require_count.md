# require\_count[#](#require-count "Link to this heading")

scikitplot.rank\_bm25.require\_count(**value**, **\***, **maximum=None**, **name='count'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/rank_bm25/_validation.py#L137)[#](#scikitplot.rank_bm25.require_count "Link to this definition")
:   Return `value` as a non-negative count within its declared maximum.

    Parameters:
    :   ****value****object
        :   Candidate count.

        ****maximum****int or None, optional
        :   Declared ceiling. `None` means the caller declares no ceiling, which
            is not the same as a ceiling of zero.

        ****name****str, optional
        :   Parameter name as the calling function spells it.

    Returns:
    :   int
        :   The validated count. Zero is valid: it is a request for nothing.

    Raises:
    :   TypeError
        :   If the value is not an integer, or is a `bool`.

        ValueError
        :   If the count is negative, or above `maximum`.

    Parameters:
    :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****maximum**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> require_count(5, maximum=20)
    5
    >>> require_count(-1)
    Traceback (most recent call last):
        ...
    ValueError: count -1 must be zero or greater.

    ```
    Go BackOpen In Tab