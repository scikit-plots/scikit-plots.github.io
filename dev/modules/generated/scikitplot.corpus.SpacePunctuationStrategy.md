# SpacePunctuationStrategy[#](#spacepunctuationstrategy "Link to this heading")

class scikitplot.corpus.SpacePunctuationStrategy[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_writing_system.py#L322)[#](#scikitplot.corpus.SpacePunctuationStrategy "Link to this definition")
:   Whitespace-and-punctuation segmentation for space-delimited scripts.

    Covers: Latin, Cyrillic, Greek, Armenian, Georgian, Ethiopic, and any
    other script where words are delimited by Unicode whitespace.

    Sentence-boundary splitting is delegated to
    [`SentenceChunker`](scikitplot.corpus.SentenceChunker.html#scikitplot.corpus.SentenceChunker "scikitplot.corpus._chunkers._sentence.SentenceChunker") (REGEX backend) when
    `config.unit == "sentence"`.

    Parameters:
    :   ****(none)****

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_writing_system.py#L337)[#](#scikitplot.corpus.SpacePunctuationStrategy.segment "Link to this definition")
    :   Segment **span** by whitespace (words) or sentence boundary (sentences).

        Parameters:
        :   ****span****ScriptSpan
            :   Script span to segment.

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Non-empty list of word or sentence chunks.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]