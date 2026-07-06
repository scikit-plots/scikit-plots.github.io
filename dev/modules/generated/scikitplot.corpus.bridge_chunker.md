# bridge\_chunker[#](#bridge-chunker "Link to this heading")

scikitplot.corpus.bridge\_chunker(**chunker**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/corpus/_chunkers/_chunker_bridge.py#L469)[#](#scikitplot.corpus.bridge_chunker "Link to this definition")
:   Wrap **chunker** in a bridge if it is a new-style chunker.

    Parameters:
    :   ****chunker****object
        :   Either a `ChunkerBase` subclass (returned as-is) or a
            new-style chunker (wrapped in the appropriate bridge).

    Returns:
    :   ChunkerBridge or object
        :   The bridged chunker, or the original if no bridge is needed.

    Parameters:
    :   ****chunker**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

    Return type:
    :   [**ChunkerBridge**](scikitplot.corpus.ChunkerBridge.html#scikitplot.corpus.ChunkerBridge "scikitplot.corpus._chunkers._chunker_bridge.ChunkerBridge") | [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus._chunkers import SentenceChunker
    >>> bridged = bridge_chunker(SentenceChunker())
    >>> hasattr(bridged, "strategy")
    True
    >>> isinstance(bridged.chunk("Hello world. Goodbye.", metadata={}), list)
    True

    ```
    Go BackOpen In Tab