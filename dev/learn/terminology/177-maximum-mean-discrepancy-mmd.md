🌊  ****Maximum Mean Discrepancy (MMD)****

# Maximum Mean Discrepancy (MMD)[#](#maximum-mean-discrepancy-mmd "Link to this heading")

**A kernel-based distance between distributions for two-sample and drift tests.**

## What it is[#](#what-it-is "Link to this heading")

****Maximum mean discrepancy (MMD)**** is a statistical test for the ****difference between two
distributions**** \(P\) and \(Q\) from samples. Under a chosen kernel, ****MMD is 0 exactly
when the distributions match****, and grows as they diverge. It is widely used to detect ****drift****,
compare ****train versus test**** data, and evaluate ****generative models**** (GANs, VAEs, diffusion).

## The idea[#](#the-idea "Link to this heading")

MMD compares the ****mean embeddings**** of the two distributions in a ****reproducing kernel Hilbert
space (RKHS)****:

\[\text{MMD}^2(P, Q) = \left\| \mu\_P - \mu\_Q \right\|\_{\mathcal{H}}^2,\]

where \(\mu\_P = \mathbb{E}\_{x \sim P}[\phi(x)]\) is the mean embedding of \(P\) under the
feature map \(\phi\) of a kernel \(k(x, y)\).

## Estimating it[#](#estimating-it "Link to this heading")

The ****kernel trick**** gives an estimate from samples without ever touching the infinite-dimensional
space — averaging within-\(P\) kernels plus within-\(Q\) kernels minus twice the cross
kernels:

\[\widehat{\text{MMD}}^2 = \frac{1}{m^2}\sum\_{i,i'} k(x\_i, x\_{i'}) + \frac{1}{n^2}\sum\_{j,j'} k(y\_j, y\_{j'}) - \frac{2}{mn}\sum\_{i,j} k(x\_i, y\_j),\]

usually with a Gaussian RBF kernel.

## Where it’s used[#](#where-it-s-used "Link to this heading")

A ****small**** MMD means similar samples, a ****large**** one means different. It powers ****drift detection****
(train vs production, covariate drift), ****GAN evaluation**** (generated vs real), and ****domain
adaptation**** (aligning source and target features, as in MMD-regularised networks). Train a fraud
model on last year’s data \(P\); if this year’s \(Q\) gives a high MMD, you have covariate
drift and likely need to retrain.

---

**Theme:** [Distribution Shift & Drift](index.html#term-theme-drift)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Energy Distance](176-energy-distance.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Drift Detection](138-drift-detection.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Representation Shift](174-representation-shift.html) · [PSI (Population Stability Index)](389-psi-population-stability-index.html)

---

> **Hint**
> ****More in Distribution Shift & Drift****

[Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Maximum Mean Discrepancy (MMD)](https://insightful-data-lab.com/2025/08/23/maximum-mean-discrepancy-mmd/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)