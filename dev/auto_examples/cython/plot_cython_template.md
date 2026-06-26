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
'2026.06.26'

```
```
from scikitplot import cython

print(cython.__doc__)

```
```
scikitplot.cython
=================
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
PosixPath('/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/basic_cython/t01_square_int.pyx')

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
[CacheEntry(key='079973d842a339642538be793f6acc790489c08f6e0d8a84e9d3a33a74002c6a', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/079973d842a339642538be793f6acc790489c08f6e0d8a84e9d3a33a74002c6a'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/079973d842a339642538be793f6acc790489c08f6e0d8a84e9d3a33a74002c6a/memview_scale_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:49:21Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='102bfbd99ec33aaf397db7f537c04e28ea5be67d18d08aba5f4fcc28d9a7d443', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/102bfbd99ec33aaf397db7f537c04e28ea5be67d18d08aba5f4fcc28d9a7d443'), module_name='scikitplot_cython_102bfbd99ec33aaf', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/102bfbd99ec33aaf397db7f537c04e28ea5be67d18d08aba5f4fcc28d9a7d443/scikitplot_cython_102bfbd99ec33aaf.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:49:03Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='4124d7284c7886e12d7a671bb88f05003039cded41c1addbc5442107bb51454f', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/4124d7284c7886e12d7a671bb88f05003039cded41c1addbc5442107bb51454f'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/4124d7284c7886e12d7a671bb88f05003039cded41c1addbc5442107bb51454f/wf_ext_square.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:49:23Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='573e9a15fa7a877f4a8d37dc56081cd834c198dad385147c180de3bd9a563d5d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/573e9a15fa7a877f4a8d37dc56081cd834c198dad385147c180de3bd9a563d5d'), module_name='scikitplot_cython_573e9a15fa7a877f', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/573e9a15fa7a877f4a8d37dc56081cd834c198dad385147c180de3bd9a563d5d/scikitplot_cython_573e9a15fa7a877f.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:49:09Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='8c86efd9d53684b165468c85bf4fd11e1a7de61d6cdde0075a3e0507cfaf424c', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/8c86efd9d53684b165468c85bf4fd11e1a7de61d6cdde0075a3e0507cfaf424c'), module_name='scikitplot_cython_8c86efd9d53684b1', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/8c86efd9d53684b165468c85bf4fd11e1a7de61d6cdde0075a3e0507cfaf424c/scikitplot_cython_8c86efd9d53684b1.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:49:00Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='9babdf95708f568326fe5fae285b0a76baf3a9f8b0c287f973c22f0f71cfc87e', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/9babdf95708f568326fe5fae285b0a76baf3a9f8b0c287f973c22f0f71cfc87e'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/9babdf95708f568326fe5fae285b0a76baf3a9f8b0c287f973c22f0f71cfc87e/multifile_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:49:16Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='a7ce95fb6cfefdae7ebc20297a15397250cdd49f5f90f812f13599cda9a0b1c0', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/a7ce95fb6cfefdae7ebc20297a15397250cdd49f5f90f812f13599cda9a0b1c0'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/a7ce95fb6cfefdae7ebc20297a15397250cdd49f5f90f812f13599cda9a0b1c0/cpp_mode_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:49:18Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='b8488eab2eb4b5b9abd997814d3f6d4eb18d472876b751c92facaa0e7ca749c6', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/b8488eab2eb4b5b9abd997814d3f6d4eb18d472876b751c92facaa0e7ca749c6'), module_name='scikitplot_cython_b8488eab2eb4b5b9', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/b8488eab2eb4b5b9abd997814d3f6d4eb18d472876b751c92facaa0e7ca749c6/scikitplot_cython_b8488eab2eb4b5b9.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:49:26Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='cc742d2431f49ab1ce72df56914e664127f1c237962d952ff123eb13ff5555db', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/cc742d2431f49ab1ce72df56914e664127f1c237962d952ff123eb13ff5555db'), module_name='scikitplot_cython_cc742d2431f49ab1', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/cc742d2431f49ab1ce72df56914e664127f1c237962d952ff123eb13ff5555db/scikitplot_cython_cc742d2431f49ab1.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:49:01Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='dcc07d0ff95c10ef924ee02075afa890c10f71233b0ae5e57698b8cde86d0b05', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/dcc07d0ff95c10ef924ee02075afa890c10f71233b0ae5e57698b8cde86d0b05'), module_name='scikitplot_cython_dcc07d0ff95c10ef', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/dcc07d0ff95c10ef924ee02075afa890c10f71233b0ae5e57698b8cde86d0b05/scikitplot_cython_dcc07d0ff95c10ef.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:48:59Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='f132522780a853ce622cc4e594e1d1d8a2b3000ea93ae758f274f2f3c17048ef', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/f132522780a853ce622cc4e594e1d1d8a2b3000ea93ae758f274f2f3c17048ef'), module_name='scikitplot_cython_f132522780a853ce', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/f132522780a853ce622cc4e594e1d1d8a2b3000ea93ae758f274f2f3c17048ef/scikitplot_cython_f132522780a853ce.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:49:06Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='ffe085a82700e9551549a99938c76fa742845298370db4b9b703187ff09d8efd', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/ffe085a82700e9551549a99938c76fa742845298370db4b9b703187ff09d8efd'), module_name='scikitplot_cython_ffe085a82700e955', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/ffe085a82700e9551549a99938c76fa742845298370db4b9b703187ff09d8efd/scikitplot_cython_ffe085a82700e955.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-06-26T18:49:05Z', fingerprint={'abi': '', 'cython': '3.2.6', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/079973d842a339642538be793f6acc790489c08f6e0d8a84e9d3a33a74002c6a')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/079973d842a339642538be793f6acc790489c08f6e0d8a84e9d3a33a74002c6a/memview_scale_demo.cpython-312-x86_64-linux-gnu.so')

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
<module 'scikitplot_cython_4f8b4688b0c26703' from '/home/circleci/.cache/scikitplot/cython/4f8b4688b0c26703cce8bee8317b92ec6ba22c6f97bc2fc786585d5f9ae85211/scikitplot_cython_4f8b4688b0c26703.cpython-312-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 5.449 seconds)

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