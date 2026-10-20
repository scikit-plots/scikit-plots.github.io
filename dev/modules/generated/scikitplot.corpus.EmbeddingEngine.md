# EmbeddingEngine[#](#embeddingengine "Link to this heading")

class scikitplot.corpus.EmbeddingEngine(**model\_name='paraphrase-multilingual-mpnet-base-v2'**, **backend='sentence\_transformers'**, **custom\_fn=None**, **cache\_dir=None**, **enable\_cache=True**, **batch\_size=64**, **normalize=True**, **dtype=<class 'numpy.float32'>**, **show\_progress\_bar=False**, **device=None**, **model\_revision=''**, **custom\_fn\_id=None**, **cache\_policy=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_embeddings/_embedding.py#L502)[#](#scikitplot.corpus.EmbeddingEngine "Link to this definition")
:   Multi-backend sentence embedding engine with SHA-256 file caching.

    Produces a 2-D `float32` numpy array of shape `(n_texts, dim)`
    for a list of input strings. Embeddings are cached to `.npy` files
    keyed by a content-addressed hash of the texts and model params so that
    unchanged corpora are served from disk in O(1).

    Parameters:
    :   ****model\_name****str, optional
        :   Embedding model identifier. Interpretation depends on `backend`.
            For `sentence_transformers`, any HuggingFace model name.
            For `openai`, any OpenAI embedding model name.
            Ignored when `backend="custom"`.
            Default: `"paraphrase-multilingual-mpnet-base-v2"`.

        ****backend****{“sentence\_transformers”, “openai”, “custom”}, optional
        :   Which embedding backend to use. Default: `"sentence_transformers"`.

        ****custom\_fn****callable or None, optional
        :   User-supplied `Callable[[list[str]], np.ndarray]`. Required when
            `backend="custom"`. Ignored otherwise.

        ****cache\_dir****pathlib.Path or None, optional
        :   Directory for `.npy` cache files. Created if absent. `None`
            uses `~/.cache/scikitplot/embeddings`. Pass
            `pathlib.Path(os.devnull)` to disable caching.

        ****enable\_cache****bool, optional
        :   Set to `False` to completely disable file caching (always
            re-computes). Default: `True`.

        ****batch\_size****int, optional
        :   Number of texts per encoding batch. Relevant for
            `sentence_transformers` and `openai` backends. Default: `64`.

        ****normalize****bool, optional
        :   L2-normalise output vectors to unit norm (required for cosine /
            inner-product similarity search), for every backend. Default: `True`.

        ****dtype****numpy.dtype, optional
        :   Output dtype. Default: `numpy.float32`.

        ****show\_progress\_bar****bool, optional
        :   Show a tqdm progress bar during encoding (sentence\_transformers
            only). Default: `False`.

        ****device****str or None, optional
        :   PyTorch device for sentence\_transformers (`"cpu"`, `"cuda"`,
            `"mps"`). `None` lets the library choose. Default: `None`.

        ****model\_revision****str, optional
        :   Model revision (commit, tag or branch). The sentence\_transformers
            backend loads exactly this revision; every backend records it in the
            cache key and the embedding manifest. `""` (default) is unpinned:
            the hub’s current version is loaded. Only a commit hash makes the disk
            cache exact for sentence\_transformers; an empty value or a branch or
            tag (which can move) uses the cache only as `cache_policy` allows
            (by default it does not). For other backends the value is recorded,
            not sent: it is your statement of which model version the name stands
            for.

        ****custom\_fn\_id****str or None, optional
        :   Stable identity of `custom_fn`, e.g. `"my-embedder/v3"`; change it
            whenever the function’s output changes. It is what the disk cache and
            the embedding manifest know the provider by. `None` (default) means
            the provider is unidentified: its vectors are not disk-cached, and the
            manifest it stamps is unique to this engine instance, so documents
            embedded by two engines cannot be indexed together by accident. Only
            valid with `backend="custom"`.

        ****cache\_policy****CachePolicy or None, optional
        :   How the disk cache treats an unpinned model and how big it may grow.
            `None` (default) is `CachePolicy()`: an unpinned model’s
            embeddings are computed, not cached, and the cache is unbounded.

    Attributes:
    :   ****VALID\_BACKENDS****tuple of str
        :   Class variable. All accepted backend names.

    Raises:
    :   ValueError
        :   If `backend="custom"` but `custom_fn` is `None`, or
            `custom_fn_id` is given with another backend or is empty.

        ValueError
        :   If `batch_size` or `dtype` are invalid.

        TypeError
        :   If `model_revision` is not a str, or `cache_policy` is neither a
            [`CachePolicy`](scikitplot.corpus.CachePolicy.html#scikitplot.corpus.CachePolicy "scikitplot.corpus.CachePolicy") nor `None`.

        ImportError
        :   At call time if the required backend library is not installed.

    Parameters:
    :   * ****model\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****custom\_fn**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**List**](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****]****,** **NDArray****[****float32****]****]** **|** **None**)
        * ****cache\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)
        * ****enable\_cache**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****batch\_size**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****normalize**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****show\_progress\_bar**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****device**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****model\_revision**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****custom\_fn\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****cache\_policy**** ([**CachePolicy**](scikitplot.corpus.CachePolicy.html#scikitplot.corpus.CachePolicy "scikitplot.corpus._embeddings._cache_policy.CachePolicy") **|** **None**)

    > **See also**
    > `scikitplot.corpus.pipeline.CorpusPipeline`
    :   Integrates this engine.

    [`scikitplot.corpus._embeddings._multimodal_embedding.MultimodalEmbeddingEngine`](scikitplot.corpus.MultimodalEmbeddingEngine.html#scikitplot.corpus.MultimodalEmbeddingEngine "scikitplot.corpus._embeddings._multimodal_embedding.MultimodalEmbeddingEngine")
    :   Extends this engine with image, audio, and video modalities plus projection layer and LLM training export.

    Notes

    ****Thread safety:**** The internal model cache (`_embed_fn`) is
    initialised lazily and protected by a `threading.Lock`.

    ****Cache identity:**** The cache key is content-addressed: the full input
    text plus model, revision, backend, provider identity, dtype and
    normalisation (see `_make_cache_key`). Source path and modification time
    are not part of it, so the same text is served from cache whether it came
    from a file or a URL. A custom provider is cached only when it carries a
    `custom_fn_id`; without one, two different functions would share a key.

    ****Provenance:**** [`embed_documents`](#scikitplot.corpus.EmbeddingEngine.embed_documents "scikitplot.corpus.EmbeddingEngine.embed_documents") stamps every document with the
    fingerprint of [`embedding_manifest`](#scikitplot.corpus.EmbeddingEngine.embedding_manifest "scikitplot.corpus.EmbeddingEngine.embedding_manifest"), so an index refuses to rank
    vectors from two embedding generations against each other.

    ****Normalisation:**** When `normalize=True`, every backend’s vectors are
    L2-normalised; sentence-transformers does it while encoding, the engine
    does it for the others. Zero-norm vectors (e.g. empty-string inputs) are
    left as zero vectors rather than producing NaN. The normalisation guard in
    `RetrievalIndex` will warn if any zero
    vectors are detected at search time.

    Examples

    Try it in your browser!

    Default usage (sentence\_transformers):

    ```
    >>> engine = EmbeddingEngine()
    >>> texts = ["Hello world.", "Second sentence."]
    >>> vecs = engine.embed(texts)
    >>> vecs.shape
    (2, 768)

    ```

    Custom callable backend:

    ```
    >>> import numpy as np
    >>> engine = EmbeddingEngine(
    ...     backend="custom",
    ...     custom_fn=lambda texts: np.zeros((len(texts), 64), dtype=np.float32),
    ... )
    >>> engine.embed(["Hello."]).shape
    (1, 64)

    ```

    With the disk cache (a custom provider needs an identity to be cached):

    ```
    >>> engine = EmbeddingEngine(
    ...     backend="custom",
    ...     custom_fn=lambda texts: np.ones((len(texts), 4), dtype=np.float32),
    ...     custom_fn_id="ones/v1",
    ... )
    >>> vecs, from_cache = engine.embed_with_cache(["Hello."])

    ```
    Go BackOpen In Tab

    VALID\_BACKENDS: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...]] = ('sentence\_transformers', 'openai', 'custom')[#](#scikitplot.corpus.EmbeddingEngine.VALID_BACKENDS "Link to this definition")
    :   Accepted `backend` values.

        For image/audio/video embeddings use
        [`MultimodalEmbeddingEngine`](scikitplot.corpus.MultimodalEmbeddingEngine.html#scikitplot.corpus.MultimodalEmbeddingEngine "scikitplot.corpus._embeddings._multimodal_embedding.MultimodalEmbeddingEngine")
        which supports `"clip"`, `"whisper"`, `"wav2vec"` in addition.

    backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'sentence\_transformers'[#](#scikitplot.corpus.EmbeddingEngine.backend "Link to this definition")

    batch\_size: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 64[#](#scikitplot.corpus.EmbeddingEngine.batch_size "Link to this definition")

    cache\_dir: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.EmbeddingEngine.cache_dir "Link to this definition")

    cache\_policy: [CachePolicy](scikitplot.corpus.CachePolicy.html#scikitplot.corpus.CachePolicy "scikitplot.corpus._embeddings._cache_policy.CachePolicy") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.EmbeddingEngine.cache_policy "Link to this definition")

    custom\_fn: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[List](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]], NDArray[float32]] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.EmbeddingEngine.custom_fn "Link to this definition")

    custom\_fn\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.EmbeddingEngine.custom_fn_id "Link to this definition")

    device: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.EmbeddingEngine.device "Link to this definition")

    dtype[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/../numpy/__init__.py#L)[#](#scikitplot.corpus.EmbeddingEngine.dtype "Link to this definition")
    :   alias of `float32`

    embed(**texts**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_embeddings/_embedding.py#L752)[#](#scikitplot.corpus.EmbeddingEngine.embed "Link to this definition")
    :   Compute embeddings for `texts` without caching.

        Parameters:
        :   ****texts****list of str
            :   Non-empty list of text strings. Empty strings produce zero
                vectors; they are not filtered here (filtering belongs in
                the pipeline).

        Returns:
        :   numpy.ndarray
            :   Array of shape `(len(texts), dim)` with dtype `self.dtype`.

        Raises:
        :   ValueError
            :   If `texts` is empty.

            ImportError
            :   If the required backend library is not installed.

        Parameters:
        :   ****texts**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   **NDArray**[**float32**]

        Examples

        Try it in your browser!
        ```
        >>> engine = EmbeddingEngine(
        ...     backend="custom",
        ...     custom_fn=lambda t: np.zeros((len(t), 32), dtype=np.float32),
        ... )
        >>> engine.embed(["hello"]).shape
        (1, 32)

        ```
        Go BackOpen In Tab

    embed\_cached(**texts**, **input\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_embeddings/_embedding.py#L873)[#](#scikitplot.corpus.EmbeddingEngine.embed_cached "Link to this definition")
    :   Compute embeddings through the disk cache, and say what happened.

        Parameters:
        :   ****texts****list of str
            :   Text strings to embed.

            ****input\_path****pathlib.Path or None, optional
            :   Source of `texts`, for diagnostics only.

        Returns:
        :   CachedEmbeddings
            :   `(embeddings, status, key, revision)`; `status` is a
                [`CacheStatus`](scikitplot.corpus.CacheStatus.html#scikitplot.corpus.CacheStatus "scikitplot.corpus.CacheStatus").

        Raises:
        :   ValueError
            :   If `texts` is empty.

        Parameters:
        :   * ****texts**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****input\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**CachedEmbeddings**](scikitplot.corpus.CachedEmbeddings.html#scikitplot.corpus.CachedEmbeddings "scikitplot.corpus._embeddings._cache_policy.CachedEmbeddings")

        Notes

        ****User.**** The cache is consulted only when a hit is what this engine
        would compute: a sentence-transformers model pinned to a commit
        (`model_revision`, or resolved with `CachePolicy(unpinned=
        "resolve")`), a custom provider’s `custom_fn_id`, the stated
        `model_revision` of another backend, or, by your choice,
        `CachePolicy(unpinned="allow")`. Otherwise the embeddings are
        computed and the status says why the cache was bypassed (logged once
        per engine). A failed write is reported as `STORE_FAILED`, never
        raised.

        ****Developer.**** A hit refreshes the entry’s modification time; after a
        store, `enforce_bounds` evicts least recently used entries.

        Examples

        Try it in your browser!
        ```
        >>> engine = EmbeddingEngine(
        ...     backend="custom",
        ...     custom_fn=lambda t: np.ones((len(t), 4), dtype=np.float32),
        ...     enable_cache=False,
        ... )
        >>> engine.embed_cached(["Hello."]).status.value
        'disabled'

        ```
        Go BackOpen In Tab

    embed\_documents(**documents**, **input\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_embeddings/_embedding.py#L978)[#](#scikitplot.corpus.EmbeddingEngine.embed_documents "Link to this definition")
    :   Embed a list of `CorpusDocument`
        instances in-place (sets `doc.embedding` on each).

        Parameters:
        :   ****documents****list of CorpusDocument
            :   Documents to embed. Each must have a non-empty `text` field.

            ****input\_path****pathlib.Path or None, optional
            :   Source of the documents, for diagnostics only. Caching follows
                `enable_cache` and `cache_policy` (see [`embed_cached`](#scikitplot.corpus.EmbeddingEngine.embed_cached "scikitplot.corpus.EmbeddingEngine.embed_cached"));
                the key is content-addressed.

        Returns:
        :   list of CorpusDocument
            :   The same list with `embedding` and `embedding_manifest_id`
                populated (via `replace()` — originals are not mutated).

        Parameters:
        :   * ****documents**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
            * ****input\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

        Notes

        ****Developer.**** `embedding_manifest_id` is what lets an index refuse
        vectors from two generations (`RetrievalIndex._reject_mixed_manifests`).
        Documents used to leave this method untagged, and untagged vectors are
        never compared, so the guard never fired: two providers’ vectors were
        built into one index and ranked against each other without error.

        Examples

        Try it in your browser!
        ```
        >>> docs = list(reader.get_documents())
        >>> docs = engine.embed_documents(docs)
        >>> docs[0].has_embedding
        True

        ```
        Go BackOpen In Tab

    embed\_with\_cache(**texts**, **input\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_embeddings/_embedding.py#L825)[#](#scikitplot.corpus.EmbeddingEngine.embed_with_cache "Link to this definition")
    :   Compute embeddings through the content-addressed disk cache.

        Parameters:
        :   ****texts****list of str
            :   Text strings to embed.

            ****input\_path****pathlib.Path or None, optional
            :   Source of `texts`, for diagnostics only: the cache key is
                content-addressed over `texts` and the model parameters, never the
                path or its mtime. `None` (a URL or in-memory source) is cached
                exactly like a file.

        Returns:
        :   ****embeddings****numpy.ndarray
            :   Array of shape `(len(texts), dim)`.

            ****from\_cache****bool
            :   `True` if the result was loaded from disk cache.

        Raises:
        :   ValueError
            :   If `texts` is empty.

        Parameters:
        :   * ****texts**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****input\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[**NDArray**[**float32**], [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")]

        > **See also**
        > [`embed_cached`](#scikitplot.corpus.EmbeddingEngine.embed_cached "scikitplot.corpus.EmbeddingEngine.embed_cached")
        :   The same call, reporting what it did.

        Examples

        Try it in your browser!
        ```
        >>> engine = EmbeddingEngine(
        ...     backend="custom",
        ...     custom_fn=lambda t: np.ones((len(t), 4), dtype=np.float32),
        ...     custom_fn_id="ones/v1",
        ...     enable_cache=False,
        ... )
        >>> engine.embed_with_cache(["Hello."])[1]
        False

        ```
        Go BackOpen In Tab

    embedding\_manifest(**dimension**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_embeddings/_embedding.py#L1030)[#](#scikitplot.corpus.EmbeddingEngine.embedding_manifest "Link to this definition")
    :   Describe the vectors this engine produces.

        Parameters:
        :   ****dimension****int
            :   Vector length, known once the first vectors exist.

        Returns:
        :   EmbeddingManifest
            :   `provider` is the backend; `model` the model name, or for a
                custom provider its `custom_fn_id`; `revision` the pinned
                revision or `None`; plus dimension, dtype and normalisation.

        Raises:
        :   ValueError
            :   If `dimension` is not a positive integer.

        Parameters:
        :   ****dimension**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [**EmbeddingManifest**](scikitplot.corpus.EmbeddingManifest.html#scikitplot.corpus.EmbeddingManifest "scikitplot.corpus._embedding_manifest.EmbeddingManifest")

        Notes

        ****User.**** Give a custom provider a `custom_fn_id`: an unidentified
        one is named after this engine **instance** (`custom:unidentified:...`),
        so documents embedded by two engines – even two engines wrapping the
        same function – are refused as different generations when indexed
        together. That is the safe reading of “no identity”: nothing proves the
        two produced comparable vectors.

    enable\_cache: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.EmbeddingEngine.enable_cache "Link to this definition")

    model\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'paraphrase-multilingual-mpnet-base-v2'[#](#scikitplot.corpus.EmbeddingEngine.model_name "Link to this definition")

    model\_revision: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.corpus.EmbeddingEngine.model_revision "Link to this definition")

    normalize: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.EmbeddingEngine.normalize "Link to this definition")

    show\_progress\_bar: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.EmbeddingEngine.show_progress_bar "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v1_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v1.html)

Build and Search a Real Hamlet Corpus with FluentCorpus