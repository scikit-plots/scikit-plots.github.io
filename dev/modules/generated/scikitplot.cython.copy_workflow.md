# copy\_workflow[#](#copy-workflow "Link to this heading")

scikitplot.cython.copy\_workflow(**name**, **\***, **dest\_dir**, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/cython/_templates_api.py#L720)[#](#scikitplot.cython.copy_workflow "Link to this definition")
:   Copy a workflow template folder to a destination directory.

    Parameters:
    :   ****name****str
        :   Workflow name.

        ****dest\_dir****str or pathlib.Path
        :   Destination directory. The workflow will be copied as
            `<dest_dir>/<name>/`.

        ****overwrite****bool, default=False
        :   If True, remove any existing destination folder first.

    Returns:
    :   pathlib.Path
        :   Path to the copied workflow directory.

    Raises:
    :   FileExistsError
        :   If destination exists and overwrite is False.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****dest\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_09_workflow_templates_cli_thumb.png)

[Workflow templates (train / hpo / predict) + CLI entry template](../../auto_examples/cython/plot_09_workflow_templates_cli.html)

Workflow templates (train / hpo / predict) + CLI entry template