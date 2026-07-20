🔁  ****Posterior belief****

# Posterior belief[#](#posterior-belief "Link to this heading")

**Updated belief about a parameter after combining prior and data through Bayes’ theorem.**

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

****Posterior belief**** is your ****updated belief about a parameter after seeing data**** —
represented, in Bayesian statistics, by the ****posterior distribution****. It fuses two
ingredients: the ****prior**** (what you believed beforehand) and the ****likelihood**** (what
the data say). In a sentence: **posterior = prior updated by evidence**.

## Bayes’ theorem[#](#bayes-theorem "Link to this heading")

\[P(\theta \mid D) = \frac{P(D \mid \theta)\, P(\theta)}{P(D)},\]

with prior \(P(\theta)\), likelihood \(P(D \mid \theta)\), evidence
\(P(D)\), and posterior \(P(\theta \mid D)\).

## It’s a distribution, not a number[#](#it-s-a-distribution-not-a-number "Link to this heading")

The posterior is a ****whole distribution**** over parameter values, showing how plausible
each value is **after** the data — and from it you read off summaries (mean, mode,
intervals) or specific ****posterior probabilities**** of events.

## Example — coin toss[#](#example-coin-toss "Link to this heading")

A uniform prior \(\text{Beta}(1,1)\), updated with 7 heads in 10 tosses, gives the
posterior \(\text{Beta}(8, 4)\), centred near 0.67 — the updated belief that
\(p\) is most likely around two-thirds.

## Posterior belief vs posterior probability[#](#posterior-belief-vs-posterior-probability "Link to this heading")

A useful distinction: the ****posterior belief**** is the entire distribution
(\(p \sim \text{Beta}(8, 4)\)), while a ****posterior probability**** is a single number
pulled from it — for instance \(P(p > 0.5 \mid \text{data}) = 0.9\). The latter is
one summary of the former.

## Where it shows up[#](#where-it-shows-up "Link to this heading")

A/B testing (belief about a conversion-rate difference), clinical trials (belief about
treatment effect), and any Bayesian model that updates parameter distributions as data
arrive.

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html) · [Bayes’ Theorem](066-bayes-theorem.html) · [Posterior Probability](073-posterior-probability.html) · [Beta Distribution](099-beta-distribution.html) · [Binomial Likelihood](060-binomial-likelihood.html)

---

> **Hint**
> ****More in Bayesian Inference****

[Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Posterior belief](https://insightful-data-lab.com/2025/08/28/posterior-belief/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)