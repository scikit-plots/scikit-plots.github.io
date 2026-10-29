# cohen\_kappa[#](#cohen-kappa "Link to this heading")

scikitplot.corpus.cohen\_kappa(**rater\_a**, **rater\_b**, **\***, **labels=None**, **weights=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_agreement.py#L139)[#](#scikitplot.corpus.cohen_kappa "Link to this definition")
:   Cohen’s kappa between two raters of the same items.

    Parameters:
    :   ****rater\_a, rater\_b****sequence
        :   One label per item, in the same item order; no missing values.

        ****labels****sequence or None, default=None
        :   Label order (it matters for weights); `None` sorts the labels seen.

        ****weights****{None, “linear”, “quadratic”}, default=None
        :   Disagreement weights: none (each disagreement counts 1), `|i - j|`
            or `(i - j) ** 2` over label positions.

    Returns:
    :   float
        :   `NaN` (with a warning) when chance agreement is already perfect.

    Raises:
    :   ValueError
        :   For different lengths, no items, missing values or an unknown weight.

    Parameters:
    :   * ****rater\_a**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****rater\_b**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****labels**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****weights**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> round(cohen_kappa(["a", "b", "a"], ["a", "b", "b"]), 4)
    0.4

    ```
    Go BackOpen In Tab