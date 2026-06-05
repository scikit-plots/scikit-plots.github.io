# pin[#](#pin "Link to this heading")

scikitplot.cython.pin(**key**, **\***, **alias**, **cache\_dir=None**, **overwrite=False**, **lock\_timeout\_s=60.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/6d916ad/scikitplot/cython/_pins.py#L100)[#](#scikitplot.cython.pin "Link to this definition")
:   Pin a cache key under a human-friendly alias.

    Parameters:
    :   ****key****str
        :   Cache key (64 hex chars).

        ****alias****str
        :   Alias name (identifier-like).

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root. If None, uses the default cache location.

        ****overwrite****bool, default=False
        :   If False, collisions raise ValueError. If True, overwrite existing mapping.

        ****lock\_timeout\_s****float, default=60.0
        :   Max seconds to wait for the pin registry lock.

    Returns:
    :   str
        :   The pinned key.

    Raises:
    :   ValueError
        :   If alias/key are invalid or a collision occurs without overwrite.

    Parameters:
    :   * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****alias**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****lock\_timeout\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](../../auto_examples/cython/plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_plot_04_pin_alias_thumb.png)

[Pin/Alias: stable handles for cached builds](../../auto_examples/cython/plot_04_pin_alias.html)

Pin/Alias: stable handles for cached builds![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](../../auto_examples/cython/plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)