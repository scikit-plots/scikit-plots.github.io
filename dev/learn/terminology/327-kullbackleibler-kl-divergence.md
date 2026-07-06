🌊  ****Kullback–Leibler (KL) Divergence****

# Kullback–Leibler (KL) Divergence[#](#kullbackleibler-kl-divergence "Link to this heading")

**An asymmetric measure of how one distribution differs from another.**

## What it is[#](#what-it-is "Link to this heading")

****KL divergence**** measures how much one probability distribution ****P**** differs from a reference ****Q**** — the
****relative entropy****, the expected extra “surprise” from using Q when the truth is P:

\[D\_{\text{KL}}(P \,\|\, Q) = \sum\_{x} P(x)\,\log\!\frac{P(x)}{Q(x)} \;\ge\; 0,\]

(an integral for continuous distributions). It is ****0**** only when P = Q.

## Its quirks[#](#its-quirks "Link to this heading")

KL is ****asymmetric**** — \(D\_{\text{KL}}(P \| Q) \neq D\_{\text{KL}}(Q \| P)\) — so it is ****not a true
distance****, and it ****blows up**** when Q assigns zero probability where P doesn’t (it needs ****absolute
continuity****). It is a ****directed**** measure, not a symmetric metric.

## Where it’s used[#](#where-it-s-used "Link to this heading")

It is the core of ****variational**** methods (the VAE loss), of ****feature selection****, and of ****drift
detection****, where it behaves much like ****PSI**** — a solid default on large datasets, though its asymmetry
means you read it as a ****degree**** of drift, not a comparable distance.

---

****Mind map — connected ideas****

> [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Data Drift](331-data-drift.html) · [Statistical Tests](328-statistical-tests.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Cramér’s V](180-cramer-s-v.html)

---

****More in Distribution Shift & Drift****

> [Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html)

---

**Theme:** [Distribution Shift & Drift](index.html#term-theme-drift)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Kullback–Leibler (KL) Divergence](https://insightful-data-lab.com/2025/08/20/kullback-leibler-kl-divergence/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)