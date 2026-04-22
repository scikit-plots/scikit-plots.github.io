# get\_workflow\_path[#](#get-workflow-path "Link to this heading")

scikitplot.cython.get\_workflow\_path(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/cython/_templates_api.py#L683)[#](#scikitplot.cython.get_workflow_path "Link to this definition")
:   Resolve a workflow name to its on-disk folder path.

    Parameters:
    :   ****name****str
        :   Workflow folder name.

    Returns:
    :   pathlib.Path
        :   Workflow directory path.

    Raises:
    :   FileNotFoundError
        :   If the workflow does not exist.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")