# WritingSystemAdapterConfig[#](#writingsystemadapterconfig "Link to this heading")

class scikitplot.corpus.WritingSystemAdapterConfig(**unit='word'**, **max\_chunk\_size=None**, **overlap=0**, **strip\_whitespace=True**, **min\_chunk\_length=1**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_chunkers/_writing_system.py#L142)[#](#scikitplot.corpus.WritingSystemAdapterConfig "Link to this definition")
:   Configuration for [`WritingSystemAdapter`](scikitplot.corpus.WritingSystemAdapter.html#scikitplot.corpus.WritingSystemAdapter "scikitplot.corpus.WritingSystemAdapter").

    Parameters:
    :   ****unit****{“word”, “sentence”, “grapheme\_cluster”}, optional
        :   Segmentation granularity requested from each strategy.
            Default `"word"`.

        ****max\_chunk\_size****int or None, optional
        :   Hard cap on chunk length in grapheme clusters. Chunks exceeding
            this limit are split further by the strategy. Default `None`.

        ****overlap****int, optional
        :   Number of chunks of overlap between adjacent chunks. Default 0.

        ****strip\_whitespace****bool, optional
        :   Strip leading/trailing whitespace from each chunk. Default `True`.

        ****min\_chunk\_length****int, optional
        :   Discard chunks shorter than this grapheme count. Default 1.

    Parameters:
    :   * ****unit**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****max\_chunk\_size**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****overlap**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****strip\_whitespace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****min\_chunk\_length**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    max\_chunk\_size: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.WritingSystemAdapterConfig.max_chunk_size "Link to this definition")

    min\_chunk\_length: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1[#](#scikitplot.corpus.WritingSystemAdapterConfig.min_chunk_length "Link to this definition")

    overlap: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.WritingSystemAdapterConfig.overlap "Link to this definition")

    strip\_whitespace: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.WritingSystemAdapterConfig.strip_whitespace "Link to this definition")

    unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'word'[#](#scikitplot.corpus.WritingSystemAdapterConfig.unit "Link to this definition")