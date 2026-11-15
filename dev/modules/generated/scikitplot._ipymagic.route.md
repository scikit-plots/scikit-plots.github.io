# route[#](#route "Link to this heading")

scikitplot.\_ipymagic.route(**argv**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/_ipymagic/_bridge.py#L144)[#](#scikitplot._ipymagic.route "Link to this definition")
:   Return the command `argv` names, as the CLI would find it.

    Parameters:
    :   ****argv****sequence of str
        :   Arguments after `scikitplot`.

    Returns:
    :   Route
        :   The command and how it runs.

    Raises:
    :   MagicUsageError
        :   When the first word that is not an option is not a command or an
            alias (and no delegated command follows); the closest names are in
            the hint.

    Parameters:
    :   ****argv**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Return type:
    :   [**Route**](scikitplot._ipymagic.Route.html#scikitplot._ipymagic.Route "scikitplot._ipymagic._bridge.Route")

    Notes

    The delegated decision is the CLI’s own (`_split_delegated`): the first
    word anywhere in `argv` that names a command decides, so `-vq env`,
    `--verb env` and `-v env` all delegate, exactly as on the command line.
    The root parser takes no option with a value, so the first word that is
    not an option is the one argparse and click read as the command.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot._ipymagic import route
    >>> route(["-v", "env", "plan"])
    Route(command='env', delegated=True)

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