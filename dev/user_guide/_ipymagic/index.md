# Notebook magics[#](#notebook-magics "Link to this heading")

The `scikitplot` command line and a profiler, in any IPython notebook or
console (Jupyter, JupyterLab, VS Code, Colab, terminal IPython):

```
%load_ext scikitplot

```

| Magic | Does |
| --- | --- |
| `%scikitplot ARGS` | runs `scikitplot ARGS`, returns a result |
| `%%scikitplot ARGS` + cell | the same, the cell on standard input |
| `%scikitplot_profile STATEMENT` | profiles a statement, shows a table |
| `%%scikitplot_profile` + cell | profiles a cell |
| `%scikitplot_config key=value` | settings of the session |

`pip install scikit-plots[ipymagic]` installs IPython and snakeviz (the
interactive profile viewer); the rest needs nothing.

Runnable examples, each step from the command line and from Python:
[IPyMagic](../../auto_examples/ipymagic/index.html#ipymagic-examples).

* [Commands in a notebook](commands.html)
  * [Cell input](commands.html#cell-input)
  * [Where a command runs](commands.html#where-a-command-runs)
  * [Mistakes and errors](commands.html#mistakes-and-errors)
* [Profiling](profiling.html)
  * [snakeviz](profiling.html#snakeviz)
* [CI, scripts and agents](automation.html)
  * [Notebooks run in CI](automation.html#notebooks-run-in-ci)
  * [Without IPython](automation.html#without-ipython)