# SemanticChunkerConfig[#](#semanticchunkerconfig "Link to this heading")

class scikitplot.corpus.SemanticChunkerConfig(**backend=SemanticBackend.HYBRID**, **model\_name='paraphrase-multilingual-mpnet-base-v2'**, **model\_version=None**, **similarity\_threshold=0.85**, **max\_chunk\_tokens=None**, **min\_chunk\_tokens=1**, **include\_offsets=True**, **adapter\_unit='word'**, **multilang\_config=None**, **device='cpu'**, **allow\_fallback=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_semantic.py#L121)[#](#scikitplot.corpus.SemanticChunkerConfig "Link to this definition")
:   Configuration for [`SemanticChunker`](scikitplot.corpus.SemanticChunker.html#scikitplot.corpus.SemanticChunker "scikitplot.corpus.SemanticChunker").

    Parameters:
    :   ****backend****SemanticBackend
        :   Chunking backend. Default [`SemanticBackend.HYBRID`](scikitplot.corpus.SemanticBackend.html#scikitplot.corpus.SemanticBackend.HYBRID "scikitplot.corpus.SemanticBackend.HYBRID").

        ****model\_name****str
        :   Sentence-transformers model name used for EMBEDDING / HYBRID
            backends. Default `"paraphrase-multilingual-mpnet-base-v2"`
            (supports 50+ languages, 768-dim).

        ****model\_version****str or None
        :   Model version tag for `script_model_version` provenance field.
            Default `None` (auto-populated from installed package version
            when available).

        ****similarity\_threshold****float
        :   Cosine similarity threshold for EMBEDDING / HYBRID boundary merging.
            Adjacent chunks with similarity >= this value are merged.
            Range `[0.0, 1.0]`. Default `0.85`.

        ****max\_chunk\_tokens****int or None
        :   Hard upper bound on tokens per semantic chunk. Chunks exceeding
            this are forcibly split by the Layer 2 adapter.
            Default `None` (no limit).

        ****min\_chunk\_tokens****int
        :   Minimum token count. Chunks below this are merged into the
            adjacent larger chunk. Default `1`.

        ****include\_offsets****bool
        :   Compute and store character offsets. Default `True`.

        ****adapter\_unit****str
        :   Layer 2 segmentation granularity: `"word"`, `"sentence"`,
            `"grapheme_cluster"`. Default `"word"`.

        ****multilang\_config****MultilangConfig or None
        :   Multilang feature flags for the mixin. Default `None`
            → `MultilangConfig(include_semantemes=True)`.

        ****device****str
        :   Torch device for embeddings: `"cpu"`, `"cuda"`, `"mps"`.
            Default `"cpu"`.

        ****allow\_fallback****bool
        :   When `sentence-transformers` is unavailable, the model fails to
            load, or the model fails while refining boundaries, EMBEDDING and
            HYBRID fall back to MORPHOLOGICAL (`True`, default) or raise
            (`False`): `ImportError` for the missing package, `RuntimeError`
            (chained from the cause) for a load failure, the model’s own exception
            for an encode failure. Either way the result reports what actually
            ran: `metadata["backend"]` is the **effective** backend,
            `metadata["requested_backend"]` the configured one, and
            `metadata["fallback_reason"]` why they differ
            (`"sentence_transformers_unavailable"`, `"model_load_failed"` or
            `"embedding_failed"`).

    Parameters:
    :   * ****backend**** ([**SemanticBackend**](scikitplot.corpus.SemanticBackend.html#scikitplot.corpus.SemanticBackend "scikitplot.corpus._chunkers._semantic.SemanticBackend"))
        * ****model\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****model\_version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****similarity\_threshold**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****max\_chunk\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****min\_chunk\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****include\_offsets**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****adapter\_unit**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****multilang\_config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****device**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****allow\_fallback**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****Developer note:**** `model_name` and `model_version` are recorded
    only when the model was called for the text: in the result metadata
    (`model_name`, `model_version`, and `model_invoked`) and in each
    chunk’s `metadata["multilang"]` (`model_name`,
    `script_model_version` = `"name@version"` or `"name"`).
    `script_model_version` is the idempotency verification field – set
    `model_version` when running EMBEDDING or HYBRID to detect
    model-version drift across pipeline re-runs. A MORPHOLOGICAL run,
    requested or fallen back to, calls no model, and neither does a text
    with a single unit (nothing to refine: the requested backend is
    reported, `model_invoked` is `False`). A model you declare yourself in
    `multilang_config.embedding_model_name` is recorded on every chunk as
    declared, as in every chunker with multilang metadata; when the semantic
    model is called, its name replaces the declared one.

    adapter\_unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'word'[#](#scikitplot.corpus.SemanticChunkerConfig.adapter_unit "Link to this definition")

    allow\_fallback: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.SemanticChunkerConfig.allow_fallback "Link to this definition")

    backend: [SemanticBackend](scikitplot.corpus.SemanticBackend.html#scikitplot.corpus.SemanticBackend "scikitplot.corpus._chunkers._semantic.SemanticBackend") = 'hybrid'[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_semantic.py#L)[#](#scikitplot.corpus.SemanticChunkerConfig.backend "Link to this definition")

    device: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'cpu'[#](#scikitplot.corpus.SemanticChunkerConfig.device "Link to this definition")

    include\_offsets: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.SemanticChunkerConfig.include_offsets "Link to this definition")

    max\_chunk\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemanticChunkerConfig.max_chunk_tokens "Link to this definition")

    min\_chunk\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1[#](#scikitplot.corpus.SemanticChunkerConfig.min_chunk_tokens "Link to this definition")

    model\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'paraphrase-multilingual-mpnet-base-v2'[#](#scikitplot.corpus.SemanticChunkerConfig.model_name "Link to this definition")

    model\_version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemanticChunkerConfig.model_version "Link to this definition")

    multilang\_config: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.corpus.SemanticChunkerConfig.multilang_config "Link to this definition")

    similarity\_threshold: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.85[#](#scikitplot.corpus.SemanticChunkerConfig.similarity_threshold "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[Compare Corpus Chunking Strategies on OCR Text](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

Compare Corpus Chunking Strategies on OCR Text