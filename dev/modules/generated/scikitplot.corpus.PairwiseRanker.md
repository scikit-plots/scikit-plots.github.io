# PairwiseRanker[#](#pairwiseranker "Link to this heading")

class scikitplot.corpus.PairwiseRanker(**score\_func**, **\***, **greater\_is\_better=True**, **use\_normalized\_text=True**, **score\_cutoff=None**, **name=None**, **kwargs=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_similarity/_pairwise.py#L76)[#](#scikitplot.corpus.PairwiseRanker "Link to this definition")
:   Ranker built from a pairwise relevance function.

    Parameters:
    :   ****score\_func****callable
        :   `score_func(query, text, **kwargs) -> float`; finite values only.

        ****greater\_is\_better****bool, default=True
        :   `False` for a distance: hits are scored `-score_func(...)`.

        ****use\_normalized\_text****bool, default=True
        :   Compare with a document’s `normalized_text` when it has one.

        ****score\_cutoff****float or None, default=None
        :   Drop hits whose (signed) score is below it.

        ****name****str or None, default=None
        :   Recorded as `native_metric`; defaults to the function name.

        ****kwargs****mapping or None, default=None
        :   Fixed keyword arguments of `score_func`.

    Parameters:
    :   * ****score\_func**** (**Callable****[****...****,** **Any****]**)
        * ****greater\_is\_better**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****use\_normalized\_text**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****score\_cutoff**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****kwargs**** (**Mapping****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]** **|** **None**)

    Notes

    Build it with [`make_pairwise_ranker`](scikitplot.corpus.make_pairwise_ranker.html#scikitplot.corpus.make_pairwise_ranker "scikitplot.corpus.make_pairwise_ranker"), which validates the arguments.

    \_\_call\_\_(**query**, **documents**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_similarity/_pairwise.py#L117)[#](#scikitplot.corpus.PairwiseRanker.__call__ "Link to this definition")
    :   Return the best `config.top_k` documents for `query`.

        Parameters:
        :   ****query****str
            :   Query text.

            ****documents****sequence of CorpusDocument
            :   Candidates.

            ****config****RetrievalConfig
            :   Supplies `top_k`.

        Returns:
        :   list of RetrievalHit
            :   `match_mode="pairwise"`, `native_score` the raw value,
                `native_metric` the function name, `rank` from 0.

        Raises:
        :   TypeError
            :   If `score_func` returns something other than a real number.

            ValueError
            :   If it returns a non-finite value, naming the document position.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
            * ****config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**RetrievalHit**](scikitplot.corpus.RetrievalHit.html#scikitplot.corpus.RetrievalHit "scikitplot.corpus._similarity._similarity.RetrievalHit")]