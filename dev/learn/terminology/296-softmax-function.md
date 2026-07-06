🏋️  ****Softmax Function****

# Softmax Function[#](#softmax-function "Link to this heading")

**Converts a vector of scores into a probability distribution over classes.**

## What it is[#](#what-it-is "Link to this heading")

The ****softmax**** function generalizes the sigmoid to ****many**** classes. It takes a vector of ****K**** raw scores
(****logits****), exponentiates each and normalizes by their sum, producing ****K**** probabilities that each lie
in (0,1) and ****sum to 1**** — a full ****distribution**** over mutually exclusive classes:

\[\text{softmax}(z)\_k = \frac{e^{z\_k}}{\sum\_{j=1}^{K} e^{z\_j}}.\]

## Its role[#](#its-role "Link to this heading")

It is the standard ****output layer**** for ****multi-class**** classification, trained with ****categorical
cross-entropy****. It ****amplifies**** the largest score toward 1 while ****dampening**** the rest — a soft “winner.”
When \(K=2\) it ****reduces to the sigmoid****.

## Watch out[#](#watch-out "Link to this heading")

Because the outputs are coupled (they must sum to 1), softmax assumes classes are ****mutually exclusive**** —
for ****multi-label**** problems (independent classes) use per-class sigmoids instead. Its probabilities can
also be ****poorly calibrated****.

---

****Mind map — connected ideas****

> [Sigmoid Function](297-sigmoid-function.html) · [Squashing Function](298-squashing-function.html) · [Log-Odds](295-log-odds.html) · [Neural Networks](287-neural-networks.html) · [Classification Models](294-classification-models.html) · [Binary Classification](293-binary-classification.html)

---

****More in Model Training & Optimization****

> [Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html)

---

**Theme:** [Model Training & Optimization](index.html#term-theme-training)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Softmax Function](https://insightful-data-lab.com/2025/08/21/softmax-function/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)