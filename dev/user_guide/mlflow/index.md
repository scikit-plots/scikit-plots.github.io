# MLflow project integration[#](#mlflow-project-integration "Link to this heading")

`scikitplot.mlflow` is an orchestration layer around the external MLflow package. It centralizes project discovery, shared configuration, environment application, local store layout, server lifecycle, sessions, provider seams and workflow helpers.

> **Important**
> Scikit-Plots does not own MLflow internals. A green unit test of command construction is not proof that every installed MLflow version supports the same CLI/server behavior. Check readiness and CLI capabilities in the deployment environment.
Getting started

Create or load project configuration and open a managed session.

[Getting started](getting_started.html#mlflow-getting-started)Project configuration

Discover project roots, markers, TOML/YAML config, local stores, and environment overrides.

[Project configuration](project_configuration.html#mlflow-project-configuration)Sessions and facades

Use MlflowHandle, artifact/model facades, and controlled session lifetime.

[Sessions and facades](sessions_and_facades.html#mlflow-sessions-and-facades)Server and CLI

Build supported MLflow server commands, spawn a process, and check readiness.

[Server and CLI](server_and_cli.html#mlflow-server-and-cli)Providers and workflows

Customize the integration provider and use reproducible convenience workflows.

[Providers and workflows](providers_and_workflows.html#mlflow-providers-and-workflows)Security and readiness

Separate policy intent, CLI compatibility, installed-package readiness, and actual server readiness.

[Security and readiness](security_and_readiness.html#mlflow-security-and-readiness)Python API

Configuration, project, session, provider, workflow, facade, and error surfaces.

[Python API](python_api.html#mlflow-python-api)Troubleshooting

Missing MLflow, incompatible CLI flags, store paths, server startup, and current security-policy caveat.

[Troubleshooting](troubleshooting.html#mlflow-troubleshooting)

## Which page should I use?[#](#which-page-should-i-use "Link to this heading")

Start with ****Getting started****. Then choose the page that owns the decision
you are making: architecture and lifecycle, configuration, persistence,
performance, public API, or limits. The guide intentionally separates those
concerns so examples do not accidentally become policy.

## Examples[#](#examples "Link to this heading")

See [MLflow](../../auto_examples/mlflow/index.html#mlflow-examples) for executable examples that accompany this guide.

## Further reading[#](#further-reading "Link to this heading")