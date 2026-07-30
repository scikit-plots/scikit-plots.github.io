# ProjectConfig[#](#projectconfig "Link to this heading")

class scikitplot.mlflow.ProjectConfig(**profile='local'**, **session=SessionConfig(tracking\_uri=None, public\_tracking\_uri=None, registry\_uri=None, env\_file=None, extra\_env=None, startup\_timeout\_s=30.0, ensure\_reachable=False, experiment\_name=None, create\_experiment\_if\_missing=True, default\_run\_name=None, default\_run\_tags=None)**, **server=None**, **start\_server=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/mlflow/_project.py#L514)[#](#scikitplot.mlflow.ProjectConfig "Link to this definition")
:   Project-level configuration for MLflow usage across multiple scripts.

    Attributes:
    :   ****profile****str
        :   Named profile (e.g., “local”, “remote”, “ci”).

        ****session****SessionConfig
        :   Session configuration.

        ****server****ServerConfig or None
        :   Server configuration (if this profile starts a server).

        ****start\_server****bool
        :   Whether to start a managed server for this profile.

    Parameters:
    :   * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****session**** ([**SessionConfig**](scikitplot.mlflow.SessionConfig.html#scikitplot.mlflow.SessionConfig "scikitplot.mlflow._config.SessionConfig"))
        * ****server**** ([**ServerConfig**](scikitplot.mlflow.ServerConfig.html#scikitplot.mlflow.ServerConfig "scikitplot.mlflow._config.ServerConfig") **|** **None**)
        * ****start\_server**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Notes

    This provides a single, shared configuration for:
    - train.py
    - hpo.py
    - predict.py

    It prevents drift between scripts and makes runs reproducible.

    profile: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'local'[#](#scikitplot.mlflow.ProjectConfig.profile "Link to this definition")

    server: [ServerConfig](scikitplot.mlflow.ServerConfig.html#scikitplot.mlflow.ServerConfig "scikitplot.mlflow._config.ServerConfig") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.mlflow.ProjectConfig.server "Link to this definition")

    session: [SessionConfig](scikitplot.mlflow.SessionConfig.html#scikitplot.mlflow.SessionConfig "scikitplot.mlflow._config.SessionConfig") = SessionConfig(tracking\_uri=None, public\_tracking\_uri=None, registry\_uri=None, env\_file=None, extra\_env=None, startup\_timeout\_s=30.0, ensure\_reachable=False, experiment\_name=None, create\_experiment\_if\_missing=True, default\_run\_name=None, default\_run\_tags=None)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/mlflow/_config.py#L)[#](#scikitplot.mlflow.ProjectConfig.session "Link to this definition")

    start\_server: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.mlflow.ProjectConfig.start_server "Link to this definition")