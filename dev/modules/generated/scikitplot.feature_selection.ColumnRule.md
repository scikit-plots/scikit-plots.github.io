# ColumnRule[#](#columnrule "Link to this heading")

class scikitplot.feature\_selection.ColumnRule(**columns=()**, **patterns=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_policy.py#L255)[#](#scikitplot.feature_selection.ColumnRule "Link to this definition")
:   Select columns by exact name and/or shell-style pattern.

    Parameters:
    :   ****columns****str or sequence of str, default=()
        :   Exact column names.

        ****patterns****str or sequence of str, default=()
        :   [`fnmatch.fnmatchcase`](https://docs.python.org/3/library/fnmatch.html#fnmatch.fnmatchcase "(in Python v3.15)") patterns (`"cat_*"`, `"x_[0-9]"`).
            Matching is case-sensitive on every platform.

    Parameters:
    :   * ****columns**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****patterns**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)

    > **See also**
    > [`FeaturePolicy`](scikitplot.feature_selection.FeaturePolicy.html#scikitplot.feature_selection.FeaturePolicy "scikitplot.feature_selection.FeaturePolicy")
    :   Uses column rules for roles and tags.

    Notes

    ****User note.**** A list is shorthand for `columns`; `ColumnRule(["a"])`
    and `{"columns": ["a"]}` in a config file are the same rule.

    ****Developer note.**** Patterns use `fnmatchcase` (not `fnmatch`), so a
    rule selects the same columns on Windows and POSIX.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.feature_selection import ColumnRule
    >>> ColumnRule(columns=["age"], patterns=["cat_*"]).resolve(
    ...     ["age", "cat_a", "cat_b", "income"]
    ... )
    ('age', 'cat_a', 'cat_b')

    ```
    Go BackOpen In Tab

    columns: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.ColumnRule.columns "Link to this definition")

    classmethod from\_value(**value**, **\***, **field='rule'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_policy.py#L296)[#](#scikitplot.feature_selection.ColumnRule.from_value "Link to this definition")
    :   Build a rule from its config form: a string, a list, a mapping or a rule.

        Parameters:
        :   ****value****str, list of str, mapping or ColumnRule
            :   `{"columns": [...], "patterns": [...]}` or the list shorthand.

            ****field****str, default=”rule”
            :   Name used in error messages.

        Returns:
        :   ColumnRule
            :   The rule.

        Raises:
        :   PolicyError
            :   If the value is off contract.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****field**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**ColumnRule**](#scikitplot.feature_selection.ColumnRule "scikitplot.feature_selection._policy.ColumnRule")

    property is\_empty: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.feature_selection.ColumnRule.is_empty "Link to this definition")
    :   True when the rule names no column and no pattern.

        Type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    patterns: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.ColumnRule.patterns "Link to this definition")

    resolve(**names**, **\***, **on\_missing='raise'**, **field='rule'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_policy.py#L334)[#](#scikitplot.feature_selection.ColumnRule.resolve "Link to this definition")
    :   Return the names this rule selects, in the order of `names`.

        Parameters:
        :   ****names****sequence of str
            :   Available column names.

            ****on\_missing****{“raise”, “ignore”}, default=”raise”
            :   What to do with an exact name that is not in `names`.

            ****field****str, default=”rule”
            :   Name used in error messages.

        Returns:
        :   tuple of str
            :   Selected names, each once, in `names` order.

        Raises:
        :   PolicyError
            :   If `on_missing="raise"` and an exact name is absent.

        Parameters:
        :   * ****names**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****on\_missing**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****field**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_policy.py#L374)[#](#scikitplot.feature_selection.ColumnRule.to_dict "Link to this definition")
    :   Return the config form `{"columns": [...], "patterns": [...]}`.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]]