# GraphemeClusterStrategy[#](#graphemeclusterstrategy "Link to this heading")

class scikitplot.corpus.GraphemeClusterStrategy[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_chunkers/_writing_system.py#L174)[#](#scikitplot.corpus.GraphemeClusterStrategy "Link to this definition")
:   Grapheme-cluster-level fallback strategy for any script.

    Splits text into individual grapheme clusters (UAX #29 `\X`).
    When `unit="word"` the clusters are joined in runs separated by
    Unicode whitespace; when `unit="grapheme_cluster"` every cluster
    is its own chunk.

    This is the ****mandatory terminal fallback**** — it never depends on any
    optional library, so it always succeeds.

    Parameters:
    :   ****(none)****

    Notes

    ****Developer note:**** Used as the fallback by every strategy that cannot
    load its primary optional dependency. May also be used directly for
    EMOJI, SYMBOLIC, UNKNOWN, and MIXED script spans.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus._chunkers._custom_tokenizer import ScriptSpan, ScriptType
    >>> cfg = WritingSystemAdapterConfig(unit="grapheme_cluster")
    >>> strategy = GraphemeClusterStrategy()
    >>> span = ScriptSpan("abc", ScriptType.LATIN, "ltr", 0, 3)
    >>> [c.text for c in strategy.segment(span, cfg)]
    ['a', 'b', 'c']

    ```
    Go BackOpen In Tab

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_chunkers/_writing_system.py#L205)[#](#scikitplot.corpus.GraphemeClusterStrategy.segment "Link to this definition")
    :   Split **span** into grapheme-cluster or whitespace-word chunks.

        Parameters:
        :   ****span****ScriptSpan
            :   Script span to segment.

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Non-empty list; at minimum a single chunk with `span.text`.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]