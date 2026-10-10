# AnnoyBackend[#](#annoybackend "Link to this heading")

class scikitplot.corpus.AnnoyBackend(**\***, **metric='angular'**, **n\_trees=10**, **search\_k=-1**, **impl='auto'**, **dtype=None**, **index\_dtype=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_similarity/_backends.py#L357)[#](#scikitplot.corpus.AnnoyBackend "Link to this definition")
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
        :   Which index class to use: `"auto"` (default; high-level first, else
            Cython), `"highlevel"`, or `"cython"`.

        ****dtype****str or None, optional
        :   Embedding precision (e.g. `"float32"`, `"float64"`). Forwarded only
            to implementations that accept it (the Cython class); silently ignored
            otherwise.

        ****index\_dtype****str or None, optional
        :   Item-id integer width (e.g. `"int32"`, `"uint64"`) for very large
            corpora. Cython class only; ignored otherwise.

    Parameters:
    :   * ****metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****n\_trees**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****search\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****impl**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****dtype**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****index\_dtype**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Notes

    ****Developer note:**** Annoy’s `"angular"` metric operates on internally
    normalised vectors, so for two vectors with cosine similarity `c` the
    reported distance is `d = sqrt(2 * (1 - c))`. Cosine is recovered exactly
    as `c = 1 - d**2 / 2` — the correct inverse (a plain `1 - d/2` is not).

    build(**embeddings**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_similarity/_backends.py#L470)[#](#scikitplot.corpus.AnnoyBackend.build "Link to this definition")
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

    capabilities()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_similarity/_backends.py#L264)[#](#scikitplot.corpus.AnnoyBackend.capabilities "Link to this definition")
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
    :   Options this backend requested and the index class refused.

        Returns:
        :   dict
            :   Empty when everything requested was honoured. A non-empty result
                means the index is not built the way the caller asked, which an
                index object alone could never tell them.

    dtype: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'float32'[#](#scikitplot.corpus.AnnoyBackend.dtype "Link to this definition")
    :   Element type of the indexed vectors.

    classmethod is\_available()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_similarity/_backends.py#L435)[#](#scikitplot.corpus.AnnoyBackend.is_available "Link to this definition")
    :   Return whether this backend’s optional dependencies are discoverable.

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    memory\_profile: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'in\_memory'[#](#scikitplot.corpus.AnnoyBackend.memory_profile "Link to this definition")
    :   `"in_memory"`, `"mmap"` or `"hybrid"`.

    metric: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'cosine'[#](#scikitplot.corpus.AnnoyBackend.metric "Link to this definition")
    :   Distance/similarity metric this backend computes.

    name: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = 'annoy'[#](#scikitplot.corpus.AnnoyBackend.name "Link to this definition")

    query(**vector**, **k**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_similarity/_backends.py#L488)[#](#scikitplot.corpus.AnnoyBackend.query "Link to this definition")
    :   Return up to `k` `(row_index, cosine_score)` pairs.

        Results are sorted by descending `cosine_score` in `[-1, 1]` with
        deterministic, index-ascending tie breaking. A zero-norm query returns
        an empty list (cosine is undefined). Non-finite queries raise.

        Parameters:
        :   * ****vector**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]]

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