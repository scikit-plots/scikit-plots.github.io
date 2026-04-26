# check\_build\_prereqs[#](#check-build-prereqs "Link to this heading")

scikitplot.cython.check\_build\_prereqs(**\***, **numpy=False**, **pybind11=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/cython/_public.py#L183)[#](#scikitplot.cython.check_build_prereqs "Link to this definition")
:   Check whether build prerequisites are importable.

    Parameters:
    :   ****numpy****bool, default=False
        :   If True, also check NumPy availability.

        ****pybind11****bool, default=False
        :   If True, also check pybind11 availability (Scenario 3 & 4).

    Returns:
    :   dict[str, Any]
        :   Keys: `cython`, `setuptools`, optionally `numpy`,
            `pybind11`. Each value: `{"ok": bool, "version": str}`.

    Parameters:
    :   * ****numpy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****pybind11**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    ****Newbie**** (Scenarios 1 & 2): run this to understand your environment.
    ****Pro/master**** (Scenarios 3-5): use the scenario-specific helpers in
    `scikitplot.cython._custom_compiler` for targeted checks.

    Examples

    Try it in your browser!
    ```
    >>> result = check_build_prereqs()
    >>> "cython" in result and "setuptools" in result
    True
    >>> result = check_build_prereqs(numpy=True, pybind11=True)
    >>> all(k in result for k in ("cython", "setuptools", "numpy", "pybind11"))
    True

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](../../auto_examples/cython/plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_plot_01_browse_and_compile_templates_thumb.png)

[Browse and compile templates](../../auto_examples/cython/plot_01_browse_and_compile_templates.html)

Browse and compile templates![](../../_images/sphx_glr_plot_02_build_profiles_thumb.png)

[Build profiles: fast-debug, release, annotate](../../auto_examples/cython/plot_02_build_profiles.html)

Build profiles: fast-debug, release, annotate![](../../_images/sphx_glr_plot_03_cache_and_restart_reuse_thumb.png)

[Cache and restart reuse](../../auto_examples/cython/plot_03_cache_and_restart_reuse.html)

Cache and restart reuse![](../../_images/sphx_glr_plot_04_pin_alias_thumb.png)

[Pin/Alias: stable handles for cached builds](../../auto_examples/cython/plot_04_pin_alias.html)

Pin/Alias: stable handles for cached builds![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](../../auto_examples/cython/plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)![](../../_images/sphx_glr_plot_06_multifile_support_files_thumb.png)

[Multi-file builds: .pxi includes and external headers](../../auto_examples/cython/plot_06_multifile_support_files.html)

Multi-file builds: .pxi includes and external headers![](../../_images/sphx_glr_plot_07_cpp_mode_basics_thumb.png)

[C++ mode basics: cppclass and libcpp containers](../../auto_examples/cython/plot_07_cpp_mode_basics.html)

C++ mode basics: cppclass and libcpp containers![](../../_images/sphx_glr_plot_08_vector_ops_without_numpy_thumb.png)

[Vector ops without NumPy: array(‘d’) + memoryviews](../../auto_examples/cython/plot_08_vector_ops_without_numpy.html)

Vector ops without NumPy: array('d') + memoryviews![](../../_images/sphx_glr_plot_09_workflow_templates_cli_thumb.png)

[Workflow templates (train / hpo / predict) + CLI entry template](../../auto_examples/cython/plot_09_workflow_templates_cli.html)

Workflow templates (train / hpo / predict) + CLI entry template