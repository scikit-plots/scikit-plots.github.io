# IncompatibleEmbeddingsError[#](#incompatibleembeddingserror "Link to this heading")

exception scikitplot.corpus.IncompatibleEmbeddingsError[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_embedding_manifest.py#L88)[#](#scikitplot.corpus.IncompatibleEmbeddingsError "Link to this definition")
:   Raised when vectors from incompatible generations would be combined.

    Notes

    A subclass of [`ValueError`](https://docs.python.org/3/builtins/exceptions.html#ValueError "(in Python v3.15)") so existing `except ValueError` handlers
    still catch it, while callers who want to react specifically to a
    provenance mismatch can.

    Annotation:
    :   Unrecognized objtype: `exception`