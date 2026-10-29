> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-env-plot-env-plan-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Plan an Environment Before Building It[#](#plan-an-environment-before-building-it "Link to this heading")

The first habit with `scikitplot env` is to **look before you build**.
`plan` reads the request and the dependency files, picks a backend by
fixed rules, and returns every command it would run, which ones use the
network and which need an approval. It changes nothing.

1. plan a `venv` environment and read it;
2. let the builder choose the backend, and see why;
3. the plan as JSON, and its digest;
4. a plan that is not run here: the browser (Pyodide) target.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## A home for this example[#](#a-home-for-this-example "Link to this heading")

Named environments live under `SKPLT_ENV_HOME`. Pointing it at a
temporary folder keeps the example from touching `~/.scikitplot`.

```
import json
import os
import shutil
import tempfile
from pathlib import Path

from scikitplot import _env

work = Path(tempfile.mkdtemp(prefix="skplt-env-plan-"))
# Read when a function runs, not at import; restored at the end.
previous_home = os.environ.get("SKPLT_ENV_HOME")
os.environ["SKPLT_ENV_HOME"] = str(work / "home")


def show(text):
    """Print ``text`` with this example's temporary folder shortened."""
    print(str(text).replace(str(work), "<tmp>"))

```

## Plan a venv environment[#](#plan-a-venv-environment "Link to this heading")

```
$ scikitplot env plan -p <tmp>/demo --backend venv --verify-import json

```

A plan is numbered steps, each with its exact command line. `[network]`
and `needs approval` would be shown on a step that has them; this one has
neither: `venv` and the standard library need nothing from outside.

```
plan = _env.plan(prefix=str(work / "demo"), backend="venv", verify_imports=["json"])
show(plan.render())

```
```
plan 90f52e12da72  ensure <tmp>/demo
  target   host
  backend  venv - named in the request
  1. create a venv with Python 3.12.16
     $ /home/circleci/.pyenv/versions/3.12.16/bin/python3.12 -m venv <tmp>/demo
  2. import json
     $ <tmp>/demo/bin/python -I -c 'import importlib, sys; [importlib.import_module(m) for m in sys.argv[1:]]' json

```

The plan is also an object to check before anything runs, which is what a
test or an agent does:

```
print("steps:", [step.id for step in plan.steps])
print("uses network:", plan.uses_network, "| approvals:", plan.approvals)
print("exists:", plan.exists, "| up to date:", plan.up_to_date)
assert not plan.uses_network and plan.approvals == ()

```
```
steps: ['create', 'verify']
uses network: False | approvals: ()
exists: False | up to date: False

```

## Let the builder choose[#](#let-the-builder-choose "Link to this heading")

With `backend="auto"` (the default) the choice follows fixed rules, in
order ([Environment builder](../../user_guide/_env/index.html#env-index), “How it works”): a cross-build target allows only
micromamba and mamba; Conda packages take the first of
micromamba, mamba, conda on the host; a locked `Pipfile` takes pipenv;
otherwise uv when found, else `venv` for the running Python. The plan
names the rule that decided (`backend_reason`), so the same machine and
request always give the same answer. The output below is this build
machine’s.

```
auto = _env.plan(name="analysis", packages=["pandas>=2"])
print("backend:", auto.backend, "-", auto.backend_reason)
show(f"prefix:  {auto.prefix}")
print("uses network:", auto.uses_network)

```
```
backend: uv - PyPI only; uv found at /home/circleci/.local/bin/uv
prefix:  <tmp>/home/envs/analysis
uses network: True

```

## The plan as JSON, and its digest[#](#the-plan-as-json-and-its-digest "Link to this heading")

```
$ scikitplot env plan -n analysis --package "pandas>=2" --format json

```

`to_dict()` is the same document `--format json` prints (schema
`scikitplot.env.plan/v1`). The digest identifies the plan: the same
request on the same machine gives the same digest, so a reviewed plan can
be compared with the one that is about to run.

```
document = auto.to_dict()
print(document["schema"], "|", sorted(document)[:6], "...")
print(
    "first step:", json.dumps({k: document["steps"][0][k] for k in ("id", "network")})
)
again = _env.plan(name="analysis", packages=["pandas>=2"])
print("same request, same digest:", again.digest == auto.digest)

```
```
scikitplot.env.plan/v1 | ['approvals', 'artifacts', 'backend', 'backend_reason', 'backend_requested', 'dependencies'] ...
first step: {"id": "create", "network": true}
same request, same digest: True

```

## A plan that is not run here[#](#a-plan-that-is-not-run-here "Link to this heading")

```
$ scikitplot env plan -n lite --target pyodide --package six

```

Some targets are not built by running commands on this machine. For the
browser (Pyodide: JupyterLite, PyScript) the plan carries an **artifact**
instead, the code to run there:

```
lite = _env.plan(name="lite", target="pyodide", packages=["six"])
print(
    "target:",
    lite.target,
    "| backend:",
    lite.backend,
    "| executable here:",
    lite.executable,
)
artifacts = dict(lite.artifacts)  # (file name, content) pairs
print(artifacts["micropip.py"])

```
```
target: pyodide | backend: micropip | executable here: False
# Run inside Pyodide (JupyterLite, PyScript, a Pyodide console).
import micropip
await micropip.install(['six'])

```

A plan never writes: the example’s folder holds no environment.

```
print("anything built?", any(work.rglob("pyvenv.cfg")))
shutil.rmtree(work)
if previous_home is None:
    os.environ.pop("SKPLT_ENV_HOME", None)
else:
    os.environ["SKPLT_ENV_HOME"] = previous_home

```
```
anything built? False

```

Tags: [model-workflow: env](../../_tags/model-workflow-env.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html)

****Total running time of the script:**** (0 minutes 0.013 seconds)

[![Launch binder](../../_images/binder_badge_logo24.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/env/plot_env_plan_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo24.svg)](../../lite/lab/index.html?path=auto_examples/env/plot_env_plan_script.ipynb)

[`Download Jupyter notebook: plot_env_plan_script.ipynb`](../../_downloads/61bad83f88c30e3eb4ae2286aa2d1648/plot_env_plan_script.ipynb)

[`Download Python source code: plot_env_plan_script.py`](../../_downloads/1e594cbd1f8f0f01b927a8de49ed07fb/plot_env_plan_script.py)

[`Download zipped: plot_env_plan_script.zip`](../../_downloads/418f73dfa99541fc453368e0cf14b424/plot_env_plan_script.zip)

Related examples

![](../../_images/sphx_glr_plot_env_config_policy_script_thumb.png)

[One Configuration File for Laptops, CI and Agents](plot_env_config_policy_script.html)

One Configuration File for Laptops, CI and Agents![](../../_images/sphx_glr_plot_env_create_run_remove_script_thumb.png)

[Build, Use and Remove an Environment, Idempotently](plot_env_create_run_remove_script.html)

Build, Use and Remove an Environment, Idempotently![](../../_images/sphx_glr_plot_cleanprompt_recipes_script_thumb.png)

[Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents](../cleanprompt/plot_cleanprompt_recipes_script.html)

Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents![](../../_images/sphx_glr_plot_levenshtein_backends_script_thumb.png)

[Backend discovery and safe fallback](../levenshtein/plot_levenshtein_backends_script.html)

Backend discovery and safe fallback

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)