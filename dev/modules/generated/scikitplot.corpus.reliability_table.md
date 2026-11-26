# reliability\_table[#](#reliability-table "Link to this heading")

scikitplot.corpus.reliability\_table(**y\_true**, **y\_prob**, **\***, **n\_bins=10**, **strategy='uniform'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_metrics/_calibration.py#L236)[#](#scikitplot.corpus.reliability_table "Link to this definition")
:   Per-bin mean predicted probability against observed relevance frequency.

    Parameters:
    :   ****y\_true****array-like of shape (n\_samples,)
        :   Binary relevance labels (0/1 or `bool`).

        ****y\_prob****array-like of shape (n\_samples,)
        :   Predicted probabilities of relevance, in `[0, 1]`.

        ****n\_bins****int, default=10
        :   Number of bins.

        ****strategy****{“uniform”, “quantile”}, default=”uniform”
        :   Equal-width bins over `[0, 1]`, or edges at quantiles of
            `y_prob` (so bins hold similar counts).

    Returns:
    :   dict
        :   `edges` (`n_bins + 1` floats), and per bin `count` (int),
            `mean_predicted` and `observed_frequency` (`NaN` for an empty
            bin), plus `n_bins` and `strategy`.

    Raises:
    :   ValueError
        :   For different lengths, no samples, a non-binary label, a probability
            outside `[0, 1]` or non-finite, `n_bins < 1` or an unknown
            `strategy`.

        TypeError
        :   For non-numeric input or a non-integer `n_bins`.

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_prob**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****n\_bins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****strategy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Notes

    ****User.**** Empty bins are kept (count 0, `NaN` values) so tables from
    two systems line up bin for bin; scikit-learn’s `calibration_curve`
    drops them. Quantile edges can coincide when many probabilities are
    equal; such bins are empty.

    Examples

    Try it in your browser!
    ```
    >>> table = reliability_table([0, 1, 1, 0], [0.1, 0.9, 0.8, 0.3], n_bins=2)
    >>> table["count"], table["observed_frequency"]
    ([2, 2], [0.0, 1.0])

    ```
    Go BackOpen In Tab