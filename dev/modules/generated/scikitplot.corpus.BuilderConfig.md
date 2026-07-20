# BuilderConfig[#](#builderconfig "Link to this heading")

class scikitplot.corpus.BuilderConfig(**chunker='sentence'**, **chunker\_kwargs=<factory>**, **normalize=True**, **normalizer\_steps=<factory>**, **normalizer\_kwargs=<factory>**, **enrich=False**, **enricher\_kwargs=<factory>**, **embed=False**, **embedding\_model='all-MiniLM-L6-v2'**, **embedding\_kwargs=<factory>**, **build\_index=False**, **index\_kwargs=<factory>**, **source\_title=None**, **source\_author=None**, **source\_type=None**, **collection\_id=None**, **default\_language=None**, **filter\_kwargs=<factory>**, **max\_download\_bytes=524288000**, **download\_timeout=120**, **download\_max\_retries=3**, **download\_retry\_backoff=1.0**, **max\_archive\_files=10000**, **max\_archive\_bytes=2147483648**, **probe\_url\_content\_type=True**, **probe\_url\_timeout=15**, **max\_workers=1**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8f33de/scikitplot/corpus/_corpus_builder.py#L144)[#](#scikitplot.corpus.BuilderConfig "Link to this definition")
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
            Kwargs for `NormalizerConfig`.

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
        :   Build a `SimilarityIndex` after embedding.

        ****index\_kwargs****dict[str, Any]
        :   Kwargs for `SearchConfig`.

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

    Parameters:
    :   * ****chunker**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus.ChunkerBase") **|** **None**)
        * ****chunker\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]**)
        * ****normalize**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****normalizer\_steps**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Literal****[****'unicode'****,** **'whitespace'****,** **'html\_strip'****,** **'lowercase'****,** **'dedup\_lines'****]****]**)
        * ****normalizer\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]**)
        * ****enrich**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****enricher\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]**)
        * ****embed**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****embedding\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****embedding\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]**)
        * ****build\_index**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****index\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]**)
        * ****source\_title**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_author**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus.SourceType") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****collection\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****filter\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]**)
        * ****max\_download\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****download\_timeout**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****download\_max\_retries**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****download\_retry\_backoff**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****max\_archive\_files**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_archive\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****probe\_url\_content\_type**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****probe\_url\_timeout**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_workers**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    Notes

    ****User note:**** Most users need only:

    ```
    config = BuilderConfig(chunker="sentence", embed=True)

    ```

    Everything else has sensible defaults.

    build\_index: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.BuilderConfig.build_index "Link to this definition")

    chunker: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [ChunkerBase](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus.ChunkerBase") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = 'sentence'[#](#scikitplot.corpus.BuilderConfig.chunker "Link to this definition")

    chunker\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c8f33de/scikitplot/corpus/_corpus_builder.py#L144)[#](#scikitplot.corpus.BuilderConfig.chunker_kwargs "Link to this definition")

    collection\_id: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BuilderConfig.collection_id "Link to this definition")

    default\_language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BuilderConfig.default_language "Link to this definition")

    download\_max\_retries: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 3[#](#scikitplot.corpus.BuilderConfig.download_max_retries "Link to this definition")
    :   Maximum retry attempts for transient HTTP errors (429, 500, 502,
        503, 504) during URL downloads. Set to `0` to disable retries.
        Default: 3.

    download\_retry\_backoff: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 1.0[#](#scikitplot.corpus.BuilderConfig.download_retry_backoff "Link to this definition")
    :   Base delay in seconds for exponential back-off between download
        retries. Actual wait = `download_retry_backoff * 2 ** attempt`.
        Default: 1.0.

    download\_timeout: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 120[#](#scikitplot.corpus.BuilderConfig.download_timeout "Link to this definition")
    :   Type:
        :   HTTP timeout for URL downloads in seconds. Default

    embed: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.BuilderConfig.embed "Link to this definition")

    embedding\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c8f33de/scikitplot/corpus/_corpus_builder.py#L144)[#](#scikitplot.corpus.BuilderConfig.embedding_kwargs "Link to this definition")

    embedding\_model: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'all-MiniLM-L6-v2'[#](#scikitplot.corpus.BuilderConfig.embedding_model "Link to this definition")

    enrich: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.BuilderConfig.enrich "Link to this definition")

    enricher\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c8f33de/scikitplot/corpus/_corpus_builder.py#L144)[#](#scikitplot.corpus.BuilderConfig.enricher_kwargs "Link to this definition")

    filter\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c8f33de/scikitplot/corpus/_corpus_builder.py#L144)[#](#scikitplot.corpus.BuilderConfig.filter_kwargs "Link to this definition")

    index\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c8f33de/scikitplot/corpus/_corpus_builder.py#L144)[#](#scikitplot.corpus.BuilderConfig.index_kwargs "Link to this definition")

    max\_archive\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 2147483648[#](#scikitplot.corpus.BuilderConfig.max_archive_bytes "Link to this definition")
    :   2 GB.

        Type:
        :   Maximum cumulative extracted size per archive. Default

    max\_archive\_files: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 10000[#](#scikitplot.corpus.BuilderConfig.max_archive_files "Link to this definition")
    :   10,000.

        Type:
        :   Maximum file count inside a single archive. Default

    max\_download\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 524288000[#](#scikitplot.corpus.BuilderConfig.max_download_bytes "Link to this definition")
    :   500 MB.

        Type:
        :   Maximum download size per URL in bytes. Default

    max\_workers: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 1[#](#scikitplot.corpus.BuilderConfig.max_workers "Link to this definition")

    normalize: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.BuilderConfig.normalize "Link to this definition")

    normalizer\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/c8f33de/scikitplot/corpus/_corpus_builder.py#L144)[#](#scikitplot.corpus.BuilderConfig.normalizer_kwargs "Link to this definition")

    normalizer\_steps: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[Literal['unicode', 'whitespace', 'html\_strip', 'lowercase', 'dedup\_lines']][[source]](https://github.com/scikit-plots/scikit-plots/blob/c8f33de/scikitplot/corpus/_corpus_builder.py#L144)[#](#scikitplot.corpus.BuilderConfig.normalizer_steps "Link to this definition")

    probe\_url\_content\_type: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.BuilderConfig.probe_url_content_type "Link to this definition")
    :   Probe extensionless URLs with a HEAD request to determine the correct
        reader. When `True` (default), any URL that [`classify_url`](scikitplot.corpus.classify_url.html#scikitplot.corpus.classify_url "scikitplot.corpus.classify_url")
        classifies as `WEB_PAGE` **and** has no file extension in its path
        is probed via [`probe_url_kind`](scikitplot.corpus.probe_url_kind.html#scikitplot.corpus.probe_url_kind "scikitplot.corpus.probe_url_kind") before routing. Set to
        `False` to skip the extra network round-trip (e.g. when all your
        URLs already carry file extensions or you want pure-offline
        operation). Default: `True`.

    probe\_url\_timeout: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 15[#](#scikitplot.corpus.BuilderConfig.probe_url_timeout "Link to this definition")
    :   HTTP timeout in seconds for the URL-probing HEAD request.
        Default: 15.

    source\_author: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BuilderConfig.source_author "Link to this definition")

    source\_title: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BuilderConfig.source_title "Link to this definition")

    source\_type: [SourceType](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus.SourceType") | [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BuilderConfig.source_type "Link to this definition")