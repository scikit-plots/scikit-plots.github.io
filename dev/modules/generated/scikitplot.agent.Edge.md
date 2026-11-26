# Edge[#](#edge "Link to this heading")

class scikitplot.agent.Edge(**source**, **target**, **when=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/agent/_workflow.py#L377)[#](#scikitplot.agent.Edge "Link to this definition")
:   A transition from `source` to `target`, taken when `when` is true.

    Parameters:
    :   ****source, target****str
        :   Node names.

        ****when****callable or None, default=None
        :   `when(view) -> bool`; `None` always matches. A source’s edges are
            tried in declaration order and the first match is taken.

    Parameters:
    :   * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****target**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****when**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****...****]****,** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** **None**)

    source: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/agent/_workflow.py#L377)[#](#scikitplot.agent.Edge.source "Link to this definition")

    target: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/agent/_workflow.py#L377)[#](#scikitplot.agent.Edge.target "Link to this definition")

    when: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[...], [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Edge.when "Link to this definition")