# CachePolicy[#](#cachepolicy "Link to this heading")

class scikitplot.corpus.CachePolicy(**unpinned='bypass'**, **revision\_resolver=None**, **max\_entries=None**, **max\_bytes=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embeddings/_cache_policy.py#L146)[#](#scikitplot.corpus.CachePolicy "Link to this definition")
:   How [`EmbeddingEngine`](scikitplot.corpus.EmbeddingEngine.html#scikitplot.corpus.EmbeddingEngine "scikitplot.corpus.EmbeddingEngine") uses its disk cache.

    Parameters:
    :   ****unpinned****{“bypass”, “allow”, “resolve”}, default=”bypass”
        :   What to do for a model not pinned to a commit (no `model_revision`,
            or a sentence-transformers branch or tag, which can move).
            `"bypass"` computes and does not cache. `"allow"` caches under
            the name given (an entry can outlive an upstream change of the
            model). `"resolve"` (sentence-transformers, empty
            `model_revision`) calls `revision_resolver` once per engine, then
            loads and keys that commit; when it fails, for another backend, or
            for a branch or tag given in `model_revision` (which is not
            resolved), the call bypasses the cache.

        ****revision\_resolver****callable or None, default=None
        :   `(model_name) -> commit hash`; required by, and only valid with,
            `unpinned="resolve"`. [`resolve_hub_revision`](scikitplot.corpus.resolve_hub_revision.html#scikitplot.corpus.resolve_hub_revision "scikitplot.corpus.resolve_hub_revision") is one. An
            answer that is not a 40- or 64-hex commit counts as a failure.

        ****max\_entries****int or None, default=None
        :   Most entries kept in the cache directory; `None` is unbounded.

        ****max\_bytes****int or None, default=None
        :   Most bytes kept in the cache directory; `None` is unbounded.

    Raises:
    :   ValueError
        :   On an unknown `unpinned`, a resolver without `"resolve"` (or
            `"resolve"` without one), or a bound that is not a positive int.

    Parameters:
    :   * ****unpinned**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****revision\_resolver**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****max\_entries**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)

    > **See also**
    > [`EmbeddingEngine.embed_cached`](scikitplot.corpus.EmbeddingEngine.html#scikitplot.corpus.EmbeddingEngine.embed_cached "scikitplot.corpus.EmbeddingEngine.embed_cached")
    :   Returns the [`CacheStatus`](scikitplot.corpus.CacheStatus.html#scikitplot.corpus.CacheStatus "scikitplot.corpus.CacheStatus").

    Notes

    ****User.**** A custom provider’s identity is its `custom_fn_id`; a
    sentence-transformers model is identified by a commit in
    `model_revision`; another backend by any `model_revision` you state.
    Each makes the cache usable whatever `unpinned` says.

    ****Developer.**** Eviction is least recently used: a hit refreshes the
    entry’s modification time, and after a store the oldest entries (ties by
    name) are removed until both bounds hold. Only `<64 hex>.npy` files are
    counted or removed.

    Examples

    Try it in your browser!
    ```
    >>> CachePolicy(max_entries=1000).unpinned
    'bypass'
    >>> CachePolicy(unpinned="resolve")
    Traceback (most recent call last):
    ...
    ValueError: CachePolicy: unpinned='resolve' requires a revision_resolver (for example resolve_hub_revision).

    ```
    Go BackOpen In Tab

    property bounded: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.CachePolicy.bounded "Link to this definition")
    :   Whether a bound is set (eviction runs after each store).

    max\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CachePolicy.max_bytes "Link to this definition")

    max\_entries: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CachePolicy.max_entries "Link to this definition")

    revision\_resolver: [Callable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CachePolicy.revision_resolver "Link to this definition")

    unpinned: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'bypass'[#](#scikitplot.corpus.CachePolicy.unpinned "Link to this definition")