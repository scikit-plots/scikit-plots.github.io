# tweedie\_gen[#](#tweedie-gen "Link to this heading")

class scikitplot.externals.\_tweedie.tweedie\_gen(**momtype=1**, **a=None**, **b=None**, **xtol=1e-14**, **badvalue=None**, **name=None**, **longname=None**, **shapes=None**, **seed=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/externals/_tweedie/_tweedie_dist.py#L59)[#](#scikitplot.externals._tweedie.tweedie_gen "Link to this definition")
:   A Tweedie continuous random variable inherited [`scipy.stats.rv_continuous`](https://scipy.github.io/devdocs/reference/generated/scipy.stats.rv_continuous.html#scipy.stats.rv_continuous "(in SciPy v1.19.0.dev)").

    > **See also**
    > [`tweedie`](scikitplot.externals._tweedie.tweedie.html#scikitplot.externals._tweedie.tweedie "scikitplot.externals._tweedie.tweedie")
    :   An instance of [`tweedie_gen`](#scikitplot.externals._tweedie.tweedie_gen "scikitplot.externals._tweedie.tweedie_gen"), providing Tweedie distribution functionality.

    [`scipy.stats.rv_continuous`](https://scipy.github.io/devdocs/reference/generated/scipy.stats.rv_continuous.html#scipy.stats.rv_continuous "(in SciPy v1.19.0.dev)")
    :   doc <https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.rv_continuous.html>

    Notes

    Tweedie is a family of distributions belonging to the class of exponential
    dispersion models.

    \[f(x; \mu, \phi, p) = a(x, \phi, p) \exp((y \theta - \kappa(\theta))
    / \phi)\]

    where \(\theta = {\mu^{1-p}}{1-p}\) when \(p \ne 1\) and
    \(\theta = \log(\mu)\) when \(p = 1\), and \(\kappa(\theta) =
    [\{(1 - p) \theta + 1\} ^ {(2 - p) / (1 - p)} - 1] / (2 - p)\)
    for \(p \ne 2\) and \(\kappa(\theta) = - \log(1 - \theta)\) for
    \(p = 2\).

    Except in a few special cases (discussed below) \(a(x, \phi, p)\) is
    hard to to write out.

    This class incorporates the Series method of evaluation of the Tweedie
    density for \(1 < p < 2\) and \(p > 2\). There are special cases
    at \(p = 0, 1, 2, 3\) where the method is equivalent to the Gaussian
    (Normal), Poisson, Gamma, and Inverse Gaussian (Normal).

    For cdfs, only the special cases and \(1 < p < 2\) are implemented.
    The author has not found any documentation on series evaluation of the cdf
    for \(p > 2\).

    Additionally, the R package `tweedie` also incorporates a (potentially)
    faster method that involves a Fourier inversion. This method is harder
    to understand, so I’ve not implemented it. However, others should feel free
    to attempt to add this themselves.

    References

    Dunn, Peter K. and Smyth, Gordon K. 2001, Tweedie Family Densities: Methods
    of Evaluation

    Dunn, Peter K. and Smyth, Gordon K. 2005, Series evaluation of Tweedie
    exponential dispersion model densities

    Examples

    Try it in your browser!

    The density can be found using the pdf method.

    ```
    >>> tweedie(p=1.5, mu=1, phi=1).pdf(1)
    0.357...

    ```

    The cdf can be found using the cdf method.

    ```
    >>> tweedie(p=1.5, mu=1, phi=1).cdf(1)
    0.603...

    ```

    The ppf can be found using the ppf method.

    ```
    >>> tweedie(p=1.5, mu=1, phi=1).ppf(0.603)
    0.998...

    ```
    Go BackOpen In Tab

    \_\_call\_\_(**\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L913)[#](#scikitplot.externals._tweedie.tweedie_gen.__call__ "Link to this definition")
    :   Freeze the distribution for the given arguments.

        Parameters:
        :   ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution. Should include all
                the non-optional arguments, may include `loc` and `scale`.

        Returns:
        :   ****rv\_frozen****rv\_frozen instance
            :   The frozen distribution.

    cdf(**x**, **\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L2135)[#](#scikitplot.externals._tweedie.tweedie_gen.cdf "Link to this definition")
    :   Cumulative distribution function of the given RV.

        Parameters:
        :   ****x****array\_like
            :   quantiles

            ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

        Returns:
        :   ****cdf****ndarray
            :   Cumulative distribution function evaluated at `x`

    entropy(**\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L1262)[#](#scikitplot.externals._tweedie.tweedie_gen.entropy "Link to this definition")
    :   Differential entropy of the RV.

        Parameters:
        :   ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information).

            ****loc****array\_like, optional
            :   Location parameter (default=0).

            ****scale****array\_like, optional
            :   Scale parameter (default=1).

        Notes

        Entropy is defined base `e`:

        ```
        >>> import numpy as np
        >>> from scipy.stats._distn_infrastructure import rv_discrete
        >>> drv = rv_discrete(values=((0, 1), (0.5, 0.5)))
        >>> np.allclose(drv.entropy(), np.log(2.0))
        True

        ```

    expect(**func=None**, **args=()**, **loc=0**, **scale=1**, **lb=None**, **ub=None**, **conditional=False**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L2922)[#](#scikitplot.externals._tweedie.tweedie_gen.expect "Link to this definition")
    :   Calculate expected value of a function with respect to the
        distribution by numerical integration.

        The expected value of a function `f(x)` with respect to a
        distribution `dist` is defined as:

        ```
                ub
        E[f(x)] = Integral(f(x) * dist.pdf(x)),
                lb

        ```

        where `ub` and `lb` are arguments and `x` has the `dist.pdf(x)`
        distribution. If the bounds `lb` and `ub` correspond to the
        support of the distribution, e.g. `[-inf, inf]` in the default
        case, then the integral is the unrestricted expectation of `f(x)`.
        Also, the function `f(x)` may be defined such that `f(x)` is `0`
        outside a finite interval in which case the expectation is
        calculated within the finite range `[lb, ub]`.

        Parameters:
        :   ****func****callable, optional
            :   Function for which integral is calculated. Takes only one argument.
                The default is the identity mapping f(x) = x.

            ****args****tuple, optional
            :   Shape parameters of the distribution.

            ****loc****float, optional
            :   Location parameter (default=0).

            ****scale****float, optional
            :   Scale parameter (default=1).

            ****lb, ub****scalar, optional
            :   Lower and upper bound for integration. Default is set to the
                support of the distribution.

            ****conditional****bool, optional
            :   If True, the integral is corrected by the conditional probability
                of the integration interval. The return value is the expectation
                of the function, conditional on being in the given interval.
                Default is False.

            ****Additional keyword arguments are passed to the integration routine.****

        Returns:
        :   ****expect****float
            :   The calculated expected value.

        Notes

        The integration behavior of this function is inherited from
        `scipy.integrate.quad`. Neither this function nor
        `scipy.integrate.quad` can verify whether the integral exists or is
        finite. For example `cauchy(0).mean()` returns `np.nan` and
        `cauchy(0).expect()` returns `0.0`.

        Likewise, the accuracy of results is not verified by the function.
        `scipy.integrate.quad` is typically reliable for integrals that are
        numerically favorable, but it is not guaranteed to converge
        to a correct value for all possible intervals and integrands. This
        function is provided for convenience; for critical applications,
        check results against other integration methods.

        The function is not vectorized.

        Examples

        Try it in your browser!

        To understand the effect of the bounds of integration consider

        ```
        >>> from scipy.stats import expon
        >>> expon(1).expect(lambda x: 1, lb=0.0, ub=2.0)
        0.6321205588285578

        ```

        This is close to

        ```
        >>> expon(1).cdf(2.0) - expon(1).cdf(0.0)
        0.6321205588285577

        ```

        If `conditional=True`

        ```
        >>> expon(1).expect(lambda x: 1, lb=0.0, ub=2.0, conditional=True)
        1.0000000000000002

        ```

        The slight deviation from 1 is due to numerical integration.

        The integrand can be treated as a complex-valued function
        by passing `complex_func=True` to `scipy.integrate.quad` .

        ```
        >>> import numpy as np
        >>> from scipy.stats import vonmises
        >>> res = vonmises(loc=2, kappa=1).expect(lambda x: np.exp(1j*x),
        ...                                       complex_func=True)
        >>> res
        (-0.18576377217422957+0.40590124735052263j)

        ```
        ```
        >>> np.angle(res)  # location of the (circular) distribution
        2.0

        ```
        Go BackOpen In Tab

    fit(**data**, **\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L2552)[#](#scikitplot.externals._tweedie.tweedie_gen.fit "Link to this definition")
    :   Return estimates of shape (if applicable), location, and scale
        parameters from data. The default estimation method is Maximum
        Likelihood Estimation (MLE), but Method of Moments (MM)
        is also available.

        Starting estimates for the fit are given by input arguments;
        for any arguments not provided with starting estimates,
        `self._fitstart(data)` is called to generate such.

        One can hold some parameters fixed to specific values by passing in
        keyword arguments `f0`, `f1`, …, `fn` (for shape parameters)
        and `floc` and `fscale` (for location and scale parameters,
        respectively).

        Parameters:
        :   ****data****array\_like or `CensoredData` instance
            :   Data to use in estimating the distribution parameters.

            ****arg1, arg2, arg3,…****floats, optional
            :   Starting value(s) for any shape-characterizing arguments (those not
                provided will be determined by a call to `_fitstart(data)`).
                No default value.

            ****\*\*kwds****floats, optional
            :   * `loc`: initial guess of the distribution’s location parameter.
                * `scale`: initial guess of the distribution’s scale parameter.

                Special keyword arguments are recognized as holding certain
                parameters fixed:

                * f0, …, fn : hold respective shape parameters fixed.
                  Alternatively, shape parameters to fix can be specified by name.
                  For example, if `self.shapes == "a, b"`, `fa` and `fix_a`
                  are equivalent to `f0`, and `fb` and `fix_b` are
                  equivalent to `f1`.
                * floc : hold location parameter fixed to specified value.
                * fscale : hold scale parameter fixed to specified value.
                * optimizer : The optimizer to use. The optimizer must take
                  `func` and starting position as the first two arguments,
                  plus `args` (for extra arguments to pass to the
                  function to be optimized) and `disp`.
                  The `fit` method calls the optimizer with `disp=0` to suppress output.
                  The optimizer must return the estimated parameters.
                * method : The method to use. The default is “MLE” (Maximum
                  Likelihood Estimate); “MM” (Method of Moments)
                  is also available.

        Returns:
        :   ****parameter\_tuple****tuple of floats
            :   Estimates for any shape parameters (if applicable), followed by
                those for location and scale. For most random variables, shape
                statistics will be returned, but there are exceptions (e.g.
                `norm`).

        Raises:
        :   TypeError, ValueError
            :   If an input is invalid

            `~scipy.stats.FitError`
            :   If fitting fails or the fit produced would be invalid

        Notes

        With `method="MLE"` (default), the fit is computed by minimizing
        the negative log-likelihood function. A large, finite penalty
        (rather than infinite negative log-likelihood) is applied for
        observations beyond the support of the distribution.

        With `method="MM"`, the fit is computed by minimizing the L2 norm
        of the relative errors between the first **k** raw (about zero) data
        moments and the corresponding distribution moments, where **k** is the
        number of non-fixed parameters.
        More precisely, the objective function is:

        ```
        (((data_moments - dist_moments)
          / np.maximum(np.abs(data_moments), 1e-8))**2).sum()

        ```

        where the constant `1e-8` avoids division by zero in case of
        vanishing data moments. Typically, this error norm can be reduced to
        zero.
        Note that the standard method of moments can produce parameters for
        which some data are outside the support of the fitted distribution;
        this implementation does nothing to prevent this.

        For either method,
        the returned answer is not guaranteed to be globally optimal; it
        may only be locally optimal, or the optimization may fail altogether.
        If the data contain any of `np.nan`, `np.inf`, or `-np.inf`,
        the `fit` method will raise a `RuntimeError`.

        When passing a `CensoredData` instance to `data`, the log-likelihood
        function is defined as:

        \[\begin{split}l(\pmb{\theta}; k) & = \sum
        \log(f(k\_u; \pmb{\theta}))
        + \sum
        \log(F(k\_l; \pmb{\theta})) \\
        & + \sum
        \log(1 - F(k\_r; \pmb{\theta})) \\
        & + \sum
        \log(F(k\_{\text{high}, i}; \pmb{\theta})
        - F(k\_{\text{low}, i}; \pmb{\theta}))\end{split}\]

        where \(f\) and \(F\) are the pdf and cdf, respectively, of the
        function being fitted, \(\pmb{\theta}\) is the parameter vector,
        \(u\) are the indices of uncensored observations,
        \(l\) are the indices of left-censored observations,
        \(r\) are the indices of right-censored observations,
        subscripts “low”/”high” denote endpoints of interval-censored observations, and
        \(i\) are the indices of interval-censored observations.

        Examples

        Try it in your browser!

        Generate some data to fit: draw random variates from the `beta`
        distribution

        ```
        >>> import numpy as np
        >>> from scipy.stats import beta
        >>> a, b = 1., 2.
        >>> rng = np.random.default_rng(172786373191770012695001057628748821561)
        >>> x = beta.rvs(a, b, size=1000, random_state=rng)

        ```

        Now we can fit all four parameters (`a`, `b`, `loc` and
        `scale`):

        ```
        >>> a1, b1, loc1, scale1 = beta.fit(x)
        >>> a1, b1, loc1, scale1
        (1.0198945204435628, 1.9484708982737828, 4.372241314917588e-05, 0.9979078845964814)

        ```

        The fit can be done also using a custom optimizer:

        ```
        >>> from scipy.optimize import minimize
        >>> def custom_optimizer(func, x0, args=(), disp=0):
        ...     res = minimize(func, x0, args, method="slsqp", options={"disp": disp})
        ...     if res.success:
        ...         return res.x
        ...     raise RuntimeError('optimization routine failed')
        >>> a1, b1, loc1, scale1 = beta.fit(x, method="MLE", optimizer=custom_optimizer)
        >>> a1, b1, loc1, scale1
        (1.0198821087258905, 1.948484145914738, 4.3705304486881485e-05, 0.9979104663953395)

        ```

        We can also use some prior knowledge about the dataset: let’s keep
        `loc` and `scale` fixed:

        ```
        >>> a1, b1, loc1, scale1 = beta.fit(x, floc=0, fscale=1)
        >>> loc1, scale1
        (0, 1)

        ```

        We can also keep shape parameters fixed by using `f`-keywords. To
        keep the zero-th shape parameter `a` equal 1, use `f0=1` or,
        equivalently, `fa=1`:

        ```
        >>> a1, b1, loc1, scale1 = beta.fit(x, fa=1, floc=0, fscale=1)
        >>> a1
        1

        ```

        Not all distributions return estimates for the shape parameters.
        `norm` for example just returns estimates for location and scale:

        ```
        >>> from scipy.stats import norm
        >>> x = norm.rvs(a, b, size=1000, random_state=123)
        >>> loc1, scale1 = norm.fit(x)
        >>> loc1, scale1
        (0.92087172783841631, 2.0015750750324668)

        ```
        Go BackOpen In Tab

    fit\_loc\_scale(**data**, **\*args**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L2864)[#](#scikitplot.externals._tweedie.tweedie_gen.fit_loc_scale "Link to this definition")
    :   Estimate loc and scale parameters from data using 1st and 2nd moments.

        Parameters:
        :   ****data****array\_like
            :   Data to fit.

            ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information).

        Returns:
        :   ****Lhat****float
            :   Estimated location parameter for the data.

            ****Shat****float
            :   Estimated scale parameter for the data.

    freeze(**\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L893)[#](#scikitplot.externals._tweedie.tweedie_gen.freeze "Link to this definition")
    :   Freeze the distribution for the given arguments.

        Parameters:
        :   ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution. Should include all
                the non-optional arguments, may include `loc` and `scale`.

        Returns:
        :   ****rv\_frozen****rv\_frozen instance
            :   The frozen distribution.

    interval(**confidence**, **\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L1475)[#](#scikitplot.externals._tweedie.tweedie_gen.interval "Link to this definition")
    :   Confidence interval with equal areas around the median.

        Parameters:
        :   ****confidence****array\_like of float
            :   Probability that an rv will be drawn from the returned range.
                Each value should be in the range [0, 1].

            ****arg1, arg2, …****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information).

            ****loc****array\_like, optional
            :   location parameter, Default is 0.

            ****scale****array\_like, optional
            :   scale parameter, Default is 1.

        Returns:
        :   ****a, b****ndarray of float
            :   end-points of range that contain `100 * alpha %` of the rv’s
                possible values.

        Notes

        This is implemented as `ppf([p_tail, 1-p_tail])`, where
        `ppf` is the inverse cumulative distribution function and
        `p_tail = (1-confidence)/2`. Suppose `[c, d]` is the support of a
        discrete distribution; then `ppf([0, 1]) == (c-1, d)`. Therefore,
        when `confidence=1` and the distribution is discrete, the left end
        of the interval will be beyond the support of the distribution.
        For discrete distributions, the interval will limit the probability
        in each tail to be less than or equal to `p_tail` (usually
        strictly less).

    isf(**q**, **\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L2350)[#](#scikitplot.externals._tweedie.tweedie_gen.isf "Link to this definition")
    :   Inverse survival function (inverse of `sf`) at q of the given RV.

        Parameters:
        :   ****q****array\_like
            :   upper tail probability

            ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

        Returns:
        :   ****x****ndarray or scalar
            :   Quantile corresponding to the upper tail probability q.

    logcdf(**x**, **\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L2177)[#](#scikitplot.externals._tweedie.tweedie_gen.logcdf "Link to this definition")
    :   Log of the cumulative distribution function at x of the given RV.

        Parameters:
        :   ****x****array\_like
            :   quantiles

            ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

        Returns:
        :   ****logcdf****array\_like
            :   Log of the cumulative distribution function evaluated at x

    logpdf(**x**, **\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L2093)[#](#scikitplot.externals._tweedie.tweedie_gen.logpdf "Link to this definition")
    :   Log of the probability density function at x of the given RV.

        This uses a more numerically accurate calculation if available.

        Parameters:
        :   ****x****array\_like
            :   quantiles

            ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

        Returns:
        :   ****logpdf****array\_like
            :   Log of the probability density function evaluated at x

    logsf(**x**, **\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L2260)[#](#scikitplot.externals._tweedie.tweedie_gen.logsf "Link to this definition")
    :   Log of the survival function of the given RV.

        Returns the log of the “survival function,” defined as (1 - `cdf`),
        evaluated at `x`.

        Parameters:
        :   ****x****array\_like
            :   quantiles

            ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

        Returns:
        :   ****logsf****ndarray
            :   Log of the survival function evaluated at `x`.

    mean(**\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L1402)[#](#scikitplot.externals._tweedie.tweedie_gen.mean "Link to this definition")
    :   Mean of the distribution.

        Parameters:
        :   ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

        Returns:
        :   ****mean****float
            :   the mean of the distribution

    median(**\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L1376)[#](#scikitplot.externals._tweedie.tweedie_gen.median "Link to this definition")
    :   Median of the distribution.

        Parameters:
        :   ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   Location parameter, Default is 0.

            ****scale****array\_like, optional
            :   Scale parameter, Default is 1.

        Returns:
        :   ****median****float
            :   The median of the distribution.

        > **See also**
        > `rv_discrete.ppf`
        :   Inverse of the CDF

    moment(**order**, **\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L1299)[#](#scikitplot.externals._tweedie.tweedie_gen.moment "Link to this definition")
    :   non-central moment of distribution of specified order.

        Parameters:
        :   ****order****int, order >= 1
            :   Order of moment.

            ****arg1, arg2, arg3,…****float
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information).

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

    nnlf(**theta**, **x**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L1556)[#](#scikitplot.externals._tweedie.tweedie_gen.nnlf "Link to this definition")
    :   Negative loglikelihood function.
        .. rubric:: Notes

        This is `-sum(log pdf(x, theta), axis=0)` where `theta` are the
        parameters (including loc and scale).

    pdf(**x**, **\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L2054)[#](#scikitplot.externals._tweedie.tweedie_gen.pdf "Link to this definition")
    :   Probability density function at x of the given RV.

        Parameters:
        :   ****x****array\_like
            :   quantiles

            ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

        Returns:
        :   ****pdf****ndarray
            :   Probability density function evaluated at x

    ppf(**q**, **\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L2305)[#](#scikitplot.externals._tweedie.tweedie_gen.ppf "Link to this definition")
    :   Percent point function (inverse of `cdf`) at q of the given RV.

        Parameters:
        :   ****q****array\_like
            :   lower tail probability

            ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

        Returns:
        :   ****x****array\_like
            :   quantile corresponding to the lower tail probability q.

    property random\_state[#](#scikitplot.externals._tweedie.tweedie_gen.random_state "Link to this definition")
    :   Get or set the generator object for generating random variates.

        If `random_state` is None (or `np.random`), the
        `numpy.random.RandomState` singleton is used.
        If `random_state` is an int, a new `RandomState` instance is used,
        seeded with `random_state`.
        If `random_state` is already a `Generator` or `RandomState`
        instance, that instance is used.

    rvs(**\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L1080)[#](#scikitplot.externals._tweedie.tweedie_gen.rvs "Link to this definition")
    :   Random variates of given type.

        Parameters:
        :   ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information).

            ****loc****array\_like, optional
            :   Location parameter (default=0).

            ****scale****array\_like, optional
            :   Scale parameter (default=1).

            ****size****int or tuple of ints, optional
            :   Defining number of random variates (default is 1).

            ****random\_state****{None, int, `numpy.random.Generator`,
            :   > `numpy.random.RandomState`}, optional

                If `random_state` is None (or `np.random`), the
                `numpy.random.RandomState` singleton is used.
                If `random_state` is an int, a new `RandomState` instance is
                used, seeded with `random_state`.
                If `random_state` is already a `Generator` or `RandomState`
                instance, that instance is used.

        Returns:
        :   ****rvs****ndarray or scalar
            :   Random variates of given `size`.

    sf(**x**, **\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L2219)[#](#scikitplot.externals._tweedie.tweedie_gen.sf "Link to this definition")
    :   Survival function (1 - `cdf`) at x of the given RV.

        Parameters:
        :   ****x****array\_like
            :   quantiles

            ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

        Returns:
        :   ****sf****array\_like
            :   Survival function evaluated at x

    stats(**\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L1149)[#](#scikitplot.externals._tweedie.tweedie_gen.stats "Link to this definition")
    :   Some statistics of the given RV.

        Parameters:
        :   ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

            ****moments****str, optional
            :   composed of letters [‘mvsk’] defining which moments to compute:
                ‘m’ = mean,
                ‘v’ = variance,
                ‘s’ = (Fisher’s) skew,
                ‘k’ = (Fisher’s) kurtosis.
                (default is ‘mv’)

        Returns:
        :   ****stats****sequence
            :   of requested moments.

    std(**\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L1452)[#](#scikitplot.externals._tweedie.tweedie_gen.std "Link to this definition")
    :   Standard deviation of the distribution.

        Parameters:
        :   ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

        Returns:
        :   ****std****float
            :   standard deviation of the distribution

    support(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L1521)[#](#scikitplot.externals._tweedie.tweedie_gen.support "Link to this definition")
    :   Support of the distribution.

        Parameters:
        :   ****arg1, arg2, …****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information).

            ****loc****array\_like, optional
            :   location parameter, Default is 0.

            ****scale****array\_like, optional
            :   scale parameter, Default is 1.

        Returns:
        :   ****a, b****array\_like
            :   end-points of the distribution’s support.

    var(**\*args**, **\*\*kwds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/../scipy/stats/_distn_infrastructure.py#L1427)[#](#scikitplot.externals._tweedie.tweedie_gen.var "Link to this definition")
    :   Variance of the distribution.

        Parameters:
        :   ****arg1, arg2, arg3,…****array\_like
            :   The shape parameter(s) for the distribution (see docstring of the
                instance object for more information)

            ****loc****array\_like, optional
            :   location parameter (default=0)

            ****scale****array\_like, optional
            :   scale parameter (default=1)

        Returns:
        :   ****var****float
            :   the variance of the distribution