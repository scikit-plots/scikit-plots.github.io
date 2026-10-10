# IndicAksharaStrategy[#](#indicaksharastrategy "Link to this heading")

class scikitplot.corpus.IndicAksharaStrategy[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_chunkers/_writing_system.py#L868)[#](#scikitplot.corpus.IndicAksharaStrategy "Link to this definition")
:   Grapheme-cluster segmentation for Indic scripts.

    Devanagari, Tamil, Telugu, Kannada, Malayalam, Sinhala, and other Indic
    scripts form **aksharas** (syllabic units) that may span multiple codepoints.
    Correct segmentation REQUIRES grapheme-cluster iteration (`\X`).

    Parameters:
    :   ****(none)****

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_chunkers/_writing_system.py#L882)[#](#scikitplot.corpus.IndicAksharaStrategy.segment "Link to this definition")
    :   Segment Indic **span** at grapheme-cluster (aksara) granularity.

        Parameters:
        :   ****span****ScriptSpan
            :   Devanagari or other Indic script span.

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Grapheme-cluster or whitespace-word chunks.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]