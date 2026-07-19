# bayesian\_info\_criterion[#](#bayesian-info-criterion "Link to this heading")

scikitplot.cexternals.\_astropy.stats.bayesian\_info\_criterion(**log\_likelihood**, **n\_params**, **n\_samples**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/cexternals/_astropy/stats/info_theory.py#L24)[#](#scikitplot.cexternals._astropy.stats.bayesian_info_criterion "Link to this definition")
:   Computes the Bayesian Information Criterion (BIC) given the log of the
    likelihood function evaluated at the estimated (or analytically derived)
    parameters, the number of parameters, and the number of samples.

    The BIC is usually applied to decide whether increasing the number of free
    parameters (hence, increasing the model complexity) yields significantly
    better fittings. The decision is in favor of the model with the lowest
    BIC.

    BIC is given as

    \[\mathrm{BIC} = k \ln(n) - 2L,\]

    in which \(n\) is the sample size, \(k\) is the number of free
    parameters, and \(L\) is the log likelihood function of the model
    evaluated at the maximum likelihood estimate (i. e., the parameters for
    which L is maximized).

    When comparing two models define
    \(\Delta \mathrm{BIC} = \mathrm{BIC}\_h - \mathrm{BIC}\_l\), in which
    \(\mathrm{BIC}\_h\) is the higher BIC, and \(\mathrm{BIC}\_l\) is
    the lower BIC. The higher is \(\Delta \mathrm{BIC}\) the stronger is
    the evidence against the model with higher BIC.

    The general rule of thumb is:

    \(0 < \Delta\mathrm{BIC} \leq 2\): weak evidence that model low is
    better

    \(2 < \Delta\mathrm{BIC} \leq 6\): moderate evidence that model low is
    better

    \(6 < \Delta\mathrm{BIC} \leq 10\): strong evidence that model low is
    better

    \(\Delta\mathrm{BIC} > 10\): very strong evidence that model low is
    better

    For a detailed explanation, see [[1]](#r0c3d5800687d-1) - [[5]](#r0c3d5800687d-5).

    Parameters:
    :   ****log\_likelihood****float
        :   Logarithm of the likelihood function of the model evaluated at the
            point of maxima (with respect to the parameter space).

        ****n\_params****int
        :   Number of free parameters of the model, i.e., dimension of the
            parameter space.

        ****n\_samples****int
        :   Number of observations.

    Returns:
    :   ****bic****float
        :   Bayesian Information Criterion.

    Parameters:
    :   * ****log\_likelihood**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****n\_params**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_samples**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    Return type:
    :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")

    References

    [1]
    ([1](#id1),[2](#id8))

    Richards, D. Maximum Likelihood Estimation and the Bayesian
    Information Criterion.
    <<https://hea-www.harvard.edu/astrostat/Stat310_0910/dr_20100323_mle.pdf>>

    [2]

    Wikipedia. Bayesian Information Criterion.
    <<https://en.wikipedia.org/wiki/Bayesian_information_criterion>>

    [3]

    Origin Lab. Comparing Two Fitting Functions.
    <<https://www.originlab.com/doc/Origin-Help/PostFit-CompareFitFunc>>

    [4]

    Liddle, A. R. Information Criteria for Astrophysical Model
    Selection. 2008. <<https://arxiv.org/pdf/astro-ph/0701113v2.pdf>>

    [[5](#id2)]

    Liddle, A. R. How many cosmological parameters? 2008.
    <<https://arxiv.org/pdf/astro-ph/0401198v3.pdf>>

    Examples

    Try it in your browser!

    The following example was originally presented in [[1]](#r0c3d5800687d-1). Consider a
    Gaussian model (mu, sigma) and a t-Student model (mu, sigma, delta).
    In addition, assume that the t model has presented a higher likelihood.
    The question that the BIC is proposed to answer is: “Is the increase in
    likelihood due to larger number of parameters?”

    ```
    >>> from astropy.stats.info_theory import bayesian_info_criterion
    >>> lnL_g = -176.4
    >>> lnL_t = -173.0
    >>> n_params_g = 2
    >>> n_params_t = 3
    >>> n_samples = 100
    >>> bic_g = bayesian_info_criterion(lnL_g, n_params_g, n_samples)
    >>> bic_t = bayesian_info_criterion(lnL_t, n_params_t, n_samples)
    >>> bic_g - bic_t
    np.float64(2.1948298140119391)

    ```

    Therefore, there exist a moderate evidence that the increasing in
    likelihood for t-Student model is due to the larger number of parameters.

    Go BackOpen In Tab