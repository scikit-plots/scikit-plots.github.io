# get\_cache\_dir[#](#get-cache-dir "Link to this heading")

scikitplot.cython.get\_cache\_dir(**cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8f33de/scikitplot/cython/_public.py#L145)[#](#scikitplot.cython.get_cache_dir "Link to this definition")
:   Resolve (and create) the cache root directory.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root directory override. If None, uses environment override or a
            default cache location.

    Returns:
    :   pathlib.Path
        :   Cache root directory.

    Parameters:
    :   ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cython_template_thumb.png)

[Cython: Realtime compile\_and\_load (.pyx)](../../auto_examples/cython/plot_cython_template.html)

Cython: Realtime compile\_and\_load (.pyx)