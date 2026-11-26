# get\_logger[#](#get-logger "Link to this heading")

scikitplot.cleanprompt.get\_logger(**name=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_logging.py#L134)[#](#scikitplot.cleanprompt.get_logger "Link to this definition")
:   Return a logger under this submodule’s namespace.

    Parameters:
    :   ****name****str, optional
        :   A module’s `__name__`. The submodule prefix is stripped so that
            `scikitplot.cleanprompt._engine` logs under `…cleanprompt._engine`
            rather than being nested twice.

    Returns:
    :   logging.Logger
        :   The logger.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**Logger**](scikitplot.logging.Logger.html#scikitplot.logging.Logger "logging.Logger")

    Examples

    Try it in your browser!
    ```
    >>> get_logger("scikitplot.cleanprompt._engine").name
    'scikitplot.cleanprompt._engine'
    >>> get_logger().name
    'scikitplot.cleanprompt'

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_guard_agents_script_thumb.png)

[Cleanprompt as a Gate: Any Model, Any Agent, Nothing Private Leaves](../../auto_examples/cleanprompt/plot_cleanprompt_guard_agents_script.html)

Cleanprompt as a Gate: Any Model, Any Agent, Nothing Private Leaves