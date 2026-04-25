# KissBitGenerator[#](#kissbitgenerator "Link to this heading")

class scikitplot.random.KissBitGenerator(**seed: Optional[Union[int**, **KissSeedSequence]]=None**, **int bit\_width: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/random/__init__.py#L)[#](#scikitplot.random.KissBitGenerator "Link to this definition")
:   NumPy-compatible BitGenerator using KISS algorithm with complete serialization.

    Parameters:
    :   ****seed****{None, int, SeedSequence, KissSeedSequence}, optional, default=None
        :   Random seed or seed sequence:
            - int: Direct seed value
            - SeedSequence: Use its generated state
            - None: Use OS entropy via secrets.token\_bytes()

        ****bit\_width****int, default=None
        :   Generator bit width (32 or 64)
            - 32: Uses Kiss32Random (faster, period ~2^121)
            - 64: Uses Kiss64Random (slower, period ~2^250)

    Attributes:
    :   ****lock****threading.RLock
        :   Lock for thread-safe access (NumPy protocol requirement)

        [`seed_seq`](#scikitplot.random.KissBitGenerator.seed_seq "scikitplot.random.KissBitGenerator.seed_seq")KissSeedSequence
        :   seed\_seq: object

    > **See also**
    > [`Kiss32Random`](scikitplot.random.Kiss32Random.html#scikitplot.random.Kiss32Random "scikitplot.random.Kiss32Random")
    :   32-bit version for smaller datasets

    [`Kiss64Random`](scikitplot.random.Kiss64Random.html#scikitplot.random.Kiss64Random "scikitplot.random.Kiss64Random")
    :   64-bit version for larger datasets

    [`KissRandom`](scikitplot.random.KissRandom.html#scikitplot.random.KissRandom "scikitplot.random.KissRandom")
    :   Factory function for auto-detecting

    [`KissSeedSequence`](scikitplot.random.KissSeedSequence.html#scikitplot.random.KissSeedSequence "scikitplot.random.KissSeedSequence")
    :   Seed sequence for initialization

    [`KissGenerator`](scikitplot.random.KissGenerator.html#scikitplot.random.KissGenerator "scikitplot.random.KissGenerator")
    :   High-level generator using this BitGenerator

    [`KissRandomState`](scikitplot.random.KissRandomState.html#scikitplot.random.KissRandomState "scikitplot.random.KissRandomState")
    :   Inherites from KissGenerator

    [`default_rng`](scikitplot.random.default_rng.html#scikitplot.random.default_rng "scikitplot.random.default_rng")
    :   Convenience function to create generator

    [`numpy.random.BitGenerator`](https://numpy.org/devdocs/reference/random/bit_generators/generated/numpy.random.BitGenerator.html#numpy.random.BitGenerator "(in NumPy v2.5.dev0)")
    :   NumPy’s BitGenerator base class

    Notes

    The bit\_width parameter determines internal generator:

    * 32: Uses Kiss32Random (faster, period ~2^121)
    * 64: Uses Kiss64Random (slower, period ~2^250)
    * NumPy BitGenerator protocol compatible
    * Thread-safe via lock
    * Complete pickle/JSON support

    For NumPy compatibility, random\_raw() always returns uint64 values
    regardless of internal bit width.

    Examples

    Try it in your browser!
    ```
    >>> bg = KissBitGenerator(42)
    >>> bg.random_raw()
    >>>
    >>> # NOTE: Due to C API differences, use KissGenerator instead
    >>> # of wrapping in numpy.random.Generator
    >>> gen = KissGenerator(bg)
    >>> gen.random(10)
    >>>
    >>> # Serialization
    >>> import pickle
    >>> restored = pickle.loads(pickle.dumps(bg))

    ```
    Go BackOpen In Tab

    capsule[#](#scikitplot.random.KissBitGenerator.capsule "Link to this definition")
    :   Get PyCapsule for NumPy C API (protocol requirement).

    classmethod deserialize(**cls**, **data**)[#](#scikitplot.random.KissBitGenerator.deserialize "Link to this definition")
    :   Deserialize from dict.

        Parameters:
        :   ****data****dict
            :   Serialized state

        Returns:
        :   KissBitGenerator
            :   Restored instance

        Examples

        Try it in your browser!
        ```
        >>> import json
        >>> bg = KissBitGenerator(42)
        >>> json_str = json.dumps(bg.serialize())
        >>> data = json.loads(json_str)
        >>> restored = KissBitGenerator.deserialize(data)

        ```
        Go BackOpen In Tab

    classmethod from\_dict(**cls**, **data**)[#](#scikitplot.random.KissBitGenerator.from_dict "Link to this definition")
    :   Alias for deserialize().

    get\_params(**self**, **deep=True**)[#](#scikitplot.random.KissBitGenerator.get_params "Link to this definition")
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
        >>> bg = KissBitGenerator(42)
        >>> params = bg.get_params()

        ```
        Go BackOpen In Tab

    get\_state(**self**)[#](#scikitplot.random.KissBitGenerator.get_state "Link to this definition")
    :   Get state dictionary.

        Returns:
        :   dict
            :   Complete state

        Examples

        Try it in your browser!
        ```
        >>> bg = KissBitGenerator(42)
        >>> state = bg.get_state()
        >>> print("seed_sequence" in state)
        True

        ```
        Go BackOpen In Tab

    lock[#](#scikitplot.random.KissBitGenerator.lock "Link to this definition")
    :   !! processed by numpydoc !!

    random\_raw(**self**, **size=None**, **output=True**)[#](#scikitplot.random.KissBitGenerator.random_raw "Link to this definition")
    :   Generate random uint64 values.

        Parameters:
        :   ****size****int, tuple of ints, or None
            :   Output shape

            ****output****bool, default=True
            :   If True, return values. If False, just advance state.

        Returns:
        :   int or ndarray
            :   Random uint64 values

        Examples

        Try it in your browser!
        ```
        >>> bg = KissBitGenerator(seed=42)
        >>> bg.random_raw()  # Single value
        <class 'int'>

        ```
        ```
        >>> bg.random_raw(10)  # 10 values
        >>> bg.random_raw((3, 4))  # 3x4 array

        ```
        Go BackOpen In Tab

    seed\_seq[#](#scikitplot.random.KissBitGenerator.seed_seq "Link to this definition")
    :   object

        Type:
        :   [seed\_seq](#scikitplot.random.KissBitGenerator.seed_seq "scikitplot.random.KissBitGenerator.seed_seq")

    serialize(**self**)[#](#scikitplot.random.KissBitGenerator.serialize "Link to this definition")
    :   Serialize to JSON-compatible dict.

        Returns:
        :   dict
            :   JSON-serializable state

        Examples

        Try it in your browser!
        ```
        >>> import json
        >>> bg = KissBitGenerator(42)
        >>> data = bg.serialize()
        >>> json_str = json.dumps(data)

        ```
        Go BackOpen In Tab

    set\_params(**self**, **\*\*params**)[#](#scikitplot.random.KissBitGenerator.set_params "Link to this definition")
    :   Set parameters (sklearn-style).

        Parameters:
        :   ****\*\*params****dict
            :   Parameters to set

        Returns:
        :   self

        Examples

        Try it in your browser!
        ```
        >>> bg = KissBitGenerator(42)
        >>> bg.set_params(seed=123)

        ```
        Go BackOpen In Tab

    set\_state(**self**, **state**)[#](#scikitplot.random.KissBitGenerator.set_state "Link to this definition")
    :   Set state from dictionary.

        Parameters:
        :   ****state****dict
            :   State from get\_state()

        Examples

        Try it in your browser!
        ```
        >>> bg1 = KissBitGenerator(42)
        >>> state = bg1.get_state()
        >>> bg2 = KissBitGenerator(0)
        >>> bg2.set_state(state)

        ```
        Go BackOpen In Tab

    spawn(**self**, **int n\_children: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**) → [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")['KissBitGenerator'][#](#scikitplot.random.KissBitGenerator.spawn "Link to this definition")
    :   Create independent child BitGenerators (NumPy protocol).

        Parameters:
        :   ****n\_children****int
            :   Number of children to spawn

        Returns:
        :   list of KissBitGenerator
            :   Independent bit generators

        Raises:
        :   ValueError
            :   If n\_children < 1

        Parameters:
        :   ****n\_children**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**KissBitGenerator**](#scikitplot.random.KissBitGenerator "scikitplot.random.KissBitGenerator")]

        Notes

        This is REQUIRED by NumPy’s BitGenerator protocol.
        Each child is statistically independent.

        Examples

        Try it in your browser!
        ```
        >>> bg = KissBitGenerator(42)
        >>> children = bg.spawn(3)
        >>> print(len(children))
        3
        >>> # Use in parallel workers

        ```
        Go BackOpen In Tab

    state[#](#scikitplot.random.KissBitGenerator.state "Link to this definition")
    :   dict

        Get state dict (NumPy protocol).

        Type:
        :   [KissBitGenerator.state](#scikitplot.random.KissBitGenerator.state "scikitplot.random.KissBitGenerator.state")

    to\_dict(**self**)[#](#scikitplot.random.KissBitGenerator.to_dict "Link to this definition")
    :   Alias for serialize().

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_kiss_random_thumb.png)

[Enhanced KISS Random Generator - Complete Usage Examples](../../auto_examples/random/plot_kiss_random.html)

Enhanced KISS Random Generator - Complete Usage Examples