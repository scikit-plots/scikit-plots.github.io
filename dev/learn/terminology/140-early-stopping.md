🏋️  ****Early Stopping****

# Early Stopping[#](#early-stopping "Link to this heading")

**Halting training when validation performance stops improving, to curb overfitting.**

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

****Early stopping**** is a ****regularisation**** technique: stop training ****before the model
overfits****. Rather than running a fixed number of epochs, you watch a ****validation metric**** and
halt once it stops improving — capturing the model at its generalisation “sweet spot” and
saving the wasted epochs beyond it.

## How it works[#](#how-it-works "Link to this heading")

Hold out a validation set, train across epochs, and after each one ****score the validation
metric**** and remember the ****best**** so far. If it fails to improve for ****N consecutive epochs**** —
the ****patience**** — stop. The key parameters are the ****monitored metric****, the ****mode****
(`min` for loss, `max` for accuracy or AUC), the ****patience****, and ****restore-best-weights****,
which rolls the model back to its best epoch.

## Example[#](#example "Link to this heading")

Capped at 100 epochs, suppose validation loss improves until ****epoch 25**** and then climbs as
the model starts overfitting. With ****patience = 3****, training stops at ****epoch 28**** and restores
the weights from epoch 25 — the genuine best.

## Benefits and drawbacks[#](#benefits-and-drawbacks "Link to this heading")

It ****prevents overfitting****, ****cuts training time****, and finds a near-optimal stopping point
automatically. The costs are minor: it ****needs a validation set****, and a noisy metric can trip
it too soon — which is exactly what ****patience**** is there to absorb.

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Epochs](141-epochs.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html) · [Frozen Encoder](172-frozen-encoder.html) · [Autoencoder](171-autoencoder.html) · [Quantization](343-quantization.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Early Stopping](https://insightful-data-lab.com/2025/08/24/early-stopping/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)