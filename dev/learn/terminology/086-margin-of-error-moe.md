🎲  ****Margin of Error (MoE)****

# Margin of Error (MoE)[#](#margin-of-error-moe "Link to this heading")

**The half-width of a confidence interval: the plus/minus range around a point estimate.**

## What it is[#](#what-it-is "Link to this heading")

The ****margin of error (MoE)**** is the ****maximum expected gap between a sample estimate and
the true population parameter****, at a stated confidence level. It is the ****± half-width****
of a confidence interval:

\[\text{Confidence Interval} = \text{Estimate} \pm \text{MoE}.\]

A small MoE means a precise estimate; a large one, an imprecise estimate.

## How it’s built[#](#how-it-s-built "Link to this heading")

\[\text{MoE} = (\text{critical value}) \times (\text{standard error}),\]

where the ****critical value**** comes from the confidence level (1.96 for 95% under a normal
model) and the ****standard error**** measures sampling variability.

## Two levers: confidence and sample size[#](#two-levers-confidence-and-sample-size "Link to this heading")

* ****Confidence level ↑**** → larger critical value → ****larger**** MoE (more confidence costs
  width).
* ****Sample size ↑**** → smaller SE (\(\text{SE} \propto 1/\sqrt{n}\)) → ****smaller****
  MoE. Because of the square root, ****halving the MoE requires 4× the sample****.

## What it is not[#](#what-it-is-not "Link to this heading")

MoE captures ****random sampling error only****. It does ****not**** include bias, measurement
error, bad sampling design or model misspecification — so a tight MoE means ****precise,
not necessarily accurate****. Two common traps: it isn’t a hard maximum (it’s
probabilistic), and it depends on confidence and variability, not sample size alone.

## Why it matters[#](#why-it-matters "Link to this heading")

MoE turns a point estimate into an honest range (“support = 52% ± 3%” → true support
roughly 49–55%). It encourages ****interval thinking**** over point thinking, and ties
directly to significance: if a CI ****excludes**** the null value, the MoE is small enough to
declare a difference; if it ****includes**** the null, uncertainty swamps the effect.

---

****Mind map — connected ideas****

> [Standard Error (SE)](084-standard-error-se.html) · [Critical Value](087-critical-value.html) · [True Conversion Rate](083-true-conversion-rate.html) · [Frequentist](059-frequentist.html) · [True Mean (Population Mean)](085-true-mean-population-mean.html) · [A/B Testing](380-a-b-testing.html)

---

****More in Probability & Statistics Foundations****

> [Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html) · [Probability](025-probability.html)

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Margin of Error (MoE)](https://insightful-data-lab.com/2025/08/25/margin-of-error-moe/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: beginner](../../_tags/level-beginner.html)