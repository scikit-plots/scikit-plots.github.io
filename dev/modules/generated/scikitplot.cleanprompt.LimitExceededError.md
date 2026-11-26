# LimitExceededError[#](#limitexceedederror "Link to this heading")

exception scikitplot.cleanprompt.LimitExceededError(**message**, **limit\_name**, **limit**, **actual**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_exceptions.py#L154)[#](#scikitplot.cleanprompt.LimitExceededError "Link to this definition")
:   A policy limit was exceeded.

    Parameters:
    :   ****message****str
        :   Human-readable description.

        ****limit\_name****str
        :   Which limit was hit, for example `"max_input_chars"`.

        ****limit****int
        :   The configured bound.

        ****actual****int
        :   The observed value.

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****limit\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****limit**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****actual**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Return type:
    :   None

    Annotation:
    :   Unrecognized objtype: `exception`

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****limit\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****limit**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****actual**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Return type:
    :   None