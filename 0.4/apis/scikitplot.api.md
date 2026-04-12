# scikitplot.api[#](#module-scikitplot.api "Link to this heading")

Scikit-plots Functional API module.

****User guide.**** See the [Metric Performance](../user_guide/api/index.html#api-index) section for further details.

## Plot a PCA representation[#](#module-scikitplot.api.decomposition "Link to this heading")

Visualizations for matrix decomposition algorithms.

The [`decomposition`](#module-scikitplot.api.decomposition "scikitplot.api.decomposition") module includes plots built specifically for
scikit-learn estimators that are used for dimensionality reduction e.g. PCA.

You can use your own estimators, but these plots assume specific properties shared by
scikit-learn estimators. The specific requirements are documented per function.

****User guide.**** See the [Decomposition](../user_guide/api/decomposition.html#decomposition-index) section for further details.

|  |  |
| --- | --- |
| [`decomposition.plot_pca_2d_projection`](../modules/generated/scikitplot.api.decomposition.plot_pca_2d_projection.html#scikitplot.api.decomposition.plot_pca_2d_projection "scikitplot.api.decomposition.plot_pca_2d_projection") | Plots the 2-dimensional projection of PCA on a given dataset. |
| [`decomposition.plot_pca_component_variance`](../modules/generated/scikitplot.api.decomposition.plot_pca_component_variance.html#scikitplot.api.decomposition.plot_pca_component_variance "scikitplot.api.decomposition.plot_pca_component_variance") | Plots PCA components' explained variance ratios. |

## Plot Estimators (model) object instances[#](#module-scikitplot.api.estimators "Link to this heading")

Visualizations for model’s decision-making process.

The [`estimators`](#module-scikitplot.api.estimators "scikitplot.api.estimators") module includes plots for machine learning evaluation estimators
e.g. regressor, cluster, etc.

****User guide.**** See the [Estimators](../user_guide/api/estimators.html#estimators-index) section for further details.

|  |  |
| --- | --- |
| [`estimators.plot_feature_importances`](../modules/generated/scikitplot.api.estimators.plot_feature_importances.html#scikitplot.api.estimators.plot_feature_importances "scikitplot.api.estimators.plot_feature_importances") | Generate a plot of a sklearn model's feature importances. |
| [`estimators.plot_learning_curve`](../modules/generated/scikitplot.api.estimators.plot_learning_curve.html#scikitplot.api.estimators.plot_learning_curve "scikitplot.api.estimators.plot_learning_curve") | Generates a plot of the train and test learning curves for a classifier. |
| [`estimators.plot_elbow`](../modules/generated/scikitplot.api.estimators.plot_elbow.html#scikitplot.api.estimators.plot_elbow "scikitplot.api.estimators.plot_elbow") | Plot the elbow curve for different values of K in KMeans clustering. |

## Plot model evaluation metrics[#](#module-scikitplot.api.metrics "Link to this heading")

Visualizations for model’s performance-score metrics.

The [`metrics`](#module-scikitplot.api.metrics "scikitplot.api.metrics") module includes plots for machine learning evaluation metrics
e.g. confusion matrix, silhouette scores, etc.

****User guide.**** See the [Metrics](../user_guide/api/metrics.html#metrics-index) section for further details.

|  |  |
| --- | --- |
| [`metrics.plot_residuals_distribution`](../modules/generated/scikitplot.api.metrics.plot_residuals_distribution.html#scikitplot.api.metrics.plot_residuals_distribution "scikitplot.api.metrics.plot_residuals_distribution") | Plot residuals and fit various distributions to assess their goodness of fit. |
| [`metrics.plot_classifier_eval`](../modules/generated/scikitplot.api.metrics.plot_classifier_eval.html#scikitplot.api.metrics.plot_classifier_eval "scikitplot.api.metrics.plot_classifier_eval") | Generates various evaluation plots for a classifier, including confusion matrix, precision-recall curve, and ROC curve. |
| [`metrics.plot_confusion_matrix`](../modules/generated/scikitplot.api.metrics.plot_confusion_matrix.html#scikitplot.api.metrics.plot_confusion_matrix "scikitplot.api.metrics.plot_confusion_matrix") | Generates a confusion matrix plot from predictions and true labels. |
| [`metrics.plot_precision_recall`](../modules/generated/scikitplot.api.metrics.plot_precision_recall.html#scikitplot.api.metrics.plot_precision_recall "scikitplot.api.metrics.plot_precision_recall") | Generates the Precision-Recall AUC Curves from labels and predicted scores/probabilities. |
| [`metrics.plot_roc`](../modules/generated/scikitplot.api.metrics.plot_roc.html#scikitplot.api.metrics.plot_roc "scikitplot.api.metrics.plot_roc") | Generates the ROC AUC curves from labels and predicted scores/probabilities. |
| [`metrics.plot_calibration`](../modules/generated/scikitplot.api.metrics.plot_calibration.html#scikitplot.api.metrics.plot_calibration "scikitplot.api.metrics.plot_calibration") | Plot calibration curves for a set of classifier probability estimates. |
| [`metrics.plot_silhouette`](../modules/generated/scikitplot.api.metrics.plot_silhouette.html#scikitplot.api.metrics.plot_silhouette "scikitplot.api.metrics.plot_silhouette") | Plots silhouette analysis of clusters provided. |

## API Development Utilities[#](#api-development-utilities "Link to this heading")

****Developer guide.**** See the [Contributing Guidelines to scikit-plots](../devel/index.html#developers-guide-index) section for further details.

|  |  |
| --- | --- |
| [`_utils.validate_labels`](../modules/generated/scikitplot.api._utils.validate_labels.html#scikitplot.api._utils.validate_labels "scikitplot.api._utils.validate_labels") | Validates the labels passed into arguments such as `true_labels` or `pred_labels` in functions like `plot_confusion_matrix`. |
| [`_utils.cumulative_gain_curve`](../modules/generated/scikitplot.api._utils.cumulative_gain_curve.html#scikitplot.api._utils.cumulative_gain_curve "scikitplot.api._utils.cumulative_gain_curve") | Generate the data points necessary to plot the Cumulative Gain curve for binary classification tasks. |
| [`_utils.binary_ks_curve`](../modules/generated/scikitplot.api._utils.binary_ks_curve.html#scikitplot.api._utils.binary_ks_curve "scikitplot.api._utils.binary_ks_curve") | Generate the data points necessary to plot the Kolmogorov-Smirnov (KS) curve for binary classification tasks. |
| [`_utils.validate_plotting_kwargs`](../modules/generated/scikitplot.api._utils.validate_plotting_kwargs.html#scikitplot.api._utils.validate_plotting_kwargs "scikitplot.api._utils.validate_plotting_kwargs") | Validate the provided axes and figure or create new ones if needed. |