# ParentChildChunker[#](#parentchildchunker "Link to this heading")

class scikitplot.corpus.ParentChildChunker(**config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_recursive.py#L542)[#](#scikitplot.corpus.ParentChildChunker "Link to this definition")
:   Large parents for context, small children for retrieval, linked.

    Parameters:
    :   ****config****ParentChildChunkerConfig or None, default=None
        :   `None` is `ParentChildChunkerConfig()`.

    Parameters:
    :   ****config**** ([**ParentChildChunkerConfig**](scikitplot.corpus.ParentChildChunkerConfig.html#scikitplot.corpus.ParentChildChunkerConfig "scikitplot.corpus.ParentChildChunkerConfig") **|** **None**)

    > **See also**
    > [`RecursiveChunker`](scikitplot.corpus.RecursiveChunker.html#scikitplot.corpus.RecursiveChunker "scikitplot.corpus.RecursiveChunker")
    :   The splitting rule used at both levels.

    [`scikitplot.corpus.children`](scikitplot.corpus.children.html#scikitplot.corpus.children "scikitplot.corpus.children")
    :   Traverse the documents it produces.

    Notes

    ****User.**** Each parent is followed by its children. Every chunk’s
    metadata holds `chunk_role` (`"parent"` or `"child"`) and
    `parent_span`; a child holds `parent_chunk`, the position of its
    parent in the result. A document built from a child gets
    `parent_doc_id` (its parent’s `doc_id`): retrieve children, then
    give the model the parent. Documents keep `chunk_role` and
    `parent_span` in their metadata, so with `emit_parents=False` a child
    still locates its parent’s region. Both levels report the `RECURSIVE`
    strategy; `chunk_role` tells them apart. A parent no longer than
    `child_size` has one child with the same text: index children only.

    Examples

    Try it in your browser!
    ```
    >>> text = "Alpha one. Beta two.\n\nGamma three. Delta four."
    >>> config = ParentChildChunkerConfig(parent_size=25, child_size=12)
    >>> result = ParentChildChunker(config).chunk(text)
    >>> [
    ...     (c.metadata["chunk_role"], c.text) for c in result.chunks
    ... ]
    [('parent', 'Alpha one. Beta two.'), ('child', 'Alpha one.'), ('child', 'Beta two.'),
     ('parent', 'Gamma three. Delta four.'), ('child', 'Gamma three.'), ('child', 'Delta four.')]

    ```
    Go BackOpen In Tab

    chunk(**text**, **doc\_id=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_recursive.py#L597)[#](#scikitplot.corpus.ParentChildChunker.chunk "Link to this definition")
    :   Split **text** into parents and the children inside each.

        Parameters:
        :   ****text****str
            :   Raw document text.

            ****doc\_id****str or None, default=None
            :   Stored in each chunk’s metadata.

            ****extra\_metadata****dict or None, default=None
            :   Merged into the result metadata.

        Returns:
        :   ChunkResult
            :   Parents and children in source order (each parent first).

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

    chunk\_batch(**texts**, **doc\_ids=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_recursive.py#L242)[#](#scikitplot.corpus.ParentChildChunker.chunk_batch "Link to this definition")
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

    property config: [ParentChildChunkerConfig](scikitplot.corpus.ParentChildChunkerConfig.html#scikitplot.corpus.ParentChildChunkerConfig "scikitplot.corpus._chunkers._recursive.ParentChildChunkerConfig")[#](#scikitplot.corpus.ParentChildChunker.config "Link to this definition")
    :   The configuration (read-only).

    config\_class[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_recursive.py#L491)[#](#scikitplot.corpus.ParentChildChunker.config_class "Link to this definition")
    :   alias of [`ParentChildChunkerConfig`](scikitplot.corpus.ParentChildChunkerConfig.html#scikitplot.corpus.ParentChildChunkerConfig "scikitplot.corpus._chunkers._recursive.ParentChildChunkerConfig")

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")] = 'recursive'[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.ParentChildChunker.strategy "Link to this definition")

    text\_is\_source\_slice = True[#](#scikitplot.corpus.ParentChildChunker.text_is_source_slice "Link to this definition")