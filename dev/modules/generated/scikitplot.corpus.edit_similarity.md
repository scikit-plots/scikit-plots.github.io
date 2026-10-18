# edit\_similarity[#](#edit-similarity "Link to this heading")

scikitplot.corpus.edit\_similarity(**a**, **b**, **\***, **normalize=None**, **backend='auto'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_text.py#L171)[#](#scikitplot.corpus.edit_similarity "Link to this definition")
:   Return `1 - levenshtein(a, b) / max(len(a), len(b))`.

    Parameters:
    :   ****a, b****str
        :   Strings to compare (Unicode code points).

        ****normalize****{None, “basic”, “squad”}, default=None
        :   Normalisation applied to both strings first.

        ****backend****{“auto”, “python”}, default=”auto”
        :   `"auto"` uses [`scikitplot.levenshtein`](../../apis/scikitplot.levenshtein.html#module-scikitplot.levenshtein "scikitplot.levenshtein") when importable;
            `"python"` always uses the exact fallback. Both return the same value.

    Returns:
    :   float
        :   In [0, 1]; 1.0 for two empty strings.

    Raises:
    :   TypeError
        :   If `a` or `b` is not a `str`.

        ValueError
        :   For an unknown `normalize` or `backend`.

    Parameters:
    :   * ****a**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****b**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****normalize**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")

    > **See also**
    > [`make_pairwise_ranker`](scikitplot.corpus.make_pairwise_ranker.html#scikitplot.corpus.make_pairwise_ranker "scikitplot.corpus.make_pairwise_ranker")
    :   Rank corpus documents with this function.

    Examples

    Try it in your browser!
    ```
    >>> edit_similarity("kitten", "sitting")
    0.5714285714285714

    ```
    Go BackOpen In Tab