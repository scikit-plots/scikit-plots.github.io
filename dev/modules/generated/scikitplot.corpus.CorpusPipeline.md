# CorpusPipeline[#](#corpuspipeline "Link to this heading")

class scikitplot.corpus.CorpusPipeline(**chunker=None**, **filter\_=None**, **embedding\_engine=None**, **output\_path=None**, **export\_format=ExportFormat.CSV**, **normalizer=None**, **enricher=None**, **default\_language=None**, **progress\_callback=None**, **reader\_kwargs=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_pipeline.py#L168)[#](#scikitplot.corpus.CorpusPipeline "Link to this definition")
:   Orchestrates the full corpus ingestion pipeline.

    Instantiate once, then call [`run`](#scikitplot.corpus.CorpusPipeline.run "scikitplot.corpus.CorpusPipeline.run") (single file),
    [`run_batch`](#scikitplot.corpus.CorpusPipeline.run_batch "scikitplot.corpus.CorpusPipeline.run_batch") (multiple files), or [`run_url`](#scikitplot.corpus.CorpusPipeline.run_url "scikitplot.corpus.CorpusPipeline.run_url") (URL source)
    any number of times. The pipeline is stateless between calls; all
    configuration is set at construction time.

    Parameters:
    :   ****chunker****ChunkerBase or None, optional
        :   Chunker to inject into every reader. `None` yields one
            [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") per raw chunk.
            Default: `None`.

        ****filter\_****FilterBase or None, optional
        :   Filter applied after chunking. `None` uses
            [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus._base.DefaultFilter").
            Default: `None`.

        ****embedding\_engine****EmbeddingEngine or None, optional
        :   When provided, documents are embedded in batches after
            chunking/filtering. Embeddings are stored in
            `embedding`.
            Default: `None` (no embedding).

        ****output\_path****pathlib.Path or None, optional
        :   Directory where exported files are written. When `None`,
            export is skipped unless `output_path` is supplied explicitly
            in a [`run`](#scikitplot.corpus.CorpusPipeline.run "scikitplot.corpus.CorpusPipeline.run") call. Default: `None`.

        ****export\_format****ExportFormat or None, optional
        :   Default export format. Individual [`run`](#scikitplot.corpus.CorpusPipeline.run "scikitplot.corpus.CorpusPipeline.run") calls can override.
            Default: `CSV`.

        ****progress\_callback****callable or None, optional
        :   Called after each batch of documents is processed.
            Signature: `(input_path: str, n_done: int, n_total_estimate: int) → None`.
            `n_total_estimate` is `-1` when the total is unknown.
            Default: `None`.

        ****normalizer****TextNormalizer or None, optional
        :   When provided, `normalized_text` is populated on every document
            after chunking/filtering and before embedding. Insert between the
            filter and embedding stages to clean OCR noise, collapsed whitespace,
            ligatures, and other artefacts. Default: `None` (skip).

        ****enricher****NLPEnricher or None, optional
        :   When provided, NLP enrichment fields (`tokens`, `lemmas`,
            `stems`, `keywords`, and optional metadata such as `pos_tags`,
            `ner_entities`, `sentence_count`, `char_count`,
            `type_token_ratio`, `token_scores`) are populated on every
            document after normalisation and before embedding. Supports
            200+ world languages via the `language` parameter of
            [`EnricherConfig`](scikitplot.corpus.EnricherConfig.html#scikitplot.corpus.EnricherConfig "scikitplot.corpus._enrichers._nlp_enricher.EnricherConfig").
            Default: `None` (skip).

        ****default\_language****str or list[str] or None, optional
        :   ISO 639-1 language code (or list of codes, or `None`) applied to
            all documents when the reader cannot detect language. Accepts ISO
            639-1 two-letter codes (`"en"`, `"ar"`), NLTK names
            (`"english"`, `"arabic"`), lists (`["en", "ar"]`), or `None`
            (auto-detect per document via `detect_script`).
            Forwarded to the reader; the enricher uses its own `language`
            config when set. Default: `None`.

        ****reader\_kwargs****dict or None, optional
        :   Extra keyword arguments forwarded to every reader constructed by
            this pipeline — both `create`
            (used by [`run`](#scikitplot.corpus.CorpusPipeline.run "scikitplot.corpus.CorpusPipeline.run") and [`run_batch`](#scikitplot.corpus.CorpusPipeline.run_batch "scikitplot.corpus.CorpusPipeline.run_batch")) and
            `from_url`
            (used by [`run_url`](#scikitplot.corpus.CorpusPipeline.run_url "scikitplot.corpus.CorpusPipeline.run_url")). Default: `None`.

            ****Audio / video URL transcription**** — forward Whisper kwargs
            directly so `run_url` on an `.mp3` URL transcribes it:

            ```
            pipeline = CorpusPipeline(
                reader_kwargs={
                    "transcribe": True,
                    "whisper_model": "small",  # "tiny" / "base" / "medium" / "large"
                },
            )
            result = pipeline.run_url("https://archive.org/details/.../episode.mp3")

            ```

            ****ZIP archive with per-extension overrides**** — when the source is
            a `.zip` file, `reader_kwargs` is forwarded to
            `ZipReader`. Pass a nested
            `"reader_kwargs"` key to control individual member types:

            ```
            pipeline = CorpusPipeline(
                reader_kwargs={
                    "reader_kwargs": {
                        ".mp3": {"transcribe": True, "whisper_model": "small"},
                        ".jpg": {"backend": "easyocr"},
                    },
                },
            )
            result = pipeline.run(Path("WHO-EURO-2025.zip"))

            ```

            ****Single-type files**** — for a pipeline that only processes audio
            files (no ZIP), pass the kwargs flat:

            ```
            pipeline = CorpusPipeline(
                reader_kwargs={"transcribe": True, "whisper_model": "base"},
            )
            result = pipeline.run(Path("podcast.mp3"))

            ```

    Attributes:
    :   ****chunker****ChunkerBase or None


        [`filter_`](#scikitplot.corpus.CorpusPipeline.filter_ "scikitplot.corpus.CorpusPipeline.filter_")FilterBase or None
        :   Backward-compat alias for [`filter`](#scikitplot.corpus.CorpusPipeline.filter "scikitplot.corpus.CorpusPipeline.filter").

        ****embedding\_engine****EmbeddingEngine or None


        ****output\_path****pathlib.Path or None


        ****export\_format****ExportFormat or None


        ****default\_language****str or None

    Parameters:
    :   * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus.ChunkerBase") **|** **None**)
        * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus.FilterBase") **|** **None**)
        * ****embedding\_engine**** ([**EmbeddingEngine**](scikitplot.corpus.EmbeddingEngine.html#scikitplot.corpus.EmbeddingEngine "scikitplot.corpus.EmbeddingEngine") **|** **None**)
        * ****output\_path**** ([**pathlib.Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****export\_format**** ([**ExportFormat**](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus.ExportFormat") **|** **None**)
        * ****normalizer**** ([**TextNormalizer**](scikitplot.corpus.TextNormalizer.html#scikitplot.corpus.TextNormalizer "scikitplot.corpus.TextNormalizer") **|** **None**)
        * ****enricher**** ([**NLPEnricher**](scikitplot.corpus.NLPEnricher.html#scikitplot.corpus.NLPEnricher "scikitplot.corpus.NLPEnricher") **|** **None**)
        * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****progress\_callback**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]****,** **None****]** **|** **None**)
        * ****reader\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]** **|** **None**)

    > **See also**
    > `scikitplot.corpus._export.export_documents`
    :   Low-level export function.

    `scikitplot.corpus._embeddings.EmbeddingEngine`
    :   Embedding backend.

    Notes

    ****Thread safety:**** [`CorpusPipeline`](#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline") is not thread-safe.
    Run one instance per thread, or use [`run_batch`](#scikitplot.corpus.CorpusPipeline.run_batch "scikitplot.corpus.CorpusPipeline.run_batch") (which
    processes files sequentially, not in parallel).

    ****Embedding and caching:**** When `embedding_engine` is provided,
    embeddings are cached to disk using the source file path and mtime
    as the cache key. URL sources disable caching (no stable mtime).

    Examples

    Try it in your browser!

    Basic single-file run:

    ```
    >>> from pathlib import Path
    >>> from scikitplot.corpus._pipeline import CorpusPipeline
    >>> from scikitplot.corpus._chunkers import SentenceChunker
    >>> pipeline = CorpusPipeline(
    ...     chunker=SentenceChunker("en_core_web_sm"),
    ...     output_path=Path("output/"),
    ... )
    >>> result = pipeline.run(Path("corpus.txt"))
    >>> print(result)

    ```

    Batch processing with embeddings:

    ```
    >>> from scikitplot.corpus._embeddings import EmbeddingEngine
    >>> engine = EmbeddingEngine(backend="sentence_transformers")
    >>> pipeline = CorpusPipeline(
    ...     chunker=SentenceChunker("en_core_web_sm"),
    ...     embedding_engine=engine,
    ...     output_path=Path("output/"),
    ...     export_format=ExportFormat.PARQUET,
    ... )
    >>> results = pipeline.run_batch(list(Path("corpus/").glob("*.txt")))

    ```

    URL ingestion:

    ```
    >>> result = pipeline.run_url("https://en.wikipedia.org/wiki/Python")

    ```

    Audio URL transcription via `reader_kwargs`:

    ```
    >>> pipeline = CorpusPipeline(
    ...     reader_kwargs={"transcribe": True, "whisper_model": "small"},
    ...     output_path=Path("output/"),
    ... )
    >>> result = pipeline.run_url(
    ...     "https://archive.org/details/tale_two_cities_librivox/"
    ...     "tale_of_two_cities_01_dickens.mp3"
    ... )

    ```

    ZIP archive with per-extension kwargs:

    ```
    >>> pipeline = CorpusPipeline(
    ...     reader_kwargs={
    ...         "reader_kwargs": {
    ...             ".mp3": {"transcribe": True, "whisper_model": "small"},
    ...             ".jpg": {"backend": "easyocr"},
    ...         },
    ...     },
    ...     output_path=Path("output/"),
    ... )
    >>> result = pipeline.run(Path("WHO-EURO-2025.zip"))

    ```
    Go BackOpen In Tab

    property filter: [FilterBase](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase")[#](#scikitplot.corpus.CorpusPipeline.filter "Link to this definition")
    :   Active document filter applied after chunking.

        Returns:
        :   FilterBase
            :   The current filter instance (never `None` — defaults to
                [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus._base.DefaultFilter")).

        Notes

        MEDIUM-04 fix: exposes the filter without a trailing underscore so
        the public interface is `pipeline.filter`, not `pipeline.filter_`.

    property filter\_: [FilterBase](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase")[#](#scikitplot.corpus.CorpusPipeline.filter_ "Link to this definition")
    :   Backward-compat alias for [`filter`](#scikitplot.corpus.CorpusPipeline.filter "scikitplot.corpus.CorpusPipeline.filter").

        Deprecated since version 0.5.0: Use `pipeline.filter` (no trailing underscore).
        `filter_` will be removed in 0.7.0.

    run(**input\_path**, **\***, **output\_path=None**, **export\_format=None**, **filename\_override=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_pipeline.py#L453)[#](#scikitplot.corpus.CorpusPipeline.run "Link to this definition")
    :   Process a single source and return a [`PipelineResult`](scikitplot.corpus.PipelineResult.html#scikitplot.corpus.PipelineResult "scikitplot.corpus.PipelineResult").

        Accepts a local file path ****or**** an `http(s)://` URL string.
        URL detection is performed before any `pathlib.Path` conversion,
        so passing a URL string routes correctly to the web/YouTube/audio
        reader rather than crashing with a “file not found” error.

        Parameters:
        :   ****input\_path****str or pathlib.Path
            :   Path to a local file ****or**** an `http(s)://` URL string.
                A `str` that starts with `http://` or `https://`
                (case-insensitive) is treated as a URL and routed through
                `from_url`;
                all other values are treated as local file paths and
                dispatched by extension via the reader registry.

            ****output\_path****pathlib.Path or None, optional
            :   Explicit output file path. When `None`, the path is
                derived from `output_path` and the input stem. If both
                are `None`, export is skipped.

            ****export\_format****ExportFormat or None, optional
            :   Override the pipeline-level `export_format` for this call.

            ****filename\_override****str or None, optional
            :   Override the `input_path` label in generated documents.
                Ignored for URL sources.

        Returns:
        :   PipelineResult
            :   Result summary including the document list.

        Raises:
        :   TypeError
            :   If **input\_path** is not a `str` or [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)").

            ValueError
            :   If a local file path does not exist, or no reader is
                registered for the file extension.

            ValueError
            :   If **input\_path** is a URL string and the URL is invalid or
                cannot be resolved.

        Parameters:
        :   * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
            * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
            * ****export\_format**** ([**ExportFormat**](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus._schema.ExportFormat") **|** **None**)
            * ****filename\_override**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   **PipelineResult**

        > **See also**
        > [`run_batch`](#scikitplot.corpus.CorpusPipeline.run_batch "scikitplot.corpus.CorpusPipeline.run_batch")
        :   Process multiple sources (files and/or URLs).

        [`run_url`](#scikitplot.corpus.CorpusPipeline.run_url "scikitplot.corpus.CorpusPipeline.run_url")
        :   Process one or more URLs directly (legacy entry point).

        Examples

        Try it in your browser!

        Local file:

        ```
        >>> result = pipeline.run(Path("chapter01.txt"))
        >>> len(result.documents)
        312

        ```

        URL string — no separate `run_url` call needed:

        ```
        >>> result = pipeline.run("https://en.wikipedia.org/wiki/Python")
        >>> result.input_path
        'https://en.wikipedia.org/wiki/Python'

        ```
        Go BackOpen In Tab

    run\_batch(**input\_files**, **\***, **stop\_on\_error=False**, **export\_format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_pipeline.py#L851)[#](#scikitplot.corpus.CorpusPipeline.run_batch "Link to this definition")
    :   Process multiple sources sequentially.

        Each item may be a local file path ****or**** an `http(s)://` URL
        string. Mixed lists (some paths, some URLs) are fully supported.
        Each item is dispatched through `_run_source`, which tests
        for URL strings ****before**** any `pathlib.Path` conversion so that
        URL strings are never silently mangled.

        Parameters:
        :   ****input\_files****list of pathlib.Path or str
            :   Sources to process in order. Each element may be:

                * a [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") or `str` pointing to a local file, or
                * a `str` starting with `http://` or `https://` (a URL).

                Mixed lists are allowed:
                `[Path("paper.pdf"), "https://en.wikipedia.org/wiki/Python"]`.

            ****stop\_on\_error****bool, optional
            :   When `False` (default), errors on individual sources are
                logged as warnings and processing continues. When `True`,
                the first error is re-raised immediately.

            ****export\_format****ExportFormat or None, optional
            :   Override the pipeline-level `export_format` for all sources
                in this batch.

        Returns:
        :   list of PipelineResult
            :   One result per successfully processed source, in input order.
                Failed sources (when `stop_on_error=False`) are omitted
                from the list and logged at WARNING level.

        Raises:
        :   TypeError
            :   If any element of **input\_files** is not a `str` or
                [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)").

            ValueError
            :   Re-raised from `_run_source` when `stop_on_error=True`
                and a source fails.

        Parameters:
        :   * ****input\_files**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****stop\_on\_error**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****export\_format**** ([**ExportFormat**](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus._schema.ExportFormat") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[**PipelineResult**]

        > **See also**
        > [`run`](#scikitplot.corpus.CorpusPipeline.run "scikitplot.corpus.CorpusPipeline.run")
        :   Process a single source (file or URL).

        [`run_url`](#scikitplot.corpus.CorpusPipeline.run_url "scikitplot.corpus.CorpusPipeline.run_url")
        :   Process one or more URLs directly (legacy entry point).

        Examples

        Try it in your browser!

        Local files only (original behaviour, unchanged):

        ```
        >>> paths = list(Path("corpus/").glob("*.txt"))
        >>> results = pipeline.run_batch(paths)
        >>> total_docs = sum(r.n_documents for r in results)

        ```

        Mixed files and URLs:

        ```
        >>> results = pipeline.run_batch(
        ...     [
        ...         Path("local_report.pdf"),
        ...         "https://en.wikipedia.org/wiki/Python",
        ...         "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        ...     ]
        ... )
        >>> [r.input_path for r in results]
        ['local_report.pdf', 'https://...', 'https://...']

        ```
        Go BackOpen In Tab

    run\_url(**url**, **\***, **output\_path=None**, **export\_format=None**, **stop\_on\_error=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_pipeline.py#L688)[#](#scikitplot.corpus.CorpusPipeline.run_url "Link to this definition")
    :   Process one URL or a list of URLs.

        Accepts a single URL string or a list of URL strings. When a list
        is passed each URL is processed independently and a parallel list of
        [`PipelineResult`](scikitplot.corpus.PipelineResult.html#scikitplot.corpus.PipelineResult "scikitplot.corpus.PipelineResult") objects is returned. The single-URL form
        returns a single [`PipelineResult`](scikitplot.corpus.PipelineResult.html#scikitplot.corpus.PipelineResult "scikitplot.corpus.PipelineResult") (backwards compatible).

        Supported URL shapes:

        * Single video — `watch?v=`, `youtu.be/`, `/shorts/`,
          `/embed/`, `/live/`
        * Video + playlist context — `watch?v=…&list=…`
          (treated as single video; `list=` is ignored)
        * Channel / handle page — `@Handle`, `@Handle/videos`,
          `@Handle/shorts`, `@Handle/podcasts`,
          `/channel/UCxxx`, `/c/Name`, `/user/Name`
        * Pure playlist — `/playlist?list=…`
        * Any `http(s)://` URL — routed to [`WebReader`](scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader")

        Parameters:
        :   ****url****str or list of str
            :   One URL string or a list of URL strings. Every string must
                start with `http://` or `https://`.

            ****output\_path****pathlib.Path or None, optional
            :   Explicit output file path. Ignored when **url** is a list
                (each result derives its own path from the URL).

            ****export\_format****ExportFormat or None, optional
            :   Override the pipeline-level `export_format` for this call.

            ****stop\_on\_error****bool, optional
            :   When `True` and **url** is a list, re-raise the first
                exception encountered instead of continuing. Has no effect
                for single-URL calls (exceptions always propagate).

        Returns:
        :   PipelineResult
            :   When **url** is a `str`.

            list of PipelineResult
            :   When **url** is a `list`. Results are in the same order as
                **url**. Failed URLs (when `stop_on_error=False`) are
                omitted from the list and logged at ERROR level.

        Raises:
        :   TypeError
            :   If **url** is not a `str` or `list`.

            ValueError
            :   If any URL string does not start with `http://` or
                `https://`.

            ImportError
            :   If `scikitplot.corpus._readers` has not been imported yet.

        Parameters:
        :   * ****url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
            * ****export\_format**** ([**ExportFormat**](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus._schema.ExportFormat") **|** **None**)
            * ****stop\_on\_error**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   **PipelineResult** | [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[**PipelineResult**]

        Examples

        Try it in your browser!

        Single video:

        ```
        >>> result = pipeline.run_url("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        >>> isinstance(result, PipelineResult)
        True

        ```

        List of URLs (returns list):

        ```
        >>> results = pipeline.run_url(
        ...     [
        ...         "https://www.youtube.com/@WHO/shorts",
        ...         "https://www.youtube.com/@WHO/videos",
        ...     ]
        ... )
        >>> isinstance(results, list)
        True

        ```
        Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](../../auto_examples/corpus/plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples![](../../_images/sphx_glr_plot_corpus_who_youtube_shorts_script_thumb.png)

[corpus WHO European Region YouTube shorts with examples](../../auto_examples/corpus/plot_corpus_who_youtube_shorts_script.html)

corpus WHO European Region YouTube shorts with examples![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[corpus WHO European Region local .zip with examples](../../auto_examples/corpus/plot_corpus_who_zip_script.html)

corpus WHO European Region local .zip with examples