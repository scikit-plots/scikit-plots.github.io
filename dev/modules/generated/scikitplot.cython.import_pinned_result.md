# import\_pinned\_result[#](#import-pinned-result "Link to this heading")

scikitplot.cython.import\_pinned\_result(**alias**, **\***, **cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/cython/_public.py#L672)[#](#scikitplot.cython.import_pinned_result "Link to this definition")
:   Import a pinned alias.

    Parameters:
    :   ****alias****str
        :   Pinned alias.

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root override.

    Returns:
    :   BuildResult or PackageBuildResult
        :   If the alias points to a module build, returns BuildResult.
            If the alias points to a package build, returns PackageBuildResult.

    Parameters:
    :   * ****alias**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**BuildResult**](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult") | [**PackageBuildResult**](scikitplot.cython.PackageBuildResult.html#scikitplot.cython.PackageBuildResult "scikitplot.cython._result.PackageBuildResult")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_04_pin_alias_thumb.png)

[Pin/Alias: stable handles for cached builds](../../auto_examples/cython/plot_04_pin_alias.html)

Pin/Alias: stable handles for cached builds![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](../../auto_examples/cython/plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)