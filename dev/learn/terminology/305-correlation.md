🎲  ****Correlation****

# Correlation[#](#correlation "Link to this heading")

**The strength and direction of a linear relationship between variables.**

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

****Correlation**** measures the ****strength and direction**** of the relationship between two variables. The
****Pearson coefficient**** — ****r**** in a sample, ****ρ**** in the population — runs from ****−1 to +1****: −1 a perfect
****negative**** line, +1 a perfect ****positive**** line, and ****0**** no ****linear**** relationship.

## How to read it[#](#how-to-read-it "Link to this heading")

The ****sign**** gives direction, the ****magnitude**** gives strength; squaring it yields ****r²****, the share of one
variable’s ****variance explained**** by the other. Rough effect-size guides call 0.1 small, 0.3 medium, 0.5
large — but a statistically significant r can still be ****trivially**** small in a large sample.

## Its limits[#](#its-limits "Link to this heading")

Correlation captures only ****linear**** association, so it can ****miss**** strong nonlinear patterns; it is ****not
robust**** to ****outliers****, which can inflate or hide it; and, crucially, ****correlation is not causation**** — two
variables can move together because a ****third**** drives both. Use rank correlation (Spearman) for monotonic,
non-linear ties.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[R² (R-squared)](259-r2-r-squared.html) · [Statistical Power](348-statistical-power.html) · [Statistical Tests](328-statistical-tests.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Population Proportion](199-population-proportion.html) · [Outlier](307-outlier.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html) · [Probability](025-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Correlation](https://insightful-data-lab.com/2025/08/21/correlation/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)