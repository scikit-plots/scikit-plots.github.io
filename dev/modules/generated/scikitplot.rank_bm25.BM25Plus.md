# BM25Plus[#](#bm25plus "Link to this heading")

class scikitplot.rank\_bm25.BM25Plus(**corpus**, **tokenizer=None**, **k1=1.5**, **b=0.75**, **delta=1**, **doc\_ids=None**, **workers=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/rank_bm25/_rank_bm25.py#L957)[#](#scikitplot.rank_bm25.BM25Plus "Link to this definition")
:   RECIPE\_ID: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'bm25plus-delta/1'[#](#scikitplot.rank_bm25.BM25Plus.RECIPE_ID "Link to this definition")
    :   The scoring formula this class implements. Subclasses override it; the
        class name is not the recipe, because “BM25Okapi” implies a standard the
        implementation makes specific choices within.

    property analyzer: Analyzer | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.rank_bm25.BM25Plus.analyzer "Link to this definition")
    :   The declared analyzer, or `None` when tokens were supplied directly.

    candidate\_count(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/rank_bm25/_rank_bm25.py#L587)[#](#scikitplot.rank_bm25.BM25Plus.candidate_count "Link to this definition")
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

    property doc\_ids[#](#scikitplot.rank_bm25.BM25Plus.doc_ids "Link to this definition")
    :   Row identities, in row order.

        Type:
        :   Tuple of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") or None

    get\_batch\_scores(**query**, **doc\_ids**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/rank_bm25/_rank_bm25.py#L394)[#](#scikitplot.rank_bm25.BM25Plus.get_batch_scores "Link to this definition")
    :   Score the documents at the row positions `doc_ids` against `query`.

        Parameters:
        :   ****query****sequence of str
            :   Query tokens.

            ****doc\_ids****iterable of int
            :   Row positions (not stable identities) to score: a list, a tuple,
                an array or any iterable, read once.

        Returns:
        :   list of float
            :   One score per requested position, in the order given.

        Raises:
        :   TypeError
            :   If `query` is a string or holds a non-string token. This path used
                to skip the check, so a bare string was scored one character at a
                time – the defect the check exists to prevent.

    get\_scores(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/rank_bm25/_rank_bm25.py#L360)[#](#scikitplot.rank_bm25.BM25Plus.get_scores "Link to this definition")
    :   Score every document in the corpus against `query`.

        Parameters:
        :   ****query****sequence of str
            :   Query tokens.

        Returns:
        :   numpy.ndarray
            :   One score per document, in row order.

        Raises:
        :   TypeError
            :   If `query` is a string or holds a non-string token.

        Notes

        ****Developer.**** Every scoring path – this one, [`get_batch_scores`](#scikitplot.rank_bm25.BM25Plus.get_batch_scores "scikitplot.rank_bm25.BM25Plus.get_batch_scores")
        and the sparse path behind [`get_top_ids`](#scikitplot.rank_bm25.BM25Plus.get_top_ids "scikitplot.rank_bm25.BM25Plus.get_top_ids") – evaluates the one
        recipe formula, `_term_contribution`, term by term in query
        order, so all three produce the same floating-point values.

    get\_top\_ids(**query**, **n=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/rank_bm25/_rank_bm25.py#L525)[#](#scikitplot.rank_bm25.BM25Plus.get_top_ids "Link to this definition")
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

        ****User.**** This is the binding to prefer. [`get_top_n`](#scikitplot.rank_bm25.BM25Plus.get_top_n "scikitplot.rank_bm25.BM25Plus.get_top_n") maps row
        offsets into a sequence you pass at query time, which is only correct
        while that sequence is in the same order as the corpus the index was
        built from – a precondition nothing can check for you.

    get\_top\_n(**query**, **documents**, **n=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/rank_bm25/_rank_bm25.py#L860)[#](#scikitplot.rank_bm25.BM25Plus.get_top_n "Link to this definition")

    property identity: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.rank_bm25.BM25Plus.identity "Link to this definition")
    :   recipe, analyzer and parameters.

        Notes

        ****User.**** Two indexes sharing this value were built the same way. It does
        not cover the documents: that is what the corpus records, and folding it
        in here would make a re-tokenisation and a new document look like the
        same kind of change.

        Type:
        :   Digest of what produced this index

    classmethod load(**directory**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/rank_bm25/_rank_bm25.py#L792)[#](#scikitplot.rank_bm25.BM25Plus.load "Link to this definition")
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

    property parameters: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[#](#scikitplot.rank_bm25.BM25Plus.parameters "Link to this definition")
    :   The scoring parameters that belong to this index’s identity.

    property recipe: Recipe[#](#scikitplot.rank_bm25.BM25Plus.recipe "Link to this definition")
    :   The named, versioned scoring formula this index used.

    save(**directory**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/rank_bm25/_rank_bm25.py#L712)[#](#scikitplot.rank_bm25.BM25Plus.save "Link to this definition")
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

![](../../_images/sphx_glr_plot_rank_bm25_recipes_script_thumb.png)

[Compare the Three Rank-BM25 Scoring Recipes](../../auto_examples/rank_bm25/plot_rank_bm25_recipes_script.html)

Compare the Three Rank-BM25 Scoring Recipes