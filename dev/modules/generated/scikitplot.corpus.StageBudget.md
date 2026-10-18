# StageBudget[#](#stagebudget "Link to this heading")

class scikitplot.corpus.StageBudget(**max\_calls=None**, **max\_seconds=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_execution.py#L166)[#](#scikitplot.corpus.StageBudget "Link to this definition")
:   Deterministic limits on the `retrieve` stage.

    Parameters:
    :   ****max\_calls****int or None, default=None
        :   Queries `retrieve` may start (one `index.search` call each).
            `None` is no limit.

        ****max\_seconds****float or None, default=None
        :   Seconds after which `retrieve` starts no further query. A running
            call is not interrupted: its time is reported, and an overrun is in
            the stage’s details. `None` is no limit.

    Raises:
    :   TypeError
        :   If a limit has the wrong type (`bool` included).

        ValueError
        :   If a limit is not positive (or not finite).

    Parameters:
    :   * ****max\_calls**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****max\_seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

    max\_calls: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.StageBudget.max_calls "Link to this definition")

    max\_seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.StageBudget.max_seconds "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_execution.py#L206)[#](#scikitplot.corpus.StageBudget.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]