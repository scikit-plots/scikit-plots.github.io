# GraphRetriever[#](#graphretriever "Link to this heading")

class scikitplot.corpus.GraphRetriever(**graph**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrievers.py#L199)[#](#scikitplot.corpus.GraphRetriever "Link to this definition")
:   Relationship-traversal evidence path.

    Notes

    ****Developer.**** Seeds come from another leg’s hits: the graph answers **what
    is related to what already matched**, so it is a refinement path rather than a
    primary one. A traversal that exhausts a budget produces a `DEGRADED`
    leg carrying the traversal’s own [`ErrorRecord`](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus.ErrorRecord"), so the budget that
    stopped it survives into the retrieval envelope.

    Parameters:
    :   ****graph**** (**Any**)

    leg: [LegKind](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind") = 'graph'[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrieval.py#L)[#](#scikitplot.corpus.GraphRetriever.leg "Link to this definition")
    :   Which evidence path this retriever represents.

    retrieve(**query**, **config**, **\***, **graph\_query=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrievers.py#L216)[#](#scikitplot.corpus.GraphRetriever.retrieve "Link to this definition")
    :   Traverse the graph from the supplied seeds.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****graph\_query**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**LegResult**](scikitplot.corpus.LegResult.html#scikitplot.corpus.LegResult "scikitplot.corpus._retrievers.LegResult")