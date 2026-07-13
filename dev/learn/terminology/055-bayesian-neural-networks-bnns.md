🔁  ****Bayesian Neural Networks (BNNs)****

# Bayesian Neural Networks (BNNs)[#](#bayesian-neural-networks-bnns "Link to this heading")

**Neural networks with distributions over their weights, producing predictive uncertainty.**

## From point estimates to distributions[#](#from-point-estimates-to-distributions "Link to this heading")

A standard neural network fixes its weights \(W\) after training — gradient descent
finds a single best ****point estimate****. That captures no ****uncertainty****: on limited or
noisy data the network can be confidently wrong. A ****Bayesian neural network (BNN)****
fixes this by treating the weights as ****random variables**** with distributions.

## The Bayesian view of weights[#](#the-bayesian-view-of-weights "Link to this heading")

Instead of one weight vector, infer a ****posterior**** over weights:

\[p(W \mid D) \propto p(D \mid W)\, p(W),\]

with prior \(p(W)\) (often a zero-mean Gaussian), likelihood \(p(D \mid W)\)
(how well the weights explain the data) and posterior \(p(W \mid D)\). Training
therefore yields a ****whole distribution**** of plausible networks, not one.

## Prediction integrates over weights[#](#prediction-integrates-over-weights "Link to this heading")

Predictions average over every weight setting, weighted by posterior probability:

\[p(y \mid x, D) = \int p(y \mid x, W)\, p(W \mid D)\, dW.\]

This separates two kinds of uncertainty: ****aleatoric**** (noise in the labels) and
****epistemic**** (not enough data to pin down the weights) — and the output is a
**distribution** over predictions, not a point.

## Why it’s hard, and how it’s done[#](#why-it-s-hard-and-how-it-s-done "Link to this heading")

That integral is ****intractable****, so BNNs rely on approximation:

* ****Variational inference**** — approximate the posterior with a simpler \(q(W)\).
* ****MCMC**** — sample weights from the posterior (accurate but slow).
* ****MC Dropout**** (Gal & Ghahramani, 2016) — keeping dropout **on at test time**
  approximates sampling from a weight distribution, a cheap practical trick.

## Why it matters[#](#why-it-matters "Link to this heading")

A BNN ****knows when it doesn’t know****: it resists overconfident errors and generalises
better, which is decisive in medicine, self-driving and finance where the **cost of an
uncertain prediction** matters. The price is heavier training and inference, sensitivity
to the approximation chosen, and less mainstream tooling than standard nets.

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Variational Inference (VI)](056-variational-inference-vi.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Posterior](063-posterior.html) · [Bayesian Inference.](375-bayesian-inference.html)

---

> **Hint**
> ****More in Bayesian Inference****

[Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Bayesian Neural Networks (BNNs)](https://insightful-data-lab.com/2025/08/29/bayesian-neural-networks-bnns/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)