# MemoryArtifactStore[#](#memoryartifactstore "Link to this heading")

class scikitplot.agent.MemoryArtifactStore[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_artifacts.py#L114)[#](#scikitplot.agent.MemoryArtifactStore "Link to this definition")
:   Keep artifacts in memory, as their canonical JSON text.

    Examples

    Try it in your browser!
    ```
    >>> store = MemoryArtifactStore()
    >>> key = store.put({"rows": [1, 2, 3]})
    >>> store.get(key)
    {'rows': [1, 2, 3]}

    ```
    Go BackOpen In Tab

    get(**key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_artifacts.py#L79)[#](#scikitplot.agent.MemoryArtifactStore.get "Link to this definition")
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

    has(**key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_artifacts.py#L99)[#](#scikitplot.agent.MemoryArtifactStore.has "Link to this definition")
    :   Whether a value is stored under `key`.

        Parameters:
        :   ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    put(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_artifacts.py#L59)[#](#scikitplot.agent.MemoryArtifactStore.put "Link to this definition")
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