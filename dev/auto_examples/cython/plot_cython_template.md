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
'2026.07.13'

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
[CacheEntry(key='2ad9207cda56b631a22c3b4674251aaaf1431eb4cc11f974d3e7594e26493ce8', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/2ad9207cda56b631a22c3b4674251aaaf1431eb4cc11f974d3e7594e26493ce8'), module_name='scikitplot_cython_2ad9207cda56b631', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/2ad9207cda56b631a22c3b4674251aaaf1431eb4cc11f974d3e7594e26493ce8/scikitplot_cython_2ad9207cda56b631.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:01:37Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='3525db5297783fc9412d557c2fc917a06e082e117120f9cffaaceaba911bf6a2', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/3525db5297783fc9412d557c2fc917a06e082e117120f9cffaaceaba911bf6a2'), module_name='scikitplot_cython_3525db5297783fc9', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/3525db5297783fc9412d557c2fc917a06e082e117120f9cffaaceaba911bf6a2/scikitplot_cython_3525db5297783fc9.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:01:41Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='4d529adc75895890eb4657e7c174963ad52a0a0a7fe8cccb01f2c1d55768e594', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/4d529adc75895890eb4657e7c174963ad52a0a0a7fe8cccb01f2c1d55768e594'), module_name='scikitplot_cython_4d529adc75895890', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/4d529adc75895890eb4657e7c174963ad52a0a0a7fe8cccb01f2c1d55768e594/scikitplot_cython_4d529adc75895890.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:01:31Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='5b7e679402b6bb589f43bbcd8621434de9ad1ebf06b90fd1bd3b50fca47d2902', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/5b7e679402b6bb589f43bbcd8621434de9ad1ebf06b90fd1bd3b50fca47d2902'), module_name='scikitplot_cython_5b7e679402b6bb58', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/5b7e679402b6bb589f43bbcd8621434de9ad1ebf06b90fd1bd3b50fca47d2902/scikitplot_cython_5b7e679402b6bb58.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:01:30Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='6b6349e62472ad4b193a6806b3948c770af340195c1fdb78529bf1391a995cf9', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/6b6349e62472ad4b193a6806b3948c770af340195c1fdb78529bf1391a995cf9'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/6b6349e62472ad4b193a6806b3948c770af340195c1fdb78529bf1391a995cf9/multifile_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:01:49Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='7aac21e32a722883442a91cfdff3e1efcf17ffe9b35fb69db77a60457e155eb0', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/7aac21e32a722883442a91cfdff3e1efcf17ffe9b35fb69db77a60457e155eb0'), module_name='scikitplot_cython_7aac21e32a722883', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/7aac21e32a722883442a91cfdff3e1efcf17ffe9b35fb69db77a60457e155eb0/scikitplot_cython_7aac21e32a722883.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:02:01Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='87884e864996dc7f397e14be0b5b0b23c4b62b6c0519cf2eba53cb395797754b', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/87884e864996dc7f397e14be0b5b0b23c4b62b6c0519cf2eba53cb395797754b'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/87884e864996dc7f397e14be0b5b0b23c4b62b6c0519cf2eba53cb395797754b/cpp_mode_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:01:52Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='973783b2242f6c26d62fecf8f05a18b392f8d23f5a7fb63bba2e3dfcbe660a0d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/973783b2242f6c26d62fecf8f05a18b392f8d23f5a7fb63bba2e3dfcbe660a0d'), module_name='scikitplot_cython_973783b2242f6c26', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/973783b2242f6c26d62fecf8f05a18b392f8d23f5a7fb63bba2e3dfcbe660a0d/scikitplot_cython_973783b2242f6c26.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:01:34Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='9a2440e82caee421773b637aa6cc559b2f067fefcb589ad13fe6bfae69ca2ee6', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/9a2440e82caee421773b637aa6cc559b2f067fefcb589ad13fe6bfae69ca2ee6'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/9a2440e82caee421773b637aa6cc559b2f067fefcb589ad13fe6bfae69ca2ee6/wf_ext_square.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:01:57Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='a913df15a248c8ec3a3bdd283726007bb5607924496b2f6d784c7c6ec7fddfbe', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/a913df15a248c8ec3a3bdd283726007bb5607924496b2f6d784c7c6ec7fddfbe'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/a913df15a248c8ec3a3bdd283726007bb5607924496b2f6d784c7c6ec7fddfbe/memview_scale_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:01:55Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='b81e8347b17b98a484d3862a231c1fa5e2835426a30a712a9580529b74487250', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/b81e8347b17b98a484d3862a231c1fa5e2835426a30a712a9580529b74487250'), module_name='scikitplot_cython_b81e8347b17b98a4', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/b81e8347b17b98a484d3862a231c1fa5e2835426a30a712a9580529b74487250/scikitplot_cython_b81e8347b17b98a4.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:01:30Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='d5ca7b3746d73d67840eaa88e0fe11e087b407ef2d5d346b51fdd6ae0043e7f3', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/d5ca7b3746d73d67840eaa88e0fe11e087b407ef2d5d346b51fdd6ae0043e7f3'), module_name='scikitplot_cython_d5ca7b3746d73d67', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/d5ca7b3746d73d67840eaa88e0fe11e087b407ef2d5d346b51fdd6ae0043e7f3/scikitplot_cython_d5ca7b3746d73d67.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-14T00:01:36Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/2ad9207cda56b631a22c3b4674251aaaf1431eb4cc11f974d3e7594e26493ce8')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/2ad9207cda56b631a22c3b4674251aaaf1431eb4cc11f974d3e7594e26493ce8/scikitplot_cython_2ad9207cda56b631.cpython-312-x86_64-linux-gnu.so')

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
<module 'scikitplot_cython_b1094fc7ac6473ee' from '/home/circleci/.cache/scikitplot/cython/b1094fc7ac6473ee9a0304222388dbae26b544b6c5ce4a66077901f0b7552112/scikitplot_cython_b1094fc7ac6473ee.cpython-312-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 6.012 seconds)

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