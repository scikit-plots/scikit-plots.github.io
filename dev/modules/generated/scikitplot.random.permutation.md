# permutation[#](#permutation "Link to this heading")

scikitplot.random.permutation(**self**, **x**, **axis=0**)[#](#scikitplot.random.permutation "Link to this definition")
:   Randomly permute sequence or return permuted range.

    Parameters:
    :   ****x****int or array-like
        :   If int, permute np.arange(x).
            If array-like, permute copy of array.

        ****axis****int, default=0
        :   Axis to permute along

    Returns:
    :   ndarray
        :   Permuted sequence

    > **See also**
    > [`shuffle`](scikitplot.random.shuffle.html#scikitplot.random.shuffle "scikitplot.random.shuffle")
    :   In-place shuffle (destructive)

    [`choice`](scikitplot.random.choice.html#scikitplot.random.choice "scikitplot.random.choice")
    :   Random sampling

    Notes

    Unlike shuffle(), this returns a permuted copy without
    modifying the input.

    Examples

    Try it in your browser!
    ```
    >>> gen = KissGenerator()
    >>> gen.permutation(10)  # Permuted [0, 1, ..., 9]
    array([3, 7, 1, 9, 2, 5, 8, 0, 6, 4])
    >>>
    >>> # Permute array (returns copy)
    >>> arr = np.array([1, 2, 3, 4])
    >>> gen.permutation(arr)
    array([3, 1, 4, 2])
    >>> arr  # Original unchanged
    array([1, 2, 3, 4])

    ```
    Go BackOpen In Tab