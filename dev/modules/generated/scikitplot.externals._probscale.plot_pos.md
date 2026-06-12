# plot\_pos[#](#plot-pos "Link to this heading")

scikitplot.externals.\_probscale.plot\_pos(**data**, **postype=None**, **alpha=None**, **beta=None**, **exceedance=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/576badd/scikitplot/externals/_probscale/viz.py#L302)[#](#scikitplot.externals._probscale.plot_pos "Link to this definition")
:   Compute the plotting positions for a dataset. Heavily borrows from
    `scipy.stats.mstats.plotting_positions`.

    A plotting position is defined as: `(i-alpha)/(n+1-alpha-beta)`
    where:

    > * `i` is the rank order
    > * `n` is the size of the dataset
    > * `alpha` and `beta` are parameters used to adjust the
    >   positions.

    The values of `alpha` and `beta` can be explicitly set. Typical
    values can also be access via the `postype` parameter. Available
    `postype` values (alpha, beta) are:

    > “type 4” (alpha=0, beta=1)
    > :   Linear interpolation of the empirical CDF.
    >
    > “type 5” or “hazen” (alpha=0.5, beta=0.5)
    > :   Piecewise linear interpolation.
    >
    > “type 6” or “weibull” (alpha=0, beta=0)
    > :   Weibull plotting positions. Unbiased exceedance probability
    >     for all distributions. Recommended for hydrologic
    >     applications.
    >
    > “type 7” (alpha=1, beta=1)
    > :   The default values in R. Not recommended with probability
    >     scales as the min and max data points get plotting positions
    >     of 0 and 1, respectively, and therefore cannot be shown.
    >
    > “type 8” (alpha=1/3, beta=1/3)
    > :   Approximately median-unbiased.
    >
    > “type 9” or “blom” (alpha=0.375, beta=0.375)
    > :   Approximately unbiased positions if the data are normally
    >     distributed.
    >
    > “median” (alpha=0.3175, beta=0.3175)
    > :   Median exceedance probabilities for all distributions
    >     (used in `scipy.stats.probplot`).
    >
    > “apl” or “pwm” (alpha=0.35, beta=0.35)
    > :   Used with probability-weighted moments.
    >
    > “cunnane” (alpha=0.4, beta=0.4)
    > :   Nearly unbiased quantiles for normally distributed data.
    >     This is the default value.
    >
    > “gringorten” (alpha=0.44, beta=0.44)
    > :   Used for Gumble distributions.

    Parameters:
    :   ****data****array-like
        :   The values whose plotting positions need to be computed.

        ****postype****string, optional (default: “cunnane”)


        ****alpha, beta****float, optional
        :   Custom plotting position parameters is the options available
            through the `postype` parameter are insufficient.

        ****exceedance****bool, optional (default: False)
        :   Toggles “exceedance” vs “non-exceedance” probabilily plots.
            By default, non-exceedance plots are drawn where the plot
            generally slopes from the lower left to the upper right,
            and show the probability that a new observation will be
            less than a given point. By contrast, exceedance plots show
            the probability that a new observation will be greater than
            a given point.

    Returns:
    :   ****plot\_pos****numpy.array
        :   The computed plotting positions, sorted.

        ****data\_sorted****numpy.array
        :   The original data values, sorted.

    References

    <https://rdrr.io/cran/lmomco/man/pp.html>
    <http://astrostatistics.psu.edu/su07/R/html/stats/html/quantile.html>
    <http://docs.scipy.org/doc/scipy-0.17.0/reference/generated/scipy.stats.probplot.html>
    <http://docs.scipy.org/doc/scipy-0.17.0/reference/generated/scipy.stats.mstats.plotting_positions.html>