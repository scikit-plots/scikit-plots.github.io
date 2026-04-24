# to\_torch\_dataloader[#](#to-torch-dataloader "Link to this heading")

scikitplot.corpus.to\_torch\_dataloader(**documents**, **\***, **text\_feature=True**, **raw\_tensor\_feature=False**, **embedding\_feature=False**, **label\_field=None**, **label\_map=None**, **batch\_size=32**, **shuffle=False**, **num\_workers=0**, **dtype\_map=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_adapters.py#L1058)[#](#scikitplot.corpus.to_torch_dataloader "Link to this definition")
:   Convert documents to a `torch.utils.data.DataLoader`.

    Parameters:
    :   ****documents****list[CorpusDocument]
        :   Documents to convert.

        ****text\_feature****bool, optional
        :   Include `"text"` key (list of str per batch). Default: `True`.

        ****raw\_tensor\_feature****bool, optional
        :   Include `"raw_tensor"` key (torch.Tensor, NCHW float32).
            Requires all tensors to have the same shape. Default: `False`.

        ****embedding\_feature****bool, optional
        :   Include `"embedding"` key (torch.Tensor, shape `(N, D)`).
            Default: `False`.

        ****label\_field****str or None, optional
        :   Attribute to use as label. Default: `None`.

        ****label\_map****dict[str, int] or None, optional
        :   Map string labels to class indices. Default: `None`.

        ****batch\_size****int, optional
        :   Batch size. Default: 32.

        ****shuffle****bool, optional
        :   Shuffle data each epoch. Default: `False`.

        ****num\_workers****int, optional
        :   DataLoader worker processes. Default: 0 (main process only).

        ****dtype\_map****dict or None, optional
        :   Cast tensors, e.g. `{"raw_tensor": torch.float32}`.

    Returns:
    :   torch.utils.data.DataLoader
        :   DataLoader over a `CorpusDataset`.

    Raises:
    :   ImportError
        :   If PyTorch is not installed.

    Parameters:
    :   * ****documents**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****text\_feature**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****raw\_tensor\_feature**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****embedding\_feature**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****label\_field**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****label\_map**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
        * ****batch\_size**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****shuffle**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****num\_workers**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****dtype\_map**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    Notes

    ****Fallback:**** When PyTorch is not available, returns a dict of
    NumPy arrays so pipelines can test without GPU hardware.

    ****Channel order:**** Raw tensors from [`ImageReader`](scikitplot.corpus.ImageReader.html#scikitplot.corpus.ImageReader "scikitplot.corpus.ImageReader") are
    `(H, W, C)` uint8 (channels-last). This function converts them to
    `(C, H, W)` float32 in `[0, 1]` (channels-first, PyTorch
    convention) when `dtype_map` is not set.

    Examples

    Try it in your browser!

    Image classification loader:

    ```
    >>> loader = to_torch_dataloader(
    ...     docs,
    ...     raw_tensor_feature=True,
    ...     label_field="source_type",
    ...     label_map={"image": 0, "research": 1},
    ...     batch_size=16,
    ... )
    >>> for batch in loader:
    ...     imgs = batch["raw_tensor"]  # (16, C, H, W) float32
    ...     labels = batch["label"]  # (16,) int64

    ```
    Go BackOpen In Tab