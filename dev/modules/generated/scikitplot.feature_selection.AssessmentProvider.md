# AssessmentProvider[#](#assessmentprovider "Link to this heading")

class scikitplot.feature\_selection.AssessmentProvider(**name**, **func**, **defaults=()**, **version='1'**, **description=''**, **validate=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L330)[#](#scikitplot.feature_selection.AssessmentProvider "Link to this definition")
:   A named, versioned function that answers one kind of question.

    Parameters:
    :   ****name****str
        :   Registry name.

        ****func****callable
        :   `func(context, **params) -> AssessmentOutcome`.

        ****defaults****tuple of (str, value) pairs
        :   Every accepted parameter with its default; a value’s type is the
            parameter’s type (`None` accepts any scalar).

        ****version****str, default=”1”
        :   Bumped when the rule’s meaning changes.

        ****description****str, default=””
        :   One line for listings.

        ****validate****callable or None, default=None
        :   `validate(params)` raising [`PolicyError`](scikitplot.feature_selection.PolicyError.html#scikitplot.feature_selection.PolicyError "scikitplot.feature_selection.PolicyError") for out-of-range
            values; called once per profile, before any column is assessed.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****func**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****...****]****,** [**AssessmentOutcome**](scikitplot.feature_selection.AssessmentOutcome.html#scikitplot.feature_selection.AssessmentOutcome "scikitplot.feature_selection._assessments.AssessmentOutcome")**]**)
        * ****defaults**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** **...****]**)
        * ****version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****description**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****validate**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]****,** **None****]** **|** **None**)

    defaults: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...] = ()[#](#scikitplot.feature_selection.AssessmentProvider.defaults "Link to this definition")

    description: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.feature_selection.AssessmentProvider.description "Link to this definition")

    func: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[...], [AssessmentOutcome](scikitplot.feature_selection.AssessmentOutcome.html#scikitplot.feature_selection.AssessmentOutcome "scikitplot.feature_selection._assessments.AssessmentOutcome")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L330)[#](#scikitplot.feature_selection.AssessmentProvider.func "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L330)[#](#scikitplot.feature_selection.AssessmentProvider.name "Link to this definition")

    resolve\_params(**given**, **\***, **field**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L360)[#](#scikitplot.feature_selection.AssessmentProvider.resolve_params "Link to this definition")
    :   Merge `given` over the defaults, checking names and types.

        Parameters:
        :   ****given****mapping
            :   Parameters from the policy.

            ****field****str
            :   Name used in error messages.

        Returns:
        :   dict
            :   Complete parameters.

        Raises:
        :   PolicyError
            :   For an unknown name, a wrong type or (through `validate`) a bad
                range.

        Parameters:
        :   * ****given**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
            * ****field**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    validate: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]], [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.AssessmentProvider.validate "Link to this definition")

    version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = '1'[#](#scikitplot.feature_selection.AssessmentProvider.version "Link to this definition")