# apply\_profile[#](#apply-profile "Link to this heading")

scikitplot.cython.apply\_profile(**\***, **profile**, **annotate**, **compiler\_directives**, **extra\_compile\_args**, **extra\_link\_args**, **language**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/cython/_profiles.py#L180)[#](#scikitplot.cython.apply_profile "Link to this definition")
:   Apply a profile with strict precedence rules.

    * If an explicit argument is provided by the user, it is kept unchanged.
    * Otherwise, the profile default is applied.

    Parameters:
    :   ****profile****str or None
        :   Profile name.

        ****annotate****bool
        :   User-provided annotate flag.

        ****compiler\_directives****Mapping[str, Any] or None
        :   User-provided compiler directives.

        ****extra\_compile\_args****Sequence[str] or None
        :   User-provided compiler args.

        ****extra\_link\_args****Sequence[str] or None
        :   User-provided link args.

        ****language****{‘c’, ‘c++’} or None
        :   User-provided language.

    Returns:
    :   tuple
        :   (annotate, compiler\_directives, extra\_compile\_args, extra\_link\_args, language)
            with profile defaults applied where the user did not specify a value.

    Parameters:
    :   * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****annotate**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****compiler\_directives**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****extra\_compile\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****extra\_link\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"), [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")] | None, [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | None, [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | None, [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | None]