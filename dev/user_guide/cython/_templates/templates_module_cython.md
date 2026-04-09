# module\_cython[#](#module-cython "Link to this heading")

## Counter (cdef class)[#](#counter-cdef-class "Link to this heading")

Stateful Cython class with a simple public API.

```
# cython: language_level=3
"""Module Cython template: cdef class with Python-visible API."""

cdef class Counter:
    cdef long _n

    def __cinit__(self, long start=0):
        self._n = start

    def inc(self, long delta=1):
        self._n += delta
        return self._n

    def value(self):
        return self._n

```

## Module: extension class[#](#module-extension-class "Link to this heading")

Simple cdef class counter.

```
# cython: language_level=3
"""Module Cython template: extension class."""

cdef class Counter:
    cdef long value

    def __cinit__(self, long start=0):
        self.value = start

    def inc(self, long by=1):
        self.value += by
        return self.value

    def get(self):
        return self.value

```

## Module constants (Cython)[#](#module-constants-cython "Link to this heading")

DEF constant example.

```
# cython: language_level=3

"""Module Cython template: module-level constants."""

DEF ANSWER = 42


def get_answer():
    return ANSWER

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

## Include .pxi helper (multi-file)[#](#include-pxi-helper-multi-file "Link to this heading")

```
# cython: language_level=3
"""
Multi-file template: include a `.pxi` helper.

User notes
----------
- Demonstrates `include "file.pxi"` (source inclusion).
- The helper file is shipped as template data and copied into the build
  directory automatically via metadata `support_paths`.

Developer notes
--------------
- Use `.pxi` for simple shared code snippets across templates.
"""

include "helper_square.pxi"

cpdef int square(int n):
    """Return n*n using an inlined helper in a `.pxi` file."""
    return _square_int(n)

```

## Extern header (header-only)[#](#extern-header-header-only "Link to this heading")

```
# cython: language_level=3
"""
Multi-file template: use a shipped header file.

User notes
----------
- Demonstrates `cdef extern from "header.h"` for C declarations.
- The header is copied into the build directory via metadata `support_paths`.
"""

cdef extern from "helper_add.h":
    int add_int(int a, int b)

cpdef int add(int a, int b):
    """Call `add_int` declared in an external header."""
    return add_int(a, b)

```