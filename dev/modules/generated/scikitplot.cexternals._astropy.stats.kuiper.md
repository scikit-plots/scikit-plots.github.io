# kuiper[#](#kuiper "Link to this heading")

scikitplot.cexternals.\_astropy.stats.kuiper(**data**, **cdf=<function <lambda>>**, **args=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/cexternals/_astropy/stats/funcs.py#L1417)[#](#scikitplot.cexternals._astropy.stats.kuiper "Link to this definition")
:   Compute the Kuiper statistic.

    Use the Kuiper statistic version of the Kolmogorov-Smirnov test to
    find the probability that a sample like `data` was drawn from the
    distribution whose CDF is given as `cdf`.

    > **Warning**
    > This will not work correctly for distributions that are actually
    discrete (Poisson, for example).

    Parameters:
    :   ****data****array-like
        :   The data values.

        ****cdf****callable
        :   A callable to evaluate the CDF of the distribution being tested
            against. Will be called with a vector of all values at once.
            The default is a uniform distribution.

        ****args****list-like, optional
        :   Additional arguments to be supplied to cdf.

    Returns:
    :   ****D****float
        :   The raw statistic.

        ****fpp****float
        :   The probability of a D this large arising with a sample drawn from
            the distribution whose CDF is cdf.

    Parameters:
    :   * ****data**** (**ArrayLike**)
        * ****cdf**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.14)"))
        * ****args**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)") **|** **None**)

    Return type:
    :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"), [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]

    Notes

    The Kuiper statistic resembles the Kolmogorov-Smirnov test in that
    it is nonparametric and invariant under reparameterizations of the data.
    The Kuiper statistic, in addition, is equally sensitive throughout
    the domain, and it is also invariant under cyclic permutations (making
    it particularly appropriate for analyzing circular data).

    Returns (D, fpp), where D is the Kuiper D number and fpp is the
    probability that a value as large as D would occur if data was
    drawn from cdf.

    > **Warning**
    > The fpp is calculated only approximately, and it can be
    as much as 1.5 times the true value.

    Stephens 1970 claims this is more effective than the KS at detecting
    changes in the variance of a distribution; the KS is (he claims) more
    sensitive at detecting changes in the mean.

    If cdf was obtained from data by fitting, then fpp is not correct and
    it will be necessary to do Monte Carlo simulations to interpret D.
    D should normally be independent of the shape of CDF.

    References

    [1]

    Stephens, M. A., “Use of the Kolmogorov-Smirnov, Cramer-Von Mises
    and Related Statistics Without Extensive Tables”, Journal of the
    Royal Statistical Society. Series B (Methodological), Vol. 32,
    No. 1. (1970), pp. 115-122.