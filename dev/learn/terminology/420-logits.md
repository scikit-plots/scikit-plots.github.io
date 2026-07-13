🏋️  ****Logits****

# Logits[#](#logits "Link to this heading")

**Raw pre-activation scores before a sigmoid or softmax.**

## What it is[#](#what-it-is "Link to this heading")

****Logits**** are the ****raw, unnormalized**** scores a classifier’s final layer produces ****before**** they’re turned
into probabilities. They range over ****all**** real numbers — positive, negative, unbounded — and live in
****log-odds**** space, not probability space.

## From logits to probabilities[#](#from-logits-to-probabilities "Link to this heading")

A ****softmax**** turns a vector of logits into a probability ****distribution**** that sums to 1 (for multiclass),
while a ****sigmoid**** maps a single logit to one probability (for binary). Because softmax ****normalizes****,
raising one logit ****lowers**** the others’ probabilities — the competition that sharpens a prediction.

## Why keep them raw[#](#why-keep-them-raw "Link to this heading")

Exposing logits enables ****numerically stable**** training (log-softmax beats probabilities-then-log, which is
why frameworks feed ****cross-entropy**** raw logits) and ****post-hoc calibration**** — ****temperature scaling****
divides logits by T **before** softmax, which is only possible when the logits are available.

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Softmax Function](296-softmax-function.html) · [Sigmoid Function](297-sigmoid-function.html) · [Logit Space](291-logit-space.html) · [Log-Odds](295-log-odds.html) · [Temperature Scaling](279-temperature-scaling.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Loss Functions](289-loss-functions.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Logits](https://insightful-data-lab.com/2025/08/17/logits/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)