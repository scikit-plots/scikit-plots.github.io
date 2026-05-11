# error\_log[#](#error-log "Link to this heading")

scikitplot.logging.error\_log(**error\_msg**, **\*args**, **level=40**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/logging.py#L1447)[#](#scikitplot.logging.error_log "Link to this definition")
:   Log an error-like message at a specified level.

    Parameters:
    :   ****error\_msg****str
        :   Message template.

        ****\*args****Any
        :   Message formatting args.

        ****level****int or str, optional
        :   Log level used for the message. Default is ERROR.

        ****\*\*kwargs****Any
        :   Passed to the underlying logger.

    Parameters:
    :   * ****args**** (**any**)
        * ****level**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****kwargs**** (**any**)

    Return type:
    :   None