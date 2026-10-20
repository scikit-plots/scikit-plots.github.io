# RetrievalOutcome[#](#retrievaloutcome "Link to this heading")

class scikitplot.mcp.RetrievalOutcome(**hits=()**, **\***, **legs=None**, **status=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/mcp/_outcome.py#L151)[#](#scikitplot.mcp.RetrievalOutcome "Link to this definition")
:   Ranked hits plus the story of how they were obtained.

    Parameters:
    :   ****hits****iterable, optional
        :   The fused, ranked hits. Copied into this list.

        ****legs****list of LegRecord, optional
        :   One entry per evidence path considered.

        ****status****str or None, optional
        :   Normally left `None` so it is ****derived**** from `legs` and `hits`.
            Pass a value only for terminal outcomes the legs cannot express, such as
            [`CANCELLED`](scikitplot.mcp.CANCELLED.html#scikitplot.mcp.CANCELLED "scikitplot.mcp.CANCELLED").

    Parameters:
    :   * ****hits**** (**Any**)
        * ****legs**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**LegRecord**](scikitplot.mcp.LegRecord.html#scikitplot.mcp.LegRecord "scikitplot.mcp._outcome.LegRecord")**]**)
        * ****status**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    ****User-focused.**** This is a real [`list`](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)") of hits. `len(outcome)`,
    `for hit in outcome`, `outcome[0]` and `if outcome:` all behave exactly
    as they did before. Read [`status`](#scikitplot.mcp.RetrievalOutcome.status "scikitplot.mcp.RetrievalOutcome.status") when you need to know **why** the list
    is the length it is.

    ****Developer-focused.**** Deriving [`status`](#scikitplot.mcp.RetrievalOutcome.status "scikitplot.mcp.RetrievalOutcome.status") rather than accepting it is
    what makes the “`EMPTY` requires every leg to have run” rule enforceable.
    The derivation order mirrors
    `scikitplot.corpus.RetrievalResponse._derive_status`:

    1. every recorded leg [`FAILED`](scikitplot.mcp.FAILED.html#scikitplot.mcp.FAILED "scikitplot.mcp.FAILED") -> [`FAILED`](scikitplot.mcp.FAILED.html#scikitplot.mcp.FAILED "scikitplot.mcp.FAILED")
    2. any leg [`FAILED`](scikitplot.mcp.FAILED.html#scikitplot.mcp.FAILED "scikitplot.mcp.FAILED") or [`DEGRADED`](scikitplot.mcp.DEGRADED.html#scikitplot.mcp.DEGRADED "scikitplot.mcp.DEGRADED") -> [`DEGRADED`](scikitplot.mcp.DEGRADED.html#scikitplot.mcp.DEGRADED "scikitplot.mcp.DEGRADED")
    3. all legs ran, zero hits -> [`EMPTY`](scikitplot.mcp.EMPTY.html#scikitplot.mcp.EMPTY "scikitplot.mcp.EMPTY")
    4. otherwise -> [`SUCCESS`](scikitplot.mcp.SUCCESS.html#scikitplot.mcp.SUCCESS "scikitplot.mcp.SUCCESS")

    With no legs recorded the outcome degrades to the historical behaviour
    ([`EMPTY`](scikitplot.mcp.EMPTY.html#scikitplot.mcp.EMPTY "scikitplot.mcp.EMPTY") when there are no hits, [`SUCCESS`](scikitplot.mcp.SUCCESS.html#scikitplot.mcp.SUCCESS "scikitplot.mcp.SUCCESS") otherwise), so a
    retriever that has not yet been updated keeps its previous meaning.

    Examples

    Try it in your browser!
    ```
    >>> RetrievalOutcome([]).status
    'empty'
    >>> failed = LegRecord("dense", FAILED, error="index unavailable")
    >>> RetrievalOutcome([], legs=[failed]).status
    'failed'
    >>> ok = LegRecord("lexical", EMPTY)
    >>> RetrievalOutcome([], legs=[ok, failed]).status
    'degraded'

    ```
    Go BackOpen In Tab

    append(**object**, **/**)[#](#scikitplot.mcp.RetrievalOutcome.append "Link to this definition")
    :   Append object to the end of the list.

    as\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/mcp/_outcome.py#L252)[#](#scikitplot.mcp.RetrievalOutcome.as_dict "Link to this definition")
    :   Return a JSON-safe mapping describing the outcome, without the hits.

        Returns:
        :   dict
            :   Keys `status` and `legs`.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    clear(**/**)[#](#scikitplot.mcp.RetrievalOutcome.clear "Link to this definition")
    :   Remove all items from list.

    copy(**/**)[#](#scikitplot.mcp.RetrievalOutcome.copy "Link to this definition")
    :   Return a shallow copy of the list.

    count(**value**, **/**)[#](#scikitplot.mcp.RetrievalOutcome.count "Link to this definition")
    :   Return number of occurrences of value.

    property degraded: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.mcp.RetrievalOutcome.degraded "Link to this definition")
    :   `True` when at least one evidence path did not run cleanly.

        Type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    errors()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/mcp/_outcome.py#L242)[#](#scikitplot.mcp.RetrievalOutcome.errors "Link to this definition")
    :   Return the explanations from every leg that did not run cleanly.

        Returns:
        :   list of str

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    extend(**iterable**, **/**)[#](#scikitplot.mcp.RetrievalOutcome.extend "Link to this definition")
    :   Extend list by appending elements from the iterable.

    property failed: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.mcp.RetrievalOutcome.failed "Link to this definition")
    :   `True` when no evidence path produced a usable answer.

        Type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    index(**value**, **start=0**, **stop=sys.maxsize**, **/**)[#](#scikitplot.mcp.RetrievalOutcome.index "Link to this definition")
    :   Return first index of value.

        Raises ValueError if the value is not present.

    insert(**index**, **object**, **/**)[#](#scikitplot.mcp.RetrievalOutcome.insert "Link to this definition")
    :   Insert object before index.

    legs: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[LegRecord](scikitplot.mcp.LegRecord.html#scikitplot.mcp.LegRecord "scikitplot.mcp._outcome.LegRecord")][#](#scikitplot.mcp.RetrievalOutcome.legs "Link to this definition")
    :   !! processed by numpydoc !!

    pop(**index=-1**, **/**)[#](#scikitplot.mcp.RetrievalOutcome.pop "Link to this definition")
    :   Remove and return item at index (default last).

        Raises IndexError if list is empty or index is out of range.

    remove(**value**, **/**)[#](#scikitplot.mcp.RetrievalOutcome.remove "Link to this definition")
    :   Remove first occurrence of value.

        Raises ValueError if the value is not present.

    reverse(**/**)[#](#scikitplot.mcp.RetrievalOutcome.reverse "Link to this definition")
    :   Reverse **IN PLACE**.

    sort(**\***, **key=None**, **reverse=False**)[#](#scikitplot.mcp.RetrievalOutcome.sort "Link to this definition")
    :   Sort the list in ascending order and return None.

        The sort is in-place (i.e. the list itself is modified) and stable (i.e. the
        order of two equal elements is maintained).

        If a key function is given, apply it once to each list item and sort them,
        ascending or descending, according to their function values.

        The reverse flag can be set to sort in descending order.

    status: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.mcp.RetrievalOutcome.status "Link to this definition")
    :   !! processed by numpydoc !!