# KissRandomState[#](#kissrandomstate "Link to this heading")

class scikitplot.random.KissRandomState(**seed=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e137512/scikitplot/random/__init__.py#L)[#](#scikitplot.random.KissRandomState "Link to this definition")
:   NumPy RandomState-compatible interface with complete serialization.

    KissRandomState : Inherites from KissGenerator.
    Provides legacy numpy.random.RandomState API for backward compatibility.

    Parameters:
    :   ****seed****int or None, optional
        :   Random seed

    Attributes:
    :   [`bit_generator`](#scikitplot.random.KissRandomState.bit_generator "scikitplot.random.KissRandomState.bit_generator")KissBitGenerator
        :   Gets the bit generator instance used by the generator

    > **See also**
    > [`Kiss32Random`](scikitplot.random.Kiss32Random.html#scikitplot.random.Kiss32Random "scikitplot.random.Kiss32Random")
    :   32-bit version for smaller datasets

    [`Kiss64Random`](scikitplot.random.Kiss64Random.html#scikitplot.random.Kiss64Random "scikitplot.random.Kiss64Random")
    :   64-bit version for larger datasets

    [`KissRandom`](scikitplot.random.KissRandom.html#scikitplot.random.KissRandom "scikitplot.random.KissRandom")
    :   Factory function for auto-detecting

    [`KissSeedSequence`](scikitplot.random.KissSeedSequence.html#scikitplot.random.KissSeedSequence "scikitplot.random.KissSeedSequence")
    :   Seed sequence for initialization

    [`KissBitGenerator`](scikitplot.random.KissBitGenerator.html#scikitplot.random.KissBitGenerator "scikitplot.random.KissBitGenerator")
    :   NumPy-compatible bit generator

    [`KissGenerator`](scikitplot.random.KissGenerator.html#scikitplot.random.KissGenerator "scikitplot.random.KissGenerator")
    :   High-level generator using this BitGenerator

    [`default_rng`](scikitplot.random.default_rng.html#scikitplot.random.default_rng "scikitplot.random.default_rng")
    :   Convenience function to create generator

    Notes

    This class provides the same interface as numpy.random.RandomState
    for users who prefer the legacy API. All serialization methods
    are inherited from KissGenerator.

    Examples

    Try it in your browser!
    ```
    >>> rs = KissRandomState(42)
    >>> rs.rand(5)  # Like np.random.rand
    >>> rs.randint(0, 100, size=10)  # Like np.random.randint
    >>> rs.randn(5)  # Like np.random.randn
    >>>
    >>> # Set/get bit generator
    >>> bg = rs.get_bit_generator()
    >>> rs.set_bit_generator(KissBitGenerator(123))
    >>>
    >>> # Serialization
    >>> import pickle
    >>> restored = pickle.loads(pickle.dumps(rs))

    ```
    Go BackOpen In Tab

    bit\_generator[#](#scikitplot.random.KissRandomState.bit_generator "Link to this definition")
    :   Gets the bit generator instance used by the generator

        Returns:
        :   ****bit\_generator****KissBitGenerator
            :   The bit generator instance used by the generator

        Examples

        Try it in your browser!
        ```
        >>> gen = KissGenerator(42)
        >>> bg = gen.get_bit_generator()
        >>> print(type(bg))
        <class 'KissBitGenerator'>

        ```
        Go BackOpen In Tab

    choice(**self**, **a**, **size=None**, **replace=True**, **p=None**)[#](#scikitplot.random.KissRandomState.choice "Link to this definition")
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

        Try it in your browser!
        ```
        >>> gen = KissGenerator(42)
        >>> gen.choice(10, size=5)
        array([...])

        ```
        Go BackOpen In Tab

    classmethod deserialize(**cls**, **data**)[#](#scikitplot.random.KissRandomState.deserialize "Link to this definition")
    :   Deserialize a KissGenerator from a JSON-compatible dict.

        Parameters:
        :   ****data****dict
            :   Serialized generator state.

        Returns:
        :   KissGenerator
            :   Fully restored generator instance.

        Raises:
        :   TypeError
            :   If types are invalid.

            KeyError
            :   If required fields are missing.

            ValueError
            :   If state is incompatible or unsupported.

        Examples

        Try it in your browser!
        ```
        >>> import json
        >>> gen = KissGenerator(42)
        >>> json_str = json.dumps(gen.serialize())
        >>> data = json.loads(json_str)
        >>> restored = KissGenerator.deserialize(data)

        ```
        Go BackOpen In Tab

    classmethod from\_dict(**cls**, **data**)[#](#scikitplot.random.KissRandomState.from_dict "Link to this definition")
    :   Alias for deserialize().

    get\_bit\_generator(**self**)[#](#scikitplot.random.KissRandomState.get_bit_generator "Link to this definition")
    :   Get underlying bit generator.

        Returns:
        :   KissBitGenerator
            :   The bit generator

        Examples

        Try it in your browser!
        ```
        >>> gen = KissGenerator(42)
        >>> bg = gen.get_bit_generator()
        >>> print(type(bg))
        <class 'KissBitGenerator'>

        ```
        Go BackOpen In Tab

    get\_params(**self**, **deep=True**)[#](#scikitplot.random.KissRandomState.get_params "Link to this definition")
    :   Get parameters (sklearn-style).

        Parameters:
        :   ****deep****bool, default=True
            :   If True, include nested params

        Returns:
        :   dict
            :   Parameters

        Examples

        Try it in your browser!
        ```
        >>> gen = KissGenerator(42)
        >>> params = gen.get_params()

        ```
        Go BackOpen In Tab

    get\_state(**self**)[#](#scikitplot.random.KissRandomState.get_state "Link to this definition")
    :   Get state dictionary.

        Returns:
        :   dict
            :   Complete state

        Examples

        Try it in your browser!
        ```
        >>> gen = KissGenerator(42)
        >>> state = gen.get_state()
        >>> print("bit_generator_state" in state)
        True

        ```
        Go BackOpen In Tab

    integers(**self**, **low**, **high=None**, **size=None**, **dtype=np.int64**, **endpoint=False**)[#](#scikitplot.random.KissRandomState.integers "Link to this definition")
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

        Try it in your browser!
        ```
        >>> gen = KissGenerator(42)
        >>> gen.integers(0, 10, size=5)
        array([...])

        ```
        Go BackOpen In Tab

    normal(**self**, **loc=0.0**, **scale=1.0**, **size=None**)[#](#scikitplot.random.KissRandomState.normal "Link to this definition")
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

        Notes

        Uses the Box-Muller transform:
        :   z = sqrt(-2 \* log(u1)) \* cos(2 \* pi \* u2)

        where u1, u2 are i.i.d. Uniform(0, 1).

        u1 is clamped away from zero to prevent log(0) = -inf. Since
        KissBitGenerator.random() maps [0, 2^64-1] onto [0.0, 1.0) and zero
        is a valid raw value, u1 == 0.0 is possible (probability 1/2^64).

        The size != None path is fully vectorized in NumPy’s C layer.
        No Python list or scalar boxing is performed, which avoids the
        GCC -Wstringop-overflow false positives triggered by Python 3.13t’s
        free-threaded Py\_INCREF atomic operations.

        Examples

        Try it in your browser!
        ```
        >>> gen = KissGenerator(42)
        >>> gen.normal(0, 1, size=1000)
        array([...])

        ```
        Go BackOpen In Tab

    permutation(**self**, **x**, **axis=0**)[#](#scikitplot.random.KissRandomState.permutation "Link to this definition")
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

    rand(**self**, **\*args**)[#](#scikitplot.random.KissRandomState.rand "Link to this definition")
    :   Random values in [0, 1) with given shape.

        Parameters:
        :   ****\*args****ints
            :   Shape dimensions

        Returns:
        :   ndarray
            :   Random values

        Examples

        Try it in your browser!
        ```
        >>> rs = KissRandomState(42)
        >>> rs.rand(3, 4)  # 3x4 array

        ```
        Go BackOpen In Tab

    randint(**self**, **low**, **high=None**, **size=None**, **dtype=np.int64**)[#](#scikitplot.random.KissRandomState.randint "Link to this definition")
    :   Random integers in [low, high).

        Parameters:
        :   ****low****int
            :   Lowest value (inclusive)

            ****high****int, optional
            :   Highest value (exclusive)

            ****size****int or tuple, optional
            :   Output shape

            ****dtype****dtype, default=np.int64
            :   Data type

        Returns:
        :   int or ndarray
            :   Random integers

        Examples

        Try it in your browser!
        ```
        >>> rs = KissRandomState(42)
        >>> rs.randint(0, 10, size=5)

        ```
        Go BackOpen In Tab

    randn(**self**, **\*args**)[#](#scikitplot.random.KissRandomState.randn "Link to this definition")
    :   Standard normal distribution with given shape.

        Parameters:
        :   ****\*args****ints
            :   Shape dimensions

        Returns:
        :   ndarray
            :   Normal samples

        Examples

        Try it in your browser!
        ```
        >>> rs = KissRandomState(42)
        >>> rs.randn(3, 4)  # 3x4 array

        ```
        Go BackOpen In Tab

    random(**self**, **size=None**, **dtype=np.float64**, **out=None**)[#](#scikitplot.random.KissRandomState.random "Link to this definition")
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

    random\_sample(**self**, **size=None**)[#](#scikitplot.random.KissRandomState.random_sample "Link to this definition")
    :   Random floats in [0, 1).

    seed(**self**, **seed=None**)[#](#scikitplot.random.KissRandomState.seed "Link to this definition")
    :   Seed the generator.

        Parameters:
        :   ****seed****int or None, optional
            :   Random seed

        Examples

        Try it in your browser!
        ```
        >>> rs = KissRandomState(42)
        >>> rs.seed(123)  # Re-seed

        ```
        Go BackOpen In Tab

    serialize(**self**)[#](#scikitplot.random.KissRandomState.serialize "Link to this definition")
    :   Serialize to JSON-compatible dict.

        Returns:
        :   dict
            :   JSON-serializable state

        Examples

        Try it in your browser!
        ```
        >>> import json
        >>> gen = KissGenerator(42)
        >>> data = gen.serialize()
        >>> json_str = json.dumps(data)

        ```
        Go BackOpen In Tab

    set\_bit\_generator(**self**, **bit\_generator**)[#](#scikitplot.random.KissRandomState.set_bit_generator "Link to this definition")
    :   Set new bit generator.

        Parameters:
        :   ****bit\_generator****KissBitGenerator
            :   New bit generator

        Raises:
        :   TypeError
            :   If not KissBitGenerator

        Examples

        Try it in your browser!
        ```
        >>> gen = KissGenerator(42)
        >>> new_bg = KissBitGenerator(123)
        >>> gen.set_bit_generator(new_bg)

        ```
        Go BackOpen In Tab

    set\_params(**self**, **\*\*params**)[#](#scikitplot.random.KissRandomState.set_params "Link to this definition")
    :   Set parameters (sklearn-style).

        Parameters:
        :   ****\*\*params****dict
            :   Parameters to set

        Returns:
        :   self

        Examples

        Try it in your browser!
        ```
        >>> gen = KissGenerator(42)
        >>> gen.set_params(bit_generator={"seed": 123})

        ```
        Go BackOpen In Tab

    set\_state(**self**, **state**)[#](#scikitplot.random.KissRandomState.set_state "Link to this definition")
    :   Set state from dictionary.

        Parameters:
        :   ****state****dict
            :   State from get\_state()

        Examples

        Try it in your browser!
        ```
        >>> gen1 = KissGenerator(42)
        >>> state = gen1.get_state()
        >>> gen2 = KissGenerator(0)
        >>> gen2.set_state(state)

        ```
        Go BackOpen In Tab

    shuffle(**self**, **x**)[#](#scikitplot.random.KissRandomState.shuffle "Link to this definition")
    :   Shuffle array in-place (Fisher-Yates algorithm).

        Parameters:
        :   ****x****ndarray
            :   Array to shuffle

        Examples

        Try it in your browser!
        ```
        >>> gen = KissGenerator(42)
        >>> arr = np.arange(10)
        >>> gen.shuffle(arr)
        >>> print(arr)  # shuffled

        ```
        Go BackOpen In Tab

    spawn(**self**, **n\_children**)[#](#scikitplot.random.KissRandomState.spawn "Link to this definition")
    :   Create independent child Generators.

        Parameters:
        :   ****n\_children****int
            :   Number of children to spawn

        Returns:
        :   list of KissGenerator
            :   Independent generators

        Raises:
        :   ValueError
            :   If n\_children < 1

        > **See also**
        > [`KissSeedSequence.spawn`](scikitplot.random.KissSeedSequence.html#scikitplot.random.KissSeedSequence.spawn "scikitplot.random.KissSeedSequence.spawn")
        :   Low-level seed sequence spawning

        Notes

        Uses seed sequence spawning to ensure statistical independence.
        Each child generator has its own independent random stream.

        Useful for parallel computation where each worker needs an
        independent RNG.

        Examples

        Try it in your browser!
        ```
        >>> gen = KissGenerator()
        >>> children = gen.spawn(4)
        >>> print(len(children))
        3

        ```

        Use in parallel computation

        ```
        >>> from concurrent.futures import ThreadPoolExecutor
        >>> def worker(gen):
        ...     return gen.random(100).mean()
        >>>
        >>> with ThreadPoolExecutor() as executor:
        ...     results = list(executor.map(worker, children))

        ```
        Go BackOpen In Tab

    to\_dict(**self**)[#](#scikitplot.random.KissRandomState.to_dict "Link to this definition")
    :   Alias for serialize().

    uniform(**self**, **low=0.0**, **high=1.0**, **size=None**)[#](#scikitplot.random.KissRandomState.uniform "Link to this definition")
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