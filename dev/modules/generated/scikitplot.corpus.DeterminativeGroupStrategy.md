# DeterminativeGroupStrategy[#](#determinativegroupstrategy "Link to this heading")

class scikitplot.corpus.DeterminativeGroupStrategy[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_writing_system.py#L1323)[#](#scikitplot.corpus.DeterminativeGroupStrategy "Link to this definition")
:   Egyptian Hieroglyph segmentation into determinative groups.

    Operates on Unicode-digitised hieroglyphic text (U+13000-U+1342F).
    A determinative group is a cluster of sign codepoints terminated by
    U+13430 (EGYPTIAN HIEROGLYPH VERTICAL JOINER) or U+13432
    (EGYPTIAN HIEROGLYPH INSERT AT MIDDLE).

    For OCR output, attach the OCR pre-processor hook before calling this
    strategy via [`WritingSystemAdapter`](scikitplot.corpus.WritingSystemAdapter.html#scikitplot.corpus.WritingSystemAdapter "scikitplot.corpus.WritingSystemAdapter").

    Parameters:
    :   ****(none)****

    Notes

    ****Developer note:**** This strategy populates `chunk.metadata` with
    `{"determinative": "<sign>", "category": "hieroglyph"}` for each
    group, enabling downstream population of
    `CorpusDocument.determinative_groups`.

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_writing_system.py#L1348)[#](#scikitplot.corpus.DeterminativeGroupStrategy.segment "Link to this definition")
    :   Segment hieroglyphic **span** into determinative groups.

        Parameters:
        :   ****span****ScriptSpan
            :   Egyptian Hieroglyphs script span.

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Determinative-group or grapheme-cluster chunks.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]