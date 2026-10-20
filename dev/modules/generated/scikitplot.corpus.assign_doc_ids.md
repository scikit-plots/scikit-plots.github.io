# assign\_doc\_ids[#](#assign-doc-ids "Link to this heading")

scikitplot.corpus.assign\_doc\_ids(**documents**, **scheme=DocIdScheme.SHA256**, **\***, **generator=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_identity.py#L479)[#](#scikitplot.corpus.assign_doc_ids "Link to this definition")
:   Return `documents` named by `scheme`, with parent links kept intact.

    Parameters:
    :   ****documents****iterable of CorpusDocument
        :   Documents in reading order. Each needs `doc_id`, `parent_doc_id`
            and `replace(**changes)`.

        ****scheme****DocIdScheme or str, optional
        :   `"sha256"` (default) keeps the content-addressed ids the producers
            derived. `"uuid7"` mints one identifier per document, in order, so
            `doc_id` order is the order of `documents`.

        ****generator****callable, optional
        :   Returns a [`uuid.UUID`](https://docs.python.org/3/library/uuid.html#uuid.UUID "(in Python v3.15)"); defaults to [`uuid7`](scikitplot.corpus.uuid7.html#scikitplot.corpus.uuid7 "scikitplot.corpus.uuid7"). For a caller
            that keeps its own [`UUID7Generator`](scikitplot.corpus.UUID7Generator.html#scikitplot.corpus.UUID7Generator "scikitplot.corpus.UUID7Generator").

    Returns:
    :   list of CorpusDocument
        :   New documents for `"uuid7"`; the same objects for `"sha256"`.

    Raises:
    :   ValueError
        :   For an unknown `scheme`. For `"uuid7"`: if a `parent_doc_id`
            names an id that two documents of the batch share, so its new id would
            be ambiguous; if `generator` returns something other than a version-7
            UUID, or an identifier not greater than the one before (a repeat or a
            step back would break uniqueness and order).

    Parameters:
    :   * ****documents**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****scheme**** ([**DocIdScheme**](scikitplot.corpus.DocIdScheme.html#scikitplot.corpus.DocIdScheme "scikitplot.corpus._identity.DocIdScheme") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****generator**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****]****,** [**UUID**](https://docs.python.org/3/library/uuid.html#uuid.UUID "(in Python v3.15)")**]** **|** **None**)

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Notes

    ****User.**** The builder and the pipeline call this once per source, right
    after it is read and before normalisation, enrichment and embedding, so no
    stage sees two names for one document.

    ****Developer.**** A parent link to a document of the batch follows it to its
    new id. A link to a document outside the batch is kept verbatim: it names
    a document stored elsewhere (a previous build, another source), which this
    call cannot rename, and `scikitplot.corpus._hierarchy` already treats
    such a parent as external. Nothing is minted until the whole batch has been
    read, so an iterable that fails part-way consumes no identifiers.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus import CorpusDocument
    >>> parent = CorpusDocument.create("a.txt", 0, "Part one.")
    >>> child = CorpusDocument.create("a.txt", 1, "Part one, section one.")
    >>> child = child.replace(parent_doc_id=parent.doc_id)
    >>> p, c = assign_doc_ids([parent, child], "uuid7")
    >>> (c.parent_doc_id == p.doc_id, p.doc_id < c.doc_id)
    (True, True)

    ```
    Go BackOpen In Tab