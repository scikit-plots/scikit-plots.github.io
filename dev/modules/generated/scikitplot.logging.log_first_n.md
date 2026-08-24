# log\_first\_n[#](#log-first-n "Link to this heading")

scikitplot.logging.log\_first\_n(**level**, **msg**, **n**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/logging.py#L1664)[#](#scikitplot.logging.log_first_n "Link to this definition")
:   Log only for the first **n** calls from the same call site.

    Log ‘msg % args’ at level ‘level’ only first ‘n’ times.

    Not threadsafe.

    Parameters:
    :   ****level****int or str
        :   Logging level.

        ****msg****str
        :   Message template.

        ****n****int
        :   Number of initial calls to emit. Must be >= 1.

        ****\*args****Any
        :   Message formatting args.

        ****\*\*kwargs****Any
        :   Passed to the underlying logger.

    Raises:
    :   ValueError
        :   If `n < 1`.

    Parameters:
    :   * ****level**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****msg**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****n**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****args**** (**any**)
        * ****kwargs**** (**any**)

    Return type:
    :   None