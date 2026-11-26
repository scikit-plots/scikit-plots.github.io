# DEFAULT\_ROUTING\_POLICY[#](#default-routing-policy "Link to this heading")

scikitplot.corpus.DEFAULT\_ROUTING\_POLICY = RoutingPolicy(rules=(RoutingRule(shape='multi\_hop', legs=(<LegKind.GRAPH: 'graph'>,), phrases=('relationship between', 'relation between', 'related to', 'connected to', 'linked to', 'in common', 'difference between', 'compared to', 'compare', 'versus', 'vs', 'whose', 'path from'), matcher=None), RoutingRule(shape='aggregation', legs=(<LegKind.METADATA: 'metadata'>,), phrases=('how many', 'how much', 'number of', 'count', 'total', 'sum of', 'average', 'list all', 'all the', 'maximum', 'minimum', 'most common'), matcher=None), RoutingRule(shape='negation', legs=(<LegKind.METADATA: 'metadata'>,), phrases=('not', 'no', 'without', 'except', 'excluding', 'other than', 'never', 'none', 'neither', 'nor', "isn't", "aren't", "wasn't", "weren't", "doesn't", "don't", "didn't", "can't", 'cannot', "won't"), matcher=None), RoutingRule(shape='temporal', legs=(<LegKind.METADATA: 'metadata'>,), phrases=('before', 'after', 'since', 'until', 'during', 'latest', 'earliest', 'recent', 'recently', 'newest', 'oldest', 'when', 'ago', 'today', 'yesterday'), matcher=<function \_has\_year>), RoutingRule(shape='hierarchy', legs=(<LegKind.GRAPH: 'graph'>,), phrases=('parent', 'child', 'children', 'section', 'sections', 'subsection', 'chapter', 'chapters', 'part of', 'belongs to', 'contained in', 'contains', 'nested', 'ancestor', 'descendant', 'hierarchy', 'subclass', 'superclass', 'top level'), matcher=None)))[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_routing.py#L)[#](#scikitplot.corpus.DEFAULT_ROUTING_POLICY "Link to this definition")
:   An ordered set of [`RoutingRule`](scikitplot.corpus.RoutingRule.html#scikitplot.corpus.RoutingRule "scikitplot.corpus.RoutingRule"), one per shape.

    Parameters:
    :   ****rules****iterable of RoutingRule
        :   Rules with unique shapes; shapes are reported in this order.

    Raises:
    :   TypeError
        :   If a rule is not a [`RoutingRule`](scikitplot.corpus.RoutingRule.html#scikitplot.corpus.RoutingRule "scikitplot.corpus.RoutingRule").

        ValueError
        :   If two rules name one shape.

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