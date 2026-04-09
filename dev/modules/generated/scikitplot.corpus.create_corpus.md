# create\_corpus[#](#create-corpus "Link to this heading")

scikitplot.corpus.create\_corpus(**input\_file**, **output\_path**, **\***, **chunker=None**, **filter\_=None**, **filename\_override=None**, **export\_format=ExportFormat.CSV**, **default\_language=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_pipeline.py#L989)[#](#scikitplot.corpus.create_corpus "Link to this definition")
:   Create and export a corpus from a single source file.

    Convenience wrapper around [`CorpusPipeline`](scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline") for the common
    single-file, single-output use case. Directly replaces remarx’s
    `create_corpus()` function.

    Parameters:
    :   ****input\_file****pathlib.Path or str
        :   Path to the input file.

        ****output\_path****pathlib.Path or str
        :   Path for the exported corpus file.

        ****chunker****ChunkerBase or None, optional
        :   Text chunker. Default: `None` (one doc per raw chunk).

        ****filter\_****FilterBase or None, optional
        :   Document filter. Default: `None` ([`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter")).

        ****filename\_override****str or None, optional
        :   Override the `source_file` label.

        ****export\_format****ExportFormat, optional
        :   Output format. Default: `ExportFormat.CSV`.

        ****default\_language****str or None, optional
        :   ISO 639-1 language code. Default: `None`.

    Returns:
    :   PipelineResult

    Parameters:
    :   * ****input\_file**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
        * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
        * ****filename\_override**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****export\_format**** (**ExportFormat**)
        * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**PipelineResult**](scikitplot.corpus.PipelineResult.html#scikitplot.corpus.PipelineResult "scikitplot.corpus._pipeline.PipelineResult")

    Examples

    ```
    >>> from pathlib import Path
    >>> from scikitplot.corpus._pipeline import create_corpus
    >>> result = create_corpus(
    ...     input_file=Path("chapter01.txt"),
    ...     output_path=Path("output/chapter01.csv"),
    ... )
    >>> len(result.documents)
    312

    ```