🎲  ****Statistical Significance****

# Statistical Significance[#](#statistical-significance "Link to this heading")

**Evidence that an observed effect is unlikely under the null hypothesis, judged against a chosen threshold.**

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

A result is ****statistically significant**** when it is ****unlikely to have arisen by random
chance alone, assuming the null hypothesis**** \(H\_0\) ****is true**** — operationally, when
the ****p-value**** \(\le \alpha\), the predefined significance level. It answers one
narrow question: **is this result sufficiently inconsistent with** \(H\_0\)?

## What it does not tell you[#](#what-it-does-not-tell-you "Link to this heading")

Significance says nothing about ****how large**** the effect is, ****whether it matters****, or
****whether it will replicate****. And the ****p-value**** is widely misread: it is the
probability, **under** \(H\_0\), of data as extreme or more extreme than observed — **not**
the probability that \(H\_0\) is true, nor the probability the result is “due to
chance.”

## Statistical vs practical significance[#](#statistical-vs-practical-significance "Link to this heading")

These come apart. ****Statistical**** significance is about **detectability** and depends
heavily on sample size; ****practical**** significance is about **real-world importance** and
depends on effect size and context. With a large enough \(n\), a ****trivial**** effect
becomes significant; with a small \(n\), a ****meaningful**** one may not — so a result can
be significant yet practically meaningless.

## Significance vs power[#](#significance-vs-power "Link to this heading")

Significance is a ****binary**** outcome (yes/no); ****power**** is the **probability** of achieving
it when a real effect exists. High power makes a true effect likely to register; under low
power, a non-significant result is ****ambiguous**** (it may just reflect too little data).

## A decision rule, not a verdict[#](#a-decision-rule-not-a-verdict "Link to this heading")

Treat significance as a ****decision rule for controlling false positives under repeated
use**** — part of a risk-management system, not a proof of truth. The \(\alpha = 0.05\)
line is a ****convention****, not a law: “significant” is not “important,” and “not
significant” is not “no effect.” Good practice reports ****effect sizes, confidence
intervals, and power**** alongside it, never significance alone.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[P-Value (probability value)](118-p-value-probability-value.html) · [Type I Error](080-type-i-error.html) · [Statistical Power](348-statistical-power.html) · [Effect Size (δ)](106-effect-size.html) · [Frequentist](059-frequentist.html) · [A/B Testing](380-a-b-testing.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Statistical Significance](https://insightful-data-lab.com/2025/08/24/significance/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)