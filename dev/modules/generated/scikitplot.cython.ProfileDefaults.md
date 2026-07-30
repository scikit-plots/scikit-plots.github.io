# ProfileDefaults[#](#profiledefaults "Link to this heading")

class scikitplot.cython.ProfileDefaults(**annotate=False**, **compiler\_directives=<factory>**, **extra\_compile\_args=<factory>**, **extra\_link\_args=<factory>**, **language=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/cython/_profiles.py#L80)[#](#scikitplot.cython.ProfileDefaults "Link to this definition")
:   Normalized defaults produced by resolving a profile.

    The instance is frozen and slotted: it is immutable and rejects attribute
    injection, so a resolved profile cannot be tampered with after creation.

    Parameters:
    :   ****annotate****bool, default=False
        :   Default for the Cython `annotate` flag.

        ****compiler\_directives****Mapping[str, Any]
        :   Default Cython compiler directives merged on top of the baseline.

        ****extra\_compile\_args****tuple of str
        :   Default compiler flags for the C/C++ compiler. Always a tuple.

        ****extra\_link\_args****tuple of str
        :   Default linker flags. Always a tuple.

        ****language****{‘c’, ‘c++’} or None, default=None
        :   Optional default language, or `None` to leave unspecified.

    Parameters:
    :   * ****annotate**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****compiler\_directives**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****extra\_compile\_args**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **...****]**)
        * ****extra\_link\_args**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **...****]**)
        * ****language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Notes

    Defaults exist only to satisfy documentation tooling that expects class
    attributes to be defaulted. The public API always returns fully-filled
    values produced by [`resolve_profile`](scikitplot.cython.resolve_profile.html#scikitplot.cython.resolve_profile "scikitplot.cython.resolve_profile").

    > **Note**
    > `slots=True` requires Python >= 3.10. The project’s
    `requires-python` floor should not be lowered below that without
    removing this argument.

    annotate: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.cython.ProfileDefaults.annotate "Link to this definition")
    :   !! processed by numpydoc !!

    compiler\_directives: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][#](#scikitplot.cython.ProfileDefaults.compiler_directives "Link to this definition")
    :   !! processed by numpydoc !!

    extra\_compile\_args: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...][#](#scikitplot.cython.ProfileDefaults.extra_compile_args "Link to this definition")
    :   !! processed by numpydoc !!

    extra\_link\_args: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...][#](#scikitplot.cython.ProfileDefaults.extra_link_args "Link to this definition")
    :   !! processed by numpydoc !!

    language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.ProfileDefaults.language "Link to this definition")
    :   !! processed by numpydoc !!