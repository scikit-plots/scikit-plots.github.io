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
'2026.07.05'

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
[CacheEntry(key='08043d7e6dee861ae8e1bb4fd23d20b9cbc266062eb1903b279d233fee7f810b', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/08043d7e6dee861ae8e1bb4fd23d20b9cbc266062eb1903b279d233fee7f810b'), module_name='scikitplot_cython_08043d7e6dee861a', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/08043d7e6dee861ae8e1bb4fd23d20b9cbc266062eb1903b279d233fee7f810b/scikitplot_cython_08043d7e6dee861a.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:13Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='0b85c088cd1048e47059ffd9670e665f08de4b426e642aef61bd585b91c304f6', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/0b85c088cd1048e47059ffd9670e665f08de4b426e642aef61bd585b91c304f6'), module_name='scikitplot_cython_0b85c088cd1048e4', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/0b85c088cd1048e47059ffd9670e665f08de4b426e642aef61bd585b91c304f6/scikitplot_cython_0b85c088cd1048e4.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:13Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='230726695d9410f4dfedceda3d3d90e93c6ec909e2079a58fe2e63f9b542f2c6', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/230726695d9410f4dfedceda3d3d90e93c6ec909e2079a58fe2e63f9b542f2c6'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/230726695d9410f4dfedceda3d3d90e93c6ec909e2079a58fe2e63f9b542f2c6/wf_ext_square.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:33Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='430e3ed335a36e9fe129fdd91579ecad80968741cb6667c29d8d6cbb0f4bec37', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/430e3ed335a36e9fe129fdd91579ecad80968741cb6667c29d8d6cbb0f4bec37'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/430e3ed335a36e9fe129fdd91579ecad80968741cb6667c29d8d6cbb0f4bec37/memview_scale_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:31Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='4508042e23215f5230f577cd98da9ff914e9127acbf7a421a544d9bc567acb9a', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/4508042e23215f5230f577cd98da9ff914e9127acbf7a421a544d9bc567acb9a'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/4508042e23215f5230f577cd98da9ff914e9127acbf7a421a544d9bc567acb9a/multifile_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:24Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='486f5673e19e02e96de72815c93b408a18af65c2ef94a7737446df21459b8ac2', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/486f5673e19e02e96de72815c93b408a18af65c2ef94a7737446df21459b8ac2'), module_name='scikitplot_cython_486f5673e19e02e9', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/486f5673e19e02e96de72815c93b408a18af65c2ef94a7737446df21459b8ac2/scikitplot_cython_486f5673e19e02e9.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:07Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='503f5d907981e10df9057bc868e41f69ebaca7202855e37460da8c7ba8595379', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/503f5d907981e10df9057bc868e41f69ebaca7202855e37460da8c7ba8595379'), module_name='scikitplot_cython_503f5d907981e10d', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/503f5d907981e10df9057bc868e41f69ebaca7202855e37460da8c7ba8595379/scikitplot_cython_503f5d907981e10d.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:17Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='6a1b6a0cddbde637c31f6a83559f8c0096d5523568553f758710b4c838d62986', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/6a1b6a0cddbde637c31f6a83559f8c0096d5523568553f758710b4c838d62986'), module_name='scikitplot_cython_6a1b6a0cddbde637', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/6a1b6a0cddbde637c31f6a83559f8c0096d5523568553f758710b4c838d62986/scikitplot_cython_6a1b6a0cddbde637.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:08Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='6e960ef041faff62c2446b4dacb74f70154663f2bd7b1db85124cd870657f002', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/6e960ef041faff62c2446b4dacb74f70154663f2bd7b1db85124cd870657f002'), module_name='scikitplot_cython_6e960ef041faff62', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/6e960ef041faff62c2446b4dacb74f70154663f2bd7b1db85124cd870657f002/scikitplot_cython_6e960ef041faff62.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:10Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='702f9f01155bafe2523a599d9c0068c6aa69f369dd6c6b6967d977db6f21e2a9', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/702f9f01155bafe2523a599d9c0068c6aa69f369dd6c6b6967d977db6f21e2a9'), module_name='scikitplot_cython_702f9f01155bafe2', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/702f9f01155bafe2523a599d9c0068c6aa69f369dd6c6b6967d977db6f21e2a9/scikitplot_cython_702f9f01155bafe2.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:37Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='bae8f9ef1f360390e728e25ef38b7359e3f2f6383622b6c38939172bd86a6c80', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/bae8f9ef1f360390e728e25ef38b7359e3f2f6383622b6c38939172bd86a6c80'), module_name='scikitplot_cython_bae8f9ef1f360390', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/bae8f9ef1f360390e728e25ef38b7359e3f2f6383622b6c38939172bd86a6c80/scikitplot_cython_bae8f9ef1f360390.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:06Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}), CacheEntry(key='bb73871c93878ac41a7a6731858210dafd2157ce9824535c28b89e871a94000d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/bb73871c93878ac41a7a6731858210dafd2157ce9824535c28b89e871a94000d'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/bb73871c93878ac41a7a6731858210dafd2157ce9824535c28b89e871a94000d/cpp_mode_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-07-06T00:51:27Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/08043d7e6dee861ae8e1bb4fd23d20b9cbc266062eb1903b279d233fee7f810b')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/08043d7e6dee861ae8e1bb4fd23d20b9cbc266062eb1903b279d233fee7f810b/scikitplot_cython_08043d7e6dee861a.cpython-312-x86_64-linux-gnu.so')

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
<module 'scikitplot_cython_b5ab3f2d3ab99722' from '/home/circleci/.cache/scikitplot/cython/b5ab3f2d3ab997227c45994c5615b4666a5cd25ed3a484128103869c2f31c809/scikitplot_cython_b5ab3f2d3ab99722.cpython-312-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 6.213 seconds)

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