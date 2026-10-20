# uuid7\_unix\_ms[#](#uuid7-unix-ms "Link to this heading")

scikitplot.corpus.uuid7\_unix\_ms(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_identity.py#L366)[#](#scikitplot.corpus.uuid7_unix_ms "Link to this definition")
:   Return the Unix time in milliseconds that a UUID version 7 carries.

    Parameters:
    :   ****value****uuid.UUID or str
        :   A version-7 identifier, or its text form.

    Returns:
    :   int
        :   The 48-bit `unix_ts_ms` field (RFC 9562, section 5.7).

    Raises:
    :   ValueError
        :   If `value` is not a UUID, or not version 7 with the RFC 9562 variant.

        TypeError
        :   If `value` is neither a [`uuid.UUID`](https://docs.python.org/3/library/uuid.html#uuid.UUID "(in Python v3.15)") nor a `str`.

    Parameters:
    :   ****value**** ([**UUID**](https://docs.python.org/3/library/uuid.html#uuid.UUID "(in Python v3.15)") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    Examples

    Try it in your browser!

    The test vector of RFC 9562, appendix A.6 (2022-02-22 19:22:22 UTC):

    ```
    >>> uuid7_unix_ms("017f22e2-79b0-7cc3-98c4-dc0c0c07398f")
    1645557742000

    ```
    Go BackOpen In Tab