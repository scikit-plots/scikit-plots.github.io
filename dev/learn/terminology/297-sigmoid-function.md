🏋️  ****Sigmoid Function****

# Sigmoid Function[#](#sigmoid-function "Link to this heading")

**Maps any real value to (0, 1), used for probabilities and gating.**

## What it is[#](#what-it-is "Link to this heading")

The ****sigmoid**** function \(\sigma\) maps ****any**** real number to the open interval ****(0, 1)****, tracing an
****S-shaped**** curve:

\[\sigma(z) = \frac{1}{1 + e^{-z}}.\]

At \(z=0\) it returns ****0.5****; large positive \(z\) → near ****1****, large negative \(z\) → near
****0****.

## Its role[#](#its-role "Link to this heading")

It is the ****inverse of the logit**** — it turns a ****log-odds**** score back into a ****probability**** — which makes
it the output activation of ****logistic regression**** and of ****binary****-classification output layers, and the
basis of ****binary cross-entropy**** loss. Each output is an ****independent**** probability, so sigmoid also
serves ****multi-label**** problems.

## Watch out[#](#watch-out "Link to this heading")

In the ****hidden**** layers of deep networks the sigmoid causes ****vanishing gradients**** (its slope flattens for
large \(|z|\)), so ReLU-family activations are preferred there; sigmoid is kept for the ****output****.

---

****Mind map — connected ideas****

> [Log-Odds](295-log-odds.html) · [Softmax Function](296-softmax-function.html) · [Squashing Function](298-squashing-function.html) · [Logistic Regression](292-logistic-regression.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html)

---

****More in Model Training & Optimization****

> [Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html)

---

**Theme:** Model Training & Optimization  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Sigmoid Function](https://insightful-data-lab.com/2025/08/21/sigmoid-function/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)