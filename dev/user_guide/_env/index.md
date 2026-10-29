# Environment builder[#](#environment-builder "Link to this heading")

Describe a Python environment once and build the same environment on any
machine, with whichever tool the machine has: uv, `venv` + pip, pipenv,
micromamba, mamba or conda. The same request works from the command line
(`scikitplot env`), from Python (`scikitplot._env`), in CI and from an
AI agent:

```
request  ->  plan (reads, changes nothing)  ->  approvals  ->  execute  ->  receipt

```

Runnable examples, each step from the command line and from Python:
[Env](../../auto_examples/env/index.html#env-examples).

* [Getting started](getting_started.html)
  * [See the plan, then build](getting_started.html#see-the-plan-then-build)
  * [From Python](getting_started.html#from-python)
  * [Conda packages and bootstrapping micromamba](getting_started.html#conda-packages-and-bootstrapping-micromamba)
* [Requests and configuration](configuration.html)
  * [Dependency sources](configuration.html#dependency-sources)
  * [Presets](configuration.html#presets)
  * [Policies and approvals](configuration.html#policies-and-approvals)
  * [Credentials](configuration.html#credentials)
* [Targets: host, other platforms, browser, mobile](targets.html)
  * [Cross-building](targets.html#cross-building)
  * [Browser](targets.html#browser)
  * [Phones and tablets](targets.html#phones-and-tablets)
* [CI, containers and agents](automation.html)
  * [One file, every machine](automation.html#one-file-every-machine)
  * [Offline and air-gapped machines](automation.html#offline-and-air-gapped-machines)
  * [Machine-readable output](automation.html#machine-readable-output)
  * [Agents](automation.html#agents)
* [How it works](how_it_works.html)
  * [The flow](how_it_works.html#the-flow)
  * [Choosing the backend](how_it_works.html#choosing-the-backend)
  * [An existing environment](how_it_works.html#an-existing-environment)
  * [Safety](how_it_works.html#safety)