# DenseRetriever[#](#denseretriever "Link to this heading")

class scikitplot.corpus.DenseRetriever(**index**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_retrievers.py#L178)[#](#scikitplot.corpus.DenseRetriever "Link to this definition")
:   Vector-similarity evidence path.

    Parameters:
    :   ****index**** (**Any**)

    leg: [LegKind](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind") = 'dense'[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_retrieval.py#L)[#](#scikitplot.corpus.DenseRetriever.leg "Link to this definition")
    :   Which evidence path this retriever represents.

    retrieve(**query**, **config**, **\***, **query\_embedding=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_retrievers.py#L186)[#](#scikitplot.corpus.DenseRetriever.retrieve "Link to this definition")
    :   Run dense retrieval, reporting why it could not run when it cannot.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****query\_embedding**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**LegResult**](scikitplot.corpus.LegResult.html#scikitplot.corpus.LegResult "scikitplot.corpus._retrievers.LegResult")