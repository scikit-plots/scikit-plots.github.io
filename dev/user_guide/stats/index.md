# Stats[#](#stats "Link to this heading")

Examples relevant to the [`stats`](../../apis/scikitplot.stats.html#module-scikitplot.stats "scikitplot.stats") module.

## Astrostatistics Tools (experimental)[#](#astrostatistics-tools-experimental "Link to this heading")

Examples relevant to the [`stats`](../../modules/generated/scikitplot.cexternals._astropy.stats.html#module-scikitplot.cexternals._astropy.stats "scikitplot.cexternals._astropy.stats") module.

Documentation is available in the docstrings and
online at <https://www.astropy.org/>.

## Tweedie Distribution (generalized family)[#](#tweedie-distribution-generalized-family "Link to this heading")

Examples relevant to the [`_tweedie`](../../apis/scikitplot.externals.html#module-scikitplot.externals._tweedie "scikitplot.externals._tweedie") module.

Tweedie distributions are a very general family of distributions
that includes the Gaussian, Poisson, and Gamma (among many others)
as special cases.

Parameter 𝑝: The Tweedie family is defined by a parameter 𝑝,
which controls the distribution’s properties. For different values of 𝑝,
the distribution can take different forms.

Example of the Tweedie Family [`tweedie`](../../modules/generated/scikitplot.externals._tweedie.tweedie.html#scikitplot.externals._tweedie.tweedie "scikitplot.externals._tweedie.tweedie") or [`tweedie_gen`](../../modules/generated/scikitplot.externals._tweedie.tweedie_gen.html#scikitplot.externals._tweedie.tweedie_gen "scikitplot.externals._tweedie.tweedie_gen") :

* 𝑝=0: Gaussian (Normal) distribution
* 𝑝=1: Poisson distribution
* 𝑝=2: Gamma distribution
* 𝑝=3: Inverse Gaussian distribution

### Common Applications[#](#common-applications "Link to this heading")

Generalized Linear Models (GLMs): The Tweedie distributions are often used in GLMs, especially in cases where the data has non-constant variance or is overdispersed (i.e., variance greater than the mean).

The Tweedie distribution is widely used in:

* Insurance industry: Modeling claim amounts and policy exposure.
* Medical and genomic testing: Analyzing datasets with zero-inflated and continuous positive values.
* Environmental science: Rainfall modeling and hydrology studies.

> **See also**
> * [thequackdaddy/tweedie](https://github.com/thequackdaddy/tweedie)
* <https://www.statsmodels.org/dev/generated/statsmodels.genmod.families.family.Tweedie.html>
* <https://glum.readthedocs.io/en/latest/glm.html#glum.TweedieDistribution>
* <https://glum.readthedocs.io/en/latest/glm.html#glum.TweedieDistribution.log_likelihood>