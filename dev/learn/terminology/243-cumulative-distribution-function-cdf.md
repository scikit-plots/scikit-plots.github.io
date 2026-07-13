🎲  ****Cumulative Distribution Function (CDF)****

# Cumulative Distribution Function (CDF)[#](#cumulative-distribution-function-cdf "Link to this heading")

**The probability that a variable is at most a given value.**

## What it is[#](#what-it-is "Link to this heading")

The ****cumulative distribution function (CDF)**** gives the probability that a random variable is ****at
most**** \(x\):

\[F(x) = \Pr[X \le x].\]

Unlike the PMF or PDF, it works for ****both**** discrete and continuous variables.

## Properties[#](#properties "Link to this heading")

The CDF is ****non-decreasing****, runs from ****0 to 1****, and is right-continuous. For a ****discrete**** variable
it is a ****step function****; for a ****continuous**** one it is smooth:

\[F(x) = \sum\_{k \le x} p(k) \quad\text{(discrete)}, \qquad F(x) = \int\_{-\infty}^{x} f(t)\,dt \quad\text{(continuous)}.\]

## Why it’s useful[#](#why-it-s-useful "Link to this heading")

It directly answers “****at most****” and interval questions, and it is the ****bridge**** between
representations: ****quantiles**** are read off its inverse and the ****density**** is its derivative. For a fair
die, \(F(2) = 1/3\).

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Probability Density](237-probability-density.html) · [Probability Mass](239-probability-mass.html) · [Probability Distribution](240-probability-distribution.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html) · [Normal Distribution](238-normal-distribution.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html) · [Probability](025-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Cumulative Distribution Function (CDF)](https://insightful-data-lab.com/2025/08/22/cumulative-distribution-function-cdf/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)