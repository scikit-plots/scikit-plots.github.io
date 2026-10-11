# validate\_hierarchy[#](#validate-hierarchy "Link to this heading")

scikitplot.corpus.validate\_hierarchy(**documents**, **\***, **max\_depth=64**, **require\_parent\_present=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_hierarchy.py#L121)[#](#scikitplot.corpus.validate_hierarchy "Link to this definition")
:   Check referential integrity, cycles and depth of the hierarchy.

    Parameters:
    :   ****documents****iterable of CorpusDocument
        :   The collection to validate. Treated as a closed world: a
            `parent_doc_id` naming a document outside this collection counts as
            dangling unless `require_parent_present` is `False`.

        ****max\_depth****int, optional
        :   Maximum permitted ancestor chain length.

        ****require\_parent\_present****bool, optional
        :   When `False`, a `parent_doc_id` absent from `documents` is
            tolerated. Use for validating a partial page of a larger corpus, where
            the parent legitimately lives elsewhere.

    Returns:
    :   HierarchyReport
        :   Violations found, as structured records rather than exceptions, so a
            caller can report all of them rather than only the first.

    Parameters:
    :   * ****documents**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****max\_depth**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****require\_parent\_present**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [**HierarchyReport**](scikitplot.corpus.HierarchyReport.html#scikitplot.corpus.HierarchyReport "scikitplot.corpus._hierarchy.HierarchyReport")

    Notes

    Three violation classes are detected, each with its own code:

    `HIERARCHY_DANGLING_PARENT`
    :   `parent_doc_id` names a document not present.

    `HIERARCHY_CYCLE`
    :   Following parents revisits a document.

    `HIERARCHY_TOO_DEEP`
    :   The ancestor chain exceeds `max_depth`.

    `HIERARCHY_SELF_PARENT`
    :   A document is its own parent – reported distinctly from a general
        cycle because it is almost always a copy-paste error rather than a
        structural one.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus import CorpusDocument
    >>> a = CorpusDocument.create(input_path="f.txt", chunk_index=0, text="a")
    >>> validate_hierarchy([a]).ok
    True

    ```
    Go BackOpen In Tab