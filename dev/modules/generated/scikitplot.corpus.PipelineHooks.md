# PipelineHooks[#](#pipelinehooks "Link to this heading")

class scikitplot.corpus.PipelineHooks(**pre\_read\_hook=None**, **post\_read\_hook=None**, **post\_filter\_hook=None**, **post\_embed\_hook=None**, **pre\_export\_hook=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_custom_hooks.py#L864)[#](#scikitplot.corpus.PipelineHooks "Link to this definition")
:   Lifecycle callbacks for [`HookableCorpusPipeline`](scikitplot.corpus.HookableCorpusPipeline.html#scikitplot.corpus.HookableCorpusPipeline "scikitplot.corpus.HookableCorpusPipeline").

    Every hook is optional (`None` = no-op). Hooks are called in the order
    listed here, at the pipeline stages indicated.

    Parameters:
    :   ****pre\_read\_hook****callable or None, optional
        :   Called ****before**** the reader iterates a source. Receives the
            source label string. Signature:

            ```
            def pre_read_hook(source: str) -> None: ...

            ```

        ****post\_read\_hook****callable or None, optional
        :   Called ****after**** all documents have been read (before embedding).
            Receives the source label and the collected document list.
            May return a modified document list or `None` (no modification).
            Signature:

            ```
            def post_read_hook(
                source: str,
                documents: list[CorpusDocument],
            ) -> list[CorpusDocument] | None: ...

            ```

        ****post\_filter\_hook****callable or None, optional
        :   Called after the built-in filter stage (inside the reader’s
            `get_documents()`). This hook runs ****per-document**** as a
            final inclusion gate — return `True` to keep, `False` to discard.
            Signature:

            ```
            def post_filter_hook(doc: CorpusDocument) -> bool: ...

            ```

        ****post\_embed\_hook****callable or None, optional
        :   Called ****after**** embedding is complete. Receives `(source, documents)`
            and may return a modified list or `None`.
            Signature:

            ```
            def post_embed_hook(
                source: str,
                documents: list[CorpusDocument],
            ) -> list[CorpusDocument] | None: ...

            ```

        ****pre\_export\_hook****callable or None, optional
        :   Called ****before**** exporting documents to disk. May return a
            modified document list or `None`.
            Signature:

            ```
            def pre_export_hook(
                source: str,
                documents: list[CorpusDocument],
            ) -> list[CorpusDocument] | None: ...

            ```

    Parameters:
    :   * ****pre\_read\_hook**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** **None****]** **|** **None**)
        * ****post\_read\_hook**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Any****]****]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Any****]** **|** **None****]** **|** **None**)
        * ****post\_filter\_hook**** (**Callable****[****[****Any****]****,** [**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")**]** **|** **None**)
        * ****post\_embed\_hook**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Any****]****]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Any****]** **|** **None****]** **|** **None**)
        * ****pre\_export\_hook**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Any****]****]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Any****]** **|** **None****]** **|** **None**)

    Notes

    ****User note:**** Hooks are called with minimal overhead — only non-`None`
    hooks incur a function call. Hook exceptions are caught and logged as
    warnings; they never abort the pipeline run.

    Examples

    Try it in your browser!

    Log progress and filter by source-type in post\_read:

    ```
    def log_read(source, docs):
        print(f"{source}: {len(docs)} documents read")

    def keep_research(source, docs):
        from scikitplot.corpus._schema import SourceType

        return [d for d in docs if d.source_type == SourceType.RESEARCH]

    hooks = PipelineHooks(
        pre_read_hook=lambda src: print(f"Starting: {src}"),
        post_read_hook=lambda src, docs: (
            log_read(src, docs) or keep_research(src, docs)
        ),
    )
    pipeline = HookableCorpusPipeline(hooks=hooks)

    ```
    Go BackOpen In Tab

    post\_embed\_hook: Callable[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[Any]], [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[Any] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.PipelineHooks.post_embed_hook "Link to this definition")

    post\_filter\_hook: Callable[[Any], [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.PipelineHooks.post_filter_hook "Link to this definition")

    post\_read\_hook: Callable[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[Any]], [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[Any] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.PipelineHooks.post_read_hook "Link to this definition")

    pre\_export\_hook: Callable[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[Any]], [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[Any] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.PipelineHooks.pre_export_hook "Link to this definition")

    pre\_read\_hook: Callable[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")], [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.PipelineHooks.pre_read_hook "Link to this definition")