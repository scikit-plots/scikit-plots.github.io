# EmbeddingEngine[#](#embeddingengine "Link to this heading")

class scikitplot.corpus.EmbeddingEngine(**model\_name='paraphrase-multilingual-mpnet-base-v2'**, **backend='sentence\_transformers'**, **custom\_fn=None**, **cache\_dir=None**, **enable\_cache=True**, **batch\_size=64**, **normalize=True**, **dtype=<class 'numpy.float32'>**, **show\_progress\_bar=False**, **device=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_embeddings/_embedding.py#L362)[#](#scikitplot.corpus.EmbeddingEngine "Link to this definition")
:   Multi-backend sentence embedding engine with SHA-256 file caching.

    Produces a 2-D `float32` numpy array of shape `(n_texts, dim)`
    for a list of input strings. Embeddings are cached to `.npy` files
    keyed by `(model_name, input_path, mtime, n_texts)` so that
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
            inner-product similarity search). Default: `True`.

        ****dtype****numpy.dtype, optional
        :   Output dtype. Default: `numpy.float32`.

        ****show\_progress\_bar****bool, optional
        :   Show a tqdm progress bar during encoding (sentence\_transformers
            only). Default: `False`.

        ****device****str or None, optional
        :   PyTorch device for sentence\_transformers (`"cpu"`, `"cuda"`,
            `"mps"`). `None` lets the library choose. Default: `None`.

    Attributes:
    :   ****VALID\_BACKENDS****tuple of str
        :   Class variable. All accepted backend names.

    Raises:
    :   ValueError
        :   If `backend="custom"` but `custom_fn` is `None`.

        ValueError
        :   If `batch_size` or `dtype` are invalid.

        ImportError
        :   At call time if the required backend library is not installed.

    Parameters:
    :   * ****model\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****custom\_fn**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[**[**List**](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]****,** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** **...****]****,** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[****float32****]****]****]** **|** **None**)
        * ****cache\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****enable\_cache**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****batch\_size**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****normalize**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****show\_progress\_bar**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****device**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    > **See also**
    > `scikitplot.corpus.pipeline.CorpusPipeline`
    :   Integrates this engine.

    [`scikitplot.corpus._embeddings._multimodal_embedding.MultimodalEmbeddingEngine`](scikitplot.corpus.MultimodalEmbeddingEngine.html#scikitplot.corpus.MultimodalEmbeddingEngine "scikitplot.corpus._embeddings._multimodal_embedding.MultimodalEmbeddingEngine")
    :   Extends this engine with image, audio, and video modalities plus projection layer and LLM training export.

    Notes

    ****Thread safety:**** The internal model cache (`_embed_fn`) is
    initialised lazily and protected by a `threading.Lock`.

    ****Cache invalidation:**** The cache key includes the source file’s
    modification time. Any write to the source file (even a metadata
    update via `touch`) invalidates the cache. If this is undesirable,
    pass a stable `input_path` (e.g. a logical identifier rather than
    the real path).

    ****Normalisation:**** When `normalize=True`, zero-norm vectors (e.g.
    empty-string inputs) are left as zero vectors rather than producing
    NaN. The normalisation guard in `SimilarityIndex`
    will warn if any zero vectors are detected at search time.

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

    With source-file cache:

    ```
    >>> from pathlib import Path
    >>> vecs, from_cache = engine.embed_with_cache(
    ...     texts,
    ...     input_path=Path("corpus.txt"),
    ... )

    ```
    Go BackOpen In Tab

    VALID\_BACKENDS: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...]] = ('sentence\_transformers', 'openai', 'custom')[#](#scikitplot.corpus.EmbeddingEngine.VALID_BACKENDS "Link to this definition")
    :   Accepted `backend` values.

        For image/audio/video embeddings use
        [`MultimodalEmbeddingEngine`](scikitplot.corpus.MultimodalEmbeddingEngine.html#scikitplot.corpus.MultimodalEmbeddingEngine "scikitplot.corpus._embeddings._multimodal_embedding.MultimodalEmbeddingEngine")
        which supports `"clip"`, `"whisper"`, `"wav2vec"` in addition.

    backend: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'sentence\_transformers'[#](#scikitplot.corpus.EmbeddingEngine.backend "Link to this definition")

    batch\_size: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 64[#](#scikitplot.corpus.EmbeddingEngine.batch_size "Link to this definition")

    cache\_dir: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.EmbeddingEngine.cache_dir "Link to this definition")

    custom\_fn: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[[List](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]], [ndarray](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), ...], [dtype](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[float32]]] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.EmbeddingEngine.custom_fn "Link to this definition")

    device: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.EmbeddingEngine.device "Link to this definition")

    dtype[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/../numpy/__init__.py#L)[#](#scikitplot.corpus.EmbeddingEngine.dtype "Link to this definition")
    :   alias of `float32`

    embed(**texts**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_embeddings/_embedding.py#L539)[#](#scikitplot.corpus.EmbeddingEngine.embed "Link to this definition")
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
        :   ****texts**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[**float32**]]

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

    embed\_documents(**documents**, **input\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_embeddings/_embedding.py#L688)[#](#scikitplot.corpus.EmbeddingEngine.embed_documents "Link to this definition")
    :   Embed a list of `CorpusDocument`
        instances in-place (sets `doc.embedding` on each).

        Parameters:
        :   ****documents****list of CorpusDocument
            :   Documents to embed. Each must have a non-empty `text` field.

            ****input\_path****pathlib.Path or None, optional
            :   Source path for cache key. `None` disables caching.

        Returns:
        :   list of CorpusDocument
            :   The same list with `embedding` fields populated (via
                `replace()` — originals are not mutated).

        Parameters:
        :   * ****documents**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
            * ****input\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

        Examples

        Try it in your browser!
        ```
        >>> docs = list(reader.get_documents())
        >>> docs = engine.embed_documents(docs)
        >>> docs[0].has_embedding
        True

        ```
        Go BackOpen In Tab

    embed\_with\_cache(**texts**, **input\_path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_embeddings/_embedding.py#L605)[#](#scikitplot.corpus.EmbeddingEngine.embed_with_cache "Link to this definition")
    :   Compute embeddings with file caching keyed to `input_path`.

        Parameters:
        :   ****texts****list of str
            :   Text strings to embed.

            ****input\_path****pathlib.Path
            :   Path to the source file that generated `texts`. Used to
                build the cache key (path + mtime + len(texts)).

        Returns:
        :   ****embeddings****numpy.ndarray
            :   Array of shape `(len(texts), dim)`.

            ****from\_cache****bool
            :   `True` if the result was loaded from disk cache.

        Raises:
        :   ValueError
            :   If `texts` is empty.

            OSError
            :   If the cache directory cannot be created.

        Parameters:
        :   * ****texts**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****input\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))

        Return type:
        :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[**float32**]], [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")]

        Examples

        Try it in your browser!
        ```
        >>> vecs, cached = engine.embed_with_cache(texts, Path("corpus.txt"))
        >>> cached  # True on second call with same inputs
        False

        ```
        Go BackOpen In Tab

    enable\_cache: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.EmbeddingEngine.enable_cache "Link to this definition")

    model\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'paraphrase-multilingual-mpnet-base-v2'[#](#scikitplot.corpus.EmbeddingEngine.model_name "Link to this definition")

    normalize: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.EmbeddingEngine.normalize "Link to this definition")

    show\_progress\_bar: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.EmbeddingEngine.show_progress_bar "Link to this definition")