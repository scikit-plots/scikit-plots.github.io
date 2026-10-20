# RetrievalIndex[#](#retrievalindex "Link to this heading")

class scikitplot.corpus.RetrievalIndex(**config=None**, **\***, **security\_filter=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_similarity/_similarity.py#L478)[#](#scikitplot.corpus.RetrievalIndex "Link to this definition")
:   Multi-mode similarity index over `CorpusDocument` collections.

    Parameters:
    :   ****config****RetrievalConfig or None, optional
        :   Default search configuration. Can be overridden per query.

    Parameters:
    :   * ****config**** ([**RetrievalConfig**](scikitplot.corpus.RetrievalConfig.html#scikitplot.corpus.RetrievalConfig "scikitplot.corpus.RetrievalConfig") **|** **None**)
        * ****security\_filter**** ([**SecurityFilter**](scikitplot.corpus.SecurityFilter.html#scikitplot.corpus.SecurityFilter "scikitplot.corpus.SecurityFilter") **|** **None**)

    > **See also**
    > [`scikitplot.corpus._schema.MatchMode`](scikitplot.corpus.MatchMode.html#scikitplot.corpus.MatchMode "scikitplot.corpus._schema.MatchMode")
    :   Enum of match modes.

    `scikitplot.corpus._adapters`
    :   Convert results to LangChain / MCP format.

    Notes

    ****User note:**** Build the index once, query many times:

    ```
    index = RetrievalIndex()
    index.build(documents)
    results = index.search("What did Hamlet say about death?")

    ```

    ****Developer note:**** The index stores references to the original
    documents. If documents are mutated after building, results
    are undefined.

    Examples

    Try it in your browser!
    ```
    >>> index = RetrievalIndex()
    >>> # index.build(corpus_documents)
    >>> # results = index.search("quantum computing")

    ```
    Go BackOpen In Tab

    property backend\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.RetrievalIndex.backend_name "Link to this definition")
    :   Name of the active dense ANN backend, or `None` if unbuilt.

    property backend\_provenance: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.RetrievalIndex.backend_provenance "Link to this definition")
    :   What the dense backend was asked to be, what runs, and why (R2-5).

        Returns:
        :   dict or None
            :   [`VectorIndexBackend.provenance`](scikitplot.corpus.VectorIndexBackend.html#scikitplot.corpus.VectorIndexBackend.provenance "scikitplot.corpus.VectorIndexBackend.provenance") of the active backend
                (`requested_backend`, `backend`, `fallback_reason`,
                `allow_fallback`, plus Annoy’s binding); `None` when no dense
                index is built. A backend object without `provenance()` (one
                assigned directly rather than selected) requested itself.

    build(**documents**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_similarity/_similarity.py#L542)[#](#scikitplot.corpus.RetrievalIndex.build "Link to this definition")
    :   Build the index from `CorpusDocument` instances.

        Parameters:
        :   ****documents****Sequence[CorpusDocument]
            :   Documents to index. Must have `text` (and optionally
                `embedding`, `tokens`, `normalized_text`).

        Raises:
        :   ValueError
            :   If **documents** is empty.

        Parameters:
        :   ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   None

    static check\_score\_fusion\_allowed(**hits**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_similarity/_similarity.py#L1328)[#](#scikitplot.corpus.RetrievalIndex.check_score_fusion_allowed "Link to this definition")
    :   Whether score-space fusion is defensible for these hits.

        Parameters:
        :   ****hits****iterable of RetrievalHit
            :   Hits from every leg that would be combined.

        Returns:
        :   str or None
            :   The shared `native_metric` when score fusion is permissible, or
                `None` when it is not and rank fusion must be used.

        Parameters:
        :   ****hits**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**RetrievalHit**](scikitplot.corpus.RetrievalHit.html#scikitplot.corpus.RetrievalHit "scikitplot.corpus._similarity._similarity.RetrievalHit")**]**)

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | None

        Notes

        ****User-focused.**** Rank fusion is the default combiner. Score-space
        fusion is available only when every leg reports the **same**
        `native_metric`, because adding a BM25 score to a cosine similarity
        produces a number with no meaning.

        ****Developer-focused.**** ADR-R07-003 inverts the dangerous default
        deliberately: the failure mode of unnecessary rank fusion is slightly
        worse ranking, while the failure mode of unjustified score fusion is
        **confidently wrong** ranking. §19 states the rule directly – “do not
        compare cosine, Euclidean, inner product and backend-specific relevance
        scores as if they share one scale.”

        Note that a shared metric is necessary but not sufficient in general: a
        validated normalization is also required. R06 established none exists
        for any non-cosine metric today, which is why the cosine case is the only
        one this returns for.

    property has\_embeddings: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.RetrievalIndex.has_embeddings "Link to this definition")
    :   Whether dense embeddings are indexed.

    property index\_generation: [IndexGeneration](scikitplot.corpus.IndexGeneration.html#scikitplot.corpus.IndexGeneration "scikitplot.corpus._generation.IndexGeneration") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.RetrievalIndex.index_generation "Link to this definition")
    :   Content-derived identity of the built index.

        Returns:
        :   IndexGeneration or None
            :   `None` before the first build.

        Notes

        ****User-focused.**** Every [`RetrievalHit`](scikitplot.corpus.RetrievalHit.html#scikitplot.corpus.RetrievalHit "scikitplot.corpus.RetrievalHit") carries the generation
        active at query time, so a caller can detect a result computed against a
        different index – including one built in another process, which a
        counter could not express.

        ****Developer-focused.**** Because the value is derived from content rather
        than incremented, rebuilding the same documents with the same
        configuration yields the **same** generation. That makes `build()`
        idempotent, removing the only `NON_IDEMPOTENT` operation R04 found in
        the package, and it turns rebuild-detection into the question a caller
        actually has: **does this index match this content?**

    property n\_documents: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.RetrievalIndex.n_documents "Link to this definition")
    :   Number of indexed documents.

    query(**vector**, **k=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_similarity/_similarity.py#L1517)[#](#scikitplot.corpus.RetrievalIndex.query "Link to this definition")
    :   Vector-level ANN query returning `(doc_id, score)` pairs.

        This is the vector-index seam consumed by
        [`scikitplot.mcp`](../../apis/scikitplot.mcp.html#module-scikitplot.mcp "scikitplot.mcp") (the `VectorIndex` protocol): it takes a query
        ****vector**** (already embedded) rather than a query string, and returns
        stable document identities instead of [`RetrievalHit`](scikitplot.corpus.RetrievalHit.html#scikitplot.corpus.RetrievalHit "scikitplot.corpus.RetrievalHit") objects.

        Parameters:
        :   ****vector****array-like
            :   Query embedding of the same dimension as the indexed vectors.

            ****k****int or None, optional
            :   Number of neighbours to return. Defaults to `config.top_k`.

        Returns:
        :   list of (str, float)
            :   `(doc_id, cosine_score)` pairs, best first. `doc_id` is the
                document’s `doc_id` attribute when present, else its stringified
                index. Empty if no dense index was built or the query is zero-norm.

        Raises:
        :   ValueError
            :   If **vector** dimension mismatches the index or is non-finite.

        Parameters:
        :   * ****vector**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]]

    search(**query**, **\***, **config=None**, **query\_embedding=None**, **filter=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_similarity/_similarity.py#L828)[#](#scikitplot.corpus.RetrievalIndex.search "Link to this definition")
    :   Search the index.

        Parameters:
        :   ****query****str
            :   Query text.

            ****config****RetrievalConfig or None, optional
            :   Override default config for this query.

            ****query\_embedding****array-like or None, optional
            :   Pre-computed query embedding. Required for SEMANTIC
                mode if no embedding engine is attached.

            ****filter****Filter, mapping or None, optional
            :   Restrict the search to documents this expression matches (R2-2):
                a [`Filter`](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus.Filter") or its JSON form
                ([`filter_from_dict`](scikitplot.corpus.filter_from_dict.html#scikitplot.corpus.filter_from_dict "scikitplot.corpus.filter_from_dict")). It is AND-ed with
                the index’s [`security_filter`](#scikitplot.corpus.RetrievalIndex.security_filter "scikitplot.corpus.RetrievalIndex.security_filter"), so it can narrow but never
                widen what a caller sees. Every leg applies it before ranking, so a
                filtered query returns the best `top_k` matching documents; each
                leg that ran reports its `filter_capability` (every operator
                `EMULATED`: evaluated in Python over the indexed documents).

        Returns:
        :   RetrievalResponse
            :   Hits sorted by descending score, plus a per-leg account of how the
                search went. The response iterates, indexes and lens like the list
                of hits it replaced, so `for hit in response` is unchanged; consult
                [`RetrievalResponse.status`](scikitplot.corpus.RetrievalResponse.html#scikitplot.corpus.RetrievalResponse.status "scikitplot.corpus.RetrievalResponse.status") to distinguish a complete result
                from a partial one.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****config**** ([**RetrievalConfig**](scikitplot.corpus.RetrievalConfig.html#scikitplot.corpus.RetrievalConfig "scikitplot.corpus._similarity._similarity.RetrievalConfig") **|** **None**)
            * ****query\_embedding**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**)
            * ****filter**** ([**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter") **|** [**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [**RetrievalResponse**](scikitplot.corpus.RetrievalResponse.html#scikitplot.corpus.RetrievalResponse "scikitplot.corpus._retrieval.RetrievalResponse")

        Notes

        ****Developer.**** Before this returned an envelope, a hybrid query without
        a query embedding silently dropped its dense leg and returned fused
        lexical-only results still labelled `match_mode="hybrid"` – fewer
        hits, every score halved by the missing `hybrid_alpha` contribution,
        and no signal (finding F-R09-01). That outcome is now `DEGRADED` with
        the dense leg marked `FAILED`.

    property security\_filter: [SecurityFilter](scikitplot.corpus.SecurityFilter.html#scikitplot.corpus.SecurityFilter "scikitplot.corpus._filters.SecurityFilter") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.RetrievalIndex.security_filter "Link to this definition")
    :   The scope every query is restricted to, or `None` (read-only).

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v1_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v1.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[Build a Multi-Source WHO Corpus](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

Build a Multi-Source WHO Corpus