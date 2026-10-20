# SegmentationStrategy[#](#segmentationstrategy "Link to this heading")

class scikitplot.corpus.SegmentationStrategy(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_writing_system.py#L98)[#](#scikitplot.corpus.SegmentationStrategy "Link to this definition")
:   Protocol for per-script text segmentation strategies.

    All implementations MUST be stateless with respect to [`segment`](#scikitplot.corpus.SegmentationStrategy.segment "scikitplot.corpus.SegmentationStrategy.segment")
    — only `__init__` may cause side effects (model loading, probe chain
    evaluation, etc.).

    Examples

    Try it in your browser!
    ```
    >>> class MyStrategy:
    ...     def segment(self, span, config):
    ...         return [Chunk(text=span.text, start_char=0, end_char=len(span.text))]
    >>> isinstance(MyStrategy(), SegmentationStrategy)
    True

    ```
    Go BackOpen In Tab

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_writing_system.py#L115)[#](#scikitplot.corpus.SegmentationStrategy.segment "Link to this definition")
    :   Segment **span** into [`Chunk`](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk") objects.

        Parameters:
        :   ****span****ScriptSpan
            :   A contiguous script span from [`ScriptSegmenter`](scikitplot.corpus.ScriptSegmenter.html#scikitplot.corpus.ScriptSegmenter "scikitplot.corpus.ScriptSegmenter").

            ****config****WritingSystemAdapterConfig
            :   Adapter-level configuration (max\_chunk\_size, overlap, unit …).

        Returns:
        :   list[Chunk]
            :   Non-empty list. MUST return at least one `Chunk` for any
                non-empty `span.text`.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]