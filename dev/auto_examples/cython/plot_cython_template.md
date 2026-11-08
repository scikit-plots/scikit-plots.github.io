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
'2026.11.08'

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
PosixPath('/home/circleci/.pyenv/versions/3.12.16/lib/python3.12/site-packages/scikitplot/cython/_templates/basic_cython/t01_square_int.pyx')

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
[CacheEntry(key='1f552abc1cec8566d6e5ebd80fb130b2cc10bd2c54d6d455a9ce0c1d6649a578', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/1f552abc1cec8566d6e5ebd80fb130b2cc10bd2c54d6d455a9ce0c1d6649a578'), module_name='scikitplot_cython_1f552abc1cec8566', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/1f552abc1cec8566d6e5ebd80fb130b2cc10bd2c54d6d455a9ce0c1d6649a578/scikitplot_cython_1f552abc1cec8566.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:35Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='3dc5e64742a1231116f647636f77f637ad9cd5241d2e02670f32d164c0a7851f', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/3dc5e64742a1231116f647636f77f637ad9cd5241d2e02670f32d164c0a7851f'), module_name='scikitplot_cython_3dc5e64742a12311', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/3dc5e64742a1231116f647636f77f637ad9cd5241d2e02670f32d164c0a7851f/scikitplot_cython_3dc5e64742a12311.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:34Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='431feaa7063234ee8a6838e76f05cb8601cb5280e03c9f41dd1fe1b1815b8f5d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/431feaa7063234ee8a6838e76f05cb8601cb5280e03c9f41dd1fe1b1815b8f5d'), module_name='scikitplot_cython_431feaa7063234ee', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/431feaa7063234ee8a6838e76f05cb8601cb5280e03c9f41dd1fe1b1815b8f5d/scikitplot_cython_431feaa7063234ee.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:29Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='5101778495713d4e751154df264a1d2d9ef072321d4de8035a1fa2137dc6795f', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/5101778495713d4e751154df264a1d2d9ef072321d4de8035a1fa2137dc6795f'), module_name='scikitplot_cython_5101778495713d4e', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/5101778495713d4e751154df264a1d2d9ef072321d4de8035a1fa2137dc6795f/scikitplot_cython_5101778495713d4e.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:28Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='6dc384fd207d8149d4dd3cae1fb384debe68cb0b39d7d2048f3c038f3a1a68f7', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/6dc384fd207d8149d4dd3cae1fb384debe68cb0b39d7d2048f3c038f3a1a68f7'), module_name='scikitplot_cython_6dc384fd207d8149', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/6dc384fd207d8149d4dd3cae1fb384debe68cb0b39d7d2048f3c038f3a1a68f7/scikitplot_cython_6dc384fd207d8149.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:52Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='71992493450ecf04b2823dd7658c85b080e17e127c2151b2f4b6cbf0482ac4ec', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/71992493450ecf04b2823dd7658c85b080e17e127c2151b2f4b6cbf0482ac4ec'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/71992493450ecf04b2823dd7658c85b080e17e127c2151b2f4b6cbf0482ac4ec/wf_ext_square.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:49Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='763d0340331f34c51a3644cd404047f4e1fc6c7df56c4db4517ce55ce912a3f3', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/763d0340331f34c51a3644cd404047f4e1fc6c7df56c4db4517ce55ce912a3f3'), module_name='scikitplot_cython_763d0340331f34c5', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/763d0340331f34c51a3644cd404047f4e1fc6c7df56c4db4517ce55ce912a3f3/scikitplot_cython_763d0340331f34c5.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:32Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='9be798de437f4ff084fa7a6bcb4a229f7fffdf8504f930e5124c567bb1c3d733', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/9be798de437f4ff084fa7a6bcb4a229f7fffdf8504f930e5124c567bb1c3d733'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/9be798de437f4ff084fa7a6bcb4a229f7fffdf8504f930e5124c567bb1c3d733/cpp_mode_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:44Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='9d0990d3636a6c6b9956c716515ead21468807f4f08a0f7bf2f4be47403893ab', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/9d0990d3636a6c6b9956c716515ead21468807f4f08a0f7bf2f4be47403893ab'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/9d0990d3636a6c6b9956c716515ead21468807f4f08a0f7bf2f4be47403893ab/memview_scale_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:47Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='c85fb2ae7082a2b685cd2582a85b0e9a4bb311cb1440269a27e02ef245527214', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/c85fb2ae7082a2b685cd2582a85b0e9a4bb311cb1440269a27e02ef245527214'), module_name='scikitplot_cython_c85fb2ae7082a2b6', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/c85fb2ae7082a2b685cd2582a85b0e9a4bb311cb1440269a27e02ef245527214/scikitplot_cython_c85fb2ae7082a2b6.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:38Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='ec92f1554dc6c7acb517546746e884710e6243e748988315da81a70828b0045f', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/ec92f1554dc6c7acb517546746e884710e6243e748988315da81a70828b0045f'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/ec92f1554dc6c7acb517546746e884710e6243e748988315da81a70828b0045f/multifile_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:41Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='f4925ad63fe6725e190286c3ff562ce14ee1ce364b9cc64a4c9b9e6807b06c1d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/f4925ad63fe6725e190286c3ff562ce14ee1ce364b9cc64a4c9b9e6807b06c1d'), module_name='scikitplot_cython_f4925ad63fe6725e', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/f4925ad63fe6725e190286c3ff562ce14ee1ce364b9cc64a4c9b9e6807b06c1d/scikitplot_cython_f4925ad63fe6725e.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-11-08T15:17:30Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.1', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1016-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.16', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/1f552abc1cec8566d6e5ebd80fb130b2cc10bd2c54d6d455a9ce0c1d6649a578')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/1f552abc1cec8566d6e5ebd80fb130b2cc10bd2c54d6d455a9ce0c1d6649a578/scikitplot_cython_1f552abc1cec8566.cpython-312-x86_64-linux-gnu.so')

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
<module 'scikitplot_cython_cfa849d547b65f8c' from '/home/circleci/.cache/scikitplot/cython/cfa849d547b65f8cfaa08df464b059c203f2792bf3f05d4d86e5275d93a0a389/scikitplot_cython_cfa849d547b65f8c.cpython-312-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 5.431 seconds)

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