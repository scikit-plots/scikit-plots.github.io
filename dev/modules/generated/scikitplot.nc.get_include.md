# get\_include[#](#get-include "Link to this heading")

scikitplot.nc.get\_include()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/nc/__init__.py#L48)[#](#scikitplot.nc.get_include "Link to this definition")
:   Return the absolute path to the NumCpp C++ headers include directory.

    Returns:
    :   str
        :   Path to the directory containing C and C++ header files.

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    Notes

    When using `setuptools`, for example in `setup.py`:

    ```
    import scikitplot.nc as nc
    ...
    Extension('extension_name', ...
              include_dirs=nc.[get_include()])
    ...

    ```

    Examples

    Try it in your browser!
    ```
    >>> import scikitplot.nc as nc
    >>> nc.get_include()
    '/path/to/scikitplot/cexternals/_numcpp/include'  # may vary

    ```
    ```
    >>> import importlib.resources
    >>> import pathlib
    >>> include_dir = (
    ...     pathlib.Path(importlib.resources.files("scikitplot.cexternals._numcpp"))
    ...     / "include"
    ... )

    ```
    Go BackOpen In Tab