# AppliedProfile[#](#appliedprofile "Link to this heading")

class scikitplot.cython.AppliedProfile(**annotate**, **compiler\_directives**, **extra\_compile\_args**, **extra\_link\_args**, **language**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cython/_profiles.py#L135)[#](#scikitplot.cython.AppliedProfile "Link to this definition")
:   Result of applying a profile with user-precedence rules.

    This is the return type of [`apply_profile`](scikitplot.cython.apply_profile.html#scikitplot.cython.apply_profile "scikitplot.cython.apply_profile"). It is a
    [`typing.NamedTuple`](https://docs.python.org/3/library/typing.html#typing.NamedTuple "(in Python v3.15)"), so it is fully backward-compatible with the
    historical 5-tuple return (positional unpacking
    `annotate, directives, cargs, largs, lang = apply_profile(...)` still
    works) while also exposing named, self-documenting fields and remaining
    immutable.

    Parameters:
    :   ****annotate****bool
        :   Resolved Cython `annotate` flag.

        ****compiler\_directives****dict[str, Any] or None
        :   Resolved Cython directives, or `None` to fall back to Cython defaults.

        ****extra\_compile\_args****tuple of str
        :   Resolved compiler flags. Always a tuple (possibly empty), never
            `None` – empty means “no extra flags”.

        ****extra\_link\_args****tuple of str
        :   Resolved linker flags. Always a tuple (possibly empty), never `None`.

        ****language****{‘c’, ‘c++’} or None
        :   Resolved language, or `None` to leave unspecified.

    Parameters:
    :   * ****annotate**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****compiler\_directives**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****extra\_compile\_args**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****extra\_link\_args**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Notes

    Prefer named-field access (`result.extra_compile_args`) in new code.
    Positional unpacking of all five fields remains supported for existing
    callers, but if a sixth field is ever appended, fixed-arity unpackers
    (`a, b, c, d, e = ...`) must migrate to named access or `*rest`.

    annotate: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.AppliedProfile.annotate "Link to this definition")
    :   Alias for field number 0

    compiler\_directives: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.AppliedProfile.compiler_directives "Link to this definition")
    :   Alias for field number 1

    count(**value**, **/**)[#](#scikitplot.cython.AppliedProfile.count "Link to this definition")
    :   Return number of occurrences of value.

    extra\_compile\_args: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.AppliedProfile.extra_compile_args "Link to this definition")
    :   Alias for field number 2

    extra\_link\_args: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.AppliedProfile.extra_link_args "Link to this definition")
    :   Alias for field number 3

    index(**value**, **start=0**, **stop=sys.maxsize**, **/**)[#](#scikitplot.cython.AppliedProfile.index "Link to this definition")
    :   Return first index of value.

        Raises ValueError if the value is not present.

    language: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.AppliedProfile.language "Link to this definition")
    :   Alias for field number 4