# apply\_profile[#](#apply-profile "Link to this heading")

scikitplot.cython.apply\_profile(**\***, **profile**, **annotate=None**, **compiler\_directives**, **extra\_compile\_args**, **extra\_link\_args**, **language**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/cython/_profiles.py#L333)[#](#scikitplot.cython.apply_profile "Link to this definition")
:   Apply a profile with strict, three-state precedence.

    Every field follows the same contract:

    * The user passed an explicit value (not `None`) -> the user value wins.
    * The user left the value unset (`None`) -> the profile default applies.

    For `annotate` this is the precedence fix: the parameter is `bool | None`
    so “user did not specify” (`None`) is distinguishable from “user
    explicitly disabled” (`False`). Previously `annotate` was a plain
    `bool` defaulting to `False`, so the `"annotate"` profile – whose sole
    purpose is to enable annotation – could never take effect unless the caller
    **also** passed `annotate=True`, which defeated the profile.

    Parameters:
    :   ****profile****str or None
        :   Profile name, validated by [`resolve_profile`](scikitplot.cython.resolve_profile.html#scikitplot.cython.resolve_profile "scikitplot.cython.resolve_profile").

        ****annotate****bool or None, default=None
        :   `None` inherits the profile default; `True`/`False` are explicit
            and always win.

        ****compiler\_directives****Mapping[str, Any] or None
        :   `None` inherits the profile default; a mapping is merged on top of the
            profile default (user keys win).

        ****extra\_compile\_args****Sequence[str] or None
        :   `None` inherits the profile default; otherwise normalized to a tuple.

        ****extra\_link\_args****Sequence[str] or None
        :   `None` inherits the profile default; otherwise normalized to a tuple.

        ****language****{‘c’, ‘c++’} or None
        :   `None` inherits the profile default.

    Returns:
    :   AppliedProfile
        :   Named 5-tuple `(annotate, compiler_directives, extra_compile_args,
            extra_link_args, language)`. `extra_compile_args` and
            `extra_link_args` are always tuples (empty means “no flags”, never
            `None`); `compiler_directives` is `None` only when neither the
            profile nor the user supplied any.

    Parameters:
    :   * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****annotate**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)
        * ****compiler\_directives**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****extra\_compile\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****extra\_link\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   **AppliedProfile**

    Notes

    The result is an `AppliedProfile` (a `NamedTuple`), so positional
    unpacking remains identical to the historical bare-tuple return while adding
    named access. User-supplied flag sequences are normalized to tuples but
    otherwise forwarded verbatim; argument **safety** is enforced by the security
    layer at build time, not here.