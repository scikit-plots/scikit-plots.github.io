# random[#](#random "Link to this heading")

scikitplot.random.random(**self**, **size=None**, **dtype=np.float64**, **out=None**)[#](#scikitplot.random.random "Link to this definition")
:   Random floats in [0, 1).

    Parameters:
    :   ****size****int or tuple, optional
        :   Output shape

        ****dtype****dtype, default=np.float64
        :   Output data type

        ****out****ndarray, optional
        :   Output array

    Returns:
    :   float or ndarray
        :   Random values

    Examples

    Try it in your browser!
    ```
    >>> gen = KissGenerator(42)
    >>> gen.random(5)
    array([...])

    ```
    Go BackOpen In Tab