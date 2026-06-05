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
'2026.06.05'

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
[CacheEntry(key='01dd21214243c2d7a88c8ed7b8e71dff57f23272c1f732bedfb1ac838bc4d9fa', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/01dd21214243c2d7a88c8ed7b8e71dff57f23272c1f732bedfb1ac838bc4d9fa'), module_name='scikitplot_cython_01dd21214243c2d7', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/01dd21214243c2d7a88c8ed7b8e71dff57f23272c1f732bedfb1ac838bc4d9fa/scikitplot_cython_01dd21214243c2d7.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:33Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='08e312eadcb8afaeb3b2ee3bf4f4620e6e87967554aebd00f6932e4aec56d767', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/08e312eadcb8afaeb3b2ee3bf4f4620e6e87967554aebd00f6932e4aec56d767'), module_name='scikitplot_cython_08e312eadcb8afae', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/08e312eadcb8afaeb3b2ee3bf4f4620e6e87967554aebd00f6932e4aec56d767/scikitplot_cython_08e312eadcb8afae.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:36Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff'), module_name='scikitplot_cython_1b5e70054f7239ef', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff/scikitplot_cython_1b5e70054f7239ef.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:33Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='21cc42f98ad1851f5ecdf14b0b8c5d154b6690477858a0fea4ff22b986f088b8', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/21cc42f98ad1851f5ecdf14b0b8c5d154b6690477858a0fea4ff22b986f088b8'), module_name='scikitplot_cython_21cc42f98ad1851f', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/21cc42f98ad1851f5ecdf14b0b8c5d154b6690477858a0fea4ff22b986f088b8/scikitplot_cython_21cc42f98ad1851f.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:31Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='3464939529e20b40db9cd23e32e1a086bba1f8ab1eaa338e87a105f0aba359c0', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/3464939529e20b40db9cd23e32e1a086bba1f8ab1eaa338e87a105f0aba359c0'), module_name='scikitplot_cython_3464939529e20b40', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/3464939529e20b40db9cd23e32e1a086bba1f8ab1eaa338e87a105f0aba359c0/scikitplot_cython_3464939529e20b40.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:29Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='589d9b79fcc8f0f1bc53ca6889ce263722d7b4d18e3edec3a0a4fde23164095a', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/589d9b79fcc8f0f1bc53ca6889ce263722d7b4d18e3edec3a0a4fde23164095a'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/589d9b79fcc8f0f1bc53ca6889ce263722d7b4d18e3edec3a0a4fde23164095a/cpp_mode_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:39Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='68b614f33cf06682779d8522862b78a78f2d47e77d9673e8bde32c03209daf6b', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/68b614f33cf06682779d8522862b78a78f2d47e77d9673e8bde32c03209daf6b'), module_name='scikitplot_cython_68b614f33cf06682', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/68b614f33cf06682779d8522862b78a78f2d47e77d9673e8bde32c03209daf6b/scikitplot_cython_68b614f33cf06682.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:36Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='721b1483cfa67e066e832793599b70857e6a51e00d0daea856e0a96f9c1276ad', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/721b1483cfa67e066e832793599b70857e6a51e00d0daea856e0a96f9c1276ad'), module_name='scikitplot_cython_721b1483cfa67e06', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/721b1483cfa67e066e832793599b70857e6a51e00d0daea856e0a96f9c1276ad/scikitplot_cython_721b1483cfa67e06.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:30Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='9fa352255b00e11519e8cf0ddc72d0161557fb2a4d662cfda681aa4478cdd57b', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/9fa352255b00e11519e8cf0ddc72d0161557fb2a4d662cfda681aa4478cdd57b'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/9fa352255b00e11519e8cf0ddc72d0161557fb2a4d662cfda681aa4478cdd57b/multifile_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:37Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='a31039ab5f02f35dbfda85e68788a71e537a5d24c2501233e11dd1285a6522f1', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/a31039ab5f02f35dbfda85e68788a71e537a5d24c2501233e11dd1285a6522f1'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/a31039ab5f02f35dbfda85e68788a71e537a5d24c2501233e11dd1285a6522f1/wf_ext_square.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:41Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='be961a6d91179812db1d433ad85cec952d41750ac8f8f1ded3743a589ccfe502', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/be961a6d91179812db1d433ad85cec952d41750ac8f8f1ded3743a589ccfe502'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/be961a6d91179812db1d433ad85cec952d41750ac8f8f1ded3743a589ccfe502/memview_scale_demo.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:41Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'}), CacheEntry(key='c4ca6c53ddb0723009d2acf62cb32eff2409df0b80d612dea7b62539eda8f7bf', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/c4ca6c53ddb0723009d2acf62cb32eff2409df0b80d612dea7b62539eda8f7bf'), module_name='scikitplot_cython_c4ca6c53ddb07230', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/c4ca6c53ddb0723009d2acf62cb32eff2409df0b80d612dea7b62539eda8f7bf/scikitplot_cython_c4ca6c53ddb07230.cpython-311-x86_64-linux-gnu.so'), created_utc='2026-06-05T12:37:43Z', fingerprint={'abi': '', 'cython': '3.2.5', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.11.15', 'python_impl': 'CPython'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/01dd21214243c2d7a88c8ed7b8e71dff57f23272c1f732bedfb1ac838bc4d9fa')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/01dd21214243c2d7a88c8ed7b8e71dff57f23272c1f732bedfb1ac838bc4d9fa/scikitplot_cython_01dd21214243c2d7.cpython-311-x86_64-linux-gnu.so')

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
<module 'scikitplot_cython_d187eb75a7e34e01' from '/home/circleci/.cache/scikitplot/cython/d187eb75a7e34e01d629783c231c3a78e7f873cd8274ea34f1aaf6d603cd3961/scikitplot_cython_d187eb75a7e34e01.cpython-311-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 4.904 seconds)

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