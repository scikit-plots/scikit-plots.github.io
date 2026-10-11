# Categorical preprocessing[#](#categorical-preprocessing "Link to this heading")

`scikitplot.preprocessing` currently provides two categorical encoders: `GetDummies` for pandas-style dummy expansion and `DummyCodeEncoder` for a fitted scikit-learn-style transform/inverse-transform workflow.

> **Important**
> Fit categorical state on training data and reuse it for validation/test data. Creating dummies independently for each split can produce incompatible columns and is a common source of silent model errors.
Getting started

Choose pandas-style GetDummies or sklearn-style DummyCodeEncoder.

[Getting started](getting_started.html#preprocessing-getting-started)GetDummies

Column selection, separators, drop behavior, sparse output, dtype, and unknown categories.

[GetDummies](get_dummies.html#preprocessing-get-dummies)DummyCodeEncoder

Fit/transform/inverse-transform categorical encoding with estimator semantics.

[DummyCodeEncoder](dummy_code_encoder.html#preprocessing-dummy-code-encoder)Scikit-learn integration

Pipelines, feature names, training/test separation, and sparse output.

[Scikit-learn integration](sklearn_integration.html#preprocessing-sklearn-integration)Python API

The two public encoder classes and their main contracts.

[Python API](python_api.html#preprocessing-python-api)Known limits and troubleshooting

Current correctness findings and validation mismatches.

[Known limits and troubleshooting](known_limits_and_troubleshooting.html#preprocessing-known-limits-and-troubleshooting)

## Which page should I use?[#](#which-page-should-i-use "Link to this heading")

Start with ****Getting started****. Then choose the page that owns the decision
you are making: architecture and lifecycle, configuration, persistence,
performance, public API, or limits. The guide intentionally separates those
concerns so examples do not accidentally become policy.

## Examples[#](#examples "Link to this heading")

See [Preprocessing](../../auto_examples/preprocessing/index.html#preprocessing-examples) for executable examples that accompany this guide.