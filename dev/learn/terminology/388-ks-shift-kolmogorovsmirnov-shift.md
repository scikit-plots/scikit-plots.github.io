🌊  ****KS shift (Kolmogorov–Smirnov shift)****

# KS shift (Kolmogorov–Smirnov shift)[#](#ks-shift-kolmogorovsmirnov-shift "Link to this heading")

**Using the KS statistic to quantify distribution shift in a feature.**

## What it is[#](#what-it-is "Link to this heading")

****KS shift**** detects ****data drift**** in a ****continuous**** feature with the ****two-sample Kolmogorov–Smirnov
test**** — it compares the feature’s ****cumulative distribution**** in a reference window against the current
production window and measures their ****largest**** gap:

\[D = \sup\_{x}\,\big| F\_{\text{ref}}(x) - F\_{\text{prod}}(x) \big|.\]

A large ****D**** means the two samples likely come from ****different**** distributions.

## Why it’s used[#](#why-it-s-used "Link to this heading")

The KS test is ****non-parametric**** — it assumes ****no**** particular distribution shape — so it flags
****arbitrary**** changes in a numeric feature’s distribution. When ****D**** exceeds a ****critical value**** (or its
p-value falls below a threshold), the shift is ****statistically significant****.

## Using it in practice[#](#using-it-in-practice "Link to this heading")

At production scale, tiny shifts become “significant” on ****huge**** samples, so the threshold is ****calibrated****
to batch size to avoid ****alert fatigue****. KS shift complements ****PSI**** (which grades severity) and
****Chi-square**** (for categorical features) as part of a drift-monitoring suite.

---

**Theme:** [Distribution Shift & Drift](index.html#term-theme-drift)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Data Drift](331-data-drift.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Concept Drift](330-concept-drift.html)

---

> **Hint**
> ****More in Distribution Shift & Drift****

[Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [KS shift (Kolmogorov–Smirnov shift)](https://insightful-data-lab.com/2025/08/19/ks-shift-kolmogorov-smirnov-shift/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)