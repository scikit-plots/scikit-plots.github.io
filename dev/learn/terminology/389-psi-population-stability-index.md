🌊  ****PSI (Population Stability Index)****

# PSI (Population Stability Index)[#](#psi-population-stability-index "Link to this heading")

**A widely used score measuring how much a distribution has shifted.**

## What it is[#](#what-it-is "Link to this heading")

The ****Population Stability Index**** measures how much a variable’s distribution has ****shifted**** between a
****reference**** (“expected”) sample and a ****current**** (“actual”) one — usually training vs production. It bins
the variable and sums the per-bin discrepancy:

\[\text{PSI} = \sum\_{b} (A\_b - E\_b)\,\ln\!\frac{A\_b}{E\_b},\]

over bins \(b\). It is ****0**** when the distributions match and grows without bound as they diverge.

## How it’s computed[#](#how-it-s-computed "Link to this heading")

Choose ****bins**** (often 10, by quantile or equal width) using the ****same edges**** for both samples, take each
bin’s ****proportion**** in the expected and actual data, and sum the term above across bins. It is closely
related to a ****symmetrized KL divergence****.

## Reading it[#](#reading-it "Link to this heading")

The rules of thumb are ****< 0.1**** stable, ****0.1–0.25**** moderate drift (****watch****), and ****> 0.25**** significant
drift (****retrain****). Two cautions: an ****empty bin**** makes PSI undefined or unbounded (so proportions are
clipped), and PSI tends to ****rise with sample size****, so thresholds may need tuning.

---

**Theme:** [Distribution Shift & Drift](index.html#term-theme-drift)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Data Drift](331-data-drift.html) · [Drift Detection](138-drift-detection.html)

---

> **Hint**
> ****More in Distribution Shift & Drift****

[Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [PSI (Population Stability Index)](https://insightful-data-lab.com/2025/08/19/psi-population-stability-index/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)