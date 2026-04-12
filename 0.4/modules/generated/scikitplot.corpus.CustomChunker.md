# CustomChunker[#](#customchunker "Link to this heading")

class scikitplot.corpus.CustomChunker(**chunk\_fn**, **\***, **name=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/corpus/_custom_hooks.py#L108)[#](#scikitplot.corpus.CustomChunker "Link to this definition")
:   Wrap any callable as a [`ChunkerBase`](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase").

    The caller provides a `chunk_fn` that accepts `(text: str,
    metadata: dict)` and returns `list[tuple[int, str]]` where each tuple
    is `(char_start, chunk_text)`. This covers the full [`chunk`](#scikitplot.corpus.CustomChunker.chunk "scikitplot.corpus.CustomChunker.chunk")
    contract without subclassing.

    Parameters:
    :   ****chunk\_fn****callable
        :   Chunking callable. Signature:

            ```
            def chunk_fn(
                text: str,
                metadata: dict[str, Any],
            ) -> list[tuple[int, str]]: ...

            ```

            `text` is the raw text block to segment.
            `metadata` is the raw-chunk metadata dict passed by
            `get_documents`.
            Returns `(char_start, chunk_text)` pairs, same contract as
            [`ChunkerBase.chunk`](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase.chunk "scikitplot.corpus.ChunkerBase.chunk").

        ****name****str, optional
        :   Human-readable label used in `__repr__` and logging.
            Default: the `__name__` attribute of `chunk_fn`.

    Attributes:
    :   ****strategy****ChunkingStrategy
        :   Always `CUSTOM`.

    Raises:
    :   TypeError
        :   If `chunk_fn` is not callable.

    Parameters:
    :   * ****chunk\_fn**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]****]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]****]**)
        * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    > **See also**
    > [`scikitplot.corpus._base.ChunkerBase`](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase")
    :   Abstract base class.

    `scikitplot.corpus._chunkers.SentenceChunker`
    :   Built-in sentence chunker.

    Notes

    ****User note:**** Use this when none of the built-in chunkers fit your
    segmentation logic — custom XML tag boundaries, transcript cue-based
    splits, semantic paragraph detection via a local LLM, etc.

    ****Developer note:**** The `strategy` class variable is fixed to
    `CUSTOM` so the pipeline records the correct
    [`ChunkingStrategy`](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy") on every generated
    [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument").

    Examples

    Split on double newlines (paragraph-like) without using ParagraphChunker:

    ```
    def my_para_chunk(text, metadata):
        paras = [p.strip() for p in text.split("\\n\\n") if p.strip()]
        cursor = 0
        result = []
        for para in paras:
            idx = text.find(para, cursor)
            result.append((idx, para))
            cursor = idx + len(para)
        return result

    chunker = CustomChunker(my_para_chunk, name="DoubleNewlineChunker")
    pipeline = CorpusPipeline(chunker=chunker)

    ```

    chunk(**text**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/corpus/_custom_hooks.py#L212)[#](#scikitplot.corpus.CustomChunker.chunk "Link to this definition")
    :   Delegate to the user-supplied `chunk_fn`.

        Parameters:
        :   ****text****str
            :   Raw text to segment.

            ****metadata****dict or None, optional
            :   Raw-chunk metadata forwarded from the reader.

        Returns:
        :   list of (int, str)
            :   `(char_start, chunk_text)` pairs.

        Raises:
        :   ValueError
            :   If `text` is `None`.

            RuntimeError
            :   If `chunk_fn` raises an unexpected exception.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]]

    strategy: [ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy") = 'custom'[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.CustomChunker.strategy "Link to this definition")
    :   Identifies which [`ChunkingStrategy`](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")
        this implementation provides. ****Must**** be defined on every concrete subclass.