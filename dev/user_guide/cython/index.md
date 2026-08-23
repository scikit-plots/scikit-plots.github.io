# Cython User Guide[#](#cython-user-guide "Link to this heading")

## Instant PKG/MOD Generation[#](#instant-pkg-mod-generation "Link to this heading")

The [`cython`](../../apis/scikitplot.cython.html#module-scikitplot.cython "scikitplot.cython") submodule provides runtime Cython compilation,
artifact caching, template-based examples, controlled loading, and cache
maintenance utilities.

This guide separates the main concepts into reusable diagrams so that each
workflow can be reviewed and maintained independently.

Examples relevant to the [`cython`](../../apis/scikitplot.cython.html#module-scikitplot.cython "scikitplot.cython") module.

A lightweight runtime Cython development kit with caching, pinning,
garbage collection, and templating support. `"Simple Foundation. Truly Sovereign."`

[`cython`](../../apis/scikitplot.cython.html#module-scikitplot.cython "scikitplot.cython") enables real-time, in-place (in-situ) live, on demand
generation of low-level Cython packages and modules for immediate use and testing, at runtime.

* [Cython: Realtime compile\_and\_load (.pyx)](../../auto_examples/cython/plot_cython_template.html#sphx-glr-auto-examples-cython-plot-cython-template-py): Example usage of
  [`compile_and_load`](../../modules/generated/scikitplot.cython.compile_and_load.html#scikitplot.cython.compile_and_load "scikitplot.cython.compile_and_load") using template.

> **See also**
> * <https://doc.sagemath.org/html/en/reference/misc/sage/misc/cython.html>
* [cython/cython](https://github.com/cython/cython)
* <https://cython.readthedocs.io/en/latest/index.html>

Examples

```
from scikitplot.cython import compile_and_load

m = compile_and_load("def f(int n):\n    return n*n")
m.f(10)

```
**cython templates**

* [Cython templates](_templates/templates_index.html)
  * [basic\_cython](_templates/templates_basic_cython.html)
  * [basic\_python](_templates/templates_basic_python.html)
  * [complex\_cython](_templates/templates_complex_cython.html)
  * [complex\_python](_templates/templates_complex_python.html)
  * [devel\_cython](_templates/templates_devel_cython.html)
  * [devel\_numcpp\_cpp\_api\_cython](_templates/templates_devel_numcpp_cpp_api_cython.html)
  * [devel\_numcpp\_cpp\_api\_python](_templates/templates_devel_numcpp_cpp_api_python.html)
  * [devel\_numpy\_c\_api\_cython](_templates/templates_devel_numpy_c_api_cython.html)
  * [devel\_numpy\_c\_api\_python](_templates/templates_devel_numpy_c_api_python.html)
  * [devel\_python](_templates/templates_devel_python.html)
  * [easy\_cython](_templates/templates_easy_cython.html)
  * [easy\_python](_templates/templates_easy_python.html)
  * [hard\_cython](_templates/templates_hard_cython.html)
  * [hard\_python](_templates/templates_hard_python.html)
  * [medium\_cython](_templates/templates_medium_cython.html)
  * [medium\_python](_templates/templates_medium_python.html)
  * [mixed](_templates/templates_mixed.html)
  * [module\_cython](_templates/templates_module_cython.html)
  * [module\_python](_templates/templates_module_python.html)