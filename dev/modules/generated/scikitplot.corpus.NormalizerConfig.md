# NormalizerConfig[#](#normalizerconfig "Link to this heading")

class scikitplot.corpus.NormalizerConfig(**normalizer\_type=NormalizerType.CUSTOM**, **enabled=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_types.py#L683)[#](#scikitplot.corpus.NormalizerConfig "Link to this definition")
:   Abstract base configuration for text normaliser implementations.

    Parameters:
    :   ****normalizer\_type****NormalizerType
        :   The type of normalisation this config applies to.

        ****enabled****bool
        :   When `False`, the normaliser is skipped in the pipeline.

    Parameters:
    :   * ****normalizer\_type**** (**NormalizerType**)
        * ****enabled**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    enabled: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.NormalizerConfig.enabled "Link to this definition")

    normalizer\_type: NormalizerType = 'custom'[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_types.py#L)[#](#scikitplot.corpus.NormalizerConfig.normalizer_type "Link to this definition")