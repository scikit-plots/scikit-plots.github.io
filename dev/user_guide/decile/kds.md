# KDS functions[#](#kds-functions "Link to this heading")

The `scikitplot.decile.kds` namespace provides array-oriented decile
statistics and plots.

|  |  |
| --- | --- |
| [`scikitplot.decile.kds.decile_table`](../../modules/generated/scikitplot.decile.kds.decile_table.html#scikitplot.decile.kds.decile_table "scikitplot.decile.kds.decile_table") | Generate the Decile Table from labels and probabilities. |
| [`scikitplot.decile.kds.plot_lift`](../../modules/generated/scikitplot.decile.kds.plot_lift.html#scikitplot.decile.kds.plot_lift "scikitplot.decile.kds.plot_lift") | Generate the Decile based cumulative Lift Plot from labels and probabilities. |
| [`scikitplot.decile.kds.plot_lift_decile_wise`](../../modules/generated/scikitplot.decile.kds.plot_lift_decile_wise.html#scikitplot.decile.kds.plot_lift_decile_wise "scikitplot.decile.kds.plot_lift_decile_wise") | Generate the Decile-wise Lift Plot from labels and probabilities. |
| [`scikitplot.decile.kds.plot_cumulative_gain`](../../modules/generated/scikitplot.decile.kds.plot_cumulative_gain.html#scikitplot.decile.kds.plot_cumulative_gain "scikitplot.decile.kds.plot_cumulative_gain") | Generate the Decile-wise Lift Plot from labels and probabilities. |
| [`scikitplot.decile.kds.plot_ks_statistic`](../../modules/generated/scikitplot.decile.kds.plot_ks_statistic.html#scikitplot.decile.kds.plot_ks_statistic "scikitplot.decile.kds.plot_ks_statistic") | Generate the KS Statistic Plot from labels and probabilities. |
| [`scikitplot.decile.kds.report`](../../modules/generated/scikitplot.decile.kds.report.html#scikitplot.decile.kds.report "scikitplot.decile.kds.report") | Generate a decile table and four plots. |
| [`scikitplot.decile.kds.print_labels`](../../modules/generated/scikitplot.decile.kds.print_labels.html#scikitplot.decile.kds.print_labels "scikitplot.decile.kds.print_labels") | Display a legend for the abbreviations of decile table column names. |

`decile_table` is the shared statistical core. Plot/report helpers should be
interpreted from the same positive-class definition and decile count.

> **Warning**
> The repository maintenance review records a current KDS contract issue where
some documented class/positive-label/precision arguments are dropped by
internal calls. Until that finding is closed, validate non-default
`class_index`, `pos_label` and precision-sensitive workflows with focused
tests rather than assuming every wrapper forwards every option.