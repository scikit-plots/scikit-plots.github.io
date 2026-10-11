# NumPy interop and reproducibility[#](#numpy-interop-and-reproducibility "Link to this heading")

The API intentionally resembles `numpy.random.Generator` and provides common
distributions such as `random`, `integers`, `uniform`, `normal`,
`choice`, `shuffle`, `permutation`.

## Reproducibility has a scope[#](#reproducibility-has-a-scope "Link to this heading")

A fixed seed controls this generator’s state transition. It does not by itself
make an entire machine-learning experiment deterministic: thread scheduling,
BLAS libraries, GPU kernels, data ordering, third-party estimators, and process
fork/spawn behavior can introduce additional randomness.

Record the seed, generator/bit width, package version, and other algorithmic
random-state settings when results must be reproduced later.

## Further reading[#](#further-reading "Link to this heading")

The repository ships [`Good Practice in (Pseudo) Random Number
Generation`](../../_downloads/fe7bdee729a723bd85b65cca0102a0e8/GoodPracticeRNG.pdf) alongside this guide. It is useful background
for thinking about independent streams, seeding discipline, and reproducibility.