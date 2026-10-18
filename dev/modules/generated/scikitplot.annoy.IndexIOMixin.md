# IndexIOMixin[#](#indexiomixin "Link to this heading")

class scikitplot.annoy.IndexIOMixin[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/annoy/_mixins/_io.py#L194)[#](#scikitplot.annoy.IndexIOMixin "Link to this definition")
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

    classmethod from\_bytes(**data**, **\***, **f=None**, **metric=None**, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/annoy/_mixins/_io.py#L626)[#](#scikitplot.annoy.IndexIOMixin.from_bytes "Link to this definition")
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

            TypeError
            :   If the backend does not provide `deserialize`.

        Parameters:
        :   * ****data**** ([**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)") **|** [**bytearray**](https://docs.python.org/3/builtins/stdtypes.html#bytearray "(in Python v3.15)") **|** [**memoryview**](https://docs.python.org/3/builtins/stdtypes.html#memoryview "(in Python v3.15)"))
            * ****f**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
            * ****metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****prefault**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

        Return type:
        :   Self

        Notes

        Portable blobs add a small header (version, ABI sizes, endianness, metric, f)
        to ensure incompatible binaries fail loudly and safely. They are not a
        cross-architecture wire format; the payload remains Annoy’s native snapshot.

        For `data` if fed `to_bytes(format='native') required params
        ``f``, `metric`.

    classmethod load\_bundle(**directory**, **\***, **manifest\_filename='manifest.json'**, **index\_filename=None**, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/annoy/_mixins/_io.py#L481)[#](#scikitplot.annoy.IndexIOMixin.load_bundle "Link to this definition")
    :   Load a bundle published by [`save_bundle`](#scikitplot.annoy.IndexIOMixin.save_bundle "scikitplot.annoy.IndexIOMixin.save_bundle").

        Parameters:
        :   ****directory****str or path-like
            :   Bundle directory.

            ****manifest\_filename****str, optional
            :   Name of the manifest inside the bundle.

            ****index\_filename****str or None, optional
            :   Name of the index member inside the bundle. `None` (the
                default) takes the name the manifest records, which is the one the
                bundle was saved with; a bundle whose manifest records none has
                `index.ann`.

            ****prefault****bool or None, optional
            :   Forwarded to [`load_index`](#scikitplot.annoy.IndexIOMixin.load_index "scikitplot.annoy.IndexIOMixin.load_index").

        Returns:
        :   Self
            :   An index with its vectors loaded and ready to query.

        Raises:
        :   OSError
            :   If a member is missing or unreadable.

            ValueError
            :   If a member name is not a plain file name, or the manifest is of
                a bundle format this version does not read.

            TypeError
            :   If the manifest is not a JSON object.

        Parameters:
        :   * ****directory**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**os.PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****manifest\_filename**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****index\_filename**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****prefault**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

        Return type:
        :   Self

        Notes

        ****User.**** A bundle is loaded from where it is. Nothing in the manifest
        can make this method read a file outside `directory`.

        ****Developer.**** This previously did not load the index at all: the
        `load_index` call was commented out and both `index_filename` and
        `prefault` were marked unused, so the vectors arrived only as a side
        effect of the manifest carrying an absolute path recorded at save time.
        A bundle that had been moved therefore failed, and naming a different
        index file had no effect whatsoever. Members are now resolved relative
        to the bundle, which is what makes it relocatable, and the index is
        loaded here rather than by accident.

        The manifest is read once, as data. Its description of the index
        (dimension, metric, parameters) goes through `from_metadata` with
        `load=False`, so a location recorded by an older writer is never
        opened; such a location is reported at INFO and otherwise ignored.

    classmethod load\_index(**f**, **metric**, **path**, **\***, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/annoy/_mixins/_io.py#L256)[#](#scikitplot.annoy.IndexIOMixin.load_index "Link to this definition")
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
        :   TypeError
            :   If the backend does not provide `load(path, prefault=...)`.

            OSError
            :   If loading fails (backend or filesystem).

        Parameters:
        :   * ****f**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **PathLike****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****prefault**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

        Return type:
        :   Self

    save\_bundle(**directory**, **\***, **manifest\_filename='manifest.json'**, **index\_filename='index.ann'**, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/annoy/_mixins/_io.py#L311)[#](#scikitplot.annoy.IndexIOMixin.save_bundle "Link to this definition")
    :   Publish a **directory bundle** holding the metadata and the index.

        Parameters:
        :   ****directory****str or path-like
            :   Bundle directory. Created if absent, replaced if present.

            ****manifest\_filename, index\_filename****str, optional
            :   Member names **inside** the bundle. They are never resolved against
                the process working directory.

            ****prefault****bool or None, optional
            :   Forwarded to [`save_index`](#scikitplot.annoy.IndexIOMixin.save_index "scikitplot.annoy.IndexIOMixin.save_index").

        Returns:
        :   list of str
            :   Absolute paths of the published members, manifest first.

        Raises:
        :   OSError
            :   If the bundle could not be written. Nothing is published in that
                case: a failed save leaves any previous bundle exactly as it was.

        Parameters:
        :   * ****directory**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****manifest\_filename**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****index\_filename**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****prefault**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

        Notes

        ****User.**** A bundle is self-contained and relocatable: move it, copy it,
        or publish it, and [`load_bundle`](#scikitplot.annoy.IndexIOMixin.load_bundle "scikitplot.annoy.IndexIOMixin.load_bundle") reads it from wherever it is.

        After a successful save this index is backed by the published index
        file (`on_disk_path` names it). After a failed save it holds the
        same vectors and trees as before, in memory.

        ****Developer.**** This previously took two filenames and no directory, so
        the defaults resolved against the process working directory and two
        callers using them overwrote each other. It also wrote the index and
        then the manifest in place, so a failure between the two left an index
        no loader could find. Both are fixed the same way the corpus artifact
        fixes them: build a candidate, then swap, so nothing is destroyed before
        a complete replacement exists.

        The backend’s `save` memory-maps the file it wrote, so once the
        index member exists the index is backed by a file **inside the
        candidate**. POSIX lets a directory be renamed or removed with a mapped
        file in it; Windows does not (`PermissionError: [WinError 5]` on the
        swap, seen in the Windows job of run 37555382019). The order below
        works on both, so there is one code path:

        1. write both members into the candidate;
        2. release the mapping (`unload`), swap the directories, map the
           published index (`load`);
        3. on any failure after step 1, take the index back into memory
           (`serialize`, `unload`, `deserialize`) **before** the candidate
           is removed, so the object keeps its contents and nothing of the
           candidate is in use when it is deleted.

        The manifest records no file-system location and names the index
        member (see `_bundle_manifest`): it describes the bundle, wherever
        the bundle is. Steps and failures are logged on
        `scikitplot.annoy._mixins._io`: DEBUG for each step, WARNING when a
        failed publication is undone.

    save\_index(**path**, **\***, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/annoy/_mixins/_io.py#L217)[#](#scikitplot.annoy.IndexIOMixin.save_index "Link to this definition")
    :   Persist the Annoy index to disk.

        Parameters:
        :   ****path****str or os.PathLike
            :   Destination path for the Annoy index file.

            ****prefault****
            :   Forwarded to the backend. If `None`, the backend default is used.

        Raises:
        :   TypeError
            :   If the backend does not provide `save(path, prefault=...)`.

            OSError
            :   For filesystem-level failures.

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **PathLike****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****prefault**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

        Return type:
        :   Self

    to\_bytes(**format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/annoy/_mixins/_io.py#L571)[#](#scikitplot.annoy.IndexIOMixin.to_bytes "Link to this definition")
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
        :   TypeError
            :   If the backend does not provide `serialize`.

            RuntimeError
            :   If serialization fails.

            TypeError
            :   If the backend returns non-bytes-like data.

        Return type:
        :   [bytes](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")

        Notes

        “Portable” blobs are the native snapshot with additional compatibility guards.
        They are not a cross-architecture wire format.

        “Canonical” blobs trade load time for portability: deserialization rebuilds
        the index with `n_jobs=1` for deterministic reconstruction.