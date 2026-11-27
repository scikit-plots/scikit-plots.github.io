# BackendSkip[#](#backendskip "Link to this heading")

class scikitplot.corpus.BackendSkip(**backend**, **reason**, **capability=None**, **capability\_status=None**, **ready=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_backends.py#L375)[#](#scikitplot.corpus.BackendSkip "Link to this definition")
:   Why a backend was not executed under the resolved policy.

    The record is deliberately small and JSON-compatible. It contains no live
    exception or heavyweight capability object, so reader diagnostics can keep
    it safely after the operation completes.

    Parameters:
    :   * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****capability**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****capability\_status**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****ready**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

    backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_backends.py#L375)[#](#scikitplot.corpus.BackendSkip.backend "Link to this definition")

    capability: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BackendSkip.capability "Link to this definition")

    capability\_status: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BackendSkip.capability_status "Link to this definition")

    ready: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BackendSkip.ready "Link to this definition")

    reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_backends.py#L375)[#](#scikitplot.corpus.BackendSkip.reason "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_backends.py#L390)[#](#scikitplot.corpus.BackendSkip.to_dict "Link to this definition")
    :   Return a JSON-compatible representation.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]