🧮  ****T-Test****

# T-Test[#](#t-test "Link to this heading")

**A hypothesis test comparing means using the t-distribution for smaller samples.**

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

A ****t-test**** asks whether the ****means of two groups differ significantly****, using the
****Student’s t-distribution****. It is the tool of choice when the ****sample is small****
(\(n < 30\)) and the ****population standard deviation is unknown**** — estimated instead
from the data, which the heavier-tailed t accounts for.

## The three forms[#](#the-three-forms "Link to this heading")

A ****one-sample**** t-test compares a sample mean to a known value (is the class average
different from 70?); an ****independent two-sample**** test compares two separate groups (male
vs female scores); and a ****paired**** test compares the **same** units measured twice (weight
before vs after a diet).

## The statistic[#](#the-statistic "Link to this heading")

For the independent test,

\[t = \frac{\bar{X}\_1 - \bar{X}\_2}{\sqrt{\dfrac{s\_1^2}{n\_1} + \dfrac{s\_2^2}{n\_2}}},\]

the difference in means over its standard error. Compare \(t\) to a ****critical value****
from the t-distribution at the appropriate ****degrees of freedom**** (for the independent test,
\(df = n\_1 + n\_2 - 2\)), or read a p-value.

## Example[#](#example "Link to this heading")

A sample of 25 with mean 72, against a hypothesised population mean of 70 with
\(s = 5\), gives \(t = (72 - 70)/(5/\sqrt{25}) = 2\). The critical value at
\(df = 24, \alpha = 0.05\) is about ****2.064****, and since \(2 < 2.064\) we ****fail to
reject**** \(H\_0\) — no significant difference.

## Assumptions[#](#assumptions "Link to this heading")

The data should be roughly ****normal****; the independent test also assumes ****independent
groups**** and ****equal variances**** — if the variances differ, use ****Welch’s t-test****. As
\(n\) grows the t-distribution approaches the normal, and the t-test converges to the
z-test.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Z-Test](119-z-test.html) · [Sample Mean](089-sample-mean.html) · [Sample Standard Deviation](088-sample-standard-deviation.html) · [Critical Value](087-critical-value.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Effect Size (δ)](106-effect-size.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [T-Test](https://insightful-data-lab.com/2025/08/24/t-test/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)