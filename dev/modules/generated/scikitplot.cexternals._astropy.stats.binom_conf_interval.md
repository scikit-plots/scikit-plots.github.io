# binom\_conf\_interval[#](#binom-conf-interval "Link to this heading")

scikitplot.cexternals.\_astropy.stats.binom\_conf\_interval(**k**, **n**, **confidence\_level=0.68269**, **interval='wilson'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/cexternals/_astropy/stats/funcs.py#L64)[#](#scikitplot.cexternals._astropy.stats.binom_conf_interval "Link to this definition")
:   Binomial proportion confidence interval given k successes,
    n trials.

    Parameters:
    :   ****k****int or numpy.ndarray
        :   Number of successes (0 <= `k` <= `n`).

        ****n****int or numpy.ndarray
        :   Number of trials (`n` > 0). If both `k` and `n` are arrays,
            they must have the same shape.

        ****confidence\_level****float, optional
        :   Desired probability content of interval. Default is 0.68269,
            corresponding to 1 sigma in a 1-dimensional Gaussian distribution.
            Confidence level must be in range [0, 1].

        ****interval****{‘wilson’, ‘jeffreys’, ‘flat’, ‘wald’}, optional
        :   Formula used for confidence interval. See notes for details. The
            `'wilson'` and `'jeffreys'` intervals generally give similar
            results, while ‘flat’ is somewhat different, especially for small
            values of `n`. `'wilson'` should be somewhat faster than
            `'flat'` or `'jeffreys'`. The ‘wald’ interval is generally not
            recommended. It is provided for comparison purposes. Default is
            `'wilson'`.

    Returns:
    :   ****conf\_interval****ndarray
        :   `conf_interval[0]` and `conf_interval[1]` correspond to the lower
            and upper limits, respectively, for each element in `k`, `n`.

    Parameters:
    :   * ****k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **NDArray**)
        * ****n**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **NDArray**)
        * ****confidence\_level**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****interval**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'wilson'****,** **'jeffreys'****,** **'flat'****,** **'wald'****]**)

    Return type:
    :   **NDArray**

    Notes

    In situations where a probability of success is not known, it can
    be estimated from a number of trials (n) and number of
    observed successes (k). For example, this is done in Monte
    Carlo experiments designed to estimate a detection efficiency. It
    is simple to take the sample proportion of successes (k/n)
    as a reasonable best estimate of the true probability
    \(\epsilon\). However, deriving an accurate confidence
    interval on \(\epsilon\) is non-trivial. There are several
    formulas for this interval (see [[1]](#r9f14bd4a79ce-1)). Four intervals are implemented
    here:

    ****1. The Wilson Interval.**** This interval, attributed to Wilson [[2]](#r9f14bd4a79ce-2),
    is given by

    \[CI\_{\rm Wilson} = \frac{k + \kappa^2/2}{n + \kappa^2}
    \pm \frac{\kappa n^{1/2}}{n + \kappa^2}
    ((\hat{\epsilon}(1 - \hat{\epsilon}) + \kappa^2/(4n))^{1/2}\]

    where \(\hat{\epsilon} = k / n\) and \(\kappa\) is the
    number of standard deviations corresponding to the desired
    confidence interval for a **normal** distribution (for example,
    1.0 for a confidence interval of 68.269%). For a
    confidence interval of 100(1 - \(\alpha\))%,

    \[\kappa = \Phi^{-1}(1-\alpha/2) = \sqrt{2}{\rm erf}^{-1}(1-\alpha).\]

    ****2. The Jeffreys Interval.**** This interval is derived by applying
    Bayes’ theorem to the binomial distribution with the
    noninformative Jeffreys prior [[3]](#r9f14bd4a79ce-3), [[4]](#r9f14bd4a79ce-4). The noninformative Jeffreys
    prior is the Beta distribution, Beta(1/2, 1/2), which has the density
    function

    \[f(\epsilon) = \pi^{-1} \epsilon^{-1/2}(1-\epsilon)^{-1/2}.\]

    The justification for this prior is that it is invariant under
    reparameterizations of the binomial proportion.
    The posterior density function is also a Beta distribution: Beta(k
    + 1/2, n - k + 1/2). The interval is then chosen so that it is
    **equal-tailed**: Each tail (outside the interval) contains
    \(\alpha\)/2 of the posterior probability, and the interval
    itself contains 1 - \(\alpha\). This interval must be
    calculated numerically. Additionally, when k = 0 the lower limit
    is set to 0 and when k = n the upper limit is set to 1, so that in
    these cases, there is only one tail containing \(\alpha\)/2
    and the interval itself contains 1 - \(\alpha\)/2 rather than
    the nominal 1 - \(\alpha\).

    ****3. A Flat prior.**** This is similar to the Jeffreys interval,
    but uses a flat (uniform) prior on the binomial proportion
    over the range 0 to 1 rather than the reparametrization-invariant
    Jeffreys prior. The posterior density function is a Beta distribution:
    Beta(k + 1, n - k + 1). The same comments about the nature of the
    interval (equal-tailed, etc.) also apply to this option.

    ****4. The Wald Interval.**** This interval is given by

    \[CI\_{\rm Wald} = \hat{\epsilon} \pm
    \kappa \sqrt{\frac{\hat{\epsilon}(1-\hat{\epsilon})}{n}}\]

    The Wald interval gives acceptable results in some limiting
    cases. Particularly, when n is very large, and the true proportion
    \(\epsilon\) is not “too close” to 0 or 1. However, as the
    later is not verifiable when trying to estimate \(\epsilon\),
    this is not very helpful. Its use is not recommended, but it is
    provided here for comparison purposes due to its prevalence in
    everyday practical statistics.

    This function requires `scipy` for all interval types.

    References

    [[1](#id1)]

    Brown, Lawrence D.; Cai, T. Tony; DasGupta, Anirban (2001).
    “Interval Estimation for a Binomial Proportion”. Statistical
    Science 16 (2): 101-133. doi:10.1214/ss/1009213286

    [[2](#id2)]

    Wilson, E. B. (1927). “Probable inference, the law of
    succession, and statistical inference”. Journal of the American
    Statistical Association 22: 209-212.

    [[3](#id3)]

    Jeffreys, Harold (1946). “An Invariant Form for the Prior
    Probability in Estimation Problems”. Proc. R. Soc. Lond.. A 24 186
    (1007): 453-461. doi:10.1098/rspa.1946.0056

    [[4](#id4)]

    Jeffreys, Harold (1998). Theory of Probability. Oxford
    University Press, 3rd edition. ISBN 978-0198503682

    Examples

    Try it in your browser!

    Integer inputs return an array with shape (2,):

    ```
    >>> binom_conf_interval(4, 5, interval='wilson')
    array([0.57921724, 0.92078259])

    ```

    Arrays of arbitrary dimension are supported. The Wilson and Jeffreys
    intervals give similar results, even for small k, n:

    ```
    >>> binom_conf_interval([1, 2], 5, interval='wilson')
    array([[0.07921741, 0.21597328],
           [0.42078276, 0.61736012]])

    ```
    ```
    >>> binom_conf_interval([1, 2,], 5, interval='jeffreys')
    array([[0.0842525 , 0.21789949],
           [0.42218001, 0.61753691]])

    ```
    ```
    >>> binom_conf_interval([1, 2], 5, interval='flat')
    array([[0.12139799, 0.24309021],
           [0.45401727, 0.61535699]])

    ```

    In contrast, the Wald interval gives poor results for small k, n.
    For k = 0 or k = n, the interval always has zero length.

    ```
    >>> binom_conf_interval([1, 2], 5, interval='wald')
    array([[0.02111437, 0.18091075],
           [0.37888563, 0.61908925]])

    ```

    For confidence intervals approaching 1, the Wald interval for
    0 < k < n can give intervals that extend outside [0, 1]:

    ```
    >>> binom_conf_interval([1, 2], 5, interval='wald', confidence_level=0.99)
    array([[-0.26077835, -0.16433593],
           [ 0.66077835,  0.96433593]])

    ```
    Go BackOpen In Tab