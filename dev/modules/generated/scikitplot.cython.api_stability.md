# api\_stability[#](#api-stability "Link to this heading")

scikitplot.cython.api\_stability(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cython/_api.py#L183)[#](#scikitplot.cython.api_stability "Link to this definition")
:   Return the [`Stability`](scikitplot.cython.Stability.html#scikitplot.cython.Stability "scikitplot.cython.Stability") tier of a public API symbol.

    Parameters:
    :   ****name****str
        :   A public symbol name (must be in the package `__all__`).

    Returns:
    :   Stability
        :   The symbol’s stability tier.

    Raises:
    :   KeyError
        :   If `name` is not a public symbol of `scikitplot.cython`.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [**Stability**](scikitplot.cython.Stability.html#scikitplot.cython.Stability "scikitplot.cython._api.Stability")