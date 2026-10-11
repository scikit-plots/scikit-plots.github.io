# Decile analysis[#](#decile-analysis "Link to this heading")

`scikitplot.decile` groups model scores into ordered quantiles/ntiles so you can explain response concentration, lift, cumulative gain, KS separation and business value to technical and non-technical stakeholders.

> **Important**
> A decile plot only makes sense when the score column and positive-class semantics are correct. Verify `pos_label`/`class_index` and score ordering before interpreting lift, gain, or financial curves.
Getting started

Create a decile table or model plot from labels and predicted scores.

[Getting started](getting_started.html#decile-getting-started)KDS functions

Decile tables, lift, cumulative gain, KS statistic, and reports.

[KDS functions](kds.html#decile-kds)ModelPlotPy

Current top-level ModelPlotPy surface and legacy compatibility namespace.

[ModelPlotPy](modelplotpy.html#decile-modelplotpy)Business and financial plots

Response, cumulative lift/gain, costs, profit, ROI, and selection summaries.

[Business and financial plots](business_plots_and_financial.html#decile-business-plots-and-financial)Compatibility and limits

Positive-label semantics, legacy behavior, RNG side effects, and current snapshot limitations.

[Compatibility and limits](compatibility_and_limits.html#decile-compatibility-and-limits)

## Which page should I use?[#](#which-page-should-i-use "Link to this heading")

Start with ****Getting started****. Then choose the page that owns the decision
you are making: architecture and lifecycle, configuration, persistence,
performance, public API, or limits. The guide intentionally separates those
concerns so examples do not accidentally become policy.

## Examples[#](#examples "Link to this heading")

See [Decile](../../auto_examples/decile/index.html#decile-examples) for executable examples that accompany this guide.