# scikitplot.externals[#](#module-scikitplot.externals "Link to this heading")

External dependencies vendored for stability and reproducibility for Scikit-Plots.

This package contains third-party Python modules that Scikit-Plots depends on for
plotting, statistics, array APIs, and numerical utilities. These modules are
bundled directly to ensure consistent behavior across different environments,
even when the original libraries are missing or version-incompatible.

****User guide.**** See the [Externals (experimental)](../user_guide/externals/index.html#externals-index) section for further details.

## data-apis array\_api\_compat as submodule.[#](#module-scikitplot.externals.array_api_compat "Link to this heading")

NumPy Array API compatibility library

This is a small wrapper around NumPy, CuPy, JAX, sparse and others that are
compatible with the Array API standard <https://data-apis.org/array-api/latest/>.
See also NEP 47 <https://numpy.org/neps/nep-0047-array-api-standard.html>.

Unlike array\_api\_strict, this is not a strict minimal implementation of the
Array API, but rather just an extension of the main NumPy namespace with
changes needed to be compliant with the Array API. See
<https://numpy.org/doc/stable/reference/array_api.html> for a full list of
changes. In particular, unlike array\_api\_strict, this package does not use a
separate Array object, but rather just uses numpy.ndarray directly.

Library authors using the Array API may wish to test against array\_api\_strict
to ensure they are not using functionality outside of the standard, but prefer
this implementation for the default when working with NumPy arrays.

****User guide.**** See the [Python Data API Standards: array\_api\_compat (experimental)](../user_guide/externals/array_api_compat/index.html#externals-array-api-compat-index) section for further details.

|  |  |
| --- | --- |
| [`array_api_compat`](../modules/generated/scikitplot.externals.array_api_compat.html#module-scikitplot.externals.array_api_compat "scikitplot.externals.array_api_compat") | NumPy Array API compatibility library |

## data-apis array\_api\_extra as submodule.[#](#module-scikitplot.externals.array_api_extra "Link to this heading")

Extra array functions built on top of the array API standard.

****User guide.**** See the [Python Data API Standards: array\_api\_extra (experimental)](../user_guide/externals/array_api_extra/index.html#externals-array-api-extra-index) section for further details.

|  |  |
| --- | --- |
| [`array_api_extra`](../modules/generated/scikitplot.externals.array_api_extra.html#module-scikitplot.externals.array_api_extra "scikitplot.externals.array_api_extra") | Extra array functions built on top of the array API standard. |

## Real probability scales for matplotlib.[#](#module-scikitplot.externals._probscale "Link to this heading")

Real probability scales for matplotlib.

****User guide.**** See the [Probability Plots (experimental)](../user_guide/externals/_probscale/index.html#externals-probscale-index) section for further details.

|  |  |
| --- | --- |
| [`_probscale.ProbScale`](../modules/generated/scikitplot.externals._probscale.ProbScale.html#scikitplot.externals._probscale.ProbScale "scikitplot.externals._probscale.ProbScale") | A probability scale for matplotlib Axes. |
| [`_probscale.probplot`](../modules/generated/scikitplot.externals._probscale.probplot.html#scikitplot.externals._probscale.probplot "scikitplot.externals._probscale.probplot") | Probability, percentile, and quantile plots. |
| [`_probscale.plot_pos`](../modules/generated/scikitplot.externals._probscale.plot_pos.html#scikitplot.externals._probscale.plot_pos "scikitplot.externals._probscale.plot_pos") | Compute the plotting positions for a dataset. |
| [`_probscale.fit_line`](../modules/generated/scikitplot.externals._probscale.fit_line.html#scikitplot.externals._probscale.fit_line "scikitplot.externals._probscale.fit_line") | Fits a line to x-y data in various forms (linear, log, prob scales). |

## Seaborn as submodule.[#](#module-scikitplot.externals._seaborn "Link to this heading")

****User guide.**** See the [Seaborn (experimental)](../user_guide/externals/_seaborn/index.html#externals-seaborn-index) section for further details.

|  |  |
| --- | --- |
| [`_seaborn`](../modules/generated/scikitplot.externals._seaborn.html#module-scikitplot.externals._seaborn "scikitplot.externals._seaborn") |  |

## Matplotlib Sphinxext Ext.[#](#module-scikitplot.externals._sphinxext "Link to this heading")

sphinxext.

Notes

* [matplotlib/matplotlib](https://github.com/matplotlib/matplotlib/tree/main/lib/matplotlib/sphinxext)

****User guide.**** See the [Matplotlib Sphinx extensions for embedded plots (experimental)](../user_guide/externals/_sphinxext/index.html#externals-sphinxext-index) section for further details.

|  |  |
| --- | --- |
| [`_sphinxext`](../modules/generated/scikitplot.externals._sphinxext.html#module-scikitplot.externals._sphinxext "scikitplot.externals._sphinxext") | sphinxext. |
| [`_sphinxext.figmpl_directive`](../modules/generated/scikitplot.externals._sphinxext.figmpl_directive.html#module-scikitplot.externals._sphinxext.figmpl_directive "scikitplot.externals._sphinxext.figmpl_directive") | Add a `figure-mpl` directive that is a responsive version of `figure`. |
| [`_sphinxext.mathmpl`](../modules/generated/scikitplot.externals._sphinxext.mathmpl.html#module-scikitplot.externals._sphinxext.mathmpl "scikitplot.externals._sphinxext.mathmpl") | A role and directive to display mathtext in Sphinx. |
| [`_sphinxext.plot_directive`](../modules/generated/scikitplot.externals._sphinxext.plot_directive.html#module-scikitplot.externals._sphinxext.plot_directive "scikitplot.externals._sphinxext.plot_directive") | A directive for including a Matplotlib plot in a Sphinx document. |
| [`_sphinxext.roles`](../modules/generated/scikitplot.externals._sphinxext.roles.html#module-scikitplot.externals._sphinxext.roles "scikitplot.externals._sphinxext.roles") | Custom roles for the Matplotlib documentation. |
| [`_sphinxext.sphinx_tabs_patch`](../modules/generated/scikitplot.externals._sphinxext.sphinx_tabs_patch.html#module-scikitplot.externals._sphinxext.sphinx_tabs_patch "scikitplot.externals._sphinxext.sphinx_tabs_patch") | Sphinx compatibility shim for docutils `backrefs`. |

## Tweedie Family.[#](#module-scikitplot.externals._tweedie "Link to this heading")

Tweedie Distribution Module.

This module implements the Tweedie distribution,
a member of the exponential dispersion model (EDM) family,
using SciPy’s `rv_continuous` class.

It is especially useful for modeling claim amounts in the insurance industry,
where data often exhibit a mixture of zeroes and positive continuous values.

The primary focus of this package is the compound-Poisson behavior
of the Tweedie distribution, particularly in the range `1 < p < 2`.
However, it supports calculations for all valid values of the shape parameter `p`.

****User guide.**** See the [Tweedie Family](../user_guide/externals/_tweedie/index.html#externals-tweedie-index) section for further details.

|  |  |
| --- | --- |
| [`_tweedie`](../modules/generated/scikitplot.externals._tweedie.html#module-scikitplot.externals._tweedie "scikitplot.externals._tweedie") | Tweedie Distribution Module. |
| [`_tweedie.tweedie`](../modules/generated/scikitplot.externals._tweedie.tweedie.html#scikitplot.externals._tweedie.tweedie "scikitplot.externals._tweedie.tweedie") | An instance of `tweedie_gen`, providing Tweedie distribution functionality. |
| [`_tweedie.tweedie_gen`](../modules/generated/scikitplot.externals._tweedie.tweedie_gen.html#scikitplot.externals._tweedie.tweedie_gen "scikitplot.externals._tweedie.tweedie_gen") | A Tweedie continuous random variable inherited [`scipy.stats.rv_continuous`](https://scipy.github.io/devdocs/reference/generated/scipy.stats.rv_continuous.html#scipy.stats.rv_continuous "(in SciPy v1.19.0.dev)"). |