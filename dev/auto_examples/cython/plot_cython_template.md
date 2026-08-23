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
'2026.08.23'

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
PosixPath('/home/circleci/.pyenv/versions/3.12.14/lib/python3.12/site-packages/scikitplot/cython/_templates/basic_cython/t01_square_int.pyx')

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
[CacheEntry(key='09578f20231f4e4aa124f8f95bade1777612005bff8129cf57a585b6fdfb5fb0', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/09578f20231f4e4aa124f8f95bade1777612005bff8129cf57a585b6fdfb5fb0'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/09578f20231f4e4aa124f8f95bade1777612005bff8129cf57a585b6fdfb5fb0/cpp_mode_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:18Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.2', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='28caa7475676c5dda8f10063fec4becb5a15cdf4363c28657626cb643316767d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/28caa7475676c5dda8f10063fec4becb5a15cdf4363c28657626cb643316767d'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/28caa7475676c5dda8f10063fec4becb5a15cdf4363c28657626cb643316767d/memview_scale_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:21Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='36f3354b8830c62acbe43ae00f723c6d4234bd3df27b0cd5d45ac37228752a23', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/36f3354b8830c62acbe43ae00f723c6d4234bd3df27b0cd5d45ac37228752a23'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/36f3354b8830c62acbe43ae00f723c6d4234bd3df27b0cd5d45ac37228752a23/wf_ext_square.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:23Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.2', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='478696ca4d8a0f9fae8bc60d6aaadc9d3d498b707c8e8e0b0ffb36f75c21817d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/478696ca4d8a0f9fae8bc60d6aaadc9d3d498b707c8e8e0b0ffb36f75c21817d'), module_name='scikitplot_cython_478696ca4d8a0f9f', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/478696ca4d8a0f9fae8bc60d6aaadc9d3d498b707c8e8e0b0ffb36f75c21817d/scikitplot_cython_478696ca4d8a0f9f.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:02Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.2', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='61223c3f05c2beea063c2971ae17b67ba16eeb4e47746eebf6aad1ebe90e3652', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/61223c3f05c2beea063c2971ae17b67ba16eeb4e47746eebf6aad1ebe90e3652'), module_name='scikitplot_cython_61223c3f05c2beea', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/61223c3f05c2beea063c2971ae17b67ba16eeb4e47746eebf6aad1ebe90e3652/scikitplot_cython_61223c3f05c2beea.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:01Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.2', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='79475d7848e967a8b6f7d62158945219d2e4d1c69fa908070dfde7da4bce5611', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/79475d7848e967a8b6f7d62158945219d2e4d1c69fa908070dfde7da4bce5611'), module_name='scikitplot_cython_79475d7848e967a8', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/79475d7848e967a8b6f7d62158945219d2e4d1c69fa908070dfde7da4bce5611/scikitplot_cython_79475d7848e967a8.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:08Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.2', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='8adb444b7fa78f5910480a548ef7626e72460f8d21983641a4b1bf479f6149bf', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/8adb444b7fa78f5910480a548ef7626e72460f8d21983641a4b1bf479f6149bf'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/8adb444b7fa78f5910480a548ef7626e72460f8d21983641a4b1bf479f6149bf/multifile_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:15Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.2', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='95f9d723c6976c0f6221cea31b0d3430f2b799ed1f37882c498b451983dd15a7', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/95f9d723c6976c0f6221cea31b0d3430f2b799ed1f37882c498b451983dd15a7'), module_name='scikitplot_cython_95f9d723c6976c0f', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/95f9d723c6976c0f6221cea31b0d3430f2b799ed1f37882c498b451983dd15a7/scikitplot_cython_95f9d723c6976c0f.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:27Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.2', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='d00cb002fa589aa9964e22f4927547b8514f069628f917ca64085f27d9140642', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/d00cb002fa589aa9964e22f4927547b8514f069628f917ca64085f27d9140642'), module_name='scikitplot_cython_d00cb002fa589aa9', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/d00cb002fa589aa9964e22f4927547b8514f069628f917ca64085f27d9140642/scikitplot_cython_d00cb002fa589aa9.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:03Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.2', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='e3397e3200789c52526e16b146e7332b241aca635976af14884f0189d0269a76', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/e3397e3200789c52526e16b146e7332b241aca635976af14884f0189d0269a76'), module_name='scikitplot_cython_e3397e3200789c52', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/e3397e3200789c52526e16b146e7332b241aca635976af14884f0189d0269a76/scikitplot_cython_e3397e3200789c52.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:05Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.2', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='f6c832457134a0bc057065ec78a2b47e43b2b347b1a4709df66586b3116f2294', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/f6c832457134a0bc057065ec78a2b47e43b2b347b1a4709df66586b3116f2294'), module_name='scikitplot_cython_f6c832457134a0bc', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/f6c832457134a0bc057065ec78a2b47e43b2b347b1a4709df66586b3116f2294/scikitplot_cython_f6c832457134a0bc.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:12Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.2', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='f8c79d3320d59093830819e311aa0e22eb5d3e64df2819febfc24ab7a808d55b', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/f8c79d3320d59093830819e311aa0e22eb5d3e64df2819febfc24ab7a808d55b'), module_name='scikitplot_cython_f8c79d3320d59093', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/f8c79d3320d59093830819e311aa0e22eb5d3e64df2819febfc24ab7a808d55b/scikitplot_cython_f8c79d3320d59093.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-08-23T18:44:08Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.2', 'platform': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.14', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/09578f20231f4e4aa124f8f95bade1777612005bff8129cf57a585b6fdfb5fb0')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/09578f20231f4e4aa124f8f95bade1777612005bff8129cf57a585b6fdfb5fb0/cpp_mode_demo.cpython-312-x86_64-linux-gnu.so')

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
<module 'scikitplot_cython_f4ee1fd761a895c2' from '/home/circleci/.cache/scikitplot/cython/f4ee1fd761a895c2627c97cd75fdc420ab9c71a38196c255d874c25dc220f2e6/scikitplot_cython_f4ee1fd761a895c2.cpython-312-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 6.049 seconds)

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