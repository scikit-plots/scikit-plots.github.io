🔁  ****Posterior Probability****

# Posterior Probability[#](#posterior-probability "Link to this heading")

**The probability of a hypothesis or event evaluated under the posterior distribution.**

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

The ****posterior probability**** is the ****probability of a hypothesis (or parameter value)
after observing data****, computed with Bayes’ theorem by combining the ****prior**** (belief
before) with the ****likelihood**** (evidence from the data):

\[P(H \mid \text{data}) = \frac{P(\text{data} \mid H)\, P(H)}{P(\text{data})}.\]

## What it answers[#](#what-it-answers "Link to this heading")

It answers a directly useful question — **“given the data, how probable is this
hypothesis?”** — which is ****not**** what a frequentist p-value answers (**“if** \(H\_0\)
**were true, how likely is data this extreme?”**). The posterior is the quantity people
usually **think** a p-value gives them.

## Worked example[#](#worked-example "Link to this heading")

Is a coin biased toward heads? Take two point hypotheses — \(H\_0: p = 0.5\) and
\(H\_1: p = 0.7\) — with equal priors, and observe 7 heads in 10 tosses. The
likelihoods are

\[P(\text{data} \mid H\_0) = \binom{10}{7}(0.5)^{10} \approx 0.117, \qquad
P(\text{data} \mid H\_1) = \binom{10}{7}(0.7)^7 (0.3)^3 \approx 0.266,\]

so the posterior for the biased hypothesis is

\[P(H\_1 \mid \text{data}) = \frac{0.266 \times 0.5}{0.266 \times 0.5 + 0.117 \times 0.5} \approx 0.69.\]

After 7 heads in 10, there’s about a ****69% probability**** the coin is biased.

## Parameter posteriors[#](#parameter-posteriors "Link to this heading")

When the unknown is a continuous parameter rather than a discrete hypothesis, the
posterior is a whole ****distribution****,
\(P(\theta \mid \text{data}) \propto P(\text{data} \mid \theta)\, P(\theta)\) — the
object used to estimate means, regression coefficients or conversion rates. (A single
****posterior probability**** is then one number read off that distribution.)

## Where it shows up[#](#where-it-shows-up "Link to this heading")

Bayesian sequential testing (stop once \(P(H\_1 \mid \text{data}) > 0.95\)), Bayesian
estimation, ML models (Naive Bayes, Bayesian nets), and medical diagnosis (probability of
disease given a test result).

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Bayes’ Theorem](066-bayes-theorem.html) · [Posterior](063-posterior.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Posterior belief](061-posterior-belief.html) · [Frequentist](059-frequentist.html)

---

> **Hint**
> ****More in Bayesian Inference****

[Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Posterior Probability](https://insightful-data-lab.com/2025/08/25/posterior-probability/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)