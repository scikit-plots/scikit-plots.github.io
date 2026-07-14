🌊  ****Label Drift (a.k.a. Target Drift)****

# Label Drift (a.k.a. Target Drift)[#](#label-drift-a-k-a-target-drift "Link to this heading")

**A change over time in the distribution of the target variable.**

## What it is[#](#what-it-is "Link to this heading")

****Label drift**** (target drift) is a change in the distribution of the ****target**** itself — the ****class
balance**** or outcome mix shifts between training and production, \(p\_{\text{train}}(y) \neq
p\_{\text{prod}}(y)\), even when the feature-to-label relationship may be unchanged. A fraud rate that creeps
from 1% to 3% is label drift.

## How it differs[#](#how-it-differs "Link to this heading")

Like covariate drift it is a ****dataset shift****, but it moves ****p(y)**** rather than ****p(x)**** or ****p(y | x)****.
Because most classifiers implicitly assume the ****base rate**** they trained on, a shifted target distribution
can throw off ****calibrated probabilities**** and ****thresholds**** even if each input still maps to the right
answer.

## Detecting and fixing it[#](#detecting-and-fixing-it "Link to this heading")

Monitor the ****label**** or ****prediction**** distribution over time (PSI on predicted classes, tracked class
proportions). Fixes include ****recalibrating**** decision thresholds to the new base rate, ****reweighting**** or
resampling to the current mix, and ****retraining**** on recent labels.

---

**Theme:** [Distribution Shift & Drift](index.html#term-theme-drift)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Concept Drift](330-concept-drift.html) · [Dataset Shift](353-dataset-shift.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html) · [Data Drift](331-data-drift.html) · [Drift Detection](138-drift-detection.html)

---

> **Hint**
> ****More in Distribution Shift & Drift****

[Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Label Drift (a.k.a. Target Drift)](https://insightful-data-lab.com/2025/08/19/label-drift-a-k-a-target-drift/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)