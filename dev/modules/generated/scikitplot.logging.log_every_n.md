# log\_every\_n[#](#log-every-n "Link to this heading")

scikitplot.logging.log\_every\_n(**level**, **msg**, **n**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/logging/_logging.py#L1650)[#](#scikitplot.logging.log_every_n "Link to this definition")
:   Log once per **n** calls from the same call site.

    Log ‘msg % args’ at level ‘level’ once per ‘n’ times.

    Logs the 1st call, (N+1)st call, (2N+1)st call, etc.
    Not threadsafe.

    Parameters:
    :   ****level****int or str
        :   Logging level.

        ****msg****str
        :   Message template.

        ****n****int
        :   Log period. Must be >= 1.

        ****\*args****Any
        :   Message formatting args.

        ****\*\*kwargs****Any
        :   Passed to the underlying logger.

    Raises:
    :   ValueError
        :   If `n < 1`.

    Parameters:
    :   * ****level**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****msg**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****n**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****args**** (**any**)
        * ****kwargs**** (**any**)

    Return type:
    :   None