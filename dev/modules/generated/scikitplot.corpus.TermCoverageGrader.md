# TermCoverageGrader[#](#termcoveragegrader "Link to this heading")

class scikitplot.corpus.TermCoverageGrader(**top\_k=3**, **accept=0.8**, **reject=0.3**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_correction.py#L177)[#](#scikitplot.corpus.TermCoverageGrader "Link to this definition")
:   Grade hits by the share of the query’s words their text contains.

    `coverage = |query words found in the top hits| / |query words|`, with
    words `\w+` lower-cased and counted once. Coverage at or above
    `accept` is `correct`; at or below `reject` is `incorrect`;
    between is `ambiguous`. No hits, or a query without a word, is
    `incorrect` with score 0.

    Parameters:
    :   ****top\_k****int, default=3
        :   Hits whose text is read.

        ****accept****float, default=0.8
        :   Coverage from which the evidence is `correct`.

        ****reject****float, default=0.3
        :   Coverage up to which it is `incorrect`; below `accept`.

    Raises:
    :   TypeError, ValueError
        :   If `top_k` is not a positive int or the thresholds are not
            `0 <= reject < accept <= 1`.

    Parameters:
    :   * ****top\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****accept**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****reject**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    Examples

    Try it in your browser!
    ```
    >>> from types import SimpleNamespace as NS
    >>> from scikitplot.corpus import TermCoverageGrader
    >>> hit = NS(doc=NS(text="chunk spans are slices of the source"))
    >>> TermCoverageGrader()("chunk spans", [hit]).grade.value
    'correct'
    >>> TermCoverageGrader()("chunk embeddings cache", [hit]).grade.value
    'ambiguous'

    ```
    Go BackOpen In Tab

    \_\_call\_\_(**query**, **hits**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_correction.py#L236)[#](#scikitplot.corpus.TermCoverageGrader.__call__ "Link to this definition")
    :   Grade `hits` for `query`.

        Parameters:
        :   ****query****str
            :   The query the hits are evidence for.

            ****hits****iterable
            :   Ranked hits; `hit.doc.text` (or `hit.text`) is read, and a hit
                without text contributes no word.

        Returns:
        :   GradeResult

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****hits**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**GradeResult**](scikitplot.corpus.GradeResult.html#scikitplot.corpus.GradeResult "scikitplot.corpus._correction.GradeResult")

    accept: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.8[#](#scikitplot.corpus.TermCoverageGrader.accept "Link to this definition")

    reject: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.3[#](#scikitplot.corpus.TermCoverageGrader.reject "Link to this definition")

    top\_k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 3[#](#scikitplot.corpus.TermCoverageGrader.top_k "Link to this definition")