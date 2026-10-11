# TibetanStrategy[#](#tibetanstrategy "Link to this heading")

class scikitplot.corpus.TibetanStrategy[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_writing_system.py#L1181)[#](#scikitplot.corpus.TibetanStrategy "Link to this definition")
:   Tibetan segmentation strategy.

    Word boundary: tsek `·` (U+0F0B Tibetan Mark Intersyllabic Tsheg).
    Sentence boundary: shad `།` (U+0F0D Tibetan Mark Shad).

    Parameters:
    :   ****(none)****

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_writing_system.py#L1195)[#](#scikitplot.corpus.TibetanStrategy.segment "Link to this definition")
    :   Segment Tibetan **span** by tsek (word) or shad (sentence).

        Parameters:
        :   ****span****ScriptSpan
            :   Tibetan script span.

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Syllable, word, or sentence chunks.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]