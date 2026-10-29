> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-env-plot-env-create-run-remove-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Build, Use and Remove an Environment, Idempotently[#](#build-use-and-remove-an-environment-idempotently "Link to this heading")

`create` runs exactly the plan you would have seen with `plan`, then
writes a **receipt** into the environment. Run it again with the same request
and nothing happens. This example builds a real `venv` environment from
the standard library (no network), and shows the whole life cycle:

1. create, with an events log;
2. create again: up to date, nothing to do;
3. run a command inside it;
4. remove it: an approval, given explicitly.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## A temporary home[#](#a-temporary-home "Link to this heading")

```
import json
import os
import shutil
import tempfile
from pathlib import Path

from scikitplot import _env

work = Path(tempfile.mkdtemp(prefix="skplt-env-build-"))
# Read when a function runs, not at import; restored at the end.
previous_home = os.environ.get("SKPLT_ENV_HOME")
os.environ["SKPLT_ENV_HOME"] = str(work / "home")


prefix = work / "demo"
events = work / "events.jsonl"


def show(text):
    """Print ``text`` with this example's temporary folder shortened."""
    print(str(text).replace(str(work), "<tmp>"))

```

## Create[#](#create "Link to this heading")

```
$ scikitplot env create -p <tmp>/demo --backend venv --verify-import json \
      --events <tmp>/events.jsonl

```

`verify_imports` is the last step: the environment is checked by
importing modules with its own interpreter, so “created” means “works”.

```
result = _env.create(
    prefix=str(prefix), backend="venv", verify_imports=["json"], events=str(events)
)
print("ok:", result.ok, "| changed:", result.changed)
print("steps run:", [(step.id, step.ok, step.returncode) for step in result.steps])
show(f"receipt: {result.receipt}")

```
```
ok: True | changed: True
steps run: [('create', True, 0), ('verify', True, 0)]
receipt: <tmp>/demo/.scikitplot-env.json

```

The events file is JSON Lines, one record per stage, for a CI log or an
agent that follows the run:

```
for line in events.read_text(encoding="utf-8").splitlines():
    record = json.loads(line)
    print(record["event"], record.get("step", ""))

```
```
plan.started
step.started create
step.finished create
step.started verify
step.finished verify
plan.finished

```

## Create again: nothing to do[#](#create-again-nothing-to-do "Link to this heading")

The receipt records what the environment contains (packages, sources and
their hashes, Python, backend). The same request finds it up to date and
runs no step:

```
again = _env.create(prefix=str(prefix), backend="venv", verify_imports=["json"])
print("changed the second time:", again.changed)
assert not again.changed

```
```
changed the second time: False

```

`plan` says the same before anything runs:

```
print(
    "up to date:",
    _env.plan(prefix=str(prefix), backend="venv", verify_imports=["json"]).up_to_date,
)

```
```
up to date: True

```

## Run a command inside it[#](#run-a-command-inside-it "Link to this heading")

```
$ scikitplot env run -p <tmp>/demo -- python -c "import sys; print(sys.prefix)"

```

`run` uses the environment’s interpreter and returns the exit status.
The command’s own output goes to the terminal; here it writes a file, so
the example can show what it saw.

```
seen = work / "seen.txt"
status = _env.run(
    [
        "python",
        "-c",
        f"import sys, pathlib; pathlib.Path({str(seen)!r}).write_text(sys.prefix)",
    ],
    prefix=str(prefix),
)
print("exit status:", status)
show(f"sys.prefix inside: {seen.read_text(encoding='utf-8')}")

```
```
exit status: 0
sys.prefix inside: <tmp>/demo

```

## Remove it: an explicit approval[#](#remove-it-an-explicit-approval "Link to this heading")

Deleting a directory is never implied. Without approval `remove` refuses
before touching anything, and says how to approve:

```
try:
    _env.remove(prefix=str(prefix), interaction="never")
except _env.ApprovalRequiredError as exc:
    show(f"{type(exc).__name__} [{exc.code}]: {exc}")
    print("  hint:", exc.hint)
print("still there:", prefix.exists())

```
```
ApprovalRequiredError [approval_required]: remove: delete <tmp>/demo: not approved
  hint: pass --yes (or --approve remove)
still there: True

```
```
$ scikitplot env remove -p <tmp>/demo --approve remove

```
```
removed = _env.remove(prefix=str(prefix), approve="remove")
print("removed:", removed.changed, "| still there:", prefix.exists())

shutil.rmtree(work)
if previous_home is None:
    os.environ.pop("SKPLT_ENV_HOME", None)
else:
    os.environ["SKPLT_ENV_HOME"] = previous_home

```
```
removed: True | still there: False

```

Tags: [model-workflow: env](../../_tags/model-workflow-env.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html)

****Total running time of the script:**** (0 minutes 3.022 seconds)

[![Launch binder](../../_images/binder_badge_logo24.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/env/plot_env_create_run_remove_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo24.svg)](../../lite/lab/index.html?path=auto_examples/env/plot_env_create_run_remove_script.ipynb)

[`Download Jupyter notebook: plot_env_create_run_remove_script.ipynb`](../../_downloads/d926450f26f570b5a422afdd75a08605/plot_env_create_run_remove_script.ipynb)

[`Download Python source code: plot_env_create_run_remove_script.py`](../../_downloads/4f92c44b004e5da997e70c658f061807/plot_env_create_run_remove_script.py)

[`Download zipped: plot_env_create_run_remove_script.zip`](../../_downloads/24ca640323cf5efc920f4ffd6e996617/plot_env_create_run_remove_script.zip)

Related examples

![](../../_images/sphx_glr_plot_env_plan_script_thumb.png)

[Plan an Environment Before Building It](plot_env_plan_script.html)

Plan an Environment Before Building It![](../../_images/sphx_glr_plot_env_config_policy_script_thumb.png)

[One Configuration File for Laptops, CI and Agents](plot_env_config_policy_script.html)

One Configuration File for Laptops, CI and Agents![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_thumb.png)

[Run scikit-plots Commands from a Notebook](../ipymagic/plot_ipymagic_scikit-plots.html)

Run scikit-plots Commands from a Notebook![](../../_images/sphx_glr_plot_cleanprompt_basics_script_thumb.png)

[Cleanprompt Basics: Hide a Value, Then Get It Back](../cleanprompt/plot_cleanprompt_basics_script.html)

Cleanprompt Basics: Hide a Value, Then Get It Back

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)