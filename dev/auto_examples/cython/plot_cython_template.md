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
'2026.10.11'

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
[CacheEntry(key='214987a2d825207aaab81881301fd27a04e0c3c294e35e50e99509cfbe7244f5', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/214987a2d825207aaab81881301fd27a04e0c3c294e35e50e99509cfbe7244f5'), module_name='wf_ext_square', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/214987a2d825207aaab81881301fd27a04e0c3c294e35e50e99509cfbe7244f5/wf_ext_square.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:50Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='26d569ca915842dce304089cb65edbb5c68250b9669cb1096934bb7eb005e16d', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/26d569ca915842dce304089cb65edbb5c68250b9669cb1096934bb7eb005e16d'), module_name='scikitplot_cython_26d569ca915842dc', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/26d569ca915842dce304089cb65edbb5c68250b9669cb1096934bb7eb005e16d/scikitplot_cython_26d569ca915842dc.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:28Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='2c3133b088c0cd3cabc4d588e7f49b04e0133093615e26193db13073752b02d6', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/2c3133b088c0cd3cabc4d588e7f49b04e0133093615e26193db13073752b02d6'), module_name='multifile_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/2c3133b088c0cd3cabc4d588e7f49b04e0133093615e26193db13073752b02d6/multifile_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:40Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='327261a38588fb07dbe18b8a93391718e0003fd737f4e1b9a313de4d9fe1bd99', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/327261a38588fb07dbe18b8a93391718e0003fd737f4e1b9a313de4d9fe1bd99'), module_name='scikitplot_cython_327261a38588fb07', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/327261a38588fb07dbe18b8a93391718e0003fd737f4e1b9a313de4d9fe1bd99/scikitplot_cython_327261a38588fb07.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:26Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='373faa73e2060de5d1bcf70ef50309a31f31571f86956ffd78da4eb545f8d7ce', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/373faa73e2060de5d1bcf70ef50309a31f31571f86956ffd78da4eb545f8d7ce'), module_name='scikitplot_cython_373faa73e2060de5', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/373faa73e2060de5d1bcf70ef50309a31f31571f86956ffd78da4eb545f8d7ce/scikitplot_cython_373faa73e2060de5.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:32Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='80f88834662f88a415c3b9e8575d0268e0af9aab90c58f039cf6988a5e09a537', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/80f88834662f88a415c3b9e8575d0268e0af9aab90c58f039cf6988a5e09a537'), module_name='scikitplot_cython_80f88834662f88a4', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/80f88834662f88a415c3b9e8575d0268e0af9aab90c58f039cf6988a5e09a537/scikitplot_cython_80f88834662f88a4.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:24Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='83fd8ba57406a52560fd4bb0b2e990afb9455cfaa621cc33ca0187af9301815e', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/83fd8ba57406a52560fd4bb0b2e990afb9455cfaa621cc33ca0187af9301815e'), module_name='cpp_mode_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/83fd8ba57406a52560fd4bb0b2e990afb9455cfaa621cc33ca0187af9301815e/cpp_mode_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:44Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='a57ae61be0b529b5865c73a93f93c877293f860d223ebaee53f9e6abb95b0daa', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/a57ae61be0b529b5865c73a93f93c877293f860d223ebaee53f9e6abb95b0daa'), module_name='memview_scale_demo', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/a57ae61be0b529b5865c73a93f93c877293f860d223ebaee53f9e6abb95b0daa/memview_scale_demo.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:48Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': None, 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='ab90b623efb65435cd9d98790aa8137cf3b2e194e2754a84bfcf9fe5b65825ec', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/ab90b623efb65435cd9d98790aa8137cf3b2e194e2754a84bfcf9fe5b65825ec'), module_name='scikitplot_cython_ab90b623efb65435', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/ab90b623efb65435cd9d98790aa8137cf3b2e194e2754a84bfcf9fe5b65825ec/scikitplot_cython_ab90b623efb65435.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:54Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='d7b376aad715faa123f695103e3488ad2bcb15f3c086cc4e5b53490290de6374', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/d7b376aad715faa123f695103e3488ad2bcb15f3c086cc4e5b53490290de6374'), module_name='scikitplot_cython_d7b376aad715faa1', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/d7b376aad715faa123f695103e3488ad2bcb15f3c086cc4e5b53490290de6374/scikitplot_cython_d7b376aad715faa1.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:36Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='f3173ea5cc6558e62d54d9dfbbab4e03ebd4ce9481b458393a83741e122b0f26', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/f3173ea5cc6558e62d54d9dfbbab4e03ebd4ce9481b458393a83741e122b0f26'), module_name='scikitplot_cython_f3173ea5cc6558e6', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/f3173ea5cc6558e62d54d9dfbbab4e03ebd4ce9481b458393a83741e122b0f26/scikitplot_cython_f3173ea5cc6558e6.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:31Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'}), CacheEntry(key='f66bd6bb38eafd5ef577981e89a2e1813d7caab6a39872bacdf4777579f02bc5', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/f66bd6bb38eafd5ef577981e89a2e1813d7caab6a39872bacdf4777579f02bc5'), module_name='scikitplot_cython_f66bd6bb38eafd5e', artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/f66bd6bb38eafd5ef577981e89a2e1813d7caab6a39872bacdf4777579f02bc5/scikitplot_cython_f66bd6bb38eafd5e.cpython-312-x86_64-linux-gnu.so'), created_utc='2026-10-11T11:49:24Z', fingerprint={'abi': '', 'cc': 'gcc', 'cxx': 'g++', 'cython': '3.3.0', 'ext_suffix': '.cpython-312-x86_64-linux-gnu.so', 'gil_disabled': False, 'machine': 'x86_64', 'numpy': '2.5.4', 'platform': 'Linux-7.0.0-1013-aws-x86_64-with-glibc2.35', 'pointer_size': 8, 'processor': 'x86_64', 'python': '3.12.15', 'python_impl': 'CPython', 'resolved_cc': 'gcc', 'resolved_compiler_type': 'unix', 'resolved_cxx': 'g++', 'soabi': 'cpython-312-x86_64-linux-gnu', 'sysconfig_platform': 'linux-x86_64'})]

```
```
cython.list_cached()[0].build_dir

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/214987a2d825207aaab81881301fd27a04e0c3c294e35e50e99509cfbe7244f5')

```
```
cython.list_cached()[0].artifact_path

```
```
PosixPath('/home/circleci/.cache/scikitplot/cython/214987a2d825207aaab81881301fd27a04e0c3c294e35e50e99509cfbe7244f5/wf_ext_square.cpython-312-x86_64-linux-gnu.so')

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
<module 'scikitplot_cython_1ceb790c724f6d6c' from '/home/circleci/.cache/scikitplot/cython/1ceb790c724f6d6cac37998b6af39dea6d236a592e08c8d0bb68918d92925be4/scikitplot_cython_1ceb790c724f6d6c.cpython-312-x86_64-linux-gnu.so'>

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

****Total running time of the script:**** (0 minutes 7.292 seconds)

[![Launch binder](../../_images/binder_badge_logo6.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_cython_template.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo6.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_cython_template.ipynb)

[`Download Jupyter notebook: plot_cython_template.ipynb`](../../_downloads/6053307ed76a82d9d7a64548e10f50aa/plot_cython_template.ipynb)

[`Download Python source code: plot_cython_template.py`](../../_downloads/d01d24a48a3cd1c5d71ccba73d308fbb/plot_cython_template.py)

[`Download zipped: plot_cython_template.zip`](../../_downloads/c158a77b0388225ed9e23d6ed4d33725/plot_cython_template.zip)

Related examples

![](../../_images/sphx_glr_plot_nc_test_thumb.png)

[nc with examples](../nc/plot_nc_test.html)

nc with examples![](../../_images/sphx_glr_plot_06_multifile_support_files_thumb.png)

[Multi-file builds: .pxi includes and external headers](plot_06_multifile_support_files.html)

Multi-file builds: .pxi includes and external headers![](../../_images/sphx_glr_plot_dl_nlp_vector_index_db_thumb.png)

[visualkeras: Vector Index DB](../visualkeras/plot_dl_nlp_vector_index_db.html)

visualkeras: Vector Index DB![](../../_images/sphx_glr_plot_09_workflow_templates_cli_thumb.png)

[Workflow templates (train / hpo / predict) + CLI entry template](plot_09_workflow_templates_cli.html)

Workflow templates (train / hpo / predict) + CLI entry template

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)