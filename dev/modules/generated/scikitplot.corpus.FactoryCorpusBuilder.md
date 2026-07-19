# FactoryCorpusBuilder[#](#factorycorpusbuilder "Link to this heading")

class scikitplot.corpus.FactoryCorpusBuilder(**config=None**, **\***, **factories=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1437)[#](#scikitplot.corpus.FactoryCorpusBuilder "Link to this definition")
:   [`CorpusBuilder`](scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus._corpus_builder.CorpusBuilder") extended with
    pluggable component factories.

    All public methods (`build`, `add`, `search`, `to_langchain`,
    etc.) are available through delegation to the wrapped
    [`CorpusBuilder`](scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus._corpus_builder.CorpusBuilder"). When a
    factory is provided for a given component, it replaces the corresponding
    lazy-init method.

    Parameters:
    :   ****config****BuilderConfig or None, optional
        :   Pipeline configuration. `None` uses defaults.

        ****factories****BuilderFactories or None, optional
        :   Component factory callables. `None` disables all overrides.

    Parameters:
    :   * ****config**** (**Any** **|** **None**)
        * ****factories**** ([**BuilderFactories**](scikitplot.corpus.BuilderFactories.html#scikitplot.corpus.BuilderFactories "scikitplot.corpus.BuilderFactories") **|** **None**)

    Notes

    ****User note:**** Use [`FactoryCorpusBuilder`](#scikitplot.corpus.FactoryCorpusBuilder "scikitplot.corpus.FactoryCorpusBuilder") when you need to
    inject components that cannot be described by configuration alone —
    custom readers with per-source state, enrichers backed by remote APIs,
    embedding engines with non-standard initialisation, etc.

    ****Developer note:**** Factory injection is performed by overriding the
    private `_get_*` lazy-init methods inherited from
    [`CorpusBuilder`](scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus._corpus_builder.CorpusBuilder").

    Examples

    Try it in your browser!

    Inject a custom embedding engine factory:

    ```
    def my_embed_factory():
        return MyEmbeddingEngine(model="custom-embedder-v2")

    factories = BuilderFactories(embedding_engine_factory=my_embed_factory)
    builder = FactoryCorpusBuilder(
        config=BuilderConfig(embed=True, build_index=True),
        factories=factories,
    )
    result = builder.build("./papers/")
    results = builder.search("attention mechanism")

    ```
    Go BackOpen In Tab

    add(**input\_path**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1587)[#](#scikitplot.corpus.FactoryCorpusBuilder.add "Link to this definition")
    :   Add sources to existing corpus — delegates to inner builder.

        Parameters:
        :   * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **Path** **|** **Sequence****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **Path****]**)
            * ****kwargs**** (**Any**)

        Return type:
        :   Any

    build(**input\_path**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1581)[#](#scikitplot.corpus.FactoryCorpusBuilder.build "Link to this definition")
    :   Build corpus — delegates to inner builder with factory overrides.

        Parameters:
        :   * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **Path** **|** **Sequence****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **Path****]**)
            * ****kwargs**** (**Any**)

        Return type:
        :   Any

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1631)[#](#scikitplot.corpus.FactoryCorpusBuilder.close "Link to this definition")
    :   Clean up temporary files.

        Return type:
        :   None

    export(**path**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1627)[#](#scikitplot.corpus.FactoryCorpusBuilder.export "Link to this definition")
    :   Export documents to file.

        Parameters:
        :   * ****path**** (**Any**)
            * ****kwargs**** (**Any**)

        Return type:
        :   Any

    search(**query**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1591)[#](#scikitplot.corpus.FactoryCorpusBuilder.search "Link to this definition")
    :   Search corpus — delegates to inner builder.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****kwargs**** (**Any**)

        Return type:
        :   Any

    to\_huggingface()[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1615)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_huggingface "Link to this definition")
    :   Export as HuggingFace Dataset.

        Return type:
        :   Any

    to\_jsonl()[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1623)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_jsonl "Link to this definition")
    :   Export as JSONL lines.

        Return type:
        :   Any

    to\_langchain()[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1595)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_langchain "Link to this definition")
    :   Export as LangChain documents.

        Return type:
        :   Any

    to\_langchain\_retriever()[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1599)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_langchain_retriever "Link to this definition")
    :   Create LangChain retriever.

        Return type:
        :   Any

    to\_langgraph\_state(**\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1603)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_langgraph_state "Link to this definition")
    :   Export as LangGraph state.

        Parameters:
        :   ****kwargs**** (**Any**)

        Return type:
        :   Any

    to\_mcp\_resources(**\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1607)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_mcp_resources "Link to this definition")
    :   Export as MCP resources.

        Parameters:
        :   ****kwargs**** (**Any**)

        Return type:
        :   Any

    to\_mcp\_tool\_result(**query**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1611)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_mcp_tool_result "Link to this definition")
    :   Search and format as MCP tool result.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****kwargs**** (**Any**)

        Return type:
        :   Any

    to\_rag\_tuples()[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_custom_hooks.py#L1619)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_rag_tuples "Link to this definition")
    :   Export as RAG tuples.

        Return type:
        :   Any