🌊  ****Off-Distribution****

# Off-Distribution[#](#off-distribution "Link to this heading")

**Inputs that fall outside the distribution a model was trained on.**

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Off-distribution**** data are points that ****differ significantly from the distribution the model was
trained on**** — inputs outside its “familiar range”. Models assume production data is drawn from the
****same distribution**** as training (the i.i.d. assumption); when that breaks, the input is
off-distribution, also called ****out-of-distribution (OOD)****.

## Examples[#](#examples "Link to this heading")

A cats-versus-dogs classifier shown a ****giraffe**** is off-distribution. A credit model trained on
2015-2020 applications meets ****post-COVID**** borrower behaviour it never saw. A diagnostic model
trained on adult MRIs is handed a ****child’s**** scan. In each case the input falls outside the learned
scope.

## Why it’s a problem, and detecting it[#](#why-it-s-a-problem-and-detecting-it "Link to this heading")

Models optimised for in-distribution data make ****unreliable or overconfident**** predictions on OOD
inputs, with fairness risks for unseen subgroups. Detection draws on ****distance metrics**** (KL,
Jensen-Shannon, KS), ****embedding methods**** (Mahalanobis or cosine distance in latent space),
****uncertainty estimation**** (Bayesian neural nets, deep ensembles, MC dropout), and dedicated ****OOD
classifiers****.

## Handling it[#](#handling-it "Link to this heading")

Five responses: ****augment**** the training data to broaden coverage; ****adapt**** the model to the new
domain; build ****robust**** models with regularisation or adversarial training; add a ****reject option****
so the model can abstain (“I don’t know”); and run ****monitoring pipelines**** to flag drift in
production. Off-distribution is the abrupt cousin of gradual ****data**** and ****concept drift****.

---

**Theme:** [Distribution Shift & Drift](index.html#term-theme-drift)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Data Drift](331-data-drift.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Drift Detection](138-drift-detection.html) · [Representation Shift](174-representation-shift.html)

---

> **Hint**
> ****More in Distribution Shift & Drift****

[Cardinality in Categorical Data](178-cardinality-in-categorical-data.html) · [Categorical Drift](179-categorical-drift.html) · [Categorical Explosions](182-categorical-explosions.html) · [Classifier Two-Sample Tests (C2STs)](175-classifier-two-sample-tests-c2sts.html) · [Concept Drift](330-concept-drift.html) · [Covariate Drift (a.k.a. Covariate Shift)](387-covariate-drift-a-k-a-covariate-shift.html) · [Data Drift](331-data-drift.html) · [Dataset Shift](353-dataset-shift.html) · [Drift Detection](138-drift-detection.html) · [Drift Guardrails](349-drift-guardrails.html) · [Energy Distance](176-energy-distance.html) · [Jensen–Shannon (JS) Divergence](326-jensenshannon-js-divergence.html) · [KS shift (Kolmogorov–Smirnov shift)](388-ks-shift-kolmogorovsmirnov-shift.html) · [Kullback–Leibler (KL) Divergence](327-kullbackleibler-kl-divergence.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Off-Distribution](https://insightful-data-lab.com/2025/08/23/off-distribution/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)