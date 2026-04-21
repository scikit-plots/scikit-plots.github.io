# SecurityError[#](#securityerror "Link to this heading")

exception scikitplot.cython.SecurityError(**message**, **\***, **field=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/cython/_security.py#L139)[#](#scikitplot.cython.SecurityError "Link to this definition")
:   Raised when a build input violates the active [`SecurityPolicy`](scikitplot.cython.SecurityPolicy.html#scikitplot.cython.SecurityPolicy "scikitplot.cython.SecurityPolicy").

    Inherits from [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.14)") so callers that catch `ValueError`
    continue to work without modification.

    Parameters:
    :   ****message****str
        :   Human-readable description of the violation.

        ****field****str or None
        :   Name of the build parameter that triggered the violation.

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****field**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   None

    Notes

    Do NOT catch [`SecurityError`](#scikitplot.cython.SecurityError "scikitplot.cython.SecurityError") generically and continue — treat it as
    a hard stop. The error message always describes **what** violated **which**
    rule so developers can fix inputs rather than silencing errors.

    Annotation:
    :   Unrecognized objtype: `exception`

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****field**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   None