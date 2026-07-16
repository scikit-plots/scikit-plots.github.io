# akaike\_info\_criterion\_lsq[#](#akaike-info-criterion-lsq "Link to this heading")

scikitplot.cexternals.\_astropy.stats.akaike\_info\_criterion\_lsq(**ssr**, **n\_params**, **n\_samples**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/cexternals/_astropy/stats/info_theory.py#L327)[#](#scikitplot.cexternals._astropy.stats.akaike_info_criterion_lsq "Link to this definition")
:   Computes the Akaike Information Criterion assuming that the observations
    are Gaussian distributed.

    In this case, AIC is given as

    \[\mathrm{AIC} = n\ln\left(\dfrac{\mathrm{SSR}}{n}\right) + 2k\]

    In case that the sample size is not “large enough”, a correction is
    applied, i.e.

    \[\mathrm{AIC} = n\ln\left(\dfrac{\mathrm{SSR}}{n}\right) + 2k +
    \dfrac{2k(k+1)}{n-k-1}\]

    in which \(n\) is the sample size, \(k\) is the number of free
    parameters and \(\mathrm{SSR}\) stands for the sum of squared residuals
    between model and data.

    This is applicable, for instance, when the parameters of a model are
    estimated using the least squares statistic.

    Parameters:
    :   ****ssr****float
        :   Sum of squared residuals (SSR) between model and data.

        ****n\_params****int
        :   Number of free parameters of the model, i.e., the dimension of the
            parameter space.

        ****n\_samples****int
        :   Number of observations.

    Returns:
    :   ****aic****float
        :   Akaike Information Criterion.

    Parameters:
    :   * ****ssr**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****n\_params**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_samples**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    Return type:
    :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")

    References

    [1]

    Akaike Information Criterion.
    <<https://en.wikipedia.org/wiki/Akaike_information_criterion>>

    [2]

    Origin Lab. Comparing Two Fitting Functions.
    <<https://www.originlab.com/doc/Origin-Help/PostFit-CompareFitFunc>>

    Examples

    Try it in your browser!

    This example is based on Astropy Modeling webpage, Compound models
    section.

    ```
    >>> import numpy as np
    >>> from astropy.modeling import models, fitting
    >>> from astropy.stats.info_theory import akaike_info_criterion_lsq
    >>> np.random.seed(42)
    >>> # Generate fake data
    >>> g1 = models.Gaussian1D(.1, 0, 0.2) # changed this to noise level
    >>> g2 = models.Gaussian1D(.1, 0.3, 0.2) # and added another Gaussian
    >>> g3 = models.Gaussian1D(2.5, 0.5, 0.1)
    >>> x = np.linspace(-1, 1, 200)
    >>> y = g1(x) + g2(x) + g3(x) + np.random.normal(0., 0.2, x.shape)
    >>> # Fit with three Gaussians
    >>> g3_init = (models.Gaussian1D(.1, 0, 0.1)
    ...            + models.Gaussian1D(.1, 0.2, 0.15)
    ...            + models.Gaussian1D(2.4, .4, 0.1))
    >>> fitter = fitting.LevMarLSQFitter()
    >>> g3_fit = fitter(g3_init, x, y)
    >>> # Fit with two Gaussians
    >>> g2_init = (models.Gaussian1D(.1, 0, 0.1) +
    ...            models.Gaussian1D(2, 0.5, 0.1))
    >>> g2_fit = fitter(g2_init, x, y)
    >>> # Fit with only one Gaussian
    >>> g1_init = models.Gaussian1D(amplitude=2., mean=0.3, stddev=.5)
    >>> g1_fit = fitter(g1_init, x, y)
    >>> # Compute the mean squared errors
    >>> ssr_g3 = np.sum((g3_fit(x) - y)**2.0)
    >>> ssr_g2 = np.sum((g2_fit(x) - y)**2.0)
    >>> ssr_g1 = np.sum((g1_fit(x) - y)**2.0)
    >>> akaike_info_criterion_lsq(ssr_g3, 9, x.shape[0])
    np.float64(-634.5257517810961)
    >>> akaike_info_criterion_lsq(ssr_g2, 6, x.shape[0])
    np.float64(-662.83834510232043)
    >>> akaike_info_criterion_lsq(ssr_g1, 3, x.shape[0])
    np.float64(-647.47312032659499)

    ```

    Hence, from the AIC values, we would prefer to choose the model g2\_fit.
    However, we can considerably support the model g3\_fit, since the
    difference in AIC is about 2.4. We should reject the model g1\_fit.

    Go BackOpen In Tab