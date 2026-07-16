# resolve\_pinned\_key[#](#resolve-pinned-key "Link to this heading")

scikitplot.cython.resolve\_pinned\_key(**alias**, **\***, **cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/cython/_pins.py#L213)[#](#scikitplot.cython.resolve_pinned_key "Link to this definition")
:   Resolve an alias to a cache key.

    Parameters:
    :   ****alias****str
        :   Alias name.

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root. If None, uses the default cache location.

    Returns:
    :   str
        :   Cache key.

    Raises:
    :   KeyError
        :   If alias is not pinned.

        ValueError
        :   If alias is invalid.

    Parameters:
    :   * ****alias**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")