# LeakError[#](#leakerror "Link to this heading")

exception scikitplot.cleanprompt.LeakError(**message**, **kinds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_exceptions.py#L217)[#](#scikitplot.cleanprompt.LeakError "Link to this definition")
:   Outgoing text still holds a value the vault removed; it was not sent.

    Parameters:
    :   ****message****str
        :   Human-readable description. Names kinds and counts, never a value.

        ****kinds****tuple of str
        :   The kinds of the values found, one entry per distinct value.

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kinds**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)

    Return type:
    :   None

    Notes

    ****User notes.**** Raised by [`outgoing`](scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard.outgoing "scikitplot.cleanprompt.Guard.outgoing")
    **before** anything reaches a model. It means the final check found a value
    the encoding step should have hidden — usually because `remember` was
    turned off and the value recurred where no rule looks. Nothing was sent.

    Annotation:
    :   Unrecognized objtype: `exception`

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kinds**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)

    Return type:
    :   None