# SessionConfig[#](#sessionconfig "Link to this heading")

class scikitplot.mlflow.SessionConfig(**tracking\_uri=None**, **public\_tracking\_uri=None**, **registry\_uri=None**, **env\_file=None**, **extra\_env=None**, **startup\_timeout\_s=30.0**, **ensure\_reachable=False**, **experiment\_name=None**, **create\_experiment\_if\_missing=True**, **default\_run\_name=None**, **default\_run\_tags=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/mlflow/_config.py#L22)[#](#scikitplot.mlflow.SessionConfig "Link to this definition")
:   Session-level configuration for `scikitplot.mlflow.session`.

    Parameters:
    :   ****tracking\_uri****str or None, default=None
        :   MLflow tracking URI to use inside the session.

        ****public\_tracking\_uri****str or None, default=None
        :   Optional UI URL to display to users (e.g., when running in Docker/remote notebooks).
            This does NOT change the internal tracking URI used by MLflow calls; it is only for
            human-facing navigation.
            If None, the session reads `MLFLOW_TRACKING_URI` from the environment (after
            loading `env_file`, if provided). If `start_server=True` and no URI is provided,
            it will be constructed as `http://{tracking_host}:{server.port}`.

        ****registry\_uri****str or None, default=None
        :   Optional MLflow registry URI. If None, the session reads `MLFLOW_REGISTRY_URI`
            from the environment (after loading `env_file`, if provided).

        ****env\_file****str or None, default=None
        :   Optional path to a `.env` file. Keys are loaded only if missing from `os.environ`,
            matching MLflow CLI `--env-file` behavior.

        ****extra\_env****Mapping[str, str] or None, default=None
        :   Additional environment variables to set for the duration of the session.
            These override current env vars and are restored on exit.

        ****startup\_timeout\_s****float, default=30.0
        :   Maximum seconds to wait for MLflow server readiness when `start_server=True`.

        ****ensure\_reachable****bool, default=False
        :   If True, verify the configured tracking URI is reachable even when `start_server=False`.
            This performs the same readiness check used for managed servers.

        ****experiment\_name****str or None, default=None
        :   If provided, set the active experiment on session entry (before any runs).

        ****create\_experiment\_if\_missing****bool, default=True
        :   Controls behavior when `experiment_name` does not exist:
            - True: create the experiment (via `mlflow.set_experiment`)
            - False: raise a KeyError (strict fail)

        ****default\_run\_name****str or None, default=None
        :   Default `run_name` applied by [`MlflowHandle.start_run`](scikitplot.mlflow.MlflowHandle.html#scikitplot.mlflow.MlflowHandle.start_run "scikitplot.mlflow.MlflowHandle.start_run") if the caller did not
            provide an explicit run name.

        ****default\_run\_tags****Mapping[str, str] or None, default=None
        :   Default tags applied by [`MlflowHandle.start_run`](scikitplot.mlflow.MlflowHandle.html#scikitplot.mlflow.MlflowHandle.start_run "scikitplot.mlflow.MlflowHandle.start_run") when a run begins.

    Raises:
    :   ValueError
        :   If `startup_timeout_s` is not positive.

    Parameters:
    :   * ****tracking\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****public\_tracking\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****registry\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****env\_file**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****extra\_env**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****startup\_timeout\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****ensure\_reachable**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****experiment\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****create\_experiment\_if\_missing**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****default\_run\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****default\_run\_tags**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Notes

    Precedence order is strict:
    1) explicit arguments (`tracking_uri`, `registry_uri`, `extra_env`)
    2) existing environment variables
    3) `.env` file (fills missing keys only)
    4) defaults

    create\_experiment\_if\_missing: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.mlflow.SessionConfig.create_experiment_if_missing "Link to this definition")

    default\_run\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.SessionConfig.default_run_name "Link to this definition")

    default\_run\_tags: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.SessionConfig.default_run_tags "Link to this definition")

    ensure\_reachable: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.mlflow.SessionConfig.ensure_reachable "Link to this definition")

    env\_file: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.SessionConfig.env_file "Link to this definition")

    experiment\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.SessionConfig.experiment_name "Link to this definition")

    extra\_env: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.SessionConfig.extra_env "Link to this definition")

    public\_tracking\_uri: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.SessionConfig.public_tracking_uri "Link to this definition")

    registry\_uri: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.SessionConfig.registry_uri "Link to this definition")

    startup\_timeout\_s: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 30.0[#](#scikitplot.mlflow.SessionConfig.startup_timeout_s "Link to this definition")

    tracking\_uri: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.SessionConfig.tracking_uri "Link to this definition")