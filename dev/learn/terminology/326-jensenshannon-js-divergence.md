🌊  ****Jensen–Shannon (JS) Divergence****

# Jensen–Shannon (JS) Divergence[#](#jensenshannon-js-divergence "Link to this heading")

**A symmetric, bounded measure of difference between two distributions.**

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

****JS divergence**** is the ****symmetric, bounded**** repair of KL. It averages the KL of each distribution to
their ****mixture**** \(M = \tfrac{1}{2}(P+Q)\):

\[D\_{\text{JS}}(P \,\|\, Q) = \tfrac{1}{2}D\_{\text{KL}}(P \,\|\, M) + \tfrac{1}{2}D\_{\text{KL}}(Q \,\|\, M).\]

Unlike KL it is always ****finite**** and ****symmetric****.

## Its properties[#](#its-properties "Link to this heading")

JS ranges from ****0**** (identical) to a bounded maximum (****1**** in bits, \(\log 2\) in nats, when the
distributions are ****disjoint****). Its ****square root**** is the ****Jensen–Shannon distance****, which **is** a proper
metric — so JS gives a well-behaved, comparable measure of distributional difference.

## Where it’s used[#](#where-it-s-used "Link to this heading")

It works on ****numerical and categorical**** features alike and is a popular ****drift**** signal — stable, less
noisy, and slightly ****more sensitive**** than KL or PSI — which is why monitoring systems favour it when a
symmetric, bounded score is wanted.

---

**Theme:** [Distribution Shift & Drift](index.html#term-theme-drift)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Data Drift](331-data-drift.html) · [Concept Drift](330-concept-drift.html) · [Statistical Tests](328-statistical-tests.html) · [Cramér’s V](180-cramer-s-v.html)

---

> **Hint**
> ****More in Distribution Shift & Drift****

[Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html) · [Label Drift (a.k.a. Target Drift)](386-label-drift-a-k-a-target-drift.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Jensen–Shannon (JS) Divergence](https://insightful-data-lab.com/2025/08/20/jensen-shannon-js-divergence/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)