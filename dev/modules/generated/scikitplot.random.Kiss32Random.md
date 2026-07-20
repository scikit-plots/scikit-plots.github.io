# Kiss32Random[#](#kiss32random "Link to this heading")

class scikitplot.random.Kiss32Random(**int seed: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8f33de/scikitplot/random/__init__.py#L)[#](#scikitplot.random.Kiss32Random "Link to this definition")
:   32-bit KISS RNG with complete serialization support.

    Period: ~2^121 (suitable for <16M data points)

    Parameters:
    :   ****seed****int or None, optional
        :   Random seed. If None, uses default seed.

    Attributes:
    :   ****default\_seed****int
        :   Default seed value (123456789)

        [`seed`](#scikitplot.random.Kiss32Random.seed "scikitplot.random.Kiss32Random.seed")int
        :   Kiss32Random.seed: int

        ****lock****threading.RLock
        :   Thread lock (for shared access)

    > **See also**
    > [`Kiss64Random`](scikitplot.random.Kiss64Random.html#scikitplot.random.Kiss64Random "scikitplot.random.Kiss64Random")
    :   64-bit version for larger datasets

    [`KissRandom`](scikitplot.random.KissRandom.html#scikitplot.random.KissRandom "scikitplot.random.KissRandom")
    :   Factory function for auto-detecting

    [`KissSeedSequence`](scikitplot.random.KissSeedSequence.html#scikitplot.random.KissSeedSequence "scikitplot.random.KissSeedSequence")
    :   Seed sequence for initialization

    [`KissBitGenerator`](scikitplot.random.KissBitGenerator.html#scikitplot.random.KissBitGenerator "scikitplot.random.KissBitGenerator")
    :   NumPy-compatible bit generator

    [`KissGenerator`](scikitplot.random.KissGenerator.html#scikitplot.random.KissGenerator "scikitplot.random.KissGenerator")
    :   High-level generator using this BitGenerator

    [`KissRandomState`](scikitplot.random.KissRandomState.html#scikitplot.random.KissRandomState "scikitplot.random.KissRandomState")
    :   Inherites from KissGenerator

    [`default_rng`](scikitplot.random.default_rng.html#scikitplot.random.default_rng "scikitplot.random.default_rng")
    :   Convenience function to create generator

    Notes

    * Period: approximately 2^121
    * Not cryptographically secure
    * Suitable for up to ~2^24 data points
    * For larger datasets, use Kiss64Random
    * Thread-safe via context manager
    * Deterministic: same seed → same sequence
    * Complete pickle/JSON support

    The KISS32 algorithm combines:
    - Linear Congruential Generator (LCG)
    - Xorshift generator
    - Multiply-With-Carry (MWC) generator

    References

    [1]

    Marsaglia, G. (1999). “Random Number Generators.”

    Examples

    Try it in your browser!
    ```
    >>> rng = Kiss32Random(42)
    >>> rng.kiss()  # Random uint32
    >>>
    >>> # Context manager (thread-safe)
    >>> with rng:
    ...     value = rng.kiss()
    >>>
    >>> # Serialization
    >>> import pickle
    >>> restored = pickle.loads(pickle.dumps(rng))

    ```
    Go BackOpen In Tab

    default\_seed = 123456789[#](#scikitplot.random.Kiss32Random.default_seed "Link to this definition")

    classmethod deserialize(**cls**, **data**)[#](#scikitplot.random.Kiss32Random.deserialize "Link to this definition")
    :   Deserialize from dict.

        Parameters:
        :   ****data****dict
            :   Serialized state

        Returns:
        :   Kiss32Random
            :   Restored instance

        Examples

        Try it in your browser!
        ```
        >>> import json
        >>> rng = Kiss32Random(42)
        >>> json_str = json.dumps(rng.serialize())
        >>> data = json.loads(json_str)
        >>> restored = Kiss32Random.deserialize(data)

        ```
        Go BackOpen In Tab

    flip(**self**) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.random.Kiss32Random.flip "Link to this definition")
    :   Generate random binary value (0 or 1).

        Returns:
        :   int
            :   Either 0 or 1 with equal probability

        Examples

        Try it in your browser!
        ```
        >>> rng = Kiss32Random(42)
        >>> rng.flip() in {0, 1}
        True

        ```

        Coin flip simulation:

        ```
        >>> rng = Kiss32Random(123)
        >>> flips = [rng.flip() for _ in range(1000)]
        >>> abs(sum(flips) - 500) < 50  # Approximately 50% heads
        True

        ```
        Go BackOpen In Tab

    classmethod from\_dict(**cls**, **data**)[#](#scikitplot.random.Kiss32Random.from_dict "Link to this definition")
    :   Alias for deserialize().

    static get\_default\_seed() → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.random.Kiss32Random.get_default_seed "Link to this definition")
    :   Get default seed value.

        Returns:
        :   int
            :   Default seed (123456789)

        Return type:
        :   [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")

        Examples

        Try it in your browser!
        ```
        >>> Kiss32Random.get_default_seed()
        123456789

        ```
        Go BackOpen In Tab

    get\_params(**self**, **deep=True**)[#](#scikitplot.random.Kiss32Random.get_params "Link to this definition")
    :   Get parameters (sklearn-style).

        Parameters:
        :   ****deep****bool, default=True
            :   Unused, for sklearn compatibility

        Returns:
        :   dict
            :   Constructor parameters

        Examples

        Try it in your browser!
        ```
        >>> rng = Kiss32Random(42)
        >>> params = rng.get_params()
        >>> print(params)
        {'seed': 42}

        ```
        Go BackOpen In Tab

    get\_state(**self**)[#](#scikitplot.random.Kiss32Random.get_state "Link to this definition")
    :   Get state dictionary.

        Returns:
        :   dict
            :   Complete state

        Examples

        Try it in your browser!
        ```
        >>> rng = Kiss32Random(42)
        >>> state = rng.get_state()
        >>> print(state["seed"])
        42

        ```
        Go BackOpen In Tab

    index(**self**, **size\_t n**) → size\_t[#](#scikitplot.random.Kiss32Random.index "Link to this definition")
    :   Generate random index in range [0, n-1].

        Parameters:
        :   ****n****int
            :   Upper bound (exclusive). Must be >= 0.

        Returns:
        :   int
            :   Random integer in [0, n-1], or 0 if n==0

        Raises:
        :   ValueError
            :   If n < 0

            TypeError
            :   If n not an integer

        Notes

        * Handles n==0 gracefully (returns 0)
        * Uses modulo for simplicity (suitable for non-crypto use)
        * Slight modulo bias exists but negligible for non-crypto applications

        Examples

        Try it in your browser!
        ```
        >>> rng = Kiss32Random(42)
        >>> idx = rng.index(100)
        >>> 0 <= idx < 100
        True

        ```

        Array indexing:

        ```
        >>> import numpy as np
        >>> arr = np.arange(100, 200)
        >>> rng = Kiss32Random(42)
        >>> random_element = arr[rng.index(len(arr))]

        ```
        Go BackOpen In Tab

    kiss(**self**) → uint32\_t[#](#scikitplot.random.Kiss32Random.kiss "Link to this definition")
    :   Generate next random 32-bit unsigned integer.

        Returns:
        :   int
            :   Random value in [0, 2^32-1]

        Notes

        This is the core RNG method. Other methods (flip, index) build on it.

        Examples

        Try it in your browser!
        ```
        >>> rng = Kiss32Random(42)
        >>> value = rng.kiss()
        >>> 0 <= value < 2**32
        True

        ```
        Go BackOpen In Tab

    lock[#](#scikitplot.random.Kiss32Random.lock "Link to this definition")
    :   !! processed by numpydoc !!

    static normalize\_seed(**int seed: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.random.Kiss32Random.normalize_seed "Link to this definition")
    :   Normalize seed to valid non-zero value.

        Parameters:
        :   ****seed****int
            :   User-provided seed

        Returns:
        :   int
            :   Normalized seed (original if non-zero, else default\_seed)

        Parameters:
        :   ****seed**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")

        Notes

        Maps seed==0 to default\_seed to avoid degenerate RNG states.

        Examples

        Try it in your browser!
        ```
        >>> Kiss32Random.normalize_seed(42)
        42
        >>> Kiss32Random.normalize_seed(0)
        123456789

        ```
        Go BackOpen In Tab

    reset(**self**, **int seed: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.random.Kiss32Random.reset "Link to this definition")
    :   Reset RNG state with new seed.

        Parameters:
        :   ****seed****int
            :   New seed value

        Raises:
        :   ValueError
            :   If seed out of range

        Parameters:
        :   ****seed**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   None

        Notes

        Fully resets all internal state variables.

        Examples

        Try it in your browser!
        ```
        >>> rng = Kiss32Random(42)
        >>> values1 = [rng.kiss() for _ in range(5)]
        >>> rng.reset(42)
        >>> values2 = [rng.kiss() for _ in range(5)]
        >>> values1 == values2
        True

        ```
        Go BackOpen In Tab

    reset\_default(**self**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.random.Kiss32Random.reset_default "Link to this definition")
    :   Reset to default seed.

        Equivalent to reset(default\_seed).

        Examples

        Try it in your browser!
        ```
        >>> rng = Kiss32Random()
        >>> rng.reset_default()
        >>> rng.seed == Kiss32Random.default_seed
        True

        ```
        Go BackOpen In Tab

        Return type:
        :   None

    seed[#](#scikitplot.random.Kiss32Random.seed "Link to this definition")
    :   int

        Get current seed value.

        Returns:
        :   int
            :   Current seed

        Examples

        Try it in your browser!
        ```
        >>> rng = Kiss32Random(42)
        >>> rng.seed
        42

        ```
        Go BackOpen In Tab

        Type:
        :   [Kiss32Random.seed](#scikitplot.random.Kiss32Random.seed "scikitplot.random.Kiss32Random.seed")

    serialize(**self**)[#](#scikitplot.random.Kiss32Random.serialize "Link to this definition")
    :   Serialize to JSON-compatible dict.

        Returns:
        :   dict
            :   JSON-serializable state

        Examples

        Try it in your browser!
        ```
        >>> import json
        >>> rng = Kiss32Random(42)
        >>> data = rng.serialize()
        >>> json_str = json.dumps(data)

        ```
        Go BackOpen In Tab

    set\_params(**self**, **\*\*params**)[#](#scikitplot.random.Kiss32Random.set_params "Link to this definition")
    :   Set parameters (sklearn-style).

        Parameters:
        :   ****\*\*params****dict
            :   Parameters to set

        Returns:
        :   self
            :   For chaining

        Examples

        Try it in your browser!
        ```
        >>> rng = Kiss32Random(42)
        >>> rng.set_params(seed=123)
        >>> print(rng.seed)
        123

        ```
        Go BackOpen In Tab

    set\_seed(**self**, **int seed: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.random.Kiss32Random.set_seed "Link to this definition")
    :   Set new seed (alias for reset).

        Parameters:
        :   ****seed****int
            :   New seed value

        Parameters:
        :   ****seed**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   None

        Examples

        Try it in your browser!
        ```
        >>> rng = Kiss32Random()
        >>> rng.set_seed(42)

        ```
        Go BackOpen In Tab

    set\_state(**self**, **state**)[#](#scikitplot.random.Kiss32Random.set_state "Link to this definition")
    :   Set state from dictionary.

        Parameters:
        :   ****state****dict
            :   State from get\_state()

        Examples

        Try it in your browser!
        ```
        >>> rng1 = Kiss32Random(42)
        >>> state = rng1.get_state()
        >>> rng2 = Kiss32Random(0)
        >>> rng2.set_state(state)

        ```
        Go BackOpen In Tab

    to\_dict(**self**)[#](#scikitplot.random.Kiss32Random.to_dict "Link to this definition")
    :   Alias for serialize().

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_kiss_random_thumb.png)

[Enhanced KISS Random Generator - Complete Usage Examples](../../auto_examples/random/plot_kiss_random.html)

Enhanced KISS Random Generator - Complete Usage Examples