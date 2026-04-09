# akaike\_info\_criterion[#](#akaike-info-criterion "Link to this heading")

scikitplot.cexternals.\_astropy.stats.akaike\_info\_criterion(**log\_likelihood**, **n\_params**, **n\_samples**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/cexternals/_astropy/stats/info_theory.py#L218)[#](#scikitplot.cexternals._astropy.stats.akaike_info_criterion "Link to this definition")
:   Computes the Akaike Information Criterion (AIC).

    Like the Bayesian Information Criterion, the AIC is a measure of
    relative fitting quality which is used for fitting evaluation and model
    selection. The decision is in favor of the model with the lowest AIC.

    AIC is given as

    \[\mathrm{AIC} = 2(k - L)\]

    in which \(n\) is the sample size, \(k\) is the number of free
    parameters, and \(L\) is the log likelihood function of the model
    evaluated at the maximum likelihood estimate (i. e., the parameters for
    which L is maximized).

    In case that the sample size is not “large enough” a correction is
    applied, i.e.

    \[\mathrm{AIC} = 2(k - L) + \dfrac{2k(k+1)}{n - k - 1}\]

    Rule of thumb [[1]](#r56c92aff02b4-1):

    \(\Delta\mathrm{AIC}\_i = \mathrm{AIC}\_i - \mathrm{AIC}\_{min}\)

    \(\Delta\mathrm{AIC}\_i < 2\): substantial support for model i

    \(3 < \Delta\mathrm{AIC}\_i < 7\): considerably less support for model i

    \(\Delta\mathrm{AIC}\_i > 10\): essentially none support for model i

    in which \(\mathrm{AIC}\_{min}\) stands for the lower AIC among the
    models which are being compared.

    For detailed explanations see [[1]](#r56c92aff02b4-1)-[[6]](#r56c92aff02b4-6).

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
    :   ****aic****float
        :   Akaike Information Criterion.

    Parameters:
    :   * ****log\_likelihood**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****n\_params**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_samples**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    Return type:
    :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")

    References

    [1]
    ([1](#id1),[2](#id2))

    Cavanaugh, J. E. Model Selection Lecture II: The Akaike
    Information Criterion.
    <<http://machinelearning102.pbworks.com/w/file/fetch/47699383/ms_lec_2_ho.pdf>>

    [[2](#id10)]

    Mazerolle, M. J. Making sense out of Akaike’s Information
    Criterion (AIC): its use and interpretation in model selection and
    inference from ecological data.

    [3]

    Wikipedia. Akaike Information Criterion.
    <<https://en.wikipedia.org/wiki/Akaike_information_criterion>>

    [4]

    Origin Lab. Comparing Two Fitting Functions.
    <<https://www.originlab.com/doc/Origin-Help/PostFit-CompareFitFunc>>

    [5]

    Liddle, A. R. Information Criteria for Astrophysical Model
    Selection. 2008. <<https://arxiv.org/pdf/astro-ph/0701113v2.pdf>>

    [[6](#id3)]

    Liddle, A. R. How many cosmological parameters? 2008.
    <<https://arxiv.org/pdf/astro-ph/0401198v3.pdf>>

    Examples

    The following example was originally presented in [[2]](#r56c92aff02b4-2). Basically, two
    models are being compared. One with six parameters (model 1) and another
    with five parameters (model 2). Despite of the fact that model 2 has a
    lower AIC, we could decide in favor of model 1 since the difference (in
    AIC) between them is only about 1.0.

    ```
    >>> n_samples = 121
    >>> lnL1 = -3.54
    >>> n1_params = 6
    >>> lnL2 = -4.17
    >>> n2_params = 5
    >>> aic1 = akaike_info_criterion(lnL1, n1_params, n_samples)
    >>> aic2 = akaike_info_criterion(lnL2, n2_params, n_samples)
    >>> aic1 - aic2
    0.9551029748283746

    ```

    Therefore, we can strongly support the model 1 with the advantage that
    it has more free parameters.