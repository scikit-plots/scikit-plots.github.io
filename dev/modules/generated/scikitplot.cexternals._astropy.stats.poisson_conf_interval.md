# poisson\_conf\_interval[#](#poisson-conf-interval "Link to this heading")

scikitplot.cexternals.\_astropy.stats.poisson\_conf\_interval(**n**, **interval='root-n'**, **sigma=1.0**, **background=0.0**, **confidence\_level=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/cexternals/_astropy/stats/funcs.py#L508)[#](#scikitplot.cexternals._astropy.stats.poisson_conf_interval "Link to this definition")
:   Poisson parameter confidence interval given observed counts.

    Parameters:
    :   ****n****int or numpy.ndarray
        :   Number of counts (0 <= `n`).

        ****interval****{‘root-n’,’root-n-0’,’pearson’,’sherpagehrels’,’frequentist-confidence’, ‘kraft-burrows-nousek’}, optional
        :   Formula used for confidence interval. See notes for details.
            Default is `'root-n'`.

        ****sigma****float, optional
        :   Number of sigma for confidence interval; only supported for
            the ‘frequentist-confidence’ mode.

        ****background****float, optional
        :   Number of counts expected from the background; only supported for
            the ‘kraft-burrows-nousek’ mode. This number is assumed to be determined
            from a large region so that the uncertainty on its value is negligible.

        ****confidence\_level****float, optional
        :   Confidence level between 0 and 1; only supported for the
            ‘kraft-burrows-nousek’ mode.

    Returns:
    :   ****conf\_interval****ndarray
        :   `conf_interval[0]` and `conf_interval[1]` correspond to the lower
            and upper limits, respectively, for each element in `n`.

    Parameters:
    :   * ****n**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** **...****]****,** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[****\_ScalarT****]****]**)
        * ****interval**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'root-n'****,** **'root-n-0'****,** **'pearson'****,** **'sherpagehrels'****,** **'frequentist-confidence'****,** **'kraft-burrows-nousek'****]**)
        * ****sigma**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****background**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****confidence\_level**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[**\_ScalarT**]]

    Notes

    The “right” confidence interval to use for Poisson data is a
    matter of debate. The CDF working group [recommends](https://web.archive.org/web/20210222093249/https://www-cdf.fnal.gov/physics/statistics/notes/pois_eb.txt)
    using root-n throughout, largely in the interest of
    comprehensibility, but discusses other possibilities. The ATLAS
    group also discusses several
    possibilities but concludes that no single representation is
    suitable for all cases. The suggestion has also been [floated](https://ui.adsabs.harvard.edu/abs/2012EPJP..127...24A) that error
    bars should be attached to theoretical predictions instead of
    observed data, which this function will not help with (but it’s
    easy; then you really should use the square root of the theoretical
    prediction).

    The intervals implemented here are:

    ****1. ‘root-n’**** This is a very widely used standard rule derived
    from the maximum-likelihood estimator for the mean of the Poisson
    process. While it produces questionable results for small n and
    outright wrong results for n=0, it is standard enough that people are
    (supposedly) used to interpreting these wonky values. The interval is

    \[CI = (n-\sqrt{n}, n+\sqrt{n})\]

    ****2. ‘root-n-0’**** This is identical to the above except that where
    n is zero the interval returned is (0,1).

    ****3. ‘pearson’**** This is an only-slightly-more-complicated rule
    based on Pearson’s chi-squared rule (as [explained](https://web.archive.org/web/20210222093249/https://www-cdf.fnal.gov/physics/statistics/notes/pois_eb.txt) by
    the CDF working group). It also has the nice feature that if your
    theory curve touches an endpoint of the interval, then your data
    point is indeed one sigma away. The interval is

    \[CI = (n+0.5-\sqrt{n+0.25}, n+0.5+\sqrt{n+0.25})\]

    ****4. ‘sherpagehrels’**** This rule is used by default in the fitting
    package ‘sherpa’. The [documentation](https://cxc.cfa.harvard.edu/sherpa/statistics/#chigehrels) claims
    it is based on a numerical approximation published in [Gehrels
    (1986)](https://ui.adsabs.harvard.edu/abs/1986ApJ...303..336G) but it
    does not actually appear there. It is symmetrical, and while the
    upper limits are within about 1% of those given by
    ‘frequentist-confidence’, the lower limits can be badly wrong. The
    interval is

    \[CI = (n-1-\sqrt{n+0.75}, n+1+\sqrt{n+0.75})\]

    ****5. ‘frequentist-confidence’**** These are frequentist central
    confidence intervals:

    \[CI = (0.5 F\_{\chi^2}^{-1}(\alpha;2n),
    0.5 F\_{\chi^2}^{-1}(1-\alpha;2(n+1)))\]

    where \(F\_{\chi^2}^{-1}\) is the quantile of the chi-square
    distribution with the indicated number of degrees of freedom and
    \(\alpha\) is the one-tailed probability of the normal
    distribution (at the point given by the parameter ‘sigma’). See
    [Maxwell (2011)](https://ui.adsabs.harvard.edu/abs/2011arXiv1102.0822M) for further
    details.

    ****6. ‘kraft-burrows-nousek’**** This is a Bayesian approach which allows
    for the presence of a known background \(B\) in the source signal
    \(N\).
    For a given confidence level \(CL\) the confidence interval
    \([S\_\mathrm{min}, S\_\mathrm{max}]\) is given by:

    \[CL = \int^{S\_\mathrm{max}}\_{S\_\mathrm{min}} f\_{N,B}(S)dS\]

    where the function \(f\_{N,B}\) is:

    \[f\_{N,B}(S) = C \frac{e^{-(S+B)}(S+B)^N}{N!}\]

    and the normalization constant \(C\):

    \[C = \left[ \int\_0^\infty \frac{e^{-(S+B)}(S+B)^N}{N!} dS \right] ^{-1}
    = \left( \sum^N\_{n=0} \frac{e^{-B}B^n}{n!} \right)^{-1}\]

    See [Kraft, Burrows, and Nousek (1991)](https://ui.adsabs.harvard.edu/abs/1991ApJ...374..344K) for further
    details.

    These formulas implement a positive, uniform prior.
    [Kraft, Burrows, and Nousek (1991)](https://ui.adsabs.harvard.edu/abs/1991ApJ...374..344K) discuss this
    choice in more detail and show that the problem is relatively
    insensitive to the choice of prior.

    This function has an optional dependency: Either [Scipy](https://www.scipy.org/) or [mpmath](https://mpmath.org/) need
    to be available.
    This code is very intense numerically, which makes it much slower than
    the other methods, in particular for large count numbers (above 1000
    even with `mpmath`). Fortunately, some of the other methods or a
    Gaussian approximation usually work well in this regime.

    Examples

    Try it in your browser!
    ```
    >>> poisson_conf_interval(np.arange(10), interval='root-n').T
    array([[  0.        ,   0.        ],
           [  0.        ,   2.        ],
           [  0.58578644,   3.41421356],
           [  1.26794919,   4.73205081],
           [  2.        ,   6.        ],
           [  2.76393202,   7.23606798],
           [  3.55051026,   8.44948974],
           [  4.35424869,   9.64575131],
           [  5.17157288,  10.82842712],
           [  6.        ,  12.        ]])

    ```
    ```
    >>> poisson_conf_interval(np.arange(10), interval='root-n-0').T
    array([[  0.        ,   1.        ],
           [  0.        ,   2.        ],
           [  0.58578644,   3.41421356],
           [  1.26794919,   4.73205081],
           [  2.        ,   6.        ],
           [  2.76393202,   7.23606798],
           [  3.55051026,   8.44948974],
           [  4.35424869,   9.64575131],
           [  5.17157288,  10.82842712],
           [  6.        ,  12.        ]])

    ```
    ```
    >>> poisson_conf_interval(np.arange(10), interval='pearson').T
    array([[  0.        ,   1.        ],
           [  0.38196601,   2.61803399],
           [  1.        ,   4.        ],
           [  1.69722436,   5.30277564],
           [  2.43844719,   6.56155281],
           [  3.20871215,   7.79128785],
           [  4.        ,   9.        ],
           [  4.8074176 ,  10.1925824 ],
           [  5.62771868,  11.37228132],
           [  6.45861873,  12.54138127]])

    ```
    ```
    >>> poisson_conf_interval(
    ...     np.arange(10), interval='frequentist-confidence').T
    array([[  0.        ,   1.84102165],
           [  0.17275378,   3.29952656],
           [  0.70818544,   4.63785962],
           [  1.36729531,   5.91818583],
           [  2.08566081,   7.16275317],
           [  2.84030886,   8.38247265],
           [  3.62006862,   9.58364155],
           [  4.41852954,  10.77028072],
           [  5.23161394,  11.94514152],
           [  6.05653896,  13.11020414]])

    ```
    ```
    >>> poisson_conf_interval(
    ...     7, interval='frequentist-confidence').T
    array([  4.41852954,  10.77028072])

    ```
    ```
    >>> poisson_conf_interval(
    ...     10, background=1.5, confidence_level=0.95,
    ...     interval='kraft-burrows-nousek').T
    array([[ 3.47894005, 16.113329533]])

    ```
    Go BackOpen In Tab