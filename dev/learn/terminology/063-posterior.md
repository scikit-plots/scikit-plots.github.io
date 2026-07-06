🔁  ****Posterior****

# Posterior[#](#posterior "Link to this heading")

**The distribution of parameters given the data; the central object of Bayesian inference.**

## What it is[#](#what-it-is "Link to this heading")

The ****posterior**** is the ****updated probability distribution of a parameter after
observing data**** — the new belief formed by combining the ****prior**** (what you thought
before) with the ****likelihood**** (what the data say). The one-line version: **posterior =
prior updated with evidence**.

## Bayes’ theorem[#](#bayes-theorem "Link to this heading")

\[P(\theta \mid D) = \frac{P(D \mid \theta)\, P(\theta)}{P(D)}
\;\propto\; \underbrace{P(D \mid \theta)}\_{\text{likelihood}} \times \underbrace{P(\theta)}\_{\text{prior}},\]

with the marginal likelihood \(P(D)\) as the normalising constant. The
****proportional**** form is what you actually work with: the posterior **shape** is just
prior times likelihood.

## What you get from it[#](#what-you-get-from-it "Link to this heading")

The posterior is a ****distribution****, so it supports direct probability statements — “a
95% probability the conversion rate is between 4% and 6%” — which a frequentist
confidence interval cannot make. Point summaries (the posterior ****mean**** or
****mode/MAP****) and ****credible intervals**** are all read off it.

## Example — coin toss[#](#example-coin-toss "Link to this heading")

Uniform prior \(\text{Beta}(1,1)\), a Binomial likelihood, and 7 heads in 10 tosses
give

\[P(p \mid \text{data}) \propto p^7 (1-p)^3 \cdot 1 = \text{Beta}(8, 4),\]

a posterior centred near 0.67.

## The prior washes out[#](#the-prior-washes-out "Link to this heading")

A defining property: ****the more data you collect, the more the likelihood dominates and
the less the prior matters****. With small samples the prior shapes the answer; with large
ones the posterior is driven almost entirely by the data — which is why honest priors
are cheap insurance, not permanent bias. The posterior is the object **all** Bayesian
decisions are based on.

---

****Mind map — connected ideas****

> [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html) · [Posterior belief](061-posterior-belief.html) · [Bayes’ Theorem](066-bayes-theorem.html) · [Posterior Probability](073-posterior-probability.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [Beta Distribution](099-beta-distribution.html)

---

****More in Bayesian Inference****

> [Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Posterior](https://insightful-data-lab.com/2025/08/28/posterior/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)