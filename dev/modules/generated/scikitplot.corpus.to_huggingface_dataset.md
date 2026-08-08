# to\_huggingface\_dataset[#](#to-huggingface-dataset "Link to this heading")

scikitplot.corpus.to\_huggingface\_dataset(**documents**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/corpus/_adapters.py#L385)[#](#scikitplot.corpus.to_huggingface_dataset "Link to this definition")
:   Convert documents to a HuggingFace `Dataset`.

    Parameters:
    :   ****documents****Sequence[CorpusDocument]
        :   Source documents.

    Returns:
    :   datasets.Dataset or dict[str, list]
        :   HuggingFace Dataset. Falls back to a column-dict if
            `datasets` is not installed.

    Parameters:
    :   ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    Notes

    ****User note:**** Directly usable for fine-tuning or upload:

    ```
    ds = to_huggingface_dataset(docs)
    ds.push_to_hub("my-org/my-corpus")

    ```