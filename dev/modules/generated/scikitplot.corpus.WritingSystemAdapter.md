# WritingSystemAdapter[#](#writingsystemadapter "Link to this heading")

class scikitplot.corpus.WritingSystemAdapter(**config=None**, **\***, **extra\_strategies=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_writing_system.py#L1413)[#](#scikitplot.corpus.WritingSystemAdapter "Link to this definition")
:   Dispatch per-script segmentation to the correct strategy.

    Receives a list of [`ScriptSpan`](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus.ScriptSpan") objects (produced by
    [`ScriptSegmenter`](scikitplot.corpus.ScriptSegmenter.html#scikitplot.corpus.ScriptSegmenter "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSegmenter")) and routes each span to
    the matching [`SegmentationStrategy`](scikitplot.corpus.SegmentationStrategy.html#scikitplot.corpus.SegmentationStrategy "scikitplot.corpus.SegmentationStrategy").

    Strategy registry (priority):

    1. Custom strategy registered in
       `_TOKENIZER_REGISTRY` under the script
       value string (e.g. `"japanese"`, `"arabic"`).
    2. Built-in strategy for the detected [`ScriptType`](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType "scikitplot.corpus.ScriptType").
    3. [`GraphemeClusterStrategy`](scikitplot.corpus.GraphemeClusterStrategy.html#scikitplot.corpus.GraphemeClusterStrategy "scikitplot.corpus.GraphemeClusterStrategy") — unconditional fallback.

    Parameters:
    :   ****config****WritingSystemAdapterConfig or None, optional
        :   Adapter-level configuration. Default `None` →
            `WritingSystemAdapterConfig()` (word-level, no max size).

        ****extra\_strategies****dict[str, SegmentationStrategy] or None, optional
        :   Additional `{script_value: strategy}` mappings that override the
            built-in registry for this adapter instance only. Useful for
            testing or domain-specific customisation without touching the
            global registry.

    Parameters:
    :   * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus.WritingSystemAdapterConfig") **|** **None**)
        * ****extra\_strategies**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**SegmentationStrategy**](scikitplot.corpus.SegmentationStrategy.html#scikitplot.corpus.SegmentationStrategy "scikitplot.corpus.SegmentationStrategy")**]** **|** **None**)

    Notes

    ****User note:**** Use [`WritingSystemAdapter`](#scikitplot.corpus.WritingSystemAdapter "scikitplot.corpus.WritingSystemAdapter") as the `adapter`
    parameter of [`SemanticChunker`](scikitplot.corpus.SemanticChunker.html#scikitplot.corpus.SemanticChunker "scikitplot.corpus._chunkers._semantic.SemanticChunker") (Layer 3). You can
    also call it standalone:

    ```
    adapter = WritingSystemAdapter(WritingSystemAdapterConfig(unit="word"))
    spans = ScriptSegmenter().segment(text)
    chunks = adapter.adapt(spans)

    ```

    ****Developer note (Q3 compliance):**** Every strategy that cannot load
    its optional dependency logs a warning and falls back to
    [`GraphemeClusterStrategy`](scikitplot.corpus.GraphemeClusterStrategy.html#scikitplot.corpus.GraphemeClusterStrategy "scikitplot.corpus.GraphemeClusterStrategy"). This adapter additionally wraps
    every `strategy.segment()` call in a try/except so a bug in a
    custom strategy cannot crash the pipeline.

    Examples

    Try it in your browser!
    ```
    >>> adapter = WritingSystemAdapter()
    >>> spans = ScriptSegmenter().segment("Hello 世界")
    >>> chunks = adapter.adapt(spans)
    >>> [c.text for c in chunks]
    ['Hello', '世', '界']

    ```
    Go BackOpen In Tab

    adapt(**spans**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_writing_system.py#L1534)[#](#scikitplot.corpus.WritingSystemAdapter.adapt "Link to this definition")
    :   Segment **spans** using the per-script strategy registry.

        Parameters:
        :   ****spans****sequence of ScriptSpan
            :   Script spans from [`ScriptSegmenter`](scikitplot.corpus.ScriptSegmenter.html#scikitplot.corpus.ScriptSegmenter "scikitplot.corpus.ScriptSegmenter").

        Returns:
        :   list[Chunk]
            :   Flat, ordered list of all chunks across all spans.
                Always non-empty for non-empty input.

        Parameters:
        :   ****spans**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan")**]**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]

    adapt\_text(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_writing_system.py#L1595)[#](#scikitplot.corpus.WritingSystemAdapter.adapt_text "Link to this definition")
    :   Use convenience method: segment plain **text** end-to-end.

        Runs [`ScriptSegmenter`](scikitplot.corpus.ScriptSegmenter.html#scikitplot.corpus.ScriptSegmenter "scikitplot.corpus.ScriptSegmenter") internally, then calls [`adapt`](#scikitplot.corpus.WritingSystemAdapter.adapt "scikitplot.corpus.WritingSystemAdapter.adapt").

        Parameters:
        :   ****text****str
            :   NFC-normalised input text.

        Returns:
        :   list[Chunk]
            :   Flat ordered chunk list.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]