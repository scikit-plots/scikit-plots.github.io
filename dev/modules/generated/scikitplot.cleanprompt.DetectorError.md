# DetectorError[#](#detectorerror "Link to this heading")

exception scikitplot.cleanprompt.DetectorError(**message**, **detector**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_exceptions.py#L79)[#](#scikitplot.cleanprompt.DetectorError "Link to this definition")
:   A detector raised while scanning.

    Parameters:
    :   ****message****str
        :   Human-readable description.

        ****detector****str
        :   Name of the detector that failed. Carried separately so a caller can
            disable exactly that detector and retry.

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****detector**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   None

    Annotation:
    :   Unrecognized objtype: `exception`

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****detector**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   None