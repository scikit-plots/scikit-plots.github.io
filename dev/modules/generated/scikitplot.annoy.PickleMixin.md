# PickleMixin[#](#picklemixin "Link to this heading")

class scikitplot.annoy.PickleMixin[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/annoy/_mixins/_pickle.py#L173)[#](#scikitplot.annoy.PickleMixin "Link to this definition")
:   Mixin adding pickle support.

    Parameters:
    :   ****f****int, default=0
        :   Vector dimension (constructor argument for wrapper classes).

        ****metric****str, default=”angular”
        :   Distance metric (constructor argument for wrapper classes).

        ****prefault****bool, default=False
        :   Default prefault flag used during reconstruction.

        ****compress\_mode****{None, “zlib”, “gzip”}, default=None
        :   Optional compression for `"byte"` mode.

        ****pickle\_mode****{“auto”, “disk”, “byte”}, default=”auto”
        :   Pickle strategy.

    > **See also**
    > [`scikitplot.annoy._mixins._io.IndexIOMixin`](scikitplot.annoy.IndexIOMixin.html#scikitplot.annoy.IndexIOMixin "scikitplot.annoy._mixins._io.IndexIOMixin")

    Notes

    * `"byte"` mode requires a built index (`get_n_trees() > 0`).
    * `"disk"` mode requires an on-disk path (`on_disk_path` or `_on_disk_path`).

    property compress\_mode: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")['zlib', 'gzip'] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.annoy.PickleMixin.compress_mode "Link to this definition")
    :   Compression used for `"byte"` pickling by [`PickleMixin`](#scikitplot.annoy.PickleMixin "scikitplot.annoy.PickleMixin").

    property pickle\_mode: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")['auto', 'disk', 'byte'][#](#scikitplot.annoy.PickleMixin.pickle_mode "Link to this definition")
    :   Persist strategy used by [`PickleMixin`](#scikitplot.annoy.PickleMixin "scikitplot.annoy.PickleMixin").