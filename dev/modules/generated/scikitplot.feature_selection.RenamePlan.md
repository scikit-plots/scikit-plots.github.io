# RenamePlan[#](#renameplan "Link to this heading")

class scikitplot.feature\_selection.RenamePlan(**pairs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_rename.py#L71)[#](#scikitplot.feature_selection.RenamePlan "Link to this definition")
:   A complete, frozen `old -> new` name mapping.

    Parameters:
    :   ****pairs****tuple of (str, str)
        :   One pair per input column, in column order.

    Parameters:
    :   ****pairs**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** **...****]**)

    > **See also**
    > [`FeatureRenamer`](scikitplot.feature_selection.FeatureRenamer.html#scikitplot.feature_selection.FeatureRenamer "scikitplot.feature_selection.FeatureRenamer")
    :   Applies a plan inside a pipeline.

    [`FeatureSchema.rename`](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema.rename "scikitplot.feature_selection.FeatureSchema.rename")
    :   Renames a fitted schema, keeping aliases.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.feature_selection import RenamePlan
    >>> RenamePlan.build(["a", "b", "c"], "col-{index}", start=1).names_out
    ['col-1', 'col-2', 'col-3']
    >>> RenamePlan.build(["a", "b"], {"a": "alpha"}).names_out
    ['alpha', 'b']
    >>> RenamePlan.build(["x", "y"], str.upper).mapping
    {'x': 'X', 'y': 'Y'}

    ```
    Go BackOpen In Tab

    apply(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_rename.py#L274)[#](#scikitplot.feature_selection.RenamePlan.apply "Link to this definition")
    :   Rename the columns of `X`, which must equal [`names_in`](#scikitplot.feature_selection.RenamePlan.names_in "scikitplot.feature_selection.RenamePlan.names_in") in order.

        Parameters:
        :   ****X****pandas.DataFrame
            :   Frame to rename.

        Returns:
        :   pandas.DataFrame
            :   A new frame with renamed columns (data not copied where pandas
                avoids it).

        Raises:
        :   ValueError
            :   If the columns differ from the plan’s inputs.

        Parameters:
        :   ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    classmethod build(**names**, **rule**, **\***, **start=0**, **on\_collision='raise'**, **on\_missing='raise'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_rename.py#L110)[#](#scikitplot.feature_selection.RenamePlan.build "Link to this definition")
    :   Apply `rule` to `names` once and freeze the result.

        Parameters:
        :   ****names****sequence of str
            :   Input column names (unique).

            ****rule****mapping, sequence of str, callable, str or None
            :   See the module documentation. None keeps every name.

            ****start****int, default=0
            :   First `{index}` of a template.

            ****on\_collision****{“raise”, “suffix”}, default=”raise”
            :   Handling of duplicate new names.

            ****on\_missing****{“raise”, “ignore”}, default=”raise”
            :   Handling of mapping keys that are not in `names`.

        Returns:
        :   RenamePlan
            :   The plan.

        Raises:
        :   ValueError
            :   For a list of the wrong length, an unknown template field, an
                unknown mapping key, an empty new name or a refused collision.

            TypeError
            :   For a rule of an unsupported type or a callable returning a
                non-string.

        Parameters:
        :   * ****names**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****rule**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****start**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****on\_collision**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****on\_missing**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**RenamePlan**](#scikitplot.feature_selection.RenamePlan "scikitplot.feature_selection._rename.RenamePlan")

    property changed: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.feature_selection.RenamePlan.changed "Link to this definition")
    :   Only the columns whose name changes.

        Type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_rename.py#L307)[#](#scikitplot.feature_selection.RenamePlan.from_dict "Link to this definition")
    :   Rebuild a plan from [`to_dict`](#scikitplot.feature_selection.RenamePlan.to_dict "scikitplot.feature_selection.RenamePlan.to_dict") output.

        Parameters:
        :   ****data****mapping
            :   Stored form.

        Returns:
        :   RenamePlan
            :   The plan.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**RenamePlan**](#scikitplot.feature_selection.RenamePlan "scikitplot.feature_selection._rename.RenamePlan")

    inverse()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_rename.py#L263)[#](#scikitplot.feature_selection.RenamePlan.inverse "Link to this definition")
    :   Return the plan that undoes this one.

        Returns:
        :   RenamePlan
            :   `new -> old` for every column.

        Return type:
        :   [**RenamePlan**](#scikitplot.feature_selection.RenamePlan "scikitplot.feature_selection._rename.RenamePlan")

    property mapping: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.feature_selection.RenamePlan.mapping "Link to this definition")
    :   Old name to new name, every column included.

        Type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")

    property names\_in: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.feature_selection.RenamePlan.names_in "Link to this definition")
    :   Input names, in order.

        Type:
        :   List of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    property names\_out: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.feature_selection.RenamePlan.names_out "Link to this definition")
    :   Output names, in order.

        Type:
        :   List of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    pairs: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_rename.py#L71)[#](#scikitplot.feature_selection.RenamePlan.pairs "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_rename.py#L303)[#](#scikitplot.feature_selection.RenamePlan.to_dict "Link to this definition")
    :   Return `{"pairs": [[old, new], ...]}`.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]