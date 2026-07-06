🎲  ****Critical Value****

# Critical Value[#](#critical-value "Link to this heading")

**The cutoff from a reference distribution that a test statistic must pass to reject the null.**

## What it is[#](#what-it-is "Link to this heading")

A ****critical value**** is the ****cutoff on a distribution that marks the rejection boundary****
for a hypothesis test. It separates the ****acceptance region**** (fail to reject \(H\_0\))
from the ****rejection region**** (reject \(H\_0\)), and depends on three things: the
****significance level**** \(\alpha\), whether the test is ****one- or two-tailed****, and the
****distribution**** used (Z, t, \(\chi^2\), F).

## The decision rule[#](#the-decision-rule "Link to this heading")

If the ****test statistic exceeds the critical value in magnitude****, reject \(H\_0\); if
it falls inside, fail to reject.

## Values by distribution[#](#values-by-distribution "Link to this heading")

* ****Z**** (large \(n\), known \(\sigma\)) — two-tailed \(\alpha = 0.05\) gives
  \(\pm 1.96\); one-tailed, \(1.645\).
* ****t**** (small \(n\), unknown \(\sigma\)) — two-tailed, \(\alpha = 0.05\),
  \(df = 10\) gives \(\pm 2.228\); as \(n\) grows, \(t \to z\).
* ****χ²**** (goodness-of-fit, independence) — \(\alpha = 0.05, df = 4\) gives
  \(\approx 9.49\).
* ****F**** (ANOVA) — \(\alpha = 0.05, df\_1 = 3, df\_2 = 20\) gives \(\approx 3.10\).

## Two roles[#](#two-roles "Link to this heading")

The same critical value drives both ****confidence intervals**** —
\(\text{estimate} \pm (\text{critical value}) \times \text{SE}\) (a 95% z-interval for
a mean of 100 with \(\text{SE} = 2\) is \([96.08, 103.92]\)) — and ****hypothesis
tests****.

## Worked test[#](#worked-test "Link to this heading")

Test \(H\_0 : \mu = 50\) vs \(H\_1 : \mu \neq 50\) with sample mean 53,
\(\sigma = 10, n = 100\):

\[z = \frac{53 - 50}{10/\sqrt{100}} = \frac{3}{1} = 3.0.\]

At \(\alpha = 0.05\) two-tailed the critical value is \(\pm 1.96\); since
\(3.0 > 1.96\), ****reject**** \(H\_0\).

---

****Mind map — connected ideas****

> [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Standard Error (SE)](084-standard-error-se.html) · [Type I Error](080-type-i-error.html) · [Frequentist](059-frequentist.html) · [True Mean (Population Mean)](085-true-mean-population-mean.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html)

---

****More in Probability & Statistics Foundations****

> [Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html) · [Probability](025-probability.html)

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Critical Value](https://insightful-data-lab.com/2025/08/25/critical-value/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)