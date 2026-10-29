# children[#](#children "Link to this heading")

scikitplot.corpus.children(**documents**, **doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_hierarchy.py#L242)[#](#scikitplot.corpus.children "Link to this definition")
:   Return the direct children of `doc_id`.

    Parameters:
    :   ****documents****Iterable[Any]
        :   iterable of CorpusDocument

        ****doc\_id****str
        :   The parent’s identifier.

    Returns:
    :   list
        :   Direct children, ordered by `chunk_index` where available.

    Parameters:
    :   * ****documents**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]