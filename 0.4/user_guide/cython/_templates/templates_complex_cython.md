# complex\_cython[#](#complex-cython "Link to this heading")

## Complex: C++ vector[#](#complex-c-vector "Link to this heading")

C++ std::vector integration.

```
# cython: language_level=3
# distutils: language=c++
"""Complex Cython template: minimal C++ integration.

Demonstrates calling into a C++ standard library type.
Requires a working C++ toolchain.
"""

from libcpp.vector cimport vector


def sum_ints(list xs):
    cdef vector[int] v
    cdef int x
    for x in xs:
        v.push_back(<int>x)
    cdef long s = 0
    cdef size_t i
    for i in range(v.size()):
        s += v[i]
    return s

```

## In-place clip[#](#in-place-clip "Link to this heading")

Fast clip on a memoryview with boundscheck disabled.

```
# cython: language_level=3
# cython: boundscheck=False, wraparound=False
"""Complex Cython template: clip values in-place on a memoryview."""


def clip_inplace(double[:] x, double lo, double hi):
    cdef Py_ssize_t i, n = x.shape[0]
    for i in range(n):
        if x[i] < lo:
            x[i] = lo
        elif x[i] > hi:
            x[i] = hi
    return None

```

## nogil sum of squares[#](#nogil-sum-of-squares "Link to this heading")

```
# cython: language_level=3
"""
nogil numeric loop demo (no Python interaction in inner loop).
"""
cpdef double sum_squares(int n):
    cdef int i
    cdef double acc = 0.0
    with nogil:
        for i in range(n):
            acc += i * i
    return acc

```

## nogil sum of squares[#](#id1 "Link to this heading")

```
# cython: language_level=3
"""
nogil numeric loop demo (no Python interaction in inner loop).
"""
cpdef double sum_squares(int n):
    cdef int i
    cdef double acc = 0.0
    with nogil:
        for i in range(n):
            acc += i * i
    return acc

```

## nogil sum of squares[#](#id2 "Link to this heading")

```
# cython: language_level=3
"""
nogil numeric loop demo (no Python interaction in inner loop).
"""
cpdef double sum_squares(int n):
    cdef int i
    cdef double acc = 0.0
    with nogil:
        for i in range(n):
            acc += i * i
    return acc

```

## Popcount uint64[#](#popcount-uint64 "Link to this heading")

```
# cython: language_level=3
"""
Popcount (count set bits) for 64-bit integers.

Notes
-----
Uses a classic bit-twiddling algorithm (Hacker's Delight).
"""
from libc.stdint cimport uint64_t

cpdef int popcount(uint64_t x):
    x = x - ((x >> 1) & 0x5555555555555555)
    x = (x & 0x3333333333333333) + ((x >> 2) & 0x3333333333333333)
    x = (x + (x >> 4)) & 0x0F0F0F0F0F0F0F0F
    x = x + (x >> 8)
    x = x + (x >> 16)
    x = x + (x >> 32)
    return <int>(x & 0x7F)

```