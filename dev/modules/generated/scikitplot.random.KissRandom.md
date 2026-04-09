# KissRandom[#](#kissrandom "Link to this heading")

scikitplot.random.KissRandom(**seed=None**, **bit\_width=None**)[#](#scikitplot.random.KissRandom "Link to this definition")
:   Factory function for auto-detecting 32-bit vs 64-bit RNG.

    Parameters:
    :   ****seed****int or None, optional
        :   Random seed

        ****bit\_width****{None, ‘auto’, 32, 64}, default=None
        :   Bit width selection:
            - None or ‘auto’: Auto-detect based on system
            - 32: Force 32-bit
            - 64: Force 64-bit

    Returns:
    :   Kiss32Random or Kiss64Random
        :   RNG instance

    > **See also**
    > [`Kiss32Random`](scikitplot.random.Kiss32Random.html#scikitplot.random.Kiss32Random "scikitplot.random.Kiss32Random")
    :   32-bit version for smaller datasets

    [`Kiss64Random`](scikitplot.random.Kiss64Random.html#scikitplot.random.Kiss64Random "scikitplot.random.Kiss64Random")
    :   64-bit version for larger datasets

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

    Examples

    ```
    >>> rng = KissRandom(42)  # Auto-detect
    >>> rng = KissRandom(42, bit_width=32)  # Force 32-bit
    >>> rng = KissRandom(42, bit_width=64)  # Force 64-bit
    >>> rng = KissRandom(42, bit_width=None)  # Auto-detect

    ```