# exact\_match\_score[#](#exact-match-score "Link to this heading")

scikitplot.corpus.exact\_match\_score(**y\_true**, **y\_pred**, **\***, **normalize='squad'**, **sample\_weight=None**, **average='mean'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_text.py#L280)[#](#scikitplot.corpus.exact_match_score "Link to this definition")
:   Fraction of predicted answers equal to a reference after normalisation.

    Parameters:
    :   ****y\_true****sequence or mapping
        :   Reference answers per item: a `str` or a sequence of `str`.

        ****y\_pred****sequence or mapping
        :   Predicted answer per item (`str`), aligned with `y_true`.

        ****normalize****{“squad”, “basic”, None}, default=”squad”
        :   Normalisation of both sides.

        ****sample\_weight****array-like of shape (n\_items,), default=None
        :   Per-item weights of the mean.

        ****average****{“mean”, None}, default=”mean”
        :   `None` returns per-item values.

    Returns:
    :   float or numpy.ndarray

    Raises:
    :   TypeError, ValueError
        :   For malformed inputs; the message names the item.

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_pred**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****normalize**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****sample\_weight**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****average**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> exact_match_score(
    ...     ["The Eiffel Tower", ["Paris", "City of Paris"]], ["eiffel tower.", "Lyon"]
    ... )
    0.5

    ```
    Go BackOpen In Tab