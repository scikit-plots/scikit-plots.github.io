> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cython-plot-08-vector-ops-without-numpy-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Vector ops without NumPy: array(‘d’) + memoryviews[#](#vector-ops-without-numpy-array-d-memoryviews "Link to this heading")

You can write fast numeric code without NumPy using Python’s `array` module
and typed memoryviews.

## Why this works[#](#why-this-works "Link to this heading")

`array('d')` exposes the buffer protocol, so Cython can view its memory as a
contiguous `double[:]` without copying.

This example scales a vector in-place and demonstrates:

* typed memoryviews (`double[:]`)
* strict input validation (buffer-compatible, correct itemsize)
* optional compiler directives for speed (boundscheck/wraparound)

## Notes[#](#notes "Link to this heading")

This example does not require NumPy.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

from array import array
from typing import Iterable

from scikitplot import cython

```
```
def py_scale(x: array, a: float) -> None:
    """Pure-Python baseline: scale in-place."""
    for i in range(len(x)):
        x[i] *= a

```

## Generate `python` Module from `cython`[#](#generate-python-module-from-cython "Link to this heading")

```
report = cython.check_build_prereqs(numpy=False)

if not report.get('cython', {}).get('ok'):
    print("Skipping compilation because build prerequisites are missing.")
    problems = report.get("problems", [])
    if problems:
        print("Problems:", problems)
else:
    code = r"""
# cython: language_level=3
# cython: boundscheck=False
# cython: wraparound=False

def scale(double[:] x, double a):
    '''Scale a 1D contiguous vector in-place.'''
    cdef Py_ssize_t i
    cdef Py_ssize_t n = x.shape[0]
    for i in range(n):
        x[i] *= a
    return None

def scaled_copy(double[:] x, double a):
    cdef Py_ssize_t i
    cdef Py_ssize_t n = x.shape[0]
    out = [0.0] * n
    for i in range(n):
        out[i] = x[i] * a
    return out
"""

    # Use result API so we can show cache metadata.
    r = cython.compile_and_load_result(
        code,
        module_name="memview_scale_demo",
        profile="fast-debug",
        numpy_support=False,
        verbose=0,
    )
    m = r.module

    print("Build key:", r.key)
    print("Artifact :", r.artifact_path)

    # ------------------------------------------------------------
    # Strict demo: array('d') is buffer-compatible with double[:]
    # ------------------------------------------------------------
    x = array("d", [1.0, 2.0, 3.0])

    # Educational sanity checks (strict, no heuristics).
    print("\nInput type:", type(x).__name__)
    print("Typecode   :", x.typecode)
    print("Length     :", len(x))

    # Run compiled scaling.
    m.scale(x, 10.0)
    print("After Cython scale:", list(x))
    print("Expected         :", [10.0, 20.0, 30.0])

    # ------------------------------------------------------------
    # Baseline: pure Python scaling (for learning)
    # ------------------------------------------------------------
    y = array("d", [1.0, 2.0, 3.0])
    py_scale(y, 10.0)
    print("\nAfter Python scale:", list(y))

    # ------------------------------------------------------------
    # Strict edge case: wrong typecode (will raise TypeError)
    # ------------------------------------------------------------
    z = array("f", [1.0, 2.0, 3.0])  # float32
    try:
        m.scale(z, 2.0)
        print("Unexpected: scale accepted array('f').")
    except Exception as e:
        print("\nAs expected, scale rejected array('f'):")
        print(" ", type(e).__name__ + ":", e)

```
```
Build key: a913df15a248c8ec3a3bdd283726007bb5607924496b2f6d784c7c6ec7fddfbe
Artifact : /home/circleci/.cache/scikitplot/cython/a913df15a248c8ec3a3bdd283726007bb5607924496b2f6d784c7c6ec7fddfbe/memview_scale_demo.cpython-312-x86_64-linux-gnu.so

Input type: array
Typecode   : d
Length     : 3
After Cython scale: [10.0, 20.0, 30.0]
Expected         : [10.0, 20.0, 30.0]

After Python scale: [10.0, 20.0, 30.0]

As expected, scale rejected array('f'):
  ValueError: Buffer dtype mismatch, expected 'double' but got 'float'

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 1.972 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_08_vector_ops_without_numpy.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_08_vector_ops_without_numpy.ipynb)

[`Download Jupyter notebook: plot_08_vector_ops_without_numpy.ipynb`](../../_downloads/4f9529edb1899420a86c9eb8c23da7fe/plot_08_vector_ops_without_numpy.ipynb)

[`Download Python source code: plot_08_vector_ops_without_numpy.py`](../../_downloads/aaabe98553652e91ea6732815de2ae4f/plot_08_vector_ops_without_numpy.py)

[`Download zipped: plot_08_vector_ops_without_numpy.zip`](../../_downloads/711cdf8a9c722f8b50cd1936449cceed/plot_08_vector_ops_without_numpy.zip)

Related examples

![](../../_images/sphx_glr_plot_06_multifile_support_files_thumb.png)

[Multi-file builds: .pxi includes and external headers](plot_06_multifile_support_files.html)

Multi-file builds: .pxi includes and external headers![](../../_images/sphx_glr_plot_07_cpp_mode_basics_thumb.png)

[C++ mode basics: cppclass and libcpp containers](plot_07_cpp_mode_basics.html)

C++ mode basics: cppclass and libcpp containers![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)