# check\_build\_prereqs[#](#check-build-prereqs "Link to this heading")

scikitplot.cython.check\_build\_prereqs(**\***, **numpy=False**, **pybind11=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/cython/_public.py#L341)[#](#scikitplot.cython.check_build_prereqs "Link to this definition")
:   Check whether build prerequisites are importable.

    Parameters:
    :   ****numpy****bool, default=False
        :   If True, also check NumPy availability.

        ****pybind11****bool, default=False
        :   If True, also check pybind11 availability (Scenario 3 & 4).

    Returns:
    :   dict[str, Any]
        :   Keys: `cython`, `setuptools`, optionally `numpy`,
            `pybind11`. Each value: `{"ok": bool, "version": str}`.

    Parameters:
    :   * ****numpy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****pybind11**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    ****Newbie**** (Scenarios 1 & 2): run this to understand your environment.
    ****Pro/master**** (Scenarios 3-5): use the scenario-specific helpers in
    `scikitplot.cython._custom_compiler` for targeted checks.

    Examples

    Try it in your browser!
    ```
    >>> result = check_build_prereqs()
    >>> "cython" in result and "setuptools" in result
    True
    >>> result = check_build_prereqs(numpy=True, pybind11=True)
    >>> all(k in result for k in ("cython", "setuptools", "numpy", "pybind11"))
    True

    ```
    Go BackOpen In Tab