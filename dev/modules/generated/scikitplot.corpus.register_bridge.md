# register\_bridge[#](#register-bridge "Link to this heading")

scikitplot.corpus.register\_bridge(**chunker\_class**, **bridge\_class**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d0ea3951/scikitplot/corpus/_chunkers/_chunker_bridge.py#L393)[#](#scikitplot.corpus.register_bridge "Link to this definition")
:   Register a custom bridge for a user-defined chunker class.

    After registration, [`bridge_chunker`](scikitplot.corpus.bridge_chunker.html#scikitplot.corpus.bridge_chunker "scikitplot.corpus.bridge_chunker") will automatically wrap
    instances of **chunker\_class** in **bridge\_class**.

    Parameters:
    :   ****chunker\_class****type
        :   The user-defined chunker class to register. Matched by exact
            `type(chunker).__name__` string so subclasses must be registered
            separately if needed.

        ****bridge\_class****type[ChunkerBridge]
        :   A [`ChunkerBridge`](scikitplot.corpus.ChunkerBridge.html#scikitplot.corpus.ChunkerBridge "scikitplot.corpus.ChunkerBridge") subclass that wraps **chunker\_class**.

    Raises:
    :   TypeError
        :   If **bridge\_class** is not a subclass of [`ChunkerBridge`](scikitplot.corpus.ChunkerBridge.html#scikitplot.corpus.ChunkerBridge "scikitplot.corpus.ChunkerBridge").

    Parameters:
    :   * ****chunker\_class**** ([**type**](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)"))
        * ****bridge\_class**** ([**type**](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)")**[**[**ChunkerBridge**](scikitplot.corpus.ChunkerBridge.html#scikitplot.corpus.ChunkerBridge "scikitplot.corpus._chunkers._chunker_bridge.ChunkerBridge")**]**)

    Return type:
    :   None

    Examples

    Try it in your browser!
    ```
    >>> class MyChunker:
    ...     def chunk(self, text, extra_metadata=None):
    ...         from .._types import Chunk, ChunkResult
    ...
    ...         return ChunkResult(
    ...             chunks=[
    ...                 Chunk(text=text, start_char=0, end_char=len(text), metadata={})
    ...             ],
    ...             metadata={},
    ...         )
    >>> class MyChunkerBridge(ChunkerBridge):
    ...     from .._schema import ChunkingStrategy
    ...
    ...     strategy = ChunkingStrategy.CUSTOM
    ...
    ...     def _call_inner(self, text, metadata):
    ...         return self.inner.chunk(text, extra_metadata=metadata)
    >>> register_bridge(MyChunker, MyChunkerBridge)
    >>> bridged = bridge_chunker(MyChunker())
    >>> hasattr(bridged, "strategy")
    True

    ```
    Go BackOpen In Tab