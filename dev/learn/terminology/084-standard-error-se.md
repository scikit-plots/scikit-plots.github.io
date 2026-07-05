🎲  ****Standard Error (SE)****

# Standard Error (SE)[#](#standard-error-se "Link to this heading")

**The standard deviation of a statistic’s sampling distribution — how much an estimate varies across samples.**

## What it is[#](#what-it-is "Link to this heading")

The ****standard error (SE)**** measures ****how much a sample statistic — a mean or a
proportion — would vary across many random samples**** from the same population. It is the
****uncertainty of the estimate****: how far the sample value is likely to fall from the true
population value.

## The formulas[#](#the-formulas "Link to this heading")

For a ****mean**** (population SD \(\sigma\), or sample SD \(s\) when \(\sigma\)
is unknown):

\[SE\_{\bar{x}} = \frac{\sigma}{\sqrt{n}} \quad\left(\text{or } \frac{s}{\sqrt{n}}\right).\]

For a ****proportion****:

\[SE\_{\hat{p}} = \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}}.\]

## Key properties[#](#key-properties "Link to this heading")

****Bigger samples shrink it**** (\(SE \propto 1/\sqrt{n}\), so estimates get more
precise), ****more spread inflates it**** (larger \(\sigma\)), and it is the bridge to the
****Central Limit Theorem****: for large \(n\) the sample mean is approximately normal
with the SE as its spread.

## Examples[#](#examples "Link to this heading")

With \(\mu = 100, \sigma = 20, n = 25\), \(SE = 20/\sqrt{25} = 4\) — sample means
vary about ±4 around the truth. For a proportion, 520 “yes” out of 1,000 gives
\(\hat{p} = 0.52\) and \(SE = \sqrt{0.52 \times 0.48 / 1000} \approx 0.016\), a
±1.6% margin.

## SE vs standard deviation[#](#se-vs-standard-deviation "Link to this heading")

They are easy to confuse: the ****standard deviation**** describes the spread of **individual
data points**, while the ****standard error**** describes the spread of the **estimate**. SD is
variability in the data; SE is variability in the statistic — and SE shrinks with
\(n\) while SD does not.

## Where it shows up[#](#where-it-shows-up "Link to this heading")

The SE is the denominator of inference: ****confidence intervals****
(\(\text{estimate} \pm z\_{\alpha/2}\, SE\)), ****test statistics**** (the z- and
t-tests), and ****A/B comparisons**** of conversion rates all run on it.

---

****Mind map — connected ideas****

> [True Conversion Rate](083-true-conversion-rate.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Frequentist](059-frequentist.html) · [Conversion Rate (CR)](299-conversion-rate-cr.html) · [True Mean (Population Mean)](085-true-mean-population-mean.html) · [A/B Testing](380-a-b-testing.html)

---

****More in Probability & Statistics Foundations****

> [Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html)

---

**Theme:** Probability & Statistics Foundations  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Standard Error (SE)](https://insightful-data-lab.com/2025/08/25/standard-error-se/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)