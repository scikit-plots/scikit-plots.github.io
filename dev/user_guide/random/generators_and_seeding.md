# Generators and seeding[#](#generators-and-seeding "Link to this heading")

The public hierarchy includes `KissSeedSequence`, 32-bit and 64-bit
legacy generators, `KissBitGenerator`, `KissGenerator`, and
`KissRandomState` compatibility behavior.

## Seed sequences[#](#seed-sequences "Link to this heading")

Use `KissSeedSequence` when one root seed must produce multiple explicit
child streams. `spawn` makes stream derivation visible and is preferable to
inventing ad-hoc arithmetic on integer seeds.

## Bit width[#](#bit-width "Link to this heading")

`KissRandom` / `default_rng` accept a bit-width policy. If reproducibility
must survive different machines or future defaults, choose the width explicitly
rather than depending on `"auto"`.

## Parallel work[#](#parallel-work "Link to this heading")

Do not share one mutable generator across independent workers and assume their
scheduling will be reproducible. Give each worker an explicitly derived child
seed/stream.