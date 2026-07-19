🏋️  ****Active Learning****

# Active Learning[#](#active-learning "Link to this heading")

**Iteratively querying the most informative examples to label, cutting labelling cost.**

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

****Active learning**** trains a model ****iteratively**** and lets it ****choose the most informative
examples to label****, instead of labelling everything. The goal is ****high accuracy from far fewer
labels**** — invaluable when annotation is expensive or slow, as with medical images or legal
documents.

## The loop[#](#the-loop "Link to this heading")

Start with a ****small labelled set**** and a large ****unlabelled pool****. Train an initial model, use
a ****query strategy**** to pick the most valuable unlabelled samples, send them to an ****oracle**** (a
human expert) for labels, add them to the training set and retrain — repeating until the model is
good enough or the labelling budget runs out.

## Query strategies[#](#query-strategies "Link to this heading")

How to choose what to label. ****Uncertainty sampling**** picks the least confident cases (for binary
classification, predicted probability near 0.5). ****Query by committee**** trains several models and
picks where they ****disagree**** most. ****Expected model change**** chooses points that would most move
the model. ****Diversity sampling**** picks examples ****unlike**** the existing training data to cover
the input space.

## Why it works[#](#why-it-works "Link to this heading")

Given 100,000 unlabelled emails at `$2` each to label, training on 1,000 and then querying the
500 most uncertain improves accuracy ****faster than random labelling****. Active learning cuts
****annotation cost****, accelerates learning, and naturally ****prioritises rare or uncertain cases**** —
helping with imbalance for free.

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Reweighting](160-reweighting.html) · [Continuous Retraining](161-continuous-retraining.html) · [Ensemble](154-ensemble.html) · [Medical AI](145-medical-ai.html) · [Monitoring Pipelines](162-monitoring-pipelines.html) · [Bayesian Correction](164-bayesian-correction.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Active Learning](https://insightful-data-lab.com/2025/08/23/active-learning/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)