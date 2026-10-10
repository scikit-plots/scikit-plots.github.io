# NormalizerConfigBase[#](#normalizerconfigbase "Link to this heading")

class scikitplot.corpus.NormalizerConfigBase(**normalizer\_type=NormalizerType.CUSTOM**, **enabled=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_types.py#L470)[#](#scikitplot.corpus.NormalizerConfigBase "Link to this definition")
:   Abstract base configuration for text normaliser implementations.

    Parameters:
    :   ****normalizer\_type****NormalizerType
        :   The type of normalisation this config applies to.

        ****enabled****bool
        :   When `False`, the normaliser is skipped in the pipeline.

    Parameters:
    :   * ****normalizer\_type**** ([**NormalizerType**](scikitplot.corpus.NormalizerType.html#scikitplot.corpus.NormalizerType "scikitplot.corpus._types.NormalizerType"))
        * ****enabled**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    enabled: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.NormalizerConfigBase.enabled "Link to this definition")

    normalizer\_type: [NormalizerType](scikitplot.corpus.NormalizerType.html#scikitplot.corpus.NormalizerType "scikitplot.corpus._types.NormalizerType") = 'custom'[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_types.py#L)[#](#scikitplot.corpus.NormalizerConfigBase.normalizer_type "Link to this definition")