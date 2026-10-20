# probe\_backend[#](#probe-backend "Link to this heading")

scikitplot.corpus.probe\_backend(**cls**, **\***, **load=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_capabilities.py#L220)[#](#scikitplot.corpus.probe_backend "Link to this definition")
:   Classify one backend’s availability.

    Parameters:
    :   ****cls****type
        :   A backend class exposing `is_available()` and, optionally,
            `is_installed()` (no import) and `load_error()`.

        ****load****bool, optional
        :   `True` (default) answers by asking `is_available()`, which may
            import the backend. `False` imports nothing: a backend declaring
            `loads_on_probe` that is installed but not yet loaded in this
            process is reported `UNKNOWN` with reason `"not_loaded"`.

    Returns:
    :   tuple of (CapabilityStatus, str or None)
        :   The status and a stable machine-readable reason code. The reason is
            `None` when the status is `AVAILABLE`.

    Parameters:
    :   * ****cls**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****load**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**CapabilityStatus**](scikitplot.corpus.CapabilityStatus.html#scikitplot.corpus.CapabilityStatus "scikitplot.corpus._capabilities.CapabilityStatus"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | None]

    Notes

    ****Developer.**** The distinction rests on **how** the probe answers: returning
    `False` means the backend knows it is not installed, whereas **raising**
    means it is installed enough to try and failed – which is `BROKEN`.
    Review disproof D-13 confirmed the probes themselves are correctly
    fail-safe; the defect was that both outcomes collapsed to one boolean.
    A backend whose `is_available()` swallows a load failure (Annoy) is
    told apart by `is_installed()` and `load_error()`: installed with a
    failed load is `BROKEN` with reason `"load_failed: <type>"` (F-50);
    without that evidence it stays `ABSENT`.