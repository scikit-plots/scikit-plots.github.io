🎲  ****Normal Distribution****

# Normal Distribution[#](#normal-distribution "Link to this heading")

**The bell-shaped Gaussian distribution defined by its mean and variance.**

## What it is[#](#what-it-is "Link to this heading")

The ****normal (Gaussian) distribution**** is the continuous, ****bell-shaped****, symmetric distribution defined
by two parameters — the ****mean**** \(\mu\) (its center) and the ****standard deviation**** \(\sigma\)
(its spread; variance \(\sigma^2\)):

\[X \sim \mathcal{N}(\mu, \sigma^2).\]

Its ****mean, median and mode coincide****, and it extends from \(-\infty\) to \(+\infty\).

## The density[#](#the-density "Link to this heading")

\[f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right).\]

About ****68%**** of values lie within \(1\sigma\) of the mean, ****95%**** within \(2\sigma\), and
****99.7%**** within \(3\sigma\) (the **68–95–99.7 rule**). Standardizing with \(z = (x-\mu)/\sigma\)
maps any normal onto the ****standard normal**** \(\mathcal{N}(0, 1)\), so a single table serves all.

## Why it’s everywhere[#](#why-it-s-everywhere "Link to this heading")

The ****Central Limit Theorem**** — averages of many independent, finite-variance quantities tend toward a
normal — makes it the default model for ****measurement errors**** and ****aggregates****. But it has ****light
tails****: with heavy-tailed data or frequent ****outliers**** (e.g. Cauchy, Pareto) it fits poorly and
least-squares methods grow unreliable.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Probability Distribution](240-probability-distribution.html) · [Probability Density](237-probability-density.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Z-Score](097-z-score.html) · [Standard Error (SE)](084-standard-error-se.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html) · [Probability](025-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Normal Distribution](https://insightful-data-lab.com/2025/08/22/normal-distribution/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)