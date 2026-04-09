# hard\_cython[#](#hard-cython "Link to this heading")

## cdef Counter (Cython)[#](#cdef-counter-cython "Link to this heading")

cdef class with cpdef method.

```
# cython: language_level=3

"""Hard Cython template: cdef class counter."""

cdef class Counter:
    cdef long value

    def __cinit__(self, long start=0):
        self.value = start

    cpdef long inc(self, long step=1):
        self.value += step
        return self.value

```

## Hard: cdef class[#](#hard-cdef-class "Link to this heading")

cdef class with malloc/free.

```
# cython: language_level=3
"""Hard Cython template: cdef class with manual memory.

This template shows a simple vector type backed by a C array.
"""

from libc.stdlib cimport malloc, free

cdef class IntVector:
    cdef int* data
    cdef Py_ssize_t n

    def __cinit__(self, Py_ssize_t n):
        if n < 0:
            raise ValueError("n must be >= 0")
        self.n = n
        self.data = <int*>malloc(n * sizeof(int)) if n else <int*>0
        if n and self.data == NULL:
            raise MemoryError()

    def __dealloc__(self):
        if self.data != NULL:
            free(self.data)
            self.data = NULL

    def __len__(self):
        return self.n

    def set(self, Py_ssize_t i, int v):
        if i < 0 or i >= self.n:
            raise IndexError(i)
        self.data[i] = v

    def get(self, Py_ssize_t i):
        if i < 0 or i >= self.n:
            raise IndexError(i)
        return self.data[i]

```

## Dot product[#](#dot-product "Link to this heading")

Dot product over two 1D memoryviews with strict shape checking.

```
# cython: language_level=3
"""Hard Cython template: dot product over memoryviews."""

from libc.stdint cimport int64_t


def dot_int64(long[:] a, long[:] b):
    cdef Py_ssize_t n = a.shape[0]
    if b.shape[0] != n:
        raise ValueError("shape mismatch")
    cdef Py_ssize_t i
    cdef int64_t s = 0
    for i in range(n):
        s += <int64_t>a[i] * <int64_t>b[i]
    return s

```

## malloc/free demo[#](#malloc-free-demo "Link to this heading")

```
# cython: language_level=3
"""
Manual allocation with malloc/free (advanced).
"""

from libc.stdlib cimport malloc, free


cpdef int sum_range(int n):

    cdef int* buf = <int*>malloc(n * sizeof(int))

    if buf == NULL:
        raise MemoryError()

    cdef int i
    cdef long long acc = 0

    try:
        for i in range(n):
            buf[i] = i
        for i in range(n):
            acc += buf[i]
        return <int>acc
    finally:
        free(buf)

```

## malloc/free demo[#](#id1 "Link to this heading")

```
# cython: language_level=3
"""
Manual allocation with malloc/free (advanced).
"""

from libc.stdlib cimport malloc, free


cpdef int sum_range(int n):

    # Static type declarations
    cdef int* buf = <int*>malloc(n * sizeof(int))

    if buf == NULL:
        raise MemoryError()

    cdef int i
    cdef long long acc = 0

    try:
        for i in range(n):
            buf[i] = i
        for i in range(n):
            acc += buf[i]
        return <int>acc
    finally:
        free(buf)

```

## cdef struct Point2 + distance[#](#cdef-struct-point2-distance "Link to this heading")

```
# cython: language_level=3
"""
C struct example: 2D point and distance.

Developer notes
--------------
- Demonstrates `cdef struct` and a `nogil` helper for numeric work.
"""
from libc.math cimport sqrt

cdef struct Point2:
    double x
    double y

cdef inline double _dist(Point2 a, Point2 b) nogil:
    cdef double dx = a.x - b.x
    cdef double dy = a.y - b.y
    return sqrt(dx*dx + dy*dy)

cpdef double dist(double ax, double ay, double bx, double by):
    cdef Point2 a
    cdef Point2 b
    a.x = ax
    a.y = ay
    b.x = bx
    b.y = by
    return _dist(a, b)

```