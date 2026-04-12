# devel\_numpy\_c\_api\_cython[#](#devel-numpy-c-api-cython "Link to this heading")

## NumPy ndarray sum (Cython)[#](#numpy-ndarray-sum-cython "Link to this heading")

Typed NumPy ndarray access.

```
# cython: language_level=3

"""Devel Cython template: NumPy ndarray typed access.

Requires NumPy.
"""

cimport numpy as cnp
import numpy as np


def sum_ndarray(object arr):
    cdef cnp.ndarray[cnp.double_t, ndim=1] x = np.asarray(arr, dtype=np.float64)
    cdef Py_ssize_t i
    cdef double s = 0.0
    for i in range(x.shape[0]):
        s += x[i]
    return s

```

## Devel NumPy: typed ndarray[#](#devel-numpy-typed-ndarray "Link to this heading")

cimport numpy example.

```
# cython: language_level=3
"""Devel NumPy C-API Cython template.

Requires NumPy at compile time.
"""

# import numpy as np
cimport numpy as cnp


def sum_float64(cnp.ndarray[cnp.float64_t, ndim=1] x):
    cdef Py_ssize_t i, n = x.shape[0]
    cdef double s = 0.0
    for i in range(n):
        s += x[i]
    return s

```

## Sum NumPy 1D array[#](#sum-numpy-1d-array "Link to this heading")

```
# cython: language_level=3
"""
Sum a 1D NumPy array using typed memoryviews.

Requires NumPy (template metadata marks it).
"""

# import numpy as np
cimport numpy as cnp
cnp.import_array()


cpdef double sum1d(cnp.ndarray[cnp.double_t, ndim=1] x):
    cdef Py_ssize_t i, n = x.shape[0]
    cdef double acc = 0.0
    for i in range(n):
        acc += <double>x[i]
    return acc

```

## Sum NumPy 1D array[#](#id1 "Link to this heading")

```
# cython: language_level=3
"""
Sum a 1D NumPy array using typed memoryviews.

Requires NumPy (template metadata marks it).
"""
# import numpy as np
cimport numpy as cnp
cnp.import_array()

cpdef double sum1d(cnp.ndarray[cnp.double_t, ndim=1] x):
    cdef Py_ssize_t i, n = x.shape[0]
    cdef double acc = 0.0
    for i in range(n):
        acc += <double>x[i]
    return acc

```

## Sum NumPy 1D array[#](#id2 "Link to this heading")

```
# cython: language_level=3
"""
Sum a 1D NumPy array using typed memoryviews.

Requires NumPy (template metadata marks it).
"""
import numpy as np  # no-cython-lint
cimport numpy as cnp
cnp.import_array()

cpdef double sum1d(cnp.ndarray[cnp.double_t, ndim=1] x):
    cdef Py_ssize_t i, n = x.shape[0]
    cdef double acc = 0.0
    for i in range(n):
        acc += <double>x[i]
    return acc

```