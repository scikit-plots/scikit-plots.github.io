# StateStore[#](#statestore "Link to this heading")

class scikitplot.agent.StateStore[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_store.py#L37)[#](#scikitplot.agent.StateStore "Link to this definition")
:   Saves and loads run states. Subclasses implement both methods.

    has(**run\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_store.py#L48)[#](#scikitplot.agent.StateStore.has "Link to this definition")
    :   Whether a state of `run_id` is kept.

        Parameters:
        :   ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    load(**run\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_store.py#L44)[#](#scikitplot.agent.StateStore.load "Link to this definition")
    :   Return the latest state of `run_id`; raise `KeyError` if none.

        Parameters:
        :   ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**RunState**](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent._state.RunState")

    save(**state**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_store.py#L40)[#](#scikitplot.agent.StateStore.save "Link to this definition")
    :   Keep `state` as the latest state of its run.

        Parameters:
        :   ****state**** ([**RunState**](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent._state.RunState"))

        Return type:
        :   None