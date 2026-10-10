# reciprocal\_rank\_fusion[#](#reciprocal-rank-fusion "Link to this heading")

scikitplot.mcp.reciprocal\_rank\_fusion(**ranked\_lists**, **\***, **k=60**, **key=<function \_chunk\_key>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/mcp/_hybrid.py#L92)[#](#scikitplot.mcp.reciprocal_rank_fusion "Link to this definition")
:   Fuse weighted ranked lists into a single `key -> score` map.

    Parameters:
    :   ****ranked\_lists****sequence of (weight, items)
        :   Each leg’s weight and its best-first ranked items.

        ****k****int, optional
        :   RRF constant (default [`DEFAULT_RRF_K`](scikitplot.mcp.DEFAULT_RRF_K.html#scikitplot.mcp.DEFAULT_RRF_K "scikitplot.mcp.DEFAULT_RRF_K")).

        ****key****callable, optional
        :   Maps an item to its fusion identity (default `_chunk_key`).

    Returns:
    :   dict
        :   `identity -> fused score` (higher is better).

    Parameters:
    :   * ****ranked\_lists**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**,** [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]****]**)
        * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****key**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]