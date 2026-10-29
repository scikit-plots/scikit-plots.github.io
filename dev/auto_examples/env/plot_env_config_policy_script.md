> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-env-plot-env-config-policy-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# One Configuration File for Laptops, CI and Agents[#](#one-configuration-file-for-laptops-ci-and-agents "Link to this heading")

A committed `scikitplot-env.toml` describes the environment once; every
machine runs the same command. This example covers what an automation (a CI
job, a container build, an AI agent) relies on:

1. a configuration file with a dependency file and a preset;
2. where each value came from (`origins`);
3. offline: a plan that cannot reach the network;
4. what a file can **not** do: grant an approval;
5. Conda packages, a bootstrap and its approval;
6. a batch of requests, dry-run;
7. stable error codes.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## A project with a configuration file[#](#a-project-with-a-configuration-file "Link to this heading")

```
import json
import os
import shutil
import tempfile
from pathlib import Path

from scikitplot import _env

work = Path(tempfile.mkdtemp(prefix="skplt-env-config-"))
# Read when a function runs, not at import; restored at the end.
previous_home = os.environ.get("SKPLT_ENV_HOME")
os.environ["SKPLT_ENV_HOME"] = str(work / "home")


def show(text):
    """Print ``text`` with this example's temporary folder shortened."""
    print(str(text).replace(str(work), "<tmp>"))


(work / "requirements.txt").write_text("six>=1.16\n", encoding="utf-8")
config = work / "scikitplot-env.toml"
config.write_text(
    """\
schema = "scikitplot.env/v1"
prefix = ".venv"                 # relative to this file
backend = "venv"
sources = ["requirements.txt"]
profile = "ci"                   # preset: never ask a question

[policy]
network = "offline"              # pip gets --no-index

[verify]
imports = ["six"]
""",
    encoding="utf-8",
)

```
```
291

```

## Validate: the request, and where every value came from[#](#validate-the-request-and-where-every-value-came-from "Link to this heading")

```
$ scikitplot env validate --format json

```

Unknown keys are refused, so a typo is an error, not an ignored setting.
`origins` says, per field, whether it came from the file, a preset, an
argument or a default: the answer to “why is this set?”.

```
request = _env.validate(config)
print("policy:", request.to_dict()["policy"])
for field, origin in request.origins:
    show(f"  {field:<20} {origin}")

```
```
policy: {'interaction': 'never', 'network': 'offline', 'bootstrap': 'never', 'conversion': 'exact'}
  backend              config:<tmp>/scikitplot-env.toml
  policy.interaction   preset:ci
  policy.network       config:<tmp>/scikitplot-env.toml
  prefix               config:<tmp>/scikitplot-env.toml
  profile              config:<tmp>/scikitplot-env.toml
  sources              config:<tmp>/scikitplot-env.toml
  target               default
  verify_imports       config:<tmp>/scikitplot-env.toml

```

## Offline[#](#offline "Link to this heading")

With `network = "offline"` every step is planned without the network:
pip gets `--no-index` (give `find_links` for a wheel folder), uv and
micromamba `--offline`. A step that would need to download is refused at
planning time, not half-way through a build.

```
plan = _env.plan(config=config)
show(plan.render())
print("uses network:", plan.uses_network)
assert not plan.uses_network

```
```
plan 94d4e2e791e3  ensure <tmp>/.venv
  target   host
  backend  venv - named in the request
  1. create a venv with Python 3.12.16
     $ /home/circleci/.pyenv/versions/3.12.16/bin/python3.12 -m venv <tmp>/.venv
  2. install PyPI packages with pip
     $ <tmp>/.venv/bin/python -m pip install --disable-pip-version-check --no-input --no-index -r <tmp>/requirements.txt
  3. import six
     $ <tmp>/.venv/bin/python -I -c 'import importlib, sys; [importlib.import_module(m) for m in sys.argv[1:]]' six
uses network: False

```

## A file cannot grant an approval[#](#a-file-cannot-grant-an-approval "Link to this heading")

A configuration expresses intent. Approvals (bootstrap a tool, edit a
shell profile, delete an environment) come only from the person or program
running the command: `--yes`, `--approve KIND`, `approve=` in Python.

```
sneaky = work / "sneaky.toml"
sneaky.write_text('name = "x"\n[policy]\napprove = ["bootstrap"]\n', encoding="utf-8")
try:
    _env.load_request(sneaky)
except _env.ConfigError as exc:
    print(f"{exc.code}: {exc}")
    print("  hint:", exc.hint)

```
```
config_authority: config.policy sets ['approve']: a configuration expresses intent and cannot grant approvals
  hint: approve on the command line (--yes / --approve KIND) or with approve= in Python

```

## Conda packages, a bootstrap, an approval[#](#conda-packages-a-bootstrap-an-approval "Link to this heading")

```
$ scikitplot env plan -n geo --conda-package gdal --bootstrap if-missing

```

Conda packages need micromamba, mamba or conda. When none is installed the
builder can install micromamba itself (pinned, SHA-256 checked), only if
the policy allows it **and** it is approved. The plan shows that step and its
approval before anything runs. What the plan says depends on this machine.

```
geo = _env.plan(
    prefix=str(work / "geo"),
    conda_packages=["gdal"],
    policy={"bootstrap": "if-missing"},
)
print("backend:", geo.backend, "-", geo.backend_reason)
print("approvals needed:", geo.approvals)

```
```
backend: micromamba - the request has Conda packages; micromamba found at /home/circleci/.local/bin/micromamba
approvals needed: ()

```

Without the approval, `create` stops before its first step: nothing is
downloaded. (On a machine that already has micromamba there is nothing to
approve, and this example does not build the environment.)

```
if geo.approvals:
    try:
        _env.create(
            prefix=str(work / "geo"),
            conda_packages=["gdal"],
            policy={"bootstrap": "if-missing"},
            interaction="never",
        )
    except _env.ApprovalRequiredError as exc:
        print(f"{exc.code}: refused before running anything")
        print("  hint:", exc.hint)
else:
    print("a Conda tool is installed here: no bootstrap, no approval needed")

```
```
a Conda tool is installed here: no bootstrap, no approval needed

```

## A batch of requests, dry-run[#](#a-batch-of-requests-dry-run "Link to this heading")

```
$ scikitplot env --format json batch requests.jsonl --dry-run --keep-going

```

One JSON Lines file, one request per line, each with an `id`. The whole
file is validated first: one malformed line refuses the file, with its
line number, before any request runs.

```
requests = work / "requests.jsonl"
schema = "scikitplot.env.request/v1"
requests.write_text(
    json.dumps({"schema": schema, "id": "typo", "request": {"name": "bad name!"}})
    + "\n",
    encoding="utf-8",
)
try:
    _env.batch(requests, dry_run=True)
except _env.ConfigError as exc:
    show(f"{exc.code}: {exc}")

```
```
config_invalid: <tmp>/requests.jsonl:1: name='bad name!' must be 1-100 letters, digits, '.', '_' or '-' and start with a letter or digit

```

A valid file runs every request; a dry run returns the plans, and
`keep_going` reports a request that cannot be planned (Conda packages for
the PyPI-only `venv`) instead of stopping there.

```
lines = [
    {
        "schema": schema,
        "id": "docs",
        "request": {"prefix": str(work / "docs"), "backend": "venv"},
    },
    {
        "schema": schema,
        "id": "lite",
        "request": {"name": "lite", "target": "pyodide", "packages": ["six"]},
    },
    {
        "schema": schema,
        "id": "mixed",
        "request": {
            "prefix": str(work / "mixed"),
            "backend": "venv",
            "conda_packages": ["gdal"],
        },
    },
]
requests.write_text(
    "".join(json.dumps(line) + "\n" for line in lines), encoding="utf-8"
)
for item in _env.batch(requests, dry_run=True, keep_going=True):
    if item["ok"]:
        print(f"{item['id']:<6} ok     backend={item['plan']['backend']}")
    else:
        print(f"{item['id']:<6} error  {item['error']['code']}")

```
```
docs   ok     backend=venv
lite   ok     backend=micropip
mixed  error  conversion_refused

```

## Stable error codes[#](#stable-error-codes "Link to this heading")

Every error has a `code` and a `hint`; with `--format json` the
command prints `{"ok": false, "error": {...}}` and exits with a fixed
status, so a script branches on the code, never on the message.

```
try:
    _env.validate(name="bad name!")
except _env.EnvError as exc:
    print(json.dumps({"code": exc.code, "error": type(exc).__name__}))

shutil.rmtree(work)
if previous_home is None:
    os.environ.pop("SKPLT_ENV_HOME", None)
else:
    os.environ["SKPLT_ENV_HOME"] = previous_home

```
```
{"code": "config_invalid", "error": "ConfigError"}

```

Tags: [model-workflow: env](../../_tags/model-workflow-env.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html)

****Total running time of the script:**** (0 minutes 0.046 seconds)

[![Launch binder](../../_images/binder_badge_logo24.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/env/plot_env_config_policy_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo24.svg)](../../lite/lab/index.html?path=auto_examples/env/plot_env_config_policy_script.ipynb)

[`Download Jupyter notebook: plot_env_config_policy_script.ipynb`](../../_downloads/782599685fbc82106bcfa3406fe4b200/plot_env_config_policy_script.ipynb)

[`Download Python source code: plot_env_config_policy_script.py`](../../_downloads/a8e9ba454c42d9b8ced1253da5f8cf7e/plot_env_config_policy_script.py)

[`Download zipped: plot_env_config_policy_script.zip`](../../_downloads/6674415e00cd532079af764baf4f1c64/plot_env_config_policy_script.zip)

Related examples

![](../../_images/sphx_glr_plot_env_plan_script_thumb.png)

[Plan an Environment Before Building It](plot_env_plan_script.html)

Plan an Environment Before Building It![](../../_images/sphx_glr_plot_env_create_run_remove_script_thumb.png)

[Build, Use and Remove an Environment, Idempotently](plot_env_create_run_remove_script.html)

Build, Use and Remove an Environment, Idempotently![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_thumb.png)

[Run scikit-plots Commands from a Notebook](../ipymagic/plot_ipymagic_scikit-plots.html)

Run scikit-plots Commands from a Notebook![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_profiler_thumb.png)

[Profile a Notebook Cell with %%scikitplot\_profile](../ipymagic/plot_ipymagic_scikit-plots_profiler.html)

Profile a Notebook Cell with %%scikitplot\_profile

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)