# PlottingMixin[#](#plottingmixin "Link to this heading")

class scikitplot.annoy.PlottingMixin[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/annoy/_mixins/_plotting.py#L159)[#](#scikitplot.annoy.PlottingMixin "Link to this definition")
:   Mixin that adds convenient plotting methods to high-level Annoy wrappers.

    The mixin assumes the **host class** is Annoy-like (implements
    `get_n_items()`, `get_item(i)`, and `get_nns_by_item(...)`).
    If your wrapper delegates to an internal Annoy instance, override
    `_plotting_backend` to return that backend.

    > **See also**
    > `plot_annoy_index`
    :   Function-level plotting helper.

    `plot_annoy_knn_edges`
    :   Function-level kNN edge overlay helper.

    Notes

    * The underlying plotting logic is implemented in
      `scikitplot.cexternals._annoy._plotting`.
    * All methods are deterministic given index contents and parameters.

    plot\_index(**labels=None**, **\***, **ids=None**, **projection='pca'**, **dims=(0**, **1)**, **center=True**, **maxabs=False**, **l2\_normalize=False**, **dtype=<class 'numpy.float32'>**, **ax=None**, **title=None**, **plot\_kwargs=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/annoy/_mixins/_plotting.py#L231)[#](#scikitplot.annoy.PlottingMixin.plot_index "Link to this definition")
    :   Plot this index as a 2D scatter plot.

        This is a thin wrapper around `plot_annoy_index` that uses
        `_plotting_backend`.

        Parameters:
        :   ****labels, ids, projection, dims, center, maxabs, l2\_normalize, dtype, ax, title, plot\_kwargs****
            :   See `plot_annoy_index`.

        Returns:
        :   y2, ids\_out, ax
            :   See `plot_annoy_index`.

        Parameters:
        :   * ****labels**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****ids**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** **None**)
            * ****projection**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****dims**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)
            * ****center**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****maxabs**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****l2\_normalize**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****ax**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****title**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****plot\_kwargs**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

        > **See also**
        > `plot_annoy_index`
        :   Low-level plotting helper this method delegates to.

        [`plot_knn_edges`](#scikitplot.annoy.PlottingMixin.plot_knn_edges "scikitplot.annoy.PlottingMixin.plot_knn_edges")
        :   Overlay kNN edges on the returned 2D coordinates.

        Notes

        * This method does not mutate the index.
        * Plotting backends (e.g. Matplotlib) are imported lazily and are only
          required when this method is called.
        * The returned `ids_out` corresponds to the item id for each row in
          `y2`.

        Examples

        Try it in your browser!
        ```
        >>> import numpy as np
        >>> import scikitplot.annoy as skann
        >>> idx = skann.Index(f=10, metric="angular")
        >>> # ... add items & build ...
        >>> labels = np.zeros(idx.get_n_items(), dtype=int)
        >>> y2, ids, ax = idx.plot_index(labels=labels, projection="pca")

        ```
        Go BackOpen In Tab

    plot\_knn\_edges(**y2**, **\***, **ids=None**, **k=10**, **search\_k=-1**, **ax=None**, **line\_kwargs=None**, **undirected=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/annoy/_mixins/_plotting.py#L304)[#](#scikitplot.annoy.PlottingMixin.plot_knn_edges "Link to this definition")
    :   Overlay kNN edges onto an existing 2D index plot.

        This is a thin wrapper around `plot_annoy_knn_edges` that uses
        `_plotting_backend`.

        Parameters:
        :   ****y2, ids, k, search\_k, ax, line\_kwargs, undirected****
            :   See `plot_annoy_knn_edges`.

        Returns:
        :   ax
            :   The axes that were drawn on.

        Parameters:
        :   * ****y2**** ([**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"))
            * ****ids**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** **None**)
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****search\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****ax**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****line\_kwargs**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****undirected**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

        > **See also**
        > `plot_annoy_knn_edges`
        :   Low-level edge overlay helper this method delegates to.

        [`plot_index`](#scikitplot.annoy.PlottingMixin.plot_index "scikitplot.annoy.PlottingMixin.plot_index")
        :   Computes the 2D coordinates used as input to this method.

        Notes

        * `y2` must represent 2D coordinates with shape `(n_samples, 2)`.
        * If `ids` is provided, it must have length `n_samples`.
        * This method does not mutate the index; it only performs neighbor
          queries to draw edges.

        Examples

        Try it in your browser!
        ```
        >>> y2, ids, ax = idx.plot_index(labels=np.zeros(idx.get_n_items(), dtype=int))
        >>> idx.plot_knn_edges(y2, ids=ids, k=5, line_kwargs={"alpha": 0.15})

        ```
        Go BackOpen In Tab