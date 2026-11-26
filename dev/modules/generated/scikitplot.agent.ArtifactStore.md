# ArtifactStore[#](#artifactstore "Link to this heading")

class scikitplot.agent.ArtifactStore[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/agent/_artifacts.py#L51)[#](#scikitplot.agent.ArtifactStore "Link to this definition")
:   Keeps JSON values under the digest of their canonical form.

    Subclasses implement `_write` and `_read`; the digest and its
    check are done here, once.

    get(**key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/agent/_artifacts.py#L79)[#](#scikitplot.agent.ArtifactStore.get "Link to this definition")
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

    has(**key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/agent/_artifacts.py#L99)[#](#scikitplot.agent.ArtifactStore.has "Link to this definition")
    :   Whether a value is stored under `key`.

        Parameters:
        :   ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    put(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/agent/_artifacts.py#L59)[#](#scikitplot.agent.ArtifactStore.put "Link to this definition")
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