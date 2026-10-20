# reciprocal\_rank\_fusion[#](#reciprocal-rank-fusion "Link to this heading")

scikitplot.mcp.reciprocal\_rank\_fusion(**ranked\_lists**, **\***, **k=60**, **key=<function \_chunk\_key>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/mcp/_hybrid.py#L98)[#](#scikitplot.mcp.reciprocal_rank_fusion "Link to this definition")
:   Fuse weighted ranked lists into a single `key -> score` map.

    Parameters:
    :   ****ranked\_lists****sequence of (weight, items)
        :   Each leg’s weight and its best-first ranked items.

        ****k****int, optional
        :   RRF constant, an `int` of at least 1 (default [`DEFAULT_RRF_K`](scikitplot.mcp.DEFAULT_RRF_K.html#scikitplot.mcp.DEFAULT_RRF_K "scikitplot.mcp.DEFAULT_RRF_K")).

        ****key****callable, optional
        :   Maps an item to its fusion identity, a non-empty `str` (default
            `_chunk_key`).

    Returns:
    :   dict
        :   `identity -> fused score` (higher is better), in fused order:
            descending score, ties by ascending identity.

    Raises:
    :   TypeError
        :   If `k` or a weight has the wrong type, or `key` returns a non-str.

        ValueError
        :   If `k < 1`, a weight is negative or not finite, or an identity is
            empty.

    Parameters:
    :   * ****ranked\_lists**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**,** [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]****]**)
        * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****key**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]

    Notes

    R2-1: a thin adapter over `FusionPolicy`, the rule shared byte for
    byte with `scikitplot.corpus`. Each leg is named by its position, so legs
    of equal weight stay distinct. The per-leg contributions the contract
    returns are not carried: an MCP result is a [`RetrievedChunk`](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp.RetrievedChunk"), which
    has no field for them.