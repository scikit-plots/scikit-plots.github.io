# basic\_cython[#](#basic-cython "Link to this heading")

## Basic: typed square[#](#basic-typed-square "Link to this heading")

Minimal typed Cython function.

```
# cython: language_level=3
"""Basic Cython template: typed function.

This demonstrates a minimal compiled function with C integer typing.
"""


def square(int n):
    """Return n*n using C integer arithmetic."""
    return n * n

```

## Add two floats (double)[#](#add-two-floats-double "Link to this heading")

```
# cython: language_level=3
"""
Add two floats (basic Cython types).

User notes
----------
- Demonstrates `cpdef` for a Python-callable + C-callable function.
- Demonstrates `double` as a C floating point type.

Developer notes
--------------
- Keep signatures explicit for stable docs and predictable behavior.
"""

cpdef double add(double a, double b):
    """Return a + b as a C double."""
    return a + b

```

## Toggle boolean (bint)[#](#toggle-boolean-bint "Link to this heading")

```
# cython: language_level=3
"""
Toggle a boolean.

Notes
-----
Cython maps `bint` to a C integer used for booleans.
"""

cpdef bint toggle(bint flag):
    """Return logical not of flag (as bint)."""
    return not flag

```

## Repeat string (str \* n)[#](#repeat-string-str-n "Link to this heading")

```
# cython: language_level=3
"""
Repeat a Python string.

User notes
----------
- Demonstrates working with Python `str` objects in Cython.
- Strings remain Python objects; C speedups come from type-stable loops.
"""

cpdef str repeat(str s, int n):
    """
    Repeat `s` `n` times.

    Parameters
    ----------
    s : str
        Input string.
    n : int
        Repeat count (must be >= 0).

    Returns
    -------
    str
        Repeated string.

    Raises
    ------
    ValueError
        If n is negative.
    """
    if n < 0:
        raise ValueError("n must be >= 0")
    return s * n

```

## Fixed-width int32 wrap demo[#](#fixed-width-int32-wrap-demo "Link to this heading")

```
# cython: language_level=3
"""
Demonstrate fixed-width integer behavior.

Developer notes
--------------
- Uses `int32_t` from libc.stdint for predictable overflow semantics.
- This is a learning template; overflow is intentional.
"""

from libc.stdint cimport int32_t

cpdef int32_t add_wrap32(int32_t a, int32_t b):
    """Add two 32-bit ints (wraps on overflow)."""
    return <int32_t>(a + b)

```

## XOR bytes (bytearray output)[#](#xor-bytes-bytearray-output "Link to this heading")

```
# cython: language_level=3
"""
XOR two bytes objects (length must match).

User notes
----------
- Demonstrates working with `bytes` and indexing as integers 0..255.
- Output is a new `bytes` object.
"""

cpdef bytes xor_bytes(bytes a, bytes b):
    if len(a) != len(b):
        raise ValueError("length mismatch")
    cdef Py_ssize_t n = len(a)
    cdef bytearray out = bytearray(n)
    cdef Py_ssize_t i
    for i in range(n):
        out[i] = a[i] ^ b[i]
    return bytes(out)

```