🎲  ****True Mean (Population Mean)****

# True Mean (Population Mean)[#](#true-mean-population-mean "Link to this heading")

**The actual mean of the whole population that a sample mean estimates.**

## What it is[#](#what-it-is "Link to this heading")

The ****true mean****, or ****population mean**** \(\mu\), is the ****actual arithmetic average
of an entire population****. It is a ****fixed**** value but usually ****unknown**** — we can rarely
measure everyone — so we estimate it with the ****sample mean**** \(\bar{x}\).

## Parameter vs estimate[#](#parameter-vs-estimate "Link to this heading")

\[\mu = \frac{1}{N}\sum\_{i=1}^{N} x\_i, \qquad \bar{x} = \frac{1}{n}\sum\_{i=1}^{n} x\_i.\]

Here \(\mu\) is a ****parameter**** (fixed, unknown) and \(\bar{x}\) a ****statistic****
(random, changing from sample to sample). By the ****Law of Large Numbers****, as \(n\)
grows, \(\bar{x} \to \mu\).

## Example[#](#example "Link to this heading")

For the population \(\{2, 4, 6, 8, 10\}\), the true mean is
\(\mu = (2+4+6+8+10)/5 = 6\). A sample \(\{4, 10\}\) gives \(\bar{x} = 7\) —
an **estimate** of the true 6, off by sampling luck.

## Inference about μ[#](#inference-about "Link to this heading")

Everything in classical inference targets \(\mu\): a ****hypothesis test**** checks a
claim like \(H\_0 : \mu = 100\), and a ****confidence interval**** says “we’re 95%
confident the true mean \(\mu\) lies between \(X\) and \(Y\).” The sample mean
is the ****best unbiased estimator**** of \(\mu\), and tests and intervals quantify how
far it might be from the truth.

## The proportion analogue[#](#the-proportion-analogue "Link to this heading")

For yes/no outcomes the same parameter-vs-estimate story holds with the ****true conversion
rate**** \(p\) estimated by \(\hat{p}\) — \(\mu \leftrightarrow p\),
\(\bar{x} \leftrightarrow \hat{p}\) — the mean and proportion versions of one idea.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[True Conversion Rate](083-true-conversion-rate.html) · [Standard Error (SE)](084-standard-error-se.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Frequentist](059-frequentist.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [True Mean (Population Mean)](https://insightful-data-lab.com/2025/08/25/true-mean-population-mean/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)