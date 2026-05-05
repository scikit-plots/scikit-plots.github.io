# CorpusBuilder[#](#corpusbuilder "Link to this heading")

class scikitplot.corpus.CorpusBuilder(**config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L386)[#](#scikitplot.corpus.CorpusBuilder "Link to this definition")
:   Unified corpus builder — end-to-end pipeline orchestrator.

    Parameters:
    :   ****config****BuilderConfig or None, optional
        :   Pipeline configuration. `None` uses defaults.

    Parameters:
    :   ****config**** ([**BuilderConfig**](scikitplot.corpus.BuilderConfig.html#scikitplot.corpus.BuilderConfig "scikitplot.corpus.BuilderConfig") **|** **None**)

    > **See also**
    > [`scikitplot.corpus._pipeline.CorpusPipeline`](scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus._pipeline.CorpusPipeline")
    :   Lower-level pipeline (used internally by the builder).

    `scikitplot.corpus._adapters`
    :   Conversion functions for downstream consumers.

    `scikitplot.corpus._similarity.SimilarityIndex`
    :   Search engine.

    Notes

    ****User note:**** Typical usage:

    ```
    from scikitplot.corpus import CorpusBuilder, BuilderConfig

    # Simple: process a directory of PDFs
    builder = CorpusBuilder()
    result = builder.build("./papers/")

    # Full pipeline: chunk → normalise → enrich → embed → index
    config = BuilderConfig(
        chunker="paragraph",
        normalize=True,
        enrich=True,
        embed=True,
        build_index=True,
        collection_id="shakespeare-corpus",
    )
    builder = CorpusBuilder(config)
    result = builder.build(["hamlet.txt", "othello.txt"])

    # Search
    results = builder.search("To be or not to be")

    # Export to LangChain
    lc_docs = builder.to_langchain()

    # Export to MCP
    mcp_result = builder.to_mcp_tool_result("death soliloquy")

    ```

    ****Developer note:**** The builder is the single orchestration
    point. It lazily creates component instances on first use
    and caches them. Each `build()` call produces an independent
    `BuildResult`.

    Examples

    Try it in your browser!
    ```
    >>> builder = CorpusBuilder(BuilderConfig(embed=True))
    >>> result = builder.build("./data/books/")
    >>> print(result.summary())
    >>> lc_docs = builder.to_langchain()

    ```
    Go BackOpen In Tab

    add(**input\_path**, **\***, **source\_title=None**, **source\_author=None**, **source\_type=None**, **collection\_id=None**, **rebuild\_index=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L706)[#](#scikitplot.corpus.CorpusBuilder.add "Link to this definition")
    :   Add sources to an existing corpus without re-processing.

        Incrementally ingests new sources and appends their documents to
        the existing [`BuildResult`](scikitplot.corpus.BuildResult.html#scikitplot.corpus.BuildResult "scikitplot.corpus.BuildResult"). Optionally rebuilds the
        similarity index to include the new documents.

        Parameters:
        :   ****input\_path****str, Path, or Sequence[str | Path]
            :   File path(s), directory path(s), or URL(s) to add.

            ****source\_title****str or None, optional
            :   Override title for new sources.

            ****source\_author****str or None, optional
            :   Override author for new sources.

            ****source\_type****str or None, optional
            :   Override `source_type` for new sources (e.g. `"audio"`).
                When `None` the type is inferred from each file extension.
                Default: `None`.

            ****collection\_id****str or None, optional
            :   Override collection id for new sources.

            ****rebuild\_index****bool, optional
            :   When `True` and `config.build_index` is enabled,
                rebuild the similarity index with all documents (existing +
                new). Default: `True`.

        Returns:
        :   BuildResult
            :   The updated result containing all documents.

        Raises:
        :   RuntimeError
            :   If [`build`](#scikitplot.corpus.CorpusBuilder.build "scikitplot.corpus.CorpusBuilder.build") has not been called yet.

            ValueError
            :   If no valid sources are found.

        Parameters:
        :   * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **Path** **|** **Sequence****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **Path****]**)
            * ****source\_title**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_author**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_type**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****collection\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****rebuild\_index**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [BuildResult](scikitplot.corpus.BuildResult.html#scikitplot.corpus.BuildResult "scikitplot.corpus.BuildResult")

        Notes

        ****User note:**** Use this to extend a corpus after the initial
        `build()`:

        ```
        builder = CorpusBuilder(config)
        result = builder.build("./initial_data/")
        result = builder.add("./new_data/")
        result = builder.add("https://example.com/article")

        ```

        ****Developer note:**** Normalisation, enrichment, and embedding
        are applied to the new documents only. The index is rebuilt
        from scratch over all documents because incremental index
        updates are not supported by all backends.

    build(**input\_path**, **\***, **source\_title=None**, **source\_author=None**, **collection\_id=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L543)[#](#scikitplot.corpus.CorpusBuilder.build "Link to this definition")
    :   Build a corpus from one or more sources.

        Parameters:
        :   ****input\_path****str, Path, or Sequence[str | Path]
            :   File path(s), directory path(s), or URL(s). Accepts:

                * A single file path: `"hamlet.txt"`
                * A directory: `"./papers/"` (recursive)
                * A URL: `"https://example.com/article"`
                * A list of any mix: `["a.pdf", "b.mp4", "https://..."]`

            ****source\_title****str or None, optional
            :   Override `config.source_title` for this build.

            ****source\_author****str or None, optional
            :   Override `config.source_author`.

            ****collection\_id****str or None, optional
            :   Override `config.collection_id`.

        Returns:
        :   BuildResult
            :   The build result with documents, counts, and index.

        Raises:
        :   ValueError
            :   If no valid input\_path sources are found.

        Parameters:
        :   * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **Path** **|** **Sequence****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **Path****]**)
            * ****source\_title**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_author**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****collection\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   [BuildResult](scikitplot.corpus.BuildResult.html#scikitplot.corpus.BuildResult "scikitplot.corpus.BuildResult")

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L511)[#](#scikitplot.corpus.CorpusBuilder.close "Link to this definition")
    :   Clean up temporary files created during downloads/extraction.

        Notes

        Safe to call multiple times. After calling, the builder can
        still be used — a new temp directory will be created on next
        download.

        Return type:
        :   None

    export(**path**, **\***, **format='parquet'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L1071)[#](#scikitplot.corpus.CorpusBuilder.export "Link to this definition")
    :   Export documents to a file.

        Parameters:
        :   ****path****str or Path
            :   Output file path.

            ****format****str, optional
            :   `"csv"`, `"parquet"`, `"jsonl"`, `"json"`,
                `"pickle"`.

            ****\*\*kwargs****
            :   Additional kwargs for the export function.

        Returns:
        :   Path
            :   The output file path.

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **Path**)
            * ****format**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****kwargs**** (**Any**)

        Return type:
        :   Path

    search(**query**, **\***, **top\_k=10**, **match\_mode='hybrid'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L838)[#](#scikitplot.corpus.CorpusBuilder.search "Link to this definition")
    :   Search the built corpus.

        Parameters:
        :   ****query****str
            :   Natural language query.

            ****top\_k****int, optional
            :   Maximum results.

            ****match\_mode****str, optional
            :   `"strict"`, `"keyword"`, `"semantic"`, or
                `"hybrid"`.

            ****\*\*kwargs****
            :   Additional `SearchConfig` parameters.

        Returns:
        :   list[SearchResult]
            :   Ranked results.

        Raises:
        :   RuntimeError
            :   If no index has been built.

            RuntimeError
            :   If `match_mode` is `"semantic"` or `"hybrid"` and
                no embedding engine is configured.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****top\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****match\_mode**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****kwargs**** (**Any**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[Any]

    to\_huggingface()[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L1038)[#](#scikitplot.corpus.CorpusBuilder.to_huggingface "Link to this definition")
    :   Export as HuggingFace Dataset.

        Returns:
        :   datasets.Dataset or dict[str, list]

        Return type:
        :   Any

    to\_jsonl()[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L1060)[#](#scikitplot.corpus.CorpusBuilder.to_jsonl "Link to this definition")
    :   Export as JSONL lines.

        Yields:
        :   str

        Return type:
        :   Iterator[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    to\_langchain()[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L911)[#](#scikitplot.corpus.CorpusBuilder.to_langchain "Link to this definition")
    :   Export documents as LangChain `Document` objects.

        Returns:
        :   list[langchain\_core.documents.Document] or list[dict]

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[Any]

    to\_langchain\_retriever()[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L1017)[#](#scikitplot.corpus.CorpusBuilder.to_langchain_retriever "Link to this definition")
    :   Create a LangChain-compatible retriever.

        Returns:
        :   LangChainCorpusRetriever

        Return type:
        :   Any

    to\_langgraph\_state(**query=''**, **match\_mode=''**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L922)[#](#scikitplot.corpus.CorpusBuilder.to_langgraph_state "Link to this definition")
    :   Export as LangGraph-compatible state dict.

        Returns:
        :   dict[str, Any]

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****match\_mode**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any]

    to\_mcp\_resources(**uri\_prefix='corpus://'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L941)[#](#scikitplot.corpus.CorpusBuilder.to_mcp_resources "Link to this definition")
    :   Export as MCP resources.

        Returns:
        :   list[dict[str, Any]]

        Parameters:
        :   ****uri\_prefix**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any]]

    to\_mcp\_server(**server\_name='corpus-search'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L990)[#](#scikitplot.corpus.CorpusBuilder.to_mcp_server "Link to this definition")
    :   Create an MCP server adapter.

        Parameters:
        :   ****server\_name****str, optional
            :   MCP server name.

        Returns:
        :   MCPCorpusServer

        Parameters:
        :   ****server\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   Any

    to\_mcp\_tool\_result(**query**, **\***, **top\_k=10**, **match\_mode='hybrid'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L958)[#](#scikitplot.corpus.CorpusBuilder.to_mcp_tool_result "Link to this definition")
    :   Search and format result as MCP tool response.

        Parameters:
        :   ****query****str
            :   Search query.

            ****top\_k****int, optional
            :   Maximum results.

            ****match\_mode****str, optional
            :   Match mode.

        Returns:
        :   dict[str, Any]
            :   MCP `tools/call` response.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****top\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****match\_mode**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any]

    to\_rag\_tuples()[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_corpus_builder.py#L1049)[#](#scikitplot.corpus.CorpusBuilder.to_rag_tuples "Link to this definition")
    :   Export as `(text, metadata, embedding)` tuples.

        Returns:
        :   list[tuple[str, dict, Any]]

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any], Any]]