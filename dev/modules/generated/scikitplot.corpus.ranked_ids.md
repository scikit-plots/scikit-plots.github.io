# ranked\_ids[#](#ranked-ids "Link to this heading")

scikitplot.corpus.ranked\_ids(**results**, **\***, **id\_getter=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_inputs.py#L630)[#](#scikitplot.corpus.ranked_ids "Link to this definition")
:   Return the identifiers of retrieval results, in rank order.

    Parameters:
    :   ****results****iterable
        :   A [`RetrievalResponse`](scikitplot.corpus.RetrievalResponse.html#scikitplot.corpus.RetrievalResponse "scikitplot.corpus.RetrievalResponse"), or any iterable of
            results, best first.

        ****id\_getter****callable or None, default=None
        :   `id_getter(result) -> str or int`. When `None`, each result gives
            its identifier by this fixed rule, first match wins:

            1. a `str` or `int` is the identifier;
            2. a 2-tuple `(identifier, score)` gives its first item (the shape of
               `RetrievalIndex.query`);
            3. an object with `.doc` gives `.doc.doc_id`
               ([`RetrievalHit`](scikitplot.corpus.RetrievalHit.html#scikitplot.corpus.RetrievalHit "scikitplot.corpus.RetrievalHit"));
            4. an object with `.doc_id` gives it (a document).

    Returns:
    :   list
        :   Identifiers (`str` or `int`), possibly repeated (several chunks of
            one document); the metrics decide what a repeat means.

    Raises:
    :   TypeError
        :   If `results` is a `str`, `bytes` or mapping, or a result yields no
            `str`/`int` identifier.

    Parameters:
    :   * ****results**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****id\_getter**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> ranked_ids([("d2", 0.9), ("d1", 0.4)])
    ['d2', 'd1']
    >>> ranked_ids([{"id": 7}], id_getter=lambda r: r["id"])
    [7]

    ```
    Go BackOpen In Tab