# ChunkerConfig[#](#chunkerconfig "Link to this heading")

class scikitplot.corpus.ChunkerConfig[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_types.py#L482)[#](#scikitplot.corpus.ChunkerConfig "Link to this definition")
:   Abstract base configuration for all chunker implementations.

    Concrete subclasses (e.g. `SentenceChunkerConfig`) must inherit
    from this class. No fields are defined here; this exists purely
    as a type-safe base for `isinstance` checks and registry typing.

    Notes

    All concrete configs must remain `frozen=True` dataclasses.
    Mutable config objects create non-deterministic pipeline behaviour.

    ****Enum fields (R3-2).**** A field whose default is an [`Enum`](https://docs.python.org/3/library/enum.html#enum.Enum "(in Python v3.15)")
    member accepts that member or its value (`backend="regex"`) and holds
    the member after construction; any other value raises `ValueError`
    listing the valid values. It used to construct and then fail inside
    `chunk()` (`'str' object has no attribute 'value'`). A subclass that
    defines `__post_init__` must call `super().__post_init__()`.