🎲  ****Probability Density****

# Probability Density[#](#probability-density "Link to this heading")

**The relative likelihood of a continuous variable at a value, given by its PDF.**

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

The ****probability density function (PDF)**** \(f(x)\) describes a ****continuous**** random variable. It is
****not**** a probability itself — its ****area**** is: the probability of landing in an interval is the integral

\[P(a \le X \le b) = \int\_a^b f(x)\,dx.\]

## Properties[#](#properties "Link to this heading")

The density satisfies \(f(x) \ge 0\), may ****exceed 1**** (it is a density, not a probability),
integrates to ****one**** over the whole line, and assigns probability ****zero**** to any **exact** value. The bell
curve of the ****normal distribution**** is the classic PDF.

## Link to the CDF[#](#link-to-the-cdf "Link to this heading")

The density is the ****derivative**** of the cumulative distribution function,

\[f(x) = F'(x),\]

so equivalently \(F\) is the running integral of \(f\).

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Probability Mass](239-probability-mass.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Probability Distribution](240-probability-distribution.html) · [Normal Distribution](238-normal-distribution.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Quantile Regression](254-quantile-regression.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Probability Density](https://insightful-data-lab.com/2025/08/22/probability-density/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)