# KISS random number generation[#](#kiss-random-number-generation "Link to this heading")

`scikitplot.random` provides a NumPy-like KISS random-number-generation surface with seed sequences, bit generators, stateful generators, serialization, and convenience distribution functions.

> **Important**
> A deterministic pseudo-random stream is reproducible state, not cryptographic randomness. Do not use this module for passwords, tokens, keys, nonces, or any other security-sensitive entropy.
Getting started

Create a KISS generator with `default_rng` or `kiss_context`.

[Getting started](getting_started.html#random-getting-started)Generators and seeding

Choose 32/64-bit generators, seed sequences, spawning, and deterministic streams.

[Generators and seeding](generators_and_seeding.html#random-generators-and-seeding)State and serialization

Snapshot, pickle, JSON-style serialization, and restore state deliberately.

[State and serialization](state_and_serialization.html#random-state-and-serialization)NumPy interop and reproducibility

Understand NumPy-like semantics, distributions, and what reproducibility does and does not promise.

[NumPy interop and reproducibility](numpy_interop_and_reproducibility.html#random-numpy-interop-and-reproducibility)Python API

Generator, bit generator, seed sequence, RandomState compatibility, and convenience functions.

[Python API](python_api.html#random-python-api)Limits and troubleshooting

Compiled-extension requirements, thread/process use, and state-version compatibility.

[Limits and troubleshooting](limits_and_troubleshooting.html#random-limits-and-troubleshooting)

## Which page should I use?[#](#which-page-should-i-use "Link to this heading")

Start with ****Getting started****. Then choose the page that owns the decision
you are making: architecture and lifecycle, configuration, persistence,
performance, public API, or limits. The guide intentionally separates those
concerns so examples do not accidentally become policy.

## Examples[#](#examples "Link to this heading")

See [Random](../../auto_examples/random/index.html#random-examples) for executable examples that accompany this guide.

## Further reading[#](#further-reading "Link to this heading")

> **See also**
> * <https://www0.cs.ucl.ac.uk/staff/d.jones/GoodPracticeRNG.pdf>
* [`"Download GoodPracticeRNG.pdf"`](../../_downloads/fe7bdee729a723bd85b65cca0102a0e8/GoodPracticeRNG.pdf).