# filterable\_fields[#](#filterable-fields "Link to this heading")

scikitplot.corpus.filterable\_fields()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_filters.py#L517)[#](#scikitplot.corpus.filterable_fields "Link to this definition")
:   Return the document fields a filter may name.

    Returns:
    :   frozenset of str
        :   The fields of [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") except
            `embedding`, `raw_tensor`, `raw_bytes` and `metadata`; one
            metadata key is addressed as `"metadata.<key>"`.

    Return type:
    :   [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]