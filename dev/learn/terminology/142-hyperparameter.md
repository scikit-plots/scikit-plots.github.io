🏋️  ****Hyperparameter****

# Hyperparameter[#](#hyperparameter "Link to this heading")

**A setting fixed before training (e.g. learning rate) rather than learned.**

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

A ****hyperparameter**** is a setting ****chosen before training**** that controls ****how a model
learns or how it is structured**** — as opposed to ****parameters**** (weights and biases), which the
optimiser ****learns from the data****. Hyperparameters are the model’s **learning strategy**;
parameters are its **learned knowledge**.

## The main kinds[#](#the-main-kinds "Link to this heading")

They span four areas. ****Model structure****: number of layers, neurons per layer, a tree’s max
depth. ****Training process****: learning rate, batch size, number of epochs, dropout rate.
****Regularisation****: L1/L2 penalty strength, weight decay. ****Optimisation****: SGD momentum, the
Adam beta values.

## Why they matter[#](#why-they-matter "Link to this heading")

The same model with different hyperparameters can perform ****very differently**** — poor choices
cause underfitting, overfitting or painfully slow training, so ****tuning is critical**** for
accuracy and generalisation.

## Tuning, and an example[#](#tuning-and-an-example "Link to this heading")

Common strategies escalate in sophistication: ****manual**** trial, ****grid search**** (every
combination), ****random search**** (sample combinations — often more efficient), ****Bayesian
optimisation**** (a probabilistic model guides the search), and ****Hyperband / population-based****
methods at scale. Training a net on MNIST one might fix learning rate `0.001`, batch size
`64`, dropout `0.5` and `20` epochs; the weights are learned automatically, but
performance hinges on those chosen hyperparameters.

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Epochs](141-epochs.html) · [Cross-Validation (CV)](136-cross-validation-cv.html) · [Early Stopping](140-early-stopping.html) · [Neural Networks](287-neural-networks.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html) · [Quantization](343-quantization.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Hyperparameter](https://insightful-data-lab.com/2025/08/24/hyperparameter/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)