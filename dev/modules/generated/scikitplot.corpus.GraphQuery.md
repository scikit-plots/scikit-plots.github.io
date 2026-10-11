# GraphQuery[#](#graphquery "Link to this heading")

class scikitplot.corpus.GraphQuery(**seeds=()**, **max\_seed\_nodes=32**, **max\_hops=2**, **max\_neighbors\_per\_node=64**, **max\_total\_nodes=512**, **max\_total\_edges=2048**, **allowed\_relation\_types=None**, **deadline\_seconds=None**, **max\_evidence=None**, **min\_trust=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_graph.py#L201)[#](#scikitplot.corpus.GraphQuery "Link to this definition")
:   A bounded traversal request.

    Parameters:
    :   ****seeds****tuple of str
        :   Starting `node_id` values.

        ****max\_seed\_nodes****int, optional


        ****max\_hops****int, optional


        ****max\_neighbors\_per\_node****int, optional


        ****max\_total\_nodes****int, optional


        ****max\_total\_edges****int, optional


        ****allowed\_relation\_types****tuple of RelationType or None, optional
        :   `None` admits every relation.

        ****deadline\_seconds****float or None, optional


        ****max\_evidence****int or None, optional
        :   Evidence budget: cap on returned nodes carrying payload.

        ****min\_trust****EdgeTrust or None, optional
        :   Exclude edges below this tier.

    Parameters:
    :   * ****seeds**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****max\_seed\_nodes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_hops**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_neighbors\_per\_node**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_total\_nodes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_total\_edges**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****allowed\_relation\_types**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**RelationType**](scikitplot.corpus.RelationType.html#scikitplot.corpus.RelationType "scikitplot.corpus._graph.RelationType")**,** **...****]** **|** **None**)
        * ****deadline\_seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****max\_evidence**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****min\_trust**** ([**EdgeTrust**](scikitplot.corpus.EdgeTrust.html#scikitplot.corpus.EdgeTrust "scikitplot.corpus._graph.EdgeTrust") **|** **None**)

    Notes

    ****Developer.**** All eight §20 budgets are present with conservative
    defaults, because an unbounded traversal over a derived graph is unbounded
    work. `allowed_relation_types` doubles as the relation-constrained search
    mode, which is why only BFS is implemented: relation-constrained traversal
    is BFS with this field set, not a separate algorithm.

    allowed\_relation\_types: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[RelationType](scikitplot.corpus.RelationType.html#scikitplot.corpus.RelationType "scikitplot.corpus._graph.RelationType"), ...] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.GraphQuery.allowed_relation_types "Link to this definition")

    deadline\_seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.GraphQuery.deadline_seconds "Link to this definition")

    max\_evidence: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.GraphQuery.max_evidence "Link to this definition")

    max\_hops: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 2[#](#scikitplot.corpus.GraphQuery.max_hops "Link to this definition")

    max\_neighbors\_per\_node: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 64[#](#scikitplot.corpus.GraphQuery.max_neighbors_per_node "Link to this definition")

    max\_seed\_nodes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 32[#](#scikitplot.corpus.GraphQuery.max_seed_nodes "Link to this definition")

    max\_total\_edges: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 2048[#](#scikitplot.corpus.GraphQuery.max_total_edges "Link to this definition")

    max\_total\_nodes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 512[#](#scikitplot.corpus.GraphQuery.max_total_nodes "Link to this definition")

    min\_trust: [EdgeTrust](scikitplot.corpus.EdgeTrust.html#scikitplot.corpus.EdgeTrust "scikitplot.corpus._graph.EdgeTrust") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.GraphQuery.min_trust "Link to this definition")

    seeds: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.GraphQuery.seeds "Link to this definition")