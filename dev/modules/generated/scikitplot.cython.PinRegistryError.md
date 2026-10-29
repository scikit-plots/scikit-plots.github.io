# PinRegistryError[#](#pinregistryerror "Link to this heading")

exception scikitplot.cython.PinRegistryError[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cython/_pins.py#L47)[#](#scikitplot.cython.PinRegistryError "Link to this definition")
:   Raised when the pin registry (`pins.json`) is corrupt or unreadable.

    Subclasses [`ValueError`](https://docs.python.org/3/builtins/exceptions.html#ValueError "(in Python v3.15)") so existing `except ValueError` handlers
    still catch it, while giving corruption an explicit, nameable type instead
    of silently degrading to an empty registry (CYTHON-PIN-001).

    Annotation:
    :   Unrecognized objtype: `exception`