# register\_assessment[#](#register-assessment "Link to this heading")

scikitplot.feature\_selection.register\_assessment(**name**, **func=None**, **\***, **defaults=None**, **version='1'**, **description=''**, **validate=None**, **replace=False**, **registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_assessments.py#L535)[#](#scikitplot.feature_selection.register_assessment "Link to this definition")
:   Register an assessment provider; usable as a decorator.

    Parameters:
    :   ****name****str
        :   Provider name used by policies.

        ****func****callable or None, default=None
        :   `func(context, **params) -> AssessmentOutcome`; omit to decorate.

        ****defaults****mapping or None, default=None
        :   Accepted parameters and their defaults.

        ****version****str, default=”1”
        :   Provider version, recorded in every assessment.

        ****description****str, default=””
        :   One line for [`list_assessment_providers`](scikitplot.feature_selection.list_assessment_providers.html#scikitplot.feature_selection.list_assessment_providers "scikitplot.feature_selection.list_assessment_providers").

        ****validate****callable or None, default=None
        :   Range check for parameters; raise [`PolicyError`](scikitplot.feature_selection.PolicyError.html#scikitplot.feature_selection.PolicyError "scikitplot.feature_selection.PolicyError").

        ****replace****bool, default=False
        :   Replace an existing provider of the same name.

        ****registry****AssessmentRegistry or None, default=None
        :   Target registry; [`default_registry`](scikitplot.feature_selection.default_registry.html#scikitplot.feature_selection.default_registry "scikitplot.feature_selection.default_registry") when None.

    Returns:
    :   callable
        :   `func` (so the decorator form leaves it usable).

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****func**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****...****]****,** [**AssessmentOutcome**](scikitplot.feature_selection.AssessmentOutcome.html#scikitplot.feature_selection.AssessmentOutcome "scikitplot.feature_selection._assessments.AssessmentOutcome")**]** **|** **None**)
        * ****defaults**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****description**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****validate**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]****,** **None****]** **|** **None**)
        * ****replace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****registry**** ([**AssessmentRegistry**](scikitplot.feature_selection.AssessmentRegistry.html#scikitplot.feature_selection.AssessmentRegistry "scikitplot.feature_selection._assessments.AssessmentRegistry") **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.feature_selection import (
    ...     AssessmentRegistry,
    ...     register_assessment,
    ... )
    >>> reg = AssessmentRegistry()
    >>> @register_assessment("wide_range", defaults={"span": 100.0}, registry=reg)
    ... def wide_range(context, span):
    ...     s = context.stats
    ...     if not s.is_numeric or s.min is None:
    ...         return context.result("not_applicable", "not_numeric")
    ...     return context.result("true" if s.max - s.min >= span else "false")
    >>> reg.names()
    ('wide_range',)

    ```
    Go BackOpen In Tab