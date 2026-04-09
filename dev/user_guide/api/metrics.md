# Metrics[#](#metrics "Link to this heading")

This module contains functions related to metrics.

## Regression metrics[#](#regression-metrics "Link to this heading")

This module contains functions related to `Regression metrics`.

### plot residuals distribution[#](#plot-residuals-distribution "Link to this heading")

[`plot_residuals_distribution`](../../modules/generated/scikitplot.api.metrics.plot_residuals_distribution.html#scikitplot.api.metrics.plot_residuals_distribution "scikitplot.api.metrics.plot_residuals_distribution")

Trained model of [`LinearRegression`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "(in scikit-learn v1.9)") or
[`RandomForestRegressor`](https://scikit-learn.org/dev/modules/generated/sklearn.ensemble.RandomForestRegressor.html#sklearn.ensemble.RandomForestRegressor "(in scikit-learn v1.9)"). For an example of
performing image:

Examples

* [plot\_residuals\_distribution with examples](../../auto_examples/regression/plot_residuals_distribution_script.html#sphx-glr-auto-examples-regression-plot-residuals-distribution-script-py): Example usage of
  [`sklearn.linear_model.LinearRegression`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "(in scikit-learn v1.9)") using the diabetes dataset (regression).

References[#](#references "Link to this dropdown")

* [“Normal Probability Plot of Residuals”](https://online.stat.psu.edu/stat462/node/122/).

## Classification metrics[#](#classification-metrics "Link to this heading")

This module contains functions related to `Classification metrics`.

### plot calibration[#](#plot-calibration "Link to this heading")

[`plot_calibration`](../../modules/generated/scikitplot.api.metrics.plot_calibration.html#scikitplot.api.metrics.plot_calibration "scikitplot.api.metrics.plot_calibration")

Trained model of [`LogisticRegression`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "(in scikit-learn v1.9)") or
[`RandomForestClassifier`](https://scikit-learn.org/dev/modules/generated/sklearn.ensemble.RandomForestClassifier.html#sklearn.ensemble.RandomForestClassifier "(in scikit-learn v1.9)"). For an example of
performing image:

Examples

* [plot\_calibration with examples](../../auto_examples/calibration/plot_calibration_script.html#sphx-glr-auto-examples-calibration-plot-calibration-script-py): Example usage of
  [`sklearn.linear_model.LogisticRegression`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "(in scikit-learn v1.9)") using the iris dataset

References[#](#references-2 "Link to this dropdown")

* [“scikit-learn PCA”](https://scikit-learn.org/stable/auto_examples/calibration/index.html#calibration).

### plot precision recall[#](#plot-precision-recall "Link to this heading")

[`plot_precision_recall`](../../modules/generated/scikitplot.api.metrics.plot_precision_recall.html#scikitplot.api.metrics.plot_precision_recall "scikitplot.api.metrics.plot_precision_recall")

Trained model of [`LogisticRegression`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "(in scikit-learn v1.9)") or
[`RandomForestClassifier`](https://scikit-learn.org/dev/modules/generated/sklearn.ensemble.RandomForestClassifier.html#sklearn.ensemble.RandomForestClassifier "(in scikit-learn v1.9)"). For an example of
performing image:

Examples

* [plot\_precision\_recall with examples](../../auto_examples/classification/plot_precision_recall_script.html#sphx-glr-auto-examples-classification-plot-precision-recall-script-py): Example usage of
  [`LogisticRegression`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "(in scikit-learn v1.9)") using the iris dataset

References[#](#references-3 "Link to this dropdown")

* [“scikit-learn precision-recall”](https://scikit-learn.org/stable/auto_examples/model_selection/plot_precision_recall.html#precision-recall).

### plot roc[#](#plot-roc "Link to this heading")

[`plot_roc`](../../modules/generated/scikitplot.api.metrics.plot_roc.html#scikitplot.api.metrics.plot_roc "scikitplot.api.metrics.plot_roc")

Trained model of [`LogisticRegression`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "(in scikit-learn v1.9)") or
[`RandomForestClassifier`](https://scikit-learn.org/dev/modules/generated/sklearn.ensemble.RandomForestClassifier.html#sklearn.ensemble.RandomForestClassifier "(in scikit-learn v1.9)"). For an example of
performing image:

Examples

* [plot\_roc\_curve with examples](../../auto_examples/classification/plot_roc_script.html#sphx-glr-auto-examples-classification-plot-roc-script-py): Example usage of
  [`LogisticRegression`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "(in scikit-learn v1.9)") using the iris dataset

References[#](#references-4 "Link to this dropdown")

* [“scikit-learn roc”](https://scikit-learn.org/stable/auto_examples/model_selection/plot_roc.html).

## Clustering metrics[#](#clustering-metrics "Link to this heading")

This module contains functions related to `Clustering metrics`.

### plot silhouette[#](#plot-silhouette "Link to this heading")

[`plot_silhouette`](../../modules/generated/scikitplot.api.metrics.plot_silhouette.html#scikitplot.api.metrics.plot_silhouette "scikitplot.api.metrics.plot_silhouette")

Trained model of [`KMeans`](https://scikit-learn.org/dev/modules/generated/sklearn.cluster.KMeans.html#sklearn.cluster.KMeans "(in scikit-learn v1.9)") or [`MiniBatchKMeans`](https://scikit-learn.org/dev/modules/generated/sklearn.cluster.MiniBatchKMeans.html#sklearn.cluster.MiniBatchKMeans "(in scikit-learn v1.9)").
For an example of performing image:

Examples

* [plot\_silhouette with examples](../../auto_examples/clustering/plot_silhouette_script.html#sphx-glr-auto-examples-clustering-plot-silhouette-script-py): Example usage of
  [`KMeans`](https://scikit-learn.org/dev/modules/generated/sklearn.cluster.KMeans.html#sklearn.cluster.KMeans "(in scikit-learn v1.9)") using the iris dataset

References[#](#references-5 "Link to this dropdown")

* [“scikit-learn k-means”](https://scikit-learn.org/stable/modules/clustering.html#k-means).
* [“scikit-learn mini-batch-k-means”](https://scikit-learn.org/stable/modules/clustering.html#mini-batch-k-means).