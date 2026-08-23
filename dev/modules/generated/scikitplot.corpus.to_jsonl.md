# to\_jsonl[#](#to-jsonl "Link to this heading")

scikitplot.corpus.to\_jsonl(**documents**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_adapters.py#L482)[#](#scikitplot.corpus.to_jsonl "Link to this definition")
:   Yield documents as newline-delimited JSON strings.

    Parameters:
    :   ****documents****Sequence[CorpusDocument]
        :   Source documents.

    Yields:
    :   str
        :   One JSON object per line (no trailing newline).

    Parameters:
    :   ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

    Return type:
    :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    Notes

    ****User note:**** Write to a file for streaming ingestion:

    ```
    with open("corpus.jsonl", "w") as f:
        for line in to_jsonl(docs):
            f.write(line + "\\n")

    ```

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[Build a Multi-Source WHO Corpus](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

Build a Multi-Source WHO Corpus