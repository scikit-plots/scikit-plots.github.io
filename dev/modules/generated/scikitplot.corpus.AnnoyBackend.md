# AnnoyBackend[#](#annoybackend "Link to this heading")

class scikitplot.corpus.AnnoyBackend(**\***, **metric='angular'**, **n\_trees=10**, **search\_k=-1**, **impl='auto'**, **dtype=None**, **index\_dtype=None**, **allow\_fallback=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_similarity/_backends.py#L527)[#](#scikitplot.corpus.AnnoyBackend "Link to this definition")
:   ANN backend over a scikit-plots Annoy `Index` (default backend).

    Works with ****both**** shipped Annoy index classes, which expose the same
    `add_item` / `build` / `get_nns_by_vector` contract:

    * `scikitplot.annoy.Index` — the high-level, mixin-composed class
      (adds a validated bulk `add_items` path).
    * `scikitplot.annoy._annoy.Index` — the Cython class, which additionally
      accepts `dtype` (embedding precision) and `index_dtype` (id width).

    Parameters:
    :   ****metric****str, optional
        :   Annoy distance metric. `"angular"` (default) yields cosine-like
            ranking; the angular distance is converted back to exact cosine
            similarity for the unified score contract.

        ****n\_trees****int, optional
        :   Number of trees built (accuracy/size trade-off).

        ****search\_k****int, optional
        :   Query-time node budget passed to Annoy; `-1` lets Annoy choose.

        ****impl****str, optional
        :   Which index class to use: `"auto"` (default: a binding that accepts
            every requested option, the high-level class first), `"highlevel"`,
            or `"cython"`.

        ****dtype****str or None, optional
        :   Embedding precision (e.g. `"float32"`, `"float64"`). Accepted by
            the Cython class only; `impl="auto"` therefore picks it.

        ****index\_dtype****str or None, optional
        :   Item-id integer width (e.g. `"int32"`, `"uint64"`) for very large
            corpora. Cython class only, like `dtype`.

        ****allow\_fallback****bool, optional
        :   What happens when the binding that runs cannot honour `dtype` or
            `index_dtype` (`impl="highlevel"`, or no accepting binding
            loads), or the preferred binding under `"auto"` cannot load:
            `True` (default) builds anyway and reports it
            ([`fallback_reason`](#scikitplot.corpus.AnnoyBackend.fallback_reason "scikitplot.corpus.AnnoyBackend.fallback_reason"), [`discarded_options`](#scikitplot.corpus.AnnoyBackend.discarded_options "scikitplot.corpus.AnnoyBackend.discarded_options"), one warning);
            `False` raises [`FallbackRefusedError`](scikitplot.corpus.FallbackRefusedError.html#scikitplot.corpus.FallbackRefusedError "scikitplot.corpus.FallbackRefusedError") when [`build`](#scikitplot.corpus.AnnoyBackend.build "scikitplot.corpus.AnnoyBackend.build") is
            called. `dtype` and `index_dtype` spellings are validated by the
            binding that honours them; a value dropped by a fallback is reported
            verbatim.

    Parameters:
    :   * ****metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****n\_trees**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****search\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****impl**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****dtype**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****index\_dtype**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****allow\_fallback**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****Developer note:**** Annoy’s `"angular"` metric operates on internally
    normalised vectors, so for two vectors with cosine similarity `c` the
    reported distance is `d = sqrt(2 * (1 - c))`. Cosine is recovered exactly
    as `c = 1 - d**2 / 2` — the correct inverse (a plain `1 - d/2` is not).

    property allow\_fallback: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.AnnoyBackend.allow_fallback "Link to this definition")
    :   Whether a fallback was allowed (`False` raises instead).

    build(**embeddings**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_similarity/_backends.py#L687)[#](#scikitplot.corpus.AnnoyBackend.build "Link to this definition")
    :   Build the index from an `(n_docs, dim)` embedding matrix.

        Parameters:
        :   ****embeddings****numpy.ndarray
            :   Row-major `float32` matrix. Rows are **not** required to be
                unit-normalised; each backend normalises internally as needed
                for cosine similarity.

        Parameters:
        :   ****embeddings**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   None

    capabilities()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_similarity/_backends.py#L403)[#](#scikitplot.corpus.AnnoyBackend.capabilities "Link to this definition")
    :   Return every declared capability as a mapping.

        Returns:
        :   dict
            :   Suitable for a capability report or a build manifest.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    dependency\_modules: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")] = ('scikitplot.annoy', 'scikitplot.annoy.\_annoy')[#](#scikitplot.corpus.AnnoyBackend.dependency_modules "Link to this definition")

    property dimension: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.AnnoyBackend.dimension "Link to this definition")
    :   Vector length this index was built with, `None` before build.

    property discarded\_options: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][#](#scikitplot.corpus.AnnoyBackend.discarded_options "Link to this definition")
    :   Options this backend requested and the binding that ran cannot honour.

        Returns:
        :   dict
            :   Empty when everything requested was honoured. Non-empty only when
                `allow_fallback` is `True` and [`fallback_reason`](#scikitplot.corpus.AnnoyBackend.fallback_reason "scikitplot.corpus.AnnoyBackend.fallback_reason") is
                `"option_unsupported"`.

    dtype: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'float32'[#](#scikitplot.corpus.AnnoyBackend.dtype "Link to this definition")
    :   Element type of the indexed vectors.

    property fallback\_reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.AnnoyBackend.fallback_reason "Link to this definition")
    :   Why what runs differs from what was requested, or `None`.

        The selection reason (`"<backend>_broken"`) first, then the
        binding’s (`"option_unsupported"`, `"<binding>_unavailable"`).

    classmethod is\_available()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_similarity/_backends.py#L316)[#](#scikitplot.corpus.AnnoyBackend.is_available "Link to this definition")
    :   Return whether this backend can be used now: installed and loading.

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    classmethod is\_installed()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_similarity/_backends.py#L641)[#](#scikitplot.corpus.AnnoyBackend.is_installed "Link to this definition")
    :   Return whether `scikitplot.annoy` can be found, importing nothing.

        Notes

        ****Developer.**** Only the package is looked up: finding a submodule
        (`scikitplot.annoy._annoy`) would import the package, whose mixins
        import scikit-learn and SciPy (F-50).

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    classmethod load\_error()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_similarity/_backends.py#L658)[#](#scikitplot.corpus.AnnoyBackend.load_error "Link to this definition")
    :   Return why no Annoy binding loads, or `None` when one does.

        Notes

        ****Developer.**** This imports the bindings, so it costs what using them
        costs; [`capability_snapshot`](scikitplot.corpus.capability_snapshot.html#scikitplot.corpus.capability_snapshot "scikitplot.corpus.capability_snapshot") calls it only
        when asked to load (`load=True`) or once Annoy is already loaded.

        Return type:
        :   [BaseException](https://docs.python.org/3/builtins/exceptions.html#BaseException "(in Python v3.15)") | None

    loads\_on\_probe: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")] = True[#](#scikitplot.corpus.AnnoyBackend.loads_on_probe "Link to this definition")
    :   Whether answering [`is_available`](#scikitplot.corpus.AnnoyBackend.is_available "scikitplot.corpus.AnnoyBackend.is_available") imports the backend’s packages
        (a native library); `capability_snapshot(load=False)` then asks only
        once the modules in [`probe_modules`](#scikitplot.corpus.AnnoyBackend.probe_modules "scikitplot.corpus.AnnoyBackend.probe_modules") are already loaded (F-50).

    memory\_profile: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'in\_memory'[#](#scikitplot.corpus.AnnoyBackend.memory_profile "Link to this definition")
    :   `"in_memory"`, `"mmap"` or `"hybrid"`.

    metric: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'cosine'[#](#scikitplot.corpus.AnnoyBackend.metric "Link to this definition")
    :   Distance/similarity metric this backend computes.

    name: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = 'annoy'[#](#scikitplot.corpus.AnnoyBackend.name "Link to this definition")

    probe\_modules: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...]] = ('scikitplot.annoy',)[#](#scikitplot.corpus.AnnoyBackend.probe_modules "Link to this definition")

    provenance()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_similarity/_backends.py#L765)[#](#scikitplot.corpus.AnnoyBackend.provenance "Link to this definition")
    :   Return [`VectorIndexBackend.provenance`](scikitplot.corpus.VectorIndexBackend.html#scikitplot.corpus.VectorIndexBackend.provenance "scikitplot.corpus.VectorIndexBackend.provenance") plus the binding.

        Returns:
        :   dict
            :   Adds `requested_impl`, `impl` (`None` before [`build`](#scikitplot.corpus.AnnoyBackend.build "scikitplot.corpus.AnnoyBackend.build"))
                and `discarded_options`.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    query(**vector**, **k**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_similarity/_backends.py#L726)[#](#scikitplot.corpus.AnnoyBackend.query "Link to this definition")
    :   Return up to `k` `(row_index, cosine_score)` pairs.

        Results are sorted by descending `cosine_score` in `[-1, 1]` with
        deterministic, index-ascending tie breaking. A zero-norm query returns
        an empty list (cosine is undefined). Non-finite queries raise.

        Parameters:
        :   * ****vector**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]]

    property requested\_backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.AnnoyBackend.requested_backend "Link to this definition")
    :   `"auto"`, a name or a class.

        Type:
        :   What the configuration asked for

    score\_semantics: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'cosine\_similarity'[#](#scikitplot.corpus.AnnoyBackend.score_semantics "Link to this definition")
    :   Meaning of the `score` in [`query`](#scikitplot.corpus.AnnoyBackend.query "scikitplot.corpus.AnnoyBackend.query") results.

        `"cosine_similarity"` – range `[-1, 1]`, higher is better.
        `"bounded_inverse_distance"` – range `(0, 1]`, higher is better, but
        ****not**** a similarity: it is `1 / (1 + d)` and is not comparable with a
        cosine score. Declaring this is what lets a threshold be validated against
        the scale it will actually be applied to (finding F-R06-02).

    supports\_persistence: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.AnnoyBackend.supports_persistence "Link to this definition")
    :   Whether this backend’s index can be persisted and reloaded.

        `True` since [`ANNIndexArtifact`](scikitplot.corpus.ANNIndexArtifact.html#scikitplot.corpus.ANNIndexArtifact "scikitplot.corpus.ANNIndexArtifact") landed: an
        artifact writes the native payload alongside a versioned ordinal->doc\_id
        sidecar and the embedding manifest, so a reloaded index can prove its rows
        still name the documents they named at write time. Before that, R06 found
        zero persistence surface in this module and the declaration was `False`
        – accurately.

    thread\_safety: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'concurrent\_read'[#](#scikitplot.corpus.AnnoyBackend.thread_safety "Link to this definition")
    :   `"single_thread"`, `"concurrent_read"` or `"full"`.