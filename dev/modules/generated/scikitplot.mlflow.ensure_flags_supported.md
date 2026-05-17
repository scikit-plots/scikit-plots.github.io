# ensure\_flags\_supported[#](#ensure-flags-supported "Link to this heading")

scikitplot.mlflow.ensure\_flags\_supported(**args**, **\***, **supported\_flags**, **context**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dff5f00/scikitplot/mlflow/_cli_caps.py#L115)[#](#scikitplot.mlflow.ensure_flags_supported "Link to this definition")
:   Validate that all long-form CLI flags in `args` are supported.

    Parameters:
    :   ****args****Sequence[str]
        :   CLI argument list.

        ****supported\_flags****frozenset[str]
        :   Set of supported long flags.

        ****context****str
        :   Context string used in error messages.

    Raises:
    :   MlflowCliIncompatibleError
        :   If an unsupported flag is found.

    Parameters:
    :   * ****args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****supported\_flags**** ([**frozenset**](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****context**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   None

    Notes

    Deterministic rules:
    - Any token starting with “–” is treated as a flag token.
    - If the token contains “=”, only the part before “=” is the flag name.
    - Unknown flags raise immediately (fail-fast).