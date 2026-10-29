# StructureChunker[#](#structurechunker "Link to this heading")

class scikitplot.corpus.StructureChunker(**config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_structure.py#L576)[#](#scikitplot.corpus.StructureChunker "Link to this definition")
:   Chunk Markdown or reStructuredText by its headings and code blocks.

    Parameters:
    :   ****config****StructureChunkerConfig or None, default=None
        :   `None` is `StructureChunkerConfig()` (Markdown).

    Parameters:
    :   ****config**** ([**StructureChunkerConfig**](scikitplot.corpus.StructureChunkerConfig.html#scikitplot.corpus.StructureChunkerConfig "scikitplot.corpus.StructureChunkerConfig") **|** **None**)

    > **See also**
    > [`RecursiveChunker`](scikitplot.corpus.RecursiveChunker.html#scikitplot.corpus.RecursiveChunker "scikitplot.corpus.RecursiveChunker")
    :   Splits prose that exceeds `chunk_size`.

    Notes

    ****User.**** Every chunk’s metadata holds `heading_path` (a tuple of the
    titles of the sections that contain it, outermost first), `block`
    (`"prose"`, `"code"`, `"heading"` or `"front_matter"`) and
    `section_level`; documents built from the chunks carry all three. With
    `include_heading`, a heading directly followed by prose is in the text
    of that prose’s first chunk; any other heading is a chunk of its own, so
    no heading’s words are lost (unless `min_length` drops them). Code
    blocks are never merged with prose, and a code chunk starts at the
    beginning of its first line, so its indentation is kept.

    Examples

    Try it in your browser!
    ```
    >>> text = "# Guide\n\nIntro text.\n\n## Install\n\n```\npip install x\n```\n"
    >>> chunks = StructureChunker().chunk(text).chunks
    >>> [
    ...     (c.metadata["block"], c.metadata["heading_path"], c.text) for c in chunks
    ... ]
    [('prose', ('Guide',), '# Guide\n\nIntro text.'),
     ('heading', ('Guide', 'Install'), '## Install'),
     ('code', ('Guide', 'Install'), '```\npip install x\n```')]

    ```
    Go BackOpen In Tab

    blocks(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_structure.py#L629)[#](#scikitplot.corpus.StructureChunker.blocks "Link to this definition")
    :   Return the document’s blocks: `(kind, span, level, title)`.

        Parameters:
        :   ****text****str
            :   The source.

        Returns:
        :   list of (str, (int, int), int, str)
            :   `kind` is `"heading"` (with its level and title), `"code"`,
                `"prose"` or `"front_matter"`; spans in source order, without
                blank lines between blocks.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")], [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]]

    chunk(**text**, **doc\_id=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_structure.py#L669)[#](#scikitplot.corpus.StructureChunker.chunk "Link to this definition")
    :   Split **text** into prose and code chunks with their heading path.

        Parameters:
        :   ****text****str
            :   Raw document text.

            ****doc\_id****str or None, default=None
            :   Stored in each chunk’s metadata.

            ****extra\_metadata****dict or None, default=None
            :   Merged into the result metadata.

        Returns:
        :   ChunkResult
            :   Chunks in source order.

        Raises:
        :   TypeError
            :   If **text** is not a `str`.

            ValueError
            :   If **text** is empty or whitespace-only, or holds a NUL character
                or a lone surrogate.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****extra\_metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [**ChunkResult**](scikitplot.corpus.ChunkResult.html#scikitplot.corpus.ChunkResult "scikitplot.corpus._types.ChunkResult")

    chunk\_batch(**texts**, **doc\_ids=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_recursive.py#L242)[#](#scikitplot.corpus.StructureChunker.chunk_batch "Link to this definition")
    :   Chunk a list of documents.

        Parameters:
        :   ****texts****list of str
            :   Input documents.

            ****doc\_ids****list of str or None, default=None
            :   Parallel document identifiers.

            ****extra\_metadata****dict or None, default=None
            :   Shared metadata for every result.

        Returns:
        :   list of ChunkResult
            :   One result per document.

        Raises:
        :   TypeError
            :   If **texts** is not a list.

            ValueError
            :   If **doc\_ids** length mismatches **texts**.

        Parameters:
        :   * ****texts**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****doc\_ids**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
            * ****extra\_metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ChunkResult**](scikitplot.corpus.ChunkResult.html#scikitplot.corpus.ChunkResult "scikitplot.corpus._types.ChunkResult")]

    property config: [StructureChunkerConfig](scikitplot.corpus.StructureChunkerConfig.html#scikitplot.corpus.StructureChunkerConfig "scikitplot.corpus._chunkers._structure.StructureChunkerConfig")[#](#scikitplot.corpus.StructureChunker.config "Link to this definition")
    :   The configuration (read-only).

    config\_class[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_structure.py#L520)[#](#scikitplot.corpus.StructureChunker.config_class "Link to this definition")
    :   alias of [`StructureChunkerConfig`](scikitplot.corpus.StructureChunkerConfig.html#scikitplot.corpus.StructureChunkerConfig "scikitplot.corpus._chunkers._structure.StructureChunkerConfig")

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")] = 'block'[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.StructureChunker.strategy "Link to this definition")

    text\_is\_source\_slice = True[#](#scikitplot.corpus.StructureChunker.text_is_source_slice "Link to this definition")