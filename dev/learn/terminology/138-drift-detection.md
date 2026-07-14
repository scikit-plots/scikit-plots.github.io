🌊  ****Drift Detection****

# Drift Detection[#](#drift-detection "Link to this heading")

**Monitoring for changes in data or target distributions that degrade a model.**

## What it is[#](#what-it-is "Link to this heading")

****Drift detection**** is the practice of ****monitoring for changes in the data distribution or
model behaviour over time**** that can erode performance. Because real-world data evolves —
seasonality, new users, shifting business conditions — a model that was accurate at launch can
silently decay, and drift detection is what ****triggers retraining or recalibration**** before
that decay bites.

## The three drifts[#](#the-three-drifts "Link to this heading")

****Covariate (feature) drift****: the input distribution moves — 80% desktop users become 60%
mobile. ****Label drift**** (prior shift): the target mix changes — fraud rises from 1% to 3%.
****Concept drift****: the **relationship** between features and label changes — the same features
no longer predict fraud because the tactics evolved. Only concept drift necessarily breaks the
learned mapping; the others may or may not.

## How it’s detected[#](#how-it-s-detected "Link to this heading")

Four families. ****Statistical tests**** compare old and new distributions (Kolmogorov–Smirnov,
chi-square, ****PSI**** — population stability index). ****Distance measures**** quantify the gap (KL
and Jensen–Shannon divergence, Wasserstein, MMD). ****Classifier two-sample tests**** train a
model to tell “old” from “new” — if it succeeds, the distributions differ. And ****performance
monitoring**** tracks loss or AUC over time, though as a **lagging** signal it only fires once
labels arrive.

## In practice[#](#in-practice "Link to this heading")

Set ****baselines**** from training data, compare ****rolling windows**** (last 24h vs last 4 weeks),
fire ****alerts**** past a threshold (e.g. PSI > 0.2), and wire the signal into the pipeline to
****retrain or recalibrate****. A credit model trained on 2022 data might, by 2025, see income
shift toward gig workers — PSI flags the covariate drift and the monitor flags concept drift,
triggering a retrain. The payoff is avoiding ****silent degradation****, protecting ****fairness****
(drift can hit subgroups unevenly), and meeting ****compliance**** demands for monitoring.

---

**Theme:** [Distribution Shift & Drift](index.html#term-theme-drift)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Data Drift](331-data-drift.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html) · [Recalibration](159-recalibration.html) · [Re-scoring](137-re-scoring.html)

---

> **Hint**
> ****More in Distribution Shift & Drift****

[Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Drift Detection](https://insightful-data-lab.com/2025/08/24/drift-detection/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)