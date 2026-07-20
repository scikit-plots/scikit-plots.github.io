🔁  ****Prior Belief (or Prior Probability)****

# Prior Belief (or Prior Probability)[#](#prior-belief-or-prior-probability "Link to this heading")

**Belief about a parameter before observing the current data.**

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

A ****prior belief**** (or ****prior probability****) is your ****initial belief about a parameter
before seeing any new data****, encoded as a ****prior distribution****. It captures what is
plausible from past studies, domain expertise or reasonable assumptions: **what you think
before you see the evidence**.

## Where it sits[#](#where-it-sits "Link to this heading")

In Bayes’ theorem the prior \(P(H)\) is the term that the likelihood multiplies and
the data update:

\[P(H \mid D) = \frac{P(D \mid H)\, P(H)}{P(D)}.\]

## Kinds of prior[#](#kinds-of-prior "Link to this heading")

* ****Informative**** — built on strong prior knowledge (a drug’s effect is likely 5–10%,
  from past trials).
* ****Non-informative / flat**** — expresses near-ignorance (every value equally likely,
  e.g. \(\text{Beta}(1,1)\)).
* ****Weakly informative**** — adds gentle, realistic bounds to rule out absurd values
  (conversion rates almost never exceed 50%), which stabilises inference without forcing
  a conclusion.

## Example — coin toss[#](#example-coin-toss "Link to this heading")

For the probability of heads \(p\): a dogmatic “fair coin” prior fixes
\(p = 0.5\); total uncertainty is \(\text{Beta}(1,1)\) (uniform); “probably fair
but unsure” is \(\text{Beta}(20, 20)\), peaked at 0.5. Each is updated by the data
into a posterior.

## In A/B testing[#](#in-a-b-testing "Link to this heading")

A sensible prior on the conversion-rate difference — centred at 0 with small variance,
reflecting that new features rarely move conversion more than a few points — keeps early
results from over-reacting to noise; the experiment then updates it into a posterior on
the uplift.

## The key caveat[#](#the-key-caveat "Link to this heading")

The ****choice of prior matters most with small datasets**** and fades as data grows (the
likelihood takes over). A weakly informative prior is usually the safe default: enough
structure to regularise, not so much that it overrides the evidence.

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Posterior](063-posterior.html) · [Bayes’ Theorem](066-bayes-theorem.html) · [Beta Distribution](099-beta-distribution.html) · [Posterior belief](061-posterior-belief.html) · [Binomial Likelihood](060-binomial-likelihood.html)

---

> **Hint**
> ****More in Bayesian Inference****

[Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Prior Belief (or Prior Probability)](https://insightful-data-lab.com/2025/08/28/prior-belief-or-prior-probability/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)