🔁  ****MCMC (Markov Chain Monte Carlo)****

# MCMC (Markov Chain Monte Carlo)[#](#mcmc-markov-chain-monte-carlo "Link to this heading")

**Sampling from a posterior via a Markov chain whose stationary distribution is that posterior.**

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

****MCMC (Markov Chain Monte Carlo)**** is a family of algorithms for ****drawing samples
from complex probability distributions**** — above all the ****posterior**** in Bayesian
inference, which usually has no closed form. Rather than computing the distribution
analytically, MCMC generates a long ****sequence of samples**** that approximate it: it
lets you approximate posteriors by simulation when the math is intractable.

## The two ideas in the name[#](#the-two-ideas-in-the-name "Link to this heading")

* ****Markov chain**** — a sequence of states where the next depends only on the current
  one (not the full history); this structure is what lets the sampler **walk** through
  the distribution.
* ****Monte Carlo**** — approximating integrals and expectations by repeated random
  sampling (the classic toy is estimating \(\pi\) from random points in a square).

Put together: build a Markov chain whose ****stationary distribution is the posterior****,
run it long enough, and its samples approximate that posterior.

## The estimator[#](#the-estimator "Link to this heading")

Most Bayesian quantities are posterior expectations,

\[\mathbb{E}[f(\theta) \mid \text{data}] = \int f(\theta)\, p(\theta \mid \text{data})\, d\theta,\]

intractable in high dimensions — so MCMC approximates it by the sample average over the
chain,

\[\mathbb{E}[f(\theta) \mid \text{data}] \approx \frac{1}{N} \sum\_{i=1}^N f(\theta\_i),
\qquad \theta\_i \sim \text{MCMC}.\]

## The algorithms[#](#the-algorithms "Link to this heading")

* ****Metropolis–Hastings**** — propose a move, then accept or reject it by a ratio of
  posterior densities.
* ****Gibbs sampling**** — a special case that updates each parameter from its full
  conditional; natural for hierarchical models.
* ****Hamiltonian Monte Carlo (HMC)**** — uses gradients to propose distant,
  high-acceptance moves; the engine of ****Stan****.
* ****NUTS (No-U-Turn Sampler)**** — an adaptive HMC that tunes step size and trajectory
  length automatically; the default in ****PyMC**** and ****Stan****.

## Example[#](#example "Link to this heading")

Coin toss with 7 heads, 3 tails and a \(\text{Beta}(2,2)\) prior gives a
\(\text{Beta}(9,5)\) posterior. Here it’s closed-form, but if it weren’t, MCMC
would draw thousands of samples of \(p\) to estimate the posterior mean, variance
and credible interval.

## Using it well[#](#using-it-well "Link to this heading")

MCMC handles very complex, high-dimensional posteriors and yields ****full samples**** (any
posterior summary is then just a function of them). The costs: it is ****computationally
expensive****, needs ****tuning**** (burn-in, thinning, proposal scale), and requires
****convergence diagnostics**** — discard a ****burn-in****, then check the
potential-scale-reduction \(\hat{R}\) (near 1.0) and the effective sample size to
confirm the chains have mixed. Versus ****variational inference****, MCMC is asymptotically
exact but slower; VI is faster but approximate.

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Variational Inference (VI)](056-variational-inference-vi.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Posterior](063-posterior.html) · [Beta Distribution](099-beta-distribution.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html)

---

> **Hint**
> ****More in Bayesian Inference****

[Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [MCMC (Markov Chain Monte Carlo)](https://insightful-data-lab.com/2025/08/28/mcmc-markov-chain-monte-carlo/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)