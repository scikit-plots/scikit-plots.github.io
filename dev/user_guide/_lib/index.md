> **Template**
> Template for further usage, template belong to Scikit-learn.

# Array API support[#](#array-api-support "Link to this heading")

> **See also**
> <https://data-apis.org/>

The [Array API](https://data-apis.org/array-api/latest/) specification defines
a standard API for all array manipulation libraries with a NumPy-like API.
Scikit-learn’s Array API support requires
[array-api-compat](https://github.com/data-apis/array-api-compat) to be installed,
and the environment variable `SCIPY_ARRAY_API` must be set to `1` before importing
`scipy` and `scikit-learn`:

```
export SCIPY_ARRAY_API=1

```

Please note that this environment variable is intended for temporary use.
For more details, refer to SciPy’s [Array API documentation](https://docs.scipy.org/doc/scipy/dev/api-dev/array_api.html#using-array-api-standard-support).

Some scikit-learn estimators that primarily rely on NumPy (as opposed to using
Cython) to implement the algorithmic logic of their `fit`, `predict` or
`transform` methods can be configured to accept any Array API compatible input
datastructures and automatically dispatch operations to the underlying namespace
instead of relying on NumPy.

At this stage, this support is ****considered experimental**** and must be enabled
explicitly as explained in the following.

> **Note**
> Currently, only `array-api-strict`, `cupy`, and `PyTorch` are known to work
with scikit-learn’s estimators.

The following video provides an overview of the standard’s design principles
and how it facilitates interoperability between array libraries:

* [Scikit-learn on GPUs with Array API](https://www.youtube.com/watch?v=c_s8tr1AizA)
  by [Thomas Fan](https://github.com/thomasjpfan) at PyData NYC 2023.

## Example usage[#](#example-usage "Link to this heading")

Here is an example code snippet to demonstrate how to use [CuPy](https://cupy.dev/) to run
`LinearDiscriminantAnalysis` on a GPU:

```
>>> from sklearn.datasets import make_classification
>>> from sklearn import config_context
>>> from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
>>> import cupy

>>> X_np, y_np = make_classification(random_state=0)
>>> X_cu = cupy.asarray(X_np)
>>> y_cu = cupy.asarray(y_np)
>>> X_cu.device
<CUDA Device 0>

>>> with config_context(array_api_dispatch=True):
...     lda = LinearDiscriminantAnalysis()
...     X_trans = lda.fit_transform(X_cu, y_cu)
>>> X_trans.device
<CUDA Device 0>

```

After the model is trained, fitted attributes that are arrays will also be
from the same Array API namespace as the training data. For example, if CuPy’s
Array API namespace was used for training, then fitted attributes will be on the
GPU. We provide a experimental `_estimator_with_converted_arrays` utility that
transfers an estimator attributes from Array API to a ndarray:

```
>>> from sklearn.utils._array_api import _estimator_with_converted_arrays
>>> cupy_to_ndarray = lambda array : array.get()
>>> lda_np = _estimator_with_converted_arrays(lda, cupy_to_ndarray)
>>> X_trans = lda_np.transform(X_np)
>>> type(X_trans)
<class 'numpy.ndarray'>

```

### PyTorch Support[#](#pytorch-support "Link to this heading")

PyTorch Tensors are supported by setting `array_api_dispatch=True` and passing in
the tensors directly:

```
>>> import torch
>>> X_torch = torch.asarray(X_np, device="cuda", dtype=torch.float32)
>>> y_torch = torch.asarray(y_np, device="cuda", dtype=torch.float32)

>>> with config_context(array_api_dispatch=True):
...     lda = LinearDiscriminantAnalysis()
...     X_trans = lda.fit_transform(X_torch, y_torch)
>>> type(X_trans)
<class 'torch.Tensor'>
>>> X_trans.device.type
'cuda'

```

## Support for `Array API`-compatible inputs[#](#support-for-array-api-compatible-inputs "Link to this heading")

Estimators and other tools in scikit-learn that support Array API compatible inputs.

### Estimators[#](#estimators "Link to this heading")

* `decomposition.PCA` (with `svd_solver="full"`,
  `svd_solver="randomized"` and `power_iteration_normalizer="QR"`)
* `linear_model.Ridge` (with `solver="svd"`)
* `discriminant_analysis.LinearDiscriminantAnalysis` (with `solver="svd"`)
* `preprocessing.KernelCenterer`
* `preprocessing.LabelEncoder`
* `preprocessing.MaxAbsScaler`
* `preprocessing.MinMaxScaler`
* `preprocessing.Normalizer`

### Meta-estimators[#](#meta-estimators "Link to this heading")

Meta-estimators that accept Array API inputs conditioned on the fact that the
base estimator also does:

* `model_selection.GridSearchCV`
* `model_selection.RandomizedSearchCV`
* `model_selection.HalvingGridSearchCV`
* `model_selection.HalvingRandomSearchCV`

### Metrics[#](#metrics "Link to this heading")

* `sklearn.metrics.cluster.entropy`
* [`sklearn.metrics.accuracy_score`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.accuracy_score.html#sklearn.metrics.accuracy_score "(in scikit-learn v1.9)")
* [`sklearn.metrics.d2_tweedie_score`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.d2_tweedie_score.html#sklearn.metrics.d2_tweedie_score "(in scikit-learn v1.9)")
* [`sklearn.metrics.explained_variance_score`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.explained_variance_score.html#sklearn.metrics.explained_variance_score "(in scikit-learn v1.9)")
* [`sklearn.metrics.f1_score`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.f1_score.html#sklearn.metrics.f1_score "(in scikit-learn v1.9)")
* [`sklearn.metrics.fbeta_score`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.fbeta_score.html#sklearn.metrics.fbeta_score "(in scikit-learn v1.9)")
* [`sklearn.metrics.max_error`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.max_error.html#sklearn.metrics.max_error "(in scikit-learn v1.9)")
* [`sklearn.metrics.mean_absolute_error`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.mean_absolute_error.html#sklearn.metrics.mean_absolute_error "(in scikit-learn v1.9)")
* [`sklearn.metrics.mean_absolute_percentage_error`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.mean_absolute_percentage_error.html#sklearn.metrics.mean_absolute_percentage_error "(in scikit-learn v1.9)")
* [`sklearn.metrics.mean_gamma_deviance`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.mean_gamma_deviance.html#sklearn.metrics.mean_gamma_deviance "(in scikit-learn v1.9)")
* [`sklearn.metrics.mean_pinball_loss`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.mean_pinball_loss.html#sklearn.metrics.mean_pinball_loss "(in scikit-learn v1.9)")
* [`sklearn.metrics.mean_poisson_deviance`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.mean_poisson_deviance.html#sklearn.metrics.mean_poisson_deviance "(in scikit-learn v1.9)") (requires [enabling array API support for SciPy](https://docs.scipy.org/doc/scipy/dev/api-dev/array_api.html#using-array-api-standard-support))
* [`sklearn.metrics.mean_squared_error`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.mean_squared_error.html#sklearn.metrics.mean_squared_error "(in scikit-learn v1.9)")
* [`sklearn.metrics.mean_squared_log_error`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.mean_squared_log_error.html#sklearn.metrics.mean_squared_log_error "(in scikit-learn v1.9)")
* [`sklearn.metrics.mean_tweedie_deviance`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.mean_tweedie_deviance.html#sklearn.metrics.mean_tweedie_deviance "(in scikit-learn v1.9)")
* [`sklearn.metrics.multilabel_confusion_matrix`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.multilabel_confusion_matrix.html#sklearn.metrics.multilabel_confusion_matrix "(in scikit-learn v1.9)")
* [`sklearn.metrics.pairwise.additive_chi2_kernel`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.additive_chi2_kernel.html#sklearn.metrics.pairwise.additive_chi2_kernel "(in scikit-learn v1.9)")
* [`sklearn.metrics.pairwise.chi2_kernel`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.chi2_kernel.html#sklearn.metrics.pairwise.chi2_kernel "(in scikit-learn v1.9)")
* [`sklearn.metrics.pairwise.cosine_similarity`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html#sklearn.metrics.pairwise.cosine_similarity "(in scikit-learn v1.9)")
* [`sklearn.metrics.pairwise.cosine_distances`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.cosine_distances.html#sklearn.metrics.pairwise.cosine_distances "(in scikit-learn v1.9)")
* [`sklearn.metrics.pairwise.euclidean_distances`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.euclidean_distances.html#sklearn.metrics.pairwise.euclidean_distances "(in scikit-learn v1.9)") (see [Note on device support for float64](#device-support-for-float64))
* [`sklearn.metrics.pairwise.linear_kernel`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.linear_kernel.html#sklearn.metrics.pairwise.linear_kernel "(in scikit-learn v1.9)")
* [`sklearn.metrics.pairwise.paired_cosine_distances`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.paired_cosine_distances.html#sklearn.metrics.pairwise.paired_cosine_distances "(in scikit-learn v1.9)")
* [`sklearn.metrics.pairwise.paired_euclidean_distances`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.paired_euclidean_distances.html#sklearn.metrics.pairwise.paired_euclidean_distances "(in scikit-learn v1.9)")
* [`sklearn.metrics.pairwise.polynomial_kernel`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.polynomial_kernel.html#sklearn.metrics.pairwise.polynomial_kernel "(in scikit-learn v1.9)")
* [`sklearn.metrics.pairwise.rbf_kernel`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.rbf_kernel.html#sklearn.metrics.pairwise.rbf_kernel "(in scikit-learn v1.9)") (see [Note on device support for float64](#device-support-for-float64))
* [`sklearn.metrics.pairwise.sigmoid_kernel`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.sigmoid_kernel.html#sklearn.metrics.pairwise.sigmoid_kernel "(in scikit-learn v1.9)")
* [`sklearn.metrics.precision_score`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.precision_score.html#sklearn.metrics.precision_score "(in scikit-learn v1.9)")
* [`sklearn.metrics.precision_recall_fscore_support`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.precision_recall_fscore_support.html#sklearn.metrics.precision_recall_fscore_support "(in scikit-learn v1.9)")
* [`sklearn.metrics.r2_score`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.r2_score.html#sklearn.metrics.r2_score "(in scikit-learn v1.9)")
* [`sklearn.metrics.recall_score`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.recall_score.html#sklearn.metrics.recall_score "(in scikit-learn v1.9)")
* [`sklearn.metrics.root_mean_squared_error`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.root_mean_squared_error.html#sklearn.metrics.root_mean_squared_error "(in scikit-learn v1.9)")
* [`sklearn.metrics.root_mean_squared_log_error`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.root_mean_squared_log_error.html#sklearn.metrics.root_mean_squared_log_error "(in scikit-learn v1.9)")
* [`sklearn.metrics.zero_one_loss`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.zero_one_loss.html#sklearn.metrics.zero_one_loss "(in scikit-learn v1.9)")

### Tools[#](#tools "Link to this heading")

* `model_selection.train_test_split`
* `utils.check_consistent_length`

Coverage is expected to grow over time. Please follow the dedicated [meta-issue on GitHub](https://github.com/scikit-learn/scikit-learn/issues/22352) to track progress.

### Type of return values and fitted attributes[#](#type-of-return-values-and-fitted-attributes "Link to this heading")

When calling functions or methods with Array API compatible inputs, the
convention is to return array values of the same array container type and
device as the input data.

Similarly, when an estimator is fitted with Array API compatible inputs, the
fitted attributes will be arrays from the same library as the input and stored
on the same device. The `predict` and `transform` method subsequently expect
inputs from the same array library and device as the data passed to the `fit`
method.

Note however that scoring functions that return scalar values return Python
scalars (typically a `float` instance) instead of an array scalar value.

## Common estimator checks[#](#common-estimator-checks "Link to this heading")

Add the `array_api_support` tag to an estimator’s set of tags to indicate that
it supports the Array API. This will enable dedicated checks as part of the
common tests to verify that the estimators result’s are the same when using
vanilla NumPy and Array API inputs.

To run these checks you need to install
[array\_api\_compat](https://github.com/data-apis/array-api-compat) in your
test environment. To run the full set of checks you need to install both
[PyTorch](https://pytorch.org/) and [CuPy](https://cupy.dev/) and have
a GPU. Checks that can not be executed or have missing dependencies will be
automatically skipped. Therefore it’s important to run the tests with the
`-v` flag to see which checks are skipped:

```
pip install array-api-compat  # and other libraries as needed
pytest -k "array_api" -v

```

### Note on MPS device support[#](#note-on-mps-device-support "Link to this heading")

On macOS, PyTorch can use the Metal Performance Shaders (MPS) to access
hardware accelerators (e.g. the internal GPU component of the M1 or M2 chips).
However, the MPS device support for PyTorch is incomplete at the time of
writing. See the following github issue for more details:

* [pytorch/pytorch#77764](https://github.com/pytorch/pytorch/issues/77764)

To enable the MPS support in PyTorch, set the environment variable
`PYTORCH_ENABLE_MPS_FALLBACK=1` before running the tests:

```
PYTORCH_ENABLE_MPS_FALLBACK=1 pytest -k "array_api" -v

```

At the time of writing all scikit-learn tests should pass, however, the
computational speed is not necessarily better than with the CPU device.

### Note on device support for `float64`[#](#note-on-device-support-for-float64 "Link to this heading")

Certain operations within scikit-learn will automatically perform operations
on floating-point values with `float64` precision to prevent overflows and ensure
correctness (e.g., `metrics.pairwise.euclidean_distances`). However,
certain combinations of array namespaces and devices, such as `PyTorch on MPS`
(see [Note on MPS device support](#mps-support)) do not support the `float64` data type. In these cases,
scikit-learn will revert to using the `float32` data type instead. This can result in
different behavior (typically numerically unstable results) compared to not using array
API dispatching or using a device with `float64` support.