# list\_pins[#](#list-pins "Link to this heading")

scikitplot.cython.list\_pins(**cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/cython/_pins.py#L58)[#](#scikitplot.cython.list_pins "Link to this definition")
:   List the current alias→key mappings.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root. If None, uses the default cache location.

    Returns:
    :   dict[str, str]
        :   Mapping of alias to cache key. Returned mapping is a copy and can be mutated
            by the caller safely.

    Parameters:
    :   ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_04_pin_alias_thumb.png)

[Pin/Alias: stable handles for cached builds](../../auto_examples/cython/plot_04_pin_alias.html)

Pin/Alias: stable handles for cached builds