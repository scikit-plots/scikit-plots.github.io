🌊  ****Covariate Drift (a.k.a. Covariate Shift)****

# Covariate Drift (a.k.a. Covariate Shift)[#](#covariate-drift-a-k-a-covariate-shift "Link to this heading")

**A change in the input distribution while the input-output relationship holds.**

## What it is[#](#what-it-is "Link to this heading")

****Covariate drift**** (covariate shift) is a change in the distribution of the ****input features**** a model sees
— the production inputs no longer look like the training inputs — while the feature-to-label rule stays the
same:

\[p\_{\text{train}}(x) \neq p\_{\text{prod}}(x), \qquad p(y \mid x)\ \text{unchanged}.\]

The model is being asked about a ****different population**** than it learned on.

## How it differs[#](#how-it-differs "Link to this heading")

It is one of three ****dataset shifts****. ****Covariate drift**** moves ****p(x)**** (the inputs), ****label drift**** moves
****p(y)**** (the target mix), and ****concept drift**** moves ****p(y | x)**** (the relationship itself). Only concept
drift changes the **rule**; covariate drift changes **who** you’re scoring.

## Detecting and fixing it[#](#detecting-and-fixing-it "Link to this heading")

It is caught by comparing feature distributions per column with ****PSI**** or the ****KS**** test. Remedies include
****importance weighting**** — reweighting training points by the density ratio
\(w(x) = p\_{\text{prod}}(x) / p\_{\text{train}}(x)\) — retraining on ****recent**** data, and building
****robust**** features (winsorized, log-scaled, sensible bins).

---

**Theme:** [Distribution Shift & Drift](index.html#term-theme-drift)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html) · [Concept Drift](330-concept-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Data Drift](331-data-drift.html) · [Drift Detection](138-drift-detection.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html)

---

> **Hint**
> ****More in Distribution Shift & Drift****

[Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Covariate Drift (a.k.a. Covariate Shift)](https://insightful-data-lab.com/2025/08/19/covariate-drift-a-k-a-covariate-shift/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)