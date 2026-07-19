🏋️  ****Binary Cross-Entropy (BCE)****

# Binary Cross-Entropy (BCE)[#](#binary-cross-entropy-bce "Link to this heading")

**The standard loss for binary classification, penalising confident wrong predictions.**

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

****Binary cross-entropy**** (log loss) is the standard ****loss**** for ****binary classification****, for a true
label \(y \in \{0,1\}\) and predicted probability \(p = \sigma(z)\):

\[\text{BCE} = -\big[\,y \log(p) + (1 - y)\log(1 - p)\,\big], \qquad p = \sigma(z),\]

averaged over the data.

## How it behaves[#](#how-it-behaves "Link to this heading")

The ****logarithm**** gives an ****asymmetric**** penalty — a confident-correct prediction costs almost nothing
(\(-\log 0.99 \approx 0.01\)), a confident-wrong one costs a lot (\(-\log 0.01 \approx 4.6\)). This
pressures the model to be ****confident when right and hesitant when wrong****, pushing toward ****calibrated****
probabilities.

## Why it fits[#](#why-it-fits "Link to this heading")

BCE is the ****negative log-likelihood**** of the ****Bernoulli**** distribution, so minimizing it is ****maximum
likelihood**** — the natural partner of the ****sigmoid****, with a clean gradient \((p - y)\). Its
multi-class analogue is ****categorical cross-entropy**** with ****softmax****.

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Loss Functions](289-loss-functions.html) · [Logit Space](291-logit-space.html) · [Sigmoid Function](297-sigmoid-function.html) · [Log-Odds](295-log-odds.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Active Learning](163-active-learning.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Binary Cross-Entropy (BCE)](https://insightful-data-lab.com/2025/08/21/binary-cross-entropy-bce/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)