# ancestors[#](#ancestors "Link to this heading")

scikitplot.corpus.ancestors(**documents**, **doc\_id**, **\***, **max\_depth=64**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_hierarchy.py#L309)[#](#scikitplot.corpus.ancestors "Link to this definition")
:   Return the chain from `doc_id`’s parent up to the root.

    Parameters:
    :   ****documents****Iterable[Any]
        :   iterable of CorpusDocument

        ****doc\_id****str
        :   The root’s identifier.

        ****max\_depth****int, optional
        :   Maximum levels to descend.

    Returns:
    :   list
        :   Nearest ancestor first. Stops safely on a cycle or a dangling parent.

    Parameters:
    :   * ****documents**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****max\_depth**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]