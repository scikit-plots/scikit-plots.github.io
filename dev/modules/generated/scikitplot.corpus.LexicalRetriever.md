# LexicalRetriever[#](#lexicalretriever "Link to this heading")

class scikitplot.corpus.LexicalRetriever(**index**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrievers.py#L162)[#](#scikitplot.corpus.LexicalRetriever "Link to this definition")
:   Keyword / BM25 evidence path.

    Parameters:
    :   ****index**** (**Any**)

    leg: [LegKind](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind") = 'lexical'[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrieval.py#L)[#](#scikitplot.corpus.LexicalRetriever.leg "Link to this definition")
    :   Which evidence path this retriever represents.

    retrieve(**query**, **config**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrievers.py#L170)[#](#scikitplot.corpus.LexicalRetriever.retrieve "Link to this definition")
    :   Run keyword retrieval against the index.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**LegResult**](scikitplot.corpus.LegResult.html#scikitplot.corpus.LegResult "scikitplot.corpus._retrievers.LegResult")