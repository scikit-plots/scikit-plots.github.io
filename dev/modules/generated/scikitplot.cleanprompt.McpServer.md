# McpServer[#](#mcpserver "Link to this heading")

class scikitplot.cleanprompt.McpServer(**make\_guard**, **roots**, **name='cleanprompt'**, **version='1.0.0'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_mcp.py#L238)[#](#scikitplot.cleanprompt.McpServer "Link to this definition")
:   Answer MCP requests with cleanprompt tools.

    Parameters:
    :   ****make\_guard****callable
        :   Returns a fresh [`Guard`](scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard "scikitplot.cleanprompt.Guard"). Called at start
            and again by `cleanprompt_forget`.

        ****roots****iterable of path-like
        :   Folders the tools may read and write under.

        ****name****str, default=’cleanprompt’
        :   The server name announced to clients.

        ****version****str, default=’1.0.0’
        :   The server version announced to clients.

    Parameters:
    :   * ****make\_guard**** (**Callable****[****[****]****,** [**Guard**](scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard "scikitplot.cleanprompt.Guard")**]**)
        * ****roots**** (**Iterable****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**os.PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**]**)
        * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    ****Developer notes.**** [`handle`](#scikitplot.cleanprompt.McpServer.handle "scikitplot.cleanprompt.McpServer.handle") is a pure function of one message and
    the server’s state — no I/O — which is what makes the protocol testable
    without a subprocess; `serve` only moves lines.

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_mcp.py#L554)[#](#scikitplot.cleanprompt.McpServer.close "Link to this definition")
    :   Drop every value held.

        Return type:
        :   None

    handle(**message**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_mcp.py#L286)[#](#scikitplot.cleanprompt.McpServer.handle "Link to this definition")
    :   Return the response to one JSON-RPC message, or `None`.

        Parameters:
        :   ****message****object
            :   A decoded JSON-RPC request, notification or batch.

        Returns:
        :   dict, list or None
            :   `None` for a notification, or a batch of notifications.

        Parameters:
        :   ****message**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    name[#](#scikitplot.cleanprompt.McpServer.name "Link to this definition")
    :   !! processed by numpydoc !!

    version[#](#scikitplot.cleanprompt.McpServer.version "Link to this definition")
    :   !! processed by numpydoc !!