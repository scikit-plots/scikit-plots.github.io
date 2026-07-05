# fit\_line[#](#fit-line "Link to this heading")

scikitplot.externals.\_probscale.fit\_line(**x**, **y**, **xhat=None**, **fitprobs=None**, **fitlogs=None**, **dist=None**, **estimate\_ci=False**, **niter=10000**, **alpha=0.05**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/externals/_probscale/viz.py#L455)[#](#scikitplot.externals._probscale.fit_line "Link to this definition")
:   Fits a line to x-y data in various forms (linear, log, prob scales).

    Parameters:
    :   ****x, y****array-like
        :   Independent and dependent data, respectively.

        ****xhat****array-like, optional
        :   The values at which `yhat` should should be estimated. If
            not provided, falls back to the sorted values of `x`.

        ****fitprobs, fitlogs****str, optional.
        :   Defines how data should be transformed. Valid values are
            ‘x’, ‘y’, or ‘both’. If using `fitprobs`, variables should
            be expressed as a percentage, i.e.,
            for a probability transform, data will be transformed with
            `lambda x: dist.ppf(x / 100.)`.
            For a log transform, `lambda x: numpy.log(x)`.
            Take care to not pass the same value to both `fitlogs` and
            `figprobs` as both transforms will be applied.

        ****dist****distribution, optional
        :   A fully-spec’d scipy.stats distribution-like object
            such that `dist.ppf` and `dist.cdf` can be called. If not
            provided, defaults to a minimal implementation of
            `scipy.stats.norm`.

        ****estimate\_ci****bool, optional (False)
        :   Estimate and draw a confidence band around the best-fit line
            using a percentile bootstrap.

        ****niter****int, optional (default = 10000)
        :   Number of bootstrap iterations if `estimate_ci` is provided.

        ****alpha****float, optional (default = 0.05)
        :   The confidence level of the bootstrap estimate.

    Returns:
    :   ****xhat, yhat****numpy arrays
        :   Linear model estimates of `x` and `y`.

        ****results****dict
        :   Dictionary of linear fit results. Keys include:

            > * slope
            > * intercept
            > * yhat\_lo (lower confidence interval of the estimated y-vals)
            > * yhat\_hi (upper confidence interval of the estimated y-vals)