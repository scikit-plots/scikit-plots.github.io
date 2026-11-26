# BM25Okapi[#](#bm25okapi "Link to this heading")

class scikitplot.rank\_bm25.BM25Okapi(**corpus**, **tokenizer=None**, **k1=1.5**, **b=0.75**, **epsilon=0.25**, **doc\_ids=None**, **workers=None**, **backend='auto'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/rank_bm25/_rank_bm25.py#L1237)[#](#scikitplot.rank_bm25.BM25Okapi "Link to this definition")
:   Okapi BM25 with an epsilon floor on negative IDFs (ATIRE-style IDF).

    Notes

    The IDF is `log((N - n + 0.5) / (n + 0.5))`; terms in more than half of
    the documents get a negative value, which is floored to
    `epsilon * average_idf`. See Trotman, Jia and Crane, “Towards an
    Efficient and Effective Search Engine”.

    RECIPE\_ID: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'okapi-epsilon-floor/2'[#](#scikitplot.rank_bm25.BM25Okapi.RECIPE_ID "Link to this definition")
    :   The scoring formula this class implements. Subclasses override it; the
        class name is not the recipe, because “BM25Okapi” implies a standard the
        implementation makes specific choices within.

    property analyzer: [Analyzer](scikitplot.rank_bm25.Analyzer.html#scikitplot.rank_bm25.Analyzer "scikitplot.rank_bm25._identity.Analyzer") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.rank_bm25.BM25Okapi.analyzer "Link to this definition")
    :   The declared analyzer, or `None` when tokens were supplied directly.

    property backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.rank_bm25.BM25Okapi.backend "Link to this definition")
    :   `"numpy"`, `"numba"` or `"reference"`.

        Notes

        ****User.**** Every backend returns the same values, bit for bit; only the
        time differs. That is why the backend is not part of [`identity`](#scikitplot.rank_bm25.BM25Okapi.identity "scikitplot.rank_bm25.BM25Okapi.identity").

        Type:
        :   The backend this index scores with

    candidate\_count(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/rank_bm25/_rank_bm25.py#L800)[#](#scikitplot.rank_bm25.BM25Okapi.candidate_count "Link to this definition")
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

    property doc\_freqs[#](#scikitplot.rank_bm25.BM25Okapi.doc_freqs "Link to this definition")
    :   Each document’s term counts, in row order.

        Notes

        ****Developer.**** An index loaded from a `bm25-index/2` generation does
        not hold these dicts: they are rebuilt from the persisted arrays the
        first time a path that needs them runs (the reference backend,
        [`get_batch_scores`](#scikitplot.rank_bm25.BM25Okapi.get_batch_scores "scikitplot.rank_bm25.BM25Okapi.get_batch_scores")), and never otherwise.

        Type:
        :   List of [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")

    property doc\_ids[#](#scikitplot.rank_bm25.BM25Okapi.doc_ids "Link to this definition")
    :   Row identities, in row order.

        Type:
        :   Tuple of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") or None

    get\_batch\_scores(**query**, **doc\_ids**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/rank_bm25/_rank_bm25.py#L540)[#](#scikitplot.rank_bm25.BM25Okapi.get_batch_scores "Link to this definition")
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

    get\_scores(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/rank_bm25/_rank_bm25.py#L491)[#](#scikitplot.rank_bm25.BM25Okapi.get_scores "Link to this definition")
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

        ****Developer.**** Every scoring path – this one, [`get_batch_scores`](#scikitplot.rank_bm25.BM25Okapi.get_batch_scores "scikitplot.rank_bm25.BM25Okapi.get_batch_scores")
        and the sparse path behind [`get_top_ids`](#scikitplot.rank_bm25.BM25Okapi.get_top_ids "scikitplot.rank_bm25.BM25Okapi.get_top_ids") – evaluates the one
        recipe formula, `_term_contribution`, term by term in query
        order, so all three produce the same floating-point values.

    get\_top\_ids(**query**, **n=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/rank_bm25/_rank_bm25.py#L732)[#](#scikitplot.rank_bm25.BM25Okapi.get_top_ids "Link to this definition")
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

    get\_top\_n(**query**, **documents**, **n=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/rank_bm25/_rank_bm25.py#L1229)[#](#scikitplot.rank_bm25.BM25Okapi.get_top_n "Link to this definition")

    property identity: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.rank_bm25.BM25Okapi.identity "Link to this definition")
    :   recipe, analyzer and parameters.

        Notes

        ****User.**** Two indexes sharing this value were built the same way. It does
        not cover the documents: that is what the corpus records, and folding it
        in here would make a re-tokenisation and a new document look like the
        same kind of change.

        Type:
        :   Digest of what produced this index

    classmethod load(**directory**, **\***, **mmap\_mode=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/rank_bm25/_rank_bm25.py#L1096)[#](#scikitplot.rank_bm25.BM25Okapi.load "Link to this definition")
    :   Load a published index, or a generation directory directly.

        Parameters:
        :   ****directory****str or path-like
            :   Index root, or a generation directory.

            ****mmap\_mode****{None, “r”}, optional
            :   `"r"` memory-maps the arrays of a `bm25-index/2` generation
                read-only instead of reading them into memory.

        Returns:
        :   BM25
            :   The reloaded index, ready to query.

        Raises:
        :   TypeError
            :   If called on [`BM25`](scikitplot.rank_bm25.BM25.html#scikitplot.rank_bm25.BM25 "scikitplot.rank_bm25.BM25") itself, which has no formula.

            ValueError
            :   If the root has no readable pointer (a root with no pointer is
                refused rather than guessed at); the generation was written under
                another schema; its recipe is not this class’s recipe (another
                scorer, or an earlier version of this one’s formula); a parameter
                is missing, unknown or outside its domain; or the recorded
                `identity` does not match the recipe, analyzer and parameters
                the generation declares.

        Notes

        ****User.**** Load with the class that built the index. An index written by
        an earlier version of the formula (an earlier recipe version) is
        refused, not rescored with the current one: rebuild it from the corpus.

        ****Developer.**** Every check runs before the engine is rebuilt, so a
        wrong artifact fails here with a message naming the cause, never later
        inside the formula. `identity` is recomputed from what the generation
        declares and must equal the recorded value, so edited metadata is
        refused; the arrays are covered separately by their SHA-256 digests.

    property parameters: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[#](#scikitplot.rank_bm25.BM25Okapi.parameters "Link to this definition")
    :   The scoring parameters that belong to this index’s identity.

    prepare()[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/rank_bm25/_rank_bm25.py#L710)[#](#scikitplot.rank_bm25.BM25Okapi.prepare "Link to this definition")
    :   Build the scoring engine now, and compile the compiled backend if used.

        Returns:
        :   BM25
            :   `self`, so `BM25Okapi(corpus).prepare()` reads naturally.

        Notes

        ****User.**** Optional. Without it the first query pays both costs. Call it
        at service start-up, before declaring the service ready, so the first
        request is not the slow one – compiling the Numba kernel takes
        seconds once per process.

    property recipe: [Recipe](scikitplot.rank_bm25.Recipe.html#scikitplot.rank_bm25.Recipe "scikitplot.rank_bm25._identity.Recipe")[#](#scikitplot.rank_bm25.BM25Okapi.recipe "Link to this definition")
    :   The named, versioned scoring formula this index used.

    save(**directory**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/rank_bm25/_rank_bm25.py#L1014)[#](#scikitplot.rank_bm25.BM25Okapi.save "Link to this definition")
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