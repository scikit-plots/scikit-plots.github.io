# JapaneseStrategy[#](#japanesestrategy "Link to this heading")

class scikitplot.corpus.JapaneseStrategy(**\***, **tagger\_args='-Owakati'**, **sudachi\_mode='C'**, **custom\_tokenizer\_key='japanese'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_chunkers/_writing_system.py#L575)[#](#scikitplot.corpus.JapaneseStrategy "Link to this definition")
:   Multi-tier Japanese segmentation strategy.

    Probe order at `__init__` time (first available wins, probed once):

    1. Custom tokenizer registered in `_TOKENIZER_REGISTRY`
       under key `"japanese"` — ****highest priority****.
    2. MeCab via `mecab-python3` (requires system MeCab binary).
    3. fugashi (pure-Python MeCab wrapper).
    4. SudachiPy (pure-Python).
    5. [`GraphemeClusterStrategy`](scikitplot.corpus.GraphemeClusterStrategy.html#scikitplot.corpus.GraphemeClusterStrategy "scikitplot.corpus.GraphemeClusterStrategy") — guaranteed fallback.

    Parameters:
    :   ****tagger\_args****str, optional
        :   Arguments forwarded to MeCab Tagger constructor. Default
            `"-Owakati"` (space-delimited output).

        ****sudachi\_mode****{“A”, “B”, “C”}, optional
        :   SudachiPy split mode. A = shortest, C = longest morphemes.
            Default `"C"`.

        ****custom\_tokenizer\_key****str, optional
        :   Key to look up in the custom tokenizer registry. Default
            `"japanese"`.

    Parameters:
    :   * ****tagger\_args**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****sudachi\_mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****custom\_tokenizer\_key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    ****Developer note:**** The probe chain runs exactly once at
    `__init__` time and caches the result in `self._impl`. Per-segment
    calls are an O(1) dispatch to the cached implementation.

    Examples

    Try it in your browser!
    ```
    >>> strategy = JapaneseStrategy()
    >>> # strategy._impl is set to whichever backend was found

    ```
    Go BackOpen In Tab

    segment(**span**, **config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_chunkers/_writing_system.py#L715)[#](#scikitplot.corpus.JapaneseStrategy.segment "Link to this definition")
    :   Segment Japanese **span** using the probed backend.

        Parameters:
        :   ****span****ScriptSpan
            :   Hiragana or Katakana script span.

            ****config****WritingSystemAdapterConfig
            :   Adapter configuration.

        Returns:
        :   list[Chunk]
            :   Non-empty list of morpheme/word chunks.

        Parameters:
        :   * ****span**** ([**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan"))
            * ****config**** ([**WritingSystemAdapterConfig**](scikitplot.corpus.WritingSystemAdapterConfig.html#scikitplot.corpus.WritingSystemAdapterConfig "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapterConfig"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]