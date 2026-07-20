🧮  ****Statistical Tests****

# Statistical Tests[#](#statistical-tests "Link to this heading")

**Procedures for deciding whether data support a hypothesis.**

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

A ****statistical test**** is a formal procedure for deciding whether data provide enough evidence to ****reject****
a default assumption. Every test follows the same ****five steps****: state a ****null (H₀)**** and ****alternative
(Hₐ)**** hypothesis, pick a ****significance level α****, compute a ****test statistic****, find its ****p-value****, and
****interpret****.

## The decision rule[#](#the-decision-rule "Link to this heading")

****Reject H₀ when p < α**** (the data would be surprising if H₀ were true), otherwise ****fail to reject**** it.
Crucially, failing to reject is ****not**** proof that H₀ is true — absence of evidence is not evidence of
absence. Two errors are possible: ****Type I**** (rejecting a true H₀, rate α) and ****Type II**** (missing a real
effect, rate β).

## The families[#](#the-families "Link to this heading")

Tests split into ****parametric**** (assuming a distribution — t-test, ANOVA) and ****non-parametric****
(assumption-free — ****KS****, chi-square), and into one- vs two-sided. The right test depends on the ****data
type****, the ****question****, and the assumptions you can defend.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Chi-square (χ²) Test](324-chi-square-2-test.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Power Analysis](378-power-analysis.html) · [Statistical Power](348-statistical-power.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [A/B Testing](380-a-b-testing.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Statistical Tests](https://insightful-data-lab.com/2025/08/20/statistical-tests/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)