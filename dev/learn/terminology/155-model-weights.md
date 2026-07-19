🏋️  ****Model Weights****

# Model Weights[#](#model-weights "Link to this heading")

**The learned parameters that define a trained model’s behaviour.**

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

****Model weights**** are a model’s ****trainable parameters**** — the numbers that determine how input
features are turned into predictions. Each weight encodes the ****importance**** of a feature, and
training ****adjusts**** them to minimise loss.

## By model type[#](#by-model-type "Link to this heading")

In ****linear regression****, \(y = w\_1 x\_1 + w\_2 x\_2 + b\), the weights \(w\_1, w\_2\) say
how much each feature contributes — if \(w\_1 = 200\), every extra square foot adds `$200`
to the predicted price. In a ****neural network****, every connection between neurons has a weight;
the forward pass multiplies inputs by weights and applies an activation, and CNN filter weights
learn patterns like edges. In ****logistic regression****, weights are the ****log-odds****
contribution — positive pushes toward the positive class, negative away.

## How they’re learned[#](#how-they-re-learned "Link to this heading")

Weights start ****random**** (or from a heuristic), then a loop refines them: ****forward pass**** to
predict, a ****loss**** against the truth, ****backpropagation**** for the gradients of loss with
respect to each weight, and an ****optimiser**** (SGD, Adam) to update them — repeated until the
loss settles.

## Why they matter[#](#why-they-matter "Link to this heading")

Weights ****are**** the model’s learned knowledge: saving or loading a model **is** saving or loading
its weights. In transfer learning we often ****freeze**** the encoder’s weights and fine-tune only
the last layers. Concretely, a spam classifier might learn a weight of ****+2.5**** for “free”
(strongly spammy) and ****-1.0**** for “invoice” (less so).

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Hyperparameter](142-hyperparameter.html) · [Frozen Encoder](172-frozen-encoder.html) · [Regression Coefficient](090-regression-coefficient.html) · [Epochs](141-epochs.html) · [Neural Networks](287-neural-networks.html) · [FLOPs](156-flops.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Model Weights](https://insightful-data-lab.com/2025/08/24/model-weights/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)