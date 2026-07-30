# ModelsFacade[#](#modelsfacade "Link to this heading")

class scikitplot.mlflow.ModelsFacade(**mlflow\_module=None**, **client=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/mlflow/_facade.py#L161)[#](#scikitplot.mlflow.ModelsFacade "Link to this definition")
:   Model helper facade bound to a session-bound MLflow client.

    Parameters:
    :   ****mlflow\_module****module
        :   Imported `mlflow` module.

        ****client****MlflowClient
        :   Client bound to the session tracking/registry URIs.

    Parameters:
    :   * ****mlflow\_module**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****client**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

    Notes

    This facade intentionally stays thin and uses MLflow public APIs.

    client: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.mlflow.ModelsFacade.client "Link to this definition")

    load\_model(**model\_uri**, **\***, **flavor=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/mlflow/_facade.py#L181)[#](#scikitplot.mlflow.ModelsFacade.load_model "Link to this definition")
    :   Load a model by URI.

        Parameters:
        :   ****model\_uri****str
            :   Model URI (e.g., “runs:/<run\_id>/model” or “models:/Name/Stage”).

            ****flavor****str or None, default=None
            :   Optional flavor to load. If provided, attempts to load via `mlflow.<flavor>.load_model`.
                Otherwise, uses `mlflow.pyfunc.load_model`.

        Returns:
        :   Any
            :   Loaded model object.

        Raises:
        :   AttributeError
            :   If requested flavor is not available.

        Parameters:
        :   * ****model\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****flavor**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    mlflow\_module: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.mlflow.ModelsFacade.mlflow_module "Link to this definition")

    register\_model(**model\_uri**, **name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/mlflow/_facade.py#L210)[#](#scikitplot.mlflow.ModelsFacade.register_model "Link to this definition")
    :   Register a model version.

        Parameters:
        :   ****model\_uri****str
            :   Model source URI.

            ****name****str
            :   Registered model name.

        Returns:
        :   Any
            :   Model version object (type depends on MLflow version).

        Parameters:
        :   * ****model\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")