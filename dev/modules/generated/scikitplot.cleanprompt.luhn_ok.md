# luhn\_ok[#](#luhn-ok "Link to this heading")

scikitplot.cleanprompt.luhn\_ok(**digits**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_patterns.py#L147)[#](#scikitplot.cleanprompt.luhn_ok "Link to this definition")
:   Return whether `digits` satisfies the Luhn checksum.

    Parameters:
    :   ****digits****str
        :   A string of decimal digits, already stripped of separators.

    Returns:
    :   bool
        :   `True` when the Luhn check passes and the length is plausible for a
            payment card (12 to 19 digits).

    Parameters:
    :   ****digits**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    Notes

    ****Developer notes.**** Luhn is a transcription-error check, not a validity
    proof: it rejects roughly 90 percent of random digit runs, which is enough
    to keep order numbers and long identifiers out of the card category while
    never rejecting a genuine card.

    Examples

    Try it in your browser!
    ```
    >>> luhn_ok("4242424242424242")
    True
    >>> luhn_ok("4242424242424241")
    False

    ```
    Go BackOpen In Tab