# Python API[#](#python-api "Link to this heading")

## Metrics[#](#metrics "Link to this heading")

|  |  |
| --- | --- |
| `distance`(a, b, \*[, backend, strict]) | Return the Levenshtein edit distance between two sequences. |
| `similarity`(a, b, \*[, backend, strict]) | Return `max(len(a), len(b)) - distance(a, b)`. |
| `normalized_distance`(a, b, \*[, backend, strict]) | Return distance normalised to `[0, 1]` by maximum sequence length. |
| `normalized_similarity`(a, b, \*[, backend, strict]) | Return normalised Levenshtein similarity in `[0, 1]`. |

## Matching[#](#matching "Link to this heading")

|  |  |
| --- | --- |
| `rank`(query, choices, \*[, key, limit, ...]) | Rank choices from most to least similar to **query**. |
| `closest`(query, choices, \*[, key, ...]) | Return the closest choice, or `None` for an empty iterable. |
| `Match`(choice, distance, similarity, index[, ...]) | One ranked fuzzy-match result with actual backend provenance. |

## Backends[#](#backends "Link to this heading")

|  |  |
| --- | --- |
| `backend_info`([name]) | Return capability information for one backend. |
| `available_backends`(\*[, include\_gpl]) | Return backend capability records in preferred order. |
| `BackendInfo`(name, available, version, ...[, ...]) | Read-only description of one implementation backend. |

## Corpus bridge[#](#corpus-bridge "Link to this heading")

|  |  |
| --- | --- |
| `make_corpus_scorer`(\*[, backend, strict, ...]) | Return a scorer compatible with `corpus.CustomRetrievalIndex`. |

Public names are defined by `scikitplot.levenshtein._core.__all__` and
re-exported by the package facade.