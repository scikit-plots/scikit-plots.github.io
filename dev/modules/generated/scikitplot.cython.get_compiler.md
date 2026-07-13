# get\_compiler[#](#get-compiler "Link to this heading")

scikitplot.cython.get\_compiler(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/cython/_custom_compiler.py#L378)[#](#scikitplot.cython.get_compiler "Link to this definition")
:   Retrieve a registered custom compiler by name.

    Parameters:
    :   ****name****str
        :   Compiler name.

    Returns:
    :   CustomCompilerProtocol
        :   The registered compiler callable.

    Raises:
    :   KeyError
        :   If no compiler with that name is registered.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**CustomCompilerProtocol**](scikitplot.cython.CustomCompilerProtocol.html#scikitplot.cython.CustomCompilerProtocol "scikitplot.cython._custom_compiler.CustomCompilerProtocol")