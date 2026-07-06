🔁  ****Bayes' Theorem****

# Bayes’ Theorem[#](#bayes-theorem "Link to this heading")

**The rule that turns a prior into a posterior using the likelihood: posterior is proportional to likelihood x prior.**

## What it is[#](#what-it-is "Link to this heading")

****Bayes’ theorem**** is the rule for ****updating a belief when new evidence arrives****. It
is the single equation that ties together the four quantities of Bayesian inference —
prior, likelihood, evidence and posterior.

## The formula[#](#the-formula "Link to this heading")

For a hypothesis \(H\) and data \(D\),

\[P(H \mid D) = \frac{P(D \mid H)\, P(H)}{P(D)},\]

where \(P(H)\) is the ****prior****, \(P(D \mid H)\) the ****likelihood****,
\(P(D)\) the ****marginal likelihood**** (evidence / normaliser) and
\(P(H \mid D)\) the ****posterior****. Stripped to its working form,

\[\text{Posterior} \propto \text{Prior} \times \text{Likelihood}.\]

## Worked example — the base-rate trap[#](#worked-example-the-base-rate-trap "Link to this heading")

A disease affects 1% of people; a test is 99% sensitive and has a 5% false-positive
rate. A patient tests positive — how likely are they to be sick? The evidence is

\[P(+) = \underbrace{0.99 \times 0.01}\_{\text{true positive}} + \underbrace{0.05 \times 0.99}\_{\text{false positive}} = 0.0099 + 0.0495 = 0.0594,\]

so

\[P(\text{disease} \mid +) = \frac{0.0099}{0.0594} \approx 0.167.\]

Despite a positive result on a “99% accurate” test, the chance of disease is only about
****16.7%**** — because the disease is rare, false positives swamp the true ones. This
****base-rate fallacy**** is exactly what Bayes’ theorem corrects: the rare prior pulls the
posterior far below the test’s sensitivity.

## Where it shows up[#](#where-it-shows-up "Link to this heading")

Bayesian inference and updating, the ****Naive Bayes**** classifier and Bayesian networks,
medical diagnostics, ****A/B testing**** (Bayesian sequential testing, posterior probability
of uplift), fraud and risk estimation, and everyday belief revision under new
information.

---

****Mind map — connected ideas****

> [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html) · [Posterior](063-posterior.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Posterior Probability](073-posterior-probability.html)

---

****More in Bayesian Inference****

> [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Bayes’ Theorem](https://insightful-data-lab.com/2025/08/28/bayes-theorem/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)