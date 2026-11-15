# Finish[#](#finish "Link to this heading")

class scikitplot.agent.Finish(**name**, **answer=None**, **on\_rejected=None**, **max\_visits=None**, **on\_exhausted=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_workflow.py#L342)[#](#scikitplot.agent.Finish "Link to this definition")
:   A node that ends the run with an answer.

    Parameters:
    :   ****name****str
        :   Node name, unique in the graph.

        ****answer****callable or None, default=None
        :   `answer(view) -> JSON value`; `None` answers with every channel.

        ****on\_rejected****str or None, default=None
        :   Node entered when the agent’s done criterion rejects the answer.
            `None` makes a rejection end the workflow with an error.

    Raises:
    :   WorkflowError
        :   If a field is malformed.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****answer**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****...****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****on\_rejected**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****max\_visits**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****on\_exhausted**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    answer: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[...], [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Finish.answer "Link to this definition")

    max\_visits: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Finish.max_visits "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_workflow.py#L342)[#](#scikitplot.agent.Finish.name "Link to this definition")

    on\_exhausted: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Finish.on_exhausted "Link to this definition")

    on\_rejected: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Finish.on_rejected "Link to this definition")