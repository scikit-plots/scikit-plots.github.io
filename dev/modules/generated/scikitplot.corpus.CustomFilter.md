# CustomFilter[#](#customfilter "Link to this heading")

class scikitplot.corpus.CustomFilter(**fn**, **\***, **name=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/corpus/_custom_hooks.py#L282)[#](#scikitplot.corpus.CustomFilter "Link to this definition")
:   Wrap any callable as a [`FilterBase`](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase").

    Parameters:
    :   ****fn****callable
        :   Filter callable. Signature:

            ```
            def fn(doc: CorpusDocument) -> bool: ...

            ```

            Return `True` to include the document, `False` to discard it.

        ****name****str, optional
        :   Human-readable label used in `__repr__`.

    Raises:
    :   TypeError
        :   If `fn` is not callable.

    Parameters:
    :   * ****fn**** (**Callable****[****[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument")**]****,** [**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")**]**)
        * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    > **See also**
    > [`scikitplot.corpus._base.DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus._base.DefaultFilter")
    :   Built-in noise filter.

    [`scikitplot.corpus._base.FilterBase`](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase")
    :   Abstract base class.

    Notes

    ****User note:**** Use to apply domain-specific inclusion criteria —
    language detection, source type gates, keyword presence checks, etc.

    Examples

    Try it in your browser!

    Keep only English documents that contain the word “treatment”:

    ```
    def medical_filter(doc):
        return (
            doc.language is None or doc.language == "en"
        ) and "treatment" in doc.text.lower()

    reader = DocumentReader.create(
        Path("research.pdf"),
        filter_=CustomFilter(medical_filter),
    )

    ```
    Go BackOpen In Tab

    include(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/corpus/_custom_hooks.py#L356)[#](#scikitplot.corpus.CustomFilter.include "Link to this definition")
    :   Return the result of the user-supplied filter callable.

        Parameters:
        :   ****doc****CorpusDocument
            :   Document to evaluate.

        Returns:
        :   bool
            :   `True` to include; `False` to discard.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")