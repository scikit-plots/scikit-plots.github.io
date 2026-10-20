# fleiss\_kappa[#](#fleiss-kappa "Link to this heading")

scikitplot.corpus.fleiss\_kappa(**ratings**, **\***, **labels=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_agreement.py#L204)[#](#scikitplot.corpus.fleiss_kappa "Link to this definition")
:   Fleiss’ kappa for any number of raters with nominal labels.

    Parameters:
    :   ****ratings****array-like of shape (n\_items, n\_raters)
        :   One label per rater per item; every item has the same number of
            ratings (at least two) and none is missing.

        ****labels****sequence or None, default=None
        :   The label set; `None` uses the labels seen.

    Returns:
    :   float
        :   `NaN` (with a warning) when every rating is the same label.

    Raises:
    :   ValueError
        :   For fewer than two raters, a missing value or an unknown label.

    Parameters:
    :   * ****ratings**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****labels**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> round(fleiss_kappa([[1, 1, 2], [2, 2, 2], [1, 2, 3], [3, 3, 3]]), 4)
    0.3617

    ```
    Go BackOpen In Tab