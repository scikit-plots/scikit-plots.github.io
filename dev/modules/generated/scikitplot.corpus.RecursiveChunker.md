# RecursiveChunker[#](#recursivechunker "Link to this heading")

class scikitplot.corpus.RecursiveChunker(**config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_recursive.py#L346)[#](#scikitplot.corpus.RecursiveChunker "Link to this definition")
:   Split text by a separator hierarchy until each piece fits a budget.

    Parameters:
    :   ****config****RecursiveChunkerConfig or None, default=None
        :   `None` is `RecursiveChunkerConfig()`.

    Parameters:
    :   ****config**** ([**RecursiveChunkerConfig**](scikitplot.corpus.RecursiveChunkerConfig.html#scikitplot.corpus.RecursiveChunkerConfig "scikitplot.corpus.RecursiveChunkerConfig") **|** **None**)

    > **See also**
    > [`ParentChildChunker`](scikitplot.corpus.ParentChildChunker.html#scikitplot.corpus.ParentChildChunker "scikitplot.corpus.ParentChildChunker")
    :   The same rule at two sizes, linked.

    Notes

    ****User.**** A paragraph that fits stays whole; a longer one is cut at line
    ends, then sentence ends, then spaces, then characters, only as far as
    needed. Each chunk’s `start_char`/`end_char` is the piece it stands
    for; with `chunk_overlap` its text also holds the end of the previous
    chunk (`context_span`).

    Examples

    Try it in your browser!
    ```
    >>> text = "Alpha one. Beta two.\n\nGamma three."
    >>> chunks = (
    ...     RecursiveChunker(RecursiveChunkerConfig(chunk_size=12)).chunk(text).chunks
    ... )
    >>> [c.text for c in chunks]
    ['Alpha one.', 'Beta two.', 'Gamma three.']
    >>> all(c.text == text[slice(*c.context_span)] for c in chunks)
    True

    ```
    Go BackOpen In Tab

    chunk(**text**, **doc\_id=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_recursive.py#L426)[#](#scikitplot.corpus.RecursiveChunker.chunk "Link to this definition")
    :   Split **text** into chunks of at most `chunk_size` characters.

        Parameters:
        :   ****text****str
            :   Raw document text.

            ****doc\_id****str or None, default=None
            :   Stored in each chunk’s metadata.

            ****extra\_metadata****dict or None, default=None
            :   Merged into the result metadata.

        Returns:
        :   ChunkResult
            :   The chunks; `metadata["span_basis"]` is `"input"`.

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

    chunk\_batch(**texts**, **doc\_ids=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_recursive.py#L242)[#](#scikitplot.corpus.RecursiveChunker.chunk_batch "Link to this definition")
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

    property config: [RecursiveChunkerConfig](scikitplot.corpus.RecursiveChunkerConfig.html#scikitplot.corpus.RecursiveChunkerConfig "scikitplot.corpus._chunkers._recursive.RecursiveChunkerConfig")[#](#scikitplot.corpus.RecursiveChunker.config "Link to this definition")
    :   The configuration (read-only).

    config\_class[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_recursive.py#L288)[#](#scikitplot.corpus.RecursiveChunker.config_class "Link to this definition")
    :   alias of [`RecursiveChunkerConfig`](scikitplot.corpus.RecursiveChunkerConfig.html#scikitplot.corpus.RecursiveChunkerConfig "scikitplot.corpus._chunkers._recursive.RecursiveChunkerConfig")

    spans(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_recursive.py#L395)[#](#scikitplot.corpus.RecursiveChunker.spans "Link to this definition")
    :   Return the anchor span of every chunk `chunk` would produce.

        Parameters:
        :   ****text****str
            :   The source.

        Returns:
        :   list of (int, int)
            :   Anchor spans in source order.

        Raises:
        :   TypeError, ValueError
            :   As [`chunk`](#scikitplot.corpus.RecursiveChunker.chunk "scikitplot.corpus.RecursiveChunker.chunk").

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")]]

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")] = 'recursive'[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.RecursiveChunker.strategy "Link to this definition")

    text\_is\_source\_slice = True[#](#scikitplot.corpus.RecursiveChunker.text_is_source_slice "Link to this definition")