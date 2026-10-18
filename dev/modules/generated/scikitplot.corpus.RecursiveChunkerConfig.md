# RecursiveChunkerConfig[#](#recursivechunkerconfig "Link to this heading")

class scikitplot.corpus.RecursiveChunkerConfig(**chunk\_size=1000**, **chunk\_overlap=0**, **separators=('\n\n', '\n', '. ', ' ', '')**, **strip\_whitespace=True**, **min\_length=1**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_chunkers/_recursive.py#L288)[#](#scikitplot.corpus.RecursiveChunkerConfig "Link to this definition")
:   Configuration for [`RecursiveChunker`](scikitplot.corpus.RecursiveChunker.html#scikitplot.corpus.RecursiveChunker "scikitplot.corpus.RecursiveChunker").

    Parameters:
    :   ****chunk\_size****int, default=1000
        :   Largest chunk anchor, in characters, not counting the whitespace
            around it.

        ****chunk\_overlap****int, default=0
        :   Characters of the preceding text added as context (from a word
            start, never before the previous chunk’s start); `0` adds none.
            Must be smaller than `chunk_size`.

        ****separators****tuple of str, default=(”nn”, “n”, “. “, “ “, “”)
        :   Separators, coarsest first; must end with `""` (characters). A
            list is accepted and stored as a tuple. The defaults assume `"\n"`
            line ends (readers normalise `"\r\n"`); add `"\r\n\r\n"` for
            text that keeps them. A hard-wrapped text is cut at line ends before
            sentence ends.

        ****strip\_whitespace****bool, default=True
        :   Narrow each chunk to exclude surrounding whitespace.

        ****min\_length****int, default=1
        :   Drop a chunk with fewer characters than this, not counting the
            whitespace around it (so a whitespace-only chunk is always dropped).

    Parameters:
    :   * ****chunk\_size**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****chunk\_overlap**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****separators**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****strip\_whitespace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****min\_length**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    chunk\_overlap: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.RecursiveChunkerConfig.chunk_overlap "Link to this definition")

    chunk\_size: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1000[#](#scikitplot.corpus.RecursiveChunkerConfig.chunk_size "Link to this definition")

    min\_length: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1[#](#scikitplot.corpus.RecursiveChunkerConfig.min_length "Link to this definition")

    separators: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ('\n\n', '\n', '. ', ' ', '')[#](#scikitplot.corpus.RecursiveChunkerConfig.separators "Link to this definition")

    strip\_whitespace: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.RecursiveChunkerConfig.strip_whitespace "Link to this definition")