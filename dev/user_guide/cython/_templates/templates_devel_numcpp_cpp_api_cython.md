# devel\_numcpp\_cpp\_api\_cython[#](#devel-numcpp-cpp-api-cython "Link to this heading")

## C++ language mode[#](#c-language-mode "Link to this heading")

Cython template that compiles in C++ mode.

```
# distutils: language=c++
# cython: language_level=3
"""Developer Cython template: C++ language mode.

This template sets `language=c++` via distutils directive.
"""

cdef extern from "math.h":
    double sqrt(double)


def hypot(double a, double b):
    return sqrt(a*a + b*b)

```

## C++ prefix sums (Cython)[#](#c-prefix-sums-cython "Link to this heading")

C++ vector with memoryview input.

```
# distutils: language = c++
# cython: language_level=3

"""Devel Cython template: C++ + memoryview interop."""

from libcpp.vector cimport vector


def prefix_sums(double[:] x):
    cdef Py_ssize_t i
    cdef vector[double] out
    out.reserve(x.shape[0])
    cdef double s = 0.0
    for i in range(x.shape[0]):
        s += x[i]
        out.push_back(s)
    # Return as Python list for portability
    return [out[i] for i in range(out.size())]

```

## Devel NumPy+C++: memoryview[#](#devel-numpy-c-memoryview "Link to this heading")

C++ mode + memoryview + std::vector.

```
# cython: language_level=3
# distutils: language=c++
"""Devel NumPy+C++ Cython template.

Demonstrates C++ compilation mode and a typed memoryview. This template does
not require cimporting NumPy; it works with objects supporting the buffer
protocol. Use NumPy arrays for best performance.
"""

from libcpp.vector cimport vector


def prefix_sums(double[:] x):
    """Return prefix sums as a Python list."""
    cdef Py_ssize_t i, n = x.shape[0]
    cdef vector[double] v
    v.reserve(n)
    cdef double s = 0.0
    for i in range(n):
        s += x[i]
        v.push_back(s)
    return [v[i] for i in range(v.size())]

```

## C++ std::vector demo[#](#c-std-vector-demo "Link to this heading")

```
# distutils: language = c++
# cython: language_level=3
"""
C++ std::vector interop demo (compile as C++).

This template is for advanced users; it requires a C++ compiler.
"""
from libcpp.vector cimport vector

cpdef int vector_size():
    cdef vector[int] v
    v.push_back(1)
    v.push_back(2)
    return <int>v.size()

```

## C++ std::vector demo[#](#id1 "Link to this heading")

```
# distutils: language = c++
# cython: language_level=3
"""
C++ std::vector interop demo (compile as C++).

This template is for advanced users; it requires a C++ compiler.
"""
from libcpp.vector cimport vector

cpdef int vector_size():
    cdef vector[int] v
    v.push_back(1)
    v.push_back(2)
    return <int>v.size()

```