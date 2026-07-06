# unpin[#](#unpin "Link to this heading")

scikitplot.cython.unpin(**alias**, **\***, **cache\_dir=None**, **lock\_timeout\_s=60.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/cython/_pins.py#L165)[#](#scikitplot.cython.unpin "Link to this definition")
:   Remove an alias pin.

    Parameters:
    :   ****alias****str
        :   Alias to remove.

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root. If None, uses the default cache location.

        ****lock\_timeout\_s****float, default=60.0
        :   Max seconds to wait for the pin registry lock.

    Returns:
    :   bool
        :   True if the alias existed and was removed, otherwise False.

    Parameters:
    :   * ****alias**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****lock\_timeout\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))

    Return type:
    :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_04_pin_alias_thumb.png)

[Pin/Alias: stable handles for cached builds](../../auto_examples/cython/plot_04_pin_alias.html)

Pin/Alias: stable handles for cached builds