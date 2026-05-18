# to\_tensorflow\_dataset[#](#to-tensorflow-dataset "Link to this heading")

scikitplot.corpus.to\_tensorflow\_dataset(**documents**, **\***, **text\_feature=True**, **raw\_tensor\_feature=False**, **embedding\_feature=False**, **label\_field=None**, **label\_map=None**, **batch\_size=32**, **shuffle=False**, **shuffle\_seed=None**, **dtype\_map=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_adapters.py#L893)[#](#scikitplot.corpus.to_tensorflow_dataset "Link to this definition")
:   Convert documents to a `tf.data.Dataset`.

    Parameters:
    :   ****documents****list[CorpusDocument]
        :   Documents to convert.

        ****text\_feature****bool, optional
        :   Include `"text"` feature (tf.string). Default: `True`.

        ****raw\_tensor\_feature****bool, optional
        :   Include `"raw_tensor"` feature (tf.uint8) when documents carry
            pixel arrays. Requires all tensors to share the same shape.
            Default: `False`.

        ****embedding\_feature****bool, optional
        :   Include `"embedding"` feature (tf.float32). Default: `False`.

        ****label\_field****str or None, optional
        :   `CorpusDocument` attribute to use as label (e.g.
            `"source_type"`). Default: `None` (no label).

        ****label\_map****dict[str, int] or None, optional
        :   Map string label values to integer class ids. Required when
            **label\_field** is set and the field contains strings.
            Default: `None`.

        ****batch\_size****int, optional
        :   Batch size. `None` disables batching. Default: 32.

        ****shuffle****bool, optional
        :   Shuffle the dataset before batching. Default: `False`.

        ****shuffle\_seed****int or None, optional
        :   Seed for deterministic shuffling. Default: `None`.

        ****dtype\_map****dict or None, optional
        :   Cast feature dtypes, e.g. `{"raw_tensor": tf.float32}`.

    Returns:
    :   tf.data.Dataset
        :   Batched dataset of feature dicts (and optionally labels).

    Raises:
    :   ImportError
        :   If TensorFlow is not installed.

        ValueError
        :   If **raw\_tensor\_feature** is True but raw tensors have different
            shapes across documents.

    Parameters:
    :   * ****documents**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****text\_feature**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****raw\_tensor\_feature**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****embedding\_feature**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****label\_field**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****label\_map**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
        * ****batch\_size**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****shuffle**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****shuffle\_seed**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****dtype\_map**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    Notes

    ****Fallback:**** When TensorFlow is not available, returns a dict of
    NumPy arrays (via [`to_numpy_arrays`](scikitplot.corpus.to_numpy_arrays.html#scikitplot.corpus.to_numpy_arrays "scikitplot.corpus.to_numpy_arrays")) so pipelines can test
    the shape of the output without requiring a GPU environment.

    Examples

    Try it in your browser!

    Text-only dataset for a Keras text classifier:

    ```
    >>> ds = to_tensorflow_dataset(docs, text_feature=True, batch_size=16)
    >>> for batch in ds.take(1):
    ...     print(batch["text"].shape)  # (16,)

    ```

    Image dataset for a CNN:

    ```
    >>> ds = to_tensorflow_dataset(
    ...     docs,
    ...     text_feature=False,
    ...     raw_tensor_feature=True,
    ...     label_field="source_type",
    ...     label_map={"image": 0, "research": 1},
    ... )

    ```
    Go BackOpen In Tab