# Troubleshooting[#](#troubleshooting "Link to this heading")

## An explicit backend is unavailable[#](#an-explicit-backend-is-unavailable "Link to this heading")

Inspect it first:

```
from scikitplot.levenshtein import backend_info

print(backend_info("rapidfuzz").to_dict())

```

For a hard requirement, use `strict=True` so absence cannot silently select
another implementation.

## The internal backend is unavailable in a source checkout[#](#the-internal-backend-is-unavailable-in-a-source-checkout "Link to this heading")

A source tree may not contain the compiled `bycython` extension.

That is not fatal:

* `auto` can use RapidFuzz when installed;
* otherwise it uses pure Python.

A built wheel/install should provide the bundled compiled backend according to
the normal Scikit-Plots build.

## I installed `python-Levenshtein` but auto does not use it[#](#i-installed-python-levenshtein-but-auto-does-not-use-it "Link to this heading")

This is intentional.

The external `Levenshtein` package is GPL-2.0-or-later and is explicit-only
in this facade:

```
from scikitplot.levenshtein import distance

distance("kitten", "sitting", backend="levenshtein")

```

## A warning appears during a large rank[#](#a-warning-appears-during-a-large-rank "Link to this heading")

One `rank()` call emits at most one warning for an unavailable requested
backend and at most one per backend that fails at runtime; each match still
names the backend that computed it. Repeated warnings across many `rank()`
calls mean the backend is unavailable or failing in every call: pass a backend
that [`available_backends`](../../modules/generated/scikitplot.levenshtein.available_backends.html#scikitplot.levenshtein.available_backends "scikitplot.levenshtein.available_backends") reports as available. (Before `LV-002` was
resolved, one call could warn once per choice.)

## My strings look the same but distance is non-zero[#](#my-strings-look-the-same-but-distance-is-non-zero "Link to this heading")

Check Unicode normalization, invisible characters, case and whitespace.
The facade intentionally compares exactly what it receives.

## Corpus returns fewer than `top_k` hits[#](#corpus-returns-fewer-than-top-k-hits "Link to this heading")

If the scorer has `score_cutoff` configured, candidates below the threshold
are removed. `top_k` is a maximum, not a minimum.