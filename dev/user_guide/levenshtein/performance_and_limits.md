# Performance and limits[#](#performance-and-limits "Link to this heading")

## Pure-Python complexity[#](#pure-python-complexity "Link to this heading")

The fallback uses a memory-bounded Wagner–Fischer dynamic program.

For lengths `N` and `M`:

* time is `O(N*M)`;
* working memory is `O(min(N, M))`.

Accelerators can use substantially faster implementations for unit-cost edit
distance, but the public result must remain identical.

## Ranking cost[#](#ranking-cost "Link to this heading")

Ranking performs one distance computation per consumed choice.

`limit` reduces retained match memory, not the number of choices evaluated.
A top-k ranking still examines every input candidate.

`score_cutoff` currently filters after exact computation and therefore is not
a performance bound.

## Large collections[#](#large-collections "Link to this heading")

For large corpora, do not use edit distance as an accidental all-pairs search
engine.

Prefer a staged design:

```
lexical/vector candidate retrieval
           ↓
     small candidate set
           ↓
     Levenshtein reranking

```

This gives edit distance the role it is best at: local spelling/sequence
similarity rather than semantic retrieval.

## Unicode[#](#unicode "Link to this heading")

Distance operates on the sequence Python receives. Canonically equivalent
Unicode spellings can therefore have non-zero edit distance.

Normalize explicitly when your application requires that:

```
import unicodedata

normalize = lambda s: unicodedata.normalize("NFC", s)

left = normalize("cafe\u0301")
right = normalize("café")

```

No normalization is implicit because that would change metric semantics.

## Backend probing[#](#backend-probing "Link to this heading")

Capability discovery should not be placed inside extremely hot application
loops. `rank()` resolves the backend once per call, not once per candidate:
this resolved maintenance finding `LV-002`. A call per item in your own loop
still resolves once per call.