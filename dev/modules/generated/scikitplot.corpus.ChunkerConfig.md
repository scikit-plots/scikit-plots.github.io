# ChunkerConfig[#](#chunkerconfig "Link to this heading")

class scikitplot.corpus.ChunkerConfig[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L446)[#](#scikitplot.corpus.ChunkerConfig "Link to this definition")
:   Abstract base configuration for all chunker implementations.

    Concrete subclasses (e.g. `SentenceChunkerConfig`) must inherit
    from this class. No fields are defined here; this exists purely
    as a type-safe base for `isinstance` checks and registry typing.

    Notes

    All concrete configs must remain `frozen=True` dataclasses.
    Mutable config objects create non-deterministic pipeline behaviour.