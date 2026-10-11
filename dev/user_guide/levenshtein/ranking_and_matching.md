# Ranking and matching[#](#ranking-and-matching "Link to this heading")

## Stable ranking[#](#stable-ranking "Link to this heading")

[`rank`](generated/scikitplot.levenshtein.rank.html#scikitplot.levenshtein.rank "scikitplot.levenshtein.rank") orders results by:

```
highest normalized similarity
then lowest raw distance
then original input position

```

The last rule makes ties deterministic.

```
from scikitplot.levenshtein import rank

result = rank("mat", ["cat", "bat", "hat"], backend="python")
assert [item.choice for item in result] == ["cat", "bat", "hat"]

```

## Limit[#](#limit "Link to this heading")

`limit` bounds the number of returned matches.

With a positive limit the implementation keeps only `O(limit)` candidate
matches rather than materializing a complete match list before truncation.

`limit=0` is special: it returns immediately and does not consume a generator.

## Score cutoff[#](#score-cutoff "Link to this heading")

`score_cutoff` is normalized similarity in `[0, 1]`:

```
rank(
    "kitten",
    ["kitten", "bitten", "completely different"],
    score_cutoff=0.7,
)

```

Only matches at or above the threshold remain.

> **Important**
> The cutoff is currently a ****semantic post-computation filter****. It does not
promise backend-native early termination. That distinction keeps behavior
identical across internal, RapidFuzz and pure-Python implementations.

## Custom extraction with `key`[#](#custom-extraction-with-key "Link to this heading")

Use `key` when choices are objects or when preprocessing is application
policy:

```
records = [
    {"name": "scikit plots"},
    {"name": "scikit learn"},
]

matches = rank(
    "Scikit Plots",
    records,
    key=lambda row: row["name"].casefold(),
)

```

This is intentionally explicit; the distance functions themselves do no hidden
preprocessing.

## Closest[#](#closest "Link to this heading")

[`closest`](generated/scikitplot.levenshtein.closest.html#scikitplot.levenshtein.closest "scikitplot.levenshtein.closest") is equivalent to ranking with `limit=1`.

It returns `None` when:

* the iterable is empty; or
* `score_cutoff` filters every choice.