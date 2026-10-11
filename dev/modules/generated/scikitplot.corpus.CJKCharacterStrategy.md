# CJKCharacterStrategy[#](#cjkcharacterstrategy "Link to this heading")

class scikitplot.corpus.CJKCharacterStrategy(**\***, **prefer\_jieba=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_writing_system.py#L483)[#](#scikitplot.corpus.CJKCharacterStrategy "Link to this definition")
:   Character-level segmentation for Han (Chinese logograph) script.

    Each Han ideograph is its own token. Non-Han runs (Latin digits,
    punctuation) are kept as whitespace-split words.

    Optional jieba / pkuseg word segmentation is attempted when
    `config.unit == "word"` and the library is available.

    Parameters:
    :   ****prefer\_jieba****bool, optional
        :   Attempt jieba segmentation for word-level chunks. Default `True`.

    Parameters:
    :   ****prefer\_jieba**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_writing_system.py#L519)[#](#scikitplot.corpus.CJKCharacterStrategy.segment "Link to this definition")
    :   Segment Han **span** at character or word level.

        Parameters:
        :   ****span****ScriptSpan
            :   Han script span.

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Character or jieba-word chunks.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]