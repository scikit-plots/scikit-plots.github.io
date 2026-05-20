> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cython-plot-cython-template-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Cython: Realtime compile\_and\_load (.pyx)[#](#cython-realtime-compile-and-load-pyx "Link to this heading")

An example showing the [`cython`](../../apis/scikitplot.cython.html#module-scikitplot.cython "scikitplot.cython") submodule..

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## cython examples[#](#cython-examples "Link to this heading")

```
import scikitplot as sp
sp.__version_iso_8601__

```
```
'2026.05.20'

```
```
from scikitplot import cython

print(cython.__doc__)

```
```
scikitplot.cython
==================
A lightweight runtime Cython development kit with caching, pinning,
garbage collection, and templating support.

:mod:`scikitplot.cython` enables real-time, in-place (in-situ) generation of
low-level Cython packages and modules for immediate use and testing.

.. seealso::
   * https://github.com/cython/cython
   * https://cython.readthedocs.io/en/latest/index.html
   * https://doc.sagemath.org/html/en/reference/misc/sage/misc/cython.html

```
```
from scikitplot.cython import compile_and_load
m = compile_and_load("def f(int n):\n    return n*n")
m.f(10)

```
```
100

```
```
cython.list_templates()

```
```
['basic_cython/t01_square_int', 'basic_cython/t02_add_float', 'basic_cython/t03_toggle_bool', 'basic_cython/t04_repeat_str', 'basic_cython/t05_int_overflow_demo', 'basic_cython/t06_xor_bytes', 'complex_cython/t01_cpp_vector_sum', 'complex_cython/t01_fast_clip', 'complex_cython/t02_nogil_sum', 'complex_cython/t03_nogil_sum', 'complex_cython/t04_nogil_sum', 'complex_cython/t05_popcount64', 'devel_cython/t01_directives', 'devel_cython/t02_cdef_class_counter', 'devel_cython/t03_cdef_class_counter', 'devel_cython/t04_cdef_class_counter', 'devel_cython/t05_cdef_class_counter', 'devel_numcpp_cpp_api_cython/t01_cpp_language', 'devel_numcpp_cpp_api_cython/t01_cpp_memoryview', 'devel_numcpp_cpp_api_cython/t01_numpy_cpp_memoryview', 'devel_numcpp_cpp_api_cython/t02_cpp_vector_size', 'devel_numcpp_cpp_api_cython/t03_cpp_vector_size', 'devel_numpy_c_api_cython/t01_numpy_ndarray_sum', 'devel_numpy_c_api_cython/t01_numpy_typed_ndarray', 'devel_numpy_c_api_cython/t02_numpy_sum_1d', 'devel_numpy_c_api_cython/t03_numpy_sum_1d', 'devel_numpy_c_api_cython/t04_numpy_sum_1d', 'easy_cython/t01_memoryview_sum', 'easy_cython/t01_sum_memoryview', 'easy_cython/t01_sum_view', 'easy_cython/t04_vector_dot_list', 'easy_cython/t05_vector_scale_memview', 'easy_cython/t06_vector_norm2_memview', 'easy_cython/t07_vector_add_list', 'easy_cython/t08_parse_int_ascii', 'hard_cython/t01_cdef_class_counter', 'hard_cython/t01_cdef_class_vector', 'hard_cython/t01_dot_product', 'hard_cython/t02_malloc_fill', 'hard_cython/t03_malloc_fill', 'hard_cython/t04_struct_point_distance', 'medium_cython/t01_fused_add', 'medium_cython/t01_fused_types', 'medium_cython/t01_running_mean', 'medium_cython/t02_fused_add', 'medium_cython/t03_fused_add', 'medium_cython/t04_minmax_memview', 'medium_cython/t05_argmax_memview', 'mixed/t01_square_int', 'mixed/t02_fib_cpdef', 'mixed/t03_cdef_class_counter', 'mixed/t04_memoryview_sum', 'mixed/t05_numpy_ndarray_sum', 'mixed/t06_directives_boundscheck', 'mixed/t07_libc_math', 'mixed/t08_struct_point', 'mixed/t09_enum_state', 'mixed/t10_safe_div_except', 'mixed/t11_fused_types_dot', 'mixed/t12_inline_clamp', 'mixed/t13_bytes_xor', 'mixed/t14_string_reverse', 'mixed/t15_lcg_rng', 'mixed/t16_insertion_sort', 'mixed/t17_kahan_sum', 'mixed/t18_histogram_int', 'mixed/t19_popcount', 'mixed/t20_matmul_small', 'module_cython/t01_counter', 'module_cython/t01_extension_class', 'module_cython/t01_module_constants', 'module_cython/t02_cdef_class_counter', 'module_cython/t03_cdef_class_counter', 'module_cython/t90_include_pxi_square', 'module_cython/t91_extern_header_add']

```
```
cython.get_template_path(cython.list_templates()[0])

```
```
PosixPath('/home/circleci/.pyenv/versions/3.11.15/lib/python3.11/site-packages/scikitplot/cython/_templates/basic_cython/t01_square_int.pyx')

```
```
print(cython.read_template(cython.list_templates()[0]))

```
```
# cython: language_level=3
"""Basic Cython template: typed function.

This demonstrates a minimal compiled function with C integer typing.
"""


def square(int n):
    """Return n*n using C integer arithmetic."""
    return n * n

```
```
cython.get_cache_dir()

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython')

```
```
cython.list_cached()

```
```
[CacheEntry(key='0d46a7f08d75a029c0347e0ac8bada830a067df8c3ab9db93f74c67225cdd06d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/0d46a7f08d75a029c0347e0ac8bada830a067df8c3ab9db93f74c67225cdd06d'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/0d46a7f08d75a029c0347e0ac8bada830a067df8c3ab9db93f74c67225cdd06d/memview_scale_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:35Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='2b754df9a69f375fae238618628b7928bad7fc6cb84fe3e8765407e401aa9f28', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/2b754df9a69f375fae238618628b7928bad7fc6cb84fe3e8765407e401aa9f28'), module_name='scikitplot_cython_2b754df9a69f375f', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/2b754df9a69f375fae238618628b7928bad7fc6cb84fe3e8765407e401aa9f28/scikitplot_cython_2b754df9a69f375f.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:25Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='31dc4d722cb555e50269cb23c642500514e5c159ca3ad8c60dfc36a14ce774ed', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/31dc4d722cb555e50269cb23c642500514e5c159ca3ad8c60dfc36a14ce774ed'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/31dc4d722cb555e50269cb23c642500514e5c159ca3ad8c60dfc36a14ce774ed/wf_ext_square.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:35Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='4509c2628d7523a85ca77c8db06ca72a42c8e3c3370fd72fefb824d1b4310769', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/4509c2628d7523a85ca77c8db06ca72a42c8e3c3370fd72fefb824d1b4310769'), module_name='scikitplot_cython_4509c2628d7523a8', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/4509c2628d7523a85ca77c8db06ca72a42c8e3c3370fd72fefb824d1b4310769/scikitplot_cython_4509c2628d7523a8.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:30Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='4f83a5f7c52e49d93b7082d6ec35b1e18b76cd12ad99b26b658b4c694df8fbc3', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/4f83a5f7c52e49d93b7082d6ec35b1e18b76cd12ad99b26b658b4c694df8fbc3'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/4f83a5f7c52e49d93b7082d6ec35b1e18b76cd12ad99b26b658b4c694df8fbc3/cpp_mode_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:33Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='65cd2f6b6833663c932142bf28ebaa13163c2bcac3e7fc12d4ba44729be37925', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/65cd2f6b6833663c932142bf28ebaa13163c2bcac3e7fc12d4ba44729be37925'), module_name='scikitplot_cython_65cd2f6b6833663c', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/65cd2f6b6833663c932142bf28ebaa13163c2bcac3e7fc12d4ba44729be37925/scikitplot_cython_65cd2f6b6833663c.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:28Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='72f01c00873eceaf618e26ad9bba0b5bdc725d8dbb68538de720055aa39f7f06', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/72f01c00873eceaf618e26ad9bba0b5bdc725d8dbb68538de720055aa39f7f06'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/72f01c00873eceaf618e26ad9bba0b5bdc725d8dbb68538de720055aa39f7f06/multifile_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:32Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='81f18f0c56ec63137a2ccb1f9b846356d4e3c23d2d7bc46dae59f69aae6cd549', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/81f18f0c56ec63137a2ccb1f9b846356d4e3c23d2d7bc46dae59f69aae6cd549'), module_name='scikitplot_cython_81f18f0c56ec6313', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/81f18f0c56ec63137a2ccb1f9b846356d4e3c23d2d7bc46dae59f69aae6cd549/scikitplot_cython_81f18f0c56ec6313.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:30Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='83c2b3f2ab39716a1c2087d3fe76731f1d308a147f99772c37b23a10147ed6d5', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/83c2b3f2ab39716a1c2087d3fe76731f1d308a147f99772c37b23a10147ed6d5'), module_name='scikitplot_cython_83c2b3f2ab39716a', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/83c2b3f2ab39716a1c2087d3fe76731f1d308a147f99772c37b23a10147ed6d5/scikitplot_cython_83c2b3f2ab39716a.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:37Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='a4fd411caf85ee94d71c1ef3be8344595c1995edf98e6d01e616d6f5a9f9ec46', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/a4fd411caf85ee94d71c1ef3be8344595c1995edf98e6d01e616d6f5a9f9ec46'), module_name='scikitplot_cython_a4fd411caf85ee94', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/a4fd411caf85ee94d71c1ef3be8344595c1995edf98e6d01e616d6f5a9f9ec46/scikitplot_cython_a4fd411caf85ee94.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:28Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='cdc86d4f26d1826c0dd1fb42d5e916dacc2f92a69a3df9e6e7f0008c9b10203a', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/cdc86d4f26d1826c0dd1fb42d5e916dacc2f92a69a3df9e6e7f0008c9b10203a'), module_name='scikitplot_cython_cdc86d4f26d1826c', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/cdc86d4f26d1826c0dd1fb42d5e916dacc2f92a69a3df9e6e7f0008c9b10203a/scikitplot_cython_cdc86d4f26d1826c.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:26Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='f83561673aae6a832b8dbc37e07968faadba2966f47e7ac3b4294d54534ad213', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/f83561673aae6a832b8dbc37e07968faadba2966f47e7ac3b4294d54534ad213'), module_name='scikitplot_cython_f83561673aae6a83', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/f83561673aae6a832b8dbc37e07968faadba2966f47e7ac3b4294d54534ad213/scikitplot_cython_f83561673aae6a83.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-20T19:37:26Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/0d46a7f08d75a029c0347e0ac8bada830a067df8c3ab9db93f74c67225cdd06d')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/0d46a7f08d75a029c0347e0ac8bada830a067df8c3ab9db93f74c67225cdd06d/memview_scale_demo.cpython-311-x86_64-linux-gnu.so')

```
```
from scikitplot.cython import compile_template

m = compile_template(cython.list_templates()[2])
m = compile_template(cython.list_templates()[1])
m = compile_template(cython.list_templates()[0])
m.square(12)

```
```
144

```
```
m = compile_template('module_cython/t01_counter')
m

```
```
<module 'scikitplot_cython_291d7ec254b19397' from '/home/circleci/.cache/scikitplot/cython/291d7ec254b19397d17322f0f28ff511e0080a06bbb6551073d7d0c47ef87240/scikitplot_cython_291d7ec254b19397.cpython-311-x86_64-linux-gnu.so'>

```
```
cython.purge_cache()

```
```
cython.list_cached()

```
```
[]

```

Tags: [model-type: classification](../../_tags/model-type-classification.html) [model-workflow: model building](../../_tags/model-workflow-model-building.html) [plot-type: cython](../../_tags/plot-type-cython.html) [domain: cython](../../_tags/domain-cython.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 4.456 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_cython_template.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_cython_template.ipynb)

[`Download Jupyter notebook: plot_cython_template.ipynb`](../../_downloads/6053307ed76a82d9d7a64548e10f50aa/plot_cython_template.ipynb)

[`Download Python source code: plot_cython_template.py`](../../_downloads/d01d24a48a3cd1c5d71ccba73d308fbb/plot_cython_template.py)

[`Download zipped: plot_cython_template.zip`](../../_downloads/c158a77b0388225ed9e23d6ed4d33725/plot_cython_template.zip)

Related examples

![](../../_images/sphx_glr_plot_nc_test_thumb.png)

[nc with examples](../nc/plot_nc_test.html)

nc with examples![](../../_images/sphx_glr_plot_dl_nlp_vector_index_db_thumb.png)

[visualkeras: Vector Index DB](../visualkeras/plot_dl_nlp_vector_index_db.html)

visualkeras: Vector Index DB![](../../_images/sphx_glr_plot_09_workflow_templates_cli_thumb.png)

[Workflow templates (train / hpo / predict) + CLI entry template](plot_09_workflow_templates_cli.html)

Workflow templates (train / hpo / predict) + CLI entry template![](../../_images/sphx_glr_plot_06_multifile_support_files_thumb.png)

[Multi-file builds: .pxi includes and external headers](plot_06_multifile_support_files.html)

Multi-file builds: .pxi includes and external headers

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)