# ScorerBackendInfo[#](#scorerbackendinfo "Link to this heading")

class scikitplot.corpus.ScorerBackendInfo(**base**, **sklearn\_version**, **reason**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_scorer.py#L116)[#](#scikitplot.corpus.ScorerBackendInfo "Link to this definition")
:   Which base class the corpus scorers use in this process.

    Parameters:
    :   ****base****{“sklearn”, “vendored”}
        :   `"sklearn"` when scikit-learn’s `_BaseScorer` passed the contract
            probe, `"vendored"` otherwise.

        ****sklearn\_version****str or None
        :   Installed scikit-learn version, `None` when it is not importable.

        ****reason****str or None
        :   Why the vendored base is in use; `None` for `"sklearn"`.

    Parameters:
    :   * ****base**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****sklearn\_version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    base: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_scorer.py#L116)[#](#scikitplot.corpus.ScorerBackendInfo.base "Link to this definition")

    reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_scorer.py#L116)[#](#scikitplot.corpus.ScorerBackendInfo.reason "Link to this definition")

    sklearn\_version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_scorer.py#L116)[#](#scikitplot.corpus.ScorerBackendInfo.sklearn_version "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_scorer.py#L136)[#](#scikitplot.corpus.ScorerBackendInfo.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]