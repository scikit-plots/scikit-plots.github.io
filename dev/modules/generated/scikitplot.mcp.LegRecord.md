# LegRecord[#](#legrecord "Link to this heading")

class scikitplot.mcp.LegRecord(**leg**, **status**, **hit\_count=0**, **error=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/mcp/_outcome.py#L75)[#](#scikitplot.mcp.LegRecord "Link to this definition")
:   How one retrieval leg fared.

    Parameters:
    :   ****leg****str
        :   Identifier for the evidence path, e.g. `"dense"` or `"lexical"`.

        ****status****str
        :   One of [`SUCCESS`](scikitplot.mcp.SUCCESS.html#scikitplot.mcp.SUCCESS "scikitplot.mcp.SUCCESS"), [`EMPTY`](scikitplot.mcp.EMPTY.html#scikitplot.mcp.EMPTY "scikitplot.mcp.EMPTY"), [`DEGRADED`](scikitplot.mcp.DEGRADED.html#scikitplot.mcp.DEGRADED "scikitplot.mcp.DEGRADED"), [`FAILED`](scikitplot.mcp.FAILED.html#scikitplot.mcp.FAILED "scikitplot.mcp.FAILED")
            or [`CANCELLED`](scikitplot.mcp.CANCELLED.html#scikitplot.mcp.CANCELLED "scikitplot.mcp.CANCELLED").

        ****hit\_count****int, optional
        :   Hits contributed by this leg **before** fusion.

        ****error****str or None, optional
        :   Human-readable reason. Required when `status` is [`DEGRADED`](scikitplot.mcp.DEGRADED.html#scikitplot.mcp.DEGRADED "scikitplot.mcp.DEGRADED") or
            [`FAILED`](scikitplot.mcp.FAILED.html#scikitplot.mcp.FAILED "scikitplot.mcp.FAILED").

    Raises:
    :   ValueError
        :   If `status` is not a known status, or if a degraded/failed leg is
            recorded without an `error`.

    Parameters:
    :   * ****leg**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****status**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****hit\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****error**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Notes

    ****Developer-focused.**** The error-required invariant is enforced here rather
    than merely documented, matching
    [`scikitplot.corpus.LegOutcome`](scikitplot.corpus.LegOutcome.html#scikitplot.corpus.LegOutcome "scikitplot.corpus.LegOutcome"): an unexplained degradation is as
    unhelpful as no degradation signal at all.

    as\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/mcp/_outcome.py#L128)[#](#scikitplot.mcp.LegRecord.as_dict "Link to this definition")
    :   Return a JSON-safe mapping describing this leg.

        Returns:
        :   dict
            :   Keys `leg`, `status`, `hit_count` and — only when set —
                `error`.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    error[#](#scikitplot.mcp.LegRecord.error "Link to this definition")
    :   !! processed by numpydoc !!

    hit\_count[#](#scikitplot.mcp.LegRecord.hit_count "Link to this definition")
    :   !! processed by numpydoc !!

    leg[#](#scikitplot.mcp.LegRecord.leg "Link to this definition")
    :   !! processed by numpydoc !!

    status[#](#scikitplot.mcp.LegRecord.status "Link to this definition")
    :   !! processed by numpydoc !!