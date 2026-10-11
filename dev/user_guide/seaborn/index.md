# Seaborn-style model plots[#](#seaborn-style-model-plots "Link to this heading")

`scikitplot.seaborn` provides a small seaborn-like high-level plotting API for model evaluation and decile analysis. It is a Scikit-Plots wrapper layer, not a replacement for upstream seaborn.

> **Important**
> The repository maintenance snapshot currently marks this submodule as not release-ready. Treat these plotting wrappers as experimental and pin/test the exact dependency versions used by your application.
Getting started

Choose the high-level plotting wrapper that matches the evaluation question.

[Getting started](getting_started.html#seaborn-getting-started)AUC and evaluation

Use aucplot/evalplot with explicit data, x/y/hue, and classification semantics.

[AUC and evaluation](auc_and_evaluation.html#seaborn-auc-and-evaluation)Decile and model plots

Use decileplot/modelplot and interpret lift/gain-style outputs.

[Decile and model plots](decile_and_model_plots.html#seaborn-decile-and-model-plots)Data semantics and styling

Long-form data, hue/grouping, kind selection, Axes return values, and plotting side effects.

[Data semantics and styling](data_semantics_and_styling.html#seaborn-data-semantics-and-styling)Python API

aucplot, evalplot, decileplot, modelplot, and print\_labels.

[Python API](python_api.html#seaborn-python-api)Known limits and troubleshooting

Experimental status, upstream-private compatibility, and current open maintenance findings.

[Known limits and troubleshooting](known_limits_and_troubleshooting.html#seaborn-known-limits-and-troubleshooting)

## Which page should I use?[#](#which-page-should-i-use "Link to this heading")

Start with ****Getting started****. Then choose the page that owns the decision
you are making: architecture and lifecycle, configuration, persistence,
performance, public API, or limits. The guide intentionally separates those
concerns so examples do not accidentally become policy.

## Examples[#](#examples "Link to this heading")

See [Seaborn](../../auto_examples/seaborn/index.html#seaborn-examples) for executable examples that accompany this guide.

## See also[#](#see-also "Link to this heading")

* [Decile analysis](../decile/index.html#decile-index)

## Further reading[#](#further-reading "Link to this heading")