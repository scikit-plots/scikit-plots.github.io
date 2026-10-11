# ChunkerProtocol[#](#chunkerprotocol "Link to this heading")

class scikitplot.corpus.ChunkerProtocol(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L699)[#](#scikitplot.corpus.ChunkerProtocol "Link to this definition")
:   Structural interface every chunker must satisfy.

    Any class that implements `chunk` and `chunk_batch` with the
    correct signatures is considered a valid chunker, regardless of
    inheritance.

    Notes

    `runtime_checkable` enables `isinstance(obj, ChunkerProtocol)`
    in pipeline validation and registry lookups.

    chunk(**text**, **doc\_id=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L713)[#](#scikitplot.corpus.ChunkerProtocol.chunk "Link to this definition")
    :   Split a single document into chunks.

        Parameters:
        :   ****text****str
            :   Raw document text.

            ****doc\_id****str, optional
            :   Document identifier propagated into chunk metadata.

            ****extra\_metadata****MetadataDict, optional
            :   Extra key/value pairs merged into the result metadata.

        Returns:
        :   ChunkResult

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****extra\_metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [**ChunkResult**](scikitplot.corpus.ChunkResult.html#scikitplot.corpus.ChunkResult "scikitplot.corpus._types.ChunkResult")

    chunk\_batch(**texts**, **doc\_ids=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L736)[#](#scikitplot.corpus.ChunkerProtocol.chunk_batch "Link to this definition")
    :   Split a list of documents into chunks.

        Parameters:
        :   ****texts****list[str]
            :   Input documents.

            ****doc\_ids****list[str], optional
            :   Parallel document identifiers.

            ****extra\_metadata****MetadataDict, optional
            :   Shared extra metadata for every result.

        Returns:
        :   list[ChunkResult]

        Parameters:
        :   * ****texts**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****doc\_ids**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
            * ****extra\_metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ChunkResult**](scikitplot.corpus.ChunkResult.html#scikitplot.corpus.ChunkResult "scikitplot.corpus._types.ChunkResult")]