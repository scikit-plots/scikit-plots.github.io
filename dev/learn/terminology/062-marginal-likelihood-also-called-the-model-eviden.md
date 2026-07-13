🔁  ****Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)****

# Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)[#](#marginal-likelihood-also-called-the-model-evidence-or-integrated-likelihood "Link to this heading")

**The probability of the data averaged over the prior — the normaliser and a model-comparison score.**

## What it is[#](#what-it-is "Link to this heading")

The ****marginal likelihood**** — also called the ****model evidence**** or ****integrated
likelihood**** — is the probability of the observed data under a model, ****averaged over
all possible parameter values****. It is the ****denominator**** in Bayes’ theorem:

\[P(\theta \mid D) = \frac{P(D \mid \theta)\, P(\theta)}{P(D)},
\qquad
P(D) = \int P(D \mid \theta)\, P(\theta)\, d\theta.\]

In words, \(P(D)\) is the ****prior-weighted average**** of the likelihood — the
overall probability of the data, considering every parameter value the prior allows.

## Two jobs[#](#two-jobs "Link to this heading")

****1. Normalisation.**** Dividing by \(P(D)\) is what makes the posterior integrate to
1 — without it, prior × likelihood is only **proportional** to the posterior.

****2. Model comparison.**** Because it scores how well an **entire model** (not one parameter
setting) predicts the data, the marginal likelihood is the basis of the ****Bayes
factor****,

\[\text{BF} = \frac{P(D \mid M\_1)}{P(D \mid M\_2)},\]

which weighs two competing models — a higher marginal likelihood means the model
explains the data better, with a built-in Occam penalty for needless complexity.

## Example — coin toss[#](#example-coin-toss "Link to this heading")

With a uniform prior \(\text{Beta}(1,1)\) and 7 heads in 10 tosses,

\[P(D) = \int\_0^1 \binom{10}{7} p^7 (1-p)^3 \, dp,\]

the overall probability of “7 heads out of 10” averaged across all plausible \(p\).

## Why it’s hard[#](#why-it-s-hard "Link to this heading")

That integral is usually ****intractable**** in real models, which is the whole reason
approximate methods exist: the ****Laplace approximation****, ****variational inference****
(whose ELBO is a **lower bound** on \(\log P(D)\)), and ****MCMC****-based estimators all
exist to approximate the evidence for posterior computation and model selection.

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Posterior](063-posterior.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html) · [Bayes’ Theorem](066-bayes-theorem.html) · [Variational Inference (VI)](056-variational-inference-vi.html) · [Binomial Likelihood](060-binomial-likelihood.html)

---

> **Hint**
> ****More in Bayesian Inference****

[Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](https://insightful-data-lab.com/2025/08/28/marginal-likelihood-also-called-the-model-evidence-or-integrated-likelihood/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)