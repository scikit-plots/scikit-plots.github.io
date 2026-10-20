# MemoryAuditSink[#](#memoryauditsink "Link to this heading")

class scikitplot.agent.MemoryAuditSink[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_audit.py#L105)[#](#scikitplot.agent.MemoryAuditSink "Link to this definition")
:   Keep records in a list, `records`.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import MemoryAuditSink
    >>> MemoryAuditSink().records
    []

    ```
    Go BackOpen In Tab

    digest\_at(**run\_id**, **seq**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_audit.py#L127)[#](#scikitplot.agent.MemoryAuditSink.digest_at "Link to this definition")
    :   Return the digest of record `seq` of `run_id`.

        Parameters:
        :   * ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****seq**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | None

    head(**run\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_audit.py#L123)[#](#scikitplot.agent.MemoryAuditSink.head "Link to this definition")
    :   Return the last record of `run_id`, as `{"seq", "digest"}`.

        Parameters:
        :   ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | None

    write(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_audit.py#L119)[#](#scikitplot.agent.MemoryAuditSink.write "Link to this definition")
    :   Append a copy of `record`.

        Parameters:
        :   ****record**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   None