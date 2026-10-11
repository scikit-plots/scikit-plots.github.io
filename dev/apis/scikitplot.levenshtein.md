# scikitplot.levenshtein[#](#module-scikitplot.levenshtein "Link to this heading")

Levenshtein distance facade with safe optional acceleration.

`scikitplot.levenshtein` is always importable. The default backend chain is
bundled Cython -> RapidFuzz -> dependency-free Python. The GPL-licensed
`Levenshtein` package is available only when explicitly requested.

****User guide.**** See the [Levenshtein distance and fuzzy matching](../user_guide/levenshtein/index.html#levenshtein-index) section for further details.

## Backend-neutral Levenshtein edit distance helpers.[#](#backend-neutral-levenshtein-edit-distance-helpers "Link to this heading")

|  |  |
| --- | --- |
| [`BackendInfo`](../user_guide/levenshtein/generated/scikitplot.levenshtein.BackendInfo.html#scikitplot.levenshtein.BackendInfo "scikitplot.levenshtein.BackendInfo") | Read-only description of one implementation backend. |
| [`Match`](../user_guide/levenshtein/generated/scikitplot.levenshtein.Match.html#scikitplot.levenshtein.Match "scikitplot.levenshtein.Match") | One ranked fuzzy-match result with actual backend provenance. |
| [`available_backends`](../user_guide/levenshtein/generated/scikitplot.levenshtein.available_backends.html#scikitplot.levenshtein.available_backends "scikitplot.levenshtein.available_backends") | Return backend capability records in preferred order. |
| [`backend_info`](../user_guide/levenshtein/generated/scikitplot.levenshtein.backend_info.html#scikitplot.levenshtein.backend_info "scikitplot.levenshtein.backend_info") | Return capability information for one backend. |
| [`closest`](../user_guide/levenshtein/generated/scikitplot.levenshtein.closest.html#scikitplot.levenshtein.closest "scikitplot.levenshtein.closest") | Return the closest choice, or `None` for an empty iterable. |
| [`distance`](../user_guide/levenshtein/generated/scikitplot.levenshtein.distance.html#scikitplot.levenshtein.distance "scikitplot.levenshtein.distance") | Return the Levenshtein edit distance between two sequences. |
| [`make_corpus_scorer`](../user_guide/levenshtein/generated/scikitplot.levenshtein.make_corpus_scorer.html#scikitplot.levenshtein.make_corpus_scorer "scikitplot.levenshtein.make_corpus_scorer") | Return a scorer compatible with `corpus.CustomRetrievalIndex`. |
| [`normalized_distance`](../user_guide/levenshtein/generated/scikitplot.levenshtein.normalized_distance.html#scikitplot.levenshtein.normalized_distance "scikitplot.levenshtein.normalized_distance") | Return distance normalised to `[0, 1]` by maximum sequence length. |
| [`normalized_similarity`](../user_guide/levenshtein/generated/scikitplot.levenshtein.normalized_similarity.html#scikitplot.levenshtein.normalized_similarity "scikitplot.levenshtein.normalized_similarity") | Return normalised Levenshtein similarity in `[0, 1]`. |
| [`rank`](../user_guide/levenshtein/generated/scikitplot.levenshtein.rank.html#scikitplot.levenshtein.rank "scikitplot.levenshtein.rank") | Rank choices from most to least similar to **query**. |
| [`similarity`](../user_guide/levenshtein/generated/scikitplot.levenshtein.similarity.html#scikitplot.levenshtein.similarity "scikitplot.levenshtein.similarity") | Return `max(len(a), len(b)) - distance(a, b)`. |