# log\_if[#](#log-if "Link to this heading")

scikitplot.logging.log\_if(**level**, **msg**, **condition**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/logging/_logging.py#L1605)[#](#scikitplot.logging.log_if "Link to this definition")
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
    :   * ****level**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****msg**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****condition**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****args**** (**any**)
        * ****kwargs**** (**any**)

    Return type:
    :   None