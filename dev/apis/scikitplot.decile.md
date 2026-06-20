# scikitplot.decile[#](#module-scikitplot.decile "Link to this heading")

Visualizing predictive model insights for enhanced business decision-making.

The [`decile`](#module-scikitplot.decile "scikitplot.decile") module to build nice plots
to explain your modelling efforts easily to business colleagues.

****User guide.**** See the [Decile-Wise Performance](../user_guide/decile/index.html#decile-index) section for further details.

## Key To DataScience: kds[#](#module-scikitplot.decile.kds "Link to this heading")

Quick report for business analysis. Just input “labels”, “probabilities” to get report.

The [`kds`](#module-scikitplot.decile.kds "scikitplot.decile.kds") KeyToDataScience module to Plot Decile Table, Lift, Gain
and KS Statistic charts with single line functions

kds is the result of a data scientist’s humble effort to provide an easy way of
visualizing metrics. So that one can focus on the analysis rather than hassling
with copy/paste of various visialization functions.

****User guide.**** See the [KeyToDataScience](../user_guide/decile/kds.html#decile-kds-index) section for further details.

|  |  |
| --- | --- |
| [`kds.print_labels`](../modules/generated/scikitplot.decile.kds.print_labels.html#scikitplot.decile.kds.print_labels "scikitplot.decile.kds.print_labels") | Display a legend for the abbreviations of decile table column names. |
| [`kds.decile_table`](../modules/generated/scikitplot.decile.kds.decile_table.html#scikitplot.decile.kds.decile_table "scikitplot.decile.kds.decile_table") | Generate the Decile Table from labels and probabilities. |
| [`kds.plot_cumulative_gain`](../modules/generated/scikitplot.decile.kds.plot_cumulative_gain.html#scikitplot.decile.kds.plot_cumulative_gain "scikitplot.decile.kds.plot_cumulative_gain") | Generate the Decile-wise Lift Plot from labels and probabilities. |
| [`kds.plot_lift`](../modules/generated/scikitplot.decile.kds.plot_lift.html#scikitplot.decile.kds.plot_lift "scikitplot.decile.kds.plot_lift") | Generate the Decile based cumulative Lift Plot from labels and probabilities. |
| [`kds.plot_lift_decile_wise`](../modules/generated/scikitplot.decile.kds.plot_lift_decile_wise.html#scikitplot.decile.kds.plot_lift_decile_wise "scikitplot.decile.kds.plot_lift_decile_wise") | Generate the Decile-wise Lift Plot from labels and probabilities. |
| [`kds.plot_ks_statistic`](../modules/generated/scikitplot.decile.kds.plot_ks_statistic.html#scikitplot.decile.kds.plot_ks_statistic "scikitplot.decile.kds.plot_ks_statistic") | Generate the KS Statistic Plot from labels and probabilities. |
| [`kds.report`](../modules/generated/scikitplot.decile.kds.report.html#scikitplot.decile.kds.report "scikitplot.decile.kds.report") | Generate a decile table and four plots. |

## ModelPlotPy Initializer object[#](#module-scikitplot.decile.modelplotpy "Link to this heading")

Visualizing predictive model insights for enhanced business decision-making.

The [`modelplotpy`](#module-scikitplot.decile.modelplotpy "scikitplot.decile.modelplotpy") module to build nice plots
to explain your modelling efforts easily to business colleagues.

Documentation is available in the docstrings and
online at <https://modelplot.github.io/>.

> **See also**
> * <https://www.kdnuggets.com/2018/10/evaluating-business-value-predictive-models-modelplotpy.html>

|  |  |
| --- | --- |
| [`modelplotpy.ModelPlotPy`](../modules/generated/scikitplot.decile.modelplotpy.ModelPlotPy.html#scikitplot.decile.modelplotpy.ModelPlotPy "scikitplot.decile.modelplotpy.ModelPlotPy") | ModelPlotPy decile analysis. |

## ModelPlotPy Initializer object[#](#decile-ref-modelplotpy-initializer-object-2 "Link to this heading")

The [`decile`](#module-scikitplot.decile "scikitplot.decile") and (⚠️ alternative legacy [`scikitplot.decile.modelplotpy`](#module-scikitplot.decile.modelplotpy "scikitplot.decile.modelplotpy")) module.

Includes plots for machine learning evaluation decile / ntile analysis
(e.g., Response, Lift, Gain and related financial charts).

References

* [modelplot/modelplotpy](https://github.com/modelplot/modelplotpy/blob/master/modelplotpy/functions.py)
* <https://modelplot.github.io/intro_modelplotpy.html>

****User guide.**** See the [ModelPlotPy](../user_guide/decile/modelplotpy.html#decile-modelplotpy-index) and [modelplotpy financial](../user_guide/decile/modelplotpy.html#decile-modelplotpy-financial-index) sections for further details.

|  |  |
| --- | --- |
| [`ModelPlotPy`](../modules/generated/scikitplot.decile.ModelPlotPy.html#scikitplot.decile.ModelPlotPy "scikitplot.decile.ModelPlotPy") | Decile/ntile analysis for sklearn classifiers. |

## (Cumulative) Gains, Lift and Response Plots[#](#cumulative-gains-lift-and-response-plots "Link to this heading")

****User guide.**** See the [ModelPlotPy](../user_guide/decile/modelplotpy.html#decile-modelplotpy-index) section for further details.

|  |  |
| --- | --- |
| [`plot_response`](../modules/generated/scikitplot.decile.plot_response.html#scikitplot.decile.plot_response "scikitplot.decile.plot_response") | Plot response curve. |
| [`plot_cumresponse`](../modules/generated/scikitplot.decile.plot_cumresponse.html#scikitplot.decile.plot_cumresponse "scikitplot.decile.plot_cumresponse") | Plot cumulative response curve. |
| [`plot_cumlift`](../modules/generated/scikitplot.decile.plot_cumlift.html#scikitplot.decile.plot_cumlift "scikitplot.decile.plot_cumlift") | Plot cumulative lift curve. |
| [`plot_cumgains`](../modules/generated/scikitplot.decile.plot_cumgains.html#scikitplot.decile.plot_cumgains "scikitplot.decile.plot_cumgains") | Plot cumulative gains curve. |
| [`plot_all`](../modules/generated/scikitplot.decile.plot_all.html#scikitplot.decile.plot_all "scikitplot.decile.plot_all") | Plot response, cumulative response, cumulative lift, and cumulative gains as a 2x2 panel. |

## Business-savvy Financial Insight Plots[#](#business-savvy-financial-insight-plots "Link to this heading")

****User guide.**** See the [modelplotpy financial](../user_guide/decile/modelplotpy.html#decile-modelplotpy-financial-index) section for further details.

|  |  |
| --- | --- |
| [`plot_costsrevs`](../modules/generated/scikitplot.decile.plot_costsrevs.html#scikitplot.decile.plot_costsrevs "scikitplot.decile.plot_costsrevs") | Plot costs and revenues curves. |
| [`plot_profit`](../modules/generated/scikitplot.decile.plot_profit.html#scikitplot.decile.plot_profit "scikitplot.decile.plot_profit") | Plot profit curve. |
| [`plot_roi`](../modules/generated/scikitplot.decile.plot_roi.html#scikitplot.decile.plot_roi "scikitplot.decile.plot_roi") | Plot ROI (return on investment) curve. |