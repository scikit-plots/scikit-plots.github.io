# Retriever[#](#retriever "Link to this heading")

class scikitplot.corpus.Retriever[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_retrievers.py#L121)[#](#scikitplot.corpus.Retriever "Link to this definition")
:   Base class for an independent evidence path.

    Notes

    Subclasses implement [`retrieve`](#scikitplot.corpus.Retriever.retrieve "scikitplot.corpus.Retriever.retrieve") and declare [`leg`](#scikitplot.corpus.Retriever.leg "scikitplot.corpus.Retriever.leg"). Every leg
    returns a [`LegResult`](scikitplot.corpus.LegResult.html#scikitplot.corpus.LegResult "scikitplot.corpus.LegResult") rather than a bare list, so a leg that could not
    run says so instead of returning an empty list indistinguishable from a
    genuine zero-hit answer.

    leg: [LegKind](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind") = 'lexical'[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_retrieval.py#L)[#](#scikitplot.corpus.Retriever.leg "Link to this definition")
    :   Which evidence path this retriever represents.

    retrieve(**query**, **config**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_retrievers.py#L135)[#](#scikitplot.corpus.Retriever.retrieve "Link to this definition")
    :   Run this leg.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**LegResult**](scikitplot.corpus.LegResult.html#scikitplot.corpus.LegResult "scikitplot.corpus._retrievers.LegResult")