# ChunkerBase[#](#chunkerbase "Link to this heading")

class scikitplot.corpus.ChunkerBase[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/corpus/_base.py#L164)[#](#scikitplot.corpus.ChunkerBase "Link to this definition")
:   Abstract base class for all text chunkers.

    A chunker receives a block of raw text (one logical unit from the
    source document — a page, paragraph block, section, etc.) and returns
    a list of `(char_start, chunk_text)` tuples. The `char_start`
    offset is relative to the beginning of the input text block, enabling
    downstream code to reconstruct absolute character positions.

    Parameters:
    :   ****None — subclasses define their own parameters.****

    Attributes:
    :   ****strategy****ChunkingStrategy
        :   Class variable. Identifies which [`ChunkingStrategy`](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus.ChunkingStrategy") enum
            member this chunker implements. Must be defined by every concrete
            subclass.

    > **See also**
    > `scikitplot.corpus._chunkers.SentenceChunker`
    :   spaCy sentence segmentation.

    `scikitplot.corpus._chunkers.ParagraphChunker`
    :   Blank-line paragraph split.

    `scikitplot.corpus._chunkers.FixedWindowChunker`
    :   Sliding-window with overlap.

    Notes

    Chunkers must be ****stateless**** between `chunk()` calls. Any state
    required for a single call (e.g. a loaded language model) must be
    initialised inside `chunk()` or cached as an instance attribute that
    is never mutated after first assignment.

    Examples

    Try it in your browser!

    Implementing a trivial single-chunk chunker (no splitting):

    ```
    >>> class NullChunker(ChunkerBase):
    ...     strategy = ChunkingStrategy.NONE
    ...
    ...     def chunk(self, text, metadata=None):
    ...         return [(0, text)] if text.strip() else []

    ```
    Go BackOpen In Tab

    abstractmethod chunk(**text**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/corpus/_base.py#L215)[#](#scikitplot.corpus.ChunkerBase.chunk "Link to this definition")
    :   Segment `text` into a list of `(char_start, chunk_text)` tuples.

        Parameters:
        :   ****text****str
            :   Raw text to segment. Must not be `None`. Empty string input
                must return an empty list (never raise).

            ****metadata****dict or None, optional
            :   Chunk-level metadata from the reader (e.g. page number, section
                type). Made available so chunkers that need context — e.g. a
                semantic chunker deciding boundaries based on section label —
                can access it. Default: `None`.

        Returns:
        :   list of (int, str)
            :   Ordered list of `(char_start, chunk_text)` pairs.
                `char_start` is the character offset of `chunk_text` within
                the input `text` string. Must be non-negative and monotonically
                non-decreasing across the list.

        Raises:
        :   ValueError
            :   If `text` is `None` (not just empty).

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]]

        Notes

        The return type is a list (not a generator) so callers can inspect
        length without consuming the iterator. For very large texts, chunkers
        should still return incrementally-built lists rather than loading
        everything into memory at once.

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")][#](#scikitplot.corpus.ChunkerBase.strategy "Link to this definition")
    :   Identifies which [`ChunkingStrategy`](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")
        this implementation provides. ****Must**** be defined on every concrete subclass.