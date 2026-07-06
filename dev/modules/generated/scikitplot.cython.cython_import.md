# cython\_import[#](#cython-import "Link to this heading")

scikitplot.cython.cython\_import(**pyx\_path**, **\***, **module\_name=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/cython/_public.py#L473)[#](#scikitplot.cython.cython_import "Link to this definition")
:   Compile/import a Cython module from a `.pyx` file and return the loaded module.

    Parameters:
    :   * ****pyx\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

    Return type:
    :   [**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")