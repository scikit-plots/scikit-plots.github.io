🌊  ****Energy Distance****

# Energy Distance[#](#energy-distance "Link to this heading")

**A distance between distributions used to test whether two samples differ.**

## What it is[#](#what-it-is "Link to this heading")

****Energy distance**** is a ****statistical distance**** between two probability distributions \(P\)
and \(Q\), built from ****expected pairwise distances**** between samples. It is ****0 exactly when
the distributions are identical****, and grows as they differ — making it a natural ****two-sample
test****, in the same family as MMD.

## The formula[#](#the-formula "Link to this heading")

For \(X \sim P\) and \(Y \sim Q\),

\[D\_E^2(P, Q) = 2\, \mathbb{E}\|X - Y\| - \mathbb{E}\|X - X'\| - \mathbb{E}\|Y - Y'\|,\]

where \(X, X'\) are independent draws from \(P\), \(Y, Y'\) from \(Q\), and
\(\|\cdot\|\) is the Euclidean norm. The empirical version replaces these expectations with
averages over the two samples — cross-distances minus within-distances.

## Properties[#](#properties "Link to this heading")

It is a true ****metric****: non-negative, symmetric, and zero iff \(P = Q\). Unlike MMD it is
****kernel-free****, working directly with Euclidean distances, and like MMD it stays sensitive in
****high dimensions**** where the KS test fails. Both energy distance and MMD are ****integral
probability metrics****.

## Where it’s used, with an example[#](#where-it-s-used-with-an-example "Link to this heading")

It serves ****two-sample testing****, ****drift detection**** (training vs production), ****GAN evaluation****
and ****clustering validation****. Comparing two customer-age distributions, an energy distance of
****0.15**** says they are fairly similar, while ****1.2**** signals a real difference — perhaps a much
younger incoming sample.

---

****Mind map — connected ideas****

> [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Representation Shift](174-representation-shift.html) · [Drift Detection](138-drift-detection.html) · [Maximum Mean Discrepancy (MMD)](177-maximum-mean-discrepancy-mmd.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html) · [Data Drift](331-data-drift.html)

---

****More in Distribution Shift & Drift****

> [Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html)

---

**Theme:** Distribution Shift & Drift  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Energy Distance](https://insightful-data-lab.com/2025/08/23/energy-distance/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)