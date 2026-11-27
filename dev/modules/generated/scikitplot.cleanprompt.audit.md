# audit[#](#audit "Link to this heading")

scikitplot.cleanprompt.audit(**event**, **\*\*fields**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_logging.py#L697)[#](#scikitplot.cleanprompt.audit "Link to this definition")
:   Emit one structured audit event on [`AUDIT_LOGGER_NAME`](scikitplot.cleanprompt.AUDIT_LOGGER_NAME.html#scikitplot.cleanprompt.AUDIT_LOGGER_NAME "scikitplot.cleanprompt.AUDIT_LOGGER_NAME").

    Parameters:
    :   ****event****str
        :   What happened: `"encoded"`, `"decoded"`, `"blocked"`, …

        ****\*\*fields****
        :   Counts, kinds, formats, fingerprints and digests. ****Never a value.****

    Parameters:
    :   * ****event**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****fields**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   None

    Notes

    ****User notes.**** Audit events answer “what left this machine, under which
    plan?” without keeping what was removed. Send them where compliance wants
    them:

    ```
    import logging

    logging.getLogger("scikitplot.cleanprompt.audit").addHandler(my_handler)

    ```

    With `configure_logging(level="info", fmt="json")` each event is one JSON
    line whose fields are the keywords given here.

    ****Developer notes.**** Emitted at `INFO` through the ordinary logger, so it
    is off unless asked for and every scrubbing filter applies to it as well.