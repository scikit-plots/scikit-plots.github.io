# shuffle[#](#shuffle "Link to this heading")

scikitplot.random.shuffle(**self**, **x**)[#](#scikitplot.random.shuffle "Link to this definition")
:   Shuffle array in-place (Fisher-Yates algorithm).

    Parameters:
    :   ****x****ndarray
        :   Array to shuffle

    Examples

    ```
    >>> gen = KissGenerator(42)
    >>> arr = np.arange(10)
    >>> gen.shuffle(arr)
    >>> print(arr)  # shuffled

    ```