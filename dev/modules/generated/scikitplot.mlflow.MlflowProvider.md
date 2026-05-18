# MlflowProvider[#](#mlflowprovider "Link to this heading")

class scikitplot.mlflow.MlflowProvider(**module**, **version=None**, **client\_factory=None**, **artifact\_downloader=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/mlflow/_custom.py#L29)[#](#scikitplot.mlflow.MlflowProvider "Link to this definition")
:   A customizable provider for MLflow-like libraries.

    This class acts as an abstraction layer to support inconsistent MLflow
    versions, internal wrappers, or alternative tracking libraries that
    mimic the MLflow API. By defining a custom provider, you can override
    how modules are imported, clients are instantiated, and artifacts are downloaded.

    Parameters:
    :   ****module****Any
        :   The custom MLflow-like module object (can be a mock or wrapper).

        ****version****str or None, default=None
        :   A static version string to bypass dynamic package resolution.

        ****client\_factory****Callable[[str, str | None], Any] or None, default=None
        :   A callable taking (tracking\_uri, registry\_uri) and returning an MLflow client.

        ****artifact\_downloader****Callable[…, str] or None, default=None
        :   A callable mimicking `mlflow.artifacts.download_artifacts`.

    Parameters:
    :   * ****module**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****version**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****client\_factory**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****artifact\_downloader**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[****...****]****,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    artifact\_downloader: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[...], [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.MlflowProvider.artifact_downloader "Link to this definition")

    client\_factory: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")], [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.MlflowProvider.client_factory "Link to this definition")

    get\_artifact\_downloader(**client**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/mlflow/_custom.py#L69)[#](#scikitplot.mlflow.MlflowProvider.get_artifact_downloader "Link to this definition")
    :   Resolve the artifact download callable.

        Parameters:
        :   ****client**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[…], [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    get\_client(**tracking\_uri**, **registry\_uri=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/mlflow/_custom.py#L56)[#](#scikitplot.mlflow.MlflowProvider.get_client "Link to this definition")
    :   Instantiate the MLflow-like client.

        Parameters:
        :   * ****tracking\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****registry\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    module: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/mlflow/_custom.py#L29)[#](#scikitplot.mlflow.MlflowProvider.module "Link to this definition")

    version: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.MlflowProvider.version "Link to this definition")