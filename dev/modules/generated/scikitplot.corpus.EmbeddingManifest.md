# EmbeddingManifest[#](#embeddingmanifest "Link to this heading")

class scikitplot.corpus.EmbeddingManifest(**provider**, **model**, **revision=None**, **dimension=None**, **dtype='float32'**, **normalization='none'**, **preprocessing=None**, **extra=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embedding_manifest.py#L99)[#](#scikitplot.corpus.EmbeddingManifest "Link to this definition")
:   Identity of one embedding generation.

    Parameters:
    :   ****provider****str
        :   Backend that produced the vectors, e.g. `"sentence_transformers"`,
            `"openai"`, `"custom"`.

        ****model****str
        :   Model identifier as the provider names it.

        ****revision****str or None, optional
        :   Model revision/commit, when the provider exposes one. `None` means
            **unpinned**, which is recorded rather than hidden: two unpinned
            generations of the same model are ****not**** assumed identical.

        ****dimension****int or None, optional
        :   Vector length. `None` until the first vector is produced.

        ****dtype****str, optional
        :   Element type, e.g. `"float32"`.

        ****normalization****str, optional
        :   `"l2"`, `"none"`, or a provider-specific scheme.

        ****preprocessing****str or None, optional
        :   Identifier for the text transformation applied before embedding.

        ****extra****dict, optional
        :   Additional JSON-compatible provenance.

    Parameters:
    :   * ****provider**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****revision**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****dimension**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****dtype**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****normalization**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****preprocessing**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****extra**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Notes

    ****Developer.**** `frozen=True` because a manifest describes vectors that
    already exist. A mutable manifest could drift away from the vectors it
    claims to describe, which is the failure it exists to prevent.

    Examples

    Try it in your browser!
    ```
    >>> a = EmbeddingManifest(provider="p", model="m", dimension=8)
    >>> b = EmbeddingManifest(provider="p", model="m", dimension=8)
    >>> a.fingerprint == b.fingerprint
    True
    >>> c = EmbeddingManifest(provider="p", model="other", dimension=8)
    >>> a.is_compatible(c)
    False

    ```
    Go BackOpen In Tab

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embedding_manifest.py#L281)[#](#scikitplot.corpus.EmbeddingManifest.describe "Link to this definition")
    :   Return a compact human-readable identifier.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    dimension: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.EmbeddingManifest.dimension "Link to this definition")

    dtype: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'float32'[#](#scikitplot.corpus.EmbeddingManifest.dtype "Link to this definition")

    extra: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embedding_manifest.py#L99)[#](#scikitplot.corpus.EmbeddingManifest.extra "Link to this definition")

    property fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.EmbeddingManifest.fingerprint "Link to this definition")
    :   Stable content-derived identifier for this generation.

        Returns:
        :   str
            :   The 64-character hex SHA-256 over every semantically relevant
                field, length-prefixed.

        Notes

        ****Developer.**** This value is the `embedding_model_id` component of
        the content-derived **generation** identifier: a change here is exactly a
        change that should invalidate a built index. Deriving both from one
        function means they cannot disagree.

        `extra` participates, sorted by key, so provider-specific provenance
        that changes the vectors also changes the fingerprint.

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embedding_manifest.py#L305)[#](#scikitplot.corpus.EmbeddingManifest.from_dict "Link to this definition")
    :   Rebuild from [`to_dict`](#scikitplot.corpus.EmbeddingManifest.to_dict "scikitplot.corpus.EmbeddingManifest.to_dict") output.

        Raises:
        :   ValueError
            :   If the payload carries a fingerprint that does not match the fields
                it accompanies – which means the payload was edited or corrupted –
                or a fingerprint narrower than 64 hex characters, written by a build
                before identities were widened (rebuild with this build).

        Parameters:
        :   ****data**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**EmbeddingManifest**](#scikitplot.corpus.EmbeddingManifest "scikitplot.corpus._embedding_manifest.EmbeddingManifest")

    is\_compatible(**other**, **\***, **assume\_unpinned\_match=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embedding_manifest.py#L187)[#](#scikitplot.corpus.EmbeddingManifest.is_compatible "Link to this definition")
    :   Whether vectors from `self` and `other` may share an index.

        Parameters:
        :   ****other****EmbeddingManifest
            :   Manifest to compare against.

            ****assume\_unpinned\_match****bool, optional
            :   Accept two manifests that agree on every field but have no resolved
                `revision`. Default `False`: an unresolved revision is an
                unverified space, and this is the caller opting into it explicitly.

        Returns:
        :   bool
            :   `True` when the two manifests describe the same embedding space.

        Parameters:
        :   * ****other**** ([**EmbeddingManifest**](#scikitplot.corpus.EmbeddingManifest "scikitplot.corpus._embedding_manifest.EmbeddingManifest"))
            * ****assume\_unpinned\_match**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

        Notes

        ****User.**** If this returns `False` for two manifests you believe are the
        same model, check whether `revision` is set on both. Without it there
        is nothing recording that the same weights produced both sets of
        vectors; pin the revision, or pass `assume_unpinned_match=True` to say
        you accept that.

        ****Developer.**** Compatibility is fingerprint equality, deliberately. A
        looser rule – “same dimension and model” – would readmit the exact
        defect: two generations of one model with different normalization
        produce same-shaped vectors whose distances mean different things.

        Fingerprint equality alone was not enough, though: two manifests with
        `revision=None` have equal fingerprints and so compared compatible,
        which reported as **verified** something nothing had verified. An
        unresolved revision now fails the check unless the caller opts in, so
        the unverified case is a decision someone made rather than an answer the
        code gave by default.

    model: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embedding_manifest.py#L99)[#](#scikitplot.corpus.EmbeddingManifest.model "Link to this definition")

    normalization: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'none'[#](#scikitplot.corpus.EmbeddingManifest.normalization "Link to this definition")

    preprocessing: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.EmbeddingManifest.preprocessing "Link to this definition")

    provider: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embedding_manifest.py#L99)[#](#scikitplot.corpus.EmbeddingManifest.provider "Link to this definition")

    require\_compatible(**other**, **\***, **assume\_unpinned\_match=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embedding_manifest.py#L235)[#](#scikitplot.corpus.EmbeddingManifest.require_compatible "Link to this definition")
    :   Raise unless `other` is compatible with `self`.

        Parameters:
        :   ****other****EmbeddingManifest
            :   Manifest to compare against.

            ****assume\_unpinned\_match****bool, optional
            :   Forwarded to [`is_compatible`](#scikitplot.corpus.EmbeddingManifest.is_compatible "scikitplot.corpus.EmbeddingManifest.is_compatible").

        Raises:
        :   IncompatibleEmbeddingsError
            :   Naming both generations and either the fields that differ or, when
                the fields agree, the unresolved revision that prevents the match
                from being verified. The two cases are distinguished because they
                need different fixes: one is a genuine mismatch, the other is
                missing provenance.

        Parameters:
        :   * ****other**** ([**EmbeddingManifest**](#scikitplot.corpus.EmbeddingManifest "scikitplot.corpus._embedding_manifest.EmbeddingManifest"))
            * ****assume\_unpinned\_match**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   None

    revision: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.EmbeddingManifest.revision "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embedding_manifest.py#L299)[#](#scikitplot.corpus.EmbeddingManifest.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping, including the fingerprint.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    with\_dimension(**dimension**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embedding_manifest.py#L287)[#](#scikitplot.corpus.EmbeddingManifest.with_dimension "Link to this definition")
    :   Return a copy with `dimension` set.

        Notes

        ****Developer.**** Dimension is often unknown until the first vector is
        produced. Because it participates in the fingerprint, filling it in
        yields a **different** generation identity – which is correct: a manifest
        that does not yet know its dimension has not described any vectors.

        Parameters:
        :   ****dimension**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [**EmbeddingManifest**](#scikitplot.corpus.EmbeddingManifest "scikitplot.corpus._embedding_manifest.EmbeddingManifest")