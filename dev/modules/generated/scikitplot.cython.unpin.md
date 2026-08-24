# unpin[#](#unpin "Link to this heading")

scikitplot.cython.unpin(**alias**, **\***, **cache\_dir=None**, **lock\_timeout\_s=60.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/cython/_pins.py#L224)[#](#scikitplot.cython.unpin "Link to this definition")
:   Remove an alias pin.

    Parameters:
    :   ****alias****str
        :   Alias to remove.

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root. If None, uses the default cache location.

        ****lock\_timeout\_s****float, default=60.0
        :   Max seconds to wait for the pin registry lock.

    Returns:
    :   bool
        :   True if the alias existed and was removed, otherwise False.

    Parameters:
    :   * ****alias**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****lock\_timeout\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))

    Return type:
    :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")