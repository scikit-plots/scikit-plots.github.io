# cache\_stats[#](#cache-stats "Link to this heading")

scikitplot.cython.cache\_stats(**cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/cython/_gc.py#L61)[#](#scikitplot.cython.cache_stats "Link to this definition")
:   Compute cache statistics.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root. If None, uses the default cache location.

    Returns:
    :   scikitplot.cython.CacheStats
        :   Cache statistics snapshot.

    Parameters:
    :   ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**CacheStats**](scikitplot.cython.CacheStats.html#scikitplot.cython.CacheStats "scikitplot.cython._result.CacheStats")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](../../auto_examples/cython/plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_plot_03_cache_and_restart_reuse_thumb.png)

[Cache and restart reuse](../../auto_examples/cython/plot_03_cache_and_restart_reuse.html)

Cache and restart reuse![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](../../auto_examples/cython/plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)