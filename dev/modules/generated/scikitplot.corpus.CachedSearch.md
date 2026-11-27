# CachedSearch[#](#cachedsearch "Link to this heading")

class scikitplot.corpus.CachedSearch(**index**, **\***, **max\_entries=1024**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_search_cache.py#L84)[#](#scikitplot.corpus.CachedSearch "Link to this definition")
:   Exact, bounded cache in front of one retrieval index.

    Parameters:
    :   ****index****RetrievalIndex
        :   The index to answer from.

        ****max\_entries****int, default=1024
        :   Responses kept; the least recently used is evicted first.

    Raises:
    :   ValueError
        :   If `max_entries` is not an int of at least 1.

    Parameters:
    :   * ****index**** (**Any**)
        * ****max\_entries**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    clear()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_search_cache.py#L213)[#](#scikitplot.corpus.CachedSearch.clear "Link to this definition")
    :   Drop every stored response.

        Return type:
        :   None

    key(**query**, **config=None**, **query\_embedding=None**, **filter=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_search_cache.py#L120)[#](#scikitplot.corpus.CachedSearch.key "Link to this definition")
    :   Return the cache key of a search, or `None` when it cannot be cached.

        Returns:
        :   str or None
            :   64 hex digits; `None` for an index that is not built, or a
                config with `probability_fusion`.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****query\_embedding**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****filter**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | None

    search(**query**, **\***, **config=None**, **query\_embedding=None**, **filter=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_search_cache.py#L164)[#](#scikitplot.corpus.CachedSearch.search "Link to this definition")
    :   Answer like [`RetrievalIndex.search`](scikitplot.corpus.RetrievalIndex.html#scikitplot.corpus.RetrievalIndex.search "scikitplot.corpus.RetrievalIndex.search"), from the cache when possible.

        Returns:
        :   RetrievalResponse
            :   Equal to what the index returns for the same arguments.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****query\_embedding**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****filter**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    stats()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_search_cache.py#L208)[#](#scikitplot.corpus.CachedSearch.stats "Link to this definition")
    :   Count hits, misses, stored, uncacheable and evicted, and the size.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")]