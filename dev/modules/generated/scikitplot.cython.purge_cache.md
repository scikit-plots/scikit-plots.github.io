# purge\_cache[#](#purge-cache "Link to this heading")

scikitplot.cython.purge\_cache(**cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/cython/_public.py#L163)[#](#scikitplot.cython.purge_cache "Link to this definition")
:   Delete the entire cache directory.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root. If None, uses default.

    Raises:
    :   FileNotFoundError
        :   If the cache directory does not exist.

    Parameters:
    :   ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   None

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cython_template_thumb.png)

[Cython: Realtime compile\_and\_load (.pyx)](../../auto_examples/cython/plot_cython_template.html)

Cython: Realtime compile\_and\_load (.pyx)