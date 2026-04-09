# import\_pinned[#](#import-pinned "Link to this heading")

scikitplot.cython.import\_pinned(**alias**, **\***, **cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/cython/_public.py#L707)[#](#scikitplot.cython.import_pinned "Link to this definition")
:   Import a pinned alias and return the loaded module(s).

    Returns:
    :   types.ModuleType or Sequence[types.ModuleType]
        :   If alias points to a module build, returns a module.
            If alias points to a package build, returns a list of modules.

    Parameters:
    :   * ****alias**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)") | [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")[[**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](../../auto_examples/cython/plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_plot_04_pin_alias_thumb.png)

[Pin/Alias: stable handles for cached builds](../../auto_examples/cython/plot_04_pin_alias.html)

Pin/Alias: stable handles for cached builds