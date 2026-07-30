# run\_demo[#](#run-demo "Link to this heading")

scikitplot.mlflow.run\_demo(**\***, **profile='local'**, **project\_root=None**, **open\_ui\_seconds=10.0**, **experiment\_name=None**, **fmt='toml'**, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d0ea3951/scikitplot/mlflow/_workflow.py#L211)[#](#scikitplot.mlflow.run_demo "Link to this definition")
:   Run a beginner-friendly end-to-end demo workflow.

    The workflow demonstrates:

    1. Export demo config shipped in the library into **your** project.
    2. Optionally customize the config (experiment name).
    3. Start a session and log a “train” run.
    4. Export project config to YAML (backup / editable format).
    5. Re-open session from YAML and keep UI open briefly.
    6. Start a “predict” run.

    Parameters:
    :   ****profile****str, default=”local”
        :   Profile name in the config file.

        ****project\_root****pathlib.Path or None, default=None
        :   Project root. If None, auto-detected.

        ****open\_ui\_seconds****float, default=10.0
        :   How long to keep the UI reachable (sleep) in the “UI check” step.
            Set to 0 to skip sleeping.

        ****experiment\_name****str or None, default=None
        :   If provided, patch the exported config to use this experiment name.

        ****fmt****{“toml”, “yaml”}, default=”toml”
        :   Which built-in config format to export initially.

        ****overwrite****bool, default=False
        :   Overwrite existing config files in the project.

    Returns:
    :   WorkflowPaths
        :   Paths used in the workflow.

    Raises:
    :   ImportError
        :   If MLflow is not installed when attempting to start a session.

    Parameters:
    :   * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****project\_root**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****open\_ui\_seconds**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****experiment\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****fmt**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**WorkflowPaths**](scikitplot.mlflow.WorkflowPaths.html#scikitplot.mlflow.WorkflowPaths "scikitplot.mlflow._workflow.WorkflowPaths")