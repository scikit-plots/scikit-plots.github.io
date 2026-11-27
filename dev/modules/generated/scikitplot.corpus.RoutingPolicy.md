# RoutingPolicy[#](#routingpolicy "Link to this heading")

class scikitplot.corpus.RoutingPolicy(**rules=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_routing.py#L218)[#](#scikitplot.corpus.RoutingPolicy "Link to this definition")
:   An ordered set of [`RoutingRule`](scikitplot.corpus.RoutingRule.html#scikitplot.corpus.RoutingRule "scikitplot.corpus.RoutingRule"), one per shape.

    Parameters:
    :   ****rules****iterable of RoutingRule
        :   Rules with unique shapes; shapes are reported in this order.

    Raises:
    :   TypeError
        :   If a rule is not a [`RoutingRule`](scikitplot.corpus.RoutingRule.html#scikitplot.corpus.RoutingRule "scikitplot.corpus.RoutingRule").

        ValueError
        :   If two rules name one shape.

    Parameters:
    :   ****rules**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**RoutingRule**](scikitplot.corpus.RoutingRule.html#scikitplot.corpus.RoutingRule "scikitplot.corpus._routing.RoutingRule")**,** **...****]**)

    > **See also**
    > [`route`](scikitplot.corpus.route.html#scikitplot.corpus.route "scikitplot.corpus.route")
    :   Uses a policy to choose evidence paths.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus import DEFAULT_ROUTING_POLICY
    >>> DEFAULT_ROUTING_POLICY.detect("How many sections are not about X?")
    ('aggregation', 'negation', 'hierarchy')

    ```
    Go BackOpen In Tab

    detect(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_routing.py#L265)[#](#scikitplot.corpus.RoutingPolicy.detect "Link to this definition")
    :   Return the shapes of `query`, in rule order.

        Parameters:
        :   ****query****str
            :   The query text.

        Returns:
        :   tuple of str
            :   Each detected shape once; empty for a plain query.

        Parameters:
        :   ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    legs\_for(**shapes**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_routing.py#L282)[#](#scikitplot.corpus.RoutingPolicy.legs_for "Link to this definition")
    :   Return the legs the given shapes need, each once, in rule order.

        Parameters:
        :   ****shapes**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**LegKind**](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind"), …]

    rules: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[RoutingRule](scikitplot.corpus.RoutingRule.html#scikitplot.corpus.RoutingRule "scikitplot.corpus._routing.RoutingRule"), ...] = ()[#](#scikitplot.corpus.RoutingPolicy.rules "Link to this definition")

    property shapes: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][#](#scikitplot.corpus.RoutingPolicy.shapes "Link to this definition")
    :   Every shape this policy can report, in order.

    with\_rules(**\*rules**, **replace=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_routing.py#L291)[#](#scikitplot.corpus.RoutingPolicy.with_rules "Link to this definition")
    :   Return a policy with `rules` added.

        Parameters:
        :   ****\*rules****RoutingRule
            :   New rules, appended in order.

            ****replace****bool, default=False
            :   Replace an existing rule of the same shape (keeping its position)
                instead of refusing it.

        Returns:
        :   RoutingPolicy

        Raises:
        :   ValueError
            :   If a shape is already present and `replace` is false.

        Parameters:
        :   * ****rules**** ([**RoutingRule**](scikitplot.corpus.RoutingRule.html#scikitplot.corpus.RoutingRule "scikitplot.corpus._routing.RoutingRule"))
            * ****replace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [**RoutingPolicy**](#scikitplot.corpus.RoutingPolicy "scikitplot.corpus._routing.RoutingPolicy")