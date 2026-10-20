# read\_audit[#](#read-audit "Link to this heading")

scikitplot.agent.read\_audit(**path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_audit.py#L278)[#](#scikitplot.agent.read_audit "Link to this definition")
:   Read a JSON Lines audit file.

    Parameters:
    :   ****path****str or os.PathLike
        :   A file written by [`JsonlAuditSink`](scikitplot.agent.JsonlAuditSink.html#scikitplot.agent.JsonlAuditSink "scikitplot.agent.JsonlAuditSink").

    Returns:
    :   list of dict

    Raises:
    :   ValueError
        :   If a line is not a JSON object, naming the line.

    Parameters:
    :   ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]