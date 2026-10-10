# Item[#](#item "Link to this heading")

class scikitplot.cleanprompt.Item(**status**, **relative**, **format=None**, **output=None**, **reason=''**, **count=0**, **kinds=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L236)[#](#scikitplot.cleanprompt.Item "Link to this definition")
:   What happened to one file of a folder or archive.

    Parameters:
    :   ****status****{‘encoded’, ‘decoded’, ‘skipped’, ‘refused’}
        :   `skipped`: no selected format reads it, or it is a link or a
            version-control folder. `refused`: it could not be read safely.
            Neither is written to the output.

        ****relative****str
        :   Its path relative to the folder or archive root, with `/`.

        ****format****str or None
        :   The format that read it.

        ****output****str or None
        :   Where it was written, relative to the output root.

        ****reason****str
        :   Why it was skipped or refused; empty otherwise.

        ****count****int
        :   Distinct values replaced.

        ****kinds****dict
        :   Distinct values replaced, by kind.

    Parameters:
    :   * ****status**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****relative**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****output**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****kinds**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)

    count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.cleanprompt.Item.count "Link to this definition")

    format: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.Item.format "Link to this definition")

    kinds: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L236)[#](#scikitplot.cleanprompt.Item.kinds "Link to this definition")

    output: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.Item.output "Link to this definition")

    reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.cleanprompt.Item.reason "Link to this definition")

    relative: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L236)[#](#scikitplot.cleanprompt.Item.relative "Link to this definition")

    status: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L236)[#](#scikitplot.cleanprompt.Item.status "Link to this definition")