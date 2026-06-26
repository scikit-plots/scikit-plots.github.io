> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cython-plot-07-cpp-mode-basics-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# C++ mode basics: cppclass and libcpp containers[#](#c-mode-basics-cppclass-and-libcpp-containers "Link to this heading")

This example demonstrates a minimal C++-mode build using:

* `language="c++"`
* `libcpp.vector`
* a tiny header-only `cppclass` shipped via `support_files`

No external `.cpp` sources are required (header-only usage).

## Notes[#](#notes "Link to this heading")

* `noexcept` is intentionally not used in Cython signatures for maximum compatibility.
* Some compilers may require an explicit C++ standard flag; see the comment near
  `extra_compile_args`.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

from scikitplot import cython

```

## Generate `python` Module from `cython`[#](#generate-python-module-from-cython "Link to this heading")

```
report = cython.check_build_prereqs(numpy=False)

if not report.get('cython', {}).get('ok'):
    print("Skipping compilation because build prerequisites are missing.")
    print(report.get("problems", []))
else:
    support_files = {
        "accum.hpp": r"""
#pragma once

namespace skplt_demo {

class Accumulator {
public:
    Accumulator() : total_(0) {}
    void add(int x) { total_ += x; }
    int value() const { return total_; }

private:
    int total_;
};

}  // namespace skplt_demo
"""
    }

    code = r"""
# distutils: language = c++

from libcpp.vector cimport vector

cdef extern from "accum.hpp" namespace "skplt_demo":
    cdef cppclass Accumulator:
        Accumulator() except +
        void add(int x)
        int value() const

cdef class PyAccumulator:
    cdef Accumulator* _p

    def __cinit__(self):
        self._p = new Accumulator()

    def __dealloc__(self):
        del self._p

    def add(self, int x):
        self._p.add(x)

    def value(self):
        return self._p.value()

def sum_vector():
    cdef vector[int] v
    v.push_back(1)
    v.push_back(2)
    v.push_back(3)
    cdef int s = 0
    cdef int x
    for x in v:
        s += x
    return s

def accumulate_demo():
    a = PyAccumulator()
    a.add(10)
    a.add(20)
    return a.value()
"""

    try:
        r = cython.compile_and_load_result(
            code,
            module_name="cpp_mode_demo",
            profile="fast-debug",
            language="c++",
            support_files=support_files,
            compiler_directives={"language_level": 3, "embedsignature": True},
            # Optional: if you hit "unknown type" or stdlib issues on older toolchains,
            # set an explicit standard. Keep it user-controlled (no guessing).
            # extra_compile_args=["-std=c++11"],
            verbose=0,
        )
    except Exception as e:
        print("C++ build failed:")
        print(type(e).__name__ + ":", e)
    else:
        print("sum_vector() =", r.module.sum_vector(), "(expected 6)")
        print("accumulate_demo() =", r.module.accumulate_demo(), "(expected 30)")

```
```
sum_vector() = 6 (expected 6)
accumulate_demo() = 30 (expected 30)

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 1.190 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_07_cpp_mode_basics.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_07_cpp_mode_basics.ipynb)

[`Download Jupyter notebook: plot_07_cpp_mode_basics.ipynb`](../../_downloads/e00cbe1c300cfeb05be802c694402621/plot_07_cpp_mode_basics.ipynb)

[`Download Python source code: plot_07_cpp_mode_basics.py`](../../_downloads/0e1e972042cb7feacf890e9d6ad4d43a/plot_07_cpp_mode_basics.py)

[`Download zipped: plot_07_cpp_mode_basics.zip`](../../_downloads/b3d6f8e82886a130ed9c66f50821139e/plot_07_cpp_mode_basics.zip)

Related examples

![](../../_images/sphx_glr_plot_06_multifile_support_files_thumb.png)

[Multi-file builds: .pxi includes and external headers](plot_06_multifile_support_files.html)

Multi-file builds: .pxi includes and external headers![](../../_images/sphx_glr_plot_08_vector_ops_without_numpy_thumb.png)

[Vector ops without NumPy: array(‘d’) + memoryviews](plot_08_vector_ops_without_numpy.html)

Vector ops without NumPy: array('d') + memoryviews![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_s_compile_cpp_thumb.png)

[Compile and run the C++ Annoy with examples](../annoy/s_compile_cpp.html)

Compile and run the C++ Annoy with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)