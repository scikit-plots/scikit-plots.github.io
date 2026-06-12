# cython\_import\_result[#](#cython-import-result "Link to this heading")

scikitplot.cython.cython\_import\_result(**pyx\_path**, **\***, **module\_name=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/576badd/scikitplot/cython/_public.py#L436)[#](#scikitplot.cython.cython_import_result "Link to this definition")
:   Compile/import a Cython module from a `.pyx` file.

    Parameters:
    :   ****pyx\_path****path-like
        :   Path to a `.pyx` file.

        ****module\_name****str or None, default=None
        :   Module name override. If None, derived deterministically from file content.

        ****\*\*kwargs****
        :   Passed to [`compile_and_load_result`](scikitplot.cython.compile_and_load_result.html#scikitplot.cython.compile_and_load_result "scikitplot.cython.compile_and_load_result"). The file’s parent directory is
            automatically included in include paths.

    Returns:
    :   scikitplot.cython.BuildResult
        :   Build result.

    Parameters:
    :   * ****pyx\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

    Return type:
    :   [**BuildResult**](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult")