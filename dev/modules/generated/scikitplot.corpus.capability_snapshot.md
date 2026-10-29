# capability\_snapshot[#](#capability-snapshot "Link to this heading")

scikitplot.corpus.capability\_snapshot(**extra\_distributions=()**, **\***, **load=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_capabilities.py#L301)[#](#scikitplot.corpus.capability_snapshot "Link to this definition")
:   Return a read-only snapshot of the runtime corpus capabilities.

    Parameters:
    :   ****extra\_distributions****iterable of str, optional
        :   Additional distribution names to record beyond the built-in set.

        ****load****bool, optional
        :   `False` (default) imports no backend: one whose probe would load it
            (Annoy, which loads scikit-learn and SciPy) reports `"unknown"` /
            `"not_loaded"` unless this process already loaded it. `True`
            loads it to tell `"available"` from `"broken"` (F-50).

    Returns:
    :   dict
        :   A mapping with keys:

            `python`str
            :   Python version (e.g. `"3.11.6"`).

            `implementation`str
            :   Interpreter implementation (e.g. `"CPython"`).

            `platform`str
            :   Platform identifier from [`platform.platform`](https://docs.python.org/3/library/platform.html#platform.platform "(in Python v3.15)").

            `ann_backends`dict
            :   `{name: {"status", "reason_code", "available", "version",
                "aliases"}}` for every registered ANN backend; `status` is a
                [`CapabilityStatus`](scikitplot.corpus.CapabilityStatus.html#scikitplot.corpus.CapabilityStatus "scikitplot.corpus.CapabilityStatus") value and `available` is derived from
                it.

            `distributions`dict
            :   `{distribution: version | None}` for the relevant optional
                packages (plus any **extra\_distributions**).

    Parameters:
    :   * ****extra\_distributions**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****load**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Notes

    Purely observational — it acquires no locks, mutates no state, and never
    raises for a missing optional component (absent components report `None` /
    `False`), so it is safe to embed in a run/build manifest.