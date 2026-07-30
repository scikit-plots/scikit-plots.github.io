# purge\_cache[#](#purge-cache "Link to this heading")

scikitplot.cython.purge\_cache(**cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/cython/_public.py#L279)[#](#scikitplot.cython.purge_cache "Link to this definition")
:   Delete the entire cache directory.

    The purge runs under the cache-root GC lock so it cannot race a concurrent
    garbage collection, and it refuses to run while any per-key build lock is
    held so an active build/publish is never destroyed mid-flight
    (CYTHON-GC-001). Deeper transactional purge (dry-run manifest and recovery
    journal) is tracked separately.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root. If None, uses default.

    Raises:
    :   FileNotFoundError
        :   If the cache directory does not exist.

        RuntimeError
        :   If one or more builds are active (a per-key build lock is held).

    Parameters:
    :   ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   None

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cython_template_thumb.png)

[Cython: Realtime compile\_and\_load (.pyx)](../../auto_examples/cython/plot_cython_template.html)

Cython: Realtime compile\_and\_load (.pyx)