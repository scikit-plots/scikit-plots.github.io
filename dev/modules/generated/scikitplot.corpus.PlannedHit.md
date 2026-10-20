# PlannedHit[#](#plannedhit "Link to this heading")

class scikitplot.corpus.PlannedHit(**hit**, **score**, **key**, **fused\_score=None**, **rerank\_score=None**, **query\_ranks=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_execution.py#L284)[#](#scikitplot.corpus.PlannedHit "Link to this definition")
:   One ranked hit of a plan, with the score of each stage that ranked it.

    Parameters:
    :   ****hit****object
        :   The hit as `index.search` returned it (for a document several
            queries found: from the first such query).

        ****score****float
        :   The value the hit is ranked by: the rerank score when it was
            reranked, else the fused score, else the search score.

        ****key****str
        :   Its identity (`doc_id`, else `node_id`), on which fusion keys.

        ****fused\_score****float or None, default=None
        :   The cross-query fusion score, when two or more queries ran.

        ****rerank\_score****float or None, default=None
        :   The reranker’s score, when the hit was reranked.

        ****query\_ranks****tuple of (int or None), default=()
        :   Zero-based rank of the hit in each query’s ranking, `None` where a
            query did not return it; aligned with `ExecutionResult.queries`.

    Parameters:
    :   * ****hit**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****score**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****fused\_score**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****rerank\_score**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****query\_ranks**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None****,** **...****]**)

    property doc: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[#](#scikitplot.corpus.PlannedHit.doc "Link to this definition")
    :   The matched document (`hit.doc`, else the hit itself).

    property doc\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.PlannedHit.doc_id "Link to this definition")
    :   The hit’s identity.

    fused\_score: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PlannedHit.fused_score "Link to this definition")

    hit: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_execution.py#L284)[#](#scikitplot.corpus.PlannedHit.hit "Link to this definition")

    key: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_execution.py#L284)[#](#scikitplot.corpus.PlannedHit.key "Link to this definition")

    query\_ranks: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.PlannedHit.query_ranks "Link to this definition")

    rerank\_score: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PlannedHit.rerank_score "Link to this definition")

    score: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_execution.py#L284)[#](#scikitplot.corpus.PlannedHit.score "Link to this definition")