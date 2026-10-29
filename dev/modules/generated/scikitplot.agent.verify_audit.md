# verify\_audit[#](#verify-audit "Link to this heading")

scikitplot.agent.verify\_audit(**records**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_audit.py#L311)[#](#scikitplot.agent.verify_audit "Link to this definition")
:   Check every run’s hash chain in `records`.

    Parameters:
    :   ****records****iterable of mapping
        :   Records as written, in order; several runs may be interleaved.

    Returns:
    :   list of str
        :   The problems found; empty when every chain is whole. A run’s first
            record must be number 0 and name `GENESIS` as `prev`; each
            next record must be numbered one more and name the digest of the one
            before; every digest must match its record.

    Parameters:
    :   ****records**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]**)

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import verify_audit
    >>> verify_audit([])
    []

    ```
    Go BackOpen In Tab