# import\_cached\_package\_result[#](#import-cached-package-result "Link to this heading")

scikitplot.cython.import\_cached\_package\_result(**key**, **\***, **cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/cython/_public.py#L555)[#](#scikitplot.cython.import_cached_package_result "Link to this definition")
:   Import a cached **package** entry by cache key.

    Parameters:
    :   ****key****str
        :   Cache key.

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root override.

    Returns:
    :   scikitplot.cython.PackageBuildResult
        :   Package import result.

    Raises:
    :   ValueError
        :   If key does not refer to a package entry.

    Parameters:
    :   * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**PackageBuildResult**](scikitplot.cython.PackageBuildResult.html#scikitplot.cython.PackageBuildResult "scikitplot.cython._result.PackageBuildResult")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](../../auto_examples/cython/plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)