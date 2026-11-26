# ProfileResult[#](#profileresult "Link to this heading")

class scikitplot.\_ipymagic.ProfileResult(**rows**, **total\_calls**, **total\_time**, **sort**, **limit**, **functions**, **stats\_file=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/_ipymagic/_results.py#L177)[#](#scikitplot._ipymagic.ProfileResult "Link to this definition")
:   A profile of a statement or cell, displayed as a table.

    Parameters:
    :   ****rows****tuple of ProfileRow
        :   The top functions, sorted by `sort`.

        ****total\_calls****int
        :   Function calls recorded.

        ****total\_time****float
        :   Seconds recorded (the profiler’s own clock).

        ****sort****str
        :   Sort key (`"cumulative"`, `"tottime"`, `"ncalls"`).

        ****limit****int
        :   Rows kept.

        ****functions****int
        :   Distinct functions recorded (rows beyond `limit` included).

        ****stats\_file****str or None, default=None
        :   Where the [`pstats`](https://docs.python.org/3/library/pstats.html#module-pstats "(in Python v3.15)") data was written, if anywhere.

    Parameters:
    :   * ****rows**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**ProfileRow**](scikitplot._ipymagic.ProfileRow.html#scikitplot._ipymagic.ProfileRow "scikitplot._ipymagic._results.ProfileRow")**,** **...****]**)
        * ****total\_calls**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****total\_time**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****sort**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****limit**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****functions**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****stats\_file**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    functions: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/_ipymagic/_results.py#L177)[#](#scikitplot._ipymagic.ProfileResult.functions "Link to this definition")

    limit: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/_ipymagic/_results.py#L177)[#](#scikitplot._ipymagic.ProfileResult.limit "Link to this definition")

    rows: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[ProfileRow](scikitplot._ipymagic.ProfileRow.html#scikitplot._ipymagic.ProfileRow "scikitplot._ipymagic._results.ProfileRow"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/_ipymagic/_results.py#L177)[#](#scikitplot._ipymagic.ProfileResult.rows "Link to this definition")

    sort: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/_ipymagic/_results.py#L177)[#](#scikitplot._ipymagic.ProfileResult.sort "Link to this definition")

    stats\_file: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot._ipymagic.ProfileResult.stats_file "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/_ipymagic/_results.py#L208)[#](#scikitplot._ipymagic.ProfileResult.to_dict "Link to this definition")
    :   Return the profile as plain data (JSON-serialisable).

        Returns:
        :   dict
            :   Every field; rows as mappings.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    to\_text()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/_ipymagic/_results.py#L231)[#](#scikitplot._ipymagic.ProfileResult.to_text "Link to this definition")
    :   Return the profile as a fixed-width table.

        Returns:
        :   str
            :   A header line, column titles, one line per row.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    total\_calls: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/_ipymagic/_results.py#L177)[#](#scikitplot._ipymagic.ProfileResult.total_calls "Link to this definition")

    total\_time: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/_ipymagic/_results.py#L177)[#](#scikitplot._ipymagic.ProfileResult.total_time "Link to this definition")