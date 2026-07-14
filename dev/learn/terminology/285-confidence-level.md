🎲  ****Confidence Level****

# Confidence Level[#](#confidence-level "Link to this heading")

**The long-run proportion of intervals expected to contain the true parameter.**

## What it is[#](#what-it-is "Link to this heading")

A model’s ****confidence level**** is the ****probability it attaches**** to its prediction — how sure it is that an
instance belongs to the predicted class. It is only meaningful if it is ****calibrated****: a model is
****well-calibrated**** when predictions made with confidence \(p\) are correct about ****100p%**** of the time
(predict 0.9 → right 90% of the time).

## How it’s checked[#](#how-it-s-checked "Link to this heading")

A ****reliability diagram**** bins predictions by confidence level and plots confidence against actual
****accuracy****; perfect calibration lies on the ****diagonal****. The gap is summarized by the ****Expected
Calibration Error (ECE)**** — the average distance between confidence and accuracy across bins.

## Why it matters[#](#why-it-matters "Link to this heading")

Raw ****accuracy**** says nothing about whether the confidence is honest, yet downstream ****risk-based
decisions**** (which cases to escalate, when to defer) depend on trusting the number. This is the **model**
sense of confidence, distinct from a statistical ****confidence interval****.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Overconfident](284-overconfident.html) · [Underconfident](283-underconfident.html) · [Classification Probability](231-classification-probability.html) · [Binary Cross-Entropy (BCE)](288-binary-cross-entropy-bce.html) · [Risk-Based Decisions](286-risk-based-decisions.html) · [Multiclass AUROC](022-multiclass-auroc.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html) · [Probability](025-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Confidence Level](https://insightful-data-lab.com/2025/08/21/confidence-level/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)