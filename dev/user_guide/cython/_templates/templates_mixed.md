# mixed[#](#mixed "Link to this heading")

## t01\_square\_int[#](#t01-square-int "Link to this heading")

```
# cython: language_level=3
"""
t01_square_int — typed integer function (minimal).

What it demonstrates:

- Declaring C-typed arguments in a Python-visible function.
- Returning Python integers from C-typed arithmetic.

How to run:

>>> from scikitplot.cython import compile_template
>>> m = compile_template("t01_square_int")
>>> m.f(10)
100
"""


def f(int n):
    # A C-typed local variable is faster than Python ints for arithmetic.
    cdef int x = n
    return x * x

```

## t02\_fib\_cpdef[#](#t02-fib-cpdef "Link to this heading")

```
# cython: language_level=3
"""
t02_fib_cpdef — cpdef Fibonacci (iterative).

What it demonstrates:

- ``cpdef``: a function that is callable efficiently from both Cython and Python.
- Strict input validation (no heuristics).

How to run:

>>> from scikitplot.cython import compile_template
>>> m = compile_template("t02_fib_cpdef")
>>> m.fib(10)
55
"""

cpdef long fib(int n):
    # Strict validation: negative inputs are rejected deterministically.
    if n < 0:
        raise ValueError("n must be >= 0")

    cdef long a = 0
    cdef long b = 1
    cdef int _i

    for _i in range(n):
        a, b = b, a + b
    return a

```

## t03\_cdef\_class\_counter[#](#t03-cdef-class-counter "Link to this heading")

```
# cython: language_level=3
"""
t03_cdef_class_counter — cdef class with typed fields.

What it demonstrates:

- ``cdef class`` for C-accelerated classes.
- Typed attribute storage and methods.

How to run:

>>> from scikitplot.cython import compile_template
>>> m = compile_template("t03_cdef_class_counter")
>>> c = m.Counter(3)
>>> c.inc()
4
"""

cdef class Counter:
    cdef long _value

    def __cinit__(self, long start=0):
        self._value = start

    cpdef long value(self):
        return self._value

    cpdef long inc(self, long step=1):
        self._value += step
        return self._value

```

## t04\_memoryview\_sum[#](#t04-memoryview-sum "Link to this heading")

```
# cython: language_level=3
"""
t04_memoryview_sum — sum a 1D typed memoryview.

What it demonstrates:

- Using typed memoryviews (buffer protocol) without importing NumPy.
- Strict typing for predictable performance.

How to run:

>>> from scikitplot.cython import compile_template
>>> m = compile_template("t04_memoryview_sum")
>>> m.sum_double([1.0, 2.0, 3.0])
6.0

Notes
-----
Python lists do not expose a buffer, so pass an ``array('d')`` or ``memoryview``
of a suitable buffer for best results:

>>> import array
>>> a = array.array('d', [1.0, 2.0, 3.0])
>>> m.sum_double(a)
6.0
"""


def sum_double(double[:] x):

    cdef Py_ssize_t i, n = x.shape[0]
    cdef double s = 0.0

    for i in range(n):
        s += x[i]
    return s

```

## t05\_numpy\_ndarray\_sum[#](#t05-numpy-ndarray-sum "Link to this heading")

```
# cython: language_level=3
"""
t05_numpy_ndarray_sum — typed NumPy ndarray loop.

What it demonstrates:

- ``cimport numpy`` and typed ndarrays for fast loops.
- Enforcing dtype/ndim at call time.

How to run:

>>> from scikitplot.cython import compile_template
>>> import numpy as np
>>> m = compile_template("t05_numpy_ndarray_sum")
>>> m.sum_int32(np.array([1, 2, 3], dtype=np.int32))
6
"""

cimport numpy as cnp
import numpy as np


def sum_int32(np.ndarray[cnp.int32_t, ndim=1] x):
    cdef Py_ssize_t i, n = x.shape[0]
    cdef long s = 0
    for i in range(n):
        s += x[i]
    return s

```

## t06\_directives\_boundscheck[#](#t06-directives-boundscheck "Link to this heading")

```
# cython: language_level=3
"""
t06_directives_boundscheck — directives for speed.

What it demonstrates
--------------------
- ``cython.boundscheck(False)`` and ``cython.wraparound(False)``.
- Local, explicit performance directives (no global magic).

How to run
----------
>>> from scikitplot.cython import compile_template
>>> import numpy as np
>>> m = compile_template("t06_directives_boundscheck")
>>> m.prefix_sum(np.array([1, 2, 3], dtype=np.int64)).tolist()
[1, 3, 6]
"""

import cython
cimport numpy as cnp
import numpy as np


@cython.boundscheck(False)
@cython.wraparound(False)
def prefix_sum(np.ndarray[cnp.int64_t, ndim=1] x):
    cdef Py_ssize_t i, n = x.shape[0]
    cdef np.ndarray[cnp.int64_t, ndim=1] out = np.empty(n, dtype=np.int64)
    cdef long long acc = 0
    for i in range(n):
        acc += x[i]
        out[i] = acc
    return out

```

## t07\_libc\_math[#](#t07-libc-math "Link to this heading")

```
# cython: language_level=3
"""
t07_libc_math — libc math usage.

What it demonstrates:

- ``cimport`` from ``libc.math`` for fast math operations.
- A pure C-style loop over a memoryview.

How to run:

>>> from scikitplot.cython import compile_template
>>> import array
>>> m = compile_template("t07_libc_math")
>>> a = array.array('d', [0.0, 1.0, 4.0])
>>> m.sqrt_sum(a)
3.0
"""

from libc.math cimport sqrt


def sqrt_sum(double[:] x):
    cdef Py_ssize_t i, n = x.shape[0]
    cdef double s = 0.0
    for i in range(n):
        s += sqrt(x[i])
    return s

```

## t08\_struct\_point[#](#t08-struct-point "Link to this heading")

```
# cython: language_level=3
"""
t08_struct_point — cdef struct.

What it demonstrates
--------------------
- Defining a ``cdef struct`` and using it for computation.
- Returning Python floats from C math.

How to run
----------
>>> from scikitplot.cython import compile_template
>>> m = compile_template("t08_struct_point")
>>> m.dist2(0.0, 0.0, 3.0, 4.0)
25.0
"""


cdef struct Point:
    double x
    double y


def dist2(double x1, double y1, double x2, double y2):
    cdef Point a
    cdef Point b

    a.x = x1
    a.y = y1
    b.x = x2
    b.y = y2

    cdef double dx = a.x - b.x
    cdef double dy = a.y - b.y
    return dx*dx + dy*dy

```

## t09\_enum\_state[#](#t09-enum-state "Link to this heading")

```
# cython: language_level=3
"""
t09_enum_state — cdef enum.

What it demonstrates
--------------------
- Defining an enum and exposing stable integer codes to Python.

How to run
----------
>>> from scikitplot.cython import compile_template
>>> m = compile_template("t09_enum_state")
>>> m.state_code("ok")
0
"""


cdef enum State:
    OK = 0
    WARN = 1
    ERROR = 2


def state_code(str s):
    if s == "ok":
        return OK
    if s == "warn":
        return WARN
    if s == "error":
        return ERROR
    raise ValueError("unknown state")

```

## t10\_safe\_div\_except[#](#t10-safe-div-except "Link to this heading")

```
# cython: language_level=3
"""
t10_safe_div_except — exception-aware cpdef.

What it demonstrates
--------------------
- ``cpdef`` with an explicit exception behavior.
- Strict error handling (division by zero).

How to run
----------
>>> from scikitplot.cython import compile_template
>>> m = compile_template("t10_safe_div_except")
>>> m.safe_div(10, 2)
5
"""

cpdef int safe_div(int a, int b) except? -1:
    if b == 0:
        raise ZeroDivisionError("b must be non-zero")
    return a // b

```

## t11\_fused\_types\_dot[#](#t11-fused-types-dot "Link to this heading")

```
# cython: language_level=3
"""
t11_fused_types_dot — fused types dot product.

What it demonstrates
--------------------
- Fused types to generate specialized versions for multiple numeric types.
- Typed memoryviews for flexible inputs.

How to run
----------
>>> from scikitplot.cython import compile_template
>>> import array
>>> m = compile_template("t11_fused_types_dot")
>>> a = array.array('d', [1.0, 2.0, 3.0])
>>> b = array.array('d', [4.0, 5.0, 6.0])
>>> m.dot(a, b)
32.0
"""

ctypedef fused floating:
    float
    double


def dot(floating[:] a, floating[:] b):
    cdef Py_ssize_t i, n = a.shape[0]
    if b.shape[0] != n:
        raise ValueError("shapes must match")
    cdef double s = 0.0
    for i in range(n):
        s += a[i] * b[i]
    return s

```

## t12\_inline\_clamp[#](#t12-inline-clamp "Link to this heading")

```
# cython: language_level=3
"""
t12_inline_clamp — cdef inline helper.

What it demonstrates
--------------------
- ``cdef inline`` helper to avoid repetition and keep hot loops tight.
- Clean separation of helper vs public function.

How to run
----------
>>> from scikitplot.cython import compile_template
>>> import array
>>> m = compile_template("t12_inline_clamp")
>>> x = array.array('d', [-1.0, 0.5, 2.0])
>>> m.clamp01(x).tolist()
[0.0, 0.5, 1.0]
"""


cdef inline double clamp01_scalar(double x):
    if x < 0.0:
        return 0.0
    if x > 1.0:
        return 1.0
    return x


def clamp01(double[:] x):
    cdef Py_ssize_t i, n = x.shape[0]
    # We return a Python list to keep this template dependency-free.
    out = [0.0] * n
    for i in range(n):
        out[i] = clamp01_scalar(x[i])
    return out

```

## t13\_bytes\_xor[#](#t13-bytes-xor "Link to this heading")

```
# cython: language_level=3
"""
t13_bytes_xor — bytes processing with memoryviews.

What it demonstrates:

- Using ``unsigned char[:]`` memoryviews.
- Creating output as ``bytes`` deterministically.

How to run:

>>> from scikitplot.cython import compile_template
>>> m = compile_template("t13_bytes_xor")
>>> m.xor_bytes(b"abc", 1)
b'`cb'
"""


def xor_bytes(bytes data, unsigned char key):
    cdef unsigned char[:] src = data
    cdef Py_ssize_t i, n = src.shape[0]
    out = bytearray(n)
    cdef unsigned char[:] dst = out
    for i in range(n):
        dst[i] = src[i] ^ key
    return bytes(out)

```

## t14\_string\_reverse[#](#t14-string-reverse "Link to this heading")

```
# cython: language_level=3
"""
t14_string_reverse — Python string manipulation.

What it demonstrates
--------------------
- Not everything needs to be C-typed; Cython can still help structure code.
- Deterministic behavior with Unicode strings.

How to run
----------
>>> from scikitplot.cython import compile_template
>>> m = compile_template("t14_string_reverse")
>>> m.reverse("héllo")
'olléh'
"""


def reverse(str s):
    # Python-level reversal is correct for Unicode code points.
    return s[::-1]

```

## t15\_lcg\_rng[#](#t15-lcg-rng "Link to this heading")

```
# cython: language_level=3
"""
t15_lcg_rng — deterministic RNG (LCG) as cdef class.

What it demonstrates
--------------------
- A tiny reproducible PRNG implemented with 32-bit arithmetic.
- cdef class encapsulation for state and speed.

How to run
----------
>>> from scikitplot.cython import compile_template
>>> m = compile_template("t15_lcg_rng")
>>> r = m.LCG(123)
>>> [r.next_u32() for _ in range(3)]
[... deterministic ...]
"""

cdef class LCG:
    cdef unsigned int _state

    def __cinit__(self, unsigned int seed=1):
        if seed == 0:
            seed = 1
        self._state = seed

    cpdef unsigned int next_u32(self):
        # Numerical Recipes LCG constants (deterministic).
        self._state = self._state * 1664525u + 1013904223u
        return self._state

    cpdef double next_float01(self):
        # Convert to [0, 1) using 32-bit scaling.
        return self.next_u32() / 4294967296.0

```

## t16\_insertion\_sort[#](#t16-insertion-sort "Link to this heading")

```
# cython: language_level=3
"""
t16_insertion_sort — insertion sort on a typed memoryview.

What it demonstrates:

- In-place algorithms on typed memoryviews.
- Strict algorithm with deterministic output.

How to run:

>>> from scikitplot.cython import compile_template
>>> import array
>>> m = compile_template("t16_insertion_sort")
>>> a = array.array('d', [3.0, 1.0, 2.0])
>>> m.insertion_sort(a)
>>> list(a)
[1.0, 2.0, 3.0]
"""


def insertion_sort(double[:] x):
    cdef Py_ssize_t i, j, n = x.shape[0]
    cdef double key
    for i in range(1, n):
        key = x[i]
        j = i - 1
        while j >= 0 and x[j] > key:
            x[j + 1] = x[j]
            j -= 1
        x[j + 1] = key

```

## t17\_kahan\_sum[#](#t17-kahan-sum "Link to this heading")

```
# cython: language_level=3
"""
t17_kahan_sum — Kahan summation.

What it demonstrates
--------------------
- Numerically stable summation using compensation.
- Useful in ML metrics aggregation.

How to run
----------
>>> from scikitplot.cython import compile_template
>>> import array
>>> m = compile_template("t17_kahan_sum")
>>> a = array.array('d', [1e100, 1.0, -1e100])
>>> m.kahan_sum(a)
1.0
"""


def kahan_sum(double[:] x):
    cdef Py_ssize_t i, n = x.shape[0]
    cdef double s = 0.0
    cdef double c = 0.0  # compensation
    cdef double y, t
    for i in range(n):
        y = x[i] - c
        t = s + y
        c = (t - s) - y
        s = t
    return s

```

## t18\_histogram\_int[#](#t18-histogram-int "Link to this heading")

```
# cython: language_level=3
"""
t18_histogram_int — histogram counting (NumPy int32).

What it demonstrates
--------------------
- Counting histogram bins with typed ndarrays.
- Strict bounds checks on bin range.

How to run
----------
>>> from scikitplot.cython import compile_template
>>> import numpy as np
>>> m = compile_template("t18_histogram_int")
>>> x = np.array([0, 1, 1, 2], dtype=np.int32)
>>> m.hist_counts(x, 3).tolist()
[1, 2, 1]
"""

cimport numpy as cnp
import numpy as np


def hist_counts(np.ndarray[cnp.int32_t, ndim=1] x, int n_bins):
    if n_bins <= 0:
        raise ValueError("n_bins must be > 0")
    cdef np.ndarray[cnp.int64_t, ndim=1] out = np.zeros(n_bins, dtype=np.int64)
    cdef Py_ssize_t i, n = x.shape[0]
    cdef int v
    for i in range(n):
        v = x[i]
        if v < 0 or v >= n_bins:
            raise ValueError("value out of range")
        out[v] += 1
    return out

```

## t19\_popcount[#](#t19-popcount "Link to this heading")

```
# cython: language_level=3
"""
t19_popcount — portable bit population count.

What it demonstrates
--------------------
- Bitwise operations on unsigned ints.
- Portability: no compiler-specific builtins.

How to run
----------
>>> from scikitplot.cython import compile_template
>>> m = compile_template("t19_popcount")
>>> m.popcount32(0b1011)
3
"""

cpdef int popcount32(unsigned int x):
    cdef int count = 0
    while x:
        x &= x - 1  # clear lowest set bit
        count += 1
    return count

```

## t20\_matmul\_small[#](#t20-matmul-small "Link to this heading")

```
# cython: language_level=3
"""
t20_matmul_small — naive 2D matrix multiplication (memoryviews).

What it demonstrates:

- 2D typed memoryviews and triple loops.
- Strict dimension checks.

How to run:

>>> from scikitplot.cython import compile_template
>>> import numpy as np
>>> m = compile_template("t20_matmul_small")
>>> A = np.array([[1., 2.],[3., 4.]], dtype=np.float64)
>>> B = np.array([[5., 6.],[7., 8.]], dtype=np.float64)
>>> m.matmul(A, B)
array([[19., 22.],
       [43., 50.]])
"""

cimport numpy as cnp
import numpy as np


def matmul(np.ndarray[cnp.float64_t, ndim=2] A, np.ndarray[cnp.float64_t, ndim=2] B):
    cdef Py_ssize_t i, j, k
    cdef Py_ssize_t m = A.shape[0]
    cdef Py_ssize_t n = A.shape[1]
    if B.shape[0] != n:
        raise ValueError("shape mismatch")
    cdef Py_ssize_t p = B.shape[1]
    cdef np.ndarray[cnp.float64_t, ndim=2] C = np.zeros((m, p), dtype=np.float64)
    for i in range(m):
        for k in range(n):
            for j in range(p):
                C[i, j] += A[i, k] * B[k, j]
    return C

```