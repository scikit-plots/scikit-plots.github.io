# Matplotlib Sphinx extensions for embedded plots (experimental)[#](#matplotlib-sphinx-extensions-for-embedded-plots-experimental "Link to this heading")

## Sphinx extensions for embedded plots, math and more[#](#sphinx-extensions-for-embedded-plots-math-and-more "Link to this heading")

This module contains functions related to [`_sphinxext`](../../../apis/scikitplot.externals.html#module-scikitplot.externals._sphinxext "scikitplot.externals._sphinxext").

A directive for including a Matplotlib plot in a Sphinx document

This is a Sphinx extension providing a reStructuredText directive `.. plot::` for including a plot in a Sphinx document.

```
.. plot:: path/to/plot.py

```
```
import matplotlib.pyplot as plt
plt.plot([1, 2, 3], [4, 5, 6])
plt.title("A plotting exammple")

```
> **See also**
> * <https://matplotlib.org/stable/api/sphinxext_plot_directive_api.html>
* <https://matplotlib.org/sampledoc/extensions.html#sphinx-extensions-for-embedded-plots-math-and-more>