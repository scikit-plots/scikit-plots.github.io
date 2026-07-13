🔁  ****Parameter(s) of Interest****

# Parameter(s) of Interest[#](#parameter-s-of-interest "Link to this heading")

**The unknown quantities an analysis sets out to estimate.**

## What it is[#](#what-it-is "Link to this heading")

The ****parameter(s) of interest**** are the ****population characteristics you set out to
estimate or test**** — usually unknown population values like a true mean, a true
proportion, a difference in means, or regression coefficients. The whole study or
experiment is designed to learn about them. In short: **the parameter of interest is the
thing you actually care about measuring.**

## Parameter vs statistic[#](#parameter-vs-statistic "Link to this heading")

The crucial distinction: the ****parameter**** is the fixed (usually unknown) population
value; the ****statistic**** is the sample quantity you compute to **estimate** it.

* Population mean \(\mu\) — estimated by the sample mean \(\bar{x}\).
* Population proportion \(p\) — estimated by \(\hat{p}\).
* Difference in means \(\mu\_1 - \mu\_2\) — estimated by the difference in sample
  means.
* Regression coefficients \(\beta\) — estimated by \(\hat{\beta}\).

## Examples[#](#examples "Link to this heading")

* ****A/B test**** — the true conversion rates \(p\_A\) and \(p\_B\), or their
  difference \(p\_B - p\_A\).
* ****Medical trial**** — the average treatment effect,

  \[\text{ATE} = P(\text{recovery} \mid \text{drug}) - P(\text{recovery} \mid \text{placebo}).\]
* ****Regression**** — the coefficients \(\beta\_1, \beta\_2, \dots\) linking predictors
  to the outcome.

## Why it matters[#](#why-it-matters "Link to this heading")

Naming the parameter of interest is the ****first step**** in designing any study: every
estimator, hypothesis test (\(H\_0\) vs \(H\_1\)) and confidence (or credible)
interval is built to make inferences about it. Frequentists treat it as a fixed unknown
constant; Bayesians put a posterior distribution over it — but in both frameworks it is
the **target** of the analysis.

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Frequentist](059-frequentist.html) · [Posterior](063-posterior.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html) · [A/B Testing](380-a-b-testing.html) · [True Conversion Rate](083-true-conversion-rate.html)

---

> **Hint**
> ****More in Bayesian Inference****

[Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Parameter(s) of Interest](https://insightful-data-lab.com/2025/08/28/parameters-of-interest/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)