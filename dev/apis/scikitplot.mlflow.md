# scikitplot.mlflow[#](#module-scikitplot.mlflow "Link to this heading")

## scikitplot.mlflow[#](#id1 "Link to this heading")

`MLflow UI | SERVER` share the exact same settings.

Adds a ****project-level configuration**** mechanism so multiple scripts
(e.g., `train.py`, `hpo.py`, `predict.py`) share the exact same MLflow settings,
regardless of current working directory.

Examples

Try it in your browser!

Quiskstart Template: Beginner workflow demo

```
>>> import os
>>> import scikitplot as sp
>>>
>>> # print(sp.mlflow.DEFAULT_PROJECT_MARKERS)
>>> # Walk upward from `start` until a directory containing any marker is found.
>>> # export SCIKITPLOT_PROJECT_MARKERS='[".git","pyproject.toml","README.txt","configs/mlflow.toml"]'
>>> os.environ["SCIKITPLOT_PROJECT_MARKERS"] = (
...     '[".git","pyproject.toml","README.txt","configs/mlflow.toml"]'
... )
>>> sp.mlflow.workflow(
...     profile="local",
...     open_ui_seconds=30,
...     experiment_name="my-first-project",
...     fmt="toml",
...     overwrite=True,  # If config already exists: ./configs/mlflow.toml (use overwrite=True).
... )

```

CLI

```
>>> # Walk upward from `start` until a directory containing any marker is found.
>>> # export SCIKITPLOT_PROJECT_MARKERS='[".git","pyproject.toml","README.txt","configs/mlflow.toml"]'
>>> python -m scikitplot.mlflow --profile local --open-ui-seconds 5

```
Go BackOpen In Tab

****User guide.**** See the [MLflow Workflow Automation](../user_guide/mlflow/index.html#mlflow-index) section for further details.

## Cli Helper[#](#cli-helper "Link to this heading")

|  |  |
| --- | --- |
| [`DEFAULT_MLFLOW_SERVER_FLAGS`](../modules/generated/scikitplot.mlflow.DEFAULT_MLFLOW_SERVER_FLAGS.html#scikitplot.mlflow.DEFAULT_MLFLOW_SERVER_FLAGS "scikitplot.mlflow.DEFAULT_MLFLOW_SERVER_FLAGS") | frozenset() -> empty frozenset object frozenset(iterable) -> frozenset object |
| [`MlflowServerCliCaps`](../modules/generated/scikitplot.mlflow.MlflowServerCliCaps.html#scikitplot.mlflow.MlflowServerCliCaps "scikitplot.mlflow.MlflowServerCliCaps") | Parsed capability set for `mlflow server` CLI flags. |
| [`ensure_flags_supported`](../modules/generated/scikitplot.mlflow.ensure_flags_supported.html#scikitplot.mlflow.ensure_flags_supported "scikitplot.mlflow.ensure_flags_supported") | Validate that all long-form CLI flags in `args` are supported. |
| [`get_mlflow_server_cli_caps`](../modules/generated/scikitplot.mlflow.get_mlflow_server_cli_caps.html#scikitplot.mlflow.get_mlflow_server_cli_caps "scikitplot.mlflow.get_mlflow_server_cli_caps") | Get supported `mlflow server` flags for the installed MLflow version. |

## Compat Helper[#](#compat-helper "Link to this heading")

|  |  |
| --- | --- |
| [`import_mlflow`](../modules/generated/scikitplot.mlflow.import_mlflow.html#scikitplot.mlflow.import_mlflow "scikitplot.mlflow.import_mlflow") | Import MLflow lazily with a user-friendly error. |
| [`resolve_download_artifacts`](../modules/generated/scikitplot.mlflow.resolve_download_artifacts.html#scikitplot.mlflow.resolve_download_artifacts "scikitplot.mlflow.resolve_download_artifacts") | Resolve a canonical artifact download function across MLflow versions. |

## Config Helper[#](#module-scikitplot.mlflow._config "Link to this heading")

\_config.

****User guide.**** See the [MLflow Workflow Automation](../user_guide/mlflow/index.html#mlflow-index) section for further details.

|  |  |
| --- | --- |
| [`ServerConfig`](../modules/generated/scikitplot.mlflow.ServerConfig.html#scikitplot.mlflow.ServerConfig "scikitplot.mlflow.ServerConfig") | Configuration that maps directly to `mlflow server` CLI flags. |
| [`SessionConfig`](../modules/generated/scikitplot.mlflow.SessionConfig.html#scikitplot.mlflow.SessionConfig "scikitplot.mlflow.SessionConfig") | Session-level configuration for `scikitplot.mlflow.session`. |

## Container Helper[#](#container-helper "Link to this heading")

|  |  |
| --- | --- |
| [`running_in_docker`](../modules/generated/scikitplot.mlflow.running_in_docker.html#scikitplot.mlflow.running_in_docker "scikitplot.mlflow.running_in_docker") | Detect whether the current process is running in a Docker container. |

## Customization Helper[#](#customization-helper "Link to this heading")

|  |  |
| --- | --- |
| [`MlflowProvider`](../modules/generated/scikitplot.mlflow.MlflowProvider.html#scikitplot.mlflow.MlflowProvider "scikitplot.mlflow.MlflowProvider") | A customizable provider for MLflow-like libraries. |
| [`get_provider`](../modules/generated/scikitplot.mlflow.get_provider.html#scikitplot.mlflow.get_provider "scikitplot.mlflow.get_provider") | Retrieve the currently active MLflow provider. |
| [`set_provider`](../modules/generated/scikitplot.mlflow.set_provider.html#scikitplot.mlflow.set_provider "scikitplot.mlflow.set_provider") | Set the active MLflow provider globally. |
| [`use_provider`](../modules/generated/scikitplot.mlflow.use_provider.html#scikitplot.mlflow.use_provider "scikitplot.mlflow.use_provider") | Temporarily set the MLflow provider for a context block. |

## Env Helper[#](#env-helper "Link to this heading")

|  |  |
| --- | --- |
| [`EnvSnapshot`](../modules/generated/scikitplot.mlflow.EnvSnapshot.html#scikitplot.mlflow.EnvSnapshot "scikitplot.mlflow.EnvSnapshot") | Full snapshot of process environment for strict restoration. |
| [`apply_env`](../modules/generated/scikitplot.mlflow.apply_env.html#scikitplot.mlflow.apply_env "scikitplot.mlflow.apply_env") | Apply `.env` and explicit overrides to `os.environ`. |
| [`parse_dotenv`](../modules/generated/scikitplot.mlflow.parse_dotenv.html#scikitplot.mlflow.parse_dotenv "scikitplot.mlflow.parse_dotenv") | Parse a minimal `.env` file containing KEY=VALUE assignments. |

## Error Helper[#](#error-helper "Link to this heading")

|  |  |
| --- | --- |
| [`MlflowCliIncompatibleError`](../modules/generated/scikitplot.mlflow.MlflowCliIncompatibleError.html#scikitplot.mlflow.MlflowCliIncompatibleError "scikitplot.mlflow.MlflowCliIncompatibleError") | Raised when a requested `mlflow server` option is not supported by the installed MLflow. |
| [`MlflowIntegrationError`](../modules/generated/scikitplot.mlflow.MlflowIntegrationError.html#scikitplot.mlflow.MlflowIntegrationError "scikitplot.mlflow.MlflowIntegrationError") | Base exception for scikitplot.mlflow errors. |
| [`MlflowNotInstalledError`](../modules/generated/scikitplot.mlflow.MlflowNotInstalledError.html#scikitplot.mlflow.MlflowNotInstalledError "scikitplot.mlflow.MlflowNotInstalledError") | Raised when MLflow is required but not installed. |
| [`MlflowServerStartError`](../modules/generated/scikitplot.mlflow.MlflowServerStartError.html#scikitplot.mlflow.MlflowServerStartError "scikitplot.mlflow.MlflowServerStartError") | Raised when the managed MLflow server fails to start or exits prematurely. |
| [`SecurityPolicyViolationError`](../modules/generated/scikitplot.mlflow.SecurityPolicyViolationError.html#scikitplot.mlflow.SecurityPolicyViolationError "scikitplot.mlflow.SecurityPolicyViolationError") | Raised when an operation is rejected by the active [`SecurityPolicy`](../modules/generated/scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow.SecurityPolicy"). |

## Facade Helper[#](#facade-helper "Link to this heading")

|  |  |
| --- | --- |
| [`ArtifactsFacade`](../modules/generated/scikitplot.mlflow.ArtifactsFacade.html#scikitplot.mlflow.ArtifactsFacade "scikitplot.mlflow.ArtifactsFacade") | Artifact helper facade bound to a specific MLflow client/URI. |
| [`ModelsFacade`](../modules/generated/scikitplot.mlflow.ModelsFacade.html#scikitplot.mlflow.ModelsFacade "scikitplot.mlflow.ModelsFacade") | Model helper facade bound to a session-bound MLflow client. |

## Project Helper[#](#module-scikitplot.mlflow._project "Link to this heading")

Project configuration helpers for [`mlflow`](#module-scikitplot.mlflow "scikitplot.mlflow").

This module provides two distinct, deterministic responsibilities:

1. ****Project root discovery**** via marker files/directories (e.g., `pyproject.toml` or `.git`).
2. ****Project-level MLflow config I/O**** (TOML/YAML) that normalizes local paths so that
   multiple scripts (train/hpo/predict) behave consistently regardless of current working directory.

Notes

This module intentionally exposes a **small** public surface for marker customization, while keeping
the underlying mutable default private. Users should prefer:
- `get_project_markers`
- `set_project_markers`
- `project_markers` (context manager)
- Environment override via `SCIKITPLOT_PROJECT_MARKERS` (strict JSON list of strings)
- Config override via a TOML file containing `[project].markers = [...]`

Examples

Try it in your browser!

Option A — temporary (best for automation pipelines)

```
>>> from scikitplot.mlflow._project import project_markers, find_project_root
>>>
>>> with project_markers(["pyproject.toml", ".git", "configs/mlflow.toml"]):
...     root = find_project_root()

```

Option B — environment (best for CI)

```
>>> import os
>>>
>>> # Default marker file-folder for auto detection
>>> # Walk upward from `start` until a directory containing any marker is found.
>>> # export SCIKITPLOT_PROJECT_MARKERS='[".git","pyproject.toml","README.txt","configs/mlflow.toml"]'
>>> os.environ["SCIKITPLOT_PROJECT_MARKERS"] = (
...     '[".git","pyproject.toml","README.txt","configs/mlflow.toml"]'
... )

```

Option C — config-driven (best for teams)

```
>>> [project]
>>> markers = ["pyproject.toml", ".git", "configs/mlflow.toml"]

```
Go BackOpen In Tab

****User guide.**** See the [MLflow Workflow Automation](../user_guide/mlflow/index.html#mlflow-index) section for further details.

|  |  |
| --- | --- |
| [`DEFAULT_PROJECT_MARKERS`](../modules/generated/scikitplot.mlflow.DEFAULT_PROJECT_MARKERS.html#scikitplot.mlflow.DEFAULT_PROJECT_MARKERS "scikitplot.mlflow.DEFAULT_PROJECT_MARKERS") | Built-in immutable sequence. |
| [`ProjectConfig`](../modules/generated/scikitplot.mlflow.ProjectConfig.html#scikitplot.mlflow.ProjectConfig "scikitplot.mlflow.ProjectConfig") | Project-level configuration for MLflow usage across multiple scripts. |
| [`dump_project_config_yaml`](../modules/generated/scikitplot.mlflow.dump_project_config_yaml.html#scikitplot.mlflow.dump_project_config_yaml "scikitplot.mlflow.dump_project_config_yaml") | Write a ProjectConfig to a YAML file. |
| [`ensure_local_store_layout`](../modules/generated/scikitplot.mlflow.ensure_local_store_layout.html#scikitplot.mlflow.ensure_local_store_layout "scikitplot.mlflow.ensure_local_store_layout") | Ensure local backend/artifact directories exist. |
| [`find_project_root`](../modules/generated/scikitplot.mlflow.find_project_root.html#scikitplot.mlflow.find_project_root "scikitplot.mlflow.find_project_root") | Find a project root directory deterministically. |
| [`get_project_markers`](../modules/generated/scikitplot.mlflow.get_project_markers.html#scikitplot.mlflow.get_project_markers "scikitplot.mlflow.get_project_markers") | Resolve project markers deterministically. |
| [`load_project_config`](../modules/generated/scikitplot.mlflow.load_project_config.html#scikitplot.mlflow.load_project_config "scikitplot.mlflow.load_project_config") | Load project MLflow config from TOML or YAML based on file extension. |
| [`load_project_config_toml`](../modules/generated/scikitplot.mlflow.load_project_config_toml.html#scikitplot.mlflow.load_project_config_toml "scikitplot.mlflow.load_project_config_toml") | Load project MLflow config from a TOML file. |
| [`load_project_config_yaml`](../modules/generated/scikitplot.mlflow.load_project_config_yaml.html#scikitplot.mlflow.load_project_config_yaml "scikitplot.mlflow.load_project_config_yaml") | Load project MLflow config from a YAML file. |
| [`normalize_mlflow_store_values`](../modules/generated/scikitplot.mlflow.normalize_mlflow_store_values.html#scikitplot.mlflow.normalize_mlflow_store_values "scikitplot.mlflow.normalize_mlflow_store_values") | Normalize local store values for consistent multi-script usage. |
| [`project_markers`](../modules/generated/scikitplot.mlflow.project_markers.html#scikitplot.mlflow.project_markers "scikitplot.mlflow.project_markers") | Temporarily override module default markers for a block. |
| [`set_project_markers`](../modules/generated/scikitplot.mlflow.set_project_markers.html#scikitplot.mlflow.set_project_markers "scikitplot.mlflow.set_project_markers") | Set the module default markers. |

## Readiness Helper[#](#readiness-helper "Link to this heading")

|  |  |
| --- | --- |
| [`wait_tracking_ready`](../modules/generated/scikitplot.mlflow.wait_tracking_ready.html#scikitplot.mlflow.wait_tracking_ready "scikitplot.mlflow.wait_tracking_ready") | Wait until the MLflow tracking REST API responds. |

## Security Helper[#](#security-helper "Link to this heading")

|  |  |
| --- | --- |
| [`DEFAULT_SECURITY_POLICY`](../modules/generated/scikitplot.mlflow.DEFAULT_SECURITY_POLICY.html#scikitplot.mlflow.DEFAULT_SECURITY_POLICY "scikitplot.mlflow.DEFAULT_SECURITY_POLICY") | Declarative security policy for [`scikitplot.mlflow`](#module-scikitplot.mlflow "scikitplot.mlflow") operations. |
| [`RELAXED_SECURITY_POLICY`](../modules/generated/scikitplot.mlflow.RELAXED_SECURITY_POLICY.html#scikitplot.mlflow.RELAXED_SECURITY_POLICY "scikitplot.mlflow.RELAXED_SECURITY_POLICY") | Declarative security policy for [`scikitplot.mlflow`](#module-scikitplot.mlflow "scikitplot.mlflow") operations. |
| [`SecurityPolicy`](../modules/generated/scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow.SecurityPolicy") | Declarative security policy for [`scikitplot.mlflow`](#module-scikitplot.mlflow "scikitplot.mlflow") operations. |
| [`get_security_policy`](../modules/generated/scikitplot.mlflow.get_security_policy.html#scikitplot.mlflow.get_security_policy "scikitplot.mlflow.get_security_policy") | Return the currently active [`SecurityPolicy`](../modules/generated/scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow.SecurityPolicy"), or `None`. |
| [`security_policy`](../modules/generated/scikitplot.mlflow.security_policy.html#scikitplot.mlflow.security_policy "scikitplot.mlflow.security_policy") | Temporarily activate a [`SecurityPolicy`](../modules/generated/scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow.SecurityPolicy") for a context block. |
| [`set_security_policy`](../modules/generated/scikitplot.mlflow.set_security_policy.html#scikitplot.mlflow.set_security_policy "scikitplot.mlflow.set_security_policy") | Set the active [`SecurityPolicy`](../modules/generated/scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow.SecurityPolicy") globally. |

## Server Helper[#](#server-helper "Link to this heading")

|  |  |
| --- | --- |
| [`SpawnedServer`](../modules/generated/scikitplot.mlflow.SpawnedServer.html#scikitplot.mlflow.SpawnedServer "scikitplot.mlflow.SpawnedServer") | Spawned MLflow server process state. |
| [`build_server_args`](../modules/generated/scikitplot.mlflow.build_server_args.html#scikitplot.mlflow.build_server_args "scikitplot.mlflow.build_server_args") | Build the CLI args for `mlflow server` from a ServerConfig. |
| [`build_server_command`](../modules/generated/scikitplot.mlflow.build_server_command.html#scikitplot.mlflow.build_server_command "scikitplot.mlflow.build_server_command") | Build a deterministic `mlflow server` command. |
| [`spawn_server`](../modules/generated/scikitplot.mlflow.spawn_server.html#scikitplot.mlflow.spawn_server "scikitplot.mlflow.spawn_server") | Spawn an MLflow server subprocess. |

## Session Helper[#](#session-helper "Link to this heading")

|  |  |
| --- | --- |
| [`MlflowHandle`](../modules/generated/scikitplot.mlflow.MlflowHandle.html#scikitplot.mlflow.MlflowHandle "scikitplot.mlflow.MlflowHandle") | A handle that proxies the upstream `mlflow` module while adding session context. |
| [`session`](../modules/generated/scikitplot.mlflow.session.html#scikitplot.mlflow.session "scikitplot.mlflow.session") | Create a strict, context-managed MLflow session. |
| [`session_from_file`](../modules/generated/scikitplot.mlflow.session_from_file.html#scikitplot.mlflow.session_from_file "scikitplot.mlflow.session_from_file") | Create an MLflow session using a shared project config file (TOML or YAML). |
| [`session_from_toml`](../modules/generated/scikitplot.mlflow.session_from_toml.html#scikitplot.mlflow.session_from_toml "scikitplot.mlflow.session_from_toml") | Create an MLflow session using a shared project TOML config. |

## Helper[#](#helper "Link to this heading")

|  |  |
| --- | --- |
| [`MlflowVersion`](../modules/generated/scikitplot.mlflow.MlflowVersion.html#scikitplot.mlflow.MlflowVersion "scikitplot.mlflow.MlflowVersion") | Parsed MLflow version. |
| [`is_mlflow_installed`](../modules/generated/scikitplot.mlflow.is_mlflow_installed.html#scikitplot.mlflow.is_mlflow_installed "scikitplot.mlflow.is_mlflow_installed") | Check whether MLflow is installed in the current Python environment. |
| [`mlflow_version`](../modules/generated/scikitplot.mlflow.mlflow_version.html#scikitplot.mlflow.mlflow_version "scikitplot.mlflow.mlflow_version") | Retrieve the installed MLflow version (if available). |

## Workflow Helper[#](#workflow-helper "Link to this heading")

|  |  |
| --- | --- |
| [`WorkflowPaths`](../modules/generated/scikitplot.mlflow.WorkflowPaths.html#scikitplot.mlflow.WorkflowPaths "scikitplot.mlflow.WorkflowPaths") | Standardized project config paths used by the workflow. |
| [`builtin_config_path`](../modules/generated/scikitplot.mlflow.builtin_config_path.html#scikitplot.mlflow.builtin_config_path "scikitplot.mlflow.builtin_config_path") | Return the path to the built-in demo config shipped with the package. |
| [`default_project_paths`](../modules/generated/scikitplot.mlflow.default_project_paths.html#scikitplot.mlflow.default_project_paths "scikitplot.mlflow.default_project_paths") | Compute standard config file paths for a project. |
| [`export_builtin_config`](../modules/generated/scikitplot.mlflow.export_builtin_config.html#scikitplot.mlflow.export_builtin_config "scikitplot.mlflow.export_builtin_config") | Export the built-in demo config into the current project. |
| [`patch_experiment_name_in_toml`](../modules/generated/scikitplot.mlflow.patch_experiment_name_in_toml.html#scikitplot.mlflow.patch_experiment_name_in_toml "scikitplot.mlflow.patch_experiment_name_in_toml") | Patch `experiment_name = ...` in a TOML config deterministically. |
| [`run_demo`](../modules/generated/scikitplot.mlflow.run_demo.html#scikitplot.mlflow.run_demo "scikitplot.mlflow.run_demo") | Run a beginner-friendly end-to-end demo workflow. |
| [`workflow`](../modules/generated/scikitplot.mlflow.workflow.html#scikitplot.mlflow.workflow "scikitplot.mlflow.workflow") | Run the built-in end-to-end MLflow workflow demo. |