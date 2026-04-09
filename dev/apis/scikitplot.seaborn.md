# scikitplot.seaborn[#](#module-scikitplot.seaborn "Link to this heading")

## scikitplot.seaborn[#](#id1 "Link to this heading")

Seaborn-style scikit-plots plotting.

This submodule provides a seaborn-like, high-level plotting API for
machine-learning model exploration.

****User guide.**** See the [Seaborn](../user_guide/seaborn/index.html#seaborn-index) section for further details.

## .scikitplot via Seaborn[#](#scikitplot-via-seaborn "Link to this heading")

****User guide.**** See the [AUC Plot (experimental)](../user_guide/seaborn/index.html#aucplot-index) and [Eval Plot (experimental)](../user_guide/seaborn/index.html#evalplot-index) sections for further details.

|  |  |
| --- | --- |
| [`aucplot`](../modules/generated/scikitplot.seaborn.aucplot.html#scikitplot.seaborn.aucplot "scikitplot.seaborn.aucplot") | Plot PR or ROC curves with a seaborn-like API. |
| [`evalplot`](../modules/generated/scikitplot.seaborn.evalplot.html#scikitplot.seaborn.evalplot "scikitplot.seaborn.evalplot") | Visualization of the Confusion Matrix [[Ra7e29df24177-1]](../modules/generated/scikitplot.seaborn.evalplot.html#ra7e29df24177-1) alongside a text report showing key classification metrics. |

## .kds to SeabornX[#](#module-scikitplot.seaborn._decile "Link to this heading")

Decile-based [[2]](#r6204c41bfff9-2) model evaluation module (Lift, Gains, KS statistics).

The [`_decile`](#module-scikitplot.seaborn._decile "scikitplot.seaborn._decile") module includes plots for machine learning
evaluation decile analysis e.g. Gain, Lift and Decile charts, etc.

In descriptive statistics, a decile is any of the nine values that divide the sorted data
into ten equal parts, so that each part represents 1/10 of the sample or population.
A decile is one possible form of a quantile; others include the quartile and percentile.
A decile rank arranges the data in order from lowest to highest and
is done on a scale of one to ten where each successive number corresponds to
an increase of 10 percentage points. See [[1]](#r6204c41bfff9-1) [[2]](#r6204c41bfff9-2) for more details.

References

[[1](#id4)]

<https://github.com/tensorbored/kds/blob/master/kds/metrics.py>

[2]
([1](#id3),[2](#id5))

[Wikipedia contributors. (2024).
“Decile”
Wikipedia. https://en.wikipedia.org/wiki/Decile](https://en.wikipedia.org/wiki/Decile)

****User guide.**** See the [Decile Plot (experimental)](../user_guide/seaborn/index.html#decileplot-index) section for further details.

|  |  |
| --- | --- |
| [`decileplot`](../modules/generated/scikitplot.seaborn.decileplot.html#scikitplot.seaborn.decileplot "scikitplot.seaborn.decileplot") | Given binary labels y\_true (0/1) and probabilities y\_score 1d array, compute/plot a decile [[Rd1ed195c7ca1-2]](../modules/generated/scikitplot.seaborn.decileplot.html#rd1ed195c7ca1-2) table. |
| [`print_labels`](../modules/generated/scikitplot.seaborn.print_labels.html#scikitplot.seaborn.print_labels "scikitplot.seaborn.print_labels") | Pretty-print the legend of decile table column names. |