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
'2026.08.08'

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
[CacheEntry(key='0ac20bc6770aef20e8600d333d1d146ff8aa8e0898373240be542dd06518567d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/0ac20bc6770aef20e8600d333d1d146ff8aa8e0898373240be542dd06518567d'), module_name='scikitplot_cython_0ac20bc6770aef20', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/0ac20bc6770aef20e8600d333d1d146ff8aa8e0898373240be542dd06518567d/scikitplot_cython_0ac20bc6770aef20.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:08Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='27f80730b47a731ea98d0b45195a1399dd2e9f1432926e05614df4f89558db46', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/27f80730b47a731ea98d0b45195a1399dd2e9f1432926e05614df4f89558db46'), module_name='scikitplot_cython_27f80730b47a731e', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/27f80730b47a731ea98d0b45195a1399dd2e9f1432926e05614df4f89558db46/scikitplot_cython_27f80730b47a731e.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:10Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='3ae7df0826270152601144beac90d4da28e445297ae774070ee8ad5b932f711b', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/3ae7df0826270152601144beac90d4da28e445297ae774070ee8ad5b932f711b'), module_name='scikitplot_cython_3ae7df0826270152', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/3ae7df0826270152601144beac90d4da28e445297ae774070ee8ad5b932f711b/scikitplot_cython_3ae7df0826270152.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:17Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='54b211bcf473e8f6523eb9f7d068506a6010a5d25684021bb88a0b18797b8d41', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/54b211bcf473e8f6523eb9f7d068506a6010a5d25684021bb88a0b18797b8d41'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/54b211bcf473e8f6523eb9f7d068506a6010a5d25684021bb88a0b18797b8d41/multifile_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:21Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='5577ad6672647da6c43bb36d425dd7fc97fb398590de0a792be2e369ac9b7311', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/5577ad6672647da6c43bb36d425dd7fc97fb398590de0a792be2e369ac9b7311'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/5577ad6672647da6c43bb36d425dd7fc97fb398590de0a792be2e369ac9b7311/memview_scale_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:27Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='7024267ad2d3c2afa1443f720ed827a3fda6a73089b625ac96fbae1e4394d000', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/7024267ad2d3c2afa1443f720ed827a3fda6a73089b625ac96fbae1e4394d000'), module_name='scikitplot_cython_7024267ad2d3c2af', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/7024267ad2d3c2afa1443f720ed827a3fda6a73089b625ac96fbae1e4394d000/scikitplot_cython_7024267ad2d3c2af.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:06Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='99713b8ff62102ab0081325007c5dfeb86f09bffbf9bbb3d3b2782e1a8552094', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/99713b8ff62102ab0081325007c5dfeb86f09bffbf9bbb3d3b2782e1a8552094'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/99713b8ff62102ab0081325007c5dfeb86f09bffbf9bbb3d3b2782e1a8552094/wf_ext_square.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:29Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='ad8e91b7b8a1550c8706b9bc01d938b1509422e7a1adb8a625970e3eb12bce26', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/ad8e91b7b8a1550c8706b9bc01d938b1509422e7a1adb8a625970e3eb12bce26'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/ad8e91b7b8a1550c8706b9bc01d938b1509422e7a1adb8a625970e3eb12bce26/cpp_mode_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:23Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='ae5fac491f99ee298b1a8bdc972ee4191c45b8d325539cbec1deeb5aaf7cc411', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/ae5fac491f99ee298b1a8bdc972ee4191c45b8d325539cbec1deeb5aaf7cc411'), module_name='scikitplot_cython_ae5fac491f99ee29', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/ae5fac491f99ee298b1a8bdc972ee4191c45b8d325539cbec1deeb5aaf7cc411/scikitplot_cython_ae5fac491f99ee29.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:33Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='b7dab274e3fd001ea22a772ac180186ac42d98a930de71922e64717c7c18ff9f', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/b7dab274e3fd001ea22a772ac180186ac42d98a930de71922e64717c7c18ff9f'), module_name='scikitplot_cython_b7dab274e3fd001e', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/b7dab274e3fd001ea22a772ac180186ac42d98a930de71922e64717c7c18ff9f/scikitplot_cython_b7dab274e3fd001e.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:13Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='c9fa120136e2f5589f656a08da08fb3845159ab04926b9c67f5df454a2cfffd6', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/c9fa120136e2f5589f656a08da08fb3845159ab04926b9c67f5df454a2cfffd6'), module_name='scikitplot_cython_c9fa120136e2f558', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/c9fa120136e2f5589f656a08da08fb3845159ab04926b9c67f5df454a2cfffd6/scikitplot_cython_c9fa120136e2f558.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:13Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='cb68b77d0401864167a3b412a9fcbefd52217bafc03c42b2f69e03022226186e', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/cb68b77d0401864167a3b412a9fcbefd52217bafc03c42b2f69e03022226186e'), module_name='scikitplot_cython_cb68b77d04018641', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/cb68b77d0401864167a3b412a9fcbefd52217bafc03c42b2f69e03022226186e/scikitplot_cython_cb68b77d04018641.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-07T22:11:06Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.2.9', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/0ac20bc6770aef20e8600d333d1d146ff8aa8e0898373240be542dd06518567d')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/0ac20bc6770aef20e8600d333d1d146ff8aa8e0898373240be542dd06518567d/scikitplot_cython_0ac20bc6770aef20.cpython-312-x86_64-linux-gnu.so')

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
<module 'scikitplot_cython_699d3796d51e5fd8' from '/home/circleci/.cache/scikitplot/cython/699d3796d51e5fd87ea53fc35092397723d605a48910ea1c522130f47ad24694/scikitplot_cython_699d3796d51e5fd8.cpython-312-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 5.980 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_cython_template.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_cython_template.ipynb)

[`Download Jupyter notebook: plot_cython_template.ipynb`](../../_downloads/6053307ed76a82d9d7a64548e10f50aa/plot_cython_template.ipynb)

[`Download Python source code: plot_cython_template.py`](../../_downloads/d01d24a48a3cd1c5d71ccba73d308fbb/plot_cython_template.py)

[`Download zipped: plot_cython_template.zip`](../../_downloads/c158a77b0388225ed9e23d6ed4d33725/plot_cython_template.zip)

Related examples

![](../../_images/sphx_glr_plot_nc_test_thumb.png)

[nc with examples](../nc/plot_nc_test.html)

nc with examples![](../../_images/sphx_glr_plot_09_workflow_templates_cli_thumb.png)

[Workflow templates (train / hpo / predict) + CLI entry template](plot_09_workflow_templates_cli.html)

Workflow templates (train / hpo / predict) + CLI entry template![](../../_images/sphx_glr_plot_dl_nlp_vector_index_db_thumb.png)

[visualkeras: Vector Index DB](../visualkeras/plot_dl_nlp_vector_index_db.html)

visualkeras: Vector Index DB![](../../_images/sphx_glr_plot_01_browse_and_compile_templates_thumb.png)

[Browse and compile templates](plot_01_browse_and_compile_templates.html)

Browse and compile templates

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)