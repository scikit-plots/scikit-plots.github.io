# JsonFileStore[#](#jsonfilestore "Link to this heading")

class scikitplot.agent.JsonFileStore(**directory**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_store.py#L106)[#](#scikitplot.agent.JsonFileStore "Link to this definition")
:   Keep each run’s state in `<directory>/<run_id>.json`.

    Parameters:
    :   ****directory****str or os.PathLike
        :   Created if missing.

    Parameters:
    :   ****directory**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**os.PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Notes

    A save writes a temporary file in the same directory, syncs it, renames
    it over the old one ([`os.replace`](https://docs.python.org/3/library/os.html#os.replace "(in Python v3.15)")) and syncs the directory, so a
    reader sees the old state or the new one, never a partial file, and the
    new one survives a power loss once `save` returns. The run id is checked to be 64 hexadecimal
    digits before it names a file, so it cannot name one outside
    `directory`.

    has(**run\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_store.py#L164)[#](#scikitplot.agent.JsonFileStore.has "Link to this definition")
    :   Whether a state file of `run_id` exists.

        Parameters:
        :   ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    load(**run\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_store.py#L151)[#](#scikitplot.agent.JsonFileStore.load "Link to this definition")
    :   Read `run_id`’s state.

        Parameters:
        :   ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**RunState**](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent._state.RunState")

    path(**run\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_store.py#L129)[#](#scikitplot.agent.JsonFileStore.path "Link to this definition")
    :   Return the file that holds `run_id`’s state.

        Parameters:
        :   ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")

    run\_ids()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_store.py#L168)[#](#scikitplot.agent.JsonFileStore.run_ids "Link to this definition")
    :   Return the ids of the runs kept, sorted.

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    save(**state**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_store.py#L133)[#](#scikitplot.agent.JsonFileStore.save "Link to this definition")
    :   Write `state` atomically.

        Parameters:
        :   ****state**** ([**RunState**](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent._state.RunState"))

        Return type:
        :   None