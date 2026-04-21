# uniform[#](#uniform "Link to this heading")

scikitplot.random.uniform(**self**, **low=0.0**, **high=1.0**, **size=None**)[#](#scikitplot.random.uniform "Link to this definition")
:   Uniform distribution in [low, high).

    Parameters:
    :   ****low****float, default=0.0
        :   Lower bound (inclusive)

        ****high****float, default=1.0
        :   Upper bound (exclusive)

        ****size****int or tuple, optional
        :   Output shape

    Returns:
    :   float or ndarray
        :   Uniform samples

    Examples

    Try it in your browser!
    ```
    >>> gen = KissGenerator(42)
    >>> gen.uniform(0, 10, size=5)
    array([...])

    ```
    Go BackOpen In Tab