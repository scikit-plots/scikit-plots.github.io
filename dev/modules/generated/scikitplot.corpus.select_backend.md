# select\_backend[#](#select-backend "Link to this heading")

scikitplot.corpus.select\_backend(**name='auto'**, **\***, **index\_kwargs=None**, **annoy\_metric='angular'**, **annoy\_n\_trees=10**, **annoy\_search\_k=-1**, **annoy\_impl='auto'**, **annoy\_dtype=None**, **annoy\_index\_dtype=None**, **allow\_fallback=True**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_similarity/_backends.py#L1004)[#](#scikitplot.corpus.select_backend "Link to this definition")
:   Construct an ANN backend by name.

    Parameters:
    :   ****name****str or VectorIndexBackend subclass, optional
        :   `"auto"` (default) resolves the first available backend in
            [`DEFAULT_BACKEND_ORDER`](scikitplot.corpus.DEFAULT_BACKEND_ORDER.html#scikitplot.corpus.DEFAULT_BACKEND_ORDER "scikitplot.corpus.DEFAULT_BACKEND_ORDER"). An explicit built-in name is honoured
            or raises if unavailable. A custom [`VectorIndexBackend`](scikitplot.corpus.VectorIndexBackend.html#scikitplot.corpus.VectorIndexBackend "scikitplot.corpus.VectorIndexBackend") subclass
            may be supplied directly.

        ****index\_kwargs****mapping, optional
        :   Generic constructor keyword arguments for the selected backend. New
            code should prefer this mapping instead of adding backend-specific
            parameters to [`RetrievalConfig`](scikitplot.corpus.RetrievalConfig.html#scikitplot.corpus.RetrievalConfig "scikitplot.corpus.RetrievalConfig").

        ****annoy\_metric, annoy\_n\_trees, annoy\_search\_k, annoy\_impl, annoy\_dtype, annoy\_index\_dtype****
        :   Backward-compatible Annoy constructor settings. They are merged only
            when the resolved backend is [`AnnoyBackend`](scikitplot.corpus.AnnoyBackend.html#scikitplot.corpus.AnnoyBackend "scikitplot.corpus.AnnoyBackend"); generic
            `index_kwargs` win over default legacy values.

        ****allow\_fallback****bool, optional
        :   Under `"auto"`, whether a backend that is installed but cannot be
            loaded is skipped (`True`, default; the result reports
            `fallback_reason="<name>_broken"`) or refused (`False`). Also
            passed to [`AnnoyBackend`](scikitplot.corpus.AnnoyBackend.html#scikitplot.corpus.AnnoyBackend "scikitplot.corpus.AnnoyBackend"). An explicitly named backend is never
            replaced, whatever this says.

        ****\*\*kwargs****Any
        :   Compatibility form for generic backend constructor keyword arguments.
            Conflicting keys between `index_kwargs` and `kwargs` raise.

    Returns:
    :   VectorIndexBackend
        :   An unbuilt backend instance; [`VectorIndexBackend.provenance`](scikitplot.corpus.VectorIndexBackend.html#scikitplot.corpus.VectorIndexBackend.provenance "scikitplot.corpus.VectorIndexBackend.provenance")
            records what was requested and why the result differs.

    Raises:
    :   ValueError
        :   If **name** is not a known backend or `"auto"`.

        RuntimeError
        :   If an explicitly named backend is unavailable (the message says
            whether it is absent or installed but failing to load), or if
            `"auto"` finds no available backend (numpy missing).

        FallbackRefusedError
        :   If `"auto"` meets an installed backend that cannot load and
            `allow_fallback` is `False` (a [`RuntimeError`](https://docs.python.org/3/builtins/exceptions.html#RuntimeError "(in Python v3.15)")).

    Parameters:
    :   * ****name**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****index\_kwargs**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****annoy\_metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****annoy\_n\_trees**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****annoy\_search\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****annoy\_impl**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****annoy\_dtype**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****annoy\_index\_dtype**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****allow\_fallback**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**VectorIndexBackend**](scikitplot.corpus.VectorIndexBackend.html#scikitplot.corpus.VectorIndexBackend "scikitplot.corpus._similarity._backends.VectorIndexBackend")