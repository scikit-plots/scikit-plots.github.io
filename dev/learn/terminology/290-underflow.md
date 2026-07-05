🏋️  ****Underflow****

# Underflow[#](#underflow "Link to this heading")

**Numerical loss of precision when values become too small to represent.**

## What it is[#](#what-it-is "Link to this heading")

****Underflow**** happens when a computation produces a number ****too small**** to represent in the floating-point
format — smaller than the tiniest positive value — so the computer ****rounds it to zero****, destroying a real
nonzero result. It is the small-magnitude counterpart of ****overflow****.

## Why ML hits it[#](#why-ml-hits-it "Link to this heading")

Machine learning multiplies ****many small probabilities**** — in Naive Bayes, HMMs, and likelihoods — and the
product of hundreds of values below 1 quickly drops below the representable floor, collapsing to ****0**** and
corrupting the result. Low-precision (****float16****) training underflows even sooner, showing up as ****vanishing
gradients****.

## The fix[#](#the-fix "Link to this heading")

Compute in ****log space****. Because \(\log(a \cdot b) = \log(a) + \log(b)\), a fragile ****product**** of tiny
probabilities becomes a stable ****sum**** of log-probabilities — the reason libraries use ****log-likelihoods**** and
the ****LogSumExp**** trick, and why scikit-learn’s Naive Bayes works with logs internally.

---

****Mind map — connected ideas****

> [Logits](420-logits.html) · [Softmax Function](296-softmax-function.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Log-Odds](295-log-odds.html) · [Quantization](343-quantization.html) · [Sigmoid Function](297-sigmoid-function.html)

---

****More in Model Training & Optimization****

> [Active Learning](163-active-learning.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Deep Ensembles](335-deep-ensembles.html) · [Early Stopping](140-early-stopping.html) · [Ensemble](154-ensemble.html) · [Epochs](141-epochs.html) · [FLOPs](156-flops.html) · [Full Annotation](345-full-annotation.html) · [Hyperparameter](142-hyperparameter.html) · [Label Noise](354-label-noise.html) · [Log-Odds](295-log-odds.html) · [Logit Space](291-logit-space.html) · [Logits](420-logits.html) · [Loss Functions](289-loss-functions.html)

---

**Theme:** Model Training & Optimization  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Underflow](https://insightful-data-lab.com/2025/08/21/underflow/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)