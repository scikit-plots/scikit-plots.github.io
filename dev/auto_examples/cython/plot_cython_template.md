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
'2026.04.26'

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
[CacheEntry(key='1718928faa9807fd3a12c46d914f020b847a3d8fb6081df25b7a5199410bb639', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/1718928faa9807fd3a12c46d914f020b847a3d8fb6081df25b7a5199410bb639'), module_name='scikitplot_cython_1718928faa9807fd', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/1718928faa9807fd3a12c46d914f020b847a3d8fb6081df25b7a5199410bb639/scikitplot_cython_1718928faa9807fd.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:32Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='27e834d4d9b9704b6531d579adba3e067590eb11fa92da0e71dbff68fab3b664', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/27e834d4d9b9704b6531d579adba3e067590eb11fa92da0e71dbff68fab3b664'), module_name='scikitplot_cython_27e834d4d9b9704b', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/27e834d4d9b9704b6531d579adba3e067590eb11fa92da0e71dbff68fab3b664/scikitplot_cython_27e834d4d9b9704b.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:19Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='30e033b9a404ca4d13e5e35fc0fe0e7882e6e681c3f3031e37440422f028cdc1', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/30e033b9a404ca4d13e5e35fc0fe0e7882e6e681c3f3031e37440422f028cdc1'), module_name='scikitplot_cython_30e033b9a404ca4d', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/30e033b9a404ca4d13e5e35fc0fe0e7882e6e681c3f3031e37440422f028cdc1/scikitplot_cython_30e033b9a404ca4d.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:22Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='6c04ea2bd6899e8d8818c8e5de92808f872e0463b434bac688e96ae500076af8', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/6c04ea2bd6899e8d8818c8e5de92808f872e0463b434bac688e96ae500076af8'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/6c04ea2bd6899e8d8818c8e5de92808f872e0463b434bac688e96ae500076af8/wf_ext_square.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:30Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='8e6273f105dfb51440c1370ea54b6d4a65e7a08884c0c9ccfd2b2e0cab3d1311', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/8e6273f105dfb51440c1370ea54b6d4a65e7a08884c0c9ccfd2b2e0cab3d1311'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/8e6273f105dfb51440c1370ea54b6d4a65e7a08884c0c9ccfd2b2e0cab3d1311/cpp_mode_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:28Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='b82a7d5a410e110f658412dad516f578eab39189361958efd923b876759fc411', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/b82a7d5a410e110f658412dad516f578eab39189361958efd923b876759fc411'), module_name='scikitplot_cython_b82a7d5a410e110f', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/b82a7d5a410e110f658412dad516f578eab39189361958efd923b876759fc411/scikitplot_cython_b82a7d5a410e110f.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:19Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='c74e5383ac2f0e13cd160af32e41b0fcfa16923758bb1047d7199fd41054473a', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/c74e5383ac2f0e13cd160af32e41b0fcfa16923758bb1047d7199fd41054473a'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/c74e5383ac2f0e13cd160af32e41b0fcfa16923758bb1047d7199fd41054473a/memview_scale_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:31Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='c7f8ca5a32702f90198772919c7ee4ee9469d54dcd587e81217b6f20942038a3', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/c7f8ca5a32702f90198772919c7ee4ee9469d54dcd587e81217b6f20942038a3'), module_name='scikitplot_cython_c7f8ca5a32702f90', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/c7f8ca5a32702f90198772919c7ee4ee9469d54dcd587e81217b6f20942038a3/scikitplot_cython_c7f8ca5a32702f90.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:20Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='d01505d85227c684ba855c28504c5b15a9695b959b0c5f74ee677df80466ee8e', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/d01505d85227c684ba855c28504c5b15a9695b959b0c5f74ee677df80466ee8e'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/d01505d85227c684ba855c28504c5b15a9695b959b0c5f74ee677df80466ee8e/multifile_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:26Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='d3f4aafc923b048ba59272ae23a440300de85d08c9f682b904e3aaa17dc2951f', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/d3f4aafc923b048ba59272ae23a440300de85d08c9f682b904e3aaa17dc2951f'), module_name='scikitplot_cython_d3f4aafc923b048b', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/d3f4aafc923b048ba59272ae23a440300de85d08c9f682b904e3aaa17dc2951f/scikitplot_cython_d3f4aafc923b048b.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:25Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='f4815d14f032f2aab764ea9a4e20e1f8dcae07610bda1514d5de90e1964142b5', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/f4815d14f032f2aab764ea9a4e20e1f8dcae07610bda1514d5de90e1964142b5'), module_name='scikitplot_cython_f4815d14f032f2aa', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/f4815d14f032f2aab764ea9a4e20e1f8dcae07610bda1514d5de90e1964142b5/scikitplot_cython_f4815d14f032f2aa.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:24Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='f52b9ea7da4c44ddfa2fe6ff8fac643a390d2f1726a87b92dcd908ec9ac22c77', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/f52b9ea7da4c44ddfa2fe6ff8fac643a390d2f1726a87b92dcd908ec9ac22c77'), module_name='scikitplot_cython_f52b9ea7da4c44dd', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/f52b9ea7da4c44ddfa2fe6ff8fac643a390d2f1726a87b92dcd908ec9ac22c77/scikitplot_cython_f52b9ea7da4c44dd.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-04-26T19:30:22Z', fingerprint={'abi': '', 'cython': '3.2.4', 'machine': 'x86_64', 'numpy': '2.4.4', 'platform': 'Linux-6.17.0-1007-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/1718928faa9807fd3a12c46d914f020b847a3d8fb6081df25b7a5199410bb639')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/1718928faa9807fd3a12c46d914f020b847a3d8fb6081df25b7a5199410bb639/scikitplot_cython_1718928faa9807fd.cpython-311-x86_64-linux-gnu.so')

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
<module 'scikitplot_cython_3b715a32d7e10aa0' from '/home/circleci/.cache/scikitplot/cython/3b715a32d7e10aa0da2a9f2cda5e9ff68062b2c6b4414437d5748bc616d10868/scikitplot_cython_3b715a32d7e10aa0.cpython-311-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 4.989 seconds)

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