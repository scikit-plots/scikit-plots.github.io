# probe\_backend[#](#probe-backend "Link to this heading")

scikitplot.corpus.probe\_backend(**cls**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_capabilities.py#L183)[#](#scikitplot.corpus.probe_backend "Link to this definition")
:   Classify one backend’s availability.

    Parameters:
    :   ****cls****type
        :   A backend class exposing `is_available()`.

    Returns:
    :   tuple of (CapabilityStatus, str or None)
        :   The status and a stable machine-readable reason code. The reason is
            `None` when the status is `AVAILABLE`.

    Parameters:
    :   ****cls**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**CapabilityStatus**](scikitplot.corpus.CapabilityStatus.html#scikitplot.corpus.CapabilityStatus "scikitplot.corpus._capabilities.CapabilityStatus"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | None]

    Notes

    ****Developer.**** The distinction rests on **how** the probe answers: returning
    `False` means the backend knows it is not installed, whereas **raising**
    means it is installed enough to try and failed – which is `BROKEN`.
    Review disproof D-13 confirmed the probes themselves are correctly
    fail-safe; the defect was that both outcomes collapsed to one boolean.