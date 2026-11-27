# NonBlankFilter[#](#nonblankfilter "Link to this heading")

class scikitplot.corpus.NonBlankFilter[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L721)[#](#scikitplot.corpus.NonBlankFilter "Link to this definition")
:   Keep every document whose text holds a non-whitespace character.

    For documents whose every line is content: a short block of code
    (`y = 2`, a closing `}`, `end Foo`) is not noise, and
    [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter"), built for prose, would drop it.
    [`CodeAwareFilter`](scikitplot.corpus.CodeAwareFilter.html#scikitplot.corpus.CodeAwareFilter "scikitplot.corpus.CodeAwareFilter") applies this rule to code and
    [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter") to the rest.

    Examples

    Try it in your browser!
    ```
    >>> f = NonBlankFilter()
    >>> f.include(CorpusDocument.create("f.py", 0, "}"))
    True
    >>> f.include(CorpusDocument.create("f.py", 1, "42"))
    True

    ```
    Go BackOpen In Tab

    include(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L740)[#](#scikitplot.corpus.NonBlankFilter.include "Link to this definition")
    :   Return `True` when **doc**’s text is not blank.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")