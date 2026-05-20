# get\_package\_example\_path[#](#get-package-example-path "Link to this heading")

scikitplot.cython.get\_package\_example\_path(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c2567fd/scikitplot/cython/_templates_api.py#L783)[#](#scikitplot.cython.get_package_example_path "Link to this definition")
:   Resolve a package example name to its on-disk folder path.

    Parameters:
    :   ****name****str
        :   Package example folder name.

    Returns:
    :   pathlib.Path
        :   Package example directory path.

    Raises:
    :   FileNotFoundError
        :   If the package example does not exist.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")