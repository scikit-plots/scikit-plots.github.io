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
'2026.05.11'

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
[CacheEntry(key='0d46a7f08d75a029c0347e0ac8bada830a067df8c3ab9db93f74c67225cdd06d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/0d46a7f08d75a029c0347e0ac8bada830a067df8c3ab9db93f74c67225cdd06d'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/0d46a7f08d75a029c0347e0ac8bada830a067df8c3ab9db93f74c67225cdd06d/memview_scale_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:48Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='159f492283790ff5962816a5bad1e46e3a1a1e8ac9d908b462687e0c3c3c3a38', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/159f492283790ff5962816a5bad1e46e3a1a1e8ac9d908b462687e0c3c3c3a38'), module_name='scikitplot_cython_159f492283790ff5', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/159f492283790ff5962816a5bad1e46e3a1a1e8ac9d908b462687e0c3c3c3a38/scikitplot_cython_159f492283790ff5.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:43Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='1b7c50b38d1a69321fc6c1fb77cacb561c9c3b4f686a843672d3867532a53486', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/1b7c50b38d1a69321fc6c1fb77cacb561c9c3b4f686a843672d3867532a53486'), module_name='scikitplot_cython_1b7c50b38d1a6932', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/1b7c50b38d1a69321fc6c1fb77cacb561c9c3b4f686a843672d3867532a53486/scikitplot_cython_1b7c50b38d1a6932.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:38Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='44f97c778447eb7c13687bd9a96837812cd1c3a710a97d386c7a499e6d49f624', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/44f97c778447eb7c13687bd9a96837812cd1c3a710a97d386c7a499e6d49f624'), module_name='scikitplot_cython_44f97c778447eb7c', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/44f97c778447eb7c13687bd9a96837812cd1c3a710a97d386c7a499e6d49f624/scikitplot_cython_44f97c778447eb7c.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:41Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='509dba72364c627de1174e103278642250187c6bcb754b360078355747000718', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/509dba72364c627de1174e103278642250187c6bcb754b360078355747000718'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/509dba72364c627de1174e103278642250187c6bcb754b360078355747000718/wf_ext_square.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:48Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='5dd1d11ae5a3c8a73e10cb2d3fc3d6c0cac8fb531f423492b87005096fbc4caa', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/5dd1d11ae5a3c8a73e10cb2d3fc3d6c0cac8fb531f423492b87005096fbc4caa'), module_name='scikitplot_cython_5dd1d11ae5a3c8a7', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/5dd1d11ae5a3c8a73e10cb2d3fc3d6c0cac8fb531f423492b87005096fbc4caa/scikitplot_cython_5dd1d11ae5a3c8a7.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:50Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='94f2c8a084130c50bd1dc2c9eb969c61a3801dbf5bdfbd26acb09b34258b9a02', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/94f2c8a084130c50bd1dc2c9eb969c61a3801dbf5bdfbd26acb09b34258b9a02'), module_name='scikitplot_cython_94f2c8a084130c50', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/94f2c8a084130c50bd1dc2c9eb969c61a3801dbf5bdfbd26acb09b34258b9a02/scikitplot_cython_94f2c8a084130c50.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:39Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='952f0cee22c44ba2e0712b3289fd7b2a6e2e9b2c556f67c7897adb16271c7bb7', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/952f0cee22c44ba2e0712b3289fd7b2a6e2e9b2c556f67c7897adb16271c7bb7'), module_name='scikitplot_cython_952f0cee22c44ba2', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/952f0cee22c44ba2e0712b3289fd7b2a6e2e9b2c556f67c7897adb16271c7bb7/scikitplot_cython_952f0cee22c44ba2.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:37Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='d19138d3d35d5a87d38b00cf3a3eee7e5081ba859d2cf61b1d096e91e9b597b7', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/d19138d3d35d5a87d38b00cf3a3eee7e5081ba859d2cf61b1d096e91e9b597b7'), module_name='scikitplot_cython_d19138d3d35d5a87', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/d19138d3d35d5a87d38b00cf3a3eee7e5081ba859d2cf61b1d096e91e9b597b7/scikitplot_cython_d19138d3d35d5a87.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:43Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='dd0da600ac6ed5e7dbcfd2918576952886d5114eca3dec0d6e6f6ee9b934999a', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/dd0da600ac6ed5e7dbcfd2918576952886d5114eca3dec0d6e6f6ee9b934999a'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/dd0da600ac6ed5e7dbcfd2918576952886d5114eca3dec0d6e6f6ee9b934999a/multifile_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:44Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='de39ace50b923b2dee99c9add4132bc740851438edd8e09353c60de97c1834a0', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/de39ace50b923b2dee99c9add4132bc740851438edd8e09353c60de97c1834a0'), module_name='scikitplot_cython_de39ace50b923b2d', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/de39ace50b923b2dee99c9add4132bc740851438edd8e09353c60de97c1834a0/scikitplot_cython_de39ace50b923b2d.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:40Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='fcac90c463a19f23eb5889dc75d788810abc27b27a5c98982d8ac8f85f2f3d21', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/fcac90c463a19f23eb5889dc75d788810abc27b27a5c98982d8ac8f85f2f3d21'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/fcac90c463a19f23eb5889dc75d788810abc27b27a5c98982d8ac8f85f2f3d21/cpp_mode_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-05-11T19:13:46Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'})]

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
<module 'scikitplot_cython_f765dbd384f29572' from '/home/circleci/.cache/scikitplot/cython/f765dbd384f295721438a97828173b03b1c478485ec55e77d94dd25c1e33ebaa/scikitplot_cython_f765dbd384f29572.cpython-311-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 4.770 seconds)

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