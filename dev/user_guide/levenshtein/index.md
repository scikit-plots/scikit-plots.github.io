# Levenshtein distance and fuzzy matching[#](#levenshtein-distance-and-fuzzy-matching "Link to this heading")

`scikitplot.levenshtein` provides one small, stable facade for exact
unit-cost Levenshtein edit distance, normalized similarity, deterministic
ranking and optional Corpus retrieval.

The base behavior never depends on a third-party package. Optional
accelerators are discovered lazily.

Start here

Distance, normalized similarity and the first ranked match.

[Getting started](getting_started.html#levenshtein-getting-started)How it works

Metric semantics, fallback boundaries and provenance.

[How it works](how_it_works.html#levenshtein-how-it-works)Backends

Internal, RapidFuzz, explicit GPL backend and pure Python.

[Backends and fallback](backends_and_fallbacks.html#levenshtein-backends)Ranking

Stable ties, `limit`, `key` and `score_cutoff`.

[Ranking and matching](ranking_and_matching.html#levenshtein-ranking)Corpus integration

Use normalized edit similarity as a retrieval scorer.

[Corpus integration](corpus_integration.html#levenshtein-corpus)Performance and limits

Complexity, streaming choices and what cutoff does today.

[Performance and limits](performance_and_limits.html#levenshtein-performance)

## Scope[#](#scope "Link to this heading")

The facade intentionally does ****not**** try to expose every feature from
RapidFuzz or the external `Levenshtein` project. It keeps one portable metric
contract and lets optional implementations accelerate it.

For transpositions, weighted operations, edit scripts, median strings or a
broader fuzzy-matching toolbox, use a specialized library directly.

## Examples[#](#examples "Link to this heading")

See [Levenshtein](../../auto_examples/levenshtein/index.html#levenshtein-examples) for executable, network-free examples.