# edit\_similarity\_score[#](#edit-similarity-score "Link to this heading")

scikitplot.corpus.edit\_similarity\_score(**y\_true**, **y\_pred**, **\***, **normalize=None**, **backend='auto'**, **sample\_weight=None**, **average='mean'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_text.py#L408)[#](#scikitplot.corpus.edit_similarity_score "Link to this definition")
:   Mean normalised edit similarity between predictions and references.

    Parameters:
    :   ****y\_true****sequence or mapping
        :   Reference answers per item: a `str` or a sequence of `str`.

        ****y\_pred****sequence or mapping
        :   Predicted answer per item (`str`), aligned with `y_true`.

        ****normalize****{None, “basic”, “squad”}, default=None
        :   Normalisation of both sides.

        ****backend****{“auto”, “python”}, default=”auto”
        :   Edit-distance implementation (both exact).

        ****sample\_weight****array-like of shape (n\_items,), default=None
        :   Per-item weights of the mean.

        ****average****{“mean”, None}, default=”mean”
        :   `None` returns per-item values.

    Returns:
    :   float or numpy.ndarray

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_pred**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****normalize**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****sample\_weight**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****average**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    > **See also**
    > [`edit_similarity`](scikitplot.corpus.edit_similarity.html#scikitplot.corpus.edit_similarity "scikitplot.corpus.edit_similarity"), [`anls_score`](scikitplot.corpus.anls_score.html#scikitplot.corpus.anls_score "scikitplot.corpus.anls_score")

    Examples

    Try it in your browser!
    ```
    >>> edit_similarity_score(["kitten"], ["sitting"])
    0.5714285714285714

    ```
    Go BackOpen In Tab