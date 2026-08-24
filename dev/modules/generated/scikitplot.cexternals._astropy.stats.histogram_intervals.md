# histogram\_intervals[#](#histogram-intervals "Link to this heading")

scikitplot.cexternals.\_astropy.stats.histogram\_intervals(**n**, **breaks**, **totals**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/cexternals/_astropy/stats/funcs.py#L1655)[#](#scikitplot.cexternals._astropy.stats.histogram_intervals "Link to this definition")
:   Histogram of a piecewise-constant weight function.

    This function takes a piecewise-constant weight function and
    computes the average weight in each histogram bin.

    Parameters:
    :   ****n****int
        :   The number of bins

        ****breaks****(N,) array of float
        :   Endpoints of the intervals in the PDF

        ****totals****(N-1,) array of float
        :   Probability densities in each bin

    Returns:
    :   ****h****array of float
        :   The average weight for each bin

    Parameters:
    :   * ****n**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****breaks**** (**NDArray****[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]**)
        * ****totals**** (**NDArray****[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]**)

    Return type:
    :   **NDArray**[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]