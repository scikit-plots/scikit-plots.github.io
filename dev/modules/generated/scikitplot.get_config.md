# get\_config[#](#get-config "Link to this heading")

scikitplot.get\_config()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/config/_config.py#L115)[#](#scikitplot.get_config "Link to this definition")
:   Retrieve current values for configuration set by [`set_config`](scikitplot.set_config.html#scikitplot.set_config "scikitplot.set_config").

    Returns:
    :   ****config****dict
        :   Keys are parameter names that can be passed to [`set_config`](scikitplot.set_config.html#scikitplot.set_config "scikitplot.set_config").

    > **See also**
    > [`config_context`](scikitplot.config_context.html#scikitplot.config_context "scikitplot.config_context")
    :   Context manager for global scikit-plots configuration.

    [`set_config`](scikitplot.set_config.html#scikitplot.set_config "scikitplot.set_config")
    :   Set global scikit-plots configuration.

    Examples

    Try it in your browser!
    ```
    >>> import scikitplot
    >>> config = scikitplot.get_config()
    >>> config.keys()
    dict_keys([...])

    ```
    Go BackOpen In Tab