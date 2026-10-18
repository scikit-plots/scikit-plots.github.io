# Python API[#](#python-api "Link to this heading")

Every public name lives in [`scikitplot.levenshtein`](../../apis/scikitplot.levenshtein.html#module-scikitplot.levenshtein "scikitplot.levenshtein"). The generated
reference pages carry the full signatures; this page says what each one is for.

## Metrics[#](#metrics "Link to this heading")

`distance(a, b, *, backend="auto", strict=False) -> int`
:   Unit-cost Levenshtein edit distance between two strings, byte strings or
    sequences.

`normalized_distance(a, b, ...) -> float`
:   `distance / max(len(a), len(b))` in `[0, 1]`; two empty inputs give
    `0.0`.

`normalized_similarity(a, b, ...) -> float`
:   `1 - normalized_distance`; two empty inputs give `1.0`.

`similarity(a, b, ...) -> int`
:   `max(len(a), len(b)) - distance(a, b)`.

## Ranking[#](#ranking "Link to this heading")

`rank(query, choices, *, key=None, limit=None, score_cutoff=0.0, backend="auto", strict=False) -> list[Match]`
:   Every choice ordered by similarity, then distance, then input position.

`closest(query, choices, ...) -> Match or None`
:   The first result of `rank` with `limit=1`.

`Match`
:   One ranked result: `choice`, `distance`, `similarity`, `index` and
    the `backend` that actually computed the distance.

## Backends[#](#backends "Link to this heading")

`backend_info(name="auto") -> BackendInfo`
:   Capability record of one backend; `"auto"` describes the backend that
    would be used now.

`available_backends(*, include_gpl=True) -> tuple[BackendInfo, ...]`
:   Records for `internal`, `rapidfuzz`, `levenshtein` (unless
    `include_gpl=False`) and `python`, in preference order.

`BackendInfo`
:   Read-only record: `name`, `available`, `version`, `license`,
    `implementation` and, when unavailable, `reason`. `to_dict()`
    returns it as a mapping.

## Corpus[#](#corpus "Link to this heading")

This module does not import Corpus. Corpus ranks documents with it through
[`scikitplot.corpus.make_levenshtein_ranker`](../../modules/generated/scikitplot.corpus.make_levenshtein_ranker.html#scikitplot.corpus.make_levenshtein_ranker "scikitplot.corpus.make_levenshtein_ranker"); see
[Corpus integration](corpus_integration.html#levenshtein-corpus).