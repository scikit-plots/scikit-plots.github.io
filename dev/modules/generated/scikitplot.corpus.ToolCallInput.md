# ToolCallInput[#](#toolcallinput "Link to this heading")

class scikitplot.corpus.ToolCallInput(**tool\_name**, **arguments**, **call\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L1053)[#](#scikitplot.corpus.ToolCallInput "Link to this definition")
:   Input payload for a Model Context Protocol tool call.

    > **Note**
    > ****Protocol-neutral payload shape, not an MCP wire model.****
    Corpus does not own the Model Context Protocol wire format
    (see the submodule ownership split). Adding a `pydantic`
    model, an `mcp` SDK import, or protocol-version handling to
    this class would move wire concerns into Corpus and violate
    that boundary. Finding F-R15-01 / P-I0-13.

    Parameters:
    :   ****tool\_name****str
        :   Registered tool identifier.

        ****arguments****MetadataDict
        :   Tool-specific argument dictionary.

        ****call\_id****str
        :   Unique call identifier for result correlation.

    Parameters:
    :   * ****tool\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****arguments**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****call\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    arguments: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L1053)[#](#scikitplot.corpus.ToolCallInput.arguments "Link to this definition")

    call\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L1053)[#](#scikitplot.corpus.ToolCallInput.call_id "Link to this definition")

    tool\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_types.py#L1053)[#](#scikitplot.corpus.ToolCallInput.tool_name "Link to this definition")