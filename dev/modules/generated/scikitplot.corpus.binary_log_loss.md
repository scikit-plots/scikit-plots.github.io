# binary\_log\_loss[#](#binary-log-loss "Link to this heading")

scikitplot.corpus.binary\_log\_loss(**y\_true**, **y\_prob**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_metrics/_calibration.py#L191)[#](#scikitplot.corpus.binary_log_loss "Link to this definition")
:   Mean negative log-likelihood of binary outcomes under the probabilities.

    Parameters:
    :   ****y\_true****array-like of shape (n\_samples,)
        :   Binary relevance labels.

        ****y\_prob****array-like of shape (n\_samples,)
        :   Predicted probabilities of relevance.

    Returns:
    :   float
        :   Non-negative; lower is better.

    Raises:
    :   ValueError, TypeError
        :   See [`reliability_table`](scikitplot.corpus.reliability_table.html#scikitplot.corpus.reliability_table "scikitplot.corpus.reliability_table").

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_prob**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")

    Notes

    ****User.**** A probability of exactly 0 or 1 is clipped to
    `[eps, 1 - eps]` (float64 machine epsilon) so one confident mistake
    gives a large finite loss rather than infinity; this is the clipping
    scikit-learn applies.

    Examples

    Try it in your browser!
    ```
    >>> round(binary_log_loss([1, 0], [0.8, 0.3]), 6)
    0.289909

    ```
    Go BackOpen In Tab