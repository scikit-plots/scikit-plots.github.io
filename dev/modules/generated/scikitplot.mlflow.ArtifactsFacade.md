# ArtifactsFacade[#](#artifactsfacade "Link to this heading")

class scikitplot.mlflow.ArtifactsFacade(**mlflow\_module=None**, **client=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/mlflow/_facade.py#L30)[#](#scikitplot.mlflow.ArtifactsFacade "Link to this definition")
:   Artifact helper facade bound to a specific MLflow client/URI.

    Parameters:
    :   ****mlflow\_module****module
        :   Imported `mlflow` module.

        ****client****MlflowClient
        :   MLflow client bound to the session tracking URI.

    Parameters:
    :   * ****mlflow\_module**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****client**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

    Notes

    The implementation is version-robust and deterministic:

    * Prefer the public modern API: `mlflow.artifacts.download_artifacts`.
    * Otherwise fallback to the session-bound client’s `download_artifacts`.

    This avoids accidental use of a **different** tracking URI (e.g., when a new client is
    constructed without explicit configuration).

    client: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.mlflow.ArtifactsFacade.client "Link to this definition")

    download(**run\_id**, **artifact\_path**, **dst\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/mlflow/_facade.py#L76)[#](#scikitplot.mlflow.ArtifactsFacade.download "Link to this definition")
    :   Download an artifact from a run.

        Parameters:
        :   ****run\_id****str
            :   MLflow run ID.

            ****artifact\_path****str
            :   Path relative to the run artifact root (e.g., “model/MLmodel”).

            ****dst\_path****str or None, default=None
            :   Optional destination directory.

        Returns:
        :   pathlib.Path
            :   Local path to the downloaded file or directory.

        Raises:
        :   AttributeError
            :   If no compatible artifact download API is available.

        Parameters:
        :   * ****run\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****artifact\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****dst\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

        Notes

        Delegates to `scikitplot.mlflow._compat.resolve_download_artifacts`,
        which applies the same preference order: modern public API first, then
        session-bound client fallback.

    list(**run\_id**, **artifact\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/mlflow/_facade.py#L56)[#](#scikitplot.mlflow.ArtifactsFacade.list "Link to this definition")
    :   List artifacts for a run.

        Parameters:
        :   ****run\_id****str
            :   MLflow run ID.

            ****artifact\_path****str or None, default=None
            :   Optional artifact subdirectory.

        Returns:
        :   list
            :   List of artifact infos (type depends on MLflow version).

        Parameters:
        :   * ****run\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****artifact\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    log\_file(**local\_path**, **artifact\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/mlflow/_facade.py#L117)[#](#scikitplot.mlflow.ArtifactsFacade.log_file "Link to this definition")
    :   Log a local file as an artifact.

        Parameters:
        :   ****local\_path****str or pathlib.Path
            :   Path to a local file.

            ****artifact\_path****str or None, default=None
            :   Optional destination path within the run artifact root.

        Returns:
        :   None

        Parameters:
        :   * ****local\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
            * ****artifact\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   None

    log\_files(**local\_paths**, **artifact\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/mlflow/_facade.py#L140)[#](#scikitplot.mlflow.ArtifactsFacade.log_files "Link to this definition")
    :   Log multiple local files as artifacts.

        Parameters:
        :   ****local\_paths****Sequence[str or pathlib.Path]
            :   Paths to local files.

            ****artifact\_path****str or None, default=None
            :   Optional destination path within the run artifact root.

        Returns:
        :   None

        Parameters:
        :   * ****local\_paths**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")**]**)
            * ****artifact\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   None

    mlflow\_module: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.mlflow.ArtifactsFacade.mlflow_module "Link to this definition")