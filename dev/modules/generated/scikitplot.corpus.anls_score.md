# anls\_score[#](#anls-score "Link to this heading")

scikitplot.corpus.anls\_score(**y\_true**, **y\_pred**, **\***, **threshold=0.5**, **normalize='basic'**, **backend='auto'**, **sample\_weight=None**, **average='mean'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_text.py#L460)[#](#scikitplot.corpus.anls_score "Link to this definition")
:   Average normalised Levenshtein similarity (ANLS).

    Per item, `s = 1 - NL` when the normalised Levenshtein distance `NL`
    to a reference is below `threshold` and 0 otherwise; the best reference
    counts.

    Parameters:
    :   ****y\_true****sequence or mapping
        :   Reference answers per item: a `str` or a sequence of `str`.

        ****y\_pred****sequence or mapping
        :   Predicted answer per item (`str`), aligned with `y_true`.

        ****threshold****float, default=0.5
        :   In (0, 1]. Distances at or above it score 0, so an answer that is
            mostly wrong earns no partial credit.

        ****normalize****{“basic”, “squad”, None}, default=”basic”
        :   Normalisation of both sides.

        ****backend****{“auto”, “python”}, default=”auto”
        :   Edit-distance implementation (both exact).

        ****sample\_weight****array-like of shape (n\_items,), default=None
        :   Per-item weights of the mean.

        ****average****{“mean”, None}, default=”mean”
        :   `None` returns per-item values.

    Returns:
    :   float or numpy.ndarray

    Raises:
    :   TypeError, ValueError
        :   For malformed inputs or a threshold outside (0, 1].

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_pred**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****threshold**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****normalize**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****sample\_weight**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****average**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> anls_score(["kitten", "kitten"], ["kitten", "dog"])
    0.5

    ```
    Go BackOpen In Tab