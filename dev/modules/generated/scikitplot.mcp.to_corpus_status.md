# to\_corpus\_status[#](#to-corpus-status "Link to this heading")

scikitplot.mcp.to\_corpus\_status(**status**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/mcp/_outcome.py#L295)[#](#scikitplot.mcp.to_corpus_status "Link to this definition")
:   Resolve a status string to [`scikitplot.corpus.RetrievalStatus`](scikitplot.corpus.RetrievalStatus.html#scikitplot.corpus.RetrievalStatus "scikitplot.corpus.RetrievalStatus").

    Parameters:
    :   ****status****str
        :   One of the module-level status constants.

    Returns:
    :   scikitplot.corpus.RetrievalStatus

    Raises:
    :   RuntimeError
        :   If `scikitplot.corpus` is not installed.

        ValueError
        :   If `status` is not a known status value.

    Parameters:
    :   ****status**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    Notes

    ****Developer-focused.**** The import is performed here, at call time, so that
    importing [`scikitplot.mcp`](../../apis/scikitplot.mcp.html#module-scikitplot.mcp "scikitplot.mcp") never pulls in `scikitplot.corpus`. That
    module-scope boundary is enforced by
    `scikitplot/mcp/_maintenance/check_trackers.py`.