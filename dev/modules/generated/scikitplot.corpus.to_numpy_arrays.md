# to\_numpy\_arrays[#](#to-numpy-arrays "Link to this heading")

scikitplot.corpus.to\_numpy\_arrays(**documents**, **\***, **include\_text=True**, **include\_raw\_tensor=True**, **include\_embedding=True**, **include\_metadata=True**, **dtype\_map=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d0ea3951/scikitplot/corpus/_adapters.py#L784)[#](#scikitplot.corpus.to_numpy_arrays "Link to this definition")
:   Convert documents to a dict of NumPy arrays suitable for batch ML.

    Parameters:
    :   ****documents****list[CorpusDocument]
        :   Documents to convert.

        ****include\_text****bool, optional
        :   Include `texts` column (list of str, empty str for None).
            Default: `True`.

        ****include\_raw\_tensor****bool, optional
        :   Stack `raw_tensor` fields when all documents share the same
            shape. Skipped when shapes differ. Default: `True`.

        ****include\_embedding****bool, optional
        :   Stack `embedding` fields when all documents have embeddings.
            Default: `True`.

        ****include\_metadata****bool, optional
        :   Include `doc_ids`, `input_paths`, `source_types` columns.
            Default: `True`.

        ****dtype\_map****dict[str, Any] or None, optional
        :   Override dtypes, e.g. `{"raw_tensor": "float32"}`.
            Default: `None`.

    Returns:
    :   dict[str, Any]
        :   Column dict. Keys depend on **include\_** flags:

            * `"texts"` — list[str]
            * `"raw_tensors"` — ndarray shape `(N, H, W, C)` or `(N, S)`
              (only when all shapes match)
            * `"embeddings"` — ndarray shape `(N, D)`
            * `"doc_ids"` — list[str]
            * `"input_paths"` — list[str]
            * `"source_types"` — list[str]
            * `"modalities"` — list[str]
            * `"content_hashes"` — list[str | None]

    Parameters:
    :   * ****documents**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****include\_text**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****include\_raw\_tensor**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****include\_embedding**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****include\_metadata**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****dtype\_map**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    Requires `numpy`. Raises `ImportError` when not installed.

    Examples

    Try it in your browser!
    ```
    >>> arrays = to_numpy_arrays(docs, include_raw_tensor=True)
    >>> arrays["raw_tensors"].shape  # (N, H, W, C) for image batch
    (32, 224, 224, 3)
    >>> arrays["embeddings"].shape  # (N, D)
    (32, 384)

    ```
    Go BackOpen In Tab