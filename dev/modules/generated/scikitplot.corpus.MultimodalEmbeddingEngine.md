# MultimodalEmbeddingEngine[#](#multimodalembeddingengine "Link to this heading")

class scikitplot.corpus.MultimodalEmbeddingEngine(**text\_backend='sentence\_transformers'**, **text\_model='all-MiniLM-L6-v2'**, **text\_custom\_fn=None**, **image\_backend='clip'**, **image\_model='openai/clip-vit-base-patch32'**, **image\_custom\_fn=None**, **audio\_backend='whisper'**, **audio\_model='openai/whisper-base'**, **audio\_custom\_fn=None**, **multimodal\_fusion='mean'**, **projection\_dim=None**, **custom\_projection\_fn=None**, **normalize=True**, **batch\_size=32**, **device=None**, **cache\_dir=None**, **enable\_cache=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L540)[#](#scikitplot.corpus.MultimodalEmbeddingEngine "Link to this definition")
:   Unified embedding engine for any `CorpusDocument`
    modality — text, image, audio, video, or multimodal.

    Routes each document to the appropriate backend by inspecting
    `doc.modality`, optionally projects all vectors to a common
    `projection_dim`, and stores the result in `doc.embedding`.

    Parameters:
    :   ****text\_backend****{“sentence\_transformers”, “openai”, “custom”}, optional
        :   Text embedding backend. Default: `"sentence_transformers"`.

        ****text\_model****str, optional
        :   Model name for the text backend.
            Default: `"all-MiniLM-L6-v2"`.

        ****text\_custom\_fn****callable or None, optional
        :   Custom text embed function
            `Callable[[list[str]], ndarray]`. Required when
            `text_backend="custom"`. Default: `None`.

        ****image\_backend****{“clip”, “open\_clip”, “custom”}, optional
        :   Image embedding backend. Default: `"clip"`.

        ****image\_model****str, optional
        :   CLIP/ViT model name.
            Default: `"openai/clip-vit-base-patch32"`.

        ****image\_custom\_fn****callable or None, optional
        :   Custom image embed function
            `Callable[[list[ndarray]], ndarray]`.
            Required when `image_backend="custom"`. Default: `None`.

        ****audio\_backend****{“whisper”, “wav2vec”, “custom”}, optional
        :   Audio embedding backend. Default: `"whisper"`.

        ****audio\_model****str, optional
        :   Whisper model size or HuggingFace model id.
            Default: `"openai/whisper-base"`.

        ****audio\_custom\_fn****callable or None, optional
        :   Custom audio embed function
            `Callable[[list[ndarray]], ndarray]`.
            Required when `audio_backend="custom"`. Default: `None`.

        ****multimodal\_fusion****{“mean”, “concat”, “text\_only”, “image\_only”}, optional
        :   How to combine text + image vectors for `MULTIMODAL` docs.
            `"mean"` averages the two vectors (requires same dim or
            `projection_dim` set). `"concat"` concatenates them
            (output dim = text\_dim + image\_dim).
            Default: `"mean"`.

        ****projection\_dim****int or None, optional
        :   If set, project every embedding to this dimension via a linear
            map. Unifies incompatible backend dimensions so all modalities
            share one embedding space. Default: `None` (no projection).

        ****custom\_projection\_fn****callable or None, optional
        :   Override the auto-generated random projection with a learned one,
            e.g. a trained linear adapter.
            `Callable[[ndarray (N, D)], ndarray (N, projection_dim)]`.
            Default: `None`.

        ****normalize****bool, optional
        :   L2-normalise all output embeddings. Default: `True`.

        ****batch\_size****int, optional
        :   Items per forward pass for each backend. Default: `32`.

        ****device****str or None, optional
        :   Torch device (`"cpu"`, `"cuda"`, `"mps"`).
            `None` lets each backend auto-select. Default: `None`.

        ****cache\_dir****pathlib.Path or None, optional
        :   Cache directory for embeddings. `None` uses the text engine’s
            default cache. Default: `None`.

        ****enable\_cache****bool, optional
        :   Enable/disable embedding cache. Default: `True`.

    Parameters:
    :   * ****text\_backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****text\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****text\_custom\_fn**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)") **|** **None**)
        * ****image\_backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****image\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****image\_custom\_fn**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)") **|** **None**)
        * ****audio\_backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****audio\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****audio\_custom\_fn**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)") **|** **None**)
        * ****multimodal\_fusion**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****projection\_dim**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****custom\_projection\_fn**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)") **|** **None**)
        * ****normalize**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****batch\_size**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****device**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****cache\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****enable\_cache**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Notes

    ****Projection dimension choice:**** Set `projection_dim` to the
    hidden size of your target LLM’s embedding layer. For GPT-4 /
    `text-embedding-3-large` this is 3072; for
    `text-embedding-3-small` / `all-MiniLM-L6-v2` it is 384-768.

    ****Cache key**** includes modality + backend + model name + source path
    + mtime + n\_items — changing any of these invalidates the cache.

    ****Thread safety:**** Backends are lazily loaded and protected by a
    `threading.Lock` per backend. Safe for concurrent reads after warm-up.

    Examples

    Text + image documents in one call:

    ```
    >>> engine = MultimodalEmbeddingEngine(
    ...     projection_dim=512,
    ...     image_backend="clip",
    ... )
    >>> docs = engine.embed_documents(docs)
    >>> docs[0].embedding.shape
    (512,)

    ```

    GPT fine-tuning pipeline:

    ```
    >>> engine = MultimodalEmbeddingEngine(
    ...     text_backend="openai",
    ...     text_model="text-embedding-3-small",
    ...     projection_dim=1536,
    ... )
    >>> docs = engine.embed_documents(text_docs)
    >>> from scikitplot.corpus._embeddings._multimodal_embedding import (
    ...     LLMTrainingExporter,
    ... )
    >>> exporter = LLMTrainingExporter(engine)
    >>> exporter.to_openai_finetuning_jsonl(docs, Path("train.jsonl"))

    ```

    VALID\_AUDIO\_BACKENDS: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...]] = ('whisper', 'wav2vec', 'custom')[#](#scikitplot.corpus.MultimodalEmbeddingEngine.VALID_AUDIO_BACKENDS "Link to this definition")

    VALID\_FUSION: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...]] = ('mean', 'concat', 'text\_only', 'image\_only')[#](#scikitplot.corpus.MultimodalEmbeddingEngine.VALID_FUSION "Link to this definition")

    VALID\_IMAGE\_BACKENDS: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...]] = ('clip', 'open\_clip', 'custom')[#](#scikitplot.corpus.MultimodalEmbeddingEngine.VALID_IMAGE_BACKENDS "Link to this definition")

    VALID\_TEXT\_BACKENDS: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...]] = ('sentence\_transformers', 'openai', 'custom')[#](#scikitplot.corpus.MultimodalEmbeddingEngine.VALID_TEXT_BACKENDS "Link to this definition")

    audio\_backend: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'whisper'[#](#scikitplot.corpus.MultimodalEmbeddingEngine.audio_backend "Link to this definition")

    audio\_custom\_fn: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MultimodalEmbeddingEngine.audio_custom_fn "Link to this definition")

    audio\_model: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'openai/whisper-base'[#](#scikitplot.corpus.MultimodalEmbeddingEngine.audio_model "Link to this definition")

    batch\_size: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 32[#](#scikitplot.corpus.MultimodalEmbeddingEngine.batch_size "Link to this definition")

    cache\_dir: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MultimodalEmbeddingEngine.cache_dir "Link to this definition")

    custom\_projection\_fn: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MultimodalEmbeddingEngine.custom_projection_fn "Link to this definition")

    device: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MultimodalEmbeddingEngine.device "Link to this definition")

    embed\_audio(**waveforms**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L935)[#](#scikitplot.corpus.MultimodalEmbeddingEngine.embed_audio "Link to this definition")
    :   Embed a list of audio waveforms via the configured audio backend.

        Parameters:
        :   ****waveforms****list[ndarray]
            :   Each waveform: `(samples,)` float32, 16 kHz.

        Returns:
        :   numpy.ndarray
            :   Shape `(N, D)` float32.

        Parameters:
        :   ****waveforms**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** **...****]****,** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[****\_ScalarT****]****]****]**)

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[**\_ScalarT**]]

    embed\_documents(**documents**, **source\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L763)[#](#scikitplot.corpus.MultimodalEmbeddingEngine.embed_documents "Link to this definition")
    :   Embed all documents in-place (via `doc.replace(embedding=...)`)
        and return the updated list.

        Dispatches by `doc.modality`:

        * `TEXT` → [`embed_texts`](#scikitplot.corpus.MultimodalEmbeddingEngine.embed_texts "scikitplot.corpus.MultimodalEmbeddingEngine.embed_texts")
        * `IMAGE` → [`embed_images`](#scikitplot.corpus.MultimodalEmbeddingEngine.embed_images "scikitplot.corpus.MultimodalEmbeddingEngine.embed_images")
        * `AUDIO` → [`embed_audio`](#scikitplot.corpus.MultimodalEmbeddingEngine.embed_audio "scikitplot.corpus.MultimodalEmbeddingEngine.embed_audio")
        * `VIDEO` → [`embed_video`](#scikitplot.corpus.MultimodalEmbeddingEngine.embed_video "scikitplot.corpus.MultimodalEmbeddingEngine.embed_video")
        * `MULTIMODAL` → fused text + image (see `multimodal_fusion`)
        * fallback: treats as TEXT using `doc.text` or `""`

        Parameters:
        :   ****documents****list[CorpusDocument]
            :   Documents to embed.

            ****source\_path****pathlib.Path or None, optional
            :   Used as the cache-key anchor. Pass the source file path for
                per-file caching. Default: `None` (no file cache).

        Returns:
        :   list[CorpusDocument]
            :   Same list with `embedding` fields populated.

        Parameters:
        :   * ****documents**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
            * ****source\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    embed\_documents\_with\_cache(**documents**, **source\_path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L1000)[#](#scikitplot.corpus.MultimodalEmbeddingEngine.embed_documents_with_cache "Link to this definition")
    :   Embed documents with SHA-256 cache keyed to **source\_path**.

        Cache key: `SHA256(modality_tag + backend + model + path + mtime + N)[:24]`.

        Parameters:
        :   ****documents****list[CorpusDocument]
            :   Documents to embed.

            ****source\_path****pathlib.Path
            :   Source file path. Used to build the cache key (path + mtime).

        Returns:
        :   list[CorpusDocument]
            :   Documents with embeddings populated.

        Parameters:
        :   * ****documents**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
            * ****source\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    embed\_images(**arrays**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L908)[#](#scikitplot.corpus.MultimodalEmbeddingEngine.embed_images "Link to this definition")
    :   Embed a list of raw image arrays via the configured image backend.

        Parameters:
        :   ****arrays****list[ndarray]
            :   Each array: `(H, W, C)` uint8 RGB.

        Returns:
        :   numpy.ndarray
            :   Shape `(N, D)` float32.

        Raises:
        :   ImportError
            :   If the required image backend library is not installed.

        Parameters:
        :   ****arrays**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** **...****]****,** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[****\_ScalarT****]****]****]**)

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[**\_ScalarT**]]

    embed\_texts(**texts**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L889)[#](#scikitplot.corpus.MultimodalEmbeddingEngine.embed_texts "Link to this definition")
    :   Embed a list of strings via the configured text backend.

        Parameters:
        :   ****texts****list[str]
            :   Non-empty list of strings.

        Returns:
        :   numpy.ndarray
            :   Shape `(N, D)` float32.

        Parameters:
        :   ****texts**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[**\_ScalarT**]]

    embed\_video(**frame\_sequences**, **n\_sample\_frames=8**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L957)[#](#scikitplot.corpus.MultimodalEmbeddingEngine.embed_video "Link to this definition")
    :   Embed video by sampling frames and mean-pooling CLIP embeddings.

        Parameters:
        :   ****frame\_sequences****list[ndarray]
            :   Each array: `(T, H, W, C)` uint8 — T frames, channels-last.

            ****n\_sample\_frames****int, optional
            :   Frames to sample uniformly. Default: 8.

        Returns:
        :   numpy.ndarray
            :   Shape `(N, D)` float32.

        Parameters:
        :   * ****frame\_sequences**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** **...****]****,** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[****\_ScalarT****]****]****]**)
            * ****n\_sample\_frames**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[**\_ScalarT**]]

    enable\_cache: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.MultimodalEmbeddingEngine.enable_cache "Link to this definition")

    image\_backend: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'clip'[#](#scikitplot.corpus.MultimodalEmbeddingEngine.image_backend "Link to this definition")

    image\_custom\_fn: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MultimodalEmbeddingEngine.image_custom_fn "Link to this definition")

    image\_model: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'openai/clip-vit-base-patch32'[#](#scikitplot.corpus.MultimodalEmbeddingEngine.image_model "Link to this definition")

    multimodal\_fusion: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'mean'[#](#scikitplot.corpus.MultimodalEmbeddingEngine.multimodal_fusion "Link to this definition")

    normalize: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.MultimodalEmbeddingEngine.normalize "Link to this definition")

    projection\_dim: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MultimodalEmbeddingEngine.projection_dim "Link to this definition")

    text\_backend: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'sentence\_transformers'[#](#scikitplot.corpus.MultimodalEmbeddingEngine.text_backend "Link to this definition")

    text\_custom\_fn: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MultimodalEmbeddingEngine.text_custom_fn "Link to this definition")

    text\_model: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'all-MiniLM-L6-v2'[#](#scikitplot.corpus.MultimodalEmbeddingEngine.text_model "Link to this definition")