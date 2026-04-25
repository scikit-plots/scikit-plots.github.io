# create\_corpus[#](#create-corpus "Link to this heading")

scikitplot.corpus.create\_corpus(**input\_path**, **output\_path**, **\***, **chunker=None**, **filter\_=None**, **normalizer=None**, **enricher=None**, **filename\_override=None**, **export\_format=ExportFormat.CSV**, **default\_language=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_pipeline.py#L1056)[#](#scikitplot.corpus.create_corpus "Link to this definition")
:   Create and export a corpus from a single source file.

    Convenience wrapper around [`CorpusPipeline`](scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline") for the common
    single-file, single-output use case. Directly replaces remarx’s
    `create_corpus()` function.

    Parameters:
    :   ****input\_path****pathlib.Path or str
        :   Path to the input file (local) or an `http(s)://` URL string.

        ****output\_path****pathlib.Path or str
        :   Path for the exported corpus file.

        ****chunker****ChunkerBase or None, optional
        :   Text chunker. Default: `None` (one doc per raw chunk).

        ****filter\_****FilterBase or None, optional
        :   Document filter. Default: `None` ([`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter")).

        ****normalizer****TextNormalizer or None, optional
        :   When provided, `normalized_text` is populated on every document
            after chunking/filtering. Cleans OCR noise, ligatures, and
            whitespace artefacts before embedding. Default: `None` (skip).

        ****enricher****NLPEnricher or None, optional
        :   When provided, NLP fields (`tokens`, `lemmas`, `stems`,
            `keywords`, and optional extended metadata) are populated on every
            document after normalisation. Supports 200+ world languages via
            `language`.
            Default: `None` (skip).

        ****filename\_override****str or None, optional
        :   Override the `input_path` label in generated documents.

        ****export\_format****ExportFormat, optional
        :   Output format. Default: `CSV`.

        ****default\_language****str or list[str] or None, optional
        :   ISO 639-1 code(s) or NLTK language name(s) applied when the reader
            cannot detect language. Accepts `"en"`, `"english"`,
            `["en", "ar"]`, or `None` (auto-detect). Default: `None`.

    Returns:
    :   PipelineResult
        :   Immutable summary including the document list, counts, timing, and
            output path.

    Parameters:
    :   * ****input\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
        * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
        * ****normalizer**** ([**TextNormalizer**](scikitplot.corpus.TextNormalizer.html#scikitplot.corpus.TextNormalizer "scikitplot.corpus._normalizers._text_normalizer.TextNormalizer") **|** **None**)
        * ****enricher**** ([**NLPEnricher**](scikitplot.corpus.NLPEnricher.html#scikitplot.corpus.NLPEnricher "scikitplot.corpus._enrichers._nlp_enricher.NLPEnricher") **|** **None**)
        * ****filename\_override**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****export\_format**** ([**ExportFormat**](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus._schema.ExportFormat"))
        * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**PipelineResult**](scikitplot.corpus.PipelineResult.html#scikitplot.corpus.PipelineResult "scikitplot.corpus._pipeline.PipelineResult")

    Examples

    Try it in your browser!

    Basic single-file corpus:

    ```
    >>> from pathlib import Path
    >>> from scikitplot.corpus._pipeline import create_corpus
    >>> result = create_corpus(
    ...     input_path=Path("chapter01.txt"),
    ...     output_path=Path("output/chapter01.csv"),
    ... )
    >>> len(result.documents)
    312

    ```

    With normalisation and NLP enrichment:

    ```
    >>> from scikitplot.corpus import TextNormalizer, NLPEnricher, EnricherConfig
    >>> result = create_corpus(
    ...     input_path=Path("scan.png"),
    ...     output_path=Path("output/scan.csv"),
    ...     normalizer=TextNormalizer(),
    ...     enricher=NLPEnricher(
    ...         EnricherConfig(
    ...             language="en",
    ...             keyword_extractor="tfidf",
    ...             sentence_count=True,
    ...             char_count=True,
    ...         )
    ...     ),
    ... )

    ```

    Multi-language corpus:

    ```
    >>> result = create_corpus(
    ...     input_path=Path("multilang.txt"),
    ...     output_path=Path("output/multilang.csv"),
    ...     enricher=NLPEnricher(EnricherConfig(language=["en", "ar", "hi"])),
    ... )

    ```
    Go BackOpen In Tab