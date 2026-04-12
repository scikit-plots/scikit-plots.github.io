# choice[#](#choice "Link to this heading")

scikitplot.random.choice(**self**, **a**, **size=None**, **replace=True**, **p=None**)[#](#scikitplot.random.choice "Link to this definition")
:   Random sample from array.

    Parameters:
    :   ****a****int or array\_like
        :   If int, random sample from np.arange(a)

        ****size****int or tuple, optional
        :   Output shape

        ****replace****bool, default=True
        :   Whether to sample with replacement

        ****p****array\_like, optional
        :   Probabilities for each element

    Returns:
    :   scalar or ndarray
        :   Random samples

    Examples

    ```
    >>> gen = KissGenerator(42)
    >>> gen.choice(10, size=5)
    array([...])

    ```