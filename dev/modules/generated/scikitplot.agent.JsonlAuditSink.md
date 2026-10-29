# JsonlAuditSink[#](#jsonlauditsink "Link to this heading")

class scikitplot.agent.JsonlAuditSink(**path**, **\***, **fsync=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_audit.py#L132)[#](#scikitplot.agent.JsonlAuditSink "Link to this definition")
:   Append records to a JSON Lines file, one canonical line each.

    Parameters:
    :   ****path****str or os.PathLike
        :   The file; created if missing, never truncated.

        ****fsync****bool, default=False
        :   Call [`os.fsync`](https://docs.python.org/3/library/os.html#os.fsync "(in Python v3.15)") after each record, so it survives a crash of
            the machine and not only of the process.

    Parameters:
    :   * ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**os.PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****fsync**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    digest\_at(**run\_id**, **seq**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_audit.py#L216)[#](#scikitplot.agent.JsonlAuditSink.digest_at "Link to this definition")
    :   Return the digest of record `seq` of `run_id` (reads the file).

        Parameters:
        :   * ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****seq**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | None

    head(**run\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_audit.py#L196)[#](#scikitplot.agent.JsonlAuditSink.head "Link to this definition")
    :   Return the last record of `run_id` in the file.

        The file is read once and then only again when another writer has
        changed it (its size or modification time differ).

        Parameters:
        :   ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | None

    write(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_audit.py#L153)[#](#scikitplot.agent.JsonlAuditSink.write "Link to this definition")
    :   Append `record` as one line and flush it.

        Parameters:
        :   ****record**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   None