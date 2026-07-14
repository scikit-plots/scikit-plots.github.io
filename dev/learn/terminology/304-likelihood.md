🎲  ****Likelihood****

# Likelihood[#](#likelihood "Link to this heading")

**How probable observed data are under a model’s parameters.**

## What it is[#](#what-it-is "Link to this heading")

The ****likelihood**** is the probability of the ****observed data given a model’s parameters**** —
\(\mathcal{L}(\theta) = P(\text{data} \mid \theta)\). The twist is perspective: it is read as a function
of the ****parameters**** \(\theta\) (with the data fixed), asking **which parameters make what we saw most
probable?**

## Maximum likelihood[#](#maximum-likelihood "Link to this heading")

****MLE**** picks the parameters that ****maximize**** the likelihood (in practice the ****log****-likelihood, since
sums are easier and more stable than products):

\[\hat{\theta}\_{\text{MLE}} = \arg\max\_{\theta} \; \mathcal{L}(\theta).\]

It is the dominant engine of statistical ****inference**** — logistic regression, and most classifiers, are fit
this way.

## The connection[#](#the-connection "Link to this heading")

Minimizing ****cross-entropy**** (like ****binary cross-entropy****) is exactly ****maximizing likelihood**** — BCE is
the ****negative log-likelihood**** of the Bernoulli model. Likelihood ****ratios**** also underlie optimal
****decision**** rules, tying estimation and decision-making together.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Logistic Regression](292-logistic-regression.html) · [Probability Forecasts](235-probability-forecasts.html) · [Risk-Based Decisions](286-risk-based-decisions.html) · [Loss Functions](289-loss-functions.html) · [Correlation](305-correlation.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html) · [Probability](025-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Likelihood](https://insightful-data-lab.com/2025/08/21/likelihood/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)