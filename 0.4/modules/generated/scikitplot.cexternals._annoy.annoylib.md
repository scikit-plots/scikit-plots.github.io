# annoylib[#](#annoylib "Link to this heading")

Compiled with GCC/Clang(Using 512-bit AVX instructions).

High-performance approximate nearest neighbours (Annoy) C++ core.

This module is a low-level backend (`annoylib`). It exposes the
C++-powered [`Annoy`](scikitplot.cexternals._annoy.Annoy.html#scikitplot.cexternals._annoy.Annoy "scikitplot.cexternals._annoy.Annoy") type.
For day-to-day work, prefer a higher-level Python wrapper
(if your project provides one):

```
>>> from annoy import Annoy, AnnoyIndex

```

If your project ships a higher-level wrapper, it may re-export the same
type under a different module path (for example, [`annoy`](../../apis/scikitplot.annoy.html#module-scikitplot.annoy "scikitplot.annoy")):

```
>>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
>>> from scikitplot.annoy import Annoy, AnnoyIndex, Index

```

Notes

* 32-bit integer (4 bytes) can store values from −2^31 to 2^31−1, roughly ±2 billion.
* 64-bit integer (8 bytes) can store values from −2^63 to 2^63−1, roughly ±9 quintillion.