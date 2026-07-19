🎲  ****Sample Mean****

# Sample Mean[#](#sample-mean "Link to this heading")

**The arithmetic average of a sample, used to estimate the population mean.**

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

The ****sample mean**** \(\bar{x}\) is the ****arithmetic average of a sample**** — the sum of
the observations divided by their count. It is the ****statistic**** used to estimate the
****true population mean**** \(\mu\):

\[\bar{x} = \frac{1}{n}\sum\_{i=1}^{n} x\_i.\]

## Examples[#](#examples "Link to this heading")

Test scores \(\{80, 85, 90, 95, 100\}\) give \(\bar{x} = 450/5 = 90\). Ten people
with total height 1,720 cm give \(\bar{x} = 172\) cm.

## Its three key properties[#](#its-three-key-properties "Link to this heading")

* ****Unbiased**** — \(\mathbb{E}[\bar{x}] = \mu\); on average the sample mean equals the
  population mean.
* ****Sampling distribution (CLT)**** — for large \(n\), the Central Limit Theorem makes
  \(\bar{x}\) approximately normal,

  \[\bar{x} \sim N\!\left(\mu, \frac{\sigma^2}{n}\right),\]

  with ****standard error of the mean**** \(SE = \sigma/\sqrt{n}\) — so its variability
  shrinks as \(n\) grows.
* ****Outlier-sensitive**** — being a sum, the mean is pulled by extreme values (unlike the
  median).

## Where it shows up[#](#where-it-shows-up "Link to this heading")

The sample mean is everywhere: ****descriptive**** summaries, ****estimating**** \(\mu\),
****hypothesis tests**** (the one-sample t-test), and ****confidence intervals****. It is the
****best unbiased estimator**** of the population mean.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Sample Standard Deviation](088-sample-standard-deviation.html) · [True Mean (Population Mean)](085-true-mean-population-mean.html) · [Standard Error (SE)](084-standard-error-se.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Frequentist](059-frequentist.html) · [Regression Coefficient](090-regression-coefficient.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Sample Mean](https://insightful-data-lab.com/2025/08/25/sample-mean/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)