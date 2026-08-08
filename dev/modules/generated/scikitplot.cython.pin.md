# pin[#](#pin "Link to this heading")

scikitplot.cython.pin(**key**, **\***, **alias**, **cache\_dir=None**, **overwrite=False**, **lock\_timeout\_s=60.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/cython/_pins.py#L161)[#](#scikitplot.cython.pin "Link to this definition")
:   Pin a cache key under a human-friendly alias.

    Parameters:
    :   ****key****str
        :   Cache key (64 hex chars).

        ****alias****str
        :   Alias name (identifier-like).

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root. If None, uses the default cache location.

        ****overwrite****bool, default=False
        :   If False, collisions raise ValueError. If True, overwrite existing mapping.

        ****lock\_timeout\_s****float, default=60.0
        :   Max seconds to wait for the pin registry lock.

    Returns:
    :   str
        :   The pinned key.

    Raises:
    :   ValueError
        :   If alias/key are invalid or a collision occurs without overwrite.

    Parameters:
    :   * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****alias**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****lock\_timeout\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")