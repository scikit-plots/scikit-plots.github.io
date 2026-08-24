# HookableCorpusPipeline[#](#hookablecorpuspipeline "Link to this heading")

class scikitplot.corpus.HookableCorpusPipeline(**hooks=None**, **chunker=None**, **filter\_=None**, **embedding\_engine=None**, **output\_path=None**, **format=None**, **default\_language=None**, **progress\_callback=None**, **reader\_kwargs=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_custom_hooks.py#L977)[#](#scikitplot.corpus.HookableCorpusPipeline "Link to this definition")
:   [`CorpusPipeline`](scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus._pipeline.CorpusPipeline") extended with
    per-stage lifecycle hooks.

    Accepts all the same constructor parameters as
    [`CorpusPipeline`](scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus._pipeline.CorpusPipeline") plus a
    [`PipelineHooks`](scikitplot.corpus.PipelineHooks.html#scikitplot.corpus.PipelineHooks "scikitplot.corpus.PipelineHooks") instance. Drop-in replacement — the public
    interface (`run`, `run_batch`, `run_url`) is identical.

    Parameters:
    :   ****hooks****PipelineHooks or None, optional
        :   Lifecycle callbacks. `None` disables all hooks (identical
            behaviour to bare [`CorpusPipeline`](scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus._pipeline.CorpusPipeline")).

        ****chunker****ChunkerBase or None, optional
        :   Chunker to inject into every reader.

        ****filter\_****FilterBase or None, optional
        :   Filter applied after chunking.

        ****embedding\_engine****EmbeddingEngine or None, optional
        :   Embedding backend.

        ****output\_path****pathlib.Path or None, optional
        :   Output directory for exports.

        ****format****ExportFormat or None, optional
        :   Default export format.

        ****default\_language****str or None, optional
        :   ISO 639-1 language code.

        ****progress\_callback****callable or None, optional
        :   Progress notification callback.

        ****reader\_kwargs****dict or None, optional
        :   Extra kwargs forwarded to each reader.

    Parameters:
    :   * ****hooks**** ([**PipelineHooks**](scikitplot.corpus.PipelineHooks.html#scikitplot.corpus.PipelineHooks "scikitplot.corpus.PipelineHooks") **|** **None**)
        * ****chunker**** (**Any** **|** **None**)
        * ****filter\_**** (**Any** **|** **None**)
        * ****embedding\_engine**** (**Any** **|** **None**)
        * ****output\_path**** (**Any** **|** **None**)
        * ****format**** (**Any** **|** **None**)
        * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****progress\_callback**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]****,** **None****]** **|** **None**)
        * ****reader\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]** **|** **None**)

    Notes

    ****User note:**** All hooks are called with a `try/except` guard — a
    hook that raises does not abort the pipeline.

    ****Developer note:**** Hook injection points:

    * `pre_read_hook` → called at the start of `_run_source`.
    * `post_read_hook` → called after `_collect_documents`; may
      return a modified list (`None` return = unchanged).
    * `post_filter_hook` → installed as an additional post-filter
      on the [`FilterBase`](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") passed to
      the reader via a `_CompositeHookFilter` wrapper.
    * `post_embed_hook` → called after `_embed_documents`.
    * `pre_export_hook` → called inside `_export` before writing.

    Examples

    Try it in your browser!
    ```
    from scikitplot.corpus._custom_hooks import (
        HookableCorpusPipeline,
        PipelineHooks,
    )

    hooks = PipelineHooks(
        pre_read_hook=lambda src: logger.info("Reading: %s", src),
        post_read_hook=lambda src, docs: [d for d in docs if len(d.text) > 50],
    )
    pipeline = HookableCorpusPipeline(hooks=hooks, output_path=Path("out/"))
    result = pipeline.run(Path("corpus.pdf"))

    ```
    Go BackOpen In Tab

    run(**input\_path**, **\***, **output\_path=None**, **format=None**, **filename\_override=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_custom_hooks.py#L1120)[#](#scikitplot.corpus.HookableCorpusPipeline.run "Link to this definition")
    :   Process a single source with lifecycle hooks applied.

        Parameters:
        :   ****input\_path****str or pathlib.Path
            :   Path or URL.

            ****output\_path****pathlib.Path or None, optional
            :   output\_path.

            ****format****ExportFormat or None, optional
            :   export format.

            ****filename\_override****str or None, optional
            :   filename\_override.

        Returns:
        :   PipelineResult

        Parameters:
        :   * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**pathlib.Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
            * ****output\_path**** (**Any** **|** **None**)
            * ****format**** (**Any** **|** **None**)
            * ****filename\_override**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   Any

    run\_batch(**input\_files**, **\***, **stop\_on\_error=False**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_custom_hooks.py#L1166)[#](#scikitplot.corpus.HookableCorpusPipeline.run_batch "Link to this definition")
    :   Process multiple sources with hooks applied to each.

        Parameters:
        :   ****input\_files****list[pathlib.Path or str]
            :   input\_files.

            ****stop\_on\_error****bool, optional
            :   stop\_on\_error.

            ****format****ExportFormat or None, optional
            :   export format.

        Returns:
        :   list[PipelineResult]

        Parameters:
        :   * ****input\_files**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Any****]**)
            * ****stop\_on\_error**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****format**** (**Any** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[Any]

    run\_url(**url**, **\***, **output\_path=None**, **format=None**, **stop\_on\_error=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_custom_hooks.py#L1203)[#](#scikitplot.corpus.HookableCorpusPipeline.run_url "Link to this definition")
    :   Process one URL or a list of URLs with hooks applied.

        Parameters:
        :   ****url****str or list[str]
            :   url.

            ****output\_path****pathlib.Path or None, optional
            :   output\_path.

            ****format****ExportFormat or None, optional
            :   export format.

            ****stop\_on\_error****bool, optional
            :   stop\_on\_error.

        Returns:
        :   PipelineResult or list[PipelineResult]

        Parameters:
        :   * ****url**** (**Any**)
            * ****output\_path**** (**Any** **|** **None**)
            * ****format**** (**Any** **|** **None**)
            * ****stop\_on\_error**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   Any