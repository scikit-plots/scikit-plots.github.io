# MagicSettings[#](#magicsettings "Link to this heading")

class scikitplot.\_ipymagic.MagicSettings(**raise\_on\_error=False**, **timeout=None**, **isolate=False**, **stream=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/_ipymagic/_settings.py#L83)[#](#scikitplot._ipymagic.MagicSettings "Link to this definition")
:   Behaviour of the magics for one IPython session.

    Parameters:
    :   ****raise\_on\_error****bool, default=False
        :   Raise [`CommandFailedError`](scikitplot._ipymagic.CommandFailedError.html#scikitplot._ipymagic.CommandFailedError "scikitplot._ipymagic.CommandFailedError") for a non-zero exit status.

        ****timeout****float or None, default=None
        :   Seconds a subprocess command may run; None for no limit.

        ****isolate****bool, default=False
        :   Run native commands in a subprocess too.

        ****stream****bool, default=True
        :   Show subprocess output as it is produced.

    Parameters:
    :   * ****raise\_on\_error**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****timeout**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****isolate**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****stream**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    isolate: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot._ipymagic.MagicSettings.isolate "Link to this definition")

    raise\_on\_error: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot._ipymagic.MagicSettings.raise_on_error "Link to this definition")

    stream: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot._ipymagic.MagicSettings.stream "Link to this definition")

    timeout: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot._ipymagic.MagicSettings.timeout "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/_ipymagic/_settings.py#L160)[#](#scikitplot._ipymagic.MagicSettings.to_dict "Link to this definition")
    :   Return the settings as plain data.

        Returns:
        :   dict
            :   Every setting.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    updated(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/_ipymagic/_settings.py#L117)[#](#scikitplot._ipymagic.MagicSettings.updated "Link to this definition")
    :   Return the settings with `key=value` assignments applied.

        Parameters:
        :   ****text****str
            :   Space-separated `key=value` pairs.

        Returns:
        :   MagicSettings
            :   New settings (`self` is unchanged).

        Raises:
        :   MagicUsageError
            :   For an unknown name, a malformed pair or a bad value (no change
                is applied).

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**MagicSettings**](#scikitplot._ipymagic.MagicSettings "scikitplot._ipymagic._settings.MagicSettings")

        Examples

        Try it in your browser!
        ```
        >>> from scikitplot._ipymagic import MagicSettings
        >>> MagicSettings().updated("raise_on_error=true timeout=60").timeout
        60.0

        ```
        Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_thumb.png)

[Run scikit-plots Commands from a Notebook](../../auto_examples/ipymagic/plot_ipymagic_scikit-plots.html)

Run scikit-plots Commands from a Notebook![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_cleanprompt_thumb.png)

[Clean a Prompt in a Notebook Cell with %%scikitplot](../../auto_examples/ipymagic/plot_ipymagic_scikit-plots_cleanprompt.html)

Clean a Prompt in a Notebook Cell with %%scikitplot![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_mcp_thumb.png)

[Inspect and Self-test the MCP Server from a Notebook](../../auto_examples/ipymagic/plot_ipymagic_scikit-plots_mcp.html)

Inspect and Self-test the MCP Server from a Notebook