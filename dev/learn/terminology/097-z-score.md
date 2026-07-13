🎲  ****Z-Score****

# Z-Score[#](#z-score "Link to this heading")

**How many standard deviations a value lies from the mean.**

## What it is[#](#what-it-is "Link to this heading")

A ****z-score**** (or ****standard score****) says ****how many standard deviations a value sits
from the mean**** of its distribution. It re-expresses raw numbers on a common, unit-free
scale so values from different datasets can be compared directly.

## The formula[#](#the-formula "Link to this heading")

For a population,

\[z = \frac{x - \mu}{\sigma},\]

with raw value \(x\), mean \(\mu\) and standard deviation \(\sigma\). From a
****sample****, use \(z = (x - \bar{x})/s\).

## Reading it[#](#reading-it "Link to this heading")

\(z = 0\) is exactly at the mean; \(z = +1\) is one SD above; \(z = -2\) two
SD below. Large magnitudes (\(|z| > 3\)) flag likely ****outliers****.

## Examples[#](#examples "Link to this heading")

An exam score of 85 with mean 70 and SD 10 gives \(z = (85 - 70)/10 = 1.5\) — 1.5 SD
above average. A height of 150 cm with mean 170 and SD 8 gives
\(z = (150 - 170)/8 = -2.5\).

## Why it’s useful[#](#why-it-s-useful "Link to this heading")

Three things at once: ****standardisation**** (compare maths and English scores on different
scales), ****probability**** (in the standard normal — mean 0, SD 1 — a z maps to a tail area,
e.g. \(z = 1.96\) bounds the central 95%), and ****test statistics**** (z-, t- and
χ²-tests all compare an observed value to its expected spread in z-like units). A
****z-score**** standardises one data point; a ****z-test**** uses that machinery to test a
hypothesis about a mean or proportion.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Standard Error (SE)](084-standard-error-se.html) · [Critical Value](087-critical-value.html) · [Sample Standard Deviation](088-sample-standard-deviation.html) · [True Mean (Population Mean)](085-true-mean-population-mean.html) · [Two-Proportion Z-Test](098-two-proportion-z-test.html) · [Statistical Significance](096-statistical-significance.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Z-Score](https://insightful-data-lab.com/2025/08/24/z-score/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)