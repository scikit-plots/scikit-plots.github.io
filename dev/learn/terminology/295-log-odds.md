🏋️  ****Log-Odds****

# Log-Odds[#](#log-odds "Link to this heading")

**The logarithm of the odds, the natural scale for logistic models.**

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

The ****log-odds**** (or ****logit****) is the natural logarithm of the ****odds**** of an event — the ratio of its
probability to its complement:

\[\text{logit}(p) = \log\!\left(\frac{p}{1 - p}\right), \qquad p = \sigma(z) = \frac{1}{1 + e^{-z}}.\]

Odds run from 0 (at \(p=0\)) through 1 (at \(p=0.5\)) to \(\infty\) (at \(p=1\)); taking
the log spreads them onto the full line, from \(-\infty\) to \(+\infty\).

## Why models use it[#](#why-models-use-it "Link to this heading")

A probability is trapped in \([0,1]\), awkward to model with a ****linear**** function; the log-odds is
****unbounded****, so ****logistic regression**** (and the final layer of many classifiers) models the log-odds as
a ****linear**** combination of features — the raw “score” before conversion.

## Back to probability[#](#back-to-probability "Link to this heading")

The ****sigmoid**** \(\sigma\) is the ****inverse**** of the logit — it maps a log-odds score \(z\) back to
a probability. So the pipeline runs linear score → log-odds → sigmoid → ****classification probability**** →
threshold → class.

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Classification Probability](231-classification-probability.html) · [Binary Classification](293-binary-classification.html) · [Sigmoid Function](297-sigmoid-function.html) · [Softmax Function](296-softmax-function.html) · [Logistic Regression](292-logistic-regression.html) · [Neural Networks](287-neural-networks.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html) · [Model Distillation (Knowledge Distillation)](139-model-distillation-knowledge-distillation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Log-Odds](https://insightful-data-lab.com/2025/08/21/log-odds/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)