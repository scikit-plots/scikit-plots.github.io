# BlockedError[#](#blockederror "Link to this heading")

exception scikitplot.cleanprompt.BlockedError(**message**, **kinds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_exceptions.py#L194)[#](#scikitplot.cleanprompt.BlockedError "Link to this definition")
:   The text holds a value of a kind whose action is `block`; nothing was returned.

    Parameters:
    :   ****message****str
        :   Human-readable description. Names kinds and counts, never a value.

        ****kinds****dict of str to int
        :   Each blocked kind and how many values of it the text holds.

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kinds**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)

    Return type:
    :   None

    Notes

    ****User notes.**** Raised before any output exists, so a blocked document is
    never partly written: `batch` reports the file as refused and continues.
    Remove the value, or change the kind’s action (`--action KIND=tokenize`).

    Annotation:
    :   Unrecognized objtype: `exception`

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kinds**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)

    Return type:
    :   None