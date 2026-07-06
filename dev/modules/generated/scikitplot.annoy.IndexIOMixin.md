# IndexIOMixin[#](#indexiomixin "Link to this heading")

class scikitplot.annoy.IndexIOMixin[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/annoy/_mixins/_io.py#L47)[#](#scikitplot.annoy.IndexIOMixin "Link to this definition")
:   Mixin adding explicit Annoy-native persistence helpers.

    The concrete class must provide low-level Annoy methods, typically from the
    C-extension backend:

    * `save(path, prefault=...)`
    * `load(path, prefault=...)`
    * `serialize() -> bytes-like`
    * `deserialize(data: bytes-like, prefault=...)`

    Notes

    * Methods in this mixin acquire a per-instance lock if one is available.
    * [`save_index`](#scikitplot.annoy.IndexIOMixin.save_index "scikitplot.annoy.IndexIOMixin.save_index") defaults to Annoy.save
    * [`save_bundle`](#scikitplot.annoy.IndexIOMixin.save_bundle "scikitplot.annoy.IndexIOMixin.save_bundle") / [`load_bundle`](#scikitplot.annoy.IndexIOMixin.load_bundle "scikitplot.annoy.IndexIOMixin.load_bundle") require `to_json` /
      `from_json` (compose with [`MetaMixin`](scikitplot.annoy.MetaMixin.html#scikitplot.annoy.MetaMixin "scikitplot.annoy._mixins._meta.MetaMixin")).

    classmethod from\_bytes(**data**, **\***, **f=None**, **metric=None**, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/annoy/_mixins/_io.py#L318)[#](#scikitplot.annoy.IndexIOMixin.from_bytes "Link to this definition")
    :   Construct a new index and load it from serialized bytes.

        Parameters:
        :   ****data****
            :   Bytes produced by [`to_bytes`](#scikitplot.annoy.IndexIOMixin.to_bytes "scikitplot.annoy.IndexIOMixin.to_bytes") (backend `serialize`).

            ****f****
            :   Vector dimension for construction.

            ****metric****
            :   Metric name for construction.

            ****prefault****
            :   Forwarded to the backend `deserialize` if supported.

        Returns:
        :   index
            :   Newly constructed index with the data loaded.

        Raises:
        :   TypeError
            :   If `data` is not bytes-like.

            ValueError
            :   If `f` or `metric` is invalid.

            AttributeError
            :   If the backend does not provide `deserialize`.

        Parameters:
        :   * ****data**** ([**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**bytearray**](https://docs.python.org/3/library/stdtypes.html#bytearray "(in Python v3.14)") **|** [**memoryview**](https://docs.python.org/3/library/stdtypes.html#memoryview "(in Python v3.14)"))
            * ****f**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****metric**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****prefault**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

        Return type:
        :   Self

        Notes

        Portable blobs add a small header (version, ABI sizes, endianness, metric, f)
        to ensure incompatible binaries fail loudly and safely. They are not a
        cross-architecture wire format; the payload remains Annoy’s native snapshot.

        For `data` if fed `to_bytes(format='native') required params
        ``f``, `metric`.

    classmethod load\_bundle(**manifest\_filename='manifest.json'**, **index\_filename='index.ann'**, **\***, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/annoy/_mixins/_io.py#L211)[#](#scikitplot.annoy.IndexIOMixin.load_bundle "Link to this definition")
    :   Load a directory bundle created by [`save_bundle`](#scikitplot.annoy.IndexIOMixin.save_bundle "scikitplot.annoy.IndexIOMixin.save_bundle").

        Parameters:
        :   ****manifest\_filename****
            :   Filename for the metadata manifest inside the directory.

            ****index\_filename****
            :   Filename for the Annoy index inside the directory.

            ****prefault****
            :   Forwarded to [`load_index`](#scikitplot.annoy.IndexIOMixin.load_index "scikitplot.annoy.IndexIOMixin.load_index").

        Returns:
        :   index
            :   Newly constructed index.

        Raises:
        :   AttributeError
            :   If `from_json` is not available (compose with [`MetaMixin`](scikitplot.annoy.MetaMixin.html#scikitplot.annoy.MetaMixin "scikitplot.annoy._mixins._meta.MetaMixin")).

            TypeError
            :   If `from_json` returns an unexpected type.

            OSError
            :   On filesystem failures.

        Parameters:
        :   * ****manifest\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****index\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****prefault**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

        Return type:
        :   Self

    classmethod load\_index(**f**, **metric**, **path**, **\***, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/annoy/_mixins/_io.py#L109)[#](#scikitplot.annoy.IndexIOMixin.load_index "Link to this definition")
    :   Load (mmap) an Annoy index file into this object.

        Parameters:
        :   ****f****
            :   Vector dimension for construction.

            ****metric****
            :   Metric name for construction.

            ****path****str or os.PathLike
            :   Path to a file previously created by [`save_index`](#scikitplot.annoy.IndexIOMixin.save_index "scikitplot.annoy.IndexIOMixin.save_index") or the
                backend `save`.

            ****prefault****
            :   Forwarded to the backend. If `None`, the backend default is used.

        Raises:
        :   AttributeError
            :   If the backend does not provide `load(path, prefault=...)`.

            OSError
            :   If loading fails (backend or filesystem).

        Parameters:
        :   * ****f**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****metric**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **PathLike****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****prefault**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

        Return type:
        :   Self

    save\_bundle(**manifest\_filename='manifest.json'**, **index\_filename='index.ann'**, **\***, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/annoy/_mixins/_io.py#L164)[#](#scikitplot.annoy.IndexIOMixin.save_bundle "Link to this definition")
    :   Save a **directory bundle** containing metadata + the index file.

        The bundle contains:
        - `manifest.json`: metadata payload produced by `to_json`
        - `index.ann`: Annoy index produced by [`save_index`](#scikitplot.annoy.IndexIOMixin.save_index "scikitplot.annoy.IndexIOMixin.save_index")

        Parameters:
        :   ****manifest\_filename****
            :   Filename for the metadata manifest inside the directory.

            ****index\_filename****
            :   Filename for the Annoy index inside the directory.

            ****prefault****
            :   Forwarded to [`save_index`](#scikitplot.annoy.IndexIOMixin.save_index "scikitplot.annoy.IndexIOMixin.save_index").

        Raises:
        :   AttributeError
            :   If `to_json` is not available (compose with [`MetaMixin`](scikitplot.annoy.MetaMixin.html#scikitplot.annoy.MetaMixin "scikitplot.annoy._mixins._meta.MetaMixin")).

            OSError
            :   On filesystem failures.

        Parameters:
        :   * ****manifest\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****index\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****prefault**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    save\_index(**path**, **\***, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/annoy/_mixins/_io.py#L70)[#](#scikitplot.annoy.IndexIOMixin.save_index "Link to this definition")
    :   Persist the Annoy index to disk.

        Parameters:
        :   ****path****str or os.PathLike
            :   Destination path for the Annoy index file.

            ****prefault****
            :   Forwarded to the backend. If `None`, the backend default is used.

        Raises:
        :   AttributeError
            :   If the backend does not provide `save(path, prefault=...)`.

            OSError
            :   For filesystem-level failures.

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **PathLike****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****prefault**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

        Return type:
        :   Self

    to\_bytes(**format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/annoy/_mixins/_io.py#L263)[#](#scikitplot.annoy.IndexIOMixin.to_bytes "Link to this definition")
    :   Serialize the built index to bytes (backend `serialize`).

        Parameters:
        :   ****format****{“native”, “portable”, “canonical”} or None, optional, default=None
            :   Serialization format. If `None` used `"canonical"`

                * “native” (legacy): raw Annoy memory snapshot. Fastest, but
                  only compatible when the ABI matches exactly.
                * “portable”: prepend a small compatibility header (version,
                  endianness, sizeof checks, metric, f) so deserialization fails
                  loudly on mismatches.
                * “canonical”: rebuildable wire format storing item vectors + build
                  parameters. Portable across ABIs (within IEEE-754 float32) and
                  restores by rebuilding trees deterministically.

        Returns:
        :   data
            :   Serialized index bytes.

        Raises:
        :   AttributeError
            :   If the backend does not provide `serialize`.

            RuntimeError
            :   If serialization fails.

            TypeError
            :   If the backend returns non-bytes-like data.

        Return type:
        :   [bytes](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")

        Notes

        “Portable” blobs are the native snapshot with additional compatibility guards.
        They are not a cross-architecture wire format.

        “Canonical” blobs trade load time for portability: deserialization rebuilds
        the index with `n_jobs=1` for deterministic reconstruction.