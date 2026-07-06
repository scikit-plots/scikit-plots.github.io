🔁  ****Bayesian Inference.****

# Bayesian Inference.[#](#bayesian-inference "Link to this heading")

**Updating beliefs about parameters using priors and observed data.**

## What it is[#](#what-it-is "Link to this heading")

****Bayesian inference**** updates ****beliefs**** in light of evidence using ****Bayes’ theorem**** — it combines a
****prior**** (what you believed before) with the ****likelihood**** (how probable the data are under each hypothesis)
to produce a ****posterior**** (what you believe after):

\[\text{posterior} \propto \text{prior} \times \text{likelihood}.\]

Parameters are treated as ****random variables**** with distributions, not fixed points.

## What makes it distinctive[#](#what-makes-it-distinctive "Link to this heading")

Because it yields a ****full posterior distribution****, Bayesian inference quantifies ****uncertainty**** directly — a
****credible interval**** says there’s a 95% probability the parameter lies inside it — and it naturally
****incorporates prior knowledge**** and ****updates sequentially**** as data arrive. This contrasts with the
****frequentist**** view of fixed parameters and p-values.

## The catch and the tools[#](#the-catch-and-the-tools "Link to this heading")

Posteriors are usually ****intractable****, so they’re approximated with ****Markov Chain Monte Carlo**** or
variational methods via tools like ****Stan****, ****PyMC****, or NumPyro. Bayesian inference underlies ****Bayesian A/B
testing****, ****Bayesian optimization****, and the ****causal**** tree models above.

---

****Mind map — connected ideas****

> [Causal Trees](301-causal-trees.html) · [Likelihood](304-likelihood.html) · [Normal Distribution](238-normal-distribution.html) · [Statistical Tests](328-statistical-tests.html) · [Confidence Intervals (CIs)](377-confidence-intervals-cis.html) · [Uplift Random Forests](302-uplift-random-forests.html)

---

****More in Bayesian Inference****

> [Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Bayesian Inference.](https://insightful-data-lab.com/2025/08/19/bayesian-inference/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)