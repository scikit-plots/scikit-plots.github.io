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
'2026.10.10'

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
PosixPath('/home/circleci/.pyenv/versions/3.12.15/lib/python3.12/site-packages/scikitplot/cython/_templates/basic_cython/t01_square_int.pyx')

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
[CacheEntry(key='45ecdde8380130e1823bfb6c38bc2f0eb57315b18f3a6d0ee859b55892a89db0', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/45ecdde8380130e1823bfb6c38bc2f0eb57315b18f3a6d0ee859b55892a89db0'), module_name='scikitplot_cython_45ecdde8380130e1', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/45ecdde8380130e1823bfb6c38bc2f0eb57315b18f3a6d0ee859b55892a89db0/scikitplot_cython_45ecdde8380130e1.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:20:44Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.3', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='56e58f845c66595928fcf7b15deb63f35ef640923e7c020243667078450c3ed9', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/56e58f845c66595928fcf7b15deb63f35ef640923e7c020243667078450c3ed9'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/56e58f845c66595928fcf7b15deb63f35ef640923e7c020243667078450c3ed9/multifile_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:20:57Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.3', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='5b50d7696927d3ad18ec743b9dfabe63aaffb5f6069c4eb23b9ad0d4320ba375', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/5b50d7696927d3ad18ec743b9dfabe63aaffb5f6069c4eb23b9ad0d4320ba375'), module_name='scikitplot_cython_5b50d7696927d3ad', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/5b50d7696927d3ad18ec743b9dfabe63aaffb5f6069c4eb23b9ad0d4320ba375/scikitplot_cython_5b50d7696927d3ad.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:20:45Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.3', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='6424d2e0d8d15ade4b2b6471e0302c24dea5e1057b8e5e142e115da0fc7d2ff5', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/6424d2e0d8d15ade4b2b6471e0302c24dea5e1057b8e5e142e115da0fc7d2ff5'), module_name='scikitplot_cython_6424d2e0d8d15ade', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/6424d2e0d8d15ade4b2b6471e0302c24dea5e1057b8e5e142e115da0fc7d2ff5/scikitplot_cython_6424d2e0d8d15ade.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:20:47Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.3', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='906edc32d1ddc07d6ba435da1ef617d75bd8da7260f94233877801c6b4a133e5', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/906edc32d1ddc07d6ba435da1ef617d75bd8da7260f94233877801c6b4a133e5'), module_name='scikitplot_cython_906edc32d1ddc07d', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/906edc32d1ddc07d6ba435da1ef617d75bd8da7260f94233877801c6b4a133e5/scikitplot_cython_906edc32d1ddc07d.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:20:49Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.3', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='a57ae61be0b529b5865c73a93f93c877293f860d223ebaee53f9e6abb95b0daa', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/a57ae61be0b529b5865c73a93f93c877293f860d223ebaee53f9e6abb95b0daa'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/a57ae61be0b529b5865c73a93f93c877293f860d223ebaee53f9e6abb95b0daa/memview_scale_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:21:04Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='b2193fc93cc0682f69a3fabbbbb0a491219fe74962b29a1d280b3e675872b1fa', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/b2193fc93cc0682f69a3fabbbbb0a491219fe74962b29a1d280b3e675872b1fa'), module_name='scikitplot_cython_b2193fc93cc0682f', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/b2193fc93cc0682f69a3fabbbbb0a491219fe74962b29a1d280b3e675872b1fa/scikitplot_cython_b2193fc93cc0682f.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:20:43Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.3', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='db82410c3c2a3c54035864a807348268508924b8238c5dee772fcbba3ffb16ea', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/db82410c3c2a3c54035864a807348268508924b8238c5dee772fcbba3ffb16ea'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/db82410c3c2a3c54035864a807348268508924b8238c5dee772fcbba3ffb16ea/wf_ext_square.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:21:06Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.3', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='dff05a75806f2cf1fde32def62e7a25b362aa8319ccb1461502ef9b7caced0d5', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/dff05a75806f2cf1fde32def62e7a25b362aa8319ccb1461502ef9b7caced0d5'), module_name='scikitplot_cython_dff05a75806f2cf1', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/dff05a75806f2cf1fde32def62e7a25b362aa8319ccb1461502ef9b7caced0d5/scikitplot_cython_dff05a75806f2cf1.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:20:53Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.3', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='e8167a7c36e4afd1c428181380bbe343decee34c2a8ff18efe3cc094a0d42113', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/e8167a7c36e4afd1c428181380bbe343decee34c2a8ff18efe3cc094a0d42113'), module_name='scikitplot_cython_e8167a7c36e4afd1', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/e8167a7c36e4afd1c428181380bbe343decee34c2a8ff18efe3cc094a0d42113/scikitplot_cython_e8167a7c36e4afd1.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:20:50Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.3', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='ecce4141fe822616a6f019fc24a0f1d2d8951c5be7fb19aec4cd93f168088219', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/ecce4141fe822616a6f019fc24a0f1d2d8951c5be7fb19aec4cd93f168088219'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/ecce4141fe822616a6f019fc24a0f1d2d8951c5be7fb19aec4cd93f168088219/cpp_mode_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:21:00Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.3', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='f0bc8c27e968ea5b1f1efb64dd0adfb736d202c3a187d32ff114a4e94f3c4fca', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/f0bc8c27e968ea5b1f1efb64dd0adfb736d202c3a187d32ff114a4e94f3c4fca'), module_name='scikitplot_cython_f0bc8c27e968ea5b', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/f0bc8c27e968ea5b1f1efb64dd0adfb736d202c3a187d32ff114a4e94f3c4fca/scikitplot_cython_f0bc8c27e968ea5b.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-10T02:21:10Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.3', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/45ecdde8380130e1823bfb6c38bc2f0eb57315b18f3a6d0ee859b55892a89db0')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/45ecdde8380130e1823bfb6c38bc2f0eb57315b18f3a6d0ee859b55892a89db0/scikitplot_cython_45ecdde8380130e1.cpython-312-x86_64-linux-gnu.so')

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
<module 'scikitplot_cython_4fb38b56eb71482a' from '/home/circleci/.cache/scikitplot/cython/4fb38b56eb71482aec12f1dd04dc6d48cce6ee52ac3ae56fae28db720b5c02ff/scikitplot_cython_4fb38b56eb71482a.cpython-312-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 6.519 seconds)

[![Launch binder](../../_images/binder_badge_logo6.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_cython_template.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo6.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_cython_template.ipynb)

[`Download Jupyter notebook: plot_cython_template.ipynb`](../../_downloads/6053307ed76a82d9d7a64548e10f50aa/plot_cython_template.ipynb)

[`Download Python source code: plot_cython_template.py`](../../_downloads/d01d24a48a3cd1c5d71ccba73d308fbb/plot_cython_template.py)

[`Download zipped: plot_cython_template.zip`](../../_downloads/c158a77b0388225ed9e23d6ed4d33725/plot_cython_template.zip)

Related examples

![](../../_images/sphx_glr_plot_nc_test_thumb.png)

[nc with examples](../nc/plot_nc_test.html)

nc with examples![](../../_images/sphx_glr_plot_learning_curve_script_thumb.png)

[plot\_learning\_curve with examples](../classification/plot_learning_curve_script.html)

plot\_learning\_curve with examples![](../../_images/sphx_glr_plot_silhouette_script_thumb.png)

[plot\_silhouette with examples](../clustering/plot_silhouette_script.html)

plot\_silhouette with examples![](../../_images/sphx_glr_plot_precision_recall_script_thumb.png)

[plot\_precision\_recall with examples](../classification/plot_precision_recall_script.html)

plot\_precision\_recall with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)