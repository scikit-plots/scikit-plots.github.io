# SearchResult[#](#searchresult "Link to this heading")

class scikitplot.corpus.SearchResult(**doc**, **score**, **match\_mode**, **backend=None**, **index\_generation=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_similarity/_similarity.py#L57)[#](#scikitplot.corpus.SearchResult "Link to this definition")
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

        ****backend****str or None
        :   Name of the dense ANN backend that produced this result
            (SEMANTIC/HYBRID), or `None` for STRICT/KEYWORD. Provenance only:
            excluded from equality and hashing.

        ****index\_generation****int or None
        :   The [`SimilarityIndex`](scikitplot.corpus.SimilarityIndex.html#scikitplot.corpus.SimilarityIndex "scikitplot.corpus.SimilarityIndex") build generation that produced this
            result. Increments on every [`SimilarityIndex.build`](scikitplot.corpus.SimilarityIndex.html#scikitplot.corpus.SimilarityIndex.build "scikitplot.corpus.SimilarityIndex.build"), so a caller
            can detect results computed against a since-rebuilt index. Provenance
            only: excluded from equality and hashing.

    Parameters:
    :   * ****doc**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****score**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****match\_mode**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****index\_generation**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)

    Notes

    ****Developer note:**** `backend` and `index_generation` describe **how** the
    result was produced, not **what** it is, so they use `compare=False` — two
    results for the same document/score/mode remain equal regardless of
    provenance. Embedding-model identity is out of scope here (it travels with
    the document embeddings; see the embedding-cache identity contract).

    backend: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.SearchResult.backend "Link to this definition")

    doc: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_similarity/_similarity.py#L57)[#](#scikitplot.corpus.SearchResult.doc "Link to this definition")

    index\_generation: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.SearchResult.index_generation "Link to this definition")

    match\_mode: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_similarity/_similarity.py#L57)[#](#scikitplot.corpus.SearchResult.match_mode "Link to this definition")

    score: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_similarity/_similarity.py#L57)[#](#scikitplot.corpus.SearchResult.score "Link to this definition")