# PatternTimeoutError[#](#patterntimeouterror "Link to this heading")

exception scikitplot.cleanprompt.PatternTimeoutError(**message**, **detector**, **pack**, **kind**, **seconds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_exceptions.py#L97)[#](#scikitplot.cleanprompt.PatternTimeoutError "Link to this definition")
:   A custom pack pattern ran past the pattern time limit on one document.

    Parameters:
    :   ****message****str
        :   Human-readable description. Names the pack and the kind, never the
            text being scanned.

        ****detector****str
        :   The detector, `pack:NAME:KIND`.

        ****pack****str
        :   The pack the pattern came from.

        ****kind****str
        :   The pattern’s kind.

        ****seconds****float
        :   The limit that was exceeded.

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****detector**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****pack**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    Return type:
    :   None

    Notes

    ****User notes.**** The document is not cleaned: nothing is returned for it,
    so nothing half-redacted can be sent. Rewrite the pattern (`doctor` and
    the pattern-risk check say which shapes backtrack), raise the limit, or
    leave the pack out.

    Annotation:
    :   Unrecognized objtype: `exception`

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****detector**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****pack**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    Return type:
    :   None