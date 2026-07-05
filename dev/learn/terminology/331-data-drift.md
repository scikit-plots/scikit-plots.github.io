🌊  ****Data Drift****

# Data Drift[#](#data-drift "Link to this heading")

**When the distribution of input data shifts away from training.**

## What it is[#](#what-it-is "Link to this heading")

****Data drift**** — also called ****covariate shift**** — is a change in the ****input**** distribution \(P(X)\)
while the model itself stays ****fixed****. Its weights and logic are unchanged, but the data arriving at
inference no longer ****resembles**** the training data, so predictions grow ****less reliable****.

## Drift vs noise[#](#drift-vs-noise "Link to this heading")

Data drift is ****systematic**** — a sustained, directional shift — not the random fluctuation that’s normal and
expected. Examples: a fraud model meeting ****new devices and geographies****, or a credit model trained on
salaried workers now scoring ****gig workers****.

## Detecting and relating it[#](#detecting-and-relating-it "Link to this heading")

It’s caught by comparing a ****production**** window to a ****reference**** window with statistical tests (****KS****,
****Chi-square****), ****PSI****, or divergence metrics — the input side, so it’s detectable ****before**** labels
arrive. Data drift can ****evolve into**** concept drift, which is why teams monitor \(P(X)\) first, then
investigate the input–output relationship if performance drops.

---

****Mind map — connected ideas****

> [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Drift Detection](138-drift-detection.html) · [Categorical Drift](179-categorical-drift.html)

---

****More in Distribution Shift & Drift****

> [Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html)

---

**Theme:** Distribution Shift & Drift  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Data Drift](https://insightful-data-lab.com/2025/08/20/data-drift/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)