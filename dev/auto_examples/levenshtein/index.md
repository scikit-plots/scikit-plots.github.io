# Levenshtein[#](#levenshtein "Link to this heading")

These examples form a small learning path for exact edit distance and fuzzy
ranking. They are deterministic, local and network-free.

```
two sequences
     ↓
unit-cost edit distance
     ↓
normalized similarity
     ↓
optional ranking / cutoff
     ↓
actual backend provenance

```

## Start here[#](#start-here "Link to this heading")

1. ****Basics**** — the classic `kitten` → `sitting` distance and normalized
   metrics.
2. ****Backends**** — inspect internal, RapidFuzz, explicit GPL and pure-Python
   capabilities without requiring any optional backend to be installed.
3. ****Ranking**** — stable ties, `limit`, `score_cutoff` and object `key`.
4. ****Sequences**** — bytes, token sequences and explicit Unicode normalization.
5. ****Corpus**** — use Levenshtein as a deterministic local Corpus retrieval
   scorer.

## Reliability rules[#](#reliability-rules "Link to this heading")

Every script:

* uses only local literal data;
* performs no network access or downloads;
* has a pure-Python path;
* asserts the result it demonstrates;
* does not turn a wrong distance into a skip.

An unavailable optional accelerator can be reported as unavailable. Metric
correctness cannot be skipped.

## Backend note[#](#backend-note "Link to this heading")

`auto` never chooses the external GPL `Levenshtein` backend. The examples
do not require it.

The gallery demonstrates the facade contract rather than benchmarking one
machine’s accelerator installation.

![](../../_images/sphx_glr_plot_levenshtein_backends_script_thumb.png)

[Backend discovery and safe fallback](plot_levenshtein_backends_script.html)

Backend discovery and safe fallback![](../../_images/sphx_glr_plot_levenshtein_basics_script_thumb.png)

[Levenshtein basics](plot_levenshtein_basics_script.html)

Levenshtein basics![](../../_images/sphx_glr_plot_levenshtein_corpus_script_thumb.png)

[Use Levenshtein with Corpus](plot_levenshtein_corpus_script.html)

Use Levenshtein with Corpus![](../../_images/sphx_glr_plot_levenshtein_ranking_script_thumb.png)

[Rank fuzzy matches](plot_levenshtein_ranking_script.html)

Rank fuzzy matches![](../../_images/sphx_glr_plot_levenshtein_sequences_script_thumb.png)

[Sequences and explicit normalization](plot_levenshtein_sequences_script.html)

Sequences and explicit normalization