# FeatureColumnSelector[#](#featurecolumnselector "Link to this heading")

class scikitplot.feature\_selection.FeatureColumnSelector(**kind=None**, **family=None**, **role='feature'**, **tag=None**, **is\_=()**, **is\_not=()**, **names=None**, **policy=None**, **schema=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_estimators.py#L484)[#](#scikitplot.feature_selection.FeatureColumnSelector "Link to this definition")
:   Column selector for `ColumnTransformer` driven by a feature schema.

    Called with the training frame when the `ColumnTransformer` is fitted, it
    profiles that frame (or uses a fixed `schema`) and returns the matching
    column names; `ColumnTransformer` stores them, so validation and test
    data are transformed with the training selection.

    Parameters:
    :   ****kind, family, role, tag, is\_, is\_not, names****
        :   Conditions, as in [`FeatureSchema.select`](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema.select "scikitplot.feature_selection.FeatureSchema.select"). Sequences are stored
            as tuples.

        ****policy****FeaturePolicy, mapping, path or None, default=None
        :   Policy used to profile each training frame.

        ****schema****FeatureSchema or None, default=None
        :   Use this fitted schema instead of profiling; its selected columns
            must all be present in the frame.

    Parameters:
    :   * ****kind**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****family**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****role**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****tag**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****is\_**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****is\_not**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****names**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****policy**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****schema**** ([**FeatureSchema**](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection._schema.FeatureSchema") **|** **None**)

    > **See also**
    > [`sklearn.compose.make_column_selector`](https://scikit-learn.org/dev/modules/generated/sklearn.compose.make_column_selector.html#sklearn.compose.make_column_selector "(in scikit-learn v1.10)")
    :   The dtype-based counterpart.

    Notes

    ****User note.**** With `schema=None` the selection is learned per training
    fold, which is the correct behaviour under cross-validation. Each selector
    profiles the frame it is given; with many selectors on a very wide frame,
    profile once and pass `schema=` for speed (accepting that the schema was
    fitted outside the folds).

    Examples

    Try it in your browser!
    ```
    >>> import pandas as pd
    >>> from sklearn.compose import ColumnTransformer
    >>> from sklearn.preprocessing import OneHotEncoder, RobustScaler, StandardScaler
    >>> from scikitplot.feature_selection import FeatureColumnSelector
    >>> X = pd.DataFrame(
    ...     {
    ...         "income": [1.0, 2.0, 2.5, 3.0, 400.0] * 4,
    ...         "height": [1.6, 1.7, 1.8, 1.75, 1.65] * 4,
    ...         "city": list("abcab") * 4,
    ...     }
    ... )
    >>> ct = ColumnTransformer(
    ...     [
    ...         (
    ...             "skewed",
    ...             RobustScaler(),
    ...             FeatureColumnSelector(kind="numeric_continuous", is_=("skewed",)),
    ...         ),
    ...         (
    ...             "normal",
    ...             StandardScaler(),
    ...             FeatureColumnSelector(
    ...                 kind="numeric_continuous", is_not=("skewed",)
    ...             ),
    ...         ),
    ...         (
    ...             "cat",
    ...             OneHotEncoder(),
    ...             FeatureColumnSelector(kind="categorical_nominal"),
    ...         ),
    ...     ]
    ... ).fit(X)
    >>> [(name, cols) for name, _, cols in ct.transformers_]
    [('skewed', ['income']), ('normal', ['height']), ('cat', ['city'])]

    ```
    Go BackOpen In Tab

    \_\_call\_\_(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_estimators.py#L573)[#](#scikitplot.feature_selection.FeatureColumnSelector.__call__ "Link to this definition")
    :   Return the matching columns of `X`.

        Parameters:
        :   ****X****pandas.DataFrame
            :   The frame given to `ColumnTransformer.fit`.

        Returns:
        :   list of str
            :   Matching column names in frame order.

        Parameters:
        :   ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    family: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureColumnSelector.family "Link to this definition")

    is\_: [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = ()[#](#scikitplot.feature_selection.FeatureColumnSelector.is_ "Link to this definition")

    is\_not: [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = ()[#](#scikitplot.feature_selection.FeatureColumnSelector.is_not "Link to this definition")

    kind: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureColumnSelector.kind "Link to this definition")

    names: [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureColumnSelector.names "Link to this definition")

    policy: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureColumnSelector.policy "Link to this definition")

    role: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = 'feature'[#](#scikitplot.feature_selection.FeatureColumnSelector.role "Link to this definition")

    schema: [FeatureSchema](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection._schema.FeatureSchema") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureColumnSelector.schema "Link to this definition")

    tag: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureColumnSelector.tag "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_feature_profiling_and_lineage_thumb.png)

[Profile, route, trace and monitor wide tables](../../auto_examples/feature_selection/plot_feature_profiling_and_lineage.html)

Profile, route, trace and monitor wide tables