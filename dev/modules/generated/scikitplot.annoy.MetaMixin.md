# MetaMixin[#](#metamixin "Link to this heading")

class scikitplot.annoy.MetaMixin[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/annoy/_mixins/_meta.py#L123)[#](#scikitplot.annoy.MetaMixin "Link to this definition")
:   Mixin that exports and restores index metadata.

    The concrete class (or its backend) must implement:

    * `get_params(deep: bool = ...) -> Mapping[str, Any]`
    * `set_params(**params) -> Self`

    Optional backend methods:

    * `info() -> Mapping[str, Any] | None`

    The concrete class must define:

    * `_META_SCHEMA_VERSION` (int)

    Notes

    `from_metadata(..., load=True)` optionally `load`s the on-disk index when
    the `params` mapping contains `on_disk_path`. This is a deterministic
    behavior controlled only by explicit fields.

    classmethod from\_json(**path**, **\***, **load=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/annoy/_mixins/_meta.py#L421)[#](#scikitplot.annoy.MetaMixin.from_json "Link to this definition")
    :   Load metadata from JSON and construct an index.

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****load**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.14)")

    classmethod from\_metadata(**metadata**, **\***, **load=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/annoy/_mixins/_meta.py#L252)[#](#scikitplot.annoy.MetaMixin.from_metadata "Link to this definition")
    :   Construct an index from a metadata payload.

        Parameters:
        :   ****metadata****Mapping[str, Any]
            :   Payload as produced by [`to_metadata`](#scikitplot.annoy.MetaMixin.to_metadata "scikitplot.annoy.MetaMixin.to_metadata").

            ****load****bool, default=True
            :   If True and `params['on_disk_path']` is present, attempt to load the
                index into the returned object via backend `load`.

        Returns:
        :   ****index****Self
            :   Newly constructed index.

        Raises:
        :   TypeError
            :   If input types are invalid.

            ValueError
            :   If required fields are missing or invalid.

            RuntimeError
            :   If schema version is missing on the class.

            AttributeError
            :   If backend `set_params`/`load` are missing when required.

        Parameters:
        :   * ****metadata**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
            * ****load**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.14)")

        > **See also**
        > [`to_metadata`](#scikitplot.annoy.MetaMixin.to_metadata "scikitplot.annoy.MetaMixin.to_metadata")


        [`from_json`](#scikitplot.annoy.MetaMixin.from_json "scikitplot.annoy.MetaMixin.from_json")


        [`from_yaml`](#scikitplot.annoy.MetaMixin.from_yaml "scikitplot.annoy.MetaMixin.from_yaml")

    classmethod from\_yaml(**path**, **\***, **load=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/annoy/_mixins/_meta.py#L455)[#](#scikitplot.annoy.MetaMixin.from_yaml "Link to this definition")
    :   Load metadata from YAML and construct an index (requires PyYAML).

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****load**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.14)")

    to\_json(**path=None**, **\***, **indent=2**, **sort\_keys=True**, **ensure\_ascii=False**, **include\_info=True**, **strict=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/annoy/_mixins/_meta.py#L372)[#](#scikitplot.annoy.MetaMixin.to_json "Link to this definition")
    :   Serialize [`to_metadata`](#scikitplot.annoy.MetaMixin.to_metadata "scikitplot.annoy.MetaMixin.to_metadata") to JSON.

        Parameters:
        :   ****path****
            :   If provided, write the JSON to this path atomically.

            ****indent****
            :   Indentation level passed to [`json.dumps`](https://docs.python.org/3/library/json.html#json.dumps "(in Python v3.14)").

            ****sort\_keys****
            :   If True, sort keys for stable output.

            ****ensure\_ascii****
            :   If True, escape non-ASCII characters.

            ****include\_info, strict****
            :   Forwarded to [`to_metadata`](#scikitplot.annoy.MetaMixin.to_metadata "scikitplot.annoy.MetaMixin.to_metadata").

        Returns:
        :   json\_str
            :   JSON representation of the metadata.

        Raises:
        :   TypeError
            :   If the exported metadata contains non-JSON-serializable values.

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****indent**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****sort\_keys**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****ensure\_ascii**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****include\_info**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

        > **See also**
        > [`from_json`](#scikitplot.annoy.MetaMixin.from_json "scikitplot.annoy.MetaMixin.from_json")


        [`to_metadata`](#scikitplot.annoy.MetaMixin.to_metadata "scikitplot.annoy.MetaMixin.to_metadata")

    to\_metadata(**\***, **include\_info=True**, **strict=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/annoy/_mixins/_meta.py#L149)[#](#scikitplot.annoy.MetaMixin.to_metadata "Link to this definition")
    :   Export a serializable metadata payload.

        Parameters:
        :   ****include\_info****
            :   If True, include an `info()` mapping when available.

            ****strict****
            :   If True, failures in optional `info()` propagation raise.

        Returns:
        :   metadata
            :   A JSON/YAML-serializable mapping containing configuration parameters
                and optional info.

        Raises:
        :   RuntimeError
            :   If `_META_SCHEMA_VERSION` is missing on the concrete class.

            TypeError
            :   If `get_params` does not return a mapping.

            AttributeError
            :   If neither the instance nor the backend implements `get_params`.

            TypeError
            :   If a persistence knob (e.g., `pickle_mode`) is not JSON/YAML-serializable.

        Parameters:
        :   * ****include\_info**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   **IndexMetadata**

        > **See also**
        > [`to_json`](#scikitplot.annoy.MetaMixin.to_json "scikitplot.annoy.MetaMixin.to_json")


        [`to_yaml`](#scikitplot.annoy.MetaMixin.to_yaml "scikitplot.annoy.MetaMixin.to_yaml")

    to\_yaml(**path=None**, **\***, **include\_info=True**, **strict=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/annoy/_mixins/_meta.py#L434)[#](#scikitplot.annoy.MetaMixin.to_yaml "Link to this definition")
    :   Serialize [`to_metadata`](#scikitplot.annoy.MetaMixin.to_metadata "scikitplot.annoy.MetaMixin.to_metadata") to YAML (requires PyYAML).

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****include\_info**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")