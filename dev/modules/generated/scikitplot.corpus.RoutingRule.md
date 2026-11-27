# RoutingRule[#](#routingrule "Link to this heading")

class scikitplot.corpus.RoutingRule(**shape**, **legs**, **phrases=()**, **matcher=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_routing.py#L138)[#](#scikitplot.corpus.RoutingRule "Link to this definition")
:   One shape: the words that reveal it and the evidence paths it needs.

    Parameters:
    :   ****shape****str or QueryShape
        :   Shape name, `[a-z][a-z0-9_]{0,63}`.

        ****legs****iterable of LegKind
        :   Paths the shape needs, added by [`route`](scikitplot.corpus.route.html#scikitplot.corpus.route "scikitplot.corpus.route") when available.

        ****phrases****iterable of str, default=()
        :   Words or phrases (lowercase, single spaces) any one of which reveals
            the shape.

        ****matcher****callable or None, default=None
        :   `matcher(tokens) -> bool`, for what phrases cannot say (a year, a
            number). The shape is detected if a phrase or the matcher matches.

    Raises:
    :   TypeError
        :   If a field has the wrong type.

        ValueError
        :   If the shape name or a phrase is malformed, or the rule has neither
            phrases nor a matcher.

    Parameters:
    :   * ****shape**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****legs**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**LegKind**](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind")**,** **...****]**)
        * ****phrases**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****matcher**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]****]****,** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** **None**)

    legs: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[LegKind](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_routing.py#L138)[#](#scikitplot.corpus.RoutingRule.legs "Link to this definition")

    matcher: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...]], [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RoutingRule.matcher "Link to this definition")

    matches(**tokens**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_routing.py#L196)[#](#scikitplot.corpus.RoutingRule.matches "Link to this definition")
    :   Return whether the query, as [`query_tokens`](scikitplot.corpus.query_tokens.html#scikitplot.corpus.query_tokens "scikitplot.corpus.query_tokens"), has this shape.

        Raises:
        :   TypeError
            :   If `matcher` returns something other than a bool.

        Parameters:
        :   ****tokens**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    phrases: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.RoutingRule.phrases "Link to this definition")

    shape: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_routing.py#L138)[#](#scikitplot.corpus.RoutingRule.shape "Link to this definition")