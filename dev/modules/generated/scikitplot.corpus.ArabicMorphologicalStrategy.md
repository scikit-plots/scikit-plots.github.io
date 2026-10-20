# ArabicMorphologicalStrategy[#](#arabicmorphologicalstrategy "Link to this heading")

class scikitplot.corpus.ArabicMorphologicalStrategy[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_writing_system.py#L409)[#](#scikitplot.corpus.ArabicMorphologicalStrategy "Link to this definition")
:   Arabic and Hebrew morphological segmentation strategy.

    Primary: camel-tools (`pip install camel-tools`) for Arabic.
    Fallback: whitespace-word split (spaCy tokenisation not loaded here
    to keep the dependency chain minimal).

    For Hebrew the primary backend is `camel-tools` if the Hebrew
    lexicon is available; otherwise whitespace split.

    Parameters:
    :   ****(none)****

    Notes

    ****Developer note:**** camel-tools contains a MorphAnalyzer that also
    covers Ottoman Turkish. Load is deferred to first [`segment`](#scikitplot.corpus.ArabicMorphologicalStrategy.segment "scikitplot.corpus.ArabicMorphologicalStrategy.segment")
    call to keep `__init__` fast.

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_writing_system.py#L450)[#](#scikitplot.corpus.ArabicMorphologicalStrategy.segment "Link to this definition")
    :   Segment Arabic/Hebrew **span** morphologically.

        Parameters:
        :   ****span****ScriptSpan
            :   Script span (Arabic or Hebrew).

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Morpheme or word chunks.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]