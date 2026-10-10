# ToolCallResult[#](#toolcallresult "Link to this heading")

class scikitplot.corpus.ToolCallResult(**call\_id**, **content**, **is\_error=False**, **error\_message=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_types.py#L1080)[#](#scikitplot.corpus.ToolCallResult "Link to this definition")
:   Result returned from a Model Context Protocol tool call.

    > **Note**
    > ****Protocol-neutral payload shape, not an MCP wire model.****
    Corpus does not own the Model Context Protocol wire format
    (see the submodule ownership split). Adding a `pydantic`
    model, an `mcp` SDK import, or protocol-version handling to
    this class would move wire concerns into Corpus and violate
    that boundary. Finding F-R15-01 / P-I0-13.

    Parameters:
    :   ****call\_id****str
        :   Identifier matching the originating [`ToolCallInput`](scikitplot.corpus.ToolCallInput.html#scikitplot.corpus.ToolCallInput "scikitplot.corpus.ToolCallInput").

        ****content****Any
        :   Tool result payload (str, list, dict, …).

        ****is\_error****bool
        :   `True` if the tool raised an error.

        ****error\_message****str or None
        :   Error description when `is_error` is `True`.

    Parameters:
    :   * ****call\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****content**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****is\_error**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****error\_message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    call\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_types.py#L1080)[#](#scikitplot.corpus.ToolCallResult.call_id "Link to this definition")

    content: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_types.py#L1080)[#](#scikitplot.corpus.ToolCallResult.content "Link to this definition")

    error\_message: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ToolCallResult.error_message "Link to this definition")

    is\_error: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.ToolCallResult.is_error "Link to this definition")