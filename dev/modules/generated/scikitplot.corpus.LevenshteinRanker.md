# LevenshteinRanker[#](#levenshteinranker "Link to this heading")

class scikitplot.corpus.LevenshteinRanker(**\***, **backend='auto'**, **strict=False**, **use\_normalized\_text=True**, **score\_cutoff=0.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_similarity/_pairwise.py#L298)[#](#scikitplot.corpus.LevenshteinRanker "Link to this definition")
:   Ranker by normalised Levenshtein similarity, with backend provenance.

    Parameters:
    :   ****backend****str, default=”auto”
        :   Backend of [`scikitplot.levenshtein.rank`](scikitplot.levenshtein.rank.html#scikitplot.levenshtein.rank "scikitplot.levenshtein.rank").

        ****strict****bool, default=False
        :   Raise instead of falling back when `backend` is unavailable.

        ****use\_normalized\_text****bool, default=True
        :   Compare with `normalized_text` when a document has one.

        ****score\_cutoff****float, default=0.0
        :   Minimum similarity in [0, 1].

    Parameters:
    :   * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****use\_normalized\_text**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****score\_cutoff**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    Notes

    Build it with [`make_levenshtein_ranker`](scikitplot.corpus.make_levenshtein_ranker.html#scikitplot.corpus.make_levenshtein_ranker "scikitplot.corpus.make_levenshtein_ranker"). Each hit records
    `backend="levenshtein:<name>"`, the backend that computed its distance,
    which can differ from the requested one after a runtime fallback.

    \_\_call\_\_(**query**, **documents**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_similarity/_pairwise.py#L333)[#](#scikitplot.corpus.LevenshteinRanker.__call__ "Link to this definition")
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
            :   Ordered as [`scikitplot.levenshtein.rank`](scikitplot.levenshtein.rank.html#scikitplot.levenshtein.rank "scikitplot.levenshtein.rank") orders them:
                similarity, then distance, then position.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
            * ****config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**RetrievalHit**](scikitplot.corpus.RetrievalHit.html#scikitplot.corpus.RetrievalHit "scikitplot.corpus._similarity._similarity.RetrievalHit")]