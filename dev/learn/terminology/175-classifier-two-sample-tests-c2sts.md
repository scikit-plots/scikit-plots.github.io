🌊  ****Classifier Two-Sample Tests (C2STs)****

# Classifier Two-Sample Tests (C2STs)[#](#classifier-two-sample-tests-c2sts "Link to this heading")

**Testing for shift by checking whether a classifier can tell two samples apart.**

## What it is[#](#what-it-is "Link to this heading")

A ****classifier two-sample test (C2ST)**** checks whether two datasets come from the ****same
distribution**** by ****training a classifier to tell them apart****. If the classifier ****can’t**** beat
chance, the distributions are likely the same; if it ****can**** separate them well, they differ — a
distribution shift. It is a modern, high-dimensional-friendly alternative to classical tests like
the KS test, MMD or energy distance.

## How it works[#](#how-it-works "Link to this heading")

Three steps. ****Label**** dataset A as 0 (say training data) and dataset B as 1 (production). ****Train****
a classifier — logistic regression, random forest, neural net — to predict which set a sample came
from. ****Evaluate****: accuracy near ****50%**** means the two are indistinguishable (same distribution),
while accuracy well above 50% (or a high AUC) signals they differ.

## The hypothesis test[#](#the-hypothesis-test "Link to this heading")

Formally it tests \(H\_0: P = Q\) against \(H\_1: P \neq Q\), using ****classifier accuracy or
AUC**** as the test statistic and ****permutation testing or bootstrapping**** to get a p-value. Its
strengths are working in ****very high dimensions**** (where KS or chi-square fail) and using
off-the-shelf classifiers; its costs are the ****compute**** of training, ****sensitivity to classifier
choice****, and the need for enough data.

## Where it’s used[#](#where-it-s-used "Link to this heading")

C2STs power ****data-drift detection**** (train vs production), ****generative-model evaluation**** (real vs
generated), and ****bias detection**** (comparing subgroups). Concretely: with 10,000 samples from 2024
and 10,000 from 2025, an XGBoost separator reaching ****AUC 0.90**** means the two are easily
distinguishable — strong drift.

---

****Mind map — connected ideas****

> [Representation Shift](174-representation-shift.html) · [Drift Detection](138-drift-detection.html) · [Energy Distance](176-energy-distance.html) · [Data Drift](331-data-drift.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html) · [Maximum Mean Discrepancy (MMD)](177-maximum-mean-discrepancy-mmd.html)

---

****More in Distribution Shift & Drift****

> [Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html)

---

**Theme:** [Distribution Shift & Drift](index.html#term-theme-drift)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Classifier Two-Sample Tests (C2STs)](https://insightful-data-lab.com/2025/08/23/classifier-two-sample-tests-c2sts/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)