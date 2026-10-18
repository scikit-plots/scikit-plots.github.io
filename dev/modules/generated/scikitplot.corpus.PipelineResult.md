# PipelineResult[#](#pipelineresult "Link to this heading")

class scikitplot.corpus.PipelineResult(**input\_path**, **output\_path**, **format**, **documents**, **n\_read**, **n\_omitted**, **n\_embedded**, **elapsed\_seconds**, **stage\_errors=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_pipeline.py#L89)[#](#scikitplot.corpus.PipelineResult "Link to this definition")
:   Immutable summary of a single pipeline run.

    Parameters:
    :   ****input\_path****str
        :   Input source identifier (file path, URL, or batch label).

        ****output\_path****pathlib.Path or None
        :   Path to the exported file, or `None` when no export was
            requested (`output_path=None` in the pipeline call).

        ****documents****list of CorpusDocument
        :   All documents produced (after chunking, filtering, and optional
            embedding). Empty list if the source yielded no usable text.

        ****n\_read****int
        :   Total raw chunks yielded by the reader before filtering.

        ****n\_omitted****int
        :   Chunks dropped by the filter.

        ****n\_embedded****int
        :   Documents that received an embedding vector (0 when embedding
            is disabled).

        ****elapsed\_seconds****float
        :   Wall-clock time for the entire run, in seconds.

        ****format****ExportFormat or None
        :   Format used for export, or `None` when no export was done.

    Parameters:
    :   * ****input\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)
        * ****format**** ([**ExportFormat**](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus._schema.ExportFormat") **|** **None**)
        * ****documents**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**,** **...****]**)
        * ****n\_read**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****n\_omitted**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****n\_embedded**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****elapsed\_seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****stage\_errors**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** **...****]**)

    Notes

    `n_read - n_omitted == len(documents)` is an invariant maintained
    by the pipeline.

    Examples

    Try it in your browser!
    ```
    >>> result.n_read
    512
    >>> result.elapsed_seconds
    3.14
    >>> len(result.documents)
    487

    ```
    Go BackOpen In Tab

    documents: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[CorpusDocument](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_pipeline.py#L89)[#](#scikitplot.corpus.PipelineResult.documents "Link to this definition")
    :   All documents produced by the pipeline run.

        Stored as an immutable `tuple` to enforce the frozen-dataclass contract.
        Use `list(result.documents)` if a mutable copy is needed.
        `len(result.documents) == result.n_documents`.

    elapsed\_seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_pipeline.py#L89)[#](#scikitplot.corpus.PipelineResult.elapsed_seconds "Link to this definition")

    format: [ExportFormat](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus._schema.ExportFormat") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_pipeline.py#L89)[#](#scikitplot.corpus.PipelineResult.format "Link to this definition")

    input\_path: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_pipeline.py#L89)[#](#scikitplot.corpus.PipelineResult.input_path "Link to this definition")

    property n\_documents: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.PipelineResult.n_documents "Link to this definition")
    :   Number of documents in the result.

    n\_embedded: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_pipeline.py#L89)[#](#scikitplot.corpus.PipelineResult.n_embedded "Link to this definition")

    n\_omitted: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_pipeline.py#L89)[#](#scikitplot.corpus.PipelineResult.n_omitted "Link to this definition")

    n\_read: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_pipeline.py#L89)[#](#scikitplot.corpus.PipelineResult.n_read "Link to this definition")

    output\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_pipeline.py#L89)[#](#scikitplot.corpus.PipelineResult.output_path "Link to this definition")

    stage\_errors: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], ...] = ()[#](#scikitplot.corpus.PipelineResult.stage_errors "Link to this definition")
    :   Stages that raised, as `(stage, reason)` pairs. Empty on a clean run.

        Catching a stage failure so the run continues is deliberate: one bad
        normalizer should not abort a whole ingest. Being unable to tell afterwards
        is not. Without this the result of a clean run and of a run whose normalizer
        raised were identical, so a caller could not distinguish a corpus that was
        normalized from one where normalization failed and the text passed through
        untouched.

    property status: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.PipelineResult.status "Link to this definition")
    :   `"success"` or `"degraded"`.

        Notes

        ****User.**** Check this before trusting the documents. `degraded` means a
        stage raised and its work did not happen: the documents are real but
        incomplete, and [`stage_errors`](#scikitplot.corpus.PipelineResult.stage_errors "scikitplot.corpus.PipelineResult.stage_errors") says which stage and why.

        ****Developer.**** The words are the ones `corpus._retrieval` already uses
        rather than a second vocabulary invented here. A run that lost a stage is
        degraded, not empty – emptiness would claim everything requested ran and
        found nothing.