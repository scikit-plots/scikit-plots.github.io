# Route[#](#route "Link to this heading")

class scikitplot.\_ipymagic.Route(**command**, **delegated**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_bridge.py#L120)[#](#scikitplot._ipymagic.Route "Link to this definition")
:   Which command an argument list names, and whether the CLI delegates it.

    Parameters:
    :   ****command****str or None
        :   Canonical command name; None when the arguments name none (root
            `--help`, `--version`, or an unknown root option the CLI reports).

        ****delegated****bool
        :   The command is a pass-through to a submodule’s own CLI.

    Parameters:
    :   * ****command**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****delegated**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    command: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_bridge.py#L120)[#](#scikitplot._ipymagic.Route.command "Link to this definition")

    delegated: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_bridge.py#L120)[#](#scikitplot._ipymagic.Route.delegated "Link to this definition")