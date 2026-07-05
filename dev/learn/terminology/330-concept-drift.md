🌊  ****Concept Drift****

# Concept Drift[#](#concept-drift "Link to this heading")

**When the relationship between inputs and target changes over time.**

## What it is[#](#what-it-is "Link to this heading")

****Concept drift**** is a change in the ****relationship**** between inputs and the outcome — formally a shift in
\(P(Y \mid X)\). The inputs can look ****identical****, but what they **mean** for the target has changed: the
rules the model learned no longer hold.

## Why it’s dangerous[#](#why-it-s-dangerous "Link to this heading")

Because the input distribution may look ****normal****, concept drift is ****hard to detect**** — the model keeps
predicting ****confidently**** while being ****wrong****. It shows up as a ****decline**** in accuracy, F1, or business
KPIs, which is why performance is monitored on ****labeled**** or delayed data, aided by detectors like
****ADWIN****, ****DDM****, or ****Page-Hinkley****.

## Its forms and fix[#](#its-forms-and-fix "Link to this heading")

Drift can be ****sudden**** (a regime change), ****gradual****, ****incremental****, or ****recurring**** (seasonal patterns
that revert). The remedy is ****retraining**** on fresh labeled data that reflects the new relationship — the
reason production models need continuous ****monitoring**** and update loops.

---

****Mind map — connected ideas****

> [Data Drift](331-data-drift.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Drift Detection](138-drift-detection.html) · [Dataset Shift](353-dataset-shift.html) · [Model Stability](187-model-stability.html)

---

****More in Distribution Shift & Drift****

> [Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html)

---

**Theme:** Distribution Shift & Drift  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Concept Drift](https://insightful-data-lab.com/2025/08/20/concept-drift/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)