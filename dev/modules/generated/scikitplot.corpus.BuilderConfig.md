# BuilderConfig[#](#builderconfig "Link to this heading")

class scikitplot.corpus.BuilderConfig(**chunker='sentence'**, **chunker\_kwargs=<factory>**, **normalize=True**, **normalizer\_steps=<factory>**, **normalizer\_kwargs=<factory>**, **enrich=False**, **enricher\_kwargs=<factory>**, **embed=False**, **embedding\_model='all-MiniLM-L6-v2'**, **embedding\_kwargs=<factory>**, **build\_index=False**, **retrieval\_config=None**, **index\_kwargs=<factory>**, **source\_title=None**, **source\_author=None**, **source\_type=None**, **collection\_id=None**, **default\_language=None**, **filter\_kwargs=<factory>**, **max\_download\_bytes=524288000**, **download\_timeout=120**, **download\_max\_retries=3**, **download\_retry\_backoff=1.0**, **max\_archive\_files=10000**, **max\_archive\_bytes=2147483648**, **probe\_url\_content\_type=True**, **probe\_url\_timeout=15**, **max\_workers=1**, **downloader\_kwargs=<factory>**, **download\_policy=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_corpus_builder.py#L152)[#](#scikitplot.corpus.BuilderConfig "Link to this definition")
:   Configuration for [`CorpusBuilder`](scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder").

    Parameters:
    :   ****chunker****str or object
        :   Chunker to use. One of `"sentence"`, `"paragraph"`,
            `"fixed_window"`, `"word"`; or a pre-configured chunker
            instance (either `ChunkerBase` subclass or new-style
            chunker — auto-bridged).

        ****chunker\_kwargs****dict[str, Any]
        :   Keyword arguments passed to the chunker constructor
            (ignored if **chunker** is already an instance).

        ****normalize****bool
        :   Run normalisation pipeline after filtering.

        ****normalizer\_steps****list[str]
        :   Normaliser names: `"unicode"`, `"whitespace"`,
            `"html_strip"`, `"lowercase"`, `"dedup_lines"`.
            Default: `["unicode", "whitespace"]`.

        ****normalizer\_kwargs****dict[str, Any]
        :   Run `TextNormalizer` after filtering.
            Kwargs for `TextNormalizerConfig`.

        ****enrich****bool
        :   Run `NLPEnricher` after normalisation.

        ****enricher\_kwargs****dict[str, Any]
        :   Kwargs for `EnricherConfig`.

        ****embed****bool
        :   Run `EmbeddingEngine` after enrichment.

        ****embedding\_model****str
        :   Model name for `EmbeddingEngine`.

        ****embedding\_kwargs****dict[str, Any]
        :   Kwargs for `EmbeddingEngine` constructor.

        ****build\_index****bool
        :   Build a `RetrievalIndex` after embedding.

        ****retrieval\_config****RetrievalConfig or None
        :   Canonical retrieval/index configuration. New code should prefer this
            field so backend constructor options can use
            `RetrievalConfig(index_kwargs={...})` directly.

        ****index\_kwargs****dict[str, Any]
        :   Backward-compatible kwargs used to construct `RetrievalConfig` when
            `retrieval_config` is not supplied. Do not provide both forms.

        ****source\_title****str or None
        :   Default `source_title` for all documents.

        ****source\_author****str or None
        :   Default `source_author` for all documents.

        ****source\_type****str or None
        :   Default `source_type` (e.g., `"book"`, `"movie"`).

        ****collection\_id****str or None
        :   Group identifier for this corpus build.

        ****default\_language****str or None
        :   ISO 639-1 language code.

        ****filter\_kwargs****dict[str, Any]
        :   Kwargs for `DefaultFilter`.

        ****max\_workers****int
        :   Parallelism for multi-file ingestion.

        ****probe\_url\_content\_type****bool
        :   When `True` (default), extensionless URLs are probed with an
            HTTP HEAD request to infer the correct reader before downloading.
            Disable to save a round-trip when all URLs have file extensions.

        ****probe\_url\_timeout****int
        :   HTTP timeout in seconds for `probe_url_kind`
            calls. Default: 15.

        ****downloader\_kwargs****dict[str, Any]
        :   Advanced keyword overrides forwarded to [`AnyDownloader`](scikitplot.corpus.AnyDownloader.html#scikitplot.corpus.AnyDownloader "scikitplot.corpus.AnyDownloader") (and to
            `downloader_factory`). Use this for explicit transport policy such as
            `verify_ssl`, `block_private_ips`, `max_redirects`, YouTube
            settings, headers or a GitHub token without replacing the downloader.
            Values here override the builder’s ordinary download defaults.

        ****download\_policy****DownloadPolicy, str, mapping or None
        :   Optional immutable transport/resource preset. When supplied it becomes
            the authority for timeout/size/TLS/SSRF/redirect/retry defaults;
            `downloader_kwargs` still provides deliberate per-build overrides.

    Parameters:
    :   * ****chunker**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus.ChunkerBase") **|** **None**)
        * ****chunker\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]**)
        * ****normalize**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****normalizer\_steps**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[****Literal****[****'unicode'****,** **'whitespace'****,** **'html\_strip'****,** **'lowercase'****,** **'dedup\_lines'****]****]**)
        * ****normalizer\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]**)
        * ****enrich**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****enricher\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]**)
        * ****embed**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****embedding\_model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****embedding\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]**)
        * ****build\_index**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****retrieval\_config**** ([**RetrievalConfig**](scikitplot.corpus.RetrievalConfig.html#scikitplot.corpus.RetrievalConfig "scikitplot.corpus.RetrievalConfig") **|** **None**)
        * ****index\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]**)
        * ****source\_title**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****source\_author**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus.SourceType") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****collection\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****default\_language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****filter\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]**)
        * ****max\_download\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****download\_timeout**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****download\_max\_retries**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****download\_retry\_backoff**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****max\_archive\_files**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_archive\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****probe\_url\_content\_type**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****probe\_url\_timeout**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_workers**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****downloader\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]**)
        * ****download\_policy**** ([**object**](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)") **|** **None**)

    Notes

    ****User note:**** Most users need only:

    ```
    config = BuilderConfig(chunker="sentence", embed=True)

    ```

    Everything else has sensible defaults.

    build\_index: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.BuilderConfig.build_index "Link to this definition")

    chunker: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [ChunkerBase](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus.ChunkerBase") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = 'sentence'[#](#scikitplot.corpus.BuilderConfig.chunker "Link to this definition")

    chunker\_kwargs: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_corpus_builder.py#L152)[#](#scikitplot.corpus.BuilderConfig.chunker_kwargs "Link to this definition")

    collection\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BuilderConfig.collection_id "Link to this definition")

    default\_language: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BuilderConfig.default_language "Link to this definition")

    download\_max\_retries: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 3[#](#scikitplot.corpus.BuilderConfig.download_max_retries "Link to this definition")
    :   Maximum retry attempts for transient HTTP errors (429, 500, 502,
        503, 504) during URL downloads. Set to `0` to disable retries.
        Default: 3.

    download\_policy: [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BuilderConfig.download_policy "Link to this definition")

    download\_retry\_backoff: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 1.0[#](#scikitplot.corpus.BuilderConfig.download_retry_backoff "Link to this definition")
    :   Base delay in seconds for exponential back-off between download
        retries. Actual wait = `download_retry_backoff * 2 ** attempt`.
        Default: 1.0.

    download\_timeout: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 120[#](#scikitplot.corpus.BuilderConfig.download_timeout "Link to this definition")
    :   Type:
        :   HTTP timeout for URL downloads in seconds. Default

    downloader\_kwargs: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_corpus_builder.py#L152)[#](#scikitplot.corpus.BuilderConfig.downloader_kwargs "Link to this definition")

    embed: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.BuilderConfig.embed "Link to this definition")

    embedding\_kwargs: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_corpus_builder.py#L152)[#](#scikitplot.corpus.BuilderConfig.embedding_kwargs "Link to this definition")

    embedding\_model: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'all-MiniLM-L6-v2'[#](#scikitplot.corpus.BuilderConfig.embedding_model "Link to this definition")

    enrich: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.BuilderConfig.enrich "Link to this definition")

    enricher\_kwargs: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_corpus_builder.py#L152)[#](#scikitplot.corpus.BuilderConfig.enricher_kwargs "Link to this definition")

    filter\_kwargs: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_corpus_builder.py#L152)[#](#scikitplot.corpus.BuilderConfig.filter_kwargs "Link to this definition")

    index\_kwargs: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_corpus_builder.py#L152)[#](#scikitplot.corpus.BuilderConfig.index_kwargs "Link to this definition")

    max\_archive\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 2147483648[#](#scikitplot.corpus.BuilderConfig.max_archive_bytes "Link to this definition")
    :   2 GB.

        Type:
        :   Maximum cumulative extracted size per archive. Default

    max\_archive\_files: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 10000[#](#scikitplot.corpus.BuilderConfig.max_archive_files "Link to this definition")
    :   10,000.

        Type:
        :   Maximum file count inside a single archive. Default

    max\_download\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 524288000[#](#scikitplot.corpus.BuilderConfig.max_download_bytes "Link to this definition")
    :   500 MB.

        Type:
        :   Maximum download size per URL in bytes. Default

    max\_workers: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1[#](#scikitplot.corpus.BuilderConfig.max_workers "Link to this definition")

    normalize: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.BuilderConfig.normalize "Link to this definition")

    normalizer\_kwargs: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_corpus_builder.py#L152)[#](#scikitplot.corpus.BuilderConfig.normalizer_kwargs "Link to this definition")

    normalizer\_steps: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[Literal['unicode', 'whitespace', 'html\_strip', 'lowercase', 'dedup\_lines']][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_corpus_builder.py#L152)[#](#scikitplot.corpus.BuilderConfig.normalizer_steps "Link to this definition")

    probe\_url\_content\_type: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.BuilderConfig.probe_url_content_type "Link to this definition")
    :   Probe extensionless URLs with a HEAD request to determine the correct
        reader. When `True` (default), any URL that [`classify_url`](scikitplot.corpus.classify_url.html#scikitplot.corpus.classify_url "scikitplot.corpus.classify_url")
        classifies as `WEB_PAGE` **and** has no file extension in its path
        is probed via [`probe_url_kind`](scikitplot.corpus.probe_url_kind.html#scikitplot.corpus.probe_url_kind "scikitplot.corpus.probe_url_kind") before routing. Set to
        `False` to skip the extra network round-trip (e.g. when all your
        URLs already carry file extensions or you want pure-offline
        operation). Default: `True`.

    probe\_url\_timeout: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 15[#](#scikitplot.corpus.BuilderConfig.probe_url_timeout "Link to this definition")
    :   HTTP timeout in seconds for the URL-probing HEAD request.
        Default: 15.

    retrieval\_config: [RetrievalConfig](scikitplot.corpus.RetrievalConfig.html#scikitplot.corpus.RetrievalConfig "scikitplot.corpus.RetrievalConfig") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BuilderConfig.retrieval_config "Link to this definition")

    source\_author: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BuilderConfig.source_author "Link to this definition")

    source\_title: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BuilderConfig.source_title "Link to this definition")

    source\_type: [SourceType](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus.SourceType") | [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BuilderConfig.source_type "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[Build a Multi-Source WHO Corpus](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

Build a Multi-Source WHO Corpus