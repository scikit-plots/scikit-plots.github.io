# run\_command[#](#run-command "Link to this heading")

scikitplot.\_ipymagic.run\_command(**args**, **\***, **stdin=None**, **settings=None**, **out=None**, **err=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/_ipymagic/_bridge.py#L605)[#](#scikitplot._ipymagic.run_command "Link to this definition")
:   Run one `scikitplot` command and return its result.

    Parameters:
    :   ****args****str or sequence of str
        :   The command line after `scikitplot` (`"env plan -n demo"`) or its
            arguments.

        ****stdin****str or None, default=None
        :   Text given to the command on standard input (the cell of
            `%%scikitplot`); the command then runs in a subprocess.

        ****settings****MagicSettings or None, default=None
        :   Timeout, isolation, streaming, raising; defaults when None.

        ****out, err****text stream or None, default=None
        :   Where the output is shown; [`sys.stdout`](https://docs.python.org/3/library/sys.html#sys.stdout "(in Python v3.15)") /
            [`sys.stderr`](https://docs.python.org/3/library/sys.html#sys.stderr "(in Python v3.15)") at call time when None.

    Returns:
    :   CommandResult
        :   Exit status, captured output, timing and, for `--format json`, the
            parsed data.

    Raises:
    :   MagicUsageError
        :   For arguments that name no command (nothing is run).

        CommandFailedError
        :   For a non-zero exit status when `settings.raise_on_error`.

        KeyboardInterrupt
        :   After stopping the command, when interrupted.

    Parameters:
    :   * ****args**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****stdin**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****settings**** ([**MagicSettings**](scikitplot._ipymagic.MagicSettings.html#scikitplot._ipymagic.MagicSettings "scikitplot._ipymagic._settings.MagicSettings") **|** **None**)
        * ****out**** ([**IO**](https://docs.python.org/3/library/typing.html#typing.IO "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****err**** ([**IO**](https://docs.python.org/3/library/typing.html#typing.IO "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)

    Return type:
    :   [**CommandResult**](scikitplot._ipymagic.CommandResult.html#scikitplot._ipymagic.CommandResult "scikitplot._ipymagic._results.CommandResult")

    Examples

    Try it in your browser!
    ```
    >>> import io
    >>> from scikitplot._ipymagic import run_command
    >>> result = run_command("info --format json", out=io.StringIO())
    >>> result.ok, sorted(result.data)
    (True, ['platform', 'python', 'scikitplot'])

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