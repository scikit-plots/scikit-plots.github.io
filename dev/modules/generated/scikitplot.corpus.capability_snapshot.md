# capability\_snapshot[#](#capability-snapshot "Link to this heading")

scikitplot.corpus.capability\_snapshot(**extra\_distributions=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_capabilities.py#L219)[#](#scikitplot.corpus.capability_snapshot "Link to this definition")
:   Return a read-only snapshot of the runtime corpus capabilities.

    Parameters:
    :   ****extra\_distributions****iterable of str, optional
        :   Additional distribution names to record beyond the built-in set.

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
            :   `{name: {"available": bool, "version": str | None}}` for every
                registered ANN backend.

            `distributions`dict
            :   `{distribution: version | None}` for the relevant optional
                packages (plus any **extra\_distributions**).

    Parameters:
    :   ****extra\_distributions**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Notes

    Purely observational — it acquires no locks, mutates no state, and never
    raises for a missing optional component (absent components report `None` /
    `False`), so it is safe to embed in a run/build manifest.