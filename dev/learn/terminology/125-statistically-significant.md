🎲  ****Statistically Significant****

# Statistically Significant[#](#statistically-significant "Link to this heading")

**Describing a result unlikely under the null hypothesis at the chosen level.**

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

A result is ****statistically significant**** when the ****observed effect is unlikely to have
arisen by chance**** under the null hypothesis, judged against a chosen significance level
\(\alpha\). Operationally it means there is ****enough evidence to reject**** \(H\_0\) —
and crucially, “significant” here means **statistical evidence**, ****not real-world
importance****.

## The decision rule[#](#the-decision-rule "Link to this heading")

It comes down to comparing the ****p-value**** to the threshold: if \(p \le \alpha\), the
result ****is**** statistically significant and you reject \(H\_0\); if \(p > \alpha\), it
is ****not****, and you fail to reject. The usual \(\alpha\) is 0.05.

## Examples[#](#examples "Link to this heading")

A drug trial with \(p = 0.01\) against \(\alpha = 0.05\) ****is**** significant —
evidence the drug beats placebo. An A/B test where a new button lifts clicks 3% but returns
\(p = 0.2\) is ****not**** significant — the lift could be noise.

## The cautions[#](#the-cautions "Link to this heading")

Three matter. ****Significance is not importance****: with a large enough dataset a trivial 0.5%
effect can clear the bar yet mean nothing. It is ****sample-size dependent****: bigger samples
make significance easier to reach. And it is vulnerable to ****p-hacking**** — running many tests
or slicing data until something crosses \(\alpha\). A significant result is a starting
point for judgement, read alongside effect size and context, not a verdict on its own.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Statistical Significance](096-statistical-significance.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Significance Level (α)](105-significance-level.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Type I Error](080-type-i-error.html) · [Effect Size (δ)](106-effect-size.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Statistically Significant](https://insightful-data-lab.com/2025/08/24/statistically-significant/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)