# CapabilityError[#](#capabilityerror "Link to this heading")

exception scikitplot.cleanprompt.CapabilityError(**message**, **tier**, **status**, **install\_hint=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_exceptions.py#L241)[#](#scikitplot.cleanprompt.CapabilityError "Link to this definition")
:   An optional tier is not usable in this environment.

    Parameters:
    :   ****message****str
        :   Human-readable description, including the actionable install command.

        ****tier****str
        :   The tier name, for example `"ner"`.

        ****status****str
        :   A [`CapabilityStatus`](scikitplot.cleanprompt.CapabilityStatus.html#scikitplot.cleanprompt.CapabilityStatus "scikitplot.cleanprompt._capabilities.CapabilityStatus") value.

        ****install\_hint****str, optional
        :   The exact command that would make the tier available.

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****tier**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****status**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****install\_hint**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   None

    Notes

    ****Developer notes.**** This subclasses [`ImportError`](https://docs.python.org/3/builtins/exceptions.html#ImportError "(in Python v3.15)") so that existing
    `except ImportError` fallbacks around optional features keep working, while
    `except CapabilityError` gives the richer report. `status` preserves the
    `BROKEN` versus `ABSENT` distinction; collapsing them makes an installed
    but unusable dependency indistinguishable from a missing one.

    Annotation:
    :   Unrecognized objtype: `exception`

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****tier**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****status**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****install\_hint**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   None