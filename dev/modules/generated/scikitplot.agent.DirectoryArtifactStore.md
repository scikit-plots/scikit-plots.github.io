# DirectoryArtifactStore[#](#directoryartifactstore "Link to this heading")

class scikitplot.agent.DirectoryArtifactStore(**directory**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_artifacts.py#L136)[#](#scikitplot.agent.DirectoryArtifactStore "Link to this definition")
:   Keep each artifact in `<directory>/<first two digits>/<digest>.json`.

    Parameters:
    :   ****directory****str or os.PathLike
        :   Created if missing.

    Parameters:
    :   ****directory**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**os.PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Notes

    Written like [`JsonFileStore`](scikitplot.agent.JsonFileStore.html#scikitplot.agent.JsonFileStore "scikitplot.agent.JsonFileStore"): a temporary file
    in the same directory, synced, renamed into place and the directory
    synced, so a reader sees a whole artifact or none. The digest is checked
    to be 64 hexadecimal digits before it names a file.

    get(**key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_artifacts.py#L79)[#](#scikitplot.agent.DirectoryArtifactStore.get "Link to this definition")
    :   Return the value stored under `key`.

        Raises:
        :   KeyError
            :   If nothing is stored under `key`.

            StateError
            :   If what is stored does not have digest `key`.

        Parameters:
        :   ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    has(**key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_artifacts.py#L181)[#](#scikitplot.agent.DirectoryArtifactStore.has "Link to this definition")
    :   Whether a file is stored under `key`.

        Parameters:
        :   ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    path(**key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_artifacts.py#L157)[#](#scikitplot.agent.DirectoryArtifactStore.path "Link to this definition")
    :   Return the file that holds `key`.

        Parameters:
        :   ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")

    put(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_artifacts.py#L59)[#](#scikitplot.agent.DirectoryArtifactStore.put "Link to this definition")
    :   Store `value` and return its digest.

        Parameters:
        :   ****value****object
            :   A JSON value (`plain`).

        Returns:
        :   str
            :   64 hexadecimal digits.

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")