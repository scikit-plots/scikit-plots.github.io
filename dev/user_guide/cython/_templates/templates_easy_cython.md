# easy\_cython[#](#easy-cython "Link to this heading")

## Easy: memoryview sum[#](#easy-memoryview-sum "Link to this heading")

Typed memoryview summation loop.

```
# cython: language_level=3
# cython: boundscheck=False
# cython: wraparound=False
"""Easy Cython template: typed memoryview loop."""

# import cython


def sum_doubles(double[:] x):
    """Sum a 1D array-like of doubles."""
    cdef Py_ssize_t i, n = x.shape[0]
    cdef double s = 0.0
    for i in range(n):
        s += x[i]
    return s

```

## Sum memoryview (Cython)[#](#sum-memoryview-cython "Link to this heading")

Typed memoryview loop.

```
# cython: language_level=3

"""Easy Cython template: sum a 1D double memoryview."""

import cython


@cython.boundscheck(False)
@cython.wraparound(False)
def sum1d(double[:] x):
    cdef Py_ssize_t i
    cdef double s = 0.0
    for i in range(x.shape[0]):
        s += x[i]
    return s

```

## Sum 1D memoryview[#](#sum-1d-memoryview "Link to this heading")

Summation over a typed memoryview; works with any buffer provider.

```
# cython: language_level=3
"""Easy Cython template: summing a 1D typed memoryview."""

from libc.stdint cimport int64_t


def sum_int64(long[:] x):
    """Sum a 1D buffer of integers.

    Notes
    -----
    Accepts objects exporting the buffer protocol (e.g., array('l'), NumPy arrays).
    """
    cdef Py_ssize_t i, n = x.shape[0]
    cdef int64_t s = 0
    for i in range(n):
        s += <int64_t>x[i]
    return s

```

## Dot product on Python sequences[#](#dot-product-on-python-sequences "Link to this heading")

```
# cython: language_level=3
"""
Vector dot product on Python lists (no NumPy).

User notes
----------
- Accepts Python sequences (lists/tuples) of numbers.
- Converts elements to `double` inside a typed loop.

Developer notes
--------------
- This is a pedagogical template: speed depends on input types.
- For best performance, see memoryview-based templates.
"""

cpdef double dot_list(object x, object y):
    """
    Compute dot(x, y) for two equally-sized sequences.

    Parameters
    ----------
    x, y : sequence
        Input sequences of numbers.

    Returns
    -------
    double
        Dot product.

    Raises
    ------
    ValueError
        If lengths differ.
    """
    cdef Py_ssize_t n = len(x)
    if len(y) != n:
        raise ValueError("x and y must have the same length")
    cdef Py_ssize_t i
    cdef double acc = 0.0
    for i in range(n):
        acc += <double>x[i] * <double>y[i]
    return acc

```

## Scale vector with double[:] memoryview[#](#scale-vector-with-double-memoryview "Link to this heading")

```
# cython: language_level=3
"""
Scale a vector in-place using a typed memoryview (no NumPy required).

User notes
----------
- Works with any object exposing a writable buffer of doubles, e.g.:
  `array('d')`, `memoryview(array('d'))`, some other buffer providers.
- This does *not* rely on NumPy C-API.

Examples
--------
>>> from array import array
>>> import scikitplot.cython as cy
>>> m = cy.compile_template("easy_cython/t05_vector_scale_memview")
>>> a = array('d', [1.0, 2.0, 3.0])
>>> m.scale(a, 10.0)
>>> list(a)
[10.0, 20.0, 30.0]
"""

cpdef void scale(double[:] x, double alpha):
    """Scale x[i] *= alpha in-place."""
    cdef Py_ssize_t i, n = x.shape[0]
    for i in range(n):
        x[i] = x[i] * alpha

```

## L2 norm with memoryview[#](#l2-norm-with-memoryview "Link to this heading")

```
# cython: language_level=3
"""
Compute L2 norm using a typed memoryview (no NumPy required).
"""

from libc.math cimport sqrt

cpdef double norm2(double[:] x):
    """Return sqrt(sum(x[i]^2))."""
    cdef Py_ssize_t i, n = x.shape[0]
    cdef double acc = 0.0
    for i in range(n):
        acc += x[i] * x[i]
    return sqrt(acc)

```

## Vector add on sequences (returns list)[#](#vector-add-on-sequences-returns-list "Link to this heading")

```
# cython: language_level=3
"""
Add two numeric sequences and return a Python list.

Notes
-----
This is a learning template that demonstrates:
- typed loop counters (`Py_ssize_t`)
- explicit conversion to `double` for numeric stability.
"""

cpdef list add_list(object x, object y):
    cdef Py_ssize_t n = len(x)
    if len(y) != n:
        raise ValueError("length mismatch")
    cdef list out = [0.0] * n
    cdef Py_ssize_t i
    for i in range(n):
        out[i] = <double>x[i] + <double>y[i]
    return out

```

## Parse unsigned int from ASCII bytes[#](#parse-unsigned-int-from-ascii-bytes "Link to this heading")

```
# cython: language_level=3
"""
Parse a non-negative integer from ASCII bytes.

User notes
----------
- Useful micro-template for fast parsing in tight loops.
- Accepts `bytes` containing only digits (and optionally leading/trailing spaces).

Raises
------
ValueError on invalid input.
"""

cpdef int parse_uint(bytes s):
    cdef Py_ssize_t i = 0
    cdef Py_ssize_t n = len(s)
    # skip leading spaces
    while i < n and s[i] in (32, 9, 10, 13):
        i += 1
    if i == n:
        raise ValueError("empty")
    cdef int acc = 0
    cdef int d
    while i < n and 48 <= s[i] <= 57:
        d = s[i] - 48
        acc = acc * 10 + d
        i += 1
    # skip trailing spaces
    while i < n and s[i] in (32, 9, 10, 13):
        i += 1
    if i != n:
        raise ValueError("invalid character")
    return acc

```