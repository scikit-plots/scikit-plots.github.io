# ParagraphChunkerConfig[#](#paragraphchunkerconfig "Link to this heading")

class scikitplot.corpus.ParagraphChunkerConfig(**min\_length=0**, **max\_length=None**, **overlap=0**, **strip\_whitespace=True**, **include\_offsets=True**, **merge\_short=False**, **multilang\_config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e137512/scikitplot/corpus/_chunkers/_paragraph.py#L77)[#](#scikitplot.corpus.ParagraphChunkerConfig "Link to this definition")
:   Configuration for [`ParagraphChunker`](scikitplot.corpus.ParagraphChunker.html#scikitplot.corpus.ParagraphChunker "scikitplot.corpus.ParagraphChunker").

    Parameters:
    :   ****min\_length****int
        :   Minimum character length to retain a paragraph.

        ****max\_length****int or None
        :   Maximum character length. Paragraphs exceeding this are split
            at sentence boundaries (`[.!?]`). `None` disables the limit.

        ****overlap****int
        :   Number of preceding paragraphs prepended as context.

        ****strip\_whitespace****bool
        :   Strip leading/trailing whitespace from each paragraph.

        ****include\_offsets****bool
        :   Compute and store character offsets.

        ****merge\_short****bool
        :   Merge consecutive short paragraphs (below **min\_length**) into
            one block instead of discarding them.

    Parameters:
    :   * ****min\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****overlap**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****strip\_whitespace**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****include\_offsets**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****merge\_short**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****multilang\_config**** (**MultilangConfig** **|** **None**)

    include\_offsets: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.ParagraphChunkerConfig.include_offsets "Link to this definition")

    max\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.ParagraphChunkerConfig.max_length "Link to this definition")

    merge\_short: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.ParagraphChunkerConfig.merge_short "Link to this definition")

    min\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.corpus.ParagraphChunkerConfig.min_length "Link to this definition")

    multilang\_config: MultilangConfig | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.ParagraphChunkerConfig.multilang_config "Link to this definition")

    overlap: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.corpus.ParagraphChunkerConfig.overlap "Link to this definition")

    strip\_whitespace: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.ParagraphChunkerConfig.strip_whitespace "Link to this definition")