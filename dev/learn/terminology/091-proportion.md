🎲  ****Proportion****

# Proportion[#](#proportion "Link to this heading")

**The fraction of a sample or population that has a given attribute.**

## What it is[#](#what-it-is "Link to this heading")

A ****proportion**** is a ****part-to-whole ratio**** — the fraction of a sample or population
with a given characteristic, usually the fraction of ****successes**** (“yes” outcomes). The
****sample proportion**** estimates the true population proportion \(p\):

\[\hat{p} = \frac{x}{n},\]

with \(x\) the number of successes and \(n\) the sample size.

## Population vs sample[#](#population-vs-sample "Link to this heading")

\(p\) is the ****true**** proportion in the whole population (fixed, usually unknown);
\(\hat{p}\) is computed from a sample and ****estimates**** \(p\).

## Examples[#](#examples "Link to this heading")

In a poll, 540 of 1,000 voters back candidate A → \(\hat{p} = 0.54\) (true \(p\)
might be 0.55). In quality control, 10 defective bulbs out of 200 →
\(\hat{p} = 0.05\), a 5% defect rate.

## In inference[#](#in-inference "Link to this heading")

Proportions drive categorical inference: a ****confidence interval****

\[\hat{p} \pm z\, \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}},\]

and hypothesis tests — a ****one-sample**** proportion test compares \(\hat{p}\) to a
hypothesised \(p\_0\), and a ****two-proportion z-test**** compares \(\hat{p}\_1\) and
\(\hat{p}\_2\) (the workhorse of A/B testing).

## Proportion ≈ probability[#](#proportion-probability "Link to this heading")

A sample proportion ****estimates a population probability****: if 30% of surveyed users
clicked an ad, the probability a random user clicks is \(\approx 0.30\). This is why
proportions sit at the centre of surveys, A/B tests, medical studies and quality control —
they turn yes/no data into estimable probabilities.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[True Conversion Rate](083-true-conversion-rate.html) · [Standard Error (SE)](084-standard-error-se.html) · [Probability](025-probability.html) · [True Population Parameter](092-true-population-parameter.html) · [Frequentist](059-frequentist.html) · [A/B Testing](380-a-b-testing.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Proportion](https://insightful-data-lab.com/2025/08/25/proportion/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)