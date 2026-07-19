🏋️  ****Deep Ensembles****

# Deep Ensembles[#](#deep-ensembles "Link to this heading")

**Averaging several independently trained networks for accuracy and uncertainty.**

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

A ****deep ensemble**** trains several neural networks ****independently**** and ****aggregates**** their
predictions, improving both ****accuracy**** and ****uncertainty estimation****. Each member shares the
architecture but starts from a ****different random initialisation**** (and data order), so the networks
settle into different modes of the loss landscape; averaging their outputs cancels errors and reduces
variance:

\[\bar{p}(y \mid x) = \frac{1}{M} \sum\_{m=1}^{M} p\_{\theta\_m}(y \mid x).\]

## Why it works, and uncertainty[#](#why-it-works-and-uncertainty "Link to this heading")

Because independently-initialised networks explore ****different functions****, their ****disagreement**** is
informative. Deep ensembles decompose predictive uncertainty into ****aleatoric**** (data noise) and
****epistemic**** (model) components and produce well-calibrated ****predictive intervals**** — rivalling
****Bayesian neural networks**** while being far simpler to implement.

## Calibration and cost[#](#calibration-and-cost "Link to this heading")

They usually still need ****calibration**** (for example temperature scaling), especially under
****distribution shift****. The main drawback is that cost grows ****linearly**** with the number of members
\(M\), which motivates efficient variants such as ****BatchEnsemble****, ****snapshot ensembles****, and
spreading members over time.

## Where it’s used[#](#where-it-s-used "Link to this heading")

Deep ensembles shine wherever ****reliable confidence**** matters as much as the point prediction —
climate downscaling, ****robotic perception**** and safe human-robot interaction, and ****low-data transfer
learning****.

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Decision Trees](340-decision-trees.html) · [Post-hoc Explainability](339-post-hoc-explainability.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Model Stability](187-model-stability.html) · [Uplift Random Forests](302-uplift-random-forests.html) · [SHAP (SHapley Additive exPlanations)](338-shap-shapley-additive-explanations.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Deep Ensembles](https://insightful-data-lab.com/2025/08/20/deep-ensembles/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)