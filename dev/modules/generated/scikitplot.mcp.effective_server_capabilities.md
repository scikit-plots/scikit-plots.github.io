# effective\_server\_capabilities[#](#effective-server-capabilities "Link to this heading")

scikitplot.mcp.effective\_server\_capabilities(**\***, **document\_reader\_enabled=False**, **transport='stdio'**, **health\_path='/healthz'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/mcp/_capabilities.py#L240)[#](#scikitplot.mcp.effective_server_capabilities "Link to this definition")
:   Return the ****effective**** surface for a specific server configuration.

    Unlike [`server_capabilities`](scikitplot.mcp.server_capabilities.html#scikitplot.mcp.server_capabilities "scikitplot.mcp.server_capabilities") (which lists **potential** capabilities), this
    reflects exactly what [`scikitplot.mcp.create_server`](scikitplot.mcp.create_server.html#scikitplot.mcp.create_server "scikitplot.mcp.create_server") would register for
    the given options, so `--list-capabilities` and the running server never
    disagree. Still SDK-free (no `mcp`/`pydantic` import).

    Parameters:
    :   ****document\_reader\_enabled****bool
        :   Whether a `document_reader` is supplied. The `docs://chunk/{doc_id}`
            resource is included only when this is `True` (matches `create_server`).

        ****transport****str
        :   The configured transport (`"stdio"` or `"streamable-http"`).

        ****health\_path****str or None
        :   The HTTP health route, included only for `streamable-http` when set.

    Returns:
    :   dict
        :   `{"kind": "effective", "server", "effect_class", "transport", "tools",
            "resources", "health"}` — the configured surface only.

    Parameters:
    :   * ****document\_reader\_enabled**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****transport**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****health\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)")]