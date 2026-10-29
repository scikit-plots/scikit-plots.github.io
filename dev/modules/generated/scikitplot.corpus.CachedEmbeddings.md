# CachedEmbeddings[#](#cachedembeddings "Link to this heading")

class scikitplot.corpus.CachedEmbeddings(**embeddings**, **status**, **key**, **revision**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_embeddings/_cache_policy.py#L123)[#](#scikitplot.corpus.CachedEmbeddings "Link to this definition")
:   The result of [`EmbeddingEngine.embed_cached`](scikitplot.corpus.EmbeddingEngine.html#scikitplot.corpus.EmbeddingEngine.embed_cached "scikitplot.corpus.EmbeddingEngine.embed_cached").

    Attributes:
    :   ****embeddings****numpy.ndarray
        :   `(n_texts, dim)` in the engine’s dtype.

        ****status****CacheStatus
        :   What the call did.

        ****key****str or None
        :   The 64-hex cache key, or `None` when the cache was not consulted.

        ****revision****str or None
        :   The revision the key names (pinned, resolved, or the branch or tag
            given with `unpinned="allow"`); `None` when empty or when the
            cache was not consulted.

    Parameters:
    :   * ****embeddings**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****status**** ([**CacheStatus**](scikitplot.corpus.CacheStatus.html#scikitplot.corpus.CacheStatus "scikitplot.corpus._embeddings._cache_policy.CacheStatus"))
        * ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****revision**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    count(**value**, **/**)[#](#scikitplot.corpus.CachedEmbeddings.count "Link to this definition")
    :   Return number of occurrences of value.

    embeddings: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.corpus.CachedEmbeddings.embeddings "Link to this definition")
    :   Alias for field number 0

    index(**value**, **start=0**, **stop=sys.maxsize**, **/**)[#](#scikitplot.corpus.CachedEmbeddings.index "Link to this definition")
    :   Return first index of value.

        Raises ValueError if the value is not present.

    key: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.corpus.CachedEmbeddings.key "Link to this definition")
    :   Alias for field number 2

    revision: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.corpus.CachedEmbeddings.revision "Link to this definition")
    :   Alias for field number 3

    status: [CacheStatus](scikitplot.corpus.CacheStatus.html#scikitplot.corpus.CacheStatus "scikitplot.corpus._embeddings._cache_policy.CacheStatus")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.corpus.CachedEmbeddings.status "Link to this definition")
    :   Alias for field number 1