# PipelineStep[#](#pipelinestep "Link to this heading")

class scikitplot.corpus.PipelineStep(**name**, **step\_type**, **config**, **enabled=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L582)[#](#scikitplot.corpus.PipelineStep "Link to this definition")
:   Descriptor for a single step in a [`PipelineConfig`](scikitplot.corpus.PipelineConfig.html#scikitplot.corpus.PipelineConfig "scikitplot.corpus.PipelineConfig").

    Parameters:
    :   ****name****str
        :   Human-readable step name used in logs and error messages.

        ****step\_type****str
        :   One of `"source"`, `"normalizer"`, `"chunker"`,
            `"embedder"`, `"storage"`.

        ****config****ChunkerConfig | NormalizerConfigBase | SourceConfig | StorageConfig
        :   Configuration object for this step. Must be an instance of the
            appropriate abstract config base.

        ****enabled****bool
        :   When `False`, this step is skipped during pipeline execution.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****step\_type**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****config**** ([**ChunkerConfig**](scikitplot.corpus.ChunkerConfig.html#scikitplot.corpus.ChunkerConfig "scikitplot.corpus._types.ChunkerConfig") **|** [**NormalizerConfigBase**](scikitplot.corpus.NormalizerConfigBase.html#scikitplot.corpus.NormalizerConfigBase "scikitplot.corpus._types.NormalizerConfigBase") **|** [**SourceConfig**](scikitplot.corpus.SourceConfig.html#scikitplot.corpus.SourceConfig "scikitplot.corpus._types.SourceConfig") **|** [**StorageConfig**](scikitplot.corpus.StorageConfig.html#scikitplot.corpus.StorageConfig "scikitplot.corpus._types.StorageConfig"))
        * ****enabled**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    config: [ChunkerConfig](scikitplot.corpus.ChunkerConfig.html#scikitplot.corpus.ChunkerConfig "scikitplot.corpus._types.ChunkerConfig") | [NormalizerConfigBase](scikitplot.corpus.NormalizerConfigBase.html#scikitplot.corpus.NormalizerConfigBase "scikitplot.corpus._types.NormalizerConfigBase") | [SourceConfig](scikitplot.corpus.SourceConfig.html#scikitplot.corpus.SourceConfig "scikitplot.corpus._types.SourceConfig") | [StorageConfig](scikitplot.corpus.StorageConfig.html#scikitplot.corpus.StorageConfig "scikitplot.corpus._types.StorageConfig")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L582)[#](#scikitplot.corpus.PipelineStep.config "Link to this definition")

    enabled: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.PipelineStep.enabled "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L582)[#](#scikitplot.corpus.PipelineStep.name "Link to this definition")

    step\_type: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L582)[#](#scikitplot.corpus.PipelineStep.step_type "Link to this definition")