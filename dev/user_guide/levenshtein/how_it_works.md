# How it works[#](#how-it-works "Link to this heading")

## Metric contract[#](#metric-contract "Link to this heading")

The public metric uses unit costs:

```
insertion     1
deletion      1
substitution  1

```

For two sequences `a` and `b`:

```
D = distance(a, b)
M = max(len(a), len(b))

similarity            = M - D
normalized_distance    = D / M
normalized_similarity  = 1 - D / M

```

For two empty sequences, normalized distance is `0.0` and normalized
similarity is `1.0`.

## No hidden preprocessing[#](#no-hidden-preprocessing "Link to this heading")

The facade does not silently:

* lowercase;
* Unicode-normalize;
* strip punctuation;
* tokenize;
* remove whitespace.

That keeps distance semantics explicit and reproducible.

For ranking, preprocess through `key=` when that is what your application
means:

```
from scikitplot.levenshtein import rank

rank(
    "SCIKIT PLOTS",
    ["scikit plots", "scikit-learn"],
    key=str.casefold,
)

```

## Backend selection and execution[#](#backend-selection-and-execution "Link to this heading")

Automatic availability selection prefers:

```
bundled internal -> RapidFuzz -> pure Python

```

The external GPL `Levenshtein` package is never selected automatically.

There is an important implementation distinction:

* ****availability fallback**** chooses a usable backend before computation;
* ****runtime fallback**** handles an accelerator that fails while computing.

Today a runtime accelerator failure falls directly to pure Python. Maintenance
finding `LV-001` tracks a future per-operation execution plan that can try
the remaining safe accelerator first.

## Provenance[#](#provenance "Link to this heading")

Ranking results store the backend that actually computed each match:

```
from scikitplot.levenshtein import rank

item = rank("kitten", ["sitting"], backend="python")[0]
assert item.backend == "python"

```

The Corpus bridge preserves the same provenance in retrieval metadata.