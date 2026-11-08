# brier\_score[#](#brier-score "Link to this heading")

scikitplot.corpus.brier\_score(**y\_true**, **y\_prob**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/corpus/_metrics/_calibration.py#L157)[#](#scikitplot.corpus.brier_score "Link to this definition")
:   Mean squared difference between probabilities and binary outcomes.

    Parameters:
    :   ****y\_true****array-like of shape (n\_samples,)
        :   Binary relevance labels.

        ****y\_prob****array-like of shape (n\_samples,)
        :   Predicted probabilities of relevance.

    Returns:
    :   float
        :   In `[0, 1]`; lower is better.

    Raises:
    :   ValueError, TypeError
        :   See [`reliability_table`](scikitplot.corpus.reliability_table.html#scikitplot.corpus.reliability_table "scikitplot.corpus.reliability_table").

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_prob**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")

    > **See also**
    > [`binary_log_loss`](scikitplot.corpus.binary_log_loss.html#scikitplot.corpus.binary_log_loss "scikitplot.corpus.binary_log_loss")
    :   Penalises confident mistakes more strongly.

    Examples

    Try it in your browser!
    ```
    >>> brier_score([1, 0, 1], [0.9, 0.2, 0.6])
    0.07

    ```
    Go BackOpen In Tab