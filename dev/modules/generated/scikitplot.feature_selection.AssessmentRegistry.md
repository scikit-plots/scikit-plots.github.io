# AssessmentRegistry[#](#assessmentregistry "Link to this heading")

class scikitplot.feature\_selection.AssessmentRegistry[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L419)[#](#scikitplot.feature_selection.AssessmentRegistry "Link to this definition")
:   Name table of assessment providers.

    Notes

    ****Developer note.**** Thread-safe. [`register`](#scikitplot.feature_selection.AssessmentRegistry.register "scikitplot.feature_selection.AssessmentRegistry.register") refuses to replace an
    existing name unless `replace=True`; `_register_builtin` inserts
    only absent names.

    copy()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L492)[#](#scikitplot.feature_selection.AssessmentRegistry.copy "Link to this definition")
    :   Return an independent registry with the same providers.

        Returns:
        :   AssessmentRegistry
            :   A copy; registering in it does not change this registry.

        Return type:
        :   [**AssessmentRegistry**](#scikitplot.feature_selection.AssessmentRegistry "scikitplot.feature_selection._assessments.AssessmentRegistry")

        Examples

        Try it in your browser!
        ```
        >>> from scikitplot.feature_selection import default_registry
        >>> private = default_registry.copy()
        >>> private.names() == default_registry.names()
        True

        ```
        Go BackOpen In Tab

    get(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L464)[#](#scikitplot.feature_selection.AssessmentRegistry.get "Link to this definition")
    :   Return the provider registered as `name`.

        Parameters:
        :   ****name****str
            :   Provider name.

        Returns:
        :   AssessmentProvider
            :   The provider.

        Raises:
        :   PolicyError
            :   If no provider has that name.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**AssessmentProvider**](scikitplot.feature_selection.AssessmentProvider.html#scikitplot.feature_selection.AssessmentProvider "scikitplot.feature_selection._assessments.AssessmentProvider")

    names()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L513)[#](#scikitplot.feature_selection.AssessmentRegistry.names "Link to this definition")
    :   Tuple of str: Registered names, sorted.

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    register(**provider**, **\***, **replace=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L434)[#](#scikitplot.feature_selection.AssessmentRegistry.register "Link to this definition")
    :   Add `provider` under its name.

        Parameters:
        :   ****provider****AssessmentProvider
            :   The provider.

            ****replace****bool, default=False
            :   Allow replacing an existing entry.

        Raises:
        :   ValueError
            :   If the name is taken and `replace` is False.

        Parameters:
        :   * ****provider**** ([**AssessmentProvider**](scikitplot.feature_selection.AssessmentProvider.html#scikitplot.feature_selection.AssessmentProvider "scikitplot.feature_selection._assessments.AssessmentProvider"))
            * ****replace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   None

    unregister(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L518)[#](#scikitplot.feature_selection.AssessmentRegistry.unregister "Link to this definition")
    :   Remove `name` (mainly for tests); missing names are ignored.

        Parameters:
        :   ****name****str
            :   Provider name.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   None