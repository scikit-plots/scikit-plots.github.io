# KissSeedSequence[#](#kissseedsequence "Link to this heading")

class scikitplot.random.KissSeedSequence(**entropy=None**, **\***, **spawn\_key=()**, **pool\_size=4**, **n\_children\_spawned=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/random/__init__.py#L)[#](#scikitplot.random.KissSeedSequence "Link to this definition")
:   Seed sequence compatible with numpy.random.SeedSequence.

    Parameters:
    :   ****entropy****{None, int, sequence of int}, optional
        :   Entropy source. If None, uses OS randomness.

        ****spawn\_key****tuple of int, default=()
        :   Spawn key for child sequences

        ****pool\_size****int, default=4
        :   Pool size (for NumPy compatibility, not used)

        ****n\_children\_spawned****int, default=0
        :   Number of children spawned

    Attributes:
    :   ****entropy****int or None
        :   Initial entropy value

        ****spawn\_key****tuple of int
        :   Spawn key tuple

        ****pool\_size****int
        :   Pool size

        ****n\_children\_spawned****int
        :   Count of spawned children

    Raises:
    :   ValueError
        :   If pool\_size < 1 or n\_children\_spawned < 0

        TypeError
        :   If entropy has invalid type

    Parameters:
    :   * ****entropy**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **Sequence****[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
        * ****spawn\_key**** (**Sequence****[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]**)
        * ****pool\_size**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_children\_spawned**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    > **See also**
    > [`Kiss32Random`](scikitplot.random.Kiss32Random.html#scikitplot.random.Kiss32Random "scikitplot.random.Kiss32Random")
    :   32-bit version for smaller datasets

    [`Kiss64Random`](scikitplot.random.Kiss64Random.html#scikitplot.random.Kiss64Random "scikitplot.random.Kiss64Random")
    :   64-bit version for larger datasets

    [`KissRandom`](scikitplot.random.KissRandom.html#scikitplot.random.KissRandom "scikitplot.random.KissRandom")
    :   Factory function for auto-detecting

    [`KissBitGenerator`](scikitplot.random.KissBitGenerator.html#scikitplot.random.KissBitGenerator "scikitplot.random.KissBitGenerator")
    :   NumPy-compatible bit generator

    [`KissGenerator`](scikitplot.random.KissGenerator.html#scikitplot.random.KissGenerator "scikitplot.random.KissGenerator")
    :   High-level generator using this BitGenerator

    [`KissRandomState`](scikitplot.random.KissRandomState.html#scikitplot.random.KissRandomState "scikitplot.random.KissRandomState")
    :   Inherites from KissGenerator

    [`default_rng`](scikitplot.random.default_rng.html#scikitplot.random.default_rng "scikitplot.random.default_rng")
    :   Convenience function to create generator

    [`numpy.random.SeedSequence`](https://numpy.org/devdocs/reference/random/bit_generators/generated/numpy.random.SeedSequence.html#numpy.random.SeedSequence "(in NumPy v2.5.dev0)")
    :   NumPy’s seed sequence implementation

    Notes

    Simplified implementation of NumPy SeedSequence protocol.
    Compatible but uses simpler mixing algorithm.

    References

    [1]

    O’Neill, M.E. (2015). “PCG: A Family of Simple Fast Space-Efficient
    Statistically Good Algorithms for Random Number Generation.”
    <https://www.pcg-random.org/>

    [2]

    NumPy Enhancement Proposal 19: Random Number Generator Policy
    <https://numpy.org/neps/nep-0019-rng-policy.html>

    Examples

    Try it in your browser!
    ```
    >>> seq = KissSeedSequence(42)
    >>> state = seq.generate_state(4, dtype=np.uint32)
    >>> children = seq.spawn(2)
    >>>
    >>> # Serialization
    >>> import pickle
    >>> restored = pickle.loads(pickle.dumps(seq))

    ```
    Go BackOpen In Tab

    classmethod deserialize(**cls**, **dict data: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**)[#](#scikitplot.random.KissSeedSequence.deserialize "Link to this definition")
    :   Deserialize from dictionary.

        Parameters:
        :   ****data****dict
            :   Serialized state from serialize()

        Returns:
        :   KissSeedSequence
            :   Restored instance

        Parameters:
        :   ****data**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)"))

        Examples

        Try it in your browser!
        ```
        >>> import json
        >>> seq = KissSeedSequence(42)
        >>> json_str = json.dumps(seq.serialize())
        >>> data = json.loads(json_str)
        >>> restored = KissSeedSequence.deserialize(data)

        ```
        Go BackOpen In Tab

    classmethod from\_dict(**cls**, **dict data: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**)[#](#scikitplot.random.KissSeedSequence.from_dict "Link to this definition")
    :   Alias for deserialize().

        Parameters:
        :   ****data**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)"))

    generate\_state(**self**, **int n\_words: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**, **dtype: DTypeLike = np.uint32**) → NDArray[np.uint32 | np.uint64][#](#scikitplot.random.KissSeedSequence.generate_state "Link to this definition")
    :   Generate state array for RNG initialization.

        Parameters:
        :   ****n\_words****int
            :   Number of words to generate

            ****dtype****dtype-like, default=np.uint32
            :   Output data type (uint32 or uint64)

        Returns:
        :   ndarray
            :   State array of requested dtype

        Raises:
        :   ValueError
            :   If n\_words < 1
                If dtype is not uint32 or uint64

        Parameters:
        :   * ****n\_words**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****dtype**** ([**type**](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **\_HasDType****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_HasNumPyDType****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** [**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **\_DTypeDict** **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[**uint32** | **uint64**]]

        Notes

        Generates deterministic state from entropy and spawn\_key.
        Uses multiplicative congruential generator for mixing.

        Examples

        Try it in your browser!
        ```
        >>> seq = KissSeedSequence(42)
        >>> state = seq.generate_state(4, dtype=np.uint32)
        >>> print(state.shape)
        (4,)

        ```
        Go BackOpen In Tab

    get\_params(**self**, **bool deep: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[#](#scikitplot.random.KissSeedSequence.get_params "Link to this definition")
    :   Get parameters (sklearn-style).

        Parameters:
        :   ****deep****bool, default=True
            :   If True, return params for nested objects

        Returns:
        :   dict
            :   Parameter dictionary

        Parameters:
        :   ****deep**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")

        Examples

        Try it in your browser!
        ```
        >>> seq = KissSeedSequence(42)
        >>> params = seq.get_params()
        >>> print(params["entropy"])
        42

        ```
        Go BackOpen In Tab

    get\_state(**self**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[#](#scikitplot.random.KissSeedSequence.get_state "Link to this definition")
    :   Get current state as dictionary.

        Returns:
        :   dict
            :   Complete state dictionary

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")

        Examples

        Try it in your browser!
        ```
        >>> seq = KissSeedSequence(42)
        >>> state = seq.get_state()
        >>> print(state["entropy"])
        42

        ```
        Go BackOpen In Tab

    serialize(**self**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[#](#scikitplot.random.KissSeedSequence.serialize "Link to this definition")
    :   Serialize to JSON-compatible dict.

        Returns:
        :   dict
            :   JSON-serializable state

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")

        Examples

        Try it in your browser!
        ```
        >>> import json
        >>> seq = KissSeedSequence(42)
        >>> data = seq.serialize()
        >>> json_str = json.dumps(data)

        ```
        Go BackOpen In Tab

    set\_params(**self**, **\*\*params**)[#](#scikitplot.random.KissSeedSequence.set_params "Link to this definition")
    :   Set parameters (sklearn-style).

        Parameters:
        :   ****\*\*params****dict
            :   Parameters to set

        Returns:
        :   self
            :   For method chaining

        Examples

        Try it in your browser!
        ```
        >>> seq = KissSeedSequence(42)
        >>> seq.set_params(entropy=123)
        >>> print(seq.entropy)
        123

        ```
        Go BackOpen In Tab

    set\_state(**self**, **dict state: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.random.KissSeedSequence.set_state "Link to this definition")
    :   Set state from dictionary.

        Parameters:
        :   ****state****dict
            :   State from get\_state()

        Raises:
        :   ValueError
            :   If state is invalid

        Parameters:
        :   ****state**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)"))

        Return type:
        :   None

        Examples

        Try it in your browser!
        ```
        >>> seq1 = KissSeedSequence(42)
        >>> state = seq1.get_state()
        >>> seq2 = KissSeedSequence(0)
        >>> seq2.set_state(state)
        >>> print(seq2.entropy == seq1.entropy)
        True

        ```
        Go BackOpen In Tab

    spawn(**self**, **int n\_children: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**) → [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[#](#scikitplot.random.KissSeedSequence.spawn "Link to this definition")
    :   Create independent child seed sequences.

        Parameters:
        :   ****n\_children****int
            :   Number of children to spawn

        Returns:
        :   list of KissSeedSequence
            :   Independent child sequences

        Raises:
        :   ValueError
            :   If n\_children < 1

        Parameters:
        :   ****n\_children**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")

        Notes

        Each child has a unique spawn\_key derived from the parent’s spawn\_key
        and its position in the child list. This ensures statistical
        independence even with identical entropy.

        The spawn tree structure allows for hierarchical parallelization:
        master → workers → tasks, where each level is independent.

        Examples

        Try it in your browser!
        ```
        >>> seq = KissSeedSequence(42)
        >>> children = seq.spawn(3)
        >>> print(len(children))
        3

        ```
        Go BackOpen In Tab

    KissSeedSequence.state -> dict[str, Any]
    :   Get current state as dictionary.

        Returns:
        :   dict
            :   State dictionary with keys:
                - ‘entropy’: int or None
                - ‘spawn\_key’: tuple of int
                - ‘pool\_size’: int
                - ‘n\_children\_spawned’: int

        Notes

        State can be used for serialization and restoration.

        Examples

        Try it in your browser!
        ```
        >>> seq = KissSeedSequence(42)
        >>> state = seq.state
        >>> # Restore with: KissSeedSequence(**state)

        ```
        Go BackOpen In Tab

    to\_dict(**self**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[#](#scikitplot.random.KissSeedSequence.to_dict "Link to this definition")
    :   Alias for serialize().

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")