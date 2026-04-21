# FixedWindowChunker[#](#fixedwindowchunker "Link to this heading")

class scikitplot.corpus.FixedWindowChunker(**config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_chunkers/_fixed_window.py#L250)[#](#scikitplot.corpus.FixedWindowChunker "Link to this definition")
:   Produce fixed-size sliding-window chunks over a document.

    Parameters:
    :   ****config****FixedWindowChunkerConfig, optional
        :   Chunker configuration.

    Parameters:
    :   ****config**** ([**FixedWindowChunkerConfig**](scikitplot.corpus.FixedWindowChunkerConfig.html#scikitplot.corpus.FixedWindowChunkerConfig "scikitplot.corpus.FixedWindowChunkerConfig") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> cfg = FixedWindowChunkerConfig(
    ...     window_size=20, step_size=10, unit=WindowUnit.CHARS
    ... )
    >>> chunker = FixedWindowChunker(cfg)
    >>> result = chunker.chunk("The quick brown fox jumps over the lazy dog")
    >>> result.chunks[0].text
    'The quick brown fox '

    ```
    Go BackOpen In Tab

    chunk(**text**, **doc\_id=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_chunkers/_fixed_window.py#L311)[#](#scikitplot.corpus.FixedWindowChunker.chunk "Link to this definition")
    :   Split **text** into fixed-window chunks.

        Parameters:
        :   ****text****str
            :   Raw document text.

            ****doc\_id****str, optional
            :   Document identifier stored in metadata.

            ****extra\_metadata****dict[str, Any], optional
            :   Additional key/value pairs merged into result metadata.

        Returns:
        :   ChunkResult
            :   Chunks and aggregate metadata.

        Raises:
        :   TypeError
            :   If **text** is not a `str`.

            ValueError
            :   If **text** is empty or whitespace-only.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****doc\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****extra\_metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   **ChunkResult**

    chunk\_batch(**texts**, **doc\_ids=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_chunkers/_fixed_window.py#L390)[#](#scikitplot.corpus.FixedWindowChunker.chunk_batch "Link to this definition")
    :   Chunk a list of documents.

        Parameters:
        :   ****texts****list[str]
            :   Input documents.

            ****doc\_ids****list[str], optional
            :   Parallel document identifiers.

            ****extra\_metadata****dict[str, Any], optional
            :   Shared metadata for every result.

        Returns:
        :   list[ChunkResult]
            :   One result per document.

        Raises:
        :   TypeError
            :   If **texts** is not a list.

            ValueError
            :   If **doc\_ids** length mismatches **texts**.

        Parameters:
        :   * ****texts**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****doc\_ids**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****extra\_metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[**ChunkResult**]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples