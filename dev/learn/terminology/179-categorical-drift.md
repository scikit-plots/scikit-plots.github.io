🌊  ****Categorical Drift****

# Categorical Drift[#](#categorical-drift "Link to this heading")

**Shifts in the distribution of categorical feature values over time.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Categorical drift**** is a change over time in the ****distribution of categories**** between training
and production data. It is a form of data drift that specifically affects ****categorical features****
rather than continuous ones.

## What happens[#](#what-happens "Link to this heading")

The ****frequency of categories**** shifts — if 80% of customers came from **Region A** in training but
only 40% do in production, the feature has drifted. This ****hurts models**** trained on the old mix:
predictions skew, once-rare categories become common, and entirely ****unseen categories**** can appear
in production that the model never learned.

## Detecting it[#](#detecting-it "Link to this heading")

Standard tools compare category frequencies. A ****chi-square test**** weighs observed against expected
counts; ****Cramér’s V**** measures the strength of the shift; and the ****Population Stability Index
(PSI)**** quantifies how much a categorical distribution has moved.

## Where it bites[#](#where-it-bites "Link to this heading")

The effects are concrete. In ****e-commerce****, a recommender fails when new products dominate. In
****healthcare****, a diagnosis model degrades as disease-code frequencies change. In ****finance****, fraud
detection weakens as transaction types (online, POS, crypto) shift — each a categorical drift the
monitoring must catch.

---

**Theme:** [Distribution Shift & Drift](index.html#term-theme-drift)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Cramér’s V](180-cramer-s-v.html) · [Data Drift](331-data-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html) · [Drift Detection](138-drift-detection.html)

---

> **Hint**
> ****More in Distribution Shift & Drift****

[Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Categorical Drift](https://insightful-data-lab.com/2025/08/23/categorical-drift/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)