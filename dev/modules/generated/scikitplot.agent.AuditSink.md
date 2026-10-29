# AuditSink[#](#auditsink "Link to this heading")

class scikitplot.agent.AuditSink[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_audit.py#L51)[#](#scikitplot.agent.AuditSink "Link to this definition")
:   Where audit records go. Subclasses implement [`write`](#scikitplot.agent.AuditSink.write "scikitplot.agent.AuditSink.write").

    digest\_at(**run\_id**, **seq**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_audit.py#L69)[#](#scikitplot.agent.AuditSink.digest_at "Link to this definition")
    :   Return the digest of record `seq` of `run_id`, or `None`.

        `None` means the sink holds no such record, or cannot tell.

        Parameters:
        :   * ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****seq**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | None

    head(**run\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_audit.py#L58)[#](#scikitplot.agent.AuditSink.head "Link to this definition")
    :   Return `{"seq", "digest"}` of the last record of `run_id`.

        `None` means the sink holds no record of the run, or cannot tell
        (the default: a sink that only writes). The agent uses it to refuse a
        run id already used, and at resume to compare the trail with the
        saved state.

        Parameters:
        :   ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | None

    write(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_audit.py#L54)[#](#scikitplot.agent.AuditSink.write "Link to this definition")
    :   Append one record; raise if it could not be kept.

        Parameters:
        :   ****record**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   None