# AgentError[#](#agenterror "Link to this heading")

class scikitplot.agent.AgentError(**code**, **message**, **details=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_errors.py#L99)[#](#scikitplot.agent.AgentError "Link to this definition")
:   One error, as recorded in a run’s state and audit trail.

    Parameters:
    :   ****code****ErrorCode
        :   What went wrong.

        ****message****str
        :   A sentence a person can act on.

        ****details****mapping, default={}
        :   JSON-compatible facts (the gate, the limit, the tool, …).

    Raises:
    :   TypeError
        :   If `code` is not an [`ErrorCode`](scikitplot.agent.ErrorCode.html#scikitplot.agent.ErrorCode "scikitplot.agent.ErrorCode") (or its value) or `message`
            is not a string.

    Parameters:
    :   * ****code**** ([**ErrorCode**](scikitplot.agent.ErrorCode.html#scikitplot.agent.ErrorCode "scikitplot.agent._errors.ErrorCode"))
        * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****details**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import AgentError, ErrorCode
    >>> err = AgentError(ErrorCode.SCOPE_DENIED, "needs 'corpus:read'")
    >>> err.to_dict()["code"]
    'scope_denied'
    >>> AgentError.from_dict(err.to_dict()) == err
    True

    ```
    Go BackOpen In Tab

    code: [ErrorCode](scikitplot.agent.ErrorCode.html#scikitplot.agent.ErrorCode "scikitplot.agent._errors.ErrorCode")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_errors.py#L99)[#](#scikitplot.agent.AgentError.code "Link to this definition")

    details: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_errors.py#L99)[#](#scikitplot.agent.AgentError.details "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_errors.py#L152)[#](#scikitplot.agent.AgentError.from_dict "Link to this definition")
    :   Rebuild an error written by [`to_dict`](#scikitplot.agent.AgentError.to_dict "scikitplot.agent.AgentError.to_dict").

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**AgentError**](#scikitplot.agent.AgentError "scikitplot.agent._errors.AgentError")

    message: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_errors.py#L99)[#](#scikitplot.agent.AgentError.message "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_errors.py#L144)[#](#scikitplot.agent.AgentError.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]