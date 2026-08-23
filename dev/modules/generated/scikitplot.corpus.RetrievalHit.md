# RetrievalHit[#](#retrievalhit "Link to this heading")

class scikitplot.corpus.RetrievalHit(**doc**, **score**, **match\_mode**, **backend=None**, **index\_generation=None**, **native\_score=None**, **native\_metric=None**, **contributions=()**, **rank=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_similarity/_similarity.py#L67)[#](#scikitplot.corpus.RetrievalHit "Link to this definition")
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

        ****index\_generation****IndexGeneration or None
        :   The [`RetrievalIndex`](scikitplot.corpus.RetrievalIndex.html#scikitplot.corpus.RetrievalIndex "scikitplot.corpus.RetrievalIndex") build generation that produced this
            result. Increments on every [`RetrievalIndex.build`](scikitplot.corpus.RetrievalIndex.html#scikitplot.corpus.RetrievalIndex.build "scikitplot.corpus.RetrievalIndex.build"), so a caller
            can detect results computed against a since-rebuilt index. Provenance
            only: excluded from equality and hashing.

    Parameters:
    :   * ****doc**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****score**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****match\_mode**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****index\_generation**** (**IndexGeneration** **|** **None**)
        * ****native\_score**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)
        * ****native\_metric**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****contributions**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)"))
        * ****rank**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)

    Notes

    ****Developer note:**** `backend` and `index_generation` describe **how** the
    result was produced, not **what** it is, so they use `compare=False` — two
    results for the same document/score/mode remain equal regardless of
    provenance. Embedding-model identity is out of scope here (it travels with
    the document embeddings; see the embedding-cache identity contract).

    backend: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.RetrievalHit.backend "Link to this definition")

    contributions: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)") = ()[#](#scikitplot.corpus.RetrievalHit.contributions "Link to this definition")
    :   Per-leg provenance for a fused hit, empty for a single-leg hit.

        Each entry records which leg found this document, at what rank, and with
        what native score and metric. A hit that ranked #1 in both legs and one
        that ranked #1 and #40 used to be indistinguishable – very different
        confidence signals collapsed into one fused float (finding F-R09-02).

    doc: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_similarity/_similarity.py#L67)[#](#scikitplot.corpus.RetrievalHit.doc "Link to this definition")

    index\_generation: IndexGeneration | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.RetrievalHit.index_generation "Link to this definition")

    match\_mode: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_similarity/_similarity.py#L67)[#](#scikitplot.corpus.RetrievalHit.match_mode "Link to this definition")

    native\_metric: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.RetrievalHit.native_metric "Link to this definition")
    :   Scale of [`native_score`](#scikitplot.corpus.RetrievalHit.native_score "scikitplot.corpus.RetrievalHit.native_score"), e.g. `"cosine_similarity"`.

        §19 forbids comparing cosine, Euclidean, inner-product and backend-specific
        relevance scores as though they shared one scale. A hit that records its own
        scale lets a consumer verify no such comparison happened.

    native\_score: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.RetrievalHit.native_score "Link to this definition")
    :   The score the backend actually returned, before any fusion.

        `score` is the value this hit was **ranked** by, which for a fused result is
        not any backend’s output. Keeping them separate is what makes a fused score
        explainable rather than merely a number (finding F-R07-03).

    rank: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.RetrievalHit.rank "Link to this definition")
    :   Zero-based position within the leg that produced this hit.

        §19 names rank as the fallback ordering when no validated normalization
        exists – which, per R06, is the case for every non-cosine metric today.

    score: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_similarity/_similarity.py#L67)[#](#scikitplot.corpus.RetrievalHit.score "Link to this definition")