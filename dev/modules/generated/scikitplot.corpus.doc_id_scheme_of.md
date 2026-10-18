# doc\_id\_scheme\_of[#](#doc-id-scheme-of "Link to this heading")

scikitplot.corpus.doc\_id\_scheme\_of(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_identity.py#L442)[#](#scikitplot.corpus.doc_id_scheme_of "Link to this definition")
:   Return the scheme that produced `doc_id`, judged by its exact form.

    Parameters:
    :   ****doc\_id****object
        :   A document identifier.

    Returns:
    :   DocIdScheme or None
        :   [`DocIdScheme.SHA256`](scikitplot.corpus.DocIdScheme.html#scikitplot.corpus.DocIdScheme.SHA256 "scikitplot.corpus.DocIdScheme.SHA256") for exactly 64 lowercase hex characters,
            [`DocIdScheme.UUID7`](scikitplot.corpus.DocIdScheme.html#scikitplot.corpus.DocIdScheme.UUID7 "scikitplot.corpus.DocIdScheme.UUID7") for the 36-character lowercase canonical form
            of a version-7 RFC 9562 UUID, `None` for anything else: a caller’s
            own id, or a 16-hex id from a build before identities were widened.

    Parameters:
    :   ****doc\_id**** ([**object**](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)"))

    Return type:
    :   [**DocIdScheme**](scikitplot.corpus.DocIdScheme.html#scikitplot.corpus.DocIdScheme "scikitplot.corpus._identity.DocIdScheme") | None

    Notes

    The two forms cannot be confused: one has 64 characters and no hyphen, the
    other 36 with four. The test is purely syntactic; it cannot tell whether a
    64-hex string was produced by [`CorpusDocument.make_doc_id`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument.make_doc_id "scikitplot.corpus.CorpusDocument.make_doc_id").

    Examples

    Try it in your browser!
    ```
    >>> doc_id_scheme_of("0" * 16) is None  # pre-widening width
    True

    ```
    Go BackOpen In Tab