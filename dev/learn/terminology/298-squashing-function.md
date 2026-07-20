🏋️  ****Squashing Function****

# Squashing Function[#](#squashing-function "Link to this heading")

**Any bounded nonlinearity (sigmoid, tanh) that compresses its input range.**

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

A ****squashing function**** is any function that ****compresses**** an unbounded input — any real number in
\((-\infty, \infty)\) — into a ****bounded**** range, giving the characteristic ****S-shape****. It “squashes”
an infinite domain into a finite interval.

## Examples[#](#examples "Link to this heading")

The ****sigmoid**** squashes to ****(0, 1)**** (a probability), ****tanh**** to ****(−1, 1)****, and ****softmax**** squashes a
vector of logits into probabilities on (0,1). They are the classic ****non-linear activations**** that let a
network turn raw scores into interpretable, constrained outputs.

## Why it matters[#](#why-it-matters "Link to this heading")

Squashing is what converts an ****unbounded**** linear score (like the ****log-odds****) into something usable — a
probability, or a normalized signal — and the non-linearity is what lets stacked layers model ****complex****
patterns. Its flat tails are also the source of ****saturation**** and vanishing gradients.

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Sigmoid Function](297-sigmoid-function.html) · [Softmax Function](296-softmax-function.html) · [Neural Networks](287-neural-networks.html) · [Log-Odds](295-log-odds.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Squashing Function](https://insightful-data-lab.com/2025/08/21/squashing-function/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)