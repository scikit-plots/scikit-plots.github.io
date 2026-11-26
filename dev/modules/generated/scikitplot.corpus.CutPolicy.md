# CutPolicy[#](#cutpolicy "Link to this heading")

class scikitplot.corpus.CutPolicy(**mode**, **threshold=None**, **min\_k=1**, **max\_k=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_cut.py#L79)[#](#scikitplot.corpus.CutPolicy "Link to this definition")
:   A rule for how many ranked hits to keep.

    Parameters:
    :   ****mode****{“fixed”, “threshold”, “max\_gap”}


        ****threshold****float or None, default=None
        :   Required for `"threshold"`, in `[0, 1]`; refused otherwise.

        ****min\_k****int, default=1
        :   Fewest hits kept (when there are that many).

        ****max\_k****int or None, default=None
        :   Most hits kept; required for `"fixed"`.

    Raises:
    :   ValueError
        :   For an unknown mode, a missing or out-of-range threshold, a threshold
            given to another mode, `min_k < 0`, `max_k < min_k`, or
            `"fixed"` without `max_k`.

    Parameters:
    :   * ****mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****threshold**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****min\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> CutPolicy("max_gap").cut([0.9, 0.85, 0.8, 0.3, 0.25]).k
    3
    >>> CutPolicy("threshold", threshold=0.5).cut([0.9, 0.6, 0.4]).k
    2

    ```
    Go BackOpen In Tab

    apply(**hits**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_cut.py#L184)[#](#scikitplot.corpus.CutPolicy.apply "Link to this definition")
    :   Keep the hits this policy keeps, scored by their `score` attribute.

        Parameters:
        :   ****hits****sequence
            :   Ranked hits with a `score` attribute (`RetrievalHit`).

        Returns:
        :   list
            :   The first [`CutResult.k`](scikitplot.corpus.CutResult.html#scikitplot.corpus.CutResult.k "scikitplot.corpus.CutResult.k") hits.

        Parameters:
        :   ****hits**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    cut(**scores**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_cut.py#L139)[#](#scikitplot.corpus.CutPolicy.cut "Link to this definition")
    :   Decide how many of `scores` (best first) to keep.

        Parameters:
        :   ****scores****sequence of float
            :   Ranked scores, non-increasing and finite.

        Returns:
        :   CutResult

        Raises:
        :   ValueError
            :   If the scores increase anywhere, are not finite, or – for
                `"threshold"` – lie outside `[0, 1]`.

        Parameters:
        :   ****scores**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)

        Return type:
        :   [**CutResult**](scikitplot.corpus.CutResult.html#scikitplot.corpus.CutResult "scikitplot.corpus._cut.CutResult")

    max\_k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CutPolicy.max_k "Link to this definition")

    min\_k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1[#](#scikitplot.corpus.CutPolicy.min_k "Link to this definition")

    mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_cut.py#L79)[#](#scikitplot.corpus.CutPolicy.mode "Link to this definition")

    threshold: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CutPolicy.threshold "Link to this definition")