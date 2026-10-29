# Approval[#](#approval "Link to this heading")

class scikitplot.agent.Approval(**digest**, **granted**, **approver**, **note=''**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L486)[#](#scikitplot.agent.Approval "Link to this definition")
:   A person’s answer to an [`ApprovalRequest`](scikitplot.agent.ApprovalRequest.html#scikitplot.agent.ApprovalRequest "scikitplot.agent.ApprovalRequest").

    Parameters:
    :   ****digest****str
        :   The request’s [`ApprovalRequest.digest`](scikitplot.agent.ApprovalRequest.html#scikitplot.agent.ApprovalRequest.digest "scikitplot.agent.ApprovalRequest.digest"): what is approved.

        ****granted****bool
        :   `True` approves the action; `False` refuses it.

        ****approver****str
        :   Who answered, recorded in the state and the audit trail.

        ****note****str, default=””
        :   Recorded with the answer.

    Parameters:
    :   * ****digest**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****granted**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****approver**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****note**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import Approval
    >>> Approval("0" * 64, granted=True, approver="allen").granted
    True

    ```
    Go BackOpen In Tab

    approver: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L486)[#](#scikitplot.agent.Approval.approver "Link to this definition")

    digest: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L486)[#](#scikitplot.agent.Approval.digest "Link to this definition")

    granted: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L486)[#](#scikitplot.agent.Approval.granted "Link to this definition")

    note: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.agent.Approval.note "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L522)[#](#scikitplot.agent.Approval.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]