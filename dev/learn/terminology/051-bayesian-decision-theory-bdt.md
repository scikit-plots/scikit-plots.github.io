🔁  ****Bayesian Decision Theory (BDT)****

# Bayesian Decision Theory (BDT)[#](#bayesian-decision-theory-bdt "Link to this heading")

**Choosing the action that minimises expected loss under the posterior distribution.**

## Core idea[#](#core-idea "Link to this heading")

Bayesian inference hands you a ****posterior**** \(p(\theta \mid D)\) over unknown
parameters \(\theta\) given data \(D\) — but in practice you don’t just want
probabilities, you need to ****act****: classify the email, approve the loan, treat the
patient. ****Bayesian Decision Theory (BDT)**** turns the posterior into an **optimal
decision** under uncertainty.

## The three ingredients[#](#the-three-ingredients "Link to this heading")

* ****Actions**** \(a\) — the choices available (label spam vs not-spam).
* ****States of nature**** \(\theta\) — the unknown truth (the email really is or isn’t
  spam).
* ****Loss function**** \(L(a, \theta)\) — the cost of taking action \(a\) when the
  truth is \(\theta\) (flagging real mail as spam may cost far more than missing a
  spam).

## Bayes risk and the optimal rule[#](#bayes-risk-and-the-optimal-rule "Link to this heading")

The ****Bayes risk**** of an action is its posterior expected loss,

\[R(a \mid D) = \mathbb{E}\_{\theta \sim p(\theta \mid D)}\big[L(a, \theta)\big],\]

and the ****Bayes action**** is the one that minimises it:

\[a^\*(D) = \arg\min\_a R(a \mid D).\]

By construction this is the choice that does best on average under everything the
posterior knows.

## The classification special case[#](#the-classification-special-case "Link to this heading")

Let \(\theta \in \{C\_1, \dots, C\_k\}\) with posterior class probabilities
\(p(C\_i \mid x)\). Under ****0–1 loss**** (0 if correct, 1 if wrong), the Bayes-optimal
classifier reduces to

\[a^\*(x) = \arg\max\_i \; p(C\_i \mid x),\]

which is exactly the ****MAP (maximum a posteriori)**** classifier — pick the most probable
class.

## Asymmetric loss shifts the boundary[#](#asymmetric-loss-shifts-the-boundary "Link to this heading")

When errors cost differently, BDT moves the decision threshold rather than the 0.5
default. In a medical test where a missed disease (false negative) is worse than a
false alarm, the optimal rule classifies as positive at a ****lower**** posterior
probability — trading more false alarms for fewer missed cases.

## Where it shows up[#](#where-it-shows-up "Link to this heading")

BDT is the formal backbone of decision-making under uncertainty across ****ML****
(classification, regression, model selection), ****medicine**** (treat vs not), ****finance****
(portfolio choice under risk) and ****engineering / reinforcement learning**** — including
bandit strategies like Thompson Sampling, which is BDT applied sequentially with the
posterior updated as rewards arrive.

---

****Mind map — connected ideas****

> [Thompson Sampling (TS) in Bandits (Multi-Armed Bandit Problem (MAB))](050-thompson-sampling-ts-in-bandits-multi-armed-band.html) · [Loss Functions](289-loss-functions.html) · [Posterior](063-posterior.html) · [Bayes’ Theorem](066-bayes-theorem.html) · [Posterior Probability](073-posterior-probability.html) · [Bandit Algorithms](113-bandit-algorithms.html)

---

****More in Bayesian Inference****

> [Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Posterior probability of uplift](053-posterior-probability-of-uplift.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)

---

**Theme:** [Bayesian Inference](index.html#term-theme-bayes)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Bayesian Decision Theory (BDT)](https://insightful-data-lab.com/2025/08/29/bayesian-decision-theory-bdt/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)