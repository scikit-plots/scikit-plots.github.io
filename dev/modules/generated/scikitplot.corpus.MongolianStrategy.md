# MongolianStrategy[#](#mongolianstrategy "Link to this heading")

class scikitplot.corpus.MongolianStrategy[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_chunkers/_writing_system.py#L1235)[#](#scikitplot.corpus.MongolianStrategy "Link to this definition")
:   Traditional Mongolian segmentation strategy.

    Traditional Mongolian is stored left-to-right and rendered top-to-bottom.
    Word boundaries are marked by Unicode whitespace.

    Parameters:
    :   ****(none)****

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_chunkers/_writing_system.py#L1246)[#](#scikitplot.corpus.MongolianStrategy.segment "Link to this definition")
    :   Segment Mongolian **span** by whitespace.

        Parameters:
        :   ****span****ScriptSpan
            :   Mongolian script span.

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Word chunks (whitespace-delimited).

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]