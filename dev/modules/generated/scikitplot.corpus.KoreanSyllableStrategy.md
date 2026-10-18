# KoreanSyllableStrategy[#](#koreansyllablestrategy "Link to this heading")

class scikitplot.corpus.KoreanSyllableStrategy[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_chunkers/_writing_system.py#L820)[#](#scikitplot.corpus.KoreanSyllableStrategy "Link to this definition")
:   Space-delimited word segmentation for Korean Hangul.

    Korean uses spaces to delimit **eojeols** (spacing units). Each eojeol is
    kept as one token. When `config.unit == "grapheme_cluster"` the
    strategy delegates to [`GraphemeClusterStrategy`](scikitplot.corpus.GraphemeClusterStrategy.html#scikitplot.corpus.GraphemeClusterStrategy "scikitplot.corpus.GraphemeClusterStrategy").

    Optional: KSS (Korean Sentence Splitter) for `unit="sentence"`.

    Parameters:
    :   ****(none)****

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_chunkers/_writing_system.py#L855)[#](#scikitplot.corpus.KoreanSyllableStrategy.segment "Link to this definition")
    :   Segment Korean **span** by eojeol (space) or syllable.

        Parameters:
        :   ****span****ScriptSpan
            :   Hangul script span.

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Eojeol, sentence, or grapheme-cluster chunks.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]