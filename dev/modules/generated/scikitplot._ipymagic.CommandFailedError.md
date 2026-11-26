# CommandFailedError[#](#commandfailederror "Link to this heading")

exception scikitplot.\_ipymagic.CommandFailedError(**message**, **\***, **result**, **hint=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/_ipymagic/_errors.py#L98)[#](#scikitplot._ipymagic.CommandFailedError "Link to this definition")
:   A command exited with a non-zero status (raised only when asked to).

    Parameters:
    :   ****message****str
        :   What failed.

        ****result****CommandResult
        :   The full result (exit status, output, timing).

        ****hint****str or None, default=None
        :   What to do about it.

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****result**** (**Any**)
        * ****hint**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   None

    Annotation:
    :   Unrecognized objtype: `exception`

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****result**** (**Any**)
        * ****hint**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   None