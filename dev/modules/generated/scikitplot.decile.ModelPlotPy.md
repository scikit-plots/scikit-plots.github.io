# ModelPlotPy[#](#modelplotpy "Link to this heading")

class scikitplot.decile.ModelPlotPy(**feature\_data=None**, **label\_data=None**, **dataset\_labels=None**, **models=None**, **model\_labels=None**, **ntiles=10**, **seed=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/decile/_decile_modelplotpy.py#L362)[#](#scikitplot.decile.ModelPlotPy "Link to this definition")
:   Decile/ntile analysis for sklearn classifiers.

    Parameters:
    :   ****feature\_data****Sequence[Any] or None, default=None
        :   Sequence of feature matrices (DataFrame or ndarray). One per dataset.

        ****label\_data****Sequence[Any] or None, default=None
        :   Sequence of label vectors (Series/ndarray/list). One per dataset.

        ****dataset\_labels****Sequence[str] or None, default=None
        :   Names for datasets; must match length of `feature_data` and `label_data`.

        ****models****Sequence[ClassifierMixin] or None, default=None
        :   Fitted sklearn-like classifiers that implement `predict_proba` and `classes_`.

        ****model\_labels****Sequence[str] or None, default=None
        :   Names for models; must match length of `models`.

        ****ntiles****int, default=10
        :   Number of ntiles. Must satisfy 2 <= ntiles <= n\_samples for each dataset.

        ****seed****int, default=0
        :   Reserved for backward compatibility. Not used (ntiles are deterministic).

    Returns:
    :   ModelPlotPy
        :   Instance.

    Raises:
    :   ValueError
        :   If list lengths are inconsistent or ntiles is invalid.

        TypeError
        :   If models are not sklearn classifiers.

    Parameters:
    :   * ****feature\_data**** (**Sequence****[****Any****]** **|** **None**)
        * ****label\_data**** (**Sequence****[****Any****]** **|** **None**)
        * ****dataset\_labels**** (**Sequence****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****models**** (**Sequence****[****ClassifierMixin****]** **|** **None**)
        * ****model\_labels**** (**Sequence****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****ntiles**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****seed**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    > **See also**
    > [`sklearn.base.ClassifierMixin`](https://scikit-learn.org/dev/modules/generated/sklearn.base.ClassifierMixin.html#sklearn.base.ClassifierMixin "(in scikit-learn v1.10)")

    Notes

    Key design rules:

    * No mutable defaults in `__init__`.
    * No randomness in ntile assignment (random noise added for qcut).

    Examples

    Try it in your browser!
    ```
    >>> from sklearn.linear_model import LogisticRegression
    >>> X = pd.DataFrame({"x": [0, 1, 2, 3]})
    >>> y = pd.Series([0, 0, 1, 1])
    >>> m = LogisticRegression().fit(X, y)
    >>> mp = ModelPlotPy([X], [y], ["train"], [m], ["lr"], ntiles=2)
    >>> scores = mp.prepare_scores_and_ntiles()
    >>> set(scores.columns) >= {
    ...     "dataset_label",
    ...     "model_label",
    ...     "target_class",
    ...     "prob_0",
    ...     "prob_1",
    ...     "dec_0",
    ...     "dec_1",
    ... }
    True

    ```
    Go BackOpen In Tab

    aggregate\_over\_ntiles()[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/decile/_decile_modelplotpy.py#L722)[#](#scikitplot.decile.ModelPlotPy.aggregate_over_ntiles "Link to this definition")
    :   Aggregate counts and lift/gain metrics per ntile.

        Parameters:
        :   ****None****

        Returns:
        :   pandas.DataFrame
            :   Aggregated metrics per (model\_label, dataset\_label, target\_class, ntile).
                The output schema matches the legacy implementation so it can be consumed
                by the existing plot functions.

        Raises:
        :   ValueError
            :   If any group has zero positives for a requested target class.

        Return type:
        :   **DataFrame**

        > **See also**
        > [`prepare_scores_and_ntiles`](#scikitplot.decile.ModelPlotPy.prepare_scores_and_ntiles "scikitplot.decile.ModelPlotPy.prepare_scores_and_ntiles")

        Notes

        Dev note: this implementation avoids mutating shared columns in the scores
        dataframe during loops (the legacy code writes `pos`/`neg` repeatedly).

        Examples

        Try it in your browser!
        ```
        >>> # agg = mp.aggregate_over_ntiles()

        ```
        Go BackOpen In Tab

    get\_params()[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/decile/_decile_modelplotpy.py#L527)[#](#scikitplot.decile.ModelPlotPy.get_params "Link to this definition")
    :   Get parameters (sklearn-style API).

        Parameters:
        :   ****None****

        Returns:
        :   dict[str, Any]
            :   Parameter dictionary.

        Raises:
        :   None

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

        > **See also**
        > [`set_params`](#scikitplot.decile.ModelPlotPy.set_params "scikitplot.decile.ModelPlotPy.set_params")

        Notes

        The returned objects are the current attributes; callers should not mutate
        them in-place if they want stable behavior.

        Examples

        Try it in your browser!
        ```
        >>> # mp.get_params()

        ```
        Go BackOpen In Tab

    plotting\_scope(**scope='auto'**, **select\_model\_label=None**, **select\_dataset\_label=None**, **select\_targetclass=None**, **select\_smallest\_targetclass=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/decile/_decile_modelplotpy.py#L861)[#](#scikitplot.decile.ModelPlotPy.plotting_scope "Link to this definition")
    :   Build `plot_input` subset according to a strict scope contract.

        Parameters:
        :   ****scope****{‘auto’, ‘no\_comparison’, ‘compare\_models’, ‘compare\_datasets’, ‘compare\_targetclasses’}, default=’auto’
            :   Evaluation perspective.

                If `scope='auto'`, the scope is inferred deterministically from the provided
                selectors and the available options.

            ****select\_model\_label****Sequence[str] or None, default=None
            :   Model labels to include.

            ****select\_dataset\_label****Sequence[str] or None, default=None
            :   Dataset labels to include.

            ****select\_targetclass****Sequence[Any] or None, default=None
            :   Target classes to include.

            ****select\_smallest\_targetclass****bool, default=True
            :   Should the plot only contain the results of the smallest targetclass.
                If True, the specific target is defined from the first dataset.
                If False and select\_targetclass is None try to uses
                `list(self.models[0].classes_)`

        Returns:
        :   pandas.DataFrame
            :   Subset dataframe ready for plotting functions.

        Raises:
        :   ValueError
            :   If the scope is invalid, selector values are invalid, or the selection
                is ambiguous under the strict contract.

        Parameters:
        :   * ****scope**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****select\_model\_label**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****select\_dataset\_label**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****select\_targetclass**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
            * ****select\_smallest\_targetclass**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   **DataFrame**

        > **See also**
        > [`aggregate_over_ntiles`](#scikitplot.decile.ModelPlotPy.aggregate_over_ntiles "scikitplot.decile.ModelPlotPy.aggregate_over_ntiles")

        Notes

        ****Inference rules for ``scope=’auto’``****

        Let the universes be:

        * `M` = all `model_labels`
        * `D` = all `dataset_labels`
        * `T` = all fitted `classes_`

        After validating selectors (membership is strict):

        1. If exactly one selector among (models, datasets, targetclasses) contains
           ****two or more**** values, then `auto` selects the corresponding comparison
           scope.

           * `len(select_model_label) >= 2` -> `compare_models`
           * `len(select_dataset_label) >= 2` -> `compare_datasets`
           * `len(select_targetclass) >= 2` -> `compare_targetclasses`

           If ****more than one**** selector has length >= 2, the request is ambiguous
           and a ValueError is raised.
        2. If no selector has length >= 2:

           * If all dimensions are fixed (either explicitly selected with length 1,
             or the universe size is 1), `auto` selects `no_comparison`.
           * Otherwise, if exactly one dimension is unfixed (universe size > 1) while
             the other two are fixed, `auto` selects the corresponding comparison
             scope comparing ****all**** values in that unfixed dimension.
           * If the remaining degrees of freedom are not unique, the request is
             ambiguous and a ValueError is raised.

        Examples

        Try it in your browser!
        ```
        >>> # Compare all models on a fixed dataset and target class (scope inferred):
        >>> # plot_input = mp.plotting_scope(select_dataset_label=['test'], select_targetclass=[1])
        >>>
        >>> # Compare two datasets for a fixed model and target class (scope inferred):
        >>> # plot_input = mp.plotting_scope(select_model_label=['lr'], select_targetclass=[1])

        ```
        Go BackOpen In Tab

    prepare\_scores\_and\_ntiles()[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/decile/_decile_modelplotpy.py#L639)[#](#scikitplot.decile.ModelPlotPy.prepare_scores_and_ntiles "Link to this definition")
    :   Compute per-row class probabilities and deterministic ntiles.

        Parameters:
        :   ****None****

        Returns:
        :   pandas.DataFrame
            :   DataFrame containing:

                * `dataset_label` and `model_label`
                * `target_class` (true label)
                * `prob_<class>` columns
                * `dec_<class>` columns (1..ntiles; 1 = highest probability)

        Raises:
        :   ValueError
            :   If there are no models/datasets, ntiles is invalid, or any dataset has
                fewer rows than `ntiles`.

        Return type:
        :   **DataFrame**

        > **See also**
        > [`aggregate_over_ntiles`](#scikitplot.decile.ModelPlotPy.aggregate_over_ntiles "scikitplot.decile.ModelPlotPy.aggregate_over_ntiles")

        Notes

        This replaces the legacy approach that added random noise and used
        [`pandas.qcut`](https://pandas.pydata.org/docs/dev/reference/api/pandas.qcut.html#pandas.qcut "(in pandas v3.1.0.dev0+974.ge652ee88a5)") for binning.

        Examples

        Try it in your browser!
        ```
        >>> # scores = mp.prepare_scores_and_ntiles()

        ```
        Go BackOpen In Tab

    reset\_params()[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/decile/_decile_modelplotpy.py#L603)[#](#scikitplot.decile.ModelPlotPy.reset_params "Link to this definition")
    :   Reset all parameters to a default empty state.

        Parameters:
        :   ****None****

        Returns:
        :   None

        Raises:
        :   None

        Return type:
        :   None

        > **See also**
        > [`set_params`](#scikitplot.decile.ModelPlotPy.set_params "scikitplot.decile.ModelPlotPy.set_params"), [`get_params`](#scikitplot.decile.ModelPlotPy.get_params "scikitplot.decile.ModelPlotPy.get_params")

        Notes

        The object remains usable after repopulating fields.

        Examples

        Try it in your browser!
        ```
        >>> # mp.reset_params()

        ```
        Go BackOpen In Tab

    set\_params(**\*\*params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/decile/_decile_modelplotpy.py#L567)[#](#scikitplot.decile.ModelPlotPy.set_params "Link to this definition")
    :   Set parameters (sklearn-style API) and re-validate.

        Parameters:
        :   ****\*\*params****Any
            :   Attributes to set on the object.

        Returns:
        :   None

        Raises:
        :   ValueError
            :   If an invalid parameter is provided.

        Parameters:
        :   ****params**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   None

        > **See also**
        > [`get_params`](#scikitplot.decile.ModelPlotPy.get_params "scikitplot.decile.ModelPlotPy.get_params")

        Notes

        After updating attributes, the internal state is validated.

        Examples

        Try it in your browser!
        ```
        >>> # mp.set_params(ntiles=20)

        ```
        Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_modelplotpy_script_thumb.png)

[Introduction to modelplotpy](../../auto_examples/decile/plot_modelplotpy_script.html)

Introduction to modelplotpy