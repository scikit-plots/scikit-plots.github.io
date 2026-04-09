# integers[#](#integers "Link to this heading")

scikitplot.random.integers(**self**, **low**, **high=None**, **size=None**, **dtype=np.int64**, **endpoint=False**)[#](#scikitplot.random.integers "Link to this definition")
:   Random integers in [low, high) or [low, high].

    Parameters:
    :   ****low****int
        :   Lowest value (inclusive)

        ****high****int, optional
        :   Highest value (exclusive unless endpoint=True)

        ****size****int or tuple, optional
        :   Output shape

        ****dtype****dtype, default=np.int64
        :   Data type

        ****endpoint****bool, default=False
        :   If True, sample from [low, high] instead of [low, high)

    Returns:
    :   int or ndarray
        :   Random integers

    Examples

    ```
    >>> gen = KissGenerator(42)
    >>> gen.integers(0, 10, size=5)
    array([...])

    ```