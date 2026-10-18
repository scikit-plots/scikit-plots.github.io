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

    Raises:
    :   TypeError
        :   If a bound is not an integer (a Python or numpy integer; `bool`
            is refused, as in `index`).

        ValueError
        :   If `low >= high`, or the range holds more than `2**64` values
            (more than one 64-bit draw can reach).

    Notes

    Unbiased (R6-1): a raw draw below `2**64 mod (high - low)` is
    rejected before the modulo. A seeded stream equals the plain modulo’s
    until the first rejection (probability below `(high - low) / 2**64`
    per draw); every later output is then shifted by one draw.

    Examples

    Try it in your browser!
    ```
    >>> gen = KissGenerator(42)
    >>> gen.integers(0, 10, size=5)
    array([...])

    ```
    Go BackOpen In Tab