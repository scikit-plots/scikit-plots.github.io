# C-Experimental (experimental)[#](#c-experimental-experimental "Link to this heading")

This module contains functions related to [`cexperimental`](../../apis/scikitplot.cexperimental.html#module-scikitplot.cexperimental "scikitplot.cexperimental").
Placeholder for c-experimental features for developers…

## Cython Bindings[#](#cython-bindings "Link to this heading")

The Cython language is a superset of the Python language that additionally
supports calling C functions and declaring C types on variables
and class attributes.

> **See also**
> * <https://cython.org/>

## Pybind11 Bindings[#](#pybind11-bindings "Link to this heading")

pybind11 is a lightweight header-only library that exposes C++ types in Python
and vice versa, mainly to create Python bindings of existing C++ code.

> **See also**
> * [pybind/pybind11](https://github.com/pybind/pybind11)

## C/CPP Headers Source[#](#c-cpp-headers-source "Link to this heading")

### NumPy C-API Headers[#](#numpy-c-api-headers "Link to this heading")

NumPy provides a C-API to enable users to extend the system
and get access to the array object for use in other routines.
The best way to truly understand …

> **See also**
> * <https://numpy.org/devdocs/user/c-info.html>
* <https://numpy.org/devdocs/reference/c-api/index.html>
```
import numpy as np

# Return the directory that contains the NumPy *.h header files.
np.get_include()

```

### LightNumPy C/Cpp-API Headers[#](#lightnumpy-c-cpp-api-headers "Link to this heading")

A lightweight version of NumPy (or similar functionality).

> **See also**
> * [dpilger26/NumCpp](https://github.com/dpilger26/NumCpp)
* [scikit-plots/lightnumpy](https://github.com/scikit-plots/lightnumpy)
```
try:
  # pip install git+https://github.com/scikit-plots/lightnumpy.git@main
  import lightnumpy as lp
  # Return the directory that contains the NumCpp *.h header files.
  inc_dir_lightnumpy = lp.get_include()
except: pass
else:
  !ls $inc_dir_lightnumpy

```
```
from scikitplot import nc
nc.get_include()

```
```
from scikitplot import nc
print(nc.__doc__)

print(nc.dot.__doc__)

```