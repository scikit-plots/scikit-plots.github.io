# get\_config[#](#get-config "Link to this heading")

scikitplot.config.get\_config()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/config/_config.py#L116)[#](#scikitplot.config.get_config "Link to this definition")
:   Retrieve current values for configuration set by [`set_config`](scikitplot.config.set_config.html#scikitplot.config.set_config "scikitplot.config.set_config").

    Returns:
    :   ****config****dict
        :   Keys are parameter names that can be passed to [`set_config`](scikitplot.config.set_config.html#scikitplot.config.set_config "scikitplot.config.set_config").

    > **See also**
    > [`config_context`](scikitplot.config.config_context.html#scikitplot.config.config_context "scikitplot.config.config_context")
    :   Context manager for global scikit-plots configuration.

    [`set_config`](scikitplot.config.set_config.html#scikitplot.config.set_config "scikitplot.config.set_config")
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