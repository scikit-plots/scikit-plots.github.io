# knuth\_bin\_count[#](#knuth-bin-count "Link to this heading")

scikitplot.feature\_selection.knuth\_bin\_count(**values**, **min\_bins=1**, **max\_bins=100**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_binning.py#L185)[#](#scikitplot.feature_selection.knuth_bin_count "Link to this definition")
:   Return the equal-width bin count that maximises Knuth’s posterior.

    Parameters:
    :   ****values****array-like of float
        :   Finite sample values.

        ****min\_bins, max\_bins****int, default=1, 100
        :   Inclusive search range.

    Returns:
    :   int
        :   The count with the largest log posterior; the smallest such count on
            an exact tie.

    Raises:
    :   ValueError
        :   For an empty sample, non-finite values or an invalid range.

    Parameters:
    :   * ****values**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****min\_bins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_bins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Return type:
    :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    Notes

    The log posterior of `M` equal-width bins with counts `n_k` over `N`
    values is (Knuth 2006, eq. 31):

    ```
    N log M + lgamma(M/2) - M lgamma(1/2) - lgamma(N + M/2)
        + sum_k lgamma(n_k + 1/2)

    ```

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from scikitplot.feature_selection import knuth_bin_count
    >>> knuth_bin_count(np.random.default_rng(0).normal(size=1000), 1, 50)
    9

    ```
    Go BackOpen In Tab