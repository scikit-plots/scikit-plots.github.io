# krippendorff\_alpha[#](#krippendorff-alpha "Link to this heading")

scikitplot.corpus.krippendorff\_alpha(**ratings**, **\***, **level='nominal'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_agreement.py#L279)[#](#scikitplot.corpus.krippendorff_alpha "Link to this definition")
:   Krippendorff’s alpha for any number of raters, with missing ratings.

    Parameters:
    :   ****ratings****array-like of shape (n\_raters, n\_units)
        :   One row per rater, one column per unit (the `krippendorff`
            package’s `reliability_data` layout). `None` or `NaN` marks a
            missing rating. Units with fewer than two ratings are ignored.

        ****level****{“nominal”, “ordinal”, “interval”, “ratio”}, default=”nominal”
        :   Measurement level. Every level but nominal needs real numbers; ratio
            also needs non-negative values.

    Returns:
    :   float
        :   `NaN` (with a warning) when fewer than two pairable ratings exist or
            only one value occurs.

    Raises:
    :   ValueError
        :   For an unknown level, or values the level cannot use.

    Parameters:
    :   * ****ratings**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****level**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> round(krippendorff_alpha([[1, 2, 3, 3], [1, 2, 3, 4]], level="interval"), 4)
    0.8889

    ```
    Go BackOpen In Tab