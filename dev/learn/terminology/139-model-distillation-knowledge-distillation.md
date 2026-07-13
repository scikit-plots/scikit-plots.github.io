🏋️  ****Model Distillation (Knowledge Distillation)****

# Model Distillation (Knowledge Distillation)[#](#model-distillation-knowledge-distillation "Link to this heading")

**Training a small student model to mimic a larger teacher for efficiency.**

## What it is[#](#what-it-is "Link to this heading")

****Model distillation**** (knowledge distillation) is a ****compression**** technique: a large,
accurate ****teacher**** model transfers its knowledge to a smaller, faster ****student****. The aim
is a lighter model that ****keeps most of the teacher’s accuracy**** while being cheap enough to
deploy on phones and edge devices.

## How it works[#](#how-it-works "Link to this heading")

Train the big teacher (a large transformer, say), then have it produce ****soft targets**** — full
probability distributions like `[0.7 cat, 0.2 dog, 0.1 rabbit]` rather than a bare hard
label. The student trains to ****mimic those soft outputs****, usually under a loss that blends a
****distillation term**** (student vs teacher) with a ****supervised term**** (student vs true labels).

## The objective[#](#the-objective "Link to this heading")

\[L = \alpha \, L\_{\text{hard}}(y, p\_s) \; + \; (1 - \alpha)\, L\_{\text{soft}}(p\_t, p\_s, T),\]

where \(y\) are true labels, \(p\_t\) and \(p\_s\) the teacher and student
probabilities, \(T\) a ****temperature**** that softens the teacher’s distribution to expose
its “dark knowledge”, and \(\alpha\) the balance between the two terms.

## Why, examples, and costs[#](#why-examples-and-costs "Link to this heading")

It buys ****efficiency**** (faster, cheaper inference), ****deployability**** (edge devices), and even
better generalisation from the teacher’s soft probabilities. ****DistilBERT**** is ~40% smaller and
~60% faster than BERT at ~97% of its performance; ****ResNet-50**** distills into ResNet-18 at
similar accuracy. The catches: the student ****cannot capture everything****, \(T\) and
\(\alpha\) need tuning, and you still pay to ****train the teacher**** first.

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Quantization](343-quantization.html) · [Frozen Encoder](172-frozen-encoder.html) · [Embedding](173-embedding.html) · [Autoencoder](171-autoencoder.html) · [Early Stopping](140-early-stopping.html) · [Epochs](141-epochs.html)

---

> **Hint**
> ****More in Model Training & Optimization****

[Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Model Distillation (Knowledge Distillation)](https://insightful-data-lab.com/2025/08/24/model-distillation-knowledge-distillation/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)