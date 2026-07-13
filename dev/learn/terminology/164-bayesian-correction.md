🔁  ****Bayesian Correction****

# Bayesian Correction[#](#bayesian-correction "Link to this heading")

**Adjusting estimates using prior information within a Bayesian framework.**

## What it is[#](#what-it-is "Link to this heading")

****Bayesian correction**** uses ****Bayes’ theorem**** to ****adjust raw probabilities, predictions or test
results**** when the observed data is biased, noisy or incomplete. It is, in essence, “correcting”
outputs by ****Bayesian updating**** — folding in what we already know.

## Where it appears[#](#where-it-appears "Link to this heading")

Several places. ****Base-rate adjustment****: a model trained as if classes were balanced can be
corrected toward the ****true prior**** — a 90% rare-disease score shrinks sharply once low prevalence
is accounted for, via \(P(y=1 \mid x) \propto P(x \mid y=1)\, P(y=1)\). ****Diagnostic tests****:
combining sensitivity and specificity with prevalence gives the true posterior,
\(P(\text{disease} \mid +) = \frac{P(+ \mid \text{disease})\, P(\text{disease})}{P(+)}\).
****Label-noise correction**** estimates a noise transition matrix (e.g. for crowdsourced labels), and
****Bayesian calibration**** updates scores much like Platt scaling but through Bayesian inference.

## An example[#](#an-example "Link to this heading")

A spam classifier scores an email ****0.8****, but the true spam base rate is only ****10%****. After
Bayesian correction with that prior, the calibrated probability might fall to ****0.4**** — preventing
****overconfidence**** when the prior is low.

## Why it’s useful[#](#why-it-s-useful "Link to this heading")

The method handles ****class imbalance****, corrects for ****measurement noise****, and yields
****better-calibrated probabilities**** with ****principled uncertainty**** — exactly what risk-sensitive
decisions need. It is the Bayesian sibling of recalibration: where Platt scaling fits a curve,
Bayesian correction reasons from priors.

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Bayes’ Theorem](066-bayes-theorem.html) · [Recalibration](159-recalibration.html) · [Platt Scaling](280-platt-scaling.html) · [Posterior](063-posterior.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html) · [Recalibrate Thresholds](165-recalibrate-thresholds.html)

---

> **Hint**
> ****More in Bayesian Inference****

[Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Bayesian Correction](https://insightful-data-lab.com/2025/08/23/bayesian-correction/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)