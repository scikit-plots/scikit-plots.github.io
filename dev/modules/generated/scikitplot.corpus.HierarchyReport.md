# HierarchyReport[#](#hierarchyreport "Link to this heading")

class scikitplot.corpus.HierarchyReport(**errors=<factory>**, **checked=0**, **max\_depth\_seen=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_hierarchy.py#L71)[#](#scikitplot.corpus.HierarchyReport "Link to this definition")
:   Outcome of validating a document hierarchy.

    Parameters:
    :   ****errors****list of ErrorRecord
        :   One record per violation found.

        ****checked****int
        :   Number of documents examined.

        ****max\_depth\_seen****int
        :   Deepest ancestor chain encountered.

    Parameters:
    :   * ****errors**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")**]**)
        * ****checked**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_depth\_seen**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    checked: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.HierarchyReport.checked "Link to this definition")

    errors: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[ErrorRecord](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_hierarchy.py#L71)[#](#scikitplot.corpus.HierarchyReport.errors "Link to this definition")

    max\_depth\_seen: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.HierarchyReport.max_depth_seen "Link to this definition")

    property ok: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.HierarchyReport.ok "Link to this definition")
    :   Whether the hierarchy is free of violations.

    raise\_if\_invalid()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_hierarchy.py#L94)[#](#scikitplot.corpus.HierarchyReport.raise_if_invalid "Link to this definition")
    :   Raise if any violation was found.

        Raises:
        :   ValueError
            :   Naming every violation.

        Return type:
        :   None

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_hierarchy.py#L106)[#](#scikitplot.corpus.HierarchyReport.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]