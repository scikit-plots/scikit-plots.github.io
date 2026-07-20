🎲  ****Beta Distribution****

# Beta Distribution[#](#beta-distribution "Link to this heading")

**A continuous distribution on [0, 1]; the conjugate prior for a binomial probability.**

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

The ****Beta distribution**** is a continuous distribution on the interval \([0, 1]\),
which makes it the natural way to model a ****probability or proportion****. It has two
****shape parameters****, \(\alpha\) and \(\beta\), and density

\[f(p \mid \alpha, \beta) = \frac{1}{B(\alpha, \beta)}\, p^{\alpha - 1} (1 - p)^{\beta - 1},
\qquad 0 \le p \le 1,\]

where \(B(\alpha, \beta)\) is the Beta function, the normalising constant.

## Summary statistics[#](#summary-statistics "Link to this heading")

\[\mathbb{E}[p] = \frac{\alpha}{\alpha + \beta}, \qquad
\operatorname{Var}(p) = \frac{\alpha\beta}{(\alpha + \beta)^2 (\alpha + \beta + 1)},\]

and, when \(\alpha, \beta > 1\), the mode is
\((\alpha - 1)/(\alpha + \beta - 2)\). A larger \(\alpha + \beta\) means a more
concentrated (lower-variance) belief.

## The shape gallery[#](#the-shape-gallery "Link to this heading")

The two parameters give the family enormous flexibility:

* \(\alpha = \beta = 1\) — ****uniform**** on \([0, 1]\).
* \(\alpha > \beta\) — skewed toward 1; \(\alpha < \beta\) — skewed toward 0.
* \(\alpha, \beta > 1\) — unimodal (a single bump).
* \(\alpha, \beta < 1\) — U-shaped (mass piling up near 0 and 1).

## Why it’s central: conjugacy[#](#why-it-s-central-conjugacy "Link to this heading")

The Beta is the ****conjugate prior**** for the ****Binomial likelihood****. With a
\(\text{Beta}(\alpha, \beta)\) prior and \(k\) successes in \(n\) trials,
the posterior is again Beta:

\[p \mid \text{data} \sim \text{Beta}(\alpha + k,\; \beta + n - k).\]

So Bayesian updating is just **adding successes to** \(\alpha\) **and failures to**
\(\beta\) — no integration required.

## Examples[#](#examples "Link to this heading")

* \(\text{Beta}(1,1)\) — a flat prior, no preference before data.
* \(\text{Beta}(20, 20)\) — sharply peaked at 0.5, a strong “fair coin” belief.
* Start from \(\text{Beta}(1,1)\), observe 7 heads and 3 tails →
  \(\text{Beta}(8, 4)\), mean \(8/12 \approx 0.67\).

## Where it shows up[#](#where-it-shows-up "Link to this heading")

Bayesian inference over probabilities, ****A/B testing**** (belief about conversion rates),
reliability (success/failure rates), and any proportion modelling. Its multivariate
generalisation, the ****Dirichlet distribution****, plays the same conjugate role for the
categorical/multinomial likelihood. In code, `scipy.stats.beta` provides the density,
sampling and quantiles.

---

**Theme:** [Probability & Statistics Foundations](index.html#term-theme-probstats)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Binomial Likelihood](060-binomial-likelihood.html) · [Posterior belief](061-posterior-belief.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html) · [Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))](050-thompson-sampling-ts-in-bandits-multi-armed-band.html) · [Bayes’ Theorem](066-bayes-theorem.html)

---

> **Hint**
> ****More in Probability & Statistics Foundations****

[Confidence Level](285-confidence-level.html) · [Correlation](305-correlation.html) · [Critical Value](087-critical-value.html) · [Cumulative Distribution Function (CDF)](243-cumulative-distribution-function-cdf.html) · [Frequentist](059-frequentist.html) · [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Likelihood](304-likelihood.html) · [Margin of Error (MoE)](086-margin-of-error-moe.html) · [Mean](316-mean.html) · [Median](315-median.html) · [Normal Distribution](238-normal-distribution.html) · [Outlier](307-outlier.html) · [Population Proportion](199-population-proportion.html) · [Probability](025-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Beta Distribution](https://insightful-data-lab.com/2025/08/28/beta-distribution/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: beginner](../../_tags/level-beginner.html)