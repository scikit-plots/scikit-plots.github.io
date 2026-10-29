# trace\_pipeline[#](#trace-pipeline "Link to this heading")

scikitplot.feature\_selection.trace\_pipeline(**estimator**, **input\_features=None**, **\***, **X=None**, **trace\_final=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L778)[#](#scikitplot.feature_selection.trace_pipeline "Link to this definition")
:   Trace the feature lineage of a fitted estimator.

    Parameters:
    :   ****estimator****fitted estimator
        :   A `Pipeline`, `ColumnTransformer`, `FeatureUnion` or single
            transformer. A pipeline’s final step without `transform` (the
            model) is recorded by name and not traced.

        ****input\_features****sequence of str or None, default=None
        :   Raw input names; defaults to `estimator.feature_names_in_` (set when
            it was fitted on a DataFrame), else `x0, x1, ...`.

        ****X****DataFrame or array or None, default=None
        :   Optional sample of training-like rows. Every stage is then run on it
            and its actual output width checked.

        ****trace\_final****bool, default=False
        :   A top-level pipeline’s last step with `predict` is the model and is
            not traced, even when it also has `transform` (LDA, KMeans). True
            traces it as a transformer.

    Returns:
    :   FeatureLineage
        :   The traced graph.

    Raises:
    :   LineageError
        :   If a stage’s traced count disagrees with its feature names or its
            actual output, or a stage’s width cannot be determined.

        sklearn.exceptions.NotFittedError
        :   If the estimator is not fitted.

    Parameters:
    :   * ****estimator**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****input\_features**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****X**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****trace\_final**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [**FeatureLineage**](scikitplot.feature_selection.FeatureLineage.html#scikitplot.feature_selection.FeatureLineage "scikitplot.feature_selection._lineage.FeatureLineage")

    > **See also**
    > [`FeatureLineage`](scikitplot.feature_selection.FeatureLineage.html#scikitplot.feature_selection.FeatureLineage "scikitplot.feature_selection.FeatureLineage")
    :   Query the result.

    Examples

    Try it in your browser!
    ```
    >>> import pandas as pd
    >>> from sklearn.compose import ColumnTransformer
    >>> from sklearn.preprocessing import OneHotEncoder, StandardScaler
    >>> from scikitplot.feature_selection import trace_pipeline
    >>> X = pd.DataFrame({"age": [20.0, 30.0, 40.0, 50.0], "city": list("abab")})
    >>> ct = ColumnTransformer(
    ...     [("num", StandardScaler(), ["age"]), ("cat", OneHotEncoder(), ["city"])]
    ... ).fit(X)
    >>> lineage = trace_pipeline(ct, X=X)
    >>> lineage.output_names
    ['num__age', 'cat__city_a', 'cat__city_b']
    >>> lineage.origins("cat__city_b")
    ('city',)
    >>> lineage.attribute([0.2, 0.3, 0.5]).by_input.to_dict()
    {'age': 0.2, 'city': 0.8}

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_feature_profiling_and_lineage_thumb.png)

[Profile, route, trace and monitor wide tables](../../auto_examples/feature_selection/plot_feature_profiling_and_lineage.html)

Profile, route, trace and monitor wide tables