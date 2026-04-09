# medium\_cython[#](#medium-cython "Link to this heading")

## Fused add (Cython)[#](#fused-add-cython "Link to this heading")

Fused types example.

```
# cython: language_level=3

"""Medium Cython template: fused-type add."""

ctypedef fused number_t:
    int
    long
    double


def add(number_t a, number_t b):
    return a + b

```

## Medium: fused types dot[#](#medium-fused-types-dot "Link to this heading")

Fused types and shape checks.

```
# cython: language_level=3
"""Medium Cython template: fused types.

Demonstrates writing one function that works for multiple numeric types.
"""

ctypedef fused num_t:
    int
    long
    double


def dot(num_t[:] a, num_t[:] b):
    """Return dot product of two 1D vectors."""
    cdef Py_ssize_t i, n = a.shape[0]
    if b.shape[0] != n:
        raise ValueError("shape mismatch")
    cdef double s = 0.0
    for i in range(n):
        s += (<double>a[i]) * (<double>b[i])
    return s

```

## Running mean (cdef class)[#](#running-mean-cdef-class "Link to this heading")

Stateful Cython cdef class for incremental mean.

```
# cython: language_level=3
"""Medium Cython template: a small stateful `cdef class`."""

cdef class RunningMean:
    cdef double _sum
    cdef long _n

    def __cinit__(self):
        self._sum = 0.0
        self._n = 0

    def update(self, double x):
        self._sum += x
        self._n += 1

    def value(self):
        if self._n == 0:
            return 0.0
        return self._sum / self._n

```

## Fused-type add[#](#fused-type-add "Link to this heading")

```
# cython: language_level=3
"""
Fused type add demo.
"""
ctypedef fused number_t:
    int
    double

cpdef number_t add(number_t a, number_t b):
    return a + b

```

## Fused-type add[#](#id1 "Link to this heading")

```
# cython: language_level=3
"""
Fused type add demo.
"""
ctypedef fused number_t:
    int
    double

cpdef number_t add(number_t a, number_t b):
    return a + b

```

## Min/max on memoryview[#](#min-max-on-memoryview "Link to this heading")

```
# cython: language_level=3
"""
Compute min and max from a double[:] memoryview.
"""

cpdef tuple minmax(double[:] x):
    cdef Py_ssize_t n = x.shape[0]
    if n == 0:
        raise ValueError("empty")
    cdef Py_ssize_t i
    cdef double mn = x[0]
    cdef double mx = x[0]
    for i in range(1, n):
        if x[i] < mn:
            mn = x[i]
        if x[i] > mx:
            mx = x[i]
    return mn, mx

```

## Argmax on memoryview[#](#argmax-on-memoryview "Link to this heading")

```
# cython: language_level=3
"""
Argmax on double[:] memoryview.
"""

cpdef Py_ssize_t argmax(double[:] x):
    cdef Py_ssize_t n = x.shape[0]
    if n == 0:
        raise ValueError("empty")
    cdef Py_ssize_t i, best = 0
    cdef double bestv = x[0]
    for i in range(1, n):
        if x[i] > bestv:
            bestv = x[i]
            best = i
    return best

```