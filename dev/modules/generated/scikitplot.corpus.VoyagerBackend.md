# VoyagerBackend[#](#voyagerbackend "Link to this heading")

class scikitplot.corpus.VoyagerBackend[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_similarity/_backends.py#L851)[#](#scikitplot.corpus.VoyagerBackend "Link to this definition")
:   ANN backend over a Voyager cosine-space index.

    Voyager’s cosine **distance** is `1 - cosine`; cosine similarity is
    recovered as `1 - distance` for the unified contract.

    property allow\_fallback: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.VoyagerBackend.allow_fallback "Link to this definition")
    :   Whether a fallback was allowed (`False` raises instead).

    build(**embeddings**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_similarity/_backends.py#L867)[#](#scikitplot.corpus.VoyagerBackend.build "Link to this definition")
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

    capabilities()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_similarity/_backends.py#L403)[#](#scikitplot.corpus.VoyagerBackend.capabilities "Link to this definition")
    :   Return every declared capability as a mapping.

        Returns:
        :   dict
            :   Suitable for a capability report or a build manifest.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    dependency\_modules: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")] = 'voyager'[#](#scikitplot.corpus.VoyagerBackend.dependency_modules "Link to this definition")

    property dimension: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.VoyagerBackend.dimension "Link to this definition")
    :   Vector length this index was built with, `None` before build.

    dtype: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'float32'[#](#scikitplot.corpus.VoyagerBackend.dtype "Link to this definition")
    :   Element type of the indexed vectors.

    property fallback\_reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.VoyagerBackend.fallback_reason "Link to this definition")
    :   Why the backend that runs is not the one requested, or `None`.

    classmethod is\_available()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_similarity/_backends.py#L316)[#](#scikitplot.corpus.VoyagerBackend.is_available "Link to this definition")
    :   Return whether this backend can be used now: installed and loading.

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    classmethod is\_installed()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_similarity/_backends.py#L340)[#](#scikitplot.corpus.VoyagerBackend.is_installed "Link to this definition")
    :   Return whether this backend’s packages can be found, importing none.

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    classmethod load\_error()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_similarity/_backends.py#L321)[#](#scikitplot.corpus.VoyagerBackend.load_error "Link to this definition")
    :   Return the exception that stops this backend loading, or `None`.

        Imports [`dependency_modules`](#scikitplot.corpus.VoyagerBackend.dependency_modules "scikitplot.corpus.VoyagerBackend.dependency_modules") (when installed) and returns the
        first failure. An installed backend with a load error is **broken**,
        never **absent**.

        Return type:
        :   [BaseException](https://docs.python.org/3/builtins/exceptions.html#BaseException "(in Python v3.15)") | None

    loads\_on\_probe: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")] = True[#](#scikitplot.corpus.VoyagerBackend.loads_on_probe "Link to this definition")
    :   Whether answering [`is_available`](#scikitplot.corpus.VoyagerBackend.is_available "scikitplot.corpus.VoyagerBackend.is_available") imports the backend’s packages
        (a native library); `capability_snapshot(load=False)` then asks only
        once the modules in [`probe_modules`](#scikitplot.corpus.VoyagerBackend.probe_modules "scikitplot.corpus.VoyagerBackend.probe_modules") are already loaded (F-50).

    memory\_profile: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'in\_memory'[#](#scikitplot.corpus.VoyagerBackend.memory_profile "Link to this definition")
    :   `"in_memory"`, `"mmap"` or `"hybrid"`.

    metric: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'cosine'[#](#scikitplot.corpus.VoyagerBackend.metric "Link to this definition")
    :   Distance/similarity metric this backend computes.

    name: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = 'voyager'[#](#scikitplot.corpus.VoyagerBackend.name "Link to this definition")

    probe\_modules: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...]] = ('voyager',)[#](#scikitplot.corpus.VoyagerBackend.probe_modules "Link to this definition")

    provenance()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_similarity/_backends.py#L458)[#](#scikitplot.corpus.VoyagerBackend.provenance "Link to this definition")
    :   Return what was requested, what runs, and why they differ (R2-5).

        Returns:
        :   dict
            :   `requested_backend`, `backend`, `fallback_reason` and
                `allow_fallback`; JSON-compatible.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    query(**vector**, **k**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_similarity/_backends.py#L877)[#](#scikitplot.corpus.VoyagerBackend.query "Link to this definition")
    :   Return up to `k` `(row_index, cosine_score)` pairs.

        Results are sorted by descending `cosine_score` in `[-1, 1]` with
        deterministic, index-ascending tie breaking. A zero-norm query returns
        an empty list (cosine is undefined). Non-finite queries raise.

        Parameters:
        :   * ****vector**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]]

    property requested\_backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.VoyagerBackend.requested_backend "Link to this definition")
    :   `"auto"`, a name or a class.

        Type:
        :   What the configuration asked for

    score\_semantics: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'cosine\_similarity'[#](#scikitplot.corpus.VoyagerBackend.score_semantics "Link to this definition")
    :   Meaning of the `score` in [`query`](#scikitplot.corpus.VoyagerBackend.query "scikitplot.corpus.VoyagerBackend.query") results.

        `"cosine_similarity"` – range `[-1, 1]`, higher is better.
        `"bounded_inverse_distance"` – range `(0, 1]`, higher is better, but
        ****not**** a similarity: it is `1 / (1 + d)` and is not comparable with a
        cosine score. Declaring this is what lets a threshold be validated against
        the scale it will actually be applied to (finding F-R06-02).

    supports\_persistence: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.VoyagerBackend.supports_persistence "Link to this definition")
    :   Whether this backend’s index can be persisted and reloaded.

        `True` since [`ANNIndexArtifact`](scikitplot.corpus.ANNIndexArtifact.html#scikitplot.corpus.ANNIndexArtifact "scikitplot.corpus.ANNIndexArtifact") landed: an
        artifact writes the native payload alongside a versioned ordinal->doc\_id
        sidecar and the embedding manifest, so a reloaded index can prove its rows
        still name the documents they named at write time. Before that, R06 found
        zero persistence surface in this module and the declaration was `False`
        – accurately.

    thread\_safety: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'concurrent\_read'[#](#scikitplot.corpus.VoyagerBackend.thread_safety "Link to this definition")
    :   `"single_thread"`, `"concurrent_read"` or `"full"`.