# r\_precision[#](#r-precision "Link to this heading")

scikitplot.corpus.r\_precision(**y\_true**, **y\_pred**, **\***, **sample\_weight=None**, **relevance\_threshold=1**, **duplicates='raise'**, **zero\_division='warn'**, **average='mean'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_ranking.py#L753)[#](#scikitplot.corpus.r_precision "Link to this definition")
:   Precision at `|R|`, the number of relevant identifiers of each query.

    Parameters:
    :   ****y\_true****sequence or mapping
        :   Relevance judgments per query.

        ****y\_pred****sequence or mapping
        :   Rankings per query, best first.

        ****sample\_weight****array-like of shape (n\_queries,), default=None
        :   Per-query weights of the mean.

        ****relevance\_threshold****float, default=1
        :   Grade from which a judged identifier is relevant.

        ****duplicates****{“raise”, “first”}, default=”raise”
        :   What a repeated identifier in a ranking does.

        ****zero\_division****{“warn”, 0.0, 1.0, np.nan}, default=”warn”
        :   Value for a query without a relevant identifier.

        ****average****{“mean”, None}, default=”mean”
        :   `None` returns the per-query values.

    Returns:
    :   float or numpy.ndarray

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_pred**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****sample\_weight**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****relevance\_threshold**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****duplicates**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****zero\_division**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****average**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    > **See also**
    > [`precision_at_k`](scikitplot.corpus.precision_at_k.html#scikitplot.corpus.precision_at_k "scikitplot.corpus.precision_at_k"), [`mean_average_precision`](scikitplot.corpus.mean_average_precision.html#scikitplot.corpus.mean_average_precision "scikitplot.corpus.mean_average_precision")

    Examples

    Try it in your browser!
    ```
    >>> r_precision([["a", "b"]], [["a", "x", "b"]])
    0.5

    ```
    Go BackOpen In Tab