# EthiopicStrategy[#](#ethiopicstrategy "Link to this heading")

class scikitplot.corpus.EthiopicStrategy[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_writing_system.py#L1127)[#](#scikitplot.corpus.EthiopicStrategy "Link to this definition")
:   Ethiopic (Amharic, Tigrinya) segmentation strategy.

    Sentence boundary: `።` (U+1362 Ethiopic Full Stop).
    Word boundary: Unicode whitespace.

    Parameters:
    :   ****(none)****

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_writing_system.py#L1140)[#](#scikitplot.corpus.EthiopicStrategy.segment "Link to this definition")
    :   Segment Ethiopic **span** by sentence or word.

        Parameters:
        :   ****span****ScriptSpan
            :   Ethiopic script span.

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Sentence or word chunks.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]