# Glossary of Common Terms and API Elements[#](#glossary-of-common-terms-and-api-elements "Link to this heading")

This glossary hopes to definitively represent the tacit and explicit
conventions applied in Scikit-learn and its API, while providing a reference
for users and contributors. It aims to describe the concepts and either detail
their corresponding API or link to other relevant parts of the documentation
which do so. By linking to glossary entries from the API Reference and User
Guide, we may minimize redundancy and inconsistency.

We begin by listing general concepts (and any that didn’t fit elsewhere), but
more specific sets of related terms are listed below:
[Class APIs and Estimator Types](#glossary-estimator-types), [Target Types](#glossary-target-types),
[Methods](#glossary-methods), [Parameters](#glossary-parameters),
[Attributes](#glossary-attributes), [Data and sample properties](#glossary-sample-props).

## General Concepts[#](#general-concepts "Link to this heading")

1d[#](#term-1d "Link to this term")

1d array[#](#term-1d-array "Link to this term")
:   One-dimensional array. A NumPy array whose `.shape` has length 1.
    A vector.

2d[#](#term-2d "Link to this term")

2d array[#](#term-2d-array "Link to this term")
:   Two-dimensional array. A NumPy array whose `.shape` has length 2.
    Often represents a matrix.

API[#](#term-API "Link to this term")
:   Refers to both the **specific** interfaces for estimators implemented in
    Scikit-learn and the **generalized** conventions across types of
    estimators as described in this glossary and [overviewed in the
    contributor documentation](https://scikit-learn.org/dev/developers/develop.html#api-overview "(in scikit-learn v1.10)").

    The specific interfaces that constitute Scikit-learn’s public API are
    largely documented in [scikitplot.api](../../apis/scikitplot.api.html#api-ref). However, we less formally consider
    anything as public API if none of the identifiers required to access it
    begins with `_`. We generally try to maintain [backwards
    compatibility](#term-backwards-compatibility) for all objects in the public API.

    Private API, including functions, modules and methods beginning `_`
    are not assured to be stable.

array-like[#](#term-array-like "Link to this term")
:   The most common data format for **input** to Scikit-learn estimators and
    functions, array-like is any type object for which
    [`numpy.asarray`](https://numpy.org/devdocs/reference/generated/numpy.asarray.html#numpy.asarray "(in NumPy v2.6.dev0)") will produce an array of appropriate shape
    (usually 1 or 2-dimensional) of appropriate dtype (usually numeric).

    This includes:

    * a numpy array
    * a list of numbers
    * a list of length-k lists of numbers for some fixed length k
    * a [`pandas.DataFrame`](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.1.0.dev0+974.ge652ee88a5)") with all columns numeric
    * a numeric [`pandas.Series`](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.html#pandas.Series "(in pandas v3.1.0.dev0+974.ge652ee88a5)")

    It excludes:

    * a [sparse matrix](#term-sparse-matrix)
    * a sparse array
    * an iterator
    * a generator

    Note that **output** from scikit-learn estimators and functions (e.g.
    predictions) should generally be arrays or sparse matrices, or lists
    thereof (as in multi-output [`tree.DecisionTreeClassifier`](https://scikit-learn.org/dev/modules/generated/sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier "(in scikit-learn v1.10)")’s
    `predict_proba`). An estimator where `predict()` returns a list or
    a `pandas.Series` is not valid.

attribute[#](#term-attribute "Link to this term")

attributes[#](#term-attributes "Link to this term")
:   We mostly use attribute to refer to how model information is stored on
    an estimator during fitting. Any public attribute stored on an
    estimator instance is required to begin with an alphabetic character
    and end in a single underscore if it is set in [fit](#term-fit) or
    [partial\_fit](#term-partial_fit). These are what is documented under an estimator’s
    **Attributes** documentation. The information stored in attributes is
    usually either: sufficient statistics used for prediction or
    transformation; [transductive](#term-transductive) outputs such as [labels\_](#term-labels_) or
    [embedding\_](#term-embedding_); or diagnostic data, such as
    [feature\_importances\_](#term-feature_importances_).
    Common attributes are listed [below](#glossary-attributes).

    A public attribute may have the same name as a constructor
    [parameter](#term-parameter), with a `_` appended. This is used to store a
    validated or estimated version of the user’s input. For example,
    [`decomposition.PCA`](https://scikit-learn.org/dev/modules/generated/sklearn.decomposition.PCA.html#sklearn.decomposition.PCA "(in scikit-learn v1.10)") is constructed with an `n_components`
    parameter. From this, together with other parameters and the data,
    PCA estimates the attribute `n_components_`.

    Further private attributes used in prediction/transformation/etc. may
    also be set when fitting. These begin with a single underscore and are
    not assured to be stable for public access.

    A public attribute on an estimator instance that does not end in an
    underscore should be the stored, unmodified value of an `__init__`
    [parameter](#term-parameter) of the same name. Because of this equivalence, these
    are documented under an estimator’s **Parameters** documentation.

backwards compatibility[#](#term-backwards-compatibility "Link to this term")
:   We generally try to maintain backward compatibility (i.e. interfaces
    and behaviors may be extended but not changed or removed) from release
    to release but this comes with some exceptions:

    Public API only
    :   The behavior of objects accessed through private identifiers
        (those beginning `_`) may be changed arbitrarily between
        versions.

    As documented
    :   We will generally assume that the users have adhered to the
        documented parameter types and ranges. If the documentation asks
        for a list and the user gives a tuple, we do not assure consistent
        behavior from version to version.

    Deprecation
    :   Behaviors may change following a [deprecation](#term-deprecation) period
        (usually two releases long). Warnings are issued using Python’s
        [`warnings`](https://docs.python.org/3/library/warnings.html#module-warnings "(in Python v3.14)") module.

    Keyword arguments
    :   We may sometimes assume that all optional parameters (other than X
        and y to [fit](#term-fit) and similar methods) are passed as keyword
        arguments only and may be positionally reordered.

    Bug fixes and enhancements
    :   Bug fixes and – less often – enhancements may change the behavior
        of estimators, including the predictions of an estimator trained on
        the same data and [random\_state](#term-random_state). When this happens, we
        attempt to note it clearly in the changelog.

    Serialization
    :   We make no assurances that pickling an estimator in one version
        will allow it to be unpickled to an equivalent model in the
        subsequent version. (For estimators in the sklearn package, we
        issue a warning when this unpickling is attempted, even if it may
        happen to work.) See [Security & Maintainability Limitations](https://scikit-learn.org/dev/model_persistence.html#persistence-limitations "(in scikit-learn v1.10)").

    [`utils.estimator_checks.check_estimator`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.estimator_checks.check_estimator.html#sklearn.utils.estimator_checks.check_estimator "(in scikit-learn v1.10)")
    :   We provide limited backwards compatibility assurances for the
        estimator checks: we may add extra requirements on estimators
        tested with this function, usually when these were informally
        assumed but not formally tested.

    Despite this informal contract with our users, the software is provided
    as is, as stated in the license. When a release inadvertently
    introduces changes that are not backward compatible, these are known
    as software regressions.

callable[#](#term-callable "Link to this term")
:   A function, class or an object which implements the `__call__`
    method; anything that returns True when the argument of [callable()](https://docs.python.org/3/library/functions.html#callable).

categorical feature[#](#term-categorical-feature "Link to this term")
:   A categorical or nominal [feature](#term-feature) is one that has a
    finite set of discrete values across the population of data.
    These are commonly represented as columns of integers or
    strings. Strings will be rejected by most scikit-learn
    estimators, and integers will be treated as ordinal or
    count-valued. For the use with most estimators, categorical
    variables should be one-hot encoded. Notable exceptions include
    tree-based models such as random forests and gradient boosting
    models that often work better and faster with integer-coded
    categorical variables.
    [`OrdinalEncoder`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.OrdinalEncoder.html#sklearn.preprocessing.OrdinalEncoder "(in scikit-learn v1.10)") helps encoding
    string-valued categorical features as ordinal integers, and
    [`OneHotEncoder`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.OneHotEncoder.html#sklearn.preprocessing.OneHotEncoder "(in scikit-learn v1.10)") can be used to
    one-hot encode categorical features.
    See also [Encoding categorical features](https://scikit-learn.org/dev/modules/preprocessing.html#preprocessing-categorical-features "(in scikit-learn v1.10)") and the
    [categorical-encoding](https://github.com/scikit-learn-contrib/category_encoders)
    package for tools related to encoding categorical features.

clone[#](#term-clone "Link to this term")

cloned[#](#term-cloned "Link to this term")
:   To copy an [estimator instance](#term-estimator-instance) and create a new one with
    identical [parameters](#term-parameters), but without any fitted
    [attributes](#term-attributes), using [`clone`](https://scikit-learn.org/dev/modules/generated/sklearn.base.clone.html#sklearn.base.clone "(in scikit-learn v1.10)").

    When `fit` is called, a [meta-estimator](#term-meta-estimator) usually clones
    a wrapped estimator instance before fitting the cloned instance.
    (Exceptions, for legacy reasons, include
    [`Pipeline`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "(in scikit-learn v1.10)") and
    [`FeatureUnion`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.FeatureUnion.html#sklearn.pipeline.FeatureUnion "(in scikit-learn v1.10)").)

    If the estimator’s `random_state` parameter is an integer (or if the
    estimator doesn’t have a `random_state` parameter), an **exact clone**
    is returned: the clone and the original estimator will give the exact
    same results. Otherwise, **statistical clone** is returned: the clone
    might yield different results from the original estimator. More
    details can be found in [Controlling randomness](https://scikit-learn.org/dev/common_pitfalls.html#randomness "(in scikit-learn v1.10)").

common tests[#](#term-common-tests "Link to this term")
:   This refers to the tests run on almost every estimator class in
    Scikit-learn to check they comply with basic API conventions. They are
    available for external use through
    [`utils.estimator_checks.check_estimator`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.estimator_checks.check_estimator.html#sklearn.utils.estimator_checks.check_estimator "(in scikit-learn v1.10)"), with most of the
    implementation in `sklearn/utils/estimator_checks.py`.

    Note: Some exceptions to the common testing regime are currently
    hard-coded into the library, but we hope to replace this by marking
    exceptional behaviours on the estimator using semantic [estimator
    tags](#term-estimator-tags).

cross-fitting[#](#term-cross-fitting "Link to this term")

cross fitting[#](#term-0 "Link to this term")
:   A resampling method that iteratively partitions data into mutually
    exclusive subsets to fit two stages. During the first stage, the
    mutually exclusive subsets enable predictions or transformations to be
    computed on data not seen during training. The computed data is then
    used in the second stage. The objective is to avoid having any
    overfitting in the first stage introduce bias into the input data
    distribution of the second stage.
    For examples of its use, see: [`TargetEncoder`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.TargetEncoder.html#sklearn.preprocessing.TargetEncoder "(in scikit-learn v1.10)"),
    [`StackingClassifier`](https://scikit-learn.org/dev/modules/generated/sklearn.ensemble.StackingClassifier.html#sklearn.ensemble.StackingClassifier "(in scikit-learn v1.10)"),
    [`StackingRegressor`](https://scikit-learn.org/dev/modules/generated/sklearn.ensemble.StackingRegressor.html#sklearn.ensemble.StackingRegressor "(in scikit-learn v1.10)") and
    [`CalibratedClassifierCV`](https://scikit-learn.org/dev/modules/generated/sklearn.calibration.CalibratedClassifierCV.html#sklearn.calibration.CalibratedClassifierCV "(in scikit-learn v1.10)").

cross-validation[#](#term-cross-validation "Link to this term")

cross validation[#](#term-1 "Link to this term")
:   A resampling method that iteratively partitions data into mutually
    exclusive ‘train’ and ‘test’ subsets so model performance can be
    evaluated on unseen data. This conserves data as avoids the need to hold
    out a ‘validation’ dataset and accounts for variability as multiple
    rounds of cross validation are generally performed.
    See [User Guide](https://scikit-learn.org/dev/modules/cross_validation.html#cross-validation "(in scikit-learn v1.10)") for more details.

deprecation[#](#term-deprecation "Link to this term")
:   We use deprecation to slowly violate our [backwards
    compatibility](#term-backwards-compatibility) assurances, usually to:

    * change the default value of a parameter; or
    * remove a parameter, attribute, method, class, etc.

    We will ordinarily issue a warning when a deprecated element is used,
    although there may be limitations to this. For instance, we will raise
    a warning when someone sets a parameter that has been deprecated, but
    may not when they access that parameter’s attribute on the estimator
    instance.

    See the [Contributors’ Guide](https://scikit-learn.org/dev/developers/contributing.html#contributing-deprecation "(in scikit-learn v1.10)").

dimensionality[#](#term-dimensionality "Link to this term")
:   May be used to refer to the number of [features](#term-features) (i.e.
    [n\_features](#term-n_features)), or columns in a 2d feature matrix.
    Dimensions are, however, also used to refer to the length of a NumPy
    array’s shape, distinguishing a 1d array from a 2d matrix.

docstring[#](#term-docstring "Link to this term")
:   The embedded documentation for a module, class, function, etc., usually
    in code as a string at the beginning of the object’s definition, and
    accessible as the object’s `__doc__` attribute.

    We try to adhere to [PEP257](https://www.python.org/dev/peps/pep-0257/), and follow [NumpyDoc
    conventions](https://numpydoc.readthedocs.io/en/latest/format.html).

double underscore[#](#term-double-underscore "Link to this term")

double underscore notation[#](#term-double-underscore-notation "Link to this term")
:   When specifying parameter names for nested estimators, `__` may be
    used to separate between parent and child in some contexts. The most
    common use is when setting parameters through a meta-estimator with
    [set\_params](#term-set_params) and hence in specifying a search grid in
    [parameter search](https://scikit-learn.org/dev/modules/grid_search.html#grid-search "(in scikit-learn v1.10)"). See [parameter](#term-parameter).
    It is also used in [`pipeline.Pipeline.fit`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline.fit "(in scikit-learn v1.10)") for passing
    [sample properties](#term-sample-properties) to the `fit` methods of estimators in
    the pipeline.

dtype[#](#term-dtype "Link to this term")

data type[#](#term-data-type "Link to this term")
:   NumPy arrays assume a homogeneous data type throughout, available in
    the `.dtype` attribute of an array (or sparse matrix). We generally
    assume simple data types for scikit-learn data: float or integer.
    We may support object or string data types for arrays before encoding
    or vectorizing. Our estimators do not work with struct arrays, for
    instance.

    Our documentation can sometimes give information about the dtype
    precision, e.g. `np.int32`, `np.int64`, etc. When the precision is
    provided, it refers to the NumPy dtype. If an arbitrary precision is
    used, the documentation will refer to dtype `integer` or `floating`.
    Note that in this case, the precision can be platform dependent.
    The `numeric` dtype refers to accepting both `integer` and `floating`.

    When it comes to choosing between 64-bit dtype (i.e. `np.float64` and
    `np.int64`) and 32-bit dtype (i.e. `np.float32` and `np.int32`), it
    boils down to a trade-off between efficiency and precision. The 64-bit
    types offer more accurate results due to their lower floating-point
    error, but demand more computational resources, resulting in slower
    operations and increased memory usage. In contrast, 32-bit types
    promise enhanced operation speed and reduced memory consumption, but
    introduce a larger floating-point error. The efficiency improvement are
    dependent on lower level optimization such as like vectorization,
    single instruction multiple dispatch (SIMD), or cache optimization but
    crucially on the compatibility of the algorithm in use.

    Specifically, the choice of precision should account for whether the
    employed algorithm can effectively leverage `np.float32`. Some
    algorithms, especially certain minimization methods, are exclusively
    coded for `np.float64`, meaning that even if `np.float32` is passed, it
    triggers an automatic conversion back to `np.float64`. This not only
    negates the intended computational savings but also introduces
    additional overhead, making operations with `np.float32` unexpectedly
    slower and more memory-intensive due to this extra conversion step.

duck typing[#](#term-duck-typing "Link to this term")
:   We try to apply [duck typing](https://en.wikipedia.org/wiki/Duck_typing) to determine how to
    handle some input values (e.g. checking whether a given estimator is
    a classifier). That is, we avoid using `isinstance` where possible,
    and rely on the presence or absence of attributes to determine an
    object’s behaviour. Some nuance is required when following this
    approach:

    * For some estimators, an attribute may only be available once it is
      [fitted](#term-fitted). For instance, we cannot a priori determine if
      [predict\_proba](#term-predict_proba) is available in a grid search where the grid
      includes alternating between a probabilistic and a non-probabilistic
      predictor in the final step of the pipeline. In the following, we
      can only determine if `clf` is probabilistic after fitting it on
      some data:

      ```
      >>> from sklearn.model_selection import GridSearchCV
      >>> from sklearn.linear_model import SGDClassifier
      >>> clf = GridSearchCV(SGDClassifier(),
      ...                    param_grid={'loss': ['log_loss', 'hinge']})

      ```

      This means that we can only check for duck-typed attributes after
      fitting, and that we must be careful to make [meta-estimators](#term-meta-estimators)
      only present attributes according to the state of the underlying
      estimator after fitting.
    * Checking if an attribute is present (using `hasattr`) is in general
      just as expensive as getting the attribute (`getattr` or dot
      notation). In some cases, getting the attribute may indeed be
      expensive (e.g. for some implementations of
      [feature\_importances\_](#term-feature_importances_), which may suggest this is an API design
      flaw). So code which does `hasattr` followed by `getattr` should
      be avoided; `getattr` within a try-except block is preferred.
    * For determining some aspects of an estimator’s expectations or
      support for some feature, we use [estimator tags](#term-estimator-tags) instead of
      duck typing.

early stopping[#](#term-early-stopping "Link to this term")
:   This consists in stopping an iterative optimization method before the
    convergence of the training loss, to avoid over-fitting. This is
    generally done by monitoring the generalization score on a validation
    set. When available, it is activated through the parameter
    `early_stopping` or by setting a positive [n\_iter\_no\_change](#term-n_iter_no_change).

estimator instance[#](#term-estimator-instance "Link to this term")
:   We sometimes use this terminology to distinguish an [estimator](#term-estimator)
    class from a constructed instance. For example, in the following,
    `cls` is an estimator class, while `est1` and `est2` are
    instances:

    ```
    cls = RandomForestClassifier
    est1 = cls()
    est2 = RandomForestClassifier()

    ```

examples[#](#term-examples "Link to this term")
:   We try to give examples of basic usage for most functions and
    classes in the API:

    * as doctests in their docstrings (i.e. within the `sklearn/` library
      code itself).
    * as examples in the [example gallery](https://scikit-learn.org/dev/auto_examples/index.html#general-examples "(in scikit-learn v1.10)")
      rendered (using [sphinx-gallery](https://sphinx-gallery.readthedocs.io/)) from scripts in the
      `examples/` directory, exemplifying key features or parameters
      of the estimator/function. These should also be referenced from the
      User Guide.
    * sometimes in the [User Guide](https://scikit-learn.org/dev/user_guide.html#user-guide "(in scikit-learn v1.10)") (built from `doc/`)
      alongside a technical description of the estimator.

experimental[#](#term-experimental "Link to this term")
:   An experimental tool is already usable but its public API, such as
    default parameter values or fitted attributes, is still subject to
    change in future versions without the usual [deprecation](#term-deprecation)
    warning policy.

evaluation metric[#](#term-evaluation-metric "Link to this term")

evaluation metrics[#](#term-evaluation-metrics "Link to this term")
:   Evaluation metrics give a measure of how well a model performs. We may
    use this term specifically to refer to the functions in [`metrics`](https://scikit-learn.org/dev/api/sklearn.metrics.html#module-sklearn.metrics "(in scikit-learn v1.10)")
    (disregarding [`pairwise`](https://scikit-learn.org/dev/api/sklearn.metrics.html#module-sklearn.metrics.pairwise "(in scikit-learn v1.10)")), as distinct from the
    [score](#term-score) method and the [scoring](#term-scoring) API used in cross
    validation. See [Metrics and scoring: quantifying the quality of predictions](https://scikit-learn.org/dev/modules/model_evaluation.html#model-evaluation "(in scikit-learn v1.10)").

    These functions usually accept a ground truth (or the raw data
    where the metric evaluates clustering without a ground truth) and a
    prediction, be it the output of [predict](#term-predict) (`y_pred`),
    of [predict\_proba](#term-predict_proba) (`y_proba`), or of an arbitrary score
    function including [decision\_function](#term-decision_function) (`y_score`).
    Functions are usually named to end with `_score` if a greater
    score indicates a better model, and `_loss` if a lesser score
    indicates a better model. This diversity of interface motivates
    the scoring API.

    Note that some estimators can calculate metrics that are not included
    in [`metrics`](https://scikit-learn.org/dev/api/sklearn.metrics.html#module-sklearn.metrics "(in scikit-learn v1.10)") and are estimator-specific, notably model
    likelihoods.

estimator tags[#](#term-estimator-tags "Link to this term")
:   Estimator tags describe certain capabilities of an estimator. This would
    enable some runtime behaviors based on estimator inspection, but it
    also allows each estimator to be tested for appropriate invariances
    while being excepted from other [common tests](#term-common-tests).

    Some aspects of estimator tags are currently determined through
    the [duck typing](#term-duck-typing) of methods like `predict_proba` and through
    some special attributes on estimator objects:

    `_estimator_type`[#](#term-_estimator_type "Link to this term")
    :   This string-valued attribute identifies an estimator as being a
        classifier, regressor, etc. It is set by mixins such as
        [`base.ClassifierMixin`](https://scikit-learn.org/dev/modules/generated/sklearn.base.ClassifierMixin.html#sklearn.base.ClassifierMixin "(in scikit-learn v1.10)"), but needs to be more explicitly
        adopted on a [meta-estimator](#term-meta-estimator). Its value should usually be
        checked by way of a helper such as [`base.is_classifier`](https://scikit-learn.org/dev/modules/generated/sklearn.base.is_classifier.html#sklearn.base.is_classifier "(in scikit-learn v1.10)").

    For more detailed info, see [Estimator Tags](https://scikit-learn.org/dev/developers/develop.html#estimator-tags "(in scikit-learn v1.10)").

feature[#](#term-feature "Link to this term")

features[#](#term-features "Link to this term")

feature vector[#](#term-feature-vector "Link to this term")
:   In the abstract, a feature is a function (in its mathematical sense)
    mapping a sampled object to a numeric or categorical quantity.
    “Feature” is also commonly used to refer to these quantities, being the
    individual elements of a vector representing a sample. In a data
    matrix, features are represented as columns: each column contains the
    result of applying a feature function to a set of samples.

    Elsewhere features are known as attributes, predictors, regressors, or
    independent variables.

    Nearly all estimators in scikit-learn assume that features are numeric,
    finite and not missing, even when they have semantically distinct
    domains and distributions (categorical, ordinal, count-valued,
    real-valued, interval). See also [categorical feature](#term-categorical-feature) and
    [missing values](#term-missing-values).

    `n_features` indicates the number of features in a dataset.

fitting[#](#term-fitting "Link to this term")
:   Calling [fit](#term-fit) (or [fit\_transform](#term-fit_transform), [fit\_predict](#term-fit_predict),
    etc.) on an estimator.

fitted[#](#term-fitted "Link to this term")
:   The state of an estimator after [fitting](#term-fitting).

    There is no conventional procedure for checking if an estimator
    is fitted. However, an estimator that is not fitted:

    * should raise [`exceptions.NotFittedError`](https://scikit-learn.org/dev/modules/generated/sklearn.exceptions.NotFittedError.html#sklearn.exceptions.NotFittedError "(in scikit-learn v1.10)") when a prediction
      method ([predict](#term-predict), [transform](#term-transform), etc.) is called.
      ([`utils.validation.check_is_fitted`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.validation.check_is_fitted.html#sklearn.utils.validation.check_is_fitted "(in scikit-learn v1.10)") is used internally
      for this purpose.)
    * should not have any [attributes](#term-attributes) beginning with an alphabetic
      character and ending with an underscore. (Note that a descriptor for
      the attribute may still be present on the class, but hasattr should
      return False)

function[#](#term-function "Link to this term")
:   We provide ad hoc function interfaces for many algorithms, while
    [estimator](#term-estimator) classes provide a more consistent interface.

    In particular, Scikit-learn may provide a function interface that fits
    a model to some data and returns the learnt model parameters, as in
    [`linear_model.enet_path`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.enet_path.html#sklearn.linear_model.enet_path "(in scikit-learn v1.10)"). For transductive models, this also
    returns the embedding or cluster labels, as in
    [`manifold.spectral_embedding`](https://scikit-learn.org/dev/modules/generated/sklearn.manifold.spectral_embedding.html#sklearn.manifold.spectral_embedding "(in scikit-learn v1.10)") or [`cluster.dbscan`](https://scikit-learn.org/dev/modules/generated/dbscan-function.html#sklearn.cluster.dbscan "(in scikit-learn v1.10)"). Many
    preprocessing transformers also provide a function interface, akin to
    calling [fit\_transform](#term-fit_transform), as in
    [`preprocessing.maxabs_scale`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.maxabs_scale.html#sklearn.preprocessing.maxabs_scale "(in scikit-learn v1.10)"). Users should be careful to avoid
    [data leakage](#term-data-leakage) when making use of these
    `fit_transform`-equivalent functions.

    We do not have a strict policy about when to or when not to provide
    function forms of estimators, but maintainers should consider
    consistency with existing interfaces, and whether providing a function
    would lead users astray from best practices (as regards data leakage,
    etc.)

gallery[#](#term-gallery "Link to this term")
:   See [examples](#term-examples).

hyperparameter[#](#term-hyperparameter "Link to this term")

hyper-parameter[#](#term-hyper-parameter "Link to this term")
:   See [parameter](#term-parameter).

impute[#](#term-impute "Link to this term")

imputation[#](#term-imputation "Link to this term")
:   Most machine learning algorithms require that their inputs have no
    [missing values](#term-missing-values), and will not work if this requirement is
    violated. Algorithms that attempt to fill in (or impute) missing values
    are referred to as imputation algorithms.

indexable[#](#term-indexable "Link to this term")
:   An [array-like](#term-array-like), [sparse matrix](#term-sparse-matrix), pandas DataFrame or
    sequence (usually a list).

induction[#](#term-induction "Link to this term")

inductive[#](#term-inductive "Link to this term")
:   Inductive (contrasted with [transductive](#term-transductive)) machine learning
    builds a model of some data that can then be applied to new instances.
    Most estimators in Scikit-learn are inductive, having [predict](#term-predict)
    and/or [transform](#term-transform) methods.

joblib[#](#term-joblib "Link to this term")
:   A Python library (<https://joblib.readthedocs.io>) used in Scikit-learn to
    facilite simple parallelism and caching. Joblib is oriented towards
    efficiently working with numpy arrays, such as through use of
    [memory mapping](#term-memory-mapping). See [Parallelism](https://scikit-learn.org/dev/computing/parallelism.html#parallelism "(in scikit-learn v1.10)") for more
    information.

label indicator matrix[#](#term-label-indicator-matrix "Link to this term")

multilabel indicator matrix[#](#term-multilabel-indicator-matrix "Link to this term")

multilabel indicator matrices[#](#term-multilabel-indicator-matrices "Link to this term")
:   The format used to represent multilabel data, where each row of a 2d
    array or sparse matrix corresponds to a sample, each column
    corresponds to a class, and each element is 1 if the sample is labeled
    with the class and 0 if not.

leakage[#](#term-leakage "Link to this term")

data leakage[#](#term-data-leakage "Link to this term")
:   A problem in cross validation where generalization performance can be
    over-estimated since knowledge of the test data was inadvertently
    included in training a model. This is a risk, for instance, when
    applying a [transformer](#term-transformer) to the entirety of a dataset rather
    than each training portion in a cross validation split.

    We aim to provide interfaces (such as [`pipeline`](https://scikit-learn.org/dev/api/sklearn.pipeline.html#module-sklearn.pipeline "(in scikit-learn v1.10)") and
    [`model_selection`](https://scikit-learn.org/dev/api/sklearn.model_selection.html#module-sklearn.model_selection "(in scikit-learn v1.10)")) that shield the user from data leakage.

memmapping[#](#term-memmapping "Link to this term")

memory map[#](#term-memory-map "Link to this term")

memory mapping[#](#term-memory-mapping "Link to this term")
:   A memory efficiency strategy that keeps data on disk rather than
    copying it into main memory. Memory maps can be created for arrays
    that can be read, written, or both, using [`numpy.memmap`](https://numpy.org/devdocs/reference/generated/numpy.memmap.html#numpy.memmap "(in NumPy v2.6.dev0)"). When
    using [joblib](#term-joblib) to parallelize operations in Scikit-learn, it
    may automatically memmap large arrays to reduce memory duplication
    overhead in multiprocessing.

missing values[#](#term-missing-values "Link to this term")
:   Most Scikit-learn estimators do not work with missing values. When they
    do (e.g. in [`impute.SimpleImputer`](https://scikit-learn.org/dev/modules/generated/sklearn.impute.SimpleImputer.html#sklearn.impute.SimpleImputer "(in scikit-learn v1.10)")), NaN is the preferred
    representation of missing values in float arrays. If the array has
    integer dtype, NaN cannot be represented. For this reason, we support
    specifying another `missing_values` value when [imputation](#term-imputation) or
    learning can be performed in integer space.
    [Unlabeled data](#term-unlabeled-data) is a special case of missing
    values in the [target](#term-target).

`n_features`[#](#term-n_features "Link to this term")
:   The number of [features](#term-features).

`n_outputs`[#](#term-n_outputs "Link to this term")
:   The number of [outputs](#term-outputs) in the [target](#term-target).

`n_samples`[#](#term-n_samples "Link to this term")
:   The number of [samples](#term-samples).

`n_targets`[#](#term-n_targets "Link to this term")
:   Synonym for [n\_outputs](#term-n_outputs).

narrative docs[#](#term-narrative-docs "Link to this term")

narrative documentation[#](#term-narrative-documentation "Link to this term")
:   An alias for [User Guide](https://scikit-learn.org/dev/user_guide.html#user-guide "(in scikit-learn v1.10)"), i.e. documentation written
    in `doc/modules/`. Unlike the [API reference](../../apis/scikitplot.api.html#api-ref) provided
    through docstrings, the User Guide aims to:

    * group tools provided by Scikit-learn together thematically or in
      terms of usage;
    * motivate why someone would use each particular tool, often through
      comparison;
    * provide both intuitive and technical descriptions of tools;
    * provide or link to [examples](#term-examples) of using key features of a
      tool.

np[#](#term-np "Link to this term")
:   A shorthand for Numpy due to the conventional import statement:

    ```
    import numpy as np

    ```

online learning[#](#term-online-learning "Link to this term")
:   Where a model is iteratively updated by receiving each batch of ground
    truth [targets](#term-targets) soon after making predictions on corresponding
    batch of data. Intrinsically, the model must be usable for prediction
    after each batch. See [partial\_fit](#term-partial_fit).

out-of-core[#](#term-out-of-core "Link to this term")
:   An efficiency strategy where not all the data is stored in main memory
    at once, usually by performing learning on batches of data. See
    [partial\_fit](#term-partial_fit).

outputs[#](#term-outputs "Link to this term")
:   Individual scalar/categorical variables per sample in the
    [target](#term-target). For example, in multilabel classification each
    possible label corresponds to a binary output. Also called **responses**,
    **tasks** or **targets**.
    See [multiclass multioutput](#term-multiclass-multioutput) and [continuous multioutput](#term-continuous-multioutput).

pair[#](#term-pair "Link to this term")
:   A tuple of length two.

parameter[#](#term-parameter "Link to this term")

parameters[#](#term-parameters "Link to this term")

param[#](#term-param "Link to this term")

params[#](#term-params "Link to this term")
:   We mostly use **parameter** to refer to the aspects of an estimator that
    can be specified in its construction. For example, `max_depth` and
    `random_state` are parameters of [`RandomForestClassifier`](https://scikit-learn.org/dev/modules/generated/sklearn.ensemble.RandomForestClassifier.html#sklearn.ensemble.RandomForestClassifier "(in scikit-learn v1.10)").
    Parameters to an estimator’s constructor are stored unmodified as
    attributes on the estimator instance, and conventionally start with an
    alphabetic character and end with an alphanumeric character. Each
    estimator’s constructor parameters are described in the estimator’s
    docstring.

    We do not use parameters in the statistical sense, where parameters are
    values that specify a model and can be estimated from data. What we
    call parameters might be what statisticians call hyperparameters to the
    model: aspects for configuring model structure that are often not
    directly learnt from data. However, our parameters are also used to
    prescribe modeling operations that do not affect the learnt model, such
    as [n\_jobs](#term-n_jobs) for controlling parallelism.

    When talking about the parameters of a [meta-estimator](#term-meta-estimator), we may
    also be including the parameters of the estimators wrapped by the
    meta-estimator. Ordinarily, these nested parameters are denoted by
    using a [double underscore](#term-double-underscore) (`__`) to separate between the
    estimator-as-parameter and its parameter. Thus `clf =
    BaggingClassifier(estimator=DecisionTreeClassifier(max_depth=3))`
    has a deep parameter `estimator__max_depth` with value `3`,
    which is accessible with `clf.estimator.max_depth` or
    `clf.get_params()['estimator__max_depth']`.

    The list of parameters and their current values can be retrieved from
    an [estimator instance](#term-estimator-instance) using its [get\_params](#term-get_params) method.

    Between construction and fitting, parameters may be modified using
    [set\_params](#term-set_params). To enable this, parameters are not ordinarily
    validated or altered when the estimator is constructed, or when each
    parameter is set. Parameter validation is performed when [fit](#term-fit) is
    called.

    Common parameters are listed [below](#glossary-parameters).

pairwise metric[#](#term-pairwise-metric "Link to this term")

pairwise metrics[#](#term-pairwise-metrics "Link to this term")
:   In its broad sense, a pairwise metric defines a function for measuring
    similarity or dissimilarity between two samples (with each ordinarily
    represented as a [feature vector](#term-feature-vector)). We particularly provide
    implementations of distance metrics (as well as improper metrics like
    Cosine Distance) through [`metrics.pairwise_distances`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "(in scikit-learn v1.10)"), and of
    kernel functions (a constrained class of similarity functions) in
    [`metrics.pairwise.pairwise_kernels`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise.pairwise_kernels.html#sklearn.metrics.pairwise.pairwise_kernels "(in scikit-learn v1.10)"). These can compute pairwise distance
    matrices that are symmetric and hence store data redundantly.

    See also [precomputed](#term-precomputed) and [metric](#term-metric).

    Note that for most distance metrics, we rely on implementations from
    [`scipy.spatial.distance`](https://scipy.github.io/devdocs/reference/spatial.distance.html#module-scipy.spatial.distance "(in SciPy v1.19.0.dev)"), but may reimplement for efficiency in
    our context. The [`metrics.DistanceMetric`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.DistanceMetric.html#sklearn.metrics.DistanceMetric "(in scikit-learn v1.10)") interface is used to implement
    distance metrics for integration with efficient neighbors search.

pd[#](#term-pd "Link to this term")
:   A shorthand for [Pandas](https://pandas.pydata.org) due to the
    conventional import statement:

    ```
    import pandas as pd

    ```

precomputed[#](#term-precomputed "Link to this term")
:   Where algorithms rely on [pairwise metrics](#term-pairwise-metrics), and can be computed
    from pairwise metrics alone, we often allow the user to specify that
    the [X](#term-X) provided is already in the pairwise (dis)similarity
    space, rather than in a feature space. That is, when passed to
    [fit](#term-fit), it is a square, symmetric matrix, with each vector
    indicating (dis)similarity to every sample, and when passed to
    prediction/transformation methods, each row corresponds to a testing
    sample and each column to a training sample.

    Use of precomputed X is usually indicated by setting a `metric`,
    `affinity` or `kernel` parameter to the string ‘precomputed’. If
    this is the case, then the estimator should set the `pairwise`
    estimator tag as True.

rectangular[#](#term-rectangular "Link to this term")
:   Data that can be represented as a matrix with [samples](#term-samples) on the
    first axis and a fixed, finite set of [features](#term-features) on the second
    is called rectangular.

    This term excludes samples with non-vectorial structures, such as text,
    an image of arbitrary size, a time series of arbitrary length, a set of
    vectors, etc. The purpose of a [vectorizer](#term-vectorizer) is to produce
    rectangular forms of such data.

sample[#](#term-sample "Link to this term")

samples[#](#term-samples "Link to this term")
:   We usually use this term as a noun to indicate a single feature vector.
    Elsewhere a sample is called an instance, data point, or observation.
    `n_samples` indicates the number of samples in a dataset, being the
    number of rows in a data array [X](#term-X).

sample property[#](#term-sample-property "Link to this term")

sample properties[#](#term-sample-properties "Link to this term")
:   A sample property is data for each sample (e.g. an array of length
    n\_samples) passed to an estimator method or a similar function,
    alongside but distinct from the [features](#term-features) (`X`) and
    [target](#term-target) (`y`). The most prominent example is
    [sample\_weight](#term-sample_weight); see others at [Data and sample properties](#glossary-sample-props).

    As of version 0.19 we do not have a consistent approach to handling
    sample properties and their routing in [meta-estimators](#term-meta-estimators), though
    a `fit_params` parameter is often used.

scikit-learn-contrib[#](#term-scikit-learn-contrib "Link to this term")
:   A venue for publishing Scikit-learn-compatible libraries that are
    broadly authorized by the core developers and the contrib community,
    but not maintained by the core developer team.
    See <https://scikit-learn-contrib.github.io>.

scikit-learn enhancement proposals[#](#term-scikit-learn-enhancement-proposals "Link to this term")

SLEP[#](#term-SLEP "Link to this term")

SLEPs[#](#term-SLEPs "Link to this term")
:   Changes to the API principles and changes to dependencies or supported
    versions happen via a [SLEP](https://scikit-learn.org/dev/governance.html#slep "(in scikit-learn v1.10)") and follows the
    decision-making process outlined in [Scikit-learn governance and decision-making](https://scikit-learn.org/dev/governance.html#governance "(in scikit-learn v1.10)").
    For all votes, a proposal must have been made public and discussed before the
    vote. Such a proposal must be a consolidated document, in the form of a
    “Scikit-Learn Enhancement Proposal” (SLEP), rather than a long discussion on an
    issue. A SLEP must be submitted as a pull-request to
    [enhancement proposals](https://scikit-learn-enhancement-proposals.readthedocs.io) using the
    [SLEP template](https://scikit-learn-enhancement-proposals.readthedocs.io/en/latest/slep_template.html).

semi-supervised[#](#term-semi-supervised "Link to this term")

semi-supervised learning[#](#term-semi-supervised-learning "Link to this term")

semisupervised[#](#term-semisupervised "Link to this term")
:   Learning where the expected prediction (label or ground truth) is only
    available for some samples provided as training data when
    [fitting](#term-fitting) the model. We conventionally apply the label `-1`
    to [unlabeled](#term-unlabeled) samples in semi-supervised classification.

sparse matrix[#](#term-sparse-matrix "Link to this term")

sparse graph[#](#term-sparse-graph "Link to this term")
:   A representation of two-dimensional numeric data that is more memory
    efficient the corresponding dense numpy array where almost all elements
    are zero. We use the [`scipy.sparse`](https://scipy.github.io/devdocs/reference/sparse.html#module-scipy.sparse "(in SciPy v1.19.0.dev)") framework, which provides
    several underlying sparse data representations, or **formats**.
    Some formats are more efficient than others for particular tasks, and
    when a particular format provides especial benefit, we try to document
    this fact in Scikit-learn parameter descriptions.

    Some sparse matrix formats (notably CSR, CSC, COUP and LIL) distinguish
    between **implicit** and **explicit** zeros. Explicit zeros are stored
    (i.e. they consume memory in a `data` array) in the data structure,
    while implicit zeros correspond to every element not otherwise defined
    in explicit storage.

    Two semantics for sparse matrices are used in Scikit-learn:

    matrix semantics
    :   The sparse matrix is interpreted as an array with implicit and
        explicit zeros being interpreted as the number 0. This is the
        interpretation most often adopted, e.g. when sparse matrices
        are used for feature matrices or [multilabel indicator
        matrices](#term-multilabel-indicator-matrices).

    graph semantics
    :   As with [`scipy.sparse.csgraph`](https://scipy.github.io/devdocs/reference/sparse.csgraph.html#module-scipy.sparse.csgraph "(in SciPy v1.19.0.dev)"), explicit zeros are
        interpreted as the number 0, but implicit zeros indicate a masked
        or absent value, such as the absence of an edge between two
        vertices of a graph, where an explicit value indicates an edge’s
        weight. This interpretation is adopted to represent connectivity
        in clustering, in representations of nearest neighborhoods
        (e.g. [`neighbors.kneighbors_graph`](https://scikit-learn.org/dev/modules/generated/sklearn.neighbors.kneighbors_graph.html#sklearn.neighbors.kneighbors_graph "(in scikit-learn v1.10)")), and for precomputed
        distance representation where only distances in the neighborhood
        of each point are required.

    When working with sparse matrices, we assume that it is sparse for a
    good reason, and avoid writing code that densifies a user-provided
    sparse matrix, instead maintaining sparsity or raising an error if not
    possible (i.e. if an estimator does not / cannot support sparse
    matrices).

stateless[#](#term-stateless "Link to this term")
:   An estimator is stateless if it does not store any information that is
    obtained during [fit](#term-fit). This information can be either parameters
    learned during [fit](#term-fit) or statistics computed from the
    training data. An estimator is stateless if it has no [attributes](#term-attributes)
    apart from ones set in `__init__`. Calling [fit](#term-fit) for these
    estimators will only validate the public [attributes](#term-attributes) passed
    in `__init__`.

supervised[#](#term-supervised "Link to this term")

supervised learning[#](#term-supervised-learning "Link to this term")
:   Learning where the expected prediction (label or ground truth) is
    available for each sample when [fitting](#term-fitting) the model, provided as
    [y](#term-y). This is the approach taken in a [classifier](#term-classifier) or
    [regressor](#term-regressor) among other estimators.

target[#](#term-target "Link to this term")

targets[#](#term-targets "Link to this term")
:   The **dependent variable** in [supervised](#term-supervised) (and
    [semisupervised](#term-semisupervised)) learning, passed as [y](#term-y) to an estimator’s
    [fit](#term-fit) method. Also known as **dependent variable**, **outcome
    variable**, **response variable**, **ground truth** or **label**. Scikit-learn
    works with targets that have minimal structure: a class from a finite
    set, a finite real-valued number, multiple classes, or multiple
    numbers. See [Target Types](#glossary-target-types).

transduction[#](#term-transduction "Link to this term")

transductive[#](#term-transductive "Link to this term")
:   A transductive (contrasted with [inductive](#term-inductive)) machine learning
    method is designed to model a specific dataset, but not to apply that
    model to unseen data. Examples include [`manifold.TSNE`](https://scikit-learn.org/dev/modules/generated/sklearn.manifold.TSNE.html#sklearn.manifold.TSNE "(in scikit-learn v1.10)"),
    [`cluster.AgglomerativeClustering`](https://scikit-learn.org/dev/modules/generated/sklearn.cluster.AgglomerativeClustering.html#sklearn.cluster.AgglomerativeClustering "(in scikit-learn v1.10)") and
    [`neighbors.LocalOutlierFactor`](https://scikit-learn.org/dev/modules/generated/sklearn.neighbors.LocalOutlierFactor.html#sklearn.neighbors.LocalOutlierFactor "(in scikit-learn v1.10)").

unlabeled[#](#term-unlabeled "Link to this term")

unlabeled data[#](#term-unlabeled-data "Link to this term")
:   Samples with an unknown ground truth when fitting; equivalently,
    [missing values](#term-missing-values) in the [target](#term-target). See also
    [semisupervised](#term-semisupervised) and [unsupervised](#term-unsupervised) learning.

unsupervised[#](#term-unsupervised "Link to this term")

unsupervised learning[#](#term-unsupervised-learning "Link to this term")
:   Learning where the expected prediction (label or ground truth) is not
    available for each sample when [fitting](#term-fitting) the model, as in
    [clusterers](#term-clusterers) and [outlier detectors](#term-outlier-detectors). Unsupervised
    estimators ignore any [y](#term-y) passed to [fit](#term-fit).

## Class APIs and Estimator Types[#](#class-apis-and-estimator-types "Link to this heading")

classifier[#](#term-classifier "Link to this term")

classifiers[#](#term-classifiers "Link to this term")
:   A [supervised](#term-supervised) (or [semi-supervised](#term-semi-supervised)) [predictor](#term-predictor)
    with a finite set of discrete possible output values.

    A classifier supports modeling some of [binary](#term-binary),
    [multiclass](#term-multiclass), [multilabel](#term-multilabel), or [multiclass
    multioutput](#term-multiclass-multioutput) targets. Within scikit-learn, all classifiers support
    multi-class classification, defaulting to using a one-vs-rest
    strategy over the binary classification problem.

    Classifiers must store a [classes\_](#term-classes_) attribute after fitting,
    and usually inherit from [`base.ClassifierMixin`](https://scikit-learn.org/dev/modules/generated/sklearn.base.ClassifierMixin.html#sklearn.base.ClassifierMixin "(in scikit-learn v1.10)"), which sets
    their [\_estimator\_type](#term-_estimator_type) attribute.

    A classifier can be distinguished from other estimators with
    [`is_classifier`](https://scikit-learn.org/dev/modules/generated/sklearn.base.is_classifier.html#sklearn.base.is_classifier "(in scikit-learn v1.10)").

    A classifier must implement:

    * [fit](#term-fit)
    * [predict](#term-predict)
    * [score](#term-score)

    It may also be appropriate to implement [decision\_function](#term-decision_function),
    [predict\_proba](#term-predict_proba) and [predict\_log\_proba](#term-predict_log_proba).

clusterer[#](#term-clusterer "Link to this term")

clusterers[#](#term-clusterers "Link to this term")
:   A [unsupervised](#term-unsupervised) [predictor](#term-predictor) with a finite set of discrete
    output values.

    A clusterer usually stores [labels\_](#term-labels_) after fitting, and must do
    so if it is [transductive](#term-transductive).

    A clusterer must implement:

    * [fit](#term-fit)
    * [fit\_predict](#term-fit_predict) if [transductive](#term-transductive)
    * [predict](#term-predict) if [inductive](#term-inductive)

density estimator[#](#term-density-estimator "Link to this term")
:   An [unsupervised](#term-unsupervised) estimation of input probability density
    function. Commonly used techniques are:

    * [Kernel Density Estimation](https://scikit-learn.org/dev/modules/density.html#kernel-density "(in scikit-learn v1.10)") - uses a kernel function, controlled by the
      bandwidth parameter to represent density;
    * [Gaussian mixture](https://scikit-learn.org/dev/modules/mixture.html#mixture "(in scikit-learn v1.10)") - uses mixture of Gaussian models
      to represent density.

estimator[#](#term-estimator "Link to this term")

estimators[#](#term-estimators "Link to this term")
:   An object which manages the estimation and decoding of a model. The
    model is estimated as a deterministic function of:

    * [parameters](#term-parameters) provided in object construction or with
      [set\_params](#term-set_params);
    * the global [`numpy.random`](https://numpy.org/devdocs/reference/random/index.html#module-numpy.random "(in NumPy v2.6.dev0)") random state if the estimator’s
      [random\_state](#term-random_state) parameter is set to None; and
    * any data or [sample properties](#term-sample-properties) passed to the most recent
      call to [fit](#term-fit), [fit\_transform](#term-fit_transform) or [fit\_predict](#term-fit_predict),
      or data similarly passed in a sequence of calls to
      [partial\_fit](#term-partial_fit).

    The estimated model is stored in public and private [attributes](#term-attributes)
    on the estimator instance, facilitating decoding through prediction
    and transformation methods.

    Estimators must provide a [fit](#term-fit) method, and should provide
    [set\_params](#term-set_params) and [get\_params](#term-get_params), although these are usually
    provided by inheritance from [`base.BaseEstimator`](https://scikit-learn.org/dev/modules/generated/sklearn.base.BaseEstimator.html#sklearn.base.BaseEstimator "(in scikit-learn v1.10)").

    The core functionality of some estimators may also be available as a
    [function](#term-function).

feature extractor[#](#term-feature-extractor "Link to this term")

feature extractors[#](#term-feature-extractors "Link to this term")
:   A [transformer](#term-transformer) which takes input where each sample is not
    represented as an [array-like](#term-array-like) object of fixed length, and
    produces an [array-like](#term-array-like) object of [features](#term-features) for each
    sample (and thus a 2-dimensional array-like for a set of samples). In
    other words, it (lossily) maps a non-rectangular data representation
    into [rectangular](#term-rectangular) data.

    Feature extractors must implement at least:

    * [fit](#term-fit)
    * [transform](#term-transform)
    * [get\_feature\_names\_out](#term-get_feature_names_out)

meta-estimator[#](#term-meta-estimator "Link to this term")

meta-estimators[#](#term-meta-estimators "Link to this term")

metaestimator[#](#term-metaestimator "Link to this term")

metaestimators[#](#term-metaestimators "Link to this term")
:   An [estimator](#term-estimator) which takes another estimator as a parameter.
    Examples include [`pipeline.Pipeline`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "(in scikit-learn v1.10)"),
    [`model_selection.GridSearchCV`](https://scikit-learn.org/dev/modules/generated/sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV "(in scikit-learn v1.10)"),
    [`feature_selection.SelectFromModel`](https://scikit-learn.org/dev/modules/generated/sklearn.feature_selection.SelectFromModel.html#sklearn.feature_selection.SelectFromModel "(in scikit-learn v1.10)") and
    [`ensemble.BaggingClassifier`](https://scikit-learn.org/dev/modules/generated/sklearn.ensemble.BaggingClassifier.html#sklearn.ensemble.BaggingClassifier "(in scikit-learn v1.10)").

    In a meta-estimator’s [fit](#term-fit) method, any contained estimators
    should be [cloned](#term-cloned) before they are fit (although FIXME: Pipeline
    and FeatureUnion do not do this currently). An exception to this is
    that an estimator may explicitly document that it accepts a pre-fitted
    estimator (e.g. using `prefit=True` in
    [`feature_selection.SelectFromModel`](https://scikit-learn.org/dev/modules/generated/sklearn.feature_selection.SelectFromModel.html#sklearn.feature_selection.SelectFromModel "(in scikit-learn v1.10)")). One known issue with this
    is that the pre-fitted estimator will lose its model if the
    meta-estimator is cloned. A meta-estimator should have `fit` called
    before prediction, even if all contained estimators are pre-fitted.

    In cases where a meta-estimator’s primary behaviors (e.g.
    [predict](#term-predict) or [transform](#term-transform) implementation) are functions of
    prediction/transformation methods of the provided **base estimator** (or
    multiple base estimators), a meta-estimator should provide at least the
    standard methods provided by the base estimator. It may not be
    possible to identify which methods are provided by the underlying
    estimator until the meta-estimator has been [fitted](#term-fitted) (see also
    [duck typing](#term-duck-typing)), for which
    [`utils.metaestimators.available_if`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.metaestimators.available_if.html#sklearn.utils.metaestimators.available_if "(in scikit-learn v1.10)") may help. It
    should also provide (or modify) the [estimator tags](#term-estimator-tags) and
    [classes\_](#term-classes_) attribute provided by the base estimator.

    Meta-estimators should be careful to validate data as minimally as
    possible before passing it to an underlying estimator. This saves
    computation time, and may, for instance, allow the underlying
    estimator to easily work with data that is not [rectangular](#term-rectangular).

outlier detector[#](#term-outlier-detector "Link to this term")

outlier detectors[#](#term-outlier-detectors "Link to this term")
:   An [unsupervised](#term-unsupervised) binary [predictor](#term-predictor) which models the
    distinction between core and outlying samples.

    Outlier detectors must implement:

    * [fit](#term-fit)
    * [fit\_predict](#term-fit_predict) if [transductive](#term-transductive)
    * [predict](#term-predict) if [inductive](#term-inductive)

    Inductive outlier detectors may also implement
    [decision\_function](#term-decision_function) to give a normalized inlier score where
    outliers have score below 0. [score\_samples](#term-score_samples) may provide an
    unnormalized score per sample.

predictor[#](#term-predictor "Link to this term")

predictors[#](#term-predictors "Link to this term")
:   An [estimator](#term-estimator) supporting [predict](#term-predict) and/or
    [fit\_predict](#term-fit_predict). This encompasses [classifier](#term-classifier),
    [regressor](#term-regressor), [outlier detector](#term-outlier-detector) and [clusterer](#term-clusterer).

    In statistics, “predictors” refers to [features](#term-features).

regressor[#](#term-regressor "Link to this term")

regressors[#](#term-regressors "Link to this term")
:   A [supervised](#term-supervised) (or [semi-supervised](#term-semi-supervised)) [predictor](#term-predictor)
    with [continuous](#term-continuous) output values.

    Regressors usually inherit from [`base.RegressorMixin`](https://scikit-learn.org/dev/modules/generated/sklearn.base.RegressorMixin.html#sklearn.base.RegressorMixin "(in scikit-learn v1.10)"), which
    sets their [\_estimator\_type](#term-_estimator_type) attribute.

    A regressor can be distinguished from other estimators with
    [`is_regressor`](https://scikit-learn.org/dev/modules/generated/sklearn.base.is_regressor.html#sklearn.base.is_regressor "(in scikit-learn v1.10)").

    A regressor must implement:

    * [fit](#term-fit)
    * [predict](#term-predict)
    * [score](#term-score)

transformer[#](#term-transformer "Link to this term")

transformers[#](#term-transformers "Link to this term")
:   An estimator supporting [transform](#term-transform) and/or [fit\_transform](#term-fit_transform).
    A purely [transductive](#term-transductive) transformer, such as
    [`manifold.TSNE`](https://scikit-learn.org/dev/modules/generated/sklearn.manifold.TSNE.html#sklearn.manifold.TSNE "(in scikit-learn v1.10)"), may not implement `transform`.

vectorizer[#](#term-vectorizer "Link to this term")

vectorizers[#](#term-vectorizers "Link to this term")
:   See [feature extractor](#term-feature-extractor).

There are further APIs specifically related to a small family of estimators,
such as:

cross-validation splitter[#](#term-cross-validation-splitter "Link to this term")

CV splitter[#](#term-CV-splitter "Link to this term")

cross-validation generator[#](#term-cross-validation-generator "Link to this term")
:   A non-estimator family of classes used to split a dataset into a
    sequence of train and test portions (see [Cross-validation: evaluating estimator performance](https://scikit-learn.org/dev/modules/cross_validation.html#cross-validation "(in scikit-learn v1.10)")),
    by providing [split](#term-split) and [get\_n\_splits](#term-get_n_splits) methods.
    Note that unlike estimators, these do not have [fit](#term-fit) methods
    and do not provide [set\_params](#term-set_params) or [get\_params](#term-get_params).
    Parameter validation may be performed in `__init__`.

cross-validation estimator[#](#term-cross-validation-estimator "Link to this term")
:   An estimator that has built-in cross-validation capabilities to
    automatically select the best hyper-parameters (see the [User
    Guide](https://scikit-learn.org/dev/modules/grid_search.html#grid-search "(in scikit-learn v1.10)")). Some example of cross-validation estimators
    are [`ElasticNetCV`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.ElasticNetCV.html#sklearn.linear_model.ElasticNetCV "(in scikit-learn v1.10)") and
    [`LogisticRegressionCV`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.LogisticRegressionCV.html#sklearn.linear_model.LogisticRegressionCV "(in scikit-learn v1.10)").
    Cross-validation estimators are named `EstimatorCV` and tend to be
    roughly equivalent to `GridSearchCV(Estimator(), ...)`. The
    advantage of using a cross-validation estimator over the canonical
    [estimator](#term-estimator) class along with [grid search](https://scikit-learn.org/dev/modules/grid_search.html#grid-search "(in scikit-learn v1.10)") is
    that they can take advantage of warm-starting by reusing precomputed
    results in the previous steps of the cross-validation process. This
    generally leads to speed improvements. An exception is the
    [`RidgeCV`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.RidgeCV.html#sklearn.linear_model.RidgeCV "(in scikit-learn v1.10)") class, which can instead
    perform efficient Leave-One-Out (LOO) CV. By default, all these
    estimators, apart from [`RidgeCV`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.RidgeCV.html#sklearn.linear_model.RidgeCV "(in scikit-learn v1.10)") with an
    LOO-CV, will be refitted on the full training dataset after finding the
    best combination of hyper-parameters.

scorer[#](#term-scorer "Link to this term")
:   A non-estimator callable object which evaluates an estimator on given
    test data, returning a number. Unlike [evaluation metrics](#term-evaluation-metrics),
    a greater returned number must correspond with a **better** score.
    See [The scoring parameter: defining model evaluation rules](https://scikit-learn.org/dev/modules/model_evaluation.html#scoring-parameter "(in scikit-learn v1.10)").

Further examples:

* [`metrics.DistanceMetric`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.DistanceMetric.html#sklearn.metrics.DistanceMetric "(in scikit-learn v1.10)")
* [`gaussian_process.kernels.Kernel`](https://scikit-learn.org/dev/modules/generated/sklearn.gaussian_process.kernels.Kernel.html#sklearn.gaussian_process.kernels.Kernel "(in scikit-learn v1.10)")
* `tree.Criterion`

## Metadata Routing[#](#metadata-routing "Link to this heading")

consumer[#](#term-consumer "Link to this term")
:   An object which consumes [metadata](#term-metadata). This object is usually an
    [estimator](#term-estimator), a [scorer](#term-scorer), or a [CV splitter](#term-CV-splitter). Consuming
    metadata means using it in calculations, e.g. using
    [sample\_weight](#term-sample_weight) to calculate a certain type of score. Being a
    consumer doesn’t mean that the object always receives a certain
    metadata, rather it means it can use it if it is provided.

metadata[#](#term-metadata "Link to this term")
:   Data which is related to the given [X](#term-X) and [y](#term-y) data, but
    is not directly a part of the data, e.g. [sample\_weight](#term-sample_weight) or
    [groups](#term-groups), and is passed along to different objects and methods,
    e.g. to a [scorer](#term-scorer) or a [CV splitter](#term-CV-splitter).

router[#](#term-router "Link to this term")
:   An object which routes metadata to [consumers](#term-consumer). This
    object is usually a [meta-estimator](#term-meta-estimator), e.g.
    [`Pipeline`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "(in scikit-learn v1.10)") or [`GridSearchCV`](https://scikit-learn.org/dev/modules/generated/sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV "(in scikit-learn v1.10)").
    Some routers can also be a consumer. This happens for example when a
    meta-estimator uses the given [groups](#term-groups), and it also passes it
    along to some of its sub-objects, such as a [CV splitter](#term-CV-splitter).

Please refer to [Metadata Routing User Guide](https://scikit-learn.org/dev/metadata_routing.html#metadata-routing "(in scikit-learn v1.10)") for more
information.

## Target Types[#](#target-types "Link to this heading")

binary[#](#term-binary "Link to this term")
:   A classification problem consisting of two classes. A binary target
    may be represented as for a [multiclass](#term-multiclass) problem but with only two
    labels. A binary decision function is represented as a 1d array.

    Semantically, one class is often considered the “positive” class.
    Unless otherwise specified (e.g. using [pos\_label](#term-pos_label) in
    [evaluation metrics](#term-evaluation-metrics)), we consider the class label with the
    greater value (numerically or lexicographically) as the positive class:
    of labels [0, 1], 1 is the positive class; of [1, 2], 2 is the positive
    class; of [‘no’, ‘yes’], ‘yes’ is the positive class; of [‘no’, ‘YES’],
    ‘no’ is the positive class. This affects the output of
    [decision\_function](#term-decision_function), for instance.

    Note that a dataset sampled from a multiclass `y` or a continuous
    `y` may appear to be binary.

    [`type_of_target`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.multiclass.type_of_target.html#sklearn.utils.multiclass.type_of_target "(in scikit-learn v1.10)") will return ‘binary’ for
    binary input, or a similar array with only a single class present.

continuous[#](#term-continuous "Link to this term")
:   A regression problem where each sample’s target is a finite floating
    point number represented as a 1-dimensional array of floats (or
    sometimes ints).

    [`type_of_target`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.multiclass.type_of_target.html#sklearn.utils.multiclass.type_of_target "(in scikit-learn v1.10)") will return ‘continuous’ for
    continuous input, but if the data is all integers, it will be
    identified as ‘multiclass’.

continuous multioutput[#](#term-continuous-multioutput "Link to this term")

continuous multi-output[#](#term-continuous-multi-output "Link to this term")

multioutput continuous[#](#term-multioutput-continuous "Link to this term")

multi-output continuous[#](#term-multi-output-continuous "Link to this term")
:   A regression problem where each sample’s target consists of `n_outputs`
    [outputs](#term-outputs), each one a finite floating point number, for a
    fixed int `n_outputs > 1` in a particular dataset.

    Continuous multioutput targets are represented as multiple
    [continuous](#term-continuous) targets, horizontally stacked into an array
    of shape `(n_samples, n_outputs)`.

    [`type_of_target`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.multiclass.type_of_target.html#sklearn.utils.multiclass.type_of_target "(in scikit-learn v1.10)") will return
    ‘continuous-multioutput’ for continuous multioutput input, but if the
    data is all integers, it will be identified as
    ‘multiclass-multioutput’.

multiclass[#](#term-multiclass "Link to this term")

multi-class[#](#term-multi-class "Link to this term")
:   A classification problem consisting of more than two classes. A
    multiclass target may be represented as a 1-dimensional array of
    strings or integers. A 2d column vector of integers (i.e. a
    single output in [multioutput](#term-multioutput) terms) is also accepted.

    We do not officially support other orderable, hashable objects as class
    labels, even if estimators may happen to work when given classification
    targets of such type.

    For semi-supervised classification, [unlabeled](#term-unlabeled) samples should
    have the special label -1 in `y`.

    Within scikit-learn, all estimators supporting binary classification
    also support multiclass classification, using One-vs-Rest by default.

    A [`preprocessing.LabelEncoder`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.LabelEncoder.html#sklearn.preprocessing.LabelEncoder "(in scikit-learn v1.10)") helps to canonicalize multiclass
    targets as integers.

    [`type_of_target`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.multiclass.type_of_target.html#sklearn.utils.multiclass.type_of_target "(in scikit-learn v1.10)") will return ‘multiclass’ for
    multiclass input. The user may also want to handle ‘binary’ input
    identically to ‘multiclass’.

multiclass multioutput[#](#term-multiclass-multioutput "Link to this term")

multi-class multi-output[#](#term-multi-class-multi-output "Link to this term")

multioutput multiclass[#](#term-multioutput-multiclass "Link to this term")

multi-output multi-class[#](#term-multi-output-multi-class "Link to this term")
:   A classification problem where each sample’s target consists of
    `n_outputs` [outputs](#term-outputs), each a class label, for a fixed int
    `n_outputs > 1` in a particular dataset. Each output has a
    fixed set of available classes, and each sample is labeled with a
    class for each output. An output may be binary or multiclass, and in
    the case where all outputs are binary, the target is
    [multilabel](#term-multilabel).

    Multiclass multioutput targets are represented as multiple
    [multiclass](#term-multiclass) targets, horizontally stacked into an array
    of shape `(n_samples, n_outputs)`.

    XXX: For simplicity, we may not always support string class labels
    for multiclass multioutput, and integer class labels should be used.

    [`multioutput`](https://scikit-learn.org/dev/api/sklearn.multioutput.html#module-sklearn.multioutput "(in scikit-learn v1.10)") provides estimators which estimate multi-output
    problems using multiple single-output estimators. This may not fully
    account for dependencies among the different outputs, which methods
    natively handling the multioutput case (e.g. decision trees, nearest
    neighbors, neural networks) may do better.

    [`type_of_target`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.multiclass.type_of_target.html#sklearn.utils.multiclass.type_of_target "(in scikit-learn v1.10)") will return
    ‘multiclass-multioutput’ for multiclass multioutput input.

multilabel[#](#term-multilabel "Link to this term")

multi-label[#](#term-multi-label "Link to this term")
:   A [multiclass multioutput](#term-multiclass-multioutput) target where each output is
    [binary](#term-binary). This may be represented as a 2d (dense) array or
    sparse matrix of integers, such that each column is a separate binary
    target, where positive labels are indicated with 1 and negative labels
    are usually -1 or 0. Sparse multilabel targets are not supported
    everywhere that dense multilabel targets are supported.

    Semantically, a multilabel target can be thought of as a set of labels
    for each sample. While not used internally,
    [`preprocessing.MultiLabelBinarizer`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.MultiLabelBinarizer.html#sklearn.preprocessing.MultiLabelBinarizer "(in scikit-learn v1.10)") is provided as a utility to
    convert from a list of sets representation to a 2d array or sparse
    matrix. One-hot encoding a multiclass target with
    [`preprocessing.LabelBinarizer`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.LabelBinarizer.html#sklearn.preprocessing.LabelBinarizer "(in scikit-learn v1.10)") turns it into a multilabel
    problem.

    [`type_of_target`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.multiclass.type_of_target.html#sklearn.utils.multiclass.type_of_target "(in scikit-learn v1.10)") will return
    ‘multilabel-indicator’ for multilabel input, whether sparse or dense.

multioutput[#](#term-multioutput "Link to this term")

multi-output[#](#term-multi-output "Link to this term")
:   A target where each sample has multiple classification/regression
    labels. See [multiclass multioutput](#term-multiclass-multioutput) and [continuous
    multioutput](#term-continuous-multioutput). We do not currently support modelling mixed
    classification and regression targets.

## Methods[#](#methods "Link to this heading")

`decision_function`[#](#term-decision_function "Link to this term")
:   In a fitted [classifier](#term-classifier) or [outlier detector](#term-outlier-detector), predicts a
    “soft” score for each sample in relation to each class, rather than the
    “hard” categorical prediction produced by [predict](#term-predict). Its input
    is usually only some observed data, [X](#term-X).

    If the estimator was not already [fitted](#term-fitted), calling this method
    should raise a [`exceptions.NotFittedError`](https://scikit-learn.org/dev/modules/generated/sklearn.exceptions.NotFittedError.html#sklearn.exceptions.NotFittedError "(in scikit-learn v1.10)").

    Output conventions:

    binary classification
    :   A 1-dimensional array, where values strictly greater than zero
        indicate the positive class (i.e. the last class in
        [classes\_](#term-classes_)).

    multiclass classification
    :   A 2-dimensional array, where the row-wise arg-maximum is the
        predicted class. Columns are ordered according to
        [classes\_](#term-classes_).

    multilabel classification
    :   Scikit-learn is inconsistent in its representation of [multilabel](#term-multilabel)
        decision functions. It may be represented one of two ways:

        * List of 2d arrays, each array of shape: (`n_samples`, 2), like in
          multiclass multioutput. List is of length `n_labels`.
        * Single 2d array of shape (`n_samples`, `n_labels`), with each
          ‘column’ in the array corresponding to the individual binary
          classification decisions. This is identical to the
          multiclass classification format, though its semantics differ: it
          should be interpreted, like in the binary case, by thresholding at
          0.

    multioutput classification
    :   A list of 2d arrays, corresponding to each multiclass decision
        function.

    outlier detection
    :   A 1-dimensional array, where a value greater than or equal to zero
        indicates an inlier.

`fit`[#](#term-fit "Link to this term")
:   The `fit` method is provided on every estimator. It usually takes some
    [samples](#term-samples) `X`, [targets](#term-targets) `y` if the model is supervised,
    and potentially other [sample properties](#term-sample-properties) such as
    [sample\_weight](#term-sample_weight). It should:

    * clear any prior [attributes](#term-attributes) stored on the estimator, unless
      [warm\_start](#term-warm_start) is used;
    * validate and interpret any [parameters](#term-parameters), ideally raising an
      error if invalid;
    * validate the input data;
    * estimate and store model attributes from the estimated parameters and
      provided data; and
    * return the now [fitted](#term-fitted) estimator to facilitate method
      chaining.

    [Target Types](#glossary-target-types) describes possible formats for `y`.

`fit_predict`[#](#term-fit_predict "Link to this term")
:   Used especially for [unsupervised](#term-unsupervised), [transductive](#term-transductive)
    estimators, this fits the model and returns the predictions (similar to
    [predict](#term-predict)) on the training data. In clusterers, these predictions
    are also stored in the [labels\_](#term-labels_) attribute, and the output of
    `.fit_predict(X)` is usually equivalent to `.fit(X).predict(X)`.
    The parameters to `fit_predict` are the same as those to `fit`.

`fit_transform`[#](#term-fit_transform "Link to this term")
:   A method on [transformers](#term-transformers) which fits the estimator and returns
    the transformed training data. It takes parameters as in [fit](#term-fit)
    and its output should have the same shape as calling `.fit(X,
    ...).transform(X)`. There are nonetheless rare cases where
    `.fit_transform(X, ...)` and `.fit(X, ...).transform(X)` do not
    return the same value, wherein training data needs to be handled
    differently (due to model blending in stacked ensembles, for instance;
    such cases should be clearly documented).
    [Transductive](#term-transductive) transformers may also provide
    `fit_transform` but not [transform](#term-transform).

    One reason to implement `fit_transform` is that performing `fit`
    and `transform` separately would be less efficient than together.
    [`base.TransformerMixin`](https://scikit-learn.org/dev/modules/generated/sklearn.base.TransformerMixin.html#sklearn.base.TransformerMixin "(in scikit-learn v1.10)") provides a default implementation,
    providing a consistent interface across transformers where
    `fit_transform` is or is not specialized.

    In [inductive](#term-inductive) learning – where the goal is to learn a
    generalized model that can be applied to new data – users should be
    careful not to apply `fit_transform` to the entirety of a dataset
    (i.e. training and test data together) before further modelling, as
    this results in [data leakage](#term-data-leakage).

`get_feature_names_out`[#](#term-get_feature_names_out "Link to this term")
:   Primarily for [feature extractors](#term-feature-extractors), but also used for other
    transformers to provide string names for each column in the output of
    the estimator’s [transform](#term-transform) method. It outputs an array of
    strings and may take an array-like of strings as input, corresponding
    to the names of input columns from which output column names can
    be generated. If `input_features` is not passed in, then the
    `feature_names_in_` attribute will be used. If the
    `feature_names_in_` attribute is not defined, then the
    input names are named `[x0, x1, ..., x(n_features_in_ - 1)]`.

`get_n_splits`[#](#term-get_n_splits "Link to this term")
:   On a [CV splitter](#term-CV-splitter) (not an estimator), returns the number of
    elements one would get if iterating through the return value of
    [split](#term-split) given the same parameters. Takes the same parameters as
    split.

`get_params`[#](#term-get_params "Link to this term")
:   Gets all [parameters](#term-parameters), and their values, that can be set using
    [set\_params](#term-set_params). A parameter `deep` can be used, when set to
    False to only return those parameters not including `__`, i.e. not
    due to indirection via contained estimators.

    Most estimators adopt the definition from [`base.BaseEstimator`](https://scikit-learn.org/dev/modules/generated/sklearn.base.BaseEstimator.html#sklearn.base.BaseEstimator "(in scikit-learn v1.10)"),
    which simply adopts the parameters defined for `__init__`.
    [`pipeline.Pipeline`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "(in scikit-learn v1.10)"), among others, reimplements `get_params`
    to declare the estimators named in its `steps` parameters as
    themselves being parameters.

`partial_fit`[#](#term-partial_fit "Link to this term")
:   Facilitates fitting an estimator in an online fashion. Unlike `fit`,
    repeatedly calling `partial_fit` does not clear the model, but
    updates it with the data provided. The portion of data
    provided to `partial_fit` may be called a mini-batch.
    Each mini-batch must be of consistent shape, etc. In iterative
    estimators, `partial_fit` often only performs a single iteration.

    `partial_fit` may also be used for [out-of-core](#term-out-of-core) learning,
    although usually limited to the case where learning can be performed
    online, i.e. the model is usable after each `partial_fit` and there
    is no separate processing needed to finalize the model.
    [`cluster.Birch`](https://scikit-learn.org/dev/modules/generated/sklearn.cluster.Birch.html#sklearn.cluster.Birch "(in scikit-learn v1.10)") introduces the convention that calling
    `partial_fit(X)` will produce a model that is not finalized, but the
    model can be finalized by calling `partial_fit()` i.e. without
    passing a further mini-batch.

    Generally, estimator parameters should not be modified between calls
    to `partial_fit`, although `partial_fit` should validate them
    as well as the new mini-batch of data. In contrast, `warm_start`
    is used to repeatedly fit the same estimator with the same data
    but varying parameters.

    Like `fit`, `partial_fit` should return the estimator object.

    To clear the model, a new estimator should be constructed, for instance
    with [`base.clone`](https://scikit-learn.org/dev/modules/generated/sklearn.base.clone.html#sklearn.base.clone "(in scikit-learn v1.10)").

    NOTE: Using `partial_fit` after `fit` results in undefined behavior.

`predict`[#](#term-predict "Link to this term")
:   Makes a prediction for each sample, usually only taking [X](#term-X) as
    input (but see under regressor output conventions below). In a
    [classifier](#term-classifier) or [regressor](#term-regressor), this prediction is in the same
    target space used in fitting (e.g. one of {‘red’, ‘amber’, ‘green’} if
    the `y` in fitting consisted of these strings). Despite this, even
    when `y` passed to [fit](#term-fit) is a list or other array-like, the
    output of `predict` should always be an array or sparse matrix. In a
    [clusterer](#term-clusterer) or [outlier detector](#term-outlier-detector) the prediction is an
    integer.

    If the estimator was not already [fitted](#term-fitted), calling this method
    should raise a [`exceptions.NotFittedError`](https://scikit-learn.org/dev/modules/generated/sklearn.exceptions.NotFittedError.html#sklearn.exceptions.NotFittedError "(in scikit-learn v1.10)").

    Output conventions:

    classifier
    :   An array of shape `(n_samples,)` `(n_samples, n_outputs)`.
        [Multilabel](#term-multilabel) data may be represented as a sparse
        matrix if a sparse matrix was used in fitting. Each element should
        be one of the values in the classifier’s [classes\_](#term-classes_)
        attribute.

    clusterer
    :   An array of shape `(n_samples,)` where each value is from 0 to
        `n_clusters - 1` if the corresponding sample is clustered,
        and -1 if the sample is not clustered, as in
        [`cluster.dbscan`](https://scikit-learn.org/dev/modules/generated/dbscan-function.html#sklearn.cluster.dbscan "(in scikit-learn v1.10)").

    outlier detector
    :   An array of shape `(n_samples,)` where each value is -1 for an
        outlier and 1 otherwise.

    regressor
    :   A numeric array of shape `(n_samples,)`, usually float64.
        Some regressors have extra options in their `predict` method,
        allowing them to return standard deviation (`return_std=True`)
        or covariance (`return_cov=True`) relative to the predicted
        value. In this case, the return value is a tuple of arrays
        corresponding to (prediction mean, std, cov) as required.

`predict_log_proba`[#](#term-predict_log_proba "Link to this term")
:   The natural logarithm of the output of [predict\_proba](#term-predict_proba), provided
    to facilitate numerical stability.

`predict_proba`[#](#term-predict_proba "Link to this term")
:   A method in [classifiers](#term-classifiers) and [clusterers](#term-clusterers) that can
    return probability estimates for each class/cluster. Its input is
    usually only some observed data, [X](#term-X).

    If the estimator was not already [fitted](#term-fitted), calling this method
    should raise a [`exceptions.NotFittedError`](https://scikit-learn.org/dev/modules/generated/sklearn.exceptions.NotFittedError.html#sklearn.exceptions.NotFittedError "(in scikit-learn v1.10)").

    Output conventions are like those for [decision\_function](#term-decision_function) except
    in the [binary](#term-binary) classification case, where one column is output
    for each class (while `decision_function` outputs a 1d array). For
    binary and multiclass predictions, each row should add to 1.

    Like other methods, `predict_proba` should only be present when the
    estimator can make probabilistic predictions (see [duck typing](#term-duck-typing)).
    This means that the presence of the method may depend on estimator
    parameters (e.g. in [`linear_model.SGDClassifier`](https://scikit-learn.org/dev/modules/generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier "(in scikit-learn v1.10)")) or training
    data (e.g. in [`model_selection.GridSearchCV`](https://scikit-learn.org/dev/modules/generated/sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV "(in scikit-learn v1.10)")) and may only
    appear after fitting.

`score`[#](#term-score "Link to this term")
:   A method on an estimator, usually a [predictor](#term-predictor), which evaluates
    its predictions on a given dataset, and returns a single numerical
    score. A greater return value should indicate better predictions;
    accuracy is used for classifiers and R^2 for regressors by default.

    If the estimator was not already [fitted](#term-fitted), calling this method
    should raise a [`exceptions.NotFittedError`](https://scikit-learn.org/dev/modules/generated/sklearn.exceptions.NotFittedError.html#sklearn.exceptions.NotFittedError "(in scikit-learn v1.10)").

    Some estimators implement a custom, estimator-specific score function,
    often the likelihood of the data under the model.

`score_samples`[#](#term-score_samples "Link to this term")
:   A method that returns a score for each given sample. The exact
    definition of **score** varies from one class to another. In the case of
    density estimation, it can be the log density model on the data, and in
    the case of outlier detection, it can be the opposite of the outlier
    factor of the data.

    If the estimator was not already [fitted](#term-fitted), calling this method
    should raise a [`exceptions.NotFittedError`](https://scikit-learn.org/dev/modules/generated/sklearn.exceptions.NotFittedError.html#sklearn.exceptions.NotFittedError "(in scikit-learn v1.10)").

`set_params`[#](#term-set_params "Link to this term")
:   Available in any estimator, takes keyword arguments corresponding to
    keys in [get\_params](#term-get_params). Each is provided a new value to assign
    such that calling `get_params` after `set_params` will reflect the
    changed [parameters](#term-parameters). Most estimators use the implementation in
    [`base.BaseEstimator`](https://scikit-learn.org/dev/modules/generated/sklearn.base.BaseEstimator.html#sklearn.base.BaseEstimator "(in scikit-learn v1.10)"), which handles nested parameters and
    otherwise sets the parameter as an attribute on the estimator.
    The method is overridden in [`pipeline.Pipeline`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "(in scikit-learn v1.10)") and related
    estimators.

`split`[#](#term-split "Link to this term")
:   On a [CV splitter](#term-CV-splitter) (not an estimator), this method accepts
    parameters ([X](#term-X), [y](#term-y), [groups](#term-groups)), where all may be
    optional, and returns an iterator over `(train_idx, test_idx)`
    pairs. Each of {train,test}\_idx is a 1d integer array, with values
    from 0 from `X.shape[0] - 1` of any length, such that no values
    appear in both some `train_idx` and its corresponding `test_idx`.

`transform`[#](#term-transform "Link to this term")
:   In a [transformer](#term-transformer), transforms the input, usually only [X](#term-X),
    into some transformed space (conventionally notated as [Xt](#term-Xt)).
    Output is an array or sparse matrix of length [n\_samples](#term-n_samples) and
    with the number of columns fixed after [fitting](#term-fitting).

    If the estimator was not already [fitted](#term-fitted), calling this method
    should raise a [`exceptions.NotFittedError`](https://scikit-learn.org/dev/modules/generated/sklearn.exceptions.NotFittedError.html#sklearn.exceptions.NotFittedError "(in scikit-learn v1.10)").

## Parameters[#](#parameters "Link to this heading")

These common parameter names, specifically used in estimator construction
(see concept [parameter](#term-parameter)), sometimes also appear as parameters of
functions or non-estimator constructors.

`class_weight`[#](#term-class_weight "Link to this term")
:   Used to specify sample weights when fitting classifiers as a function
    of the [target](#term-target) class. Where [sample\_weight](#term-sample_weight) is also
    supported and given, it is multiplied by the `class_weight`
    contribution. Similarly, where `class_weight` is used in a
    [multioutput](#term-multioutput) (including [multilabel](#term-multilabel)) tasks, the weights
    are multiplied across outputs (i.e. columns of `y`).

    By default, all samples have equal weight such that classes are
    effectively weighted by their prevalence in the training data.
    This could be achieved explicitly with `class_weight={label1: 1,
    label2: 1, ...}` for all class labels.

    More generally, `class_weight` is specified as a dict mapping class
    labels to weights (`{class_label: weight}`), such that each sample
    of the named class is given that weight.

    `class_weight='balanced'` can be used to give all classes
    equal weight by giving each sample a weight inversely related
    to its class’s prevalence in the training data:
    `n_samples / (n_classes * np.bincount(y))`. Class weights will be
    used differently depending on the algorithm: for linear models (such
    as linear SVM or logistic regression), the class weights will alter the
    loss function by weighting the loss of each sample by its class weight.
    For tree-based algorithms, the class weights will be used for
    reweighting the splitting criterion.
    ****Note**** however that this rebalancing does not take the weight of
    samples in each class into account.

    For multioutput classification, a list of dicts is used to specify
    weights for each output. For example, for four-class multilabel
    classification weights should be `[{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1,
    1: 1}, {0: 1, 1: 1}]` instead of `[{1:1}, {2:5}, {3:1}, {4:1}]`.

    The `class_weight` parameter is validated and interpreted with
    [`utils.class_weight.compute_class_weight`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.class_weight.compute_class_weight.html#sklearn.utils.class_weight.compute_class_weight "(in scikit-learn v1.10)").

`cv`[#](#term-cv "Link to this term")
:   Determines a cross validation splitting strategy, as used in
    cross-validation based routines. `cv` is also available in estimators
    such as [`multioutput.ClassifierChain`](https://scikit-learn.org/dev/modules/generated/sklearn.multioutput.ClassifierChain.html#sklearn.multioutput.ClassifierChain "(in scikit-learn v1.10)") or
    [`calibration.CalibratedClassifierCV`](https://scikit-learn.org/dev/modules/generated/sklearn.calibration.CalibratedClassifierCV.html#sklearn.calibration.CalibratedClassifierCV "(in scikit-learn v1.10)") which use the predictions
    of one estimator as training data for another, to not overfit the
    training supervision.

    Possible inputs for `cv` are usually:

    * An integer, specifying the number of folds in K-fold cross
      validation. K-fold will be stratified over classes if the estimator
      is a classifier (determined by [`base.is_classifier`](https://scikit-learn.org/dev/modules/generated/sklearn.base.is_classifier.html#sklearn.base.is_classifier "(in scikit-learn v1.10)")) and the
      [targets](#term-targets) may represent a binary or multiclass (but not
      multioutput) classification problem (determined by
      [`utils.multiclass.type_of_target`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.multiclass.type_of_target.html#sklearn.utils.multiclass.type_of_target "(in scikit-learn v1.10)")).
    * A [cross-validation splitter](#term-cross-validation-splitter) instance. Refer to the
      [User Guide](https://scikit-learn.org/dev/modules/cross_validation.html#cross-validation "(in scikit-learn v1.10)") for splitters available
      within Scikit-learn.
    * An iterable yielding train/test splits.

    With some exceptions (especially where not using cross validation at
    all is an option), the default is 5-fold.

    `cv` values are validated and interpreted with
    [`model_selection.check_cv`](https://scikit-learn.org/dev/modules/generated/sklearn.model_selection.check_cv.html#sklearn.model_selection.check_cv "(in scikit-learn v1.10)").

`kernel`[#](#term-kernel "Link to this term")
:   Specifies the kernel function to be used by Kernel Method algorithms.
    For example, the estimators [`svm.SVC`](https://scikit-learn.org/dev/modules/generated/sklearn.svm.SVC.html#sklearn.svm.SVC "(in scikit-learn v1.10)") and
    [`gaussian_process.GaussianProcessClassifier`](https://scikit-learn.org/dev/modules/generated/sklearn.gaussian_process.GaussianProcessClassifier.html#sklearn.gaussian_process.GaussianProcessClassifier "(in scikit-learn v1.10)") both have a
    `kernel` parameter that takes the name of the kernel to use as string
    or a callable kernel function used to compute the kernel matrix. For
    more reference, see the [Kernel Approximation](https://scikit-learn.org/dev/modules/kernel_approximation.html#kernel-approximation "(in scikit-learn v1.10)") and the
    [Gaussian Processes](https://scikit-learn.org/dev/modules/gaussian_process.html#gaussian-process "(in scikit-learn v1.10)") user guides.

`max_iter`[#](#term-max_iter "Link to this term")
:   For estimators involving iterative optimization, this determines the
    maximum number of iterations to be performed in [fit](#term-fit). If
    `max_iter` iterations are run without convergence, a
    [`exceptions.ConvergenceWarning`](https://scikit-learn.org/dev/modules/generated/sklearn.exceptions.ConvergenceWarning.html#sklearn.exceptions.ConvergenceWarning "(in scikit-learn v1.10)") should be raised. Note that the
    interpretation of “a single iteration” is inconsistent across
    estimators: some, but not all, use it to mean a single epoch (i.e. a
    pass over every sample in the data).

    FIXME perhaps we should have some common tests about the relationship
    between ConvergenceWarning and max\_iter.

`memory`[#](#term-memory "Link to this term")
:   Some estimators make use of [`joblib.Memory`](https://joblib.readthedocs.io/en/latest/generated/joblib.Memory.html#joblib.Memory "(in joblib v1.6.dev0)") to
    store partial solutions during fitting. Thus when `fit` is called
    again, those partial solutions have been memoized and can be reused.

    A `memory` parameter can be specified as a string with a path to a
    directory, or a [`joblib.Memory`](https://joblib.readthedocs.io/en/latest/generated/joblib.Memory.html#joblib.Memory "(in joblib v1.6.dev0)") instance (or an object with a
    similar interface, i.e. a `cache` method) can be used.

    `memory` values are validated and interpreted with
    [`utils.validation.check_memory`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.validation.check_memory.html#sklearn.utils.validation.check_memory "(in scikit-learn v1.10)").

`metric`[#](#term-metric "Link to this term")
:   As a parameter, this is the scheme for determining the distance between
    two data points. See [`metrics.pairwise_distances`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "(in scikit-learn v1.10)"). In practice,
    for some algorithms, an improper distance metric (one that does not
    obey the triangle inequality, such as Cosine Distance) may be used.

    XXX: hierarchical clustering uses `affinity` with this meaning.

    We also use **metric** to refer to [evaluation metrics](#term-evaluation-metrics), but avoid
    using this sense as a parameter name.

`n_components`[#](#term-n_components "Link to this term")
:   The number of features which a [transformer](#term-transformer) should transform the
    input into. See [components\_](#term-components_) for the special case of affine
    projection.

`n_iter_no_change`[#](#term-n_iter_no_change "Link to this term")
:   Number of iterations with no improvement to wait before stopping the
    iterative procedure. This is also known as a **patience** parameter. It
    is typically used with [early stopping](#term-early-stopping) to avoid stopping too
    early.

`n_jobs`[#](#term-n_jobs "Link to this term")
:   This parameter is used to specify how many concurrent processes or
    threads should be used for routines that are parallelized with
    [joblib](#term-joblib).

    `n_jobs` is an integer, specifying the maximum number of concurrently
    running workers. If 1 is given, no joblib parallelism is used at all,
    which is useful for debugging. If set to -1, all CPUs are used. For
    `n_jobs` below -1, (n\_cpus + 1 + n\_jobs) are used. For example with
    `n_jobs=-2`, all CPUs but one are used.

    `n_jobs` is `None` by default, which means **unset**; it will
    generally be interpreted as `n_jobs=1`, unless the current
    [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.6.dev0)") backend context specifies otherwise.

    Note that even if `n_jobs=1`, low-level parallelism (via Numpy and OpenMP)
    might be used in some configuration.

    For more details on the use of `joblib` and its interactions with
    scikit-learn, please refer to our [parallelism notes](https://scikit-learn.org/dev/computing/parallelism.html#parallelism "(in scikit-learn v1.10)").

`pos_label`[#](#term-pos_label "Link to this term")
:   Value with which positive labels must be encoded in binary
    classification problems in which the positive class is not assumed.
    This value is typically required to compute asymmetric evaluation
    metrics such as precision and recall.

`random_state`[#](#term-random_state "Link to this term")
:   Whenever randomization is part of a Scikit-learn algorithm, a
    `random_state` parameter may be provided to control the random number
    generator used. Note that the mere presence of `random_state` doesn’t
    mean that randomization is always used, as it may be dependent on
    another parameter, e.g. `shuffle`, being set.

    The passed value will have an effect on the reproducibility of the
    results returned by the function ([fit](#term-fit), [split](#term-split), or any
    other function like [`k_means`](https://scikit-learn.org/dev/modules/generated/sklearn.cluster.k_means.html#sklearn.cluster.k_means "(in scikit-learn v1.10)")). `random_state`’s
    value may be:

    None (default)
    :   Use the global random state instance from [`numpy.random`](https://numpy.org/devdocs/reference/random/index.html#module-numpy.random "(in NumPy v2.6.dev0)").
        Calling the function multiple times will reuse
        the same instance, and will produce different results.

    An integer
    :   Use a new random number generator seeded by the given integer.
        Using an int will produce the same results across different calls.
        However, it may be
        worthwhile checking that your results are stable across a
        number of different distinct random seeds. Popular integer
        random seeds are 0 and [42](https://en.wikipedia.org/wiki/Answer_to_the_Ultimate_Question_of_Life%2C_the_Universe%2C_and_Everything).
        Integer values must be in the range `[0, 2**32 - 1]`.

    A [`numpy.random.RandomState`](https://numpy.org/devdocs/reference/random/legacy.html#numpy.random.RandomState "(in NumPy v2.6.dev0)") instance
    :   Use the provided random state, only affecting other users
        of that same random state instance. Calling the function
        multiple times will reuse the same instance, and
        will produce different results.

    [`utils.check_random_state`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.check_random_state.html#sklearn.utils.check_random_state "(in scikit-learn v1.10)") is used internally to validate the
    input `random_state` and return a [`RandomState`](https://numpy.org/devdocs/reference/random/legacy.html#numpy.random.RandomState "(in NumPy v2.6.dev0)")
    instance.

    For more details on how to control the randomness of scikit-learn
    objects and avoid common pitfalls, you may refer to [Controlling randomness](https://scikit-learn.org/dev/common_pitfalls.html#randomness "(in scikit-learn v1.10)").

`scoring`[#](#term-scoring "Link to this term")
:   Specifies the score function to be maximized (usually by [cross
    validation](https://scikit-learn.org/dev/modules/cross_validation.html#cross-validation "(in scikit-learn v1.10)")), or – in some cases – multiple score
    functions to be reported. The score function can be a string accepted
    by [`metrics.get_scorer`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.get_scorer.html#sklearn.metrics.get_scorer "(in scikit-learn v1.10)") or a callable [scorer](#term-scorer), not to be
    confused with an [evaluation metric](#term-evaluation-metric), as the latter have a more
    diverse API. `scoring` may also be set to None, in which case the
    estimator’s [score](#term-score) method is used. See [The scoring parameter: defining model evaluation rules](https://scikit-learn.org/dev/modules/model_evaluation.html#scoring-parameter "(in scikit-learn v1.10)")
    in the User Guide.

    Where multiple metrics can be evaluated, `scoring` may be given
    either as a list of unique strings, a dictionary with names as keys and
    callables as values or a callable that returns a dictionary. Note that
    this does **not** specify which score function is to be maximized, and
    another parameter such as `refit` maybe used for this purpose.

    The `scoring` parameter is validated and interpreted using
    [`metrics.check_scoring`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.check_scoring.html#sklearn.metrics.check_scoring "(in scikit-learn v1.10)").

`verbose`[#](#term-verbose "Link to this term")
:   Logging is not handled very consistently in Scikit-learn at present,
    but when it is provided as an option, the `verbose` parameter is
    usually available to choose no logging (set to False). Any True value
    should enable some logging, but larger integers (e.g. above 10) may be
    needed for full verbosity. Verbose logs are usually printed to
    Standard Output.
    Estimators should not produce any output on Standard Output with the
    default `verbose` setting.

`warm_start`[#](#term-warm_start "Link to this term")
:   When fitting an estimator repeatedly on the same dataset, but for
    multiple parameter values (such as to find the value maximizing
    performance as in [grid search](https://scikit-learn.org/dev/modules/grid_search.html#grid-search "(in scikit-learn v1.10)")), it may be possible
    to reuse aspects of the model learned from the previous parameter value,
    saving time. When `warm_start` is true, the existing [fitted](#term-fitted)
    model [attributes](#term-attributes) are used to initialize the new model
    in a subsequent call to [fit](#term-fit).

    Note that this is only applicable for some models and some
    parameters, and even some orders of parameter values. In general, there
    is an interaction between `warm_start` and the parameter controlling
    the number of iterations of the estimator.

    For estimators imported from [`ensemble`](https://scikit-learn.org/dev/api/sklearn.ensemble.html#module-sklearn.ensemble "(in scikit-learn v1.10)"),
    `warm_start` will interact with `n_estimators` or `max_iter`.
    For these models, the number of iterations, reported via
    `len(estimators_)` or `n_iter_`, corresponds the total number of
    estimators/iterations learnt since the initialization of the model.
    Thus, if a model was already initialized with `N` estimators, and `fit`
    is called with `n_estimators` or `max_iter` set to `M`, the model
    will train `M - N` new estimators.

    Other models, usually using gradient-based solvers, have a different
    behavior. They all expose a `max_iter` parameter. The reported
    `n_iter_` corresponds to the number of iteration done during the last
    call to `fit` and will be at most `max_iter`. Thus, we do not
    consider the state of the estimator since the initialization.

    [partial\_fit](#term-partial_fit) also retains the model between calls, but differs:
    with `warm_start` the parameters change and the data is
    (more-or-less) constant across calls to `fit`; with `partial_fit`,
    the mini-batch of data changes and model parameters stay fixed.

    There are cases where you want to use `warm_start` to fit on
    different, but closely related data. For example, one may initially fit
    to a subset of the data, then fine-tune the parameter search on the
    full dataset. For classification, all data in a sequence of
    `warm_start` calls to `fit` must include samples from each class.

## Attributes[#](#attributes "Link to this heading")

See concept [attribute](#term-attribute).

`classes_`[#](#term-classes_ "Link to this term")
:   A list of class labels known to the [classifier](#term-classifier), mapping each
    label to a numerical index used in the model representation our output.
    For instance, the array output from [predict\_proba](#term-predict_proba) has columns
    aligned with `classes_`. For [multi-output](#term-multi-output) classifiers,
    `classes_` should be a list of lists, with one class listing for
    each output. For each output, the classes should be sorted
    (numerically, or lexicographically for strings).

    `classes_` and the mapping to indices is often managed with
    [`preprocessing.LabelEncoder`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.LabelEncoder.html#sklearn.preprocessing.LabelEncoder "(in scikit-learn v1.10)").

`components_`[#](#term-components_ "Link to this term")
:   An affine transformation matrix of shape `(n_components, n_features)`
    used in many linear [transformers](#term-transformers) where [n\_components](#term-n_components) is
    the number of output features and [n\_features](#term-n_features) is the number of
    input features.

    See also [components\_](#term-components_) which is a similar attribute for linear
    predictors.

`coef_`[#](#term-coef_ "Link to this term")
:   The weight/coefficient matrix of a generalized linear model
    [predictor](#term-predictor), of shape `(n_features,)` for binary classification
    and single-output regression, `(n_classes, n_features)` for
    multiclass classification and `(n_targets, n_features)` for
    multi-output regression. Note this does not include the intercept
    (or bias) term, which is stored in `intercept_`.

    When available, `feature_importances_` is not usually provided as
    well, but can be calculated as the norm of each feature’s entry in
    `coef_`.

    See also [components\_](#term-components_) which is a similar attribute for linear
    transformers.

`embedding_`[#](#term-embedding_ "Link to this term")
:   An embedding of the training data in [manifold learning](https://scikit-learn.org/dev/modules/manifold.html#manifold "(in scikit-learn v1.10)") estimators, with shape `(n_samples, n_components)`,
    identical to the output of [fit\_transform](#term-fit_transform). See also
    [labels\_](#term-labels_).

`n_iter_`[#](#term-n_iter_ "Link to this term")
:   The number of iterations actually performed when fitting an iterative
    estimator that may stop upon convergence. See also [max\_iter](#term-max_iter).

`feature_importances_`[#](#term-feature_importances_ "Link to this term")
:   A vector of shape `(n_features,)` available in some
    [predictors](#term-predictors) to provide a relative measure of the importance of
    each feature in the predictions of the model.

`labels_`[#](#term-labels_ "Link to this term")
:   A vector containing a cluster label for each sample of the training
    data in [clusterers](#term-clusterers), identical to the output of
    [fit\_predict](#term-fit_predict). See also [embedding\_](#term-embedding_).

## Data and sample properties[#](#data-and-sample-properties "Link to this heading")

See concept [sample property](#term-sample-property).

`groups`[#](#term-groups "Link to this term")
:   Used in cross-validation routines to identify samples that are correlated.
    Each value is an identifier such that, in a supporting
    [CV splitter](#term-CV-splitter), samples from some `groups` value may not
    appear in both a training set and its corresponding test set.
    See [Cross-validation iterators for grouped data](https://scikit-learn.org/dev/modules/cross_validation.html#group-cv "(in scikit-learn v1.10)").

`sample_weight`[#](#term-sample_weight "Link to this term")
:   A relative weight for each sample. Intuitively, if all weights are
    integers, a weighted model or score should be equivalent to that
    calculated when repeating the sample the number of times specified in
    the weight. Weights may be specified as floats, so that sample weights
    are usually equivalent up to a constant positive scaling factor.

    FIXME Is this interpretation always the case in practice? We have no
    common tests.

    Some estimators, such as decision trees, support negative weights.
    FIXME: This feature or its absence may not be tested or documented in
    many estimators.

    This is not entirely the case where other parameters of the model
    consider the number of samples in a region, as with `min_samples` in
    [`cluster.DBSCAN`](https://scikit-learn.org/dev/modules/generated/sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN "(in scikit-learn v1.10)"). In this case, a count of samples becomes
    to a sum of their weights.

    In classification, sample weights can also be specified as a function
    of class with the [class\_weight](#term-class_weight) estimator [parameter](#term-parameter).

`X`[#](#term-X "Link to this term")
:   Denotes data that is observed at training and prediction time, used as
    independent variables in learning. The notation is uppercase to denote
    that it is ordinarily a matrix (see [rectangular](#term-rectangular)).
    When a matrix, each sample may be represented by a [feature](#term-feature)
    vector, or a vector of [precomputed](#term-precomputed) (dis)similarity with each
    training sample. `X` may also not be a matrix, and may require a
    [feature extractor](#term-feature-extractor) or a [pairwise metric](#term-pairwise-metric) to turn it into
    one before learning a model.

`Xt`[#](#term-Xt "Link to this term")
:   Shorthand for “transformed [X](#term-X)”.

`y`[#](#term-y "Link to this term")

`Y`[#](#term-Y "Link to this term")
:   Denotes data that may be observed at training time as the dependent
    variable in learning, but which is unavailable at prediction time, and
    is usually the [target](#term-target) of prediction. The notation may be
    uppercase to denote that it is a matrix, representing
    [multi-output](#term-multi-output) targets, for instance; but usually we use `y`
    and sometimes do so even when multiple outputs are assumed.