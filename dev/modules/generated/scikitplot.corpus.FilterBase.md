# FilterBase[#](#filterbase "Link to this heading")

class scikitplot.corpus.FilterBase[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_base.py#L276)[#](#scikitplot.corpus.FilterBase "Link to this definition")
:   Abstract base class for corpus document filters.

    A filter receives a fully-constructed `CorpusDocument`
    and returns `True` if it should be included in the output corpus,
    `False` if it should be discarded.

    Filters are applied after chunking and before embedding, so they
    operate on already-segmented text. This is the correct place to
    discard noise tokens, very short fragments, duplicate content, etc.

    > **See also**
    > `scikitplot.corpus._filters.DefaultFilter`
    :   Standard word-count + letter filter.

    `scikitplot.corpus._filters.CompositeFilter`
    :   Chain multiple filters with AND logic.

    `scikitplot.corpus._filters.SectionFilter`
    :   Filter by SectionType membership.

    Notes

    Filters must be ****side-effect free**** — calling `include()` must not
    modify the document or any shared state.

    Examples

    Implementing a length filter:

    ```
    >>> class LengthFilter(FilterBase):
    ...     def __init__(self, min_chars: int = 10):
    ...         self.min_chars = min_chars
    ...
    ...     def include(self, doc):
    ...         return len(doc.text) >= self.min_chars

    ```

    abstractmethod include(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_base.py#L311)[#](#scikitplot.corpus.FilterBase.include "Link to this definition")
    :   Return `True` if `doc` should be included in the corpus.

        Parameters:
        :   ****doc****CorpusDocument
            :   Document to evaluate. Must be a valid, validated instance.

        Returns:
        :   bool
            :   `True` to include; `False` to discard.

        Parameters:
        :   ****doc**** (**CorpusDocument**)

        Return type:
        :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

        Notes

        Must never raise for a valid `CorpusDocument`. Unexpected inputs
        should return `False` defensively rather than raising, unless the
        error indicates a programming error (e.g. `None` passed instead of
        a document).