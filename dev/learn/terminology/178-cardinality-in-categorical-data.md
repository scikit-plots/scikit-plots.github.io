🌊  ****Cardinality in Categorical Data****

# Cardinality in Categorical Data[#](#cardinality-in-categorical-data "Link to this heading")

**The number of distinct values a categorical feature can take.**

## What it is[#](#what-it-is "Link to this heading")

****Cardinality**** is the number of ****unique categories**** in a categorical feature. `Gender` has just
two values — ****low cardinality****; a `Zip Code` field has thousands — ****high cardinality****. The
distinction matters because it changes how features should be measured and encoded.

## Why it matters for association[#](#why-it-matters-for-association "Link to this heading")

Cardinality directly affects measures like ****Cramér’s V****, which divides by the smaller table
dimension \(k = \min(\text{rows}, \text{cols})\). With ****low cardinality**** (Gender, Yes/No) the
statistic is easy to read — Gender versus product preference giving V = 0.3 is a clear moderate
association. With ****high cardinality**** (zip codes, product IDs) it grows unreliable: many categories
have tiny counts, the chi-square statistic inflates, and an association can look strong when it is
really just ****sparsity****.

## Handling high cardinality[#](#handling-high-cardinality "Link to this heading")

Three remedies. ****Group**** rare categories into an “Other” bucket. Use ****target encoding**** or
****frequency encoding**** rather than raw category comparison. And if using Cramér’s V, ensure the
****sample is large enough**** that expected cell counts are not tiny.

## An example[#](#an-example "Link to this heading")

Comparing `City` (100 categories) against `Purchase` (Yes/No) might yield Cramér’s V of ****0.6****,
suggesting a strong link — but that can simply reflect ****too few samples per city****, not a real
effect of city on purchasing.

---

****Mind map — connected ideas****

> [Categorical Drift](179-categorical-drift.html) · [Cramér’s V](180-cramer-s-v.html) · [Embedding](173-embedding.html) · [Data Drift](331-data-drift.html) · [Drift Detection](138-drift-detection.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html)

---

****More in Distribution Shift & Drift****

> [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html)

---

**Theme:** Distribution Shift & Drift  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Cardinality in Categorical Data](https://insightful-data-lab.com/2025/08/23/cardinality-in-categorical-data/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)