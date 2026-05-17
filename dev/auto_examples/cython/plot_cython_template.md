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
'2026.05.17'

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
[CacheEntry(key='03ef97999a4b393d169c70f53f9f6ba906f10938e34a682c3454d437f014d006', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/03ef97999a4b393d169c70f53f9f6ba906f10938e34a682c3454d437f014d006'), module_name='scikitplot_cython_03ef97999a4b393d', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/03ef97999a4b393d169c70f53f9f6ba906f10938e34a682c3454d437f014d006/scikitplot_cython_03ef97999a4b393d.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:13Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.5', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='0666a11351ad85f9336a3111d4da16cef1ec095f97903c8b56dee3aef9a7c475', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/0666a11351ad85f9336a3111d4da16cef1ec095f97903c8b56dee3aef9a7c475'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/0666a11351ad85f9336a3111d4da16cef1ec095f97903c8b56dee3aef9a7c475/multifile_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:18Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.5', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='0d46a7f08d75a029c0347e0ac8bada830a067df8c3ab9db93f74c67225cdd06d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/0d46a7f08d75a029c0347e0ac8bada830a067df8c3ab9db93f74c67225cdd06d'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/0d46a7f08d75a029c0347e0ac8bada830a067df8c3ab9db93f74c67225cdd06d/memview_scale_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:22Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='0e821d4c361be0389c3063bf70b3428845d42f4f8f55a421fabad432ca5bcd49', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/0e821d4c361be0389c3063bf70b3428845d42f4f8f55a421fabad432ca5bcd49'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/0e821d4c361be0389c3063bf70b3428845d42f4f8f55a421fabad432ca5bcd49/cpp_mode_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:20Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.5', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='139bc09930afcf1ccc10d57f8104b36dde3ccf30ba198cd56c7cc2c9bd6748d5', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/139bc09930afcf1ccc10d57f8104b36dde3ccf30ba198cd56c7cc2c9bd6748d5'), module_name='scikitplot_cython_139bc09930afcf1c', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/139bc09930afcf1ccc10d57f8104b36dde3ccf30ba198cd56c7cc2c9bd6748d5/scikitplot_cython_139bc09930afcf1c.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:12Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.5', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='252c650436615e409023857f97569d4ae3ea62110a9820a1130a215f818ad9a6', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/252c650436615e409023857f97569d4ae3ea62110a9820a1130a215f818ad9a6'), module_name='scikitplot_cython_252c650436615e40', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/252c650436615e409023857f97569d4ae3ea62110a9820a1130a215f818ad9a6/scikitplot_cython_252c650436615e40.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:15Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.5', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='3b1a3ca2b5054410e2f8a1983044273c8f8464be969cb42d6826c394d2772b10', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/3b1a3ca2b5054410e2f8a1983044273c8f8464be969cb42d6826c394d2772b10'), module_name='scikitplot_cython_3b1a3ca2b5054410', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/3b1a3ca2b5054410e2f8a1983044273c8f8464be969cb42d6826c394d2772b10/scikitplot_cython_3b1a3ca2b5054410.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:17Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.5', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='7fb237f00bab02dc44e6e2ad7bcac45df84545fe3e90784f7bf863b87249b222', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/7fb237f00bab02dc44e6e2ad7bcac45df84545fe3e90784f7bf863b87249b222'), module_name='scikitplot_cython_7fb237f00bab02dc', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/7fb237f00bab02dc44e6e2ad7bcac45df84545fe3e90784f7bf863b87249b222/scikitplot_cython_7fb237f00bab02dc.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:23Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.5', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='87c6f3f88d4934645cd8aee4c6bd71c10a560996bf0488b2c763858b2fd6cf81', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/87c6f3f88d4934645cd8aee4c6bd71c10a560996bf0488b2c763858b2fd6cf81'), module_name='scikitplot_cython_87c6f3f88d493464', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/87c6f3f88d4934645cd8aee4c6bd71c10a560996bf0488b2c763858b2fd6cf81/scikitplot_cython_87c6f3f88d493464.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:17Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.5', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='893ed2d715baf12334825fac505b431b43b7616082b6449f5403237c115082d1', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/893ed2d715baf12334825fac505b431b43b7616082b6449f5403237c115082d1'), module_name='scikitplot_cython_893ed2d715baf123', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/893ed2d715baf12334825fac505b431b43b7616082b6449f5403237c115082d1/scikitplot_cython_893ed2d715baf123.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:15Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.5', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='b2428be0d962a858fba8b09e2bf102d839351d7527d68d10e4fdbb4ee4d388ed', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/b2428be0d962a858fba8b09e2bf102d839351d7527d68d10e4fdbb4ee4d388ed'), module_name='scikitplot_cython_b2428be0d962a858', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/b2428be0d962a858fba8b09e2bf102d839351d7527d68d10e4fdbb4ee4d388ed/scikitplot_cython_b2428be0d962a858.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:12Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.5', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='b813fce6f1d06ebc9efb2296961906dfdf7d62d1769c8da99c44acad5eab1ed0', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/b813fce6f1d06ebc9efb2296961906dfdf7d62d1769c8da99c44acad5eab1ed0'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/b813fce6f1d06ebc9efb2296961906dfdf7d62d1769c8da99c44acad5eab1ed0/wf_ext_square.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-17T00:53:21Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.5', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/03ef97999a4b393d169c70f53f9f6ba906f10938e34a682c3454d437f014d006')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/03ef97999a4b393d169c70f53f9f6ba906f10938e34a682c3454d437f014d006/scikitplot_cython_03ef97999a4b393d.cpython-311-x86_64-linux-gnu.so')

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
<module 'scikitplot_cython_69cd828c81aa28fc' from '/home/circleci/.cache/scikitplot/cython/69cd828c81aa28fc8cdd89cbd3627c545342c1a677e5ce2c237097fb8a385084/scikitplot_cython_69cd828c81aa28fc.cpython-311-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 4.424 seconds)

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