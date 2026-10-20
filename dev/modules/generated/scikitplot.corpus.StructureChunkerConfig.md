# StructureChunkerConfig[#](#structurechunkerconfig "Link to this heading")

class scikitplot.corpus.StructureChunkerConfig(**markup='markdown'**, **chunk\_size=1000**, **include\_heading=True**, **separators=('\n\n', '\n', '. ', ' ', '')**, **min\_length=1**, **front\_matter=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_structure.py#L512)[#](#scikitplot.corpus.StructureChunkerConfig "Link to this definition")
:   Configuration for [`StructureChunker`](scikitplot.corpus.StructureChunker.html#scikitplot.corpus.StructureChunker "scikitplot.corpus.StructureChunker").

    Parameters:
    :   ****markup****{“markdown”, “rst”}, default=”markdown”
        :   The document’s markup; given, never guessed.

        ****chunk\_size****int, default=1000
        :   Largest chunk anchor, in characters, not counting the whitespace
            around it. Longer prose is split by [`RecursiveChunker`](scikitplot.corpus.RecursiveChunker.html#scikitplot.corpus.RecursiveChunker "scikitplot.corpus.RecursiveChunker")’s rule;
            a longer code block at blank lines, then lines.

        ****include\_heading****bool, default=True
        :   When a heading is directly followed by prose, begin the context of
            that prose’s first chunk at the heading, so the heading’s words are
            part of the text that is retrieved. A heading that is not (it is
            followed by code, another heading or the end, or this is `False`)
            is a chunk of its own, `block="heading"`.

        ****separators****tuple of str, default=(”nn”, “n”, “. “, “ “, “”)
        :   Separators for prose, coarsest first, ending with `""`.

        ****min\_length****int, default=1
        :   Drop a chunk with fewer characters than this, not counting the
            whitespace around it.

        ****front\_matter****bool, default=True
        :   Markdown only: a first line `---`, followed by a line that is not
            blank and closed by a later line `---` or `...`, is YAML front
            matter (Pandoc’s rule), chunked like code with
            `block="front_matter"`. Otherwise, or with `False`, the `---` is
            read as CommonMark reads it (a thematic break).

    Parameters:
    :   * ****markup**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****chunk\_size**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****include\_heading**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****separators**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****min\_length**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****front\_matter**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    chunk\_size: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1000[#](#scikitplot.corpus.StructureChunkerConfig.chunk_size "Link to this definition")

    front\_matter: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.StructureChunkerConfig.front_matter "Link to this definition")

    include\_heading: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.StructureChunkerConfig.include_heading "Link to this definition")

    markup: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'markdown'[#](#scikitplot.corpus.StructureChunkerConfig.markup "Link to this definition")

    min\_length: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1[#](#scikitplot.corpus.StructureChunkerConfig.min_length "Link to this definition")

    separators: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ('\n\n', '\n', '. ', ' ', '')[#](#scikitplot.corpus.StructureChunkerConfig.separators "Link to this definition")