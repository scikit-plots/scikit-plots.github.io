# PipelineConfig[#](#pipelineconfig "Link to this heading")

class scikitplot.corpus.PipelineConfig(**pipeline\_id**, **steps**, **description=''**, **metadata=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L531)[#](#scikitplot.corpus.PipelineConfig "Link to this definition")
:   Full pipeline configuration composed of ordered steps.

    Parameters:
    :   ****pipeline\_id****str
        :   Unique identifier for this pipeline configuration.

        ****steps****list[PipelineStep]
        :   Ordered sequence of pipeline steps. Steps are executed in
            list order.

        ****description****str
        :   Human-readable description of the pipeline’s purpose.

        ****metadata****MetadataDict
        :   Arbitrary pipeline-level metadata (version, author, …).

    Parameters:
    :   * ****pipeline\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****steps**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**PipelineStep**](scikitplot.corpus.PipelineStep.html#scikitplot.corpus.PipelineStep "scikitplot.corpus._types.PipelineStep")**]**)
        * ****description**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Notes

    A valid pipeline must contain at least one step. Validation is
    performed by the pipeline executor, not here.

    description: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.corpus.PipelineConfig.description "Link to this definition")

    metadata: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L531)[#](#scikitplot.corpus.PipelineConfig.metadata "Link to this definition")

    pipeline\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L531)[#](#scikitplot.corpus.PipelineConfig.pipeline_id "Link to this definition")

    steps: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[PipelineStep](scikitplot.corpus.PipelineStep.html#scikitplot.corpus.PipelineStep "scikitplot.corpus._types.PipelineStep")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L531)[#](#scikitplot.corpus.PipelineConfig.steps "Link to this definition")