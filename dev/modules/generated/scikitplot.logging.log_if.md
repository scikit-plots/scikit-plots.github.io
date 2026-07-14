# log\_if[#](#log-if "Link to this heading")

scikitplot.logging.log\_if(**level**, **msg**, **condition**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7b27db8/scikitplot/logging.py#L1575)[#](#scikitplot.logging.log_if "Link to this definition")
:   Log only if a condition is True.

    Parameters:
    :   ****level****int or str
        :   Logging level.

        ****msg****str
        :   Log message.

        ****condition****bool
        :   Condition that must be True to log.

        ****\*args****Any
        :   Message formatting args.

        ****\*\*kwargs****Any
        :   Passed to the underlying logger.

    Parameters:
    :   * ****level**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****msg**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****condition**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****args**** (**any**)
        * ****kwargs**** (**any**)

    Return type:
    :   None