# CodeAwareFilter[#](#codeawarefilter "Link to this heading")

class scikitplot.corpus.CodeAwareFilter(**prose=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L748)[#](#scikitplot.corpus.CodeAwareFilter "Link to this definition")
:   Keep code that is not blank; filter everything else as prose.

    The default filter of every reader. A document whose `section_type`
    is [`SectionType.CODE`](scikitplot.corpus.SectionType.html#scikitplot.corpus.SectionType.CODE "scikitplot.corpus.SectionType.CODE") (a block of source code, a notebook code
    cell or its output) is kept when it holds a non-whitespace character:
    in code a short block is content. Any other document is judged by
    **prose**. The rule follows the document, not the reader, so code read
    from inside an archive is treated as code.

    Parameters:
    :   ****prose****FilterBase or None, optional
        :   The filter for documents that are not code. `None` (default):
            [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter") with its defaults.

    Parameters:
    :   ****prose**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase"))

    Examples

    Try it in your browser!
    ```
    >>> f = CodeAwareFilter()
    >>> f.include(CorpusDocument.create("f.py", 0, "}", section_type=SectionType.CODE))
    True
    >>> f.include(CorpusDocument.create("f.txt", 0, "}"))
    False

    ```
    Go BackOpen In Tab

    include(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L782)[#](#scikitplot.corpus.CodeAwareFilter.include "Link to this definition")
    :   Return `True` when **doc** is non-blank code, or prose **prose** keeps.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    prose: [FilterBase](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase")[#](#scikitplot.corpus.CodeAwareFilter.prose "Link to this definition")