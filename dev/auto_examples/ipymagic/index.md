# IPyMagic[#](#ipymagic "Link to this heading")

Examples for [`_ipymagic`](../../apis/scikitplot._ipymagic.html#module-scikitplot._ipymagic "scikitplot._ipymagic"), the notebook frontend of
scikit-plots: every `scikitplot` command and a profiler as IPython magics,
in Jupyter, JupyterLab, VS Code, Colab or terminal IPython.

```
%load_ext scikitplot

```

| Magic | Does |
| --- | --- |
| `%scikitplot ARGS` | runs `scikitplot ARGS`; returns a `CommandResult` |
| `%%scikitplot ARGS` + cell | the same, with the cell on standard input |
| `%scikitplot_profile STMT` / `%%scikitplot_profile` + cell | profiles the code; returns a `ProfileResult` |
| `%scikitplot_config key=value ...` | session settings (`MagicSettings`) |

****How to read these examples.**** A gallery page runs as a plain Python script,
where magics do not exist. Each step therefore shows the magic in an
`ipython` block, then runs the very same thing with the Python function the
magic calls (`run_command`, `profile_code`). In the Jupyter
notebook download, every cell magic (`%%scikitplot`,
`%%scikitplot_profile`) becomes a runnable cell next to its Python
equivalent, and the first cell loads the extension; line magics stay as text
to copy into a cell.

```
%scikitplot LINE [cell]
    ↓
split_line       shell-like words ("my env" stays one word)
    ↓
route            the CLI's own command registry; a typo is refused
    ↓
in the kernel    info, doctor, show-versions ...  (logging restored)
or a subprocess  env, mcp, cleanprompt, a cell, isolate=true
                 (streamed, timeout, interrupt, bounded capture)
    ↓
CommandResult    exit_code, stdout, stderr, data (--format json)

```

Start with the commands, then the cell form (`cleanprompt`), the delegated
servers (`mcp`) and the profiler. See also [Notebook magics](../../user_guide/_ipymagic/index.html#ipymagic-index).

![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_thumb.png)

[Run scikit-plots Commands from a Notebook](plot_ipymagic_scikit-plots.html)

Run scikit-plots Commands from a Notebook![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_cleanprompt_thumb.png)

[Clean a Prompt in a Notebook Cell with %%scikitplot](plot_ipymagic_scikit-plots_cleanprompt.html)

Clean a Prompt in a Notebook Cell with %%scikitplot![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_mcp_thumb.png)

[Inspect and Self-test the MCP Server from a Notebook](plot_ipymagic_scikit-plots_mcp.html)

Inspect and Self-test the MCP Server from a Notebook![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_profiler_thumb.png)

[Profile a Notebook Cell with %%scikitplot\_profile](plot_ipymagic_scikit-plots_profiler.html)

Profile a Notebook Cell with %%scikitplot\_profile