# DictionaryBoundaryStrategy[#](#dictionaryboundarystrategy "Link to this heading")

class scikitplot.corpus.DictionaryBoundaryStrategy[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_writing_system.py#L953)[#](#scikitplot.corpus.DictionaryBoundaryStrategy "Link to this definition")
:   Dictionary-based word boundary detection for no-space scripts.

    Covers:

    * ****Thai**** — PyThaiNLP `newmm` engine (`pip install pythainlp`).
    * ****Lao**** — PyThaiNLP `lao` engine.
    * ****Khmer**** — khmer-nltk (`pip install khmer-nltk`).
    * ****Han (Chinese)**** — jieba (`pip install jieba`).

    A custom callable registered under
    `"<script_value>_boundary"` (e.g. `"thai_boundary"`) in the
    tokenizer registry takes priority over the probe chain.

    Parameters:
    :   ****(none)****

    Notes

    ****User note (Q3):**** Per architecture invariant Q3, all known languages
    are attempted. If no dictionary library is available for the detected
    script, a `logger.warning` is emitted and
    [`GraphemeClusterStrategy`](scikitplot.corpus.GraphemeClusterStrategy.html#scikitplot.corpus.GraphemeClusterStrategy "scikitplot.corpus.GraphemeClusterStrategy") is used.

    ****Developer note:**** Thai has no sentence-terminal character; sentence
    splitting for Thai is handled here via PyThaiNLP `sent_tokenize`.

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_writing_system.py#L994)[#](#scikitplot.corpus.DictionaryBoundaryStrategy.segment "Link to this definition")
    :   Segment no-space **span** using dictionary lookup.

        Parameters:
        :   ****span****ScriptSpan
            :   Thai, Lao, Khmer, or Han script span.

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Dictionary-word or grapheme-cluster chunks.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]