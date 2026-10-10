# server\_capabilities[#](#server-capabilities "Link to this heading")

scikitplot.mcp.server\_capabilities()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/mcp/_capabilities.py#L170)[#](#scikitplot.mcp.server_capabilities "Link to this definition")
:   Return the ****static / potential**** tool/resource inventory, without importing
    the MCP SDK — safe on any interpreter, including the Legacy Retrieval tier.

    This describes what the server **can** expose. Whether a given capability is
    actually registered depends on how [`scikitplot.mcp.create_server`](scikitplot.mcp.create_server.html#scikitplot.mcp.create_server "scikitplot.mcp.create_server") is
    configured — the `docs://chunk/{doc_id}` resource is registered only when a
    `document_reader` is supplied. Use [`effective_server_capabilities`](scikitplot.mcp.effective_server_capabilities.html#scikitplot.mcp.effective_server_capabilities "scikitplot.mcp.effective_server_capabilities") for
    the surface of a **specific** configuration (single source of truth for the
    configured server).

    Returns:
    :   dict
        :   `{"kind": "static", "server", "effect_class", "transports", "tools",
            "resources"}`. `resources` here are **potential**; each carries
            `"requires": [...]` naming the configuration it needs.

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> caps = server_capabilities()
    >>> caps["kind"], caps["effect_class"]
    ('static', 'read_only')
    >>> [t["name"] for t in caps["tools"]]
    ['search_docs']

    ```
    Go BackOpen In Tab