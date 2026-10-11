# PackError[#](#packerror "Link to this heading")

exception scikitplot.cleanprompt.PackError(**source**, **problems**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_packs.py#L170)[#](#scikitplot.cleanprompt.PackError "Link to this definition")
:   A pack document is invalid.

    Parameters:
    :   ****source****str
        :   Where the document came from — a file name, or `'<builtin>'`.

        ****problems****iterable of str
        :   Every problem found, in document order.

    Parameters:
    :   * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****problems**** (**Iterable****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Return type:
    :   None

    Notes

    ****Developer notes.**** All problems travel together. The message is written
    for the person editing the file: one line per problem, each naming the
    path inside the document.

    Annotation:
    :   Unrecognized objtype: `exception`

    Parameters:
    :   * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****problems**** (**Iterable****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Return type:
    :   None