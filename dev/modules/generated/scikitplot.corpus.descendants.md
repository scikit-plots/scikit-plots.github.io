# descendants[#](#descendants "Link to this heading")

scikitplot.corpus.descendants(**documents**, **doc\_id**, **\***, **max\_depth=64**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_hierarchy.py#L264)[#](#scikitplot.corpus.descendants "Link to this definition")
:   Yield all descendants of `doc_id`, breadth-first.

    Parameters:
    :   ****documents****Iterable[Any]
        :   iterable of CorpusDocument

        ****doc\_id****str
        :   The root’s identifier.

        ****max\_depth****int, optional
        :   Maximum levels to descend.

    Yields:
    :   CorpusDocument

    Parameters:
    :   * ****documents**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****max\_depth**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Return type:
    :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Notes

    ****Developer.**** Visited identifiers are tracked, so a cyclic hierarchy
    terminates instead of looping forever. Traversal must stay safe on data
    that [`validate_hierarchy`](scikitplot.corpus.validate_hierarchy.html#scikitplot.corpus.validate_hierarchy "scikitplot.corpus.validate_hierarchy") would reject – callers do not always
    validate first.