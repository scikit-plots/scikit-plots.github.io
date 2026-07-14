# kuiper\_two[#](#kuiper-two "Link to this heading")

scikitplot.cexternals.\_astropy.stats.kuiper\_two(**data1**, **data2**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/cexternals/_astropy/stats/funcs.py#L1494)[#](#scikitplot.cexternals._astropy.stats.kuiper_two "Link to this definition")
:   Compute the Kuiper statistic to compare two samples.

    Parameters:
    :   ****data1****array-like
        :   The first set of data values.

        ****data2****array-like
        :   The second set of data values.

    Returns:
    :   ****D****float
        :   The raw test statistic.

        ****fpp****float
        :   The probability of obtaining two samples this different from
            the same distribution.

        > **Warning**
        > The fpp is quite approximate, especially for small samples.

    Parameters:
    :   * ****data1**** (**ArrayLike**)
        * ****data2**** (**ArrayLike**)

    Return type:
    :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"), [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]