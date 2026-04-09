# scikitplot.cexternals[#](#module-scikitplot.cexternals "Link to this heading")

C-External libraries vendored for high-performance extensions for Scikit-Plots.

This package contains optimized C/C++ and template-based libraries that are
bundled with Scikit-Plots to provide fast numerical, geometric, and algorithmic
capabilities used in advanced visualization and machine learning workflows.

These modules wrap native backends (e.g. Annoy, NumCpp, F2PY-generated code)
through Python extension interfaces to ensure consistent performance and
availability across environments, without relying on separate system installs.

****User guide.**** See the [C-Externals (experimental)](../user_guide/cexternals/index.html#cexternals-index) section for further details.

## Spotify ANNoy as submodule.[#](#module-scikitplot.cexternals._annoy "Link to this heading")

High-level Python interface for the C++ ANNoy backend.

Spotify ANNoy [[1]](../modules/generated/scikitplot.cexternals._annoy.html#r1d6a7aea0162-1) (Approximate Nearest Neighbors Oh Yeah).

Exports:

* Annoy → low-level C-extension type (stable) [c-api powered new features](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html)
* AnnoyIndex → alias of Annoy (legacy AnnoyIndex name)

> **See also**
> * [ANNoy](../user_guide/annoy/index.html#annoy-index)
* [cexternals/ANNoy](../user_guide/cexternals/_annoy/index.html#cexternals-annoy-index)
* <https://github.com/spotify/annoy>
* <https://pypi.org/project/annoy>

References

[[1](#id1)]

[Spotify AB. (2013). “Approximate Nearest Neighbors Oh Yeah”
Github. https://github.com/spotify/annoy](https://github.com/spotify/annoy)

Examples

```
>>> import random; random.seed(0)
>>> # from annoy import Annoy, AnnoyIndex
>>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
>>> from scikitplot.annoy import Annoy, AnnoyIndex, Index

```
```
>>> f = 40  # vector dimensionality
>>> t = AnnoyIndex(f, "angular")  # Length of item vector and metric
>>> t.add_item(0, [1] * f)
>>> t.build(10)  # Build 10 trees
>>> t.get_nns_by_item(0, 1)  # Find nearest neighbor

```

****User guide.**** See the [spotify/ANNoy Vector Database (Approximate Nearest Neighbors)](../user_guide/cexternals/_annoy/index.html#cexternals-annoy-index) section for further details.

|  |  |
| --- | --- |
| [`_annoy`](../modules/generated/scikitplot.cexternals._annoy.html#module-scikitplot.cexternals._annoy "scikitplot.cexternals._annoy") | High-level Python interface for the C++ ANNoy backend. |
| [`_annoy.annoylib`](../modules/generated/scikitplot.cexternals._annoy.annoylib.html#module-scikitplot.cexternals._annoy.annoylib "scikitplot.cexternals._annoy.annoylib") | Compiled with GCC/Clang(Using 512-bit AVX instructions). |
| [`_annoy.Annoy`](../modules/generated/scikitplot.cexternals._annoy.Annoy.html#scikitplot.cexternals._annoy.Annoy "scikitplot.cexternals._annoy.Annoy") | Compiled with GCC/Clang. |
| [`_annoy.AnnoyIndex`](../modules/generated/scikitplot.cexternals._annoy.AnnoyIndex.html#scikitplot.cexternals._annoy.AnnoyIndex "scikitplot.cexternals._annoy.AnnoyIndex") |  |

## astropy stats as submodule.[#](#module-scikitplot.cexternals._astropy "Link to this heading")

Astropy is a package intended to contain core functionality and some
common tools needed for performing astronomy and astrophysics research with
Python. It also provides an index for other astronomy packages and tools for
managing them.

Documentation is available in the docstrings and
online at <https://www.astropy.org/>.

****User guide.**** See the [Astropy (experimental)](../user_guide/cexternals/_astropy/index.html#cexternals-astropy-index) section for further details.

|  |  |
| --- | --- |
| [`_astropy`](../modules/generated/scikitplot.cexternals._astropy.html#module-scikitplot.cexternals._astropy "scikitplot.cexternals._astropy") | Astropy is a package intended to contain core functionality and some common tools needed for performing astronomy and astrophysics research with Python. |
| [`_astropy.stats`](../modules/generated/scikitplot.cexternals._astropy.stats.html#module-scikitplot.cexternals._astropy.stats "scikitplot.cexternals._astropy.stats") | This subpackage contains statistical tools provided for or used by Astropy. |

## NumPy f2py as submodule.[#](#module-scikitplot.cexternals._f2py "Link to this heading")

Fortran to Python Interface Generator.

Copyright 1999 – 2011 Pearu Peterson all rights reserved.
Copyright 2011 – present NumPy Developers.
Permission to use, modify, and distribute this software is given under the terms
of the NumPy License.

NO WARRANTY IS EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

> **See also**
> * <https://stdlib.fortran-lang.org/lists/modules.html>
* <https://numpy.org/doc/stable/f2py/index.html>
* <https://scipy.github.io/old-wiki/pages/Cookbook/f2py_and_NumPy.html>
* <https://scipy-cookbook.readthedocs.io/items/F2Py.html>
* <https://scipy-cookbook.readthedocs.io/items/idx_interfacing_with_other_languages.html>

****User guide.**** See the [f2py (experimental)](../user_guide/cexternals/_f2py/index.html#cexternals-f2py-index) section for further details.

|  |  |
| --- | --- |
| [`_f2py`](../modules/generated/scikitplot.cexternals._f2py.html#module-scikitplot.cexternals._f2py "scikitplot.cexternals._f2py") | Fortran to Python Interface Generator. |
| [`_f2py.get_include`](../modules/generated/scikitplot.cexternals._f2py.get_include.html#scikitplot.cexternals._f2py.get_include "scikitplot.cexternals._f2py.get_include") | Return the directory that contains the `fortranobject.c` and `.h` files. |

## NumCpp header’s as submodule.[#](#module-scikitplot.cexternals._numcpp "Link to this heading")

****User guide.**** See the [NumCpp Header Only C++ (experimental)](../user_guide/cexternals/_numcpp/index.html#cexternals-numcpp-index) section for further details.

|  |  |
| --- | --- |
| [`_numcpp`](../modules/generated/scikitplot.cexternals._numcpp.html#module-scikitplot.cexternals._numcpp "scikitplot.cexternals._numcpp") |  |