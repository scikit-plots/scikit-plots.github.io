# devel\_cython[#](#devel-cython "Link to this heading")

## Devel: directives[#](#devel-directives "Link to this heading")

Explicit compiler directives + axpy.

```
# cython: language_level=3
# cython: boundscheck=False
# cython: wraparound=False
# cython: initializedcheck=False
"""Devel Cython template: compiler directives.

Shows how to use directives safely and explicitly.
"""


def axpy(double a, double[:] x, double[:] y):
    """Compute y <- a*x + y."""
    cdef Py_ssize_t i, n = x.shape[0]
    if y.shape[0] != n:
        raise ValueError("shape mismatch")
    for i in range(n):
        y[i] = a * x[i] + y[i]
    return None

```

## cdef class Counter[#](#cdef-class-counter "Link to this heading")

```
# cython: language_level=3
"""cdef class demo."""


cdef class Counter:

    cdef long long value

    def __cinit__(self, long long start=0):
        self.value = start

    cpdef void inc(self, long long step=1):
        self.value += step

    cpdef long long get(self):
        return self.value

```

## cdef class Counter[#](#id1 "Link to this heading")

```
# cython: language_level=3
"""cdef class demo."""


cdef class Counter:

    cdef long long value

    def __cinit__(self, long long start=0):
        self.value = start

    cpdef void inc(self, long long step=1):
        self.value += step

    cpdef long long get(self):
        return self.value

```

## cdef class Counter[#](#id2 "Link to this heading")

```
# cython: language_level=3
"""cdef class demo."""


cdef class Counter:

    cdef long long value

    def __cinit__(self, long long start=0):
        self.value = start

    cpdef void inc(self, long long step=1):
        self.value += step

    cpdef long long get(self):
        return self.value

```

## cdef class Counter[#](#id3 "Link to this heading")

```
# cython: language_level=3
"""cdef class demo."""


cdef class Counter:
    cdef long long value

    def __cinit__(self, long long start=0):
        self.value = start

    cpdef void inc(self, long long step=1):
        self.value += step

    cpdef long long get(self):
        return self.value

```