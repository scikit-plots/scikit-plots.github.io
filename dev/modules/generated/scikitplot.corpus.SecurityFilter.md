# SecurityFilter[#](#securityfilter "Link to this heading")

class scikitplot.corpus.SecurityFilter(**expression**, **label='security'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_filters.py#L810)[#](#scikitplot.corpus.SecurityFilter "Link to this definition")
:   A scope bound to an index and AND-ed with every query’s own filter.

    Parameters:
    :   ****expression****Filter
        :   The documents a caller of this index may see.

        ****label****str, optional
        :   Name for reports. Default `"security"`.

    Parameters:
    :   * ****expression**** ([**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter"))
        * ****label**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    ****User.**** Bind it where the index is built (`RetrievalIndex(...,
    security_filter=...)`), not per query: a query’s `filter` is AND-ed with
    it, so a caller (an MCP tool, an agent’s tool call) can narrow the result
    but never widen it, and there is no argument through which to drop it.

    ****Developer.**** The expression is replaced by [`validate_filter`](scikitplot.corpus.validate_filter.html#scikitplot.corpus.validate_filter "scikitplot.corpus.validate_filter")’s copy
    at construction: the nine built-in operators, JSON scalars only, filterable
    fields only. A misspelled field is refused here instead of reading as
    missing (which would make a deny-list scope `Not(Eq(...))` admit
    everything), and nothing reachable from the stored expression can be
    mutated by whoever built it.

    Examples

    Try it in your browser!
    ```
    >>> scope = SecurityFilter(Eq("collection_id", "public"))
    >>> scope.combine(Eq("language", "en"))
    And(clauses=(Eq(field='collection_id', value='public'), Eq(field='language', value='en')))

    ```
    Go BackOpen In Tab

    combine(**expression**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_filters.py#L857)[#](#scikitplot.corpus.SecurityFilter.combine "Link to this definition")
    :   Return the security expression AND-ed with `expression`.

        Parameters:
        :   ****expression**** ([**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter") **|** **None**)

        Return type:
        :   [**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter")

    expression: [Filter](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_filters.py#L810)[#](#scikitplot.corpus.SecurityFilter.expression "Link to this definition")

    label: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'security'[#](#scikitplot.corpus.SecurityFilter.label "Link to this definition")