# configure\_logging[#](#configure-logging "Link to this heading")

scikitplot.cleanprompt.configure\_logging(**level='warning'**, **fmt='text'**, **stream=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_logging.py#L364)[#](#scikitplot.cleanprompt.configure_logging "Link to this definition")
:   Attach a handler to this submodule’s logger.

    Parameters:
    :   ****level****str, default=’warning’
        :   One of `critical`, `error`, `warning`, `info`, `debug`.

        ****fmt****str, default=’text’
        :   `"text"` or `"json"`.

        ****stream****file-like, optional
        :   Destination. Defaults to [`sys.stderr`](https://docs.python.org/3/library/sys.html#sys.stderr "(in Python v3.15)"), because standard output
            carries results and a log line in a pipe would corrupt them.

    Returns:
    :   logging.Logger
        :   This submodule’s logger.

    Raises:
    :   ValueError
        :   If `level` or `fmt` is unknown.

    Parameters:
    :   * ****level**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****fmt**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****stream**** ([**IO**](https://docs.python.org/3/library/typing.html#typing.IO "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)

    Return type:
    :   [**Logger**](scikitplot.logging.Logger.html#scikitplot.logging.Logger "logging.Logger")

    Notes

    ****Developer notes.**** Replaces any handler this function previously
    attached, and leaves handlers the application attached alone. Calling it
    twice therefore does not double every line — the duplicate-handler defect
    that makes library logging notorious.

    `propagate` is left `True` so an application that configured root
    logging still receives these records; the handler attached here is
    additional, not exclusive. That does mean an application which has
    configured root logging **and** calls this will see records twice, which is
    why this function exists only as an explicit opt-in.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_guard_agents_script_thumb.png)

[Cleanprompt as a Gate: Any Model, Any Agent, Nothing Private Leaves](../../auto_examples/cleanprompt/plot_cleanprompt_guard_agents_script.html)

Cleanprompt as a Gate: Any Model, Any Agent, Nothing Private Leaves