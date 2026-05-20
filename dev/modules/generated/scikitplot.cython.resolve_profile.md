# resolve\_profile[#](#resolve-profile "Link to this heading")

scikitplot.cython.resolve\_profile(**profile**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/cython/_profiles.py#L91)[#](#scikitplot.cython.resolve_profile "Link to this definition")
:   Resolve a profile name to deterministic defaults.

    Parameters:
    :   ****profile****str or None
        :   One of: `"fast-debug"`, `"release"`, `"annotate"`, or None.

    Returns:
    :   ProfileDefaults
        :   Deterministic defaults for the requested profile.

    Raises:
    :   ValueError
        :   If `profile` is not recognized.

    Parameters:
    :   ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ProfileDefaults**](scikitplot.cython.ProfileDefaults.html#scikitplot.cython.ProfileDefaults "scikitplot.cython._profiles.ProfileDefaults")