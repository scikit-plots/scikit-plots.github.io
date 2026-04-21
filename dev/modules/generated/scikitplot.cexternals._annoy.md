# \_annoy[#](#annoy "Link to this heading")

High-level Python interface for the C++ ANNoy backend.

Spotify ANNoy [[1]](#r1d6a7aea0162-1) (Approximate Nearest Neighbors Oh Yeah).

Exports:

* Annoy → low-level C-extension type (stable) [c-api powered new features](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html)
* AnnoyIndex → alias of Annoy (legacy AnnoyIndex name)

> **See also**
> * [ANNoy](../../user_guide/annoy/index.html#annoy-index)
* [cexternals/ANNoy](../../user_guide/cexternals/_annoy/index.html#cexternals-annoy-index)
* [spotify/annoy](https://github.com/spotify/annoy)
* <https://pypi.org/project/annoy>

References

[[1](#id1)]

[Spotify AB. (2013). “Approximate Nearest Neighbors Oh Yeah”
Github. https://github.com/spotify/annoy](https://github.com/spotify/annoy)

Examples

Try it in your browser!
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
Go BackOpen In Tab