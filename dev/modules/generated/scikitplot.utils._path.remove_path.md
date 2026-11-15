# remove\_path[#](#remove-path "Link to this heading")

scikitplot.utils.\_path.remove\_path(**paths=None**, **base\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/utils/_path.py#L928)[#](#scikitplot.utils._path.remove_path "Link to this definition")
:   Remove unwanted files or directories from a specified base path.

    Parameters:
    :   ****paths****List[str], optional
        :   A list of directory or file names to be removed.
            If these exist in the `base_path`, they will be deleted.
            (default [‘\_\_MACOSX’, ‘bank-additional’]).

        ****base\_path****str, optional
        :   The base directory where the unwanted paths will be removed from.
            If None, it defaults to the current working directory (cwd).

    Parameters:
    :   * ****paths**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****base\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   None

    Notes

    * It checks if the path exists before trying to remove it.
    * Uses `shutil.rmtree()` for directories and `os.remove()` for files.
    * Any exceptions raised during removal will be silently ignored.