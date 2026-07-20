🧮  ****Confidence Intervals (CIs)****

# Confidence Intervals (CIs)[#](#confidence-intervals-cis "Link to this heading")

**A range that would contain the true parameter a stated fraction of the time.**

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

A ****confidence interval**** is a ****range**** of plausible values for an unknown parameter — a mean, a
proportion — computed from a sample together with a ****confidence level**** (typically ****95%****). It expresses
the ****uncertainty**** in a point estimate: a wider interval means less precision.

## What the level means[#](#what-the-level-means "Link to this heading")

The confidence level is a statement about the ****procedure****, not any one interval. If you repeated the study
many times, about ****95% of the intervals**** you built would contain the true value — it is ****not**** a 95%
probability that the parameter lies in **this** interval (in the frequentist view the parameter is fixed).
Intervals ****narrow**** as the sample size ****grows****.

## How they’re built[#](#how-they-re-built "Link to this heading")

A CI is typically an estimate ****± a margin of error**** (a critical value times a ****standard error****), but for
tricky quantities like a ****binomial proportion**** there are several methods — ****Wald****, ****Wilson****,
****Clopper–Pearson****, ****bootstrap**** — that trade ****coverage**** against ****width****.

---

**Theme:** [Statistical Inference & Power](index.html#term-theme-inference)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Wilson Score Interval](357-wilson-score-interval.html) · [Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Standard Error (SE)](084-standard-error-se.html) · [Statistical Tests](328-statistical-tests.html) · [Normal Distribution](238-normal-distribution.html)

---

> **Hint**
> ****More in Statistical Inference & Power****

[A Priori Power Analysis](095-a-priori-power-analysis.html) · [Chi-square (χ²) Test](324-chi-square-2-test.html) · [Clopper–Pearson Interval](356-clopperpearson-interval.html) · [Compromise Power Analysis](093-compromise-power-analysis.html) · [Effect Size (δ)](106-effect-size.html) · [Hypothesis Testing](107-hypothesis-testing.html) · [Kolmogorov–Smirnov (KS) Test](325-kolmogorovsmirnov-ks-test.html) · [Minimum Detectable Lift (MDL)](101-minimum-detectable-lift-mdl.html) · [P-Value (probability value)](118-p-value-probability-value.html) · [Post Hoc Power Analysis](094-post-hoc-power-analysis.html) · [Power (1 – β)](104-power-1.html) · [Power Analysis](378-power-analysis.html) · [Sample size](103-sample-size.html) · [Significance Level (α)](105-significance-level.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Confidence Intervals (CIs)](https://insightful-data-lab.com/2025/08/19/confidence-intervals-cis/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)