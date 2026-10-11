# ChunkedTextList[#](#chunkedtextlist "Link to this heading")

class scikitplot.corpus.ChunkedTextList(**pairs**, **chunk\_metadata\_list**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_chunkers/_chunker_bridge.py#L62)[#](#scikitplot.corpus.ChunkedTextList "Link to this definition")
:   A `list` subclass that carries per-chunk metadata alongside `(int, str)` pairs.

    Returned by every [`ChunkerBridge`](scikitplot.corpus.ChunkerBridge.html#scikitplot.corpus.ChunkerBridge "scikitplot.corpus.ChunkerBridge") subclass in place of a plain
    `list`. Behaves identically to `list` for all existing callers
    that unpack `(char_start, chunk_text)` pairs.

    The extra `chunk_metadata_list` attribute lets `_base.DocumentReader.
    get_documents` read multilang metadata and populate `
    CorpusDocument` fields without breaking the existing `(int, str)`
    contract.

    Parameters:
    :   ****pairs****list[tuple[int, str]]
        :   The `(char_start, chunk_text)` tuples (standard contract).

        ****chunk\_metadata\_list****list[dict]
        :   One metadata dict per pair. Must have the same length as **pairs**.
            Each dict is `chunk.metadata` from the inner [`Chunk`](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk").

    Parameters:
    :   * ****pairs**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****]**)
        * ****chunk\_metadata\_list**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]****]**)

    Notes

    ****Developer note:**** Callers that only do `for start, text in sub_chunks`
    are unaffected — they never see `chunk_metadata_list`. Only
    `_base.DocumentReader.get_documents` inspects this attribute.

    Idempotency: `ChunkedTextList` is constructed once per `chunk()`
    call and never mutated after construction.

    Examples

    Try it in your browser!
    ```
    >>> cl = ChunkedTextList([(0, "Hello")], [{"multilang": {"script": "latin"}}])
    >>> for start, text in cl:
    ...     print(start, text)
    0 Hello
    >>> cl.chunk_metadata_list[0]["multilang"]["script"]
    'latin'

    ```
    Go BackOpen In Tab

    append(**object**, **/**)[#](#scikitplot.corpus.ChunkedTextList.append "Link to this definition")
    :   Append object to the end of the list.

    clear(**/**)[#](#scikitplot.corpus.ChunkedTextList.clear "Link to this definition")
    :   Remove all items from list.

    copy(**/**)[#](#scikitplot.corpus.ChunkedTextList.copy "Link to this definition")
    :   Return a shallow copy of the list.

    count(**value**, **/**)[#](#scikitplot.corpus.ChunkedTextList.count "Link to this definition")
    :   Return number of occurrences of value.

    extend(**iterable**, **/**)[#](#scikitplot.corpus.ChunkedTextList.extend "Link to this definition")
    :   Extend list by appending elements from the iterable.

    index(**value**, **start=0**, **stop=sys.maxsize**, **/**)[#](#scikitplot.corpus.ChunkedTextList.index "Link to this definition")
    :   Return first index of value.

        Raises ValueError if the value is not present.

    insert(**index**, **object**, **/**)[#](#scikitplot.corpus.ChunkedTextList.insert "Link to this definition")
    :   Insert object before index.

    pop(**index=-1**, **/**)[#](#scikitplot.corpus.ChunkedTextList.pop "Link to this definition")
    :   Remove and return item at index (default last).

        Raises IndexError if list is empty or index is out of range.

    remove(**value**, **/**)[#](#scikitplot.corpus.ChunkedTextList.remove "Link to this definition")
    :   Remove first occurrence of value.

        Raises ValueError if the value is not present.

    reverse(**/**)[#](#scikitplot.corpus.ChunkedTextList.reverse "Link to this definition")
    :   Reverse **IN PLACE**.

    sort(**\***, **key=None**, **reverse=False**)[#](#scikitplot.corpus.ChunkedTextList.sort "Link to this definition")
    :   Sort the list in ascending order and return None.

        The sort is in-place (i.e. the list itself is modified) and stable (i.e. the
        order of two equal elements is maintained).

        If a key function is given, apply it once to each list item and sort them,
        ascending or descending, according to their function values.

        The reverse flag can be set to sort in descending order.