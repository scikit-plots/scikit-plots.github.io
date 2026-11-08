# expected\_calibration\_error[#](#expected-calibration-error "Link to this heading")

scikitplot.corpus.expected\_calibration\_error(**y\_true**, **y\_prob**, **\***, **n\_bins=10**, **strategy='uniform'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/corpus/_metrics/_calibration.py#L303)[#](#scikitplot.corpus.expected_calibration_error "Link to this definition")
:   Count-weighted mean absolute gap between prediction and observation.

    Parameters:
    :   ****y\_true****array-like of shape (n\_samples,)
        :   Binary relevance labels.

        ****y\_prob****array-like of shape (n\_samples,)
        :   Predicted probabilities of relevance.

        ****n\_bins****int, default=10
        :   Number of bins.

        ****strategy****{“uniform”, “quantile”}, default=”uniform”
        :   See [`reliability_table`](scikitplot.corpus.reliability_table.html#scikitplot.corpus.reliability_table "scikitplot.corpus.reliability_table").

    Returns:
    :   float
        :   `sum_b (n_b / N) * |observed_b - mean_predicted_b|` over non-empty
            bins; in `[0, 1]`, 0 is perfectly calibrated.

    Raises:
    :   ValueError, TypeError
        :   See [`reliability_table`](scikitplot.corpus.reliability_table.html#scikitplot.corpus.reliability_table "scikitplot.corpus.reliability_table").

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_prob**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****n\_bins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****strategy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> round(
    ...     expected_calibration_error([0, 1, 1, 0], [0.1, 0.9, 0.8, 0.3], n_bins=2), 4
    ... )
    0.175

    ```
    Go BackOpen In Tab