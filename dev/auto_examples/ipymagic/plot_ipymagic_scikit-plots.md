> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-ipymagic-plot-ipymagic-scikit-plots-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Run scikit-plots Commands from a Notebook[#](#run-scikit-plots-commands-from-a-notebook "Link to this heading")

`%scikitplot` runs any `scikitplot` command inside a notebook and returns
a `CommandResult` you can keep, test and pass on. This example walks
through the everyday cases and the ones that go wrong, in the order a new
user meets them:

1. load the extension;
2. run a command and keep its result;
3. ask for JSON and use it as data;
4. what happens with a typo, a bad option and a failure;
5. session settings (`%scikitplot_config`);
6. tab completion.

Every magic is shown in an `ipython` block, then run with the function it
calls, so this page also runs as a plain script.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## Load the extension[#](#load-the-extension "Link to this heading")

In a notebook, once per session (`%reload_ext` after an upgrade):

```
%load_ext scikitplot

```

The functions behind the magics need no IPython at all:

```
import io
import json

from scikitplot._ipymagic import (
    CommandFailedError,
    MagicSettings,
    MagicUsageError,
    complete,
    route,
    run_command,
)

# In a notebook (this page's download), load the magics so the ``%%`` cells
# below run; a plain script has no IPython and skips this.
_shell = globals().get("get_ipython", lambda: None)()
if _shell is not None:
    _shell.run_line_magic("load_ext", "scikitplot")

```

## Run a command and keep the result[#](#run-a-command-and-keep-the-result "Link to this heading")

```
%scikitplot info

```

The command’s output is shown as in a terminal; the magic returns a
`CommandResult`. `info`, `doctor`, `show-versions` run in the
kernel itself (fast), and the kernel’s logging is left as it was.

```
result = run_command("info")
print(result.summary())
print("exit code:", result.exit_code, "| ok:", result.ok, "| ran:", result.mode)

```
```
scikitplot.version: 0.5.dev0+git.20261029.1037dde
python.version: 3.12.16
python.implementation: CPython
python.executable: /home/circleci/.pyenv/versions/3.12.16/bin/python3.12
platform.system: Linux
platform.release: 7.0.0-1014-aws
platform.machine: x86_64
scikitplot info: exit 0 in 0.01 s (in-process)
exit code: 0 | ok: True | ran: in-process

```

## Ask for JSON, get data[#](#ask-for-json-get-data "Link to this heading")

```
r = %scikitplot info --format json
r.data["python"]["version"]

```

With `--format json` the output is parsed into `result.data` and not
printed again, so a notebook can compute with it.

```
quiet = io.StringIO()  # not shown here; the data is what we want
result = run_command("info --format json", out=quiet)
print(sorted(result.data))
print("Python", result.data["python"]["version"])

```
```
['platform', 'python', 'scikitplot']
Python 3.12.16

```

`to_dict()` gives the whole run as plain, JSON-serialisable data, which is
what an agent or a CI log keeps:

```
record = result.to_dict()
print(json.dumps({k: record[k] for k in ("argv", "command", "mode", "exit_code")}))

```
```
{"argv": ["info", "--format", "json"], "command": "info", "mode": "in-process", "exit_code": 0}

```

## A typo is refused, never guessed[#](#a-typo-is-refused-never-guessed "Link to this heading")

```
%scikitplot evn plan

```

A word that is not a command is refused before anything runs, with the
closest names. Running “the nearest command” could run the wrong one.

```
try:
    run_command("evn plan")
except MagicUsageError as exc:
    print(f"{type(exc).__name__} [{exc.code}]: {exc}")
    print("  hint:", exc.hint)

```
```
MagicUsageError [usage]: 'evn' is not a scikitplot command
  hint: did you mean 'env'?

```

`route` shows where a command would run, without running it. The
decision comes from the CLI’s own registry, so it cannot drift from it:
delegated commands (`env`, `mcp`, `cleanprompt`) run in a subprocess.

```
for words in (["info"], ["-v", "env", "plan"], ["clean-prompt"], ["--version"]):
    print(f"{' '.join(words):<18} -> {route(words)}")

```
```
info               -> Route(command='info', delegated=False)
-v env plan        -> Route(command='env', delegated=True)
clean-prompt       -> Route(command='cleanprompt', delegated=True)
--version          -> Route(command=None, delegated=False)

```

## A failing command returns, unless you ask it to raise[#](#a-failing-command-returns-unless-you-ask-it-to-raise "Link to this heading")

An unknown option is the CLI’s own usage error (exit status 2). By default
the magic shows the message and returns the result, so one cell does not
stop a notebook:

```
err = io.StringIO()
result = run_command("info --no-such-option", err=err)
print(result.summary())
print(err.getvalue().strip().splitlines()[-1])

```
```
scikitplot info: exit 2 in 0.01 s (in-process)
scikitplot: error: unrecognized arguments: --no-such-option

```

## Session settings[#](#session-settings "Link to this heading")

```
%scikitplot_config raise_on_error=true timeout=600

```

Settings live in `%scikitplot_config`, never as magic options, so they
cannot collide with a CLI option. All pairs are applied or none: a bad
value changes nothing.

```
settings = MagicSettings().updated("raise_on_error=true timeout=600")
print(settings)
try:
    MagicSettings().updated("timeout=-1 raise_on_error=true")
except MagicUsageError as exc:
    print("refused:", exc)

```
```
MagicSettings(raise_on_error=True, timeout=600.0, isolate=False, stream=True)
refused: timeout='-1' must be a positive number of seconds

```

With `raise_on_error=true` a failure raises `CommandFailedError`,
which stops “Run all”; the result travels with the exception.

```
try:
    run_command("info --no-such-option", settings=settings, err=io.StringIO())
except CommandFailedError as exc:
    print("raised:", exc)
    print("exit code kept on the exception:", exc.result.exit_code)

```
```
raised: scikitplot info: exit 2 in 0.01 s (in-process)
exit code kept on the exception: 2

```

## Tab completion[#](#tab-completion "Link to this heading")

`%scikitplot <TAB>` completes command names, then a native command’s
options and fixed values. `complete` is what the notebook calls:

```
print(complete("%scikitplot sh"))
print(complete("%scikitplot info --"))
print(complete("%scikitplot info --format "))

```
```
['show-config', 'show-versions', 'show_config', 'show_versions']
['--format', '--help', '--quiet', '--verbose']
['json', 'text', 'toml', 'yaml']

```
> **Tip**
> `{var}` and `$var` in a magic line are expanded by IPython before the
command sees them: `name = "analysis"` then
`%scikitplot env plan -n {name}`. Quote values with spaces:
`-n "my env"` stays one word.

Tags: [model-workflow: ipymagic](../../_tags/model-workflow-ipymagic.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html)

****Total running time of the script:**** (0 minutes 0.040 seconds)

[![Launch binder](../../_images/binder_badge_logo25.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/ipymagic/plot_ipymagic_scikit-plots.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo25.svg)](../../lite/lab/index.html?path=auto_examples/ipymagic/plot_ipymagic_scikit-plots.ipynb)

[`Download Jupyter notebook: plot_ipymagic_scikit-plots.ipynb`](../../_downloads/e516b31d589b2e5c50eee6c48210f5b8/plot_ipymagic_scikit-plots.ipynb)

[`Download Python source code: plot_ipymagic_scikit-plots.py`](../../_downloads/1d1eb2b86f9b77c8c1c903ad72d62396/plot_ipymagic_scikit-plots.py)

[`Download zipped: plot_ipymagic_scikit-plots.zip`](../../_downloads/3c35c75600ea4f149697baab2b251696/plot_ipymagic_scikit-plots.zip)

Related examples

![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_cleanprompt_thumb.png)

[Clean a Prompt in a Notebook Cell with %%scikitplot](plot_ipymagic_scikit-plots_cleanprompt.html)

Clean a Prompt in a Notebook Cell with %%scikitplot![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_profiler_thumb.png)

[Profile a Notebook Cell with %%scikitplot\_profile](plot_ipymagic_scikit-plots_profiler.html)

Profile a Notebook Cell with %%scikitplot\_profile![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_mcp_thumb.png)

[Inspect and Self-test the MCP Server from a Notebook](plot_ipymagic_scikit-plots_mcp.html)

Inspect and Self-test the MCP Server from a Notebook![](../../_images/sphx_glr_plot_cleanprompt_recipes_script_thumb.png)

[Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents](../cleanprompt/plot_cleanprompt_recipes_script.html)

Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)