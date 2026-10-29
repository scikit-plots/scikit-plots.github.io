# FallbackRefusedError[#](#fallbackrefusederror "Link to this heading")

exception scikitplot.corpus.FallbackRefusedError[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_similarity/_backends.py#L88)[#](#scikitplot.corpus.FallbackRefusedError "Link to this definition")
:   A fallback was needed and `allow_fallback=False` refused it (R2-5).

    Raised when the dense backend (or an Annoy binding) cannot run as
    configured: an installed backend fails to load under `"auto"`, a
    preferred binding cannot load, or the running binding cannot honour a
    requested option. It is a [`RuntimeError`](https://docs.python.org/3/builtins/exceptions.html#RuntimeError "(in Python v3.15)"), so it is never mistaken
    for the invalid-data `ValueError` that disables a dense index.

    Annotation:
    :   Unrecognized objtype: `exception`