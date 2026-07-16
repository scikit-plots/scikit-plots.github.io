# MlflowHandle[#](#mlflowhandle "Link to this heading")

class scikitplot.mlflow.MlflowHandle(**\_mlflow\_module**, **\_tracking\_uri**, **\_registry\_uri**, **\_ui\_url**, **\_client**, **\_artifacts**, **\_models**, **server=None**, **version=None**, **experiment\_name=None**, **default\_run\_name=None**, **default\_run\_tags=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/mlflow/_session.py#L157)[#](#scikitplot.mlflow.MlflowHandle "Link to this definition")
:   A handle that proxies the upstream `mlflow` module while adding session context.

    Attributes:
    :   [`mlflow_module`](#scikitplot.mlflow.MlflowHandle.mlflow_module "scikitplot.mlflow.MlflowHandle.mlflow_module")module
        :   Imported `mlflow` module for this session.

        [`tracking_uri`](#scikitplot.mlflow.MlflowHandle.tracking_uri "scikitplot.mlflow.MlflowHandle.tracking_uri")str
        :   Resolved tracking URI used for this session.

        [`registry_uri`](#scikitplot.mlflow.MlflowHandle.registry_uri "scikitplot.mlflow.MlflowHandle.registry_uri")str or None
        :   Optional registry URI used for this session.

        [`ui_url`](#scikitplot.mlflow.MlflowHandle.ui_url "scikitplot.mlflow.MlflowHandle.ui_url")str
        :   Human-facing URL for opening the MLflow UI.

        [`client`](#scikitplot.mlflow.MlflowHandle.client "scikitplot.mlflow.MlflowHandle.client")mlflow.tracking.MlflowClient
        :   MLflow client bound to the session.

        [`artifacts`](#scikitplot.mlflow.MlflowHandle.artifacts "scikitplot.mlflow.MlflowHandle.artifacts")ArtifactsFacade
        :   Artifact helper facade.

        [`models`](#scikitplot.mlflow.MlflowHandle.models "scikitplot.mlflow.MlflowHandle.models")ModelsFacade
        :   Model helper facade.

        ****server****SpawnedServer or None
        :   Spawned server handle if `start_server=True`.

        ****version****MlflowVersion or None
        :   Parsed installed MLflow version, if available.

        ****experiment\_name****str or None
        :   Active experiment name configured for this session (if any).

        ****default\_run\_name****str or None
        :   Default run name used by [`start_run`](#scikitplot.mlflow.MlflowHandle.start_run "scikitplot.mlflow.MlflowHandle.start_run") wrapper.

        ****default\_run\_tags****Mapping[str, str] or None
        :   Default tags applied by [`start_run`](#scikitplot.mlflow.MlflowHandle.start_run "scikitplot.mlflow.MlflowHandle.start_run") wrapper.

    Parameters:
    :   * ****\_mlflow\_module**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****\_tracking\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****\_registry\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****\_ui\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****\_client**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****\_artifacts**** ([**ArtifactsFacade**](scikitplot.mlflow.ArtifactsFacade.html#scikitplot.mlflow.ArtifactsFacade "scikitplot.mlflow._facade.ArtifactsFacade"))
        * ****\_models**** ([**ModelsFacade**](scikitplot.mlflow.ModelsFacade.html#scikitplot.mlflow.ModelsFacade "scikitplot.mlflow._facade.ModelsFacade"))
        * ****server**** ([**SpawnedServer**](scikitplot.mlflow.SpawnedServer.html#scikitplot.mlflow.SpawnedServer "scikitplot.mlflow._server.SpawnedServer") **|** **None**)
        * ****version**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") **|** **None**)
        * ****experiment\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****default\_run\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****default\_run\_tags**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Notes

    Attribute access falls back to the underlying `mlflow` module. This allows users
    to omit `import mlflow` while keeping identical API usage.

    property artifacts: [ArtifactsFacade](scikitplot.mlflow.ArtifactsFacade.html#scikitplot.mlflow.ArtifactsFacade "scikitplot.mlflow._facade.ArtifactsFacade")[#](#scikitplot.mlflow.MlflowHandle.artifacts "Link to this definition")
    :   Artifact helper facade.

        Returns:
        :   ArtifactsFacade
            :   Facade providing artifact helpers (log/list/download, etc.).

    property client: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")[#](#scikitplot.mlflow.MlflowHandle.client "Link to this definition")
    :   MLflow client bound to the session.

        Returns:
        :   Any
            :   Instance compatible with `mlflow.tracking.MlflowClient`.

    default\_run\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.MlflowHandle.default_run_name "Link to this definition")

    default\_run\_tags: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.MlflowHandle.default_run_tags "Link to this definition")

    experiment\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.MlflowHandle.experiment_name "Link to this definition")

    property mlflow\_module: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")[#](#scikitplot.mlflow.MlflowHandle.mlflow_module "Link to this definition")
    :   Imported `mlflow` module for this session.

    property models: [ModelsFacade](scikitplot.mlflow.ModelsFacade.html#scikitplot.mlflow.ModelsFacade "scikitplot.mlflow._facade.ModelsFacade")[#](#scikitplot.mlflow.MlflowHandle.models "Link to this definition")
    :   Model helper facade.

        Returns:
        :   ModelsFacade
            :   Facade providing model registry helpers.

    property registry\_uri: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.mlflow.MlflowHandle.registry_uri "Link to this definition")
    :   Optional registry URI used for this session.

    server: [SpawnedServer](scikitplot.mlflow.SpawnedServer.html#scikitplot.mlflow.SpawnedServer "scikitplot.mlflow._server.SpawnedServer") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.MlflowHandle.server "Link to this definition")

    start\_run(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/mlflow/_session.py#L270)[#](#scikitplot.mlflow.MlflowHandle.start_run "Link to this definition")
    :   Start an MLflow run and apply session defaults.

        Parameters:
        :   ****\*args****Any
            :   Positional args forwarded to `mlflow.start_run`.

            ****\*\*kwargs****Any
            :   Keyword args forwarded to `mlflow.start_run`.

        Returns:
        :   Iterator[Any]
            :   Context manager yielding the active run object.

        Raises:
        :   Exception
            :   Propagates underlying MLflow errors.

        Parameters:
        :   * ****args**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

        Notes

        Strict behavior:
        - If `run_name` is not provided and `default_run_name` is set, we pass it.
        - After run starts, if `default_run_tags` is set, apply them to the active run.

        This wrapper does not modify MLflow global state beyond the active run tags.

    property tracking\_uri: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.mlflow.MlflowHandle.tracking_uri "Link to this definition")
    :   Resolved tracking URI used for this session.

    property ui\_url: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.mlflow.MlflowHandle.ui_url "Link to this definition")
    :   Human-facing URL for opening the MLflow UI.

    version: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.MlflowHandle.version "Link to this definition")