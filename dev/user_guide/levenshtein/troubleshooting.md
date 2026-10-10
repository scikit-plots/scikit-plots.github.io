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

## A warning appears repeatedly during a large rank[#](#a-warning-appears-repeatedly-during-a-large-rank "Link to this heading")

Current ranking resolves backend state per choice. If a selected accelerator
fails at runtime, repeated choices can therefore repeat fallback work/warnings.

This is tracked as `LV-002`. Until the per-operation execution plan lands,
prefer a known-ready backend explicitly in performance-sensitive loops.

## My strings look the same but distance is non-zero[#](#my-strings-look-the-same-but-distance-is-non-zero "Link to this heading")

Check Unicode normalization, invisible characters, case and whitespace.
The facade intentionally compares exactly what it receives.

## Corpus returns fewer than `top_k` hits[#](#corpus-returns-fewer-than-top-k-hits "Link to this heading")

If the scorer has `score_cutoff` configured, candidates below the threshold
are removed. `top_k` is a maximum, not a minimum.