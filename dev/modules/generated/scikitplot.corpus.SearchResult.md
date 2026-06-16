# SearchResult[#](#searchresult "Link to this heading")

class scikitplot.corpus.SearchResult(**doc**, **score**, **match\_mode**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_similarity/_similarity.py#L52)[#](#scikitplot.corpus.SearchResult "Link to this definition")
:   A single search result.

    Parameters:
    :   ****doc****CorpusDocument
        :   The matched document.

        ****score****float
        :   Relevance score (higher is better). Scale depends on
            match mode:

            * STRICT: 1.0 if match, 0.0 otherwise
            * KEYWORD: Jaccard similarity [0, 1] or BM25 score
            * SEMANTIC: cosine similarity [-1, 1]
            * HYBRID: reciprocal rank fusion score

        ****match\_mode****str
        :   The mode that produced this result.

    Parameters:
    :   * ****doc**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****score**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****match\_mode**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    doc: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_similarity/_similarity.py#L52)[#](#scikitplot.corpus.SearchResult.doc "Link to this definition")

    match\_mode: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_similarity/_similarity.py#L52)[#](#scikitplot.corpus.SearchResult.match_mode "Link to this definition")

    score: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_similarity/_similarity.py#L52)[#](#scikitplot.corpus.SearchResult.score "Link to this definition")