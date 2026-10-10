# Getting started[#](#getting-started "Link to this heading")

## Classic edit distance[#](#classic-edit-distance "Link to this heading")

Levenshtein distance is the minimum number of single-element insertions,
deletions and substitutions needed to transform one sequence into another.

```
from scikitplot.levenshtein import distance

distance("kitten", "sitting")
# 3

```

The three edits are one substitution, another substitution, and one insertion.

## Normalized similarity[#](#normalized-similarity "Link to this heading")

For easier comparison across different lengths:

```
from scikitplot.levenshtein import normalized_similarity

score = normalized_similarity("kitten", "sitting")
assert 0.0 <= score <= 1.0

```

`1.0` means identical under the metric. `0.0` is the minimum normalized
similarity for unit-cost Levenshtein under this facade.

## Find the closest choice[#](#find-the-closest-choice "Link to this heading")

```
from scikitplot.levenshtein import closest

match = closest("levnshtein", ["Levenshtein", "Hamming", "Jaccard"])
print(match.choice, match.distance, match.similarity)

```

The returned `Match` also records the backend that actually produced
the score.

## Rank several choices[#](#rank-several-choices "Link to this heading")

```
from scikitplot.levenshtein import rank

matches = rank(
    "kitten",
    ["sitting", "kitten", "bitten", "written"],
    limit=3,
)

assert [item.choice for item in matches] == [
    "kitten",
    "bitten",
    "sitting",
]

```

## Next[#](#next "Link to this heading")

Read [Backends and fallback](backends_and_fallbacks.html#levenshtein-backends) before selecting an accelerator explicitly.