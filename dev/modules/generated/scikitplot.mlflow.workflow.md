# workflow[#](#workflow "Link to this heading")

scikitplot.mlflow.workflow(**\***, **profile='local'**, **open\_ui\_seconds=0.0**, **experiment\_name=None**, **fmt='toml'**, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/mlflow/_workflow.py#L373)[#](#scikitplot.mlflow.workflow "Link to this definition")
:   Run the built-in end-to-end MLflow workflow demo.

    This is a small, newbie-friendly helper that:

    1. Exports the library’s built-in demo config (TOML or YAML) into your project.
    2. Runs a small “train” logging run.
    3. Optionally keeps the UI open for inspection.
    4. Runs a small “predict” logging run.

    Parameters:
    :   ****profile****str, default=”local”
        :   Profile name inside the project config.

        ****open\_ui\_seconds****float, default=0.0
        :   If > 0, sleeps for this many seconds while the session is open, logging `ui_url`.

        ****experiment\_name****str or None, default=None
        :   If provided, patches the exported config to use this experiment name.

        ****fmt****{“toml”, “yaml”}, default=”toml”
        :   Which built-in demo config format to export.

        ****overwrite****bool, default=False
        :   Whether to overwrite existing project config files.

    Returns:
    :   WorkflowPaths
        :   Paths used during the workflow (project root, config dir, toml/yaml paths).

    Parameters:
    :   * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****open\_ui\_seconds**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****experiment\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****fmt**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**WorkflowPaths**](scikitplot.mlflow.WorkflowPaths.html#scikitplot.mlflow.WorkflowPaths "scikitplot.mlflow._workflow.WorkflowPaths")

    > **See also**
    > [`run_demo`](scikitplot.mlflow.run_demo.html#scikitplot.mlflow.run_demo "scikitplot.mlflow.run_demo")
    :   The implementation used by the CLI entry point.