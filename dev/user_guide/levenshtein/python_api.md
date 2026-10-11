# Python API[#](#python-api "Link to this heading")

## Metrics[#](#metrics "Link to this heading")

|  |  |
| --- | --- |
| [`distance`](generated/scikitplot.levenshtein.distance.html#scikitplot.levenshtein.distance "scikitplot.levenshtein.distance")(a, b, \*[, backend, strict]) | Return the Levenshtein edit distance between two sequences. |
| [`similarity`](generated/scikitplot.levenshtein.similarity.html#scikitplot.levenshtein.similarity "scikitplot.levenshtein.similarity")(a, b, \*[, backend, strict]) | Return `max(len(a), len(b)) - distance(a, b)`. |
| [`normalized_distance`](generated/scikitplot.levenshtein.normalized_distance.html#scikitplot.levenshtein.normalized_distance "scikitplot.levenshtein.normalized_distance")(a, b, \*[, backend, strict]) | Return distance normalised to `[0, 1]` by maximum sequence length. |
| [`normalized_similarity`](generated/scikitplot.levenshtein.normalized_similarity.html#scikitplot.levenshtein.normalized_similarity "scikitplot.levenshtein.normalized_similarity")(a, b, \*[, backend, strict]) | Return normalised Levenshtein similarity in `[0, 1]`. |

## Matching[#](#matching "Link to this heading")

|  |  |
| --- | --- |
| [`rank`](generated/scikitplot.levenshtein.rank.html#scikitplot.levenshtein.rank "scikitplot.levenshtein.rank")(query, choices, \*[, key, limit, ...]) | Rank choices from most to least similar to **query**. |
| [`closest`](generated/scikitplot.levenshtein.closest.html#scikitplot.levenshtein.closest "scikitplot.levenshtein.closest")(query, choices, \*[, key, ...]) | Return the closest choice, or `None` for an empty iterable. |
| [`Match`](generated/scikitplot.levenshtein.Match.html#scikitplot.levenshtein.Match "scikitplot.levenshtein.Match")(choice, distance, similarity, index[, ...]) | One ranked fuzzy-match result with actual backend provenance. |

## Backends[#](#backends "Link to this heading")

|  |  |
| --- | --- |
| [`backend_info`](generated/scikitplot.levenshtein.backend_info.html#scikitplot.levenshtein.backend_info "scikitplot.levenshtein.backend_info")([name]) | Return capability information for one backend. |
| [`available_backends`](generated/scikitplot.levenshtein.available_backends.html#scikitplot.levenshtein.available_backends "scikitplot.levenshtein.available_backends")(\*[, include\_gpl]) | Return backend capability records in preferred order. |
| [`BackendInfo`](generated/scikitplot.levenshtein.BackendInfo.html#scikitplot.levenshtein.BackendInfo "scikitplot.levenshtein.BackendInfo")(name, available, version, ...[, ...]) | Read-only description of one implementation backend. |

## Corpus bridge[#](#corpus-bridge "Link to this heading")

|  |  |
| --- | --- |
| [`make_corpus_scorer`](generated/scikitplot.levenshtein.make_corpus_scorer.html#scikitplot.levenshtein.make_corpus_scorer "scikitplot.levenshtein.make_corpus_scorer")(\*[, backend, strict, ...]) | Return a scorer compatible with `corpus.CustomRetrievalIndex`. |

Public names are defined by `scikitplot.levenshtein._core.__all__` and
re-exported by the package facade.