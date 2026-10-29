# Env[#](#env "Link to this heading")

Examples for `_env`, the environment builder behind
`scikitplot env`: describe a Python environment once, then build the same
environment on any machine with whichever tool it has (uv, `venv` + pip,
pipenv, micromamba, mamba or conda).

```
request      arguments, a scikitplot-env.toml, or both (arguments win)
    ↓
plan         reads only: every command, its network use, its approvals
    ↓
approvals    asked (or refused) before the first step runs
    ↓
execute      the plan's steps, under a lock on the environment
    ↓
receipt      what was built; the next run with the same request is a no-op

```

Every example runs from the command line and from Python with the same
fields; the command line form is shown next to each Python call:

```
scikitplot env plan -n analysis --package "pandas>=2" --verify-import pandas
scikitplot env create -n analysis --package "pandas>=2" --verify-import pandas

```

The examples need no network: they plan with any backend, and build only
`venv` environments from the standard library. Named environments go to
`SKPLT_ENV_HOME` (default `~/.scikitplot/env`); the examples point it at a
temporary folder and remove what they build.

Start with the plan, then build, run and remove, then configuration files,
policies and the errors an automation reads. See also [Environment builder](../../user_guide/_env/index.html#env-index).

![](../../_images/sphx_glr_plot_env_config_policy_script_thumb.png)

[One Configuration File for Laptops, CI and Agents](plot_env_config_policy_script.html)

One Configuration File for Laptops, CI and Agents![](../../_images/sphx_glr_plot_env_create_run_remove_script_thumb.png)

[Build, Use and Remove an Environment, Idempotently](plot_env_create_run_remove_script.html)

Build, Use and Remove an Environment, Idempotently![](../../_images/sphx_glr_plot_env_plan_script_thumb.png)

[Plan an Environment Before Building It](plot_env_plan_script.html)

Plan an Environment Before Building It