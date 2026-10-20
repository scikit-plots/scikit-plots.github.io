# RetrievalResponse[#](#retrievalresponse "Link to this heading")

class scikitplot.corpus.RetrievalResponse(**hits=<factory>**, **legs=<factory>**, **query=None**, **status=None**, **filter=None**, **scope=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_retrieval.py#L240)[#](#scikitplot.corpus.RetrievalResponse "Link to this definition")
:   Hits plus the story of how they were obtained.

    Parameters:
    :   ****hits****list
        :   Fused, ranked hits.

        ****legs****list of LegOutcome, optional
        :   One entry per evidence path considered, including skipped ones.

        ****query****str or None, optional
        :   The query text, for provenance.

        ****status****RetrievalStatus or None, optional
        :   Normally left `None` so it is ****derived**** from `legs` and `hits`.
            Pass a value only for terminal outcomes the legs cannot express, such as
            `CANCELLED`.

        ****filter****Filter or None, optional
        :   The caller’s own filter as every leg applied it (R2-2), checked and
            frozen, or `None`.

        ****scope****str or None, optional
        :   The label of the index’s security filter, which every leg also applied,
            or `None`. The scope’s expression itself is not reported: it may
            enumerate what a caller is not allowed to see.

    Parameters:
    :   * ****hits**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)"))
        * ****legs**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**LegOutcome**](scikitplot.corpus.LegOutcome.html#scikitplot.corpus.LegOutcome "scikitplot.corpus._retrieval.LegOutcome")**]**)
        * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****status**** ([**RetrievalStatus**](scikitplot.corpus.RetrievalStatus.html#scikitplot.corpus.RetrievalStatus "scikitplot.corpus._retrieval.RetrievalStatus") **|** **None**)
        * ****filter**** ([**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter") **|** **None**)
        * ****scope**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Notes

    ****User.**** This object stands in for the plain list it replaced: `len()`,
    iteration and indexing all address the hits.

    ****Developer.**** Deriving [`status`](#scikitplot.corpus.RetrievalResponse.status "scikitplot.corpus.RetrievalResponse.status") rather than accepting it is what
    makes the `EMPTY`-requires-all-legs-ran rule enforceable. See
    `_derive_status`.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus._diagnostics import ErrorCategory, ErrorRecord
    >>> ok = LegOutcome(LegKind.LEXICAL, LegStatus.EMPTY)
    >>> RetrievalResponse(hits=[], legs=[ok]).status
    <RetrievalStatus.EMPTY: 'empty'>

    ```

    A leg that could not run makes an empty result `DEGRADED`, not `EMPTY`:

    ```
    >>> bad = LegOutcome(
    ...     LegKind.DENSE,
    ...     LegStatus.FAILED,
    ...     error=ErrorRecord(
    ...         code="NO_QUERY_EMBEDDING",
    ...         category=ErrorCategory.CAPABILITY,
    ...         message="no query embedding supplied",
    ...     ),
    ... )
    >>> RetrievalResponse(hits=[], legs=[ok, bad]).status
    <RetrievalStatus.DEGRADED: 'degraded'>

    ```
    Go BackOpen In Tab

    property degraded\_legs: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[LegOutcome](scikitplot.corpus.LegOutcome.html#scikitplot.corpus.LegOutcome "scikitplot.corpus._retrieval.LegOutcome")][#](#scikitplot.corpus.RetrievalResponse.degraded_legs "Link to this definition")
    :   Legs that were requested but did not run normally.

    error\_records()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_retrieval.py#L372)[#](#scikitplot.corpus.RetrievalResponse.error_records "Link to this definition")
    :   Return every diagnostic attached to a leg.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")]

    filter: [Filter](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalResponse.filter "Link to this definition")

    hits: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_retrieval.py#L240)[#](#scikitplot.corpus.RetrievalResponse.hits "Link to this definition")

    leg(**kind**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_retrieval.py#L364)[#](#scikitplot.corpus.RetrievalResponse.leg "Link to this definition")
    :   Return the outcome for one evidence path, if present.

        Parameters:
        :   ****kind**** ([**LegKind**](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**LegOutcome**](scikitplot.corpus.LegOutcome.html#scikitplot.corpus.LegOutcome "scikitplot.corpus._retrieval.LegOutcome") | None

    legs: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[LegOutcome](scikitplot.corpus.LegOutcome.html#scikitplot.corpus.LegOutcome "scikitplot.corpus._retrieval.LegOutcome")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_retrieval.py#L240)[#](#scikitplot.corpus.RetrievalResponse.legs "Link to this definition")

    query: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalResponse.query "Link to this definition")

    scope: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalResponse.scope "Link to this definition")

    status: [RetrievalStatus](scikitplot.corpus.RetrievalStatus.html#scikitplot.corpus.RetrievalStatus "scikitplot.corpus._retrieval.RetrievalStatus") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalResponse.status "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_retrieval.py#L385)[#](#scikitplot.corpus.RetrievalResponse.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping of the outcome (not the hits).

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]