# BM25Okapi[#](#bm25okapi "Link to this heading")

class scikitplot.rank\_bm25.BM25Okapi(**corpus**, **tokenizer=None**, **k1=1.5**, **b=0.75**, **epsilon=0.25**, **doc\_ids=None**, **workers=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/rank_bm25/_rank_bm25.py#L755)[#](#scikitplot.rank_bm25.BM25Okapi "Link to this definition")
:   RECIPE\_ID: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'okapi-epsilon-floor/1'[#](#scikitplot.rank_bm25.BM25Okapi.RECIPE_ID "Link to this definition")
    :   The scoring formula this class implements. Subclasses override it; the
        class name is not the recipe, because “BM25Okapi” implies a standard the
        implementation makes specific choices within.

    property analyzer: Analyzer | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.rank_bm25.BM25Okapi.analyzer "Link to this definition")
    :   The declared analyzer, or `None` when tokens were supplied directly.

    candidate\_count(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/rank_bm25/_rank_bm25.py#L522)[#](#scikitplot.rank_bm25.BM25Okapi.candidate_count "Link to this definition")
    :   Number of documents that contain at least one query term.

        Parameters:
        :   ****query****sequence of str
            :   Query tokens.

        Returns:
        :   int
            :   Documents the sparse path will score.

        Notes

        ****User.**** This is what a query actually costs. `get_scores` returns one
        value per document in the corpus whatever the query, which is a
        diagnostic rather than a retrieval path.

    property doc\_ids[#](#scikitplot.rank_bm25.BM25Okapi.doc_ids "Link to this definition")
    :   Row identities, in row order.

        Type:
        :   Tuple of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") or None

    get\_batch\_scores(**query**, **doc\_ids**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/rank_bm25/_rank_bm25.py#L822)[#](#scikitplot.rank_bm25.BM25Okapi.get_batch_scores "Link to this definition")
    :   Calculate bm25 scores between query and subset of all docs.

    get\_scores(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/rank_bm25/_rank_bm25.py#L800)[#](#scikitplot.rank_bm25.BM25Okapi.get_scores "Link to this definition")
    :   ATIRE BM25 variant uses an idf function which uses a log(idf) score.

        To prevent negative idf scores,
        this algorithm also adds a floor to the idf value of epsilon.
        See [Trotman, A., X. Jia, M. Crane, Towards an Efficient and Effective Search Engine] for more info
        :param query:
        :return:

    get\_top\_ids(**query**, **n=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/rank_bm25/_rank_bm25.py#L461)[#](#scikitplot.rank_bm25.BM25Okapi.get_top_ids "Link to this definition")
    :   Return the `n` best `(doc_id, score)` pairs.

        Parameters:
        :   ****query****sequence of str
            :   Query tokens.

            ****n****int, optional
            :   Maximum number of hits.

        Returns:
        :   list of tuple
            :   `(doc_id, score)` in descending score, ties in row order.

        Raises:
        :   ValueError
            :   If the index holds no identities, or `n` is not a valid count.

        Notes

        ****User.**** This is the binding to prefer. [`get_top_n`](#scikitplot.rank_bm25.BM25Okapi.get_top_n "scikitplot.rank_bm25.BM25Okapi.get_top_n") maps row
        offsets into a sequence you pass at query time, which is only correct
        while that sequence is in the same order as the corpus the index was
        built from – a precondition nothing can check for you.

    get\_top\_n(**query**, **documents**, **n=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/rank_bm25/_rank_bm25.py#L747)[#](#scikitplot.rank_bm25.BM25Okapi.get_top_n "Link to this definition")

    property identity: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.rank_bm25.BM25Okapi.identity "Link to this definition")
    :   recipe, analyzer and parameters.

        Notes

        ****User.**** Two indexes sharing this value were built the same way. It does
        not cover the documents: that is what the corpus records, and folding it
        in here would make a re-tokenisation and a new document look like the
        same kind of change.

        Type:
        :   Digest of what produced this index

    classmethod load(**directory**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/rank_bm25/_rank_bm25.py#L679)[#](#scikitplot.rank_bm25.BM25Okapi.load "Link to this definition")
    :   Load a published index, or a generation directory directly.

        Parameters:
        :   ****directory****str or path-like
            :   Index root, or a generation directory.

        Returns:
        :   BM25
            :   The reloaded index, ready to query.

        Raises:
        :   ValueError
            :   If the root has no readable pointer, or the state is not from this
                recipe. A root with no pointer is refused rather than guessed at.

    property parameters: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[#](#scikitplot.rank_bm25.BM25Okapi.parameters "Link to this definition")
    :   The scoring parameters that belong to this index’s identity.

    property recipe: Recipe[#](#scikitplot.rank_bm25.BM25Okapi.recipe "Link to this definition")
    :   The named, versioned scoring formula this index used.

    save(**directory**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/rank_bm25/_rank_bm25.py#L599)[#](#scikitplot.rank_bm25.BM25Okapi.save "Link to this definition")
    :   Publish this index as a generation behind a pointer.

        Parameters:
        :   ****directory****str or path-like
            :   Index root. Created if absent.

        Returns:
        :   pathlib.Path
            :   The generation directory written.

        Raises:
        :   OSError
            :   If the generation could not be written. Nothing is published in that
                case, and any previously published generation is untouched.

        Notes

        ****User.**** A saved index reloads without the corpus: the statistics are
        what get published, not the documents.

        ****Developer.**** Same shape as the corpus artifact and the Annoy bundle:
        candidate, verify by reloading, then move the pointer. The three carry
        their own implementation rather than a shared one, which is the cost of
        each submodule standing alone; the shape is deliberately identical so a
        reader of one recognises the others.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_rank_bm25_persistence_script_thumb.png)

[Persist and Reload a Rank-BM25 Index](../../auto_examples/rank_bm25/plot_rank_bm25_persistence_script.html)

Persist and Reload a Rank-BM25 Index![](../../_images/sphx_glr_plot_rank_bm25_quickstart_script_thumb.png)

[Rank-BM25 Quick Start with Stable Document IDs](../../auto_examples/rank_bm25/plot_rank_bm25_quickstart_script.html)

Rank-BM25 Quick Start with Stable Document IDs![](../../_images/sphx_glr_plot_rank_bm25_recipes_script_thumb.png)

[Compare the Three Rank-BM25 Scoring Recipes](../../auto_examples/rank_bm25/plot_rank_bm25_recipes_script.html)

Compare the Three Rank-BM25 Scoring Recipes![](../../_images/sphx_glr_plot_rank_bm25_sparse_dense_script_thumb.png)

[Sparse Retrieval and Dense BM25 Diagnostics](../../auto_examples/rank_bm25/plot_rank_bm25_sparse_dense_script.html)

Sparse Retrieval and Dense BM25 Diagnostics