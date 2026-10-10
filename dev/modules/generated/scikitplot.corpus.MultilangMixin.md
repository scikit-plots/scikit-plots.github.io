# MultilangMixin[#](#multilangmixin "Link to this heading")

class scikitplot.corpus.MultilangMixin[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_chunkers/_multilang_mixin.py#L203)[#](#scikitplot.corpus.MultilangMixin "Link to this definition")
:   Shared multilang analysis mixin for all five chunkers.

    Inherit this alongside the chunker base class:

    ```
    class WordChunker(MultilangMixin, ChunkerBase): ...

    ```

    The mixin adds no `__init__` parameters. Configuration is passed
    via [`MultilangConfig`](scikitplot.corpus.MultilangConfig.html#scikitplot.corpus.MultilangConfig "scikitplot.corpus.MultilangConfig") held in `self._ml_cfg`. Subclasses
    must call `_ml_init` in their `__init__` to set this up.

    Notes

    ****Developer note:**** All mixin methods are name-mangled with `_ml_`
    to avoid collisions with subclass methods. The only external surface
    is [`attach_embedding`](#scikitplot.corpus.MultilangMixin.attach_embedding "scikitplot.corpus.MultilangMixin.attach_embedding") and [`attach_embedding_batch`](#scikitplot.corpus.MultilangMixin.attach_embedding_batch "scikitplot.corpus.MultilangMixin.attach_embedding_batch").

    ****Thread safety:**** All methods are stateless per-call. The only
    shared state is `_REGEX_AVAILABLE` (module-level bool, written once).

    attach\_embedding(**chunk**, **vector**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_chunkers/_multilang_mixin.py#L784)[#](#scikitplot.corpus.MultilangMixin.attach_embedding "Link to this definition")
    :   Return a new `Chunk` with an embedding attached.

        Does NOT mutate the original `Chunk` (frozen dataclass).

        Parameters:
        :   ****chunk****Chunk
            :   Any chunk produced by this chunker.

            ****vector****list[float]
            :   Dense embedding vector.

            ****model\_name****str, optional
            :   Encoder model name.

            ****model\_version****str, optional
            :   Encoder model version.

        Returns:
        :   Chunk
            :   New frozen instance with `metadata["multilang"]["embedding"]`
                populated and `metadata["embedding"]` set at top level for
                compatibility with `EmbeddedChunk`.

        Parameters:
        :   * ****chunk**** ([**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk"))
            * ****vector**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
            * ****model\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****model\_version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")

        Notes

        ****User note:**** For batch embedding, use
        [`attach_embedding_batch`](#scikitplot.corpus.MultilangMixin.attach_embedding_batch "scikitplot.corpus.MultilangMixin.attach_embedding_batch") which avoids per-chunk dict copies.

        ****Developer note:**** Two embedding locations are written:

        1. `chunk.metadata["embedding"]` — top-level key compatible with
           `EmbeddedChunk` and vector store adapters.
        2. `chunk.metadata["multilang"]["embedding"]` — inside the
           multilang bundle for model provenance tracking.

    attach\_embedding\_batch(**chunks**, **vectors**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_chunkers/_multilang_mixin.py#L841)[#](#scikitplot.corpus.MultilangMixin.attach_embedding_batch "Link to this definition")
    :   Return a new list of chunks with embeddings attached.

        Parameters:
        :   ****chunks****list[Chunk]
            :   Chunks from this chunker.

            ****vectors****list[list[float]]
            :   One embedding vector per chunk. Must have same length as
                `chunks`.

            ****model\_name****str, optional
            :   Encoder model name.

            ****model\_version****str, optional
            :   Encoder model version.

        Returns:
        :   list[Chunk]
            :   New list; originals are unmodified.

        Raises:
        :   ValueError
            :   If `len(chunks) != len(vectors)`.

        Parameters:
        :   * ****chunks**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")**]**)
            * ****vectors**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]****]**)
            * ****model\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****model\_version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]