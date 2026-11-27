# calibration\_report[#](#calibration-report "Link to this heading")

scikitplot.corpus.calibration\_report(**y\_true**, **y\_prob**, **\***, **n\_bins=10**, **strategy='uniform'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_metrics/_calibration.py#L348)[#](#scikitplot.corpus.calibration_report "Link to this definition")
:   Every calibration measure for one set of labelled probabilities.

    Parameters:
    :   ****y\_true****array-like of shape (n\_samples,)
        :   Binary relevance labels.

        ****y\_prob****array-like of shape (n\_samples,)
        :   Predicted probabilities of relevance.

        ****n\_bins****int, default=10
        :   Number of bins for the reliability table and ECE.

        ****strategy****{“uniform”, “quantile”}, default=”uniform”
        :   See [`reliability_table`](scikitplot.corpus.reliability_table.html#scikitplot.corpus.reliability_table "scikitplot.corpus.reliability_table").

    Returns:
    :   dict
        :   `n_samples`, `prevalence` (share of relevant labels),
            `brier_score`, `log_loss`, `expected_calibration_error` and
            `reliability` (the [`reliability_table`](scikitplot.corpus.reliability_table.html#scikitplot.corpus.reliability_table "scikitplot.corpus.reliability_table")). JSON-serialisable
            except for `NaN` in empty bins.

    Raises:
    :   ValueError, TypeError
        :   See [`reliability_table`](scikitplot.corpus.reliability_table.html#scikitplot.corpus.reliability_table "scikitplot.corpus.reliability_table").

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_prob**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****n\_bins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****strategy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Notes

    ****User.**** Keep `prevalence` with the numbers: Brier score and log loss
    move with it, so two reports on populations of different prevalence are
    not directly comparable.