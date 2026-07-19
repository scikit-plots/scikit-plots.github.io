🎲  ****Probability****

# Probability[#](#probability "Link to this heading")

**A number in [0, 1] quantifying how likely an event is.**

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

****Probability**** is a number between 0 and 1 that expresses how likely an event is:
0 means impossible, 1 means certain, and values in between are degrees of
likelihood. A fair coin landing heads has probability 0.5.

## The basic formula[#](#the-basic-formula "Link to this heading")

When every outcome is equally likely, probability is the ratio of favourable to
total outcomes:

\[P(E) = \frac{\text{number of favourable outcomes}}{\text{total number of outcomes}}.\]

Rolling a 4 on a fair die: \(P = 1/6 \approx 0.167\).

## Three ways to assign it[#](#three-ways-to-assign-it "Link to this heading")

* ****Theoretical**** — from the structure of the problem (a fair die, a fair coin).
* ****Experimental (frequentist)**** — from observed frequencies (flip a coin 100 times
  and count heads); it converges to the theoretical value as trials grow.
* ****Subjective (Bayesian)**** — a degree of belief (a forecaster’s “70% chance of
  rain”).

## The core rules[#](#the-core-rules "Link to this heading")

* ****Complement**** — \(P(\text{not } A) = 1 - P(A)\).
* ****Addition (OR)**** — in general
  \(P(A \cup B) = P(A) + P(B) - P(A \cap B)\), which reduces to
  \(P(A) + P(B)\) only when the events are mutually exclusive.
* ****Multiplication (AND)**** — in general
  \(P(A \cap B) = P(A)\,P(B \mid A)\), which reduces to \(P(A)\,P(B)\) only
  when the events are independent. Rolling a 2 then a 5 on two dice:
  \(\tfrac{1}{6} \times \tfrac{1}{6} = \tfrac{1}{36}\).

## Pitfalls and edge cases[#](#pitfalls-and-edge-cases "Link to this heading")

* ****Mutually exclusive is not independent**** — exclusive events **cannot** co-occur
  (and are strongly dependent); independent events have no influence on each other.
  Confusing the two is the classic probability error.
* ****Conditional probability**** — \(P(B \mid A) = P(A \cap B)/P(A)\) underlies the
  general AND rule and, ultimately, Bayes’ theorem.
* ****Normalisation**** — probabilities over all mutually exclusive outcomes must sum to
  exactly 1.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Bootstrap Confidence Intervals (CIs)](024-bootstrap-confidence-intervals-cis.html) · [Mann–Whitney U Test (also called the Wilcoxon rank-sum test)](026-mannwhitney-u-test-also-called-the-wilcoxon-rank.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Beta Distribution](099-beta-distribution.html) · [Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Probability](https://insightful-data-lab.com/2025/08/30/probability/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)