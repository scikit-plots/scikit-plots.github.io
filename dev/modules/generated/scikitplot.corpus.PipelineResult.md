# PipelineResult[#](#pipelineresult "Link to this heading")

class scikitplot.corpus.PipelineResult(**source**, **documents**, **output\_path**, **n\_read**, **n\_omitted**, **n\_embedded**, **elapsed\_seconds**, **export\_format**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_pipeline.py#L63)[#](#scikitplot.corpus.PipelineResult "Link to this definition")
:   Immutable summary of a single pipeline run.

    Parameters:
    :   ****source****str
        :   Input source identifier (file path, URL, or batch label).

        ****documents****list of CorpusDocument
        :   All documents produced (after chunking, filtering, and optional
            embedding). Empty list if the source yielded no usable text.

        ****output\_path****pathlib.Path or None
        :   Path to the exported file, or `None` when no export was
            requested (`output_path=None` in the pipeline call).

        ****n\_read****int
        :   Total raw chunks yielded by the reader before filtering.

        ****n\_omitted****int
        :   Chunks dropped by the filter.

        ****n\_embedded****int
        :   Documents that received an embedding vector (0 when embedding
            is disabled).

        ****elapsed\_seconds****float
        :   Wall-clock time for the entire run, in seconds.

        ****export\_format****ExportFormat or None
        :   Format used for export, or `None` when no export was done.

    Parameters:
    :   * ****source**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****documents**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****CorpusDocument****]**)
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****n\_read**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_omitted**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_embedded**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****elapsed\_seconds**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****export\_format**** (**ExportFormat** **|** **None**)

    Notes

    `n_read - n_omitted == len(documents)` is an invariant maintained
    by the pipeline.

    Examples

    ```
    >>> result.n_read
    512
    >>> result.elapsed_seconds
    3.14
    >>> len(result.documents)
    487

    ```

    documents: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[CorpusDocument][[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_pipeline.py#L63)[#](#scikitplot.corpus.PipelineResult.documents "Link to this definition")

    elapsed\_seconds: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_pipeline.py#L63)[#](#scikitplot.corpus.PipelineResult.elapsed_seconds "Link to this definition")

    export\_format: ExportFormat | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_pipeline.py#L63)[#](#scikitplot.corpus.PipelineResult.export_format "Link to this definition")

    property n\_documents: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.PipelineResult.n_documents "Link to this definition")
    :   Number of documents in the result.

    n\_embedded: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_pipeline.py#L63)[#](#scikitplot.corpus.PipelineResult.n_embedded "Link to this definition")

    n\_omitted: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_pipeline.py#L63)[#](#scikitplot.corpus.PipelineResult.n_omitted "Link to this definition")

    n\_read: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_pipeline.py#L63)[#](#scikitplot.corpus.PipelineResult.n_read "Link to this definition")

    output\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_pipeline.py#L63)[#](#scikitplot.corpus.PipelineResult.output_path "Link to this definition")

    source: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_pipeline.py#L63)[#](#scikitplot.corpus.PipelineResult.source "Link to this definition")