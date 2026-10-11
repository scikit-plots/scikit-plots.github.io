# server\_runtime\_status[#](#server-runtime-status "Link to this heading")

scikitplot.mcp.server\_runtime\_status()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/mcp/_capabilities.py#L295)[#](#scikitplot.mcp.server_runtime_status "Link to this definition")
:   Report, ****without importing the MCP SDK****, whether the protocol server can
    run in this interpreter — so callers can degrade gracefully to the SDK-free
    retrieval layer instead of catching an exception from [`create_server`](scikitplot.mcp.create_server.html#scikitplot.mcp.create_server "scikitplot.mcp.create_server").

    This never imports `mcp`/`mcp_types` (it only checks for their presence
    via [`importlib.util.find_spec`](https://docs.python.org/3/library/importlib.html#importlib.util.find_spec "(in Python v3.15)")), so it is safe on any interpreter,
    including Python 3.8/3.9 where the MCP SDK cannot be installed.

    Returns:
    :   dict
        :   Keys: `retrieval_available` (always `True` — the SDK-free retrieval
            core works everywhere), `server_available` (`True` only when the
            Python floor ****and**** the SDK are both satisfied), `python_ok`,
            `python`, `sdk_present`, and `reason` (`None` when available, else
            a short machine-readable cause).

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)")]

    Notes

    Tier model (see `RULESET.md`): the retrieval contracts, result/provenance
    models, native search APIs, and Corpus/Annoy adapters are ****Tier L**** (Python
    3.8+). The MCP **protocol server** is ****Tier S**** (Python >= 3.10 with
    `mcp>=2.0.0,<3`). There is deliberately no ad-hoc JSON-RPC “MCP fallback”.

    Examples

    Try it in your browser!
    ```
    >>> status = server_runtime_status()
    >>> if status["server_available"]:
    ...     server = create_server(retriever)
    ... else:
    ...     hits = retriever.search(
    ...         "query", k=5
    ...     )  # Tier-L: DocsRetriever, pydantic-free

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_mcp_corpus_annoy_hamlet_script_thumb.png)

[Serve a Real Hamlet Corpus over MCP with Annoy](../../auto_examples/mcp/plot_mcp_corpus_annoy_hamlet_script.html)

Serve a Real Hamlet Corpus over MCP with Annoy