# FactoryCorpusBuilder[#](#factorycorpusbuilder "Link to this heading")

class scikitplot.corpus.FactoryCorpusBuilder(**config=None**, **\***, **factories=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1404)[#](#scikitplot.corpus.FactoryCorpusBuilder "Link to this definition")
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

    add(**sources**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1552)[#](#scikitplot.corpus.FactoryCorpusBuilder.add "Link to this definition")
    :   Add sources to existing corpus — delegates to inner builder.

        Parameters:
        :   * ****sources**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    build(**sources**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1548)[#](#scikitplot.corpus.FactoryCorpusBuilder.build "Link to this definition")
    :   Build corpus — delegates to inner builder with factory overrides.

        Parameters:
        :   * ****sources**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1596)[#](#scikitplot.corpus.FactoryCorpusBuilder.close "Link to this definition")
    :   Clean up temporary files.

        Return type:
        :   None

    export(**path**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1592)[#](#scikitplot.corpus.FactoryCorpusBuilder.export "Link to this definition")
    :   Export documents to file.

        Parameters:
        :   * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    search(**query**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1556)[#](#scikitplot.corpus.FactoryCorpusBuilder.search "Link to this definition")
    :   Search corpus — delegates to inner builder.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    to\_huggingface()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1580)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_huggingface "Link to this definition")
    :   Export as HuggingFace Dataset.

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    to\_jsonl()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1588)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_jsonl "Link to this definition")
    :   Export as JSONL lines.

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    to\_langchain()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1560)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_langchain "Link to this definition")
    :   Export as LangChain documents.

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    to\_langchain\_retriever()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1564)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_langchain_retriever "Link to this definition")
    :   Create LangChain retriever.

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    to\_langgraph\_state(**\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1568)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_langgraph_state "Link to this definition")
    :   Export as LangGraph state.

        Parameters:
        :   ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    to\_mcp\_resources(**\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1572)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_mcp_resources "Link to this definition")
    :   Export as MCP resources.

        Parameters:
        :   ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    to\_mcp\_tool\_result(**query**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1576)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_mcp_tool_result "Link to this definition")
    :   Search and format as MCP tool result.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    to\_rag\_tuples()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_custom_hooks.py#L1584)[#](#scikitplot.corpus.FactoryCorpusBuilder.to_rag_tuples "Link to this definition")
    :   Export as RAG tuples.

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")