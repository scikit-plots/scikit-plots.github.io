# ServerConfig[#](#serverconfig "Link to this heading")

class scikitplot.mlflow.ServerConfig(**host='127.0.0.1'**, **port=5000**, **auto\_host\_in\_docker=False**, **docker\_host='0.0.0.0'**, **workers=None**, **backend\_store\_uri=None**, **registry\_store\_uri=None**, **default\_artifact\_root=None**, **serve\_artifacts=False**, **no\_serve\_artifacts=False**, **artifacts\_destination=None**, **artifacts\_only=False**, **allowed\_hosts=None**, **cors\_allowed\_origins=None**, **x\_frame\_options=None**, **disable\_security\_middleware=False**, **static\_prefix=None**, **uvicorn\_opts=None**, **gunicorn\_opts=None**, **waitress\_opts=None**, **expose\_prometheus=None**, **app\_name=None**, **dev=False**, **secrets\_cache\_ttl=None**, **secrets\_cache\_max\_size=None**, **strict\_cli\_compat=True**, **extra\_args=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/mlflow/_config.py#L125)[#](#scikitplot.mlflow.ServerConfig "Link to this definition")
:   Configuration that maps directly to `mlflow server` CLI flags.

    Parameters:
    :   ****host****str, default=”127.0.0.1”
        :   Host interface to bind.

        ****port****int, default=5000
        :   Port to bind.

        ****auto\_host\_in\_docker****bool, default=False
        :   If True and running inside Docker (`/.dockerenv` exists), then a configured
            host of `127.0.0.1` will be overridden to `docker_host` when spawning the
            server. This makes the UI reachable with container port publishing.

        ****docker\_host****str, default=”0.0.0.0”
        :   Host value to use when `auto_host_in_docker` triggers.

        ****workers****int or None, default=None
        :   Optional number of worker processes.

        ****backend\_store\_uri****str or None, default=None
        :   `--backend-store-uri`.

        ****registry\_store\_uri****str or None, default=None
        :   `--registry-store-uri`.

        ****default\_artifact\_root****str or None, default=None
        :   `--default-artifact-root`.

        ****serve\_artifacts****bool, default=False
        :   If True, adds `--serve-artifacts`.

        ****no\_serve\_artifacts****bool, default=False
        :   If True, adds `--no-serve-artifacts`.

        ****artifacts\_destination****str or None, default=None
        :   `--artifacts-destination`.

        ****artifacts\_only****bool, default=False
        :   If True, adds `--artifacts-only`.

        ****allowed\_hosts****str or None, default=None
        :   `--allowed-hosts`.

        ****cors\_allowed\_origins****str or None, default=None
        :   `--cors-allowed-origins`.

        ****x\_frame\_options****str or None, default=None
        :   `--x-frame-options`.

        ****disable\_security\_middleware****bool, default=False
        :   `--disable-security-middleware`.

        ****static\_prefix****str or None, default=None
        :   `--static-prefix`.

        ****uvicorn\_opts****str or None, default=None
        :   `--uvicorn-opts`.

        ****gunicorn\_opts****str or None, default=None
        :   `--gunicorn-opts`.

        ****waitress\_opts****str or None, default=None
        :   `--waitress-opts`.

        ****expose\_prometheus****str or None, default=None
        :   `--expose-prometheus` (directory to store metrics, enables `/metrics`).

        ****app\_name****str or None, default=None
        :   `--app-name`.

        ****dev****bool, default=False
        :   `--dev` (debug + auto-reload; unsupported on Windows).

        ****secrets\_cache\_ttl****int or None, default=None
        :   `--secrets-cache-ttl` (seconds; MLflow enforces ranges at runtime).

        ****secrets\_cache\_max\_size****int or None, default=None
        :   `--secrets-cache-max-size` (entries; MLflow enforces ranges at runtime).

        ****strict\_cli\_compat****bool, default=True
        :   If True, validate that every configured CLI flag is supported by the installed MLflow,
            using `mlflow server --help`. Unknown flags raise [`MlflowCliIncompatibleError`](scikitplot.mlflow.MlflowCliIncompatibleError.html#scikitplot.mlflow.MlflowCliIncompatibleError "scikitplot.mlflow.MlflowCliIncompatibleError").

        ****extra\_args****Sequence[str] or None, default=None
        :   Extra CLI args appended verbatim. With `strict_cli_compat=True`, flags inside `extra_args`
            are also checked for support.

    Raises:
    :   ValueError
        :   If configuration violates generic constraints (e.g., invalid port).

    Parameters:
    :   * ****host**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****port**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****auto\_host\_in\_docker**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****docker\_host**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****workers**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****backend\_store\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****registry\_store\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****default\_artifact\_root**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****serve\_artifacts**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****no\_serve\_artifacts**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****artifacts\_destination**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****artifacts\_only**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****allowed\_hosts**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****cors\_allowed\_origins**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****x\_frame\_options**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****disable\_security\_middleware**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****static\_prefix**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****uvicorn\_opts**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****gunicorn\_opts**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****waitress\_opts**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****expose\_prometheus**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****app\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****dev**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****secrets\_cache\_ttl**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****secrets\_cache\_max\_size**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****strict\_cli\_compat**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****extra\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    allowed\_hosts: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.allowed_hosts "Link to this definition")

    app\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.app_name "Link to this definition")

    artifacts\_destination: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.artifacts_destination "Link to this definition")

    artifacts\_only: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.mlflow.ServerConfig.artifacts_only "Link to this definition")

    auto\_host\_in\_docker: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.mlflow.ServerConfig.auto_host_in_docker "Link to this definition")

    backend\_store\_uri: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.backend_store_uri "Link to this definition")

    cors\_allowed\_origins: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.cors_allowed_origins "Link to this definition")

    default\_artifact\_root: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.default_artifact_root "Link to this definition")

    dev: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.mlflow.ServerConfig.dev "Link to this definition")

    disable\_security\_middleware: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.mlflow.ServerConfig.disable_security_middleware "Link to this definition")

    docker\_host: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = '0.0.0.0'[#](#scikitplot.mlflow.ServerConfig.docker_host "Link to this definition")

    expose\_prometheus: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.expose_prometheus "Link to this definition")

    extra\_args: [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.extra_args "Link to this definition")

    gunicorn\_opts: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.gunicorn_opts "Link to this definition")

    host: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = '127.0.0.1'[#](#scikitplot.mlflow.ServerConfig.host "Link to this definition")

    no\_serve\_artifacts: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.mlflow.ServerConfig.no_serve_artifacts "Link to this definition")

    port: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 5000[#](#scikitplot.mlflow.ServerConfig.port "Link to this definition")

    registry\_store\_uri: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.registry_store_uri "Link to this definition")

    secrets\_cache\_max\_size: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.secrets_cache_max_size "Link to this definition")

    secrets\_cache\_ttl: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.secrets_cache_ttl "Link to this definition")

    serve\_artifacts: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.mlflow.ServerConfig.serve_artifacts "Link to this definition")

    static\_prefix: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.static_prefix "Link to this definition")

    strict\_cli\_compat: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.mlflow.ServerConfig.strict_cli_compat "Link to this definition")

    uvicorn\_opts: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.uvicorn_opts "Link to this definition")

    validate(**\***, **for\_managed\_tracking**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/mlflow/_config.py#L239)[#](#scikitplot.mlflow.ServerConfig.validate "Link to this definition")
    :   Validate configuration against generic MLflow constraints.

        Parameters:
        :   ****for\_managed\_tracking****bool
            :   If True, validation assumes a tracking server will be spawned and readiness
                will be checked via tracking REST endpoints.

        Raises:
        :   ValueError
            :   If validation fails.

        Parameters:
        :   ****for\_managed\_tracking**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   None

        Notes

        * This method validates generic invariants and known mutual-exclusivity rules.
        * Exact per-version validation is delegated to MLflow itself; unsupported flags are
          caught separately when `strict_cli_compat=True`.

    waitress\_opts: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.waitress_opts "Link to this definition")

    workers: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.workers "Link to this definition")

    x\_frame\_options: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ServerConfig.x_frame_options "Link to this definition")