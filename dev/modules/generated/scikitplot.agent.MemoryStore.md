# MemoryStore[#](#memorystore "Link to this heading")

class scikitplot.agent.MemoryStore[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_store.py#L63)[#](#scikitplot.agent.MemoryStore "Link to this definition")
:   Keep states in memory, as their JSON text (so a load is a real round trip).

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import MemoryStore
    >>> MemoryStore().run_ids()
    ()

    ```
    Go BackOpen In Tab

    has(**run\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_store.py#L86)[#](#scikitplot.agent.MemoryStore.has "Link to this definition")
    :   Whether a state of `run_id` is kept.

        Parameters:
        :   ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    load(**run\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_store.py#L81)[#](#scikitplot.agent.MemoryStore.load "Link to this definition")
    :   Return the latest state of `run_id`.

        Parameters:
        :   ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**RunState**](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent._state.RunState")

    run\_ids()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_store.py#L90)[#](#scikitplot.agent.MemoryStore.run_ids "Link to this definition")
    :   Return the ids of the runs kept, sorted.

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    save(**state**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_store.py#L77)[#](#scikitplot.agent.MemoryStore.save "Link to this definition")
    :   Keep `state` as the latest state of its run.

        Parameters:
        :   ****state**** ([**RunState**](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent._state.RunState"))

        Return type:
        :   None