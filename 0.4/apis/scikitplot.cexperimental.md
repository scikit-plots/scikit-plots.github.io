# scikitplot.cexperimental[#](#module-scikitplot.cexperimental "Link to this heading")

C-Experimental modules for Scikit-Plots.

This package contains high-performance functions implemented in C, C++, and Cython,
exposed to Python via Cython and Pybind11 bindings. These utilities are intended
for experimental and performance-critical use cases.

****User guide.**** See the [C-Experimental (experimental)](../user_guide/cexperimental/index.html#cexperimental-index) section for further details.

## Cython Bindings samples[#](#module-scikitplot.cexperimental._cy_cexperimental "Link to this heading")

### C-Experimental API Functions by Cython[#](#c-experimental-api-functions-by-cython "Link to this heading")

This module provides Cython implementations of several mathematical functions
often used in statistical and machine learning contexts,
such as the expit (sigmoid) function, its logarithm, and the logit function.
These functions are scalar and typed versions of functions commonly
found in libraries like [`scipy.special`](https://scipy.github.io/devdocs/reference/special.html#module-scipy.special "(in SciPy v1.18.0.dev)").

The module leverages Cython’s fused types to handle different numeric types
(`double`, `float`, `long double`) in a single function definition,
making the code both efficient and flexible.

****User guide.**** See the [C-Experimental (experimental)](../user_guide/cexperimental/index.html#cexperimental-index) section for further details.

|  |  |
| --- | --- |
| [`_cy_cexperimental.expit`](../modules/generated/scikitplot.cexperimental._cy_cexperimental.expit.html#scikitplot.cexperimental._cy_cexperimental.expit "scikitplot.cexperimental._cy_cexperimental.expit") | Compute the sigmoid (expit) of a scalar input. |
| [`_cy_cexperimental.log_expit`](../modules/generated/scikitplot.cexperimental._cy_cexperimental.log_expit.html#scikitplot.cexperimental._cy_cexperimental.log_expit "scikitplot.cexperimental._cy_cexperimental.log_expit") | Compute the natural logarithm of the sigmoid (expit) of a scalar input. |
| [`_cy_cexperimental.logit`](../modules/generated/scikitplot.cexperimental._cy_cexperimental.logit.html#scikitplot.cexperimental._cy_cexperimental.logit "scikitplot.cexperimental._cy_cexperimental.logit") | Compute the logit (inverse sigmoid) of a scalar input. |

## Pybind11 Bindings samples[#](#module-scikitplot.cexperimental._py_cexperimental "Link to this heading")

Experimental API Python module that uses C/C++ for numerical computations.
Created by Pybind11 bindings.

****User guide.**** See the [C-Experimental (experimental)](../user_guide/cexperimental/index.html#cexperimental-index) section for further details.

|  |  |
| --- | --- |
| [`_py_cexperimental.py_print`](../modules/generated/scikitplot.cexperimental._py_cexperimental.py_print.html#scikitplot.cexperimental._py_cexperimental.py_print "scikitplot.cexperimental._py_cexperimental.py_print") | Prints a Unicode message. |

## Python samples[#](#module-scikitplot.cexperimental._logsumexp "Link to this heading")

****User guide.**** See the [C-Experimental (experimental)](../user_guide/cexperimental/index.html#cexperimental-index) section for further details.

|  |  |
| --- | --- |
| [`_logsumexp.sigmoid`](../modules/generated/scikitplot.cexperimental._logsumexp.sigmoid.html#scikitplot.cexperimental._logsumexp.sigmoid "scikitplot.cexperimental._logsumexp.sigmoid") | Compute the sigmoid function for the input array `x`. |
| [`_logsumexp.softmax`](../modules/generated/scikitplot.cexperimental._logsumexp.softmax.html#scikitplot.cexperimental._logsumexp.softmax "scikitplot.cexperimental._logsumexp.softmax") | Compute the softmax function. |
| [`_logsumexp.logsumexp`](../modules/generated/scikitplot.cexperimental._logsumexp.logsumexp.html#scikitplot.cexperimental._logsumexp.logsumexp "scikitplot.cexperimental._logsumexp.logsumexp") | Compute the log of the sum of exponentials of input elements. |
| [`_logsumexp.log_softmax`](../modules/generated/scikitplot.cexperimental._logsumexp.log_softmax.html#scikitplot.cexperimental._logsumexp.log_softmax "scikitplot.cexperimental._logsumexp.log_softmax") | Compute the logarithm of the softmax function. |