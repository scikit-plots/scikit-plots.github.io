# scikitplot.random[#](#module-scikitplot.random "Link to this heading")

Random Number Generation (Numpy-Like [`Generator`](https://numpy.org/devdocs/reference/random/generator.html#numpy.random.Generator "(in NumPy v2.6.dev0)")) [[1]](#r1ee9154da2eb-1) [[2]](#r1ee9154da2eb-2) [[3]](#r1ee9154da2eb-3).

Use `default_rng()` to create a `Generator` and call its methods.

> **See also**
> * <https://de.wikipedia.org/wiki/KISS_(Zufallszahlengenerator>)

References

[[1](#id1)]

Marsaglia, G. (1999). “Random Number Generators.”
Journal of Modern Applied Statistical Methods, 2(1), 2-13.

[[2](#id2)]

Jones, D. “Good Practice in (Pseudo) Random Number Generation for
Bioinformatics Applications.”
<https://www0.cs.ucl.ac.uk/staff/d.jones/GoodPracticeRNG.pdf>

[[3](#id3)]

NumPy Development Team. “Random Generator.”
<https://numpy.org/doc/stable/reference/random/generator.html>

Examples

Try it in your browser!
```
>>> from scikitplot.random import default_rng, kiss_context
>>> rng = default_rng(42)
>>> data = rng.random(1000)

```

Context manager

```
>>> with default_rng(42) as rng:
...     data = rng.random(1000)
>>>
>>> with kiss_context(42) as rng:
...     data = rng.random(1000)

```
Go BackOpen In Tab

****User guide.**** See the [Random](../user_guide/random/index.html#random-index) section for further details.

## Random Number Generation (Numpy-Like [`Generator`](https://numpy.org/devdocs/reference/random/generator.html#numpy.random.Generator "(in NumPy v2.6.dev0)")).[#](#random-number-generation-numpy-like-generator "Link to this heading")

****User guide.**** See the [Random](../user_guide/random/index.html#random-index) section for further details.

|  |  |
| --- | --- |
| [`Kiss32Random`](../modules/generated/scikitplot.random.Kiss32Random.html#scikitplot.random.Kiss32Random "scikitplot.random.Kiss32Random") | 32-bit KISS RNG with complete serialization support. |
| [`Kiss64Random`](../modules/generated/scikitplot.random.Kiss64Random.html#scikitplot.random.Kiss64Random "scikitplot.random.Kiss64Random") | Low-level 64-bit KISS RNG with context manager support. |
| [`KissRandom`](../modules/generated/scikitplot.random.KissRandom.html#scikitplot.random.KissRandom "scikitplot.random.KissRandom") | Factory function for auto-detecting 32-bit vs 64-bit RNG. |
| [`KissSeedSequence`](../modules/generated/scikitplot.random.KissSeedSequence.html#scikitplot.random.KissSeedSequence "scikitplot.random.KissSeedSequence") | Seed sequence compatible with numpy.random.SeedSequence. |
| [`KissBitGenerator`](../modules/generated/scikitplot.random.KissBitGenerator.html#scikitplot.random.KissBitGenerator "scikitplot.random.KissBitGenerator") | NumPy-compatible BitGenerator using KISS algorithm with complete serialization. |
| [`KissGenerator`](../modules/generated/scikitplot.random.KissGenerator.html#scikitplot.random.KissGenerator "scikitplot.random.KissGenerator") | High-level random number generator using KISS algorithm. |
| [`KissRandomState`](../modules/generated/scikitplot.random.KissRandomState.html#scikitplot.random.KissRandomState "scikitplot.random.KissRandomState") | NumPy RandomState-compatible interface with complete serialization. |
| [`default_rng`](../modules/generated/scikitplot.random.default_rng.html#scikitplot.random.default_rng "scikitplot.random.default_rng") | Create default KISS random number generator. |
| [`kiss_context`](../modules/generated/scikitplot.random.kiss_context.html#scikitplot.random.kiss_context "scikitplot.random.kiss_context") | Context manager for temporary RNG. |

## `KissGenerator` Distribution Methods[#](#kissgenerator-distribution-methods "Link to this heading")

****User guide.**** See the [Random](../user_guide/random/index.html#random-index) section for further details.

|  |  |
| --- | --- |
| [`choice`](../modules/generated/scikitplot.random.choice.html#scikitplot.random.choice "scikitplot.random.choice") | Random sample from array. |
| [`integers`](../modules/generated/scikitplot.random.integers.html#scikitplot.random.integers "scikitplot.random.integers") | Random integers in [low, high) or [low, high]. |
| [`normal`](../modules/generated/scikitplot.random.normal.html#scikitplot.random.normal "scikitplot.random.normal") | Normal distribution (Box-Muller transform). |
| [`permutation`](../modules/generated/scikitplot.random.permutation.html#scikitplot.random.permutation "scikitplot.random.permutation") | Randomly permute sequence or return permuted range. |
| [`random`](../modules/generated/scikitplot.random.random.html#scikitplot.random.random "scikitplot.random.random") | Random floats in [0, 1). |
| [`shuffle`](../modules/generated/scikitplot.random.shuffle.html#scikitplot.random.shuffle "scikitplot.random.shuffle") | Shuffle array in-place (Fisher-Yates algorithm). |
| [`uniform`](../modules/generated/scikitplot.random.uniform.html#scikitplot.random.uniform "scikitplot.random.uniform") | Uniform distribution in [low, high). |