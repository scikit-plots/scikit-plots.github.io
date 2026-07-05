🎲  ****Sample Standard Deviation****

# Sample Standard Deviation[#](#sample-standard-deviation "Link to this heading")

**An estimate of population spread from a sample, using n - 1 in the denominator.**

## What it is[#](#what-it-is "Link to this heading")

The ****sample standard deviation**** \(s\) measures ****how spread out the values in a
sample are around the sample mean**** \(\bar{x}\). It is the ****square root of the sample
variance**** — roughly, the average distance of a data point from the mean.

## The formula and Bessel’s correction[#](#the-formula-and-bessel-s-correction "Link to this heading")

\[s = \sqrt{\frac{\sum\_{i=1}^{n} (x\_i - \bar{x})^2}{n - 1}}.\]

The denominator is \(n - 1\), not \(n\) — ****Bessel’s correction****. Dividing by
\(n\) would **underestimate** the true spread, because the deviations are taken from the
sample mean (which is itself fitted to the data); using \(n - 1\) makes \(s^2\) an
****unbiased estimator**** of the population variance \(\sigma^2\).

## Worked example[#](#worked-example "Link to this heading")

For \(\{5, 7, 9\}\): the mean is \(\bar{x} = 7\); deviations are
\(-2, 0, +2\); squared, \(4, 0, 4\), summing to 8; divide by \(n - 1 = 2\) to
get 4; the square root is \(s = 2\).

## Reading it[#](#reading-it "Link to this heading")

A ****small**** \(s\) means points cluster near the mean (low variability); a ****large****
\(s\) means they’re spread out; \(s = 0\) means every value is identical. The
****population**** standard deviation \(\sigma\) uses \(N\) in the denominator (the
whole population); the ****sample**** version uses \(n - 1\) (an estimate of
\(\sigma\)).

## Where it shows up[#](#where-it-shows-up "Link to this heading")

\(s\) is the raw material of inference: it feeds the ****standard error****
(\(SE = s/\sqrt{n}\)), the ****t-test****, ****ANOVA**** and ****regression****, and the
****confidence intervals**** built around sample means.

---

****Mind map — connected ideas****

> [Sample Mean](089-sample-mean.html) · [Standard Error (SE)](084-standard-error-se.html) · [True Mean (Population Mean)](085-true-mean-population-mean.html) · [Frequentist](059-frequentist.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html)

---

****More in Probability & Statistics Foundations****

> [Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html)

---

**Theme:** Probability & Statistics Foundations  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Sample Standard Deviation](https://insightful-data-lab.com/2025/08/25/sample-standard-deviation/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)