# normal[#](#normal "Link to this heading")

scikitplot.random.normal(**self**, **loc=0.0**, **scale=1.0**, **size=None**)[#](#scikitplot.random.normal "Link to this definition")
:   Normal distribution (Box-Muller transform).

    Parameters:
    :   ****loc****float, default=0.0
        :   Mean

        ****scale****float, default=1.0
        :   Standard deviation

        ****size****int or tuple, optional
        :   Output shape

    Returns:
    :   float or ndarray
        :   Normal samples

    Examples

    ```
    >>> gen = KissGenerator(42)
    >>> gen.normal(0, 1, size=1000)
    array([...])

    ```