# distribution\_version[#](#distribution-version "Link to this heading")

scikitplot.corpus.distribution\_version(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_capabilities.py#L111)[#](#scikitplot.corpus.distribution_version "Link to this definition")
:   Return the installed version of a distribution, or `None` if absent.

    Parameters:
    :   ****name****str
        :   Distribution (PyPI) name, e.g. `"numpy"`.

    Returns:
    :   str or None
        :   The version string, or `None` when the distribution is not installed
            (or its metadata cannot be read).

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | None