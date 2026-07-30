# scikitplot.stats[#](#module-scikitplot.stats "Link to this heading")

## scikitplot.stats[#](#id1 "Link to this heading")

Elegant statistical tools for intuitive and insightful data visualization and interpretation.

The [`stats`](#module-scikitplot.stats "scikitplot.stats") module offers a wide range of probability distributions, summary
and frequency statistics, correlation functions, statistical tests,
masked statistics, and additional tools.

****User guide.**** See the [Stats](../user_guide/stats/index.html#stats-index) section for further details.

## Astrostatistics: Bayesian Blocks for Time Series Analysis[#](#astrostatistics-bayesian-blocks-for-time-series-analysis "Link to this heading")

****User guide.**** See the [Astrostatistics Tools (experimental)](../user_guide/stats/index.html#astrostatistics-index) section for further details.

|  |  |
| --- | --- |
| [`Events`](../modules/generated/scikitplot.stats.Events.html#scikitplot.stats.Events "scikitplot.stats.Events") | Bayesian blocks fitness for binned or unbinned events. |
| [`FitnessFunc`](../modules/generated/scikitplot.stats.FitnessFunc.html#scikitplot.stats.FitnessFunc "scikitplot.stats.FitnessFunc") | Base class for bayesian blocks fitness functions. |
| [`PointMeasures`](../modules/generated/scikitplot.stats.PointMeasures.html#scikitplot.stats.PointMeasures "scikitplot.stats.PointMeasures") | Bayesian blocks fitness for point measures. |
| [`RegularEvents`](../modules/generated/scikitplot.stats.RegularEvents.html#scikitplot.stats.RegularEvents "scikitplot.stats.RegularEvents") | Bayesian blocks fitness for regular events. |
| [`bayesian_blocks`](../modules/generated/scikitplot.stats.bayesian_blocks.html#scikitplot.stats.bayesian_blocks "scikitplot.stats.bayesian_blocks") | Compute optimal segmentation of data with Scargle's Bayesian Blocks. |

## Astrostatistics Tools[#](#module-scikitplot.cexternals._astropy.stats.funcs "Link to this heading")

This module contains simple statistical algorithms that are
straightforwardly implemented as a single python function (or family of
functions).

This module should generally not be used directly. Everything in
`__all__` is imported into `astropy.stats`, and hence that package
should be used for access.

****User guide.**** See the [Astrostatistics Tools (experimental)](../user_guide/stats/index.html#astrostatistics-index) section for further details.

|  |  |
| --- | --- |
| [`binned_binom_proportion`](../modules/generated/scikitplot.cexternals._astropy.stats.binned_binom_proportion.html#scikitplot.cexternals._astropy.stats.binned_binom_proportion "scikitplot.cexternals._astropy.stats.binned_binom_proportion") | Binomial proportion and confidence interval in bins of a continuous variable `x`. |
| [`binom_conf_interval`](../modules/generated/scikitplot.cexternals._astropy.stats.binom_conf_interval.html#scikitplot.cexternals._astropy.stats.binom_conf_interval "scikitplot.cexternals._astropy.stats.binom_conf_interval") | Binomial proportion confidence interval given k successes, n trials. |
| [`bootstrap`](../modules/generated/scikitplot.cexternals._astropy.stats.bootstrap.html#scikitplot.cexternals._astropy.stats.bootstrap "scikitplot.cexternals._astropy.stats.bootstrap") | Performs bootstrap resampling on numpy arrays. |
| [`cdf_from_intervals`](../modules/generated/scikitplot.cexternals._astropy.stats.cdf_from_intervals.html#scikitplot.cexternals._astropy.stats.cdf_from_intervals "scikitplot.cexternals._astropy.stats.cdf_from_intervals") | Construct a callable piecewise-linear CDF from a pair of arrays. |
| [`fold_intervals`](../modules/generated/scikitplot.cexternals._astropy.stats.fold_intervals.html#scikitplot.cexternals._astropy.stats.fold_intervals "scikitplot.cexternals._astropy.stats.fold_intervals") | Fold the weighted intervals to the interval (0,1). |
| [`gaussian_fwhm_to_sigma`](../modules/generated/scikitplot.cexternals._astropy.stats.gaussian_fwhm_to_sigma.html#scikitplot.cexternals._astropy.stats.gaussian_fwhm_to_sigma "scikitplot.cexternals._astropy.stats.gaussian_fwhm_to_sigma") | Convert a string or number to a floating-point number, if possible. |
| [`gaussian_sigma_to_fwhm`](../modules/generated/scikitplot.cexternals._astropy.stats.gaussian_sigma_to_fwhm.html#scikitplot.cexternals._astropy.stats.gaussian_sigma_to_fwhm "scikitplot.cexternals._astropy.stats.gaussian_sigma_to_fwhm") | Convert a string or number to a floating-point number, if possible. |
| [`histogram_intervals`](../modules/generated/scikitplot.cexternals._astropy.stats.histogram_intervals.html#scikitplot.cexternals._astropy.stats.histogram_intervals "scikitplot.cexternals._astropy.stats.histogram_intervals") | Histogram of a piecewise-constant weight function. |
| [`interval_overlap_length`](../modules/generated/scikitplot.cexternals._astropy.stats.interval_overlap_length.html#scikitplot.cexternals._astropy.stats.interval_overlap_length "scikitplot.cexternals._astropy.stats.interval_overlap_length") | Compute the length of overlap of two intervals. |
| [`kuiper`](../modules/generated/scikitplot.cexternals._astropy.stats.kuiper.html#scikitplot.cexternals._astropy.stats.kuiper "scikitplot.cexternals._astropy.stats.kuiper") | Compute the Kuiper statistic. |
| [`kuiper_false_positive_probability`](../modules/generated/scikitplot.cexternals._astropy.stats.kuiper_false_positive_probability.html#scikitplot.cexternals._astropy.stats.kuiper_false_positive_probability "scikitplot.cexternals._astropy.stats.kuiper_false_positive_probability") | Compute the false positive probability for the Kuiper statistic. |
| [`kuiper_two`](../modules/generated/scikitplot.cexternals._astropy.stats.kuiper_two.html#scikitplot.cexternals._astropy.stats.kuiper_two "scikitplot.cexternals._astropy.stats.kuiper_two") | Compute the Kuiper statistic to compare two samples. |
| [`mad_std`](../modules/generated/scikitplot.cexternals._astropy.stats.mad_std.html#scikitplot.cexternals._astropy.stats.mad_std "scikitplot.cexternals._astropy.stats.mad_std") | Calculate a robust standard deviation using the [median absolute deviation (MAD)](https://en.wikipedia.org/wiki/Median_absolute_deviation). |
| [`median_absolute_deviation`](../modules/generated/scikitplot.cexternals._astropy.stats.median_absolute_deviation.html#scikitplot.cexternals._astropy.stats.median_absolute_deviation "scikitplot.cexternals._astropy.stats.median_absolute_deviation") | Calculate the median absolute deviation (MAD). |
| [`poisson_conf_interval`](../modules/generated/scikitplot.cexternals._astropy.stats.poisson_conf_interval.html#scikitplot.cexternals._astropy.stats.poisson_conf_interval "scikitplot.cexternals._astropy.stats.poisson_conf_interval") | Poisson parameter confidence interval given observed counts. |
| [`signal_to_noise_oir_ccd`](../modules/generated/scikitplot.cexternals._astropy.stats.signal_to_noise_oir_ccd.html#scikitplot.cexternals._astropy.stats.signal_to_noise_oir_ccd "scikitplot.cexternals._astropy.stats.signal_to_noise_oir_ccd") | Computes the signal to noise ratio for source being observed in the optical/IR using a CCD. |

## Astrostatistics: Selecting the bin width of histograms[#](#astrostatistics-selecting-the-bin-width-of-histograms "Link to this heading")

|  |  |
| --- | --- |
| [`calculate_bin_edges`](../modules/generated/scikitplot.cexternals._astropy.stats.calculate_bin_edges.html#scikitplot.cexternals._astropy.stats.calculate_bin_edges "scikitplot.cexternals._astropy.stats.calculate_bin_edges") | Calculate histogram bin edges like `numpy.histogram_bin_edges`. |
| [`freedman_bin_width`](../modules/generated/scikitplot.cexternals._astropy.stats.freedman_bin_width.html#scikitplot.cexternals._astropy.stats.freedman_bin_width "scikitplot.cexternals._astropy.stats.freedman_bin_width") | Return the optimal histogram bin width using the Freedman-Diaconis rule. |
| [`histogram`](../modules/generated/scikitplot.cexternals._astropy.stats.histogram.html#scikitplot.cexternals._astropy.stats.histogram "scikitplot.cexternals._astropy.stats.histogram") | Enhanced histogram function, providing adaptive binnings. |
| [`knuth_bin_width`](../modules/generated/scikitplot.cexternals._astropy.stats.knuth_bin_width.html#scikitplot.cexternals._astropy.stats.knuth_bin_width "scikitplot.cexternals._astropy.stats.knuth_bin_width") | Return the optimal histogram bin width using Knuth's rule. |
| [`scott_bin_width`](../modules/generated/scikitplot.cexternals._astropy.stats.scott_bin_width.html#scikitplot.cexternals._astropy.stats.scott_bin_width "scikitplot.cexternals._astropy.stats.scott_bin_width") | Return the optimal histogram bin width using Scott's rule. |

## Astrostatistics: Model Selection[#](#module-scikitplot.cexternals._astropy.stats.info_theory "Link to this heading")

This module contains simple functions for model selection.

****User guide.**** See the [Astrostatistics Tools (experimental)](../user_guide/stats/index.html#astrostatistics-index) section for further details.

|  |  |
| --- | --- |
| [`akaike_info_criterion`](../modules/generated/scikitplot.cexternals._astropy.stats.akaike_info_criterion.html#scikitplot.cexternals._astropy.stats.akaike_info_criterion "scikitplot.cexternals._astropy.stats.akaike_info_criterion") | Computes the Akaike Information Criterion (AIC). |
| [`akaike_info_criterion_lsq`](../modules/generated/scikitplot.cexternals._astropy.stats.akaike_info_criterion_lsq.html#scikitplot.cexternals._astropy.stats.akaike_info_criterion_lsq "scikitplot.cexternals._astropy.stats.akaike_info_criterion_lsq") | Computes the Akaike Information Criterion assuming that the observations are Gaussian distributed. |
| [`bayesian_info_criterion`](../modules/generated/scikitplot.cexternals._astropy.stats.bayesian_info_criterion.html#scikitplot.cexternals._astropy.stats.bayesian_info_criterion "scikitplot.cexternals._astropy.stats.bayesian_info_criterion") | Computes the Bayesian Information Criterion (BIC) given the log of the likelihood function evaluated at the estimated (or analytically derived) parameters, the number of parameters, and the number of samples. |
| [`bayesian_info_criterion_lsq`](../modules/generated/scikitplot.cexternals._astropy.stats.bayesian_info_criterion_lsq.html#scikitplot.cexternals._astropy.stats.bayesian_info_criterion_lsq "scikitplot.cexternals._astropy.stats.bayesian_info_criterion_lsq") | Computes the Bayesian Information Criterion (BIC) assuming that the observations come from a Gaussian distribution. |

## Discrete Distributions Tools[#](#module-scikitplot.externals._tweedie._tweedie_dist "Link to this heading")

Tweedie Distribution Module.

This module implements the Tweedie distribution,
a member of the exponential dispersion model (EDM) family,
using SciPy’s [`rv_continuous`](https://scipy.github.io/devdocs/reference/generated/scipy.stats.rv_continuous.html#scipy.stats.rv_continuous "(in SciPy v2.0.0.dev)") class.

It is especially useful for modeling claim amounts in the insurance industry,
where data often exhibit a mixture of zeroes and positive continuous values.

The primary focus of this package is the compound-Poisson behavior
of the Tweedie distribution, particularly in the range `1 < p < 2`.
However, it supports calculations for all valid values of the shape parameter `p`.

> **See also**
> * <https://www.statsmodels.org/dev/generated/statsmodels.genmod.families.family.Tweedie.html>
* <https://glum.readthedocs.io/en/latest/glm.html#glum.TweedieDistribution>
* <https://glum.readthedocs.io/en/latest/glm.html#glum.TweedieDistribution.log_likelihood>

Notes

The probability density function (PDF) of the Tweedie distribution cannot be expressed in a closed form for most values of `p`.
However, approximations and numerical methods are employed to compute the PDF for practical purposes.

The Tweedie distribution family includes several well-known distributions based on the value of the shape parameter `p`:

* `p = 0` : Normal distribution
* `p = 1` : Poisson distribution
* `1 < p < 2` : Compound Poisson-Gamma distribution
* `p = 2` : Gamma distribution
* `2 < p < 3` : Positive stable distributions
* `p = 3` : Inverse Gaussian distribution
* `p > 3` : Positive stable distributions

The Tweedie distribution is undefined for values of `p` in the range `(0, 1)`.

References

[1] Jørgensen, B. (1987). “Exponential dispersion models”.
:   Journal of the Royal Statistical Society, Series B. 49 (2): 127–162.

[2] Tweedie, M. C. K. (1984). “An index which distinguishes between some important exponential families”.
:   In Statistics: Applications and New Directions.
    Proceedings of the Indian Statistical Institute Golden Jubilee International Conference.

[3] [YouTube]
:   Statistical Methods Series: Zero-Inflated GLM and GLMM.

[4] [Google]
:   <https://www.statisticshowto.com/tweedie-distribution/>

****User guide.**** See the [Tweedie Distribution (generalized family)](../user_guide/stats/index.html#tweedie-dist-index) section for further details.

|  |  |
| --- | --- |
| [`tweedie_gen`](../modules/generated/scikitplot.externals._tweedie.tweedie_gen.html#scikitplot.externals._tweedie.tweedie_gen "scikitplot.externals._tweedie.tweedie_gen") | A Tweedie continuous random variable inherited [`scipy.stats.rv_continuous`](https://scipy.github.io/devdocs/reference/generated/scipy.stats.rv_continuous.html#scipy.stats.rv_continuous "(in SciPy v2.0.0.dev)"). |
| [`tweedie`](../modules/generated/scikitplot.externals._tweedie.tweedie.html#scikitplot.externals._tweedie.tweedie "scikitplot.externals._tweedie.tweedie") | An instance of [`tweedie_gen`](../modules/generated/scikitplot.externals._tweedie.tweedie_gen.html#scikitplot.externals._tweedie.tweedie_gen "scikitplot.externals._tweedie.tweedie_gen"), providing Tweedie distribution functionality. |