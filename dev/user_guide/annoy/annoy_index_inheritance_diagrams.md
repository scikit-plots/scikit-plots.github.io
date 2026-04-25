# Annoy [`Index`](../../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index") class Inheritance Diagrams (MRO)[#](#annoy-index-class-inheritance-diagrams-mro "Link to this heading")

This page shows the ****class inheritance structure**** for the Annoy backend and the
high-level [`Index`](../../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index") facade class, using Sphinx’s built-in
inheritance diagram support (the same approach used in Matplotlib’s docs).

## Index + mixins[#](#index-mixins "Link to this heading")

![Inheritance diagram of scikitplot.cexternals._annoy.Annoy, scikitplot.annoy._mixins._meta.MetaMixin, scikitplot.annoy._mixins._io.IndexIOMixin, scikitplot.annoy._mixins._pickle.PickleMixin, scikitplot.annoy._mixins._vectors.VectorOpsMixin, scikitplot.annoy._mixins._ndarray.NDArrayMixin, scikitplot.annoy._mixins._plotting.PlottingMixin, scikitplot.annoy.Index](../../_images/inheritance-be13f94b3b1111369439e677748c5f0e9930b1d6.png)










Reading this diagram

* [`Annoy`](../../modules/generated/scikitplot.cexternals._annoy.Annoy.html#scikitplot.cexternals._annoy.Annoy "scikitplot.cexternals._annoy.Annoy") is the ****low-level C-extension backend****
  and owns the actual index state and core operations.
* [`Index`](../../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index") is the ****Python facade**** that subclasses the backend
  and composes behavior using independent mixins.

## Mixins only (independence + MRO scan)[#](#mixins-only-independence-mro-scan "Link to this heading")

This diagram focuses only on the mixins so you can quickly confirm there is no
unexpected inheritance between mixins (they should be ****independent****).

![Inheritance diagram of scikitplot.annoy._mixins._meta.MetaMixin, scikitplot.annoy._mixins._io.IndexIOMixin, scikitplot.annoy._mixins._pickle.PickleMixin, scikitplot.annoy._mixins._vectors.VectorOpsMixin, scikitplot.annoy._mixins._ndarray.NDArrayMixin, scikitplot.annoy._mixins._plotting.PlottingMixin](../../_images/inheritance-8b6a8d23e3f56df7196139006b7529f45bde30af.png)

## Notes and Limitations[#](#notes-and-limitations "Link to this heading")

Inheritance diagrams show ****class derivation****, but they do not show ****composition****
relationships (e.g., an optional `self._annoy` backend attribute). For composition
support, refer to the “glue” helpers documented elsewhere (e.g., `backend_for(self)`,
`lock_for(self)`).

* An inheritance diagram shows “parent → child” class relationships.
* It helps you understand which class extends another class.

Sphinx can render inheritance diagrams using the built-in extension
`sphinx.ext.inheritance_diagram`. The diagram is rendered using Graphviz
(the `dot` tool), so Graphviz must be available in your build environment.

> **Note**
> In your `conf.py`:

```
extensions += ["sphinx.ext.inheritance_diagram"]

```

### See Also[#](#see-also "Link to this heading")

* [`sphinx.ext.inheritance_diagram`](https://www.sphinx-doc.org/en/master/usage/extensions/inheritance.html#module-sphinx.ext.inheritance_diagram "(in Sphinx v9.1.0)")
* Graphviz (`dot`) documentation