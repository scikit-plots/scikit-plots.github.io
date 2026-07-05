🔁  ****Posterior probability of uplift****

# Posterior probability of uplift[#](#posterior-probability-of-uplift "Link to this heading")

**The posterior probability that a treatment’s effect exceeds zero (or a chosen threshold).**

## The question it answers[#](#the-question-it-answers "Link to this heading")

In an experiment with a binary outcome (say conversion), the ****uplift**** is the
difference in success rates between treatment and control,

\[u = p\_T - p\_C,\]

and the decision-relevant quantity is not a p-value but the ****posterior probability
that the uplift is positive**** (or beats a business threshold \(\tau\)):

\[\Pr(u > 0 \mid \text{data}) \quad\text{or}\quad \Pr(u > \tau \mid \text{data}).\]

## Beta–Binomial model (binary outcomes)[#](#betabinomial-model-binary-outcomes "Link to this heading")

With \(s\_T\) successes in \(n\_T\) trials (treatment) and \(s\_C\) in
\(n\_C\) (control), conjugate Beta priors give Beta posteriors:

\[p\_T \mid \text{data} \sim \text{Beta}(\alpha\_T + s\_T,\; \beta\_T + n\_T - s\_T),
\qquad
p\_C \mid \text{data} \sim \text{Beta}(\alpha\_C + s\_C,\; \beta\_C + n\_C - s\_C).\]

The difference \(u = p\_T - p\_C\) has no closed-form CDF, so estimate it by ****Monte
Carlo****: draw \(p\_T^{(m)}\) and \(p\_C^{(m)}\) from their posteriors, form
\(u^{(m)} = p\_T^{(m)} - p\_C^{(m)}\), and approximate

\[\Pr(u > \tau \mid \text{data}) \approx \frac{1}{M}\sum\_{m=1}^M \mathbf{1}\{u^{(m)} > \tau\}.\]

The empirical quantiles of \(\{u^{(m)}\}\) give a ****credible interval**** for the
uplift.

```
import numpy as np
pT = np.random.beta(1 + sT, 1 + nT - sT, size=200_000)
pC = np.random.beta(1 + sC, 1 + nC - sC, size=200_000)
u  = pT - pC
prob_uplift = np.mean(u > tau)          # Pr(u > tau | data)
ci = np.quantile(u, [0.025, 0.975])     # 95% credible interval

```

## Continuous outcomes (revenue)[#](#continuous-outcomes-revenue "Link to this heading")

For approximately Normal outcomes with unknown means, a Normal–Inverse-Gamma posterior
makes the mean difference \(d = \mu\_T - \mu\_C\) (approximately) Normal, so the
uplift probability is closed-form:

\[\Pr(d > \tau \mid \text{data}) = 1 - \Phi\!\left(\frac{\tau - \hat{d}}{\text{SE}\_{\text{post}}}\right).\]

## Bayesian logistic / hierarchical regression[#](#bayesian-logistic-hierarchical-regression "Link to this heading")

With covariates and a treatment indicator,

\[\Pr(Y=1 \mid x, T) = \text{logit}^{-1}\!\big(\beta\_0 + \beta^\top x + \gamma T + \delta^\top (x \cdot T)\big),\]

per-draw segment uplift is computed from posterior coefficient samples, and
****hierarchical priors**** borrow strength across small segments to reduce false
positives.

## What to report, and how to decide[#](#what-to-report-and-how-to-decide "Link to this heading")

Decision-friendly outputs: the posterior probability \(\Pr(u > \tau)\), the
****expected uplift**** \(\mathbb{E}[u \mid \text{data}]\), a 95% credible interval,
and a ****risk-aware rule**** — “ship if \(\Pr(u > \tau) \ge q\)” (e.g. \(q =
0.9\)). Practical guidance: use weakly informative priors (Beta(1,1) or Beta(0.5,0.5))
for small samples, prefer \(\Pr(u > \tau)\) over point estimates when a bad launch
is costly, model many arms hierarchically, and — unlike fixed-horizon tests — Bayesian
posteriors support ****always-valid**** monitoring without naive peeking penalties.

---

****Mind map — connected ideas****

> [A/B Testing](380-a-b-testing.html) · [Conversion Rate Uplift](067-conversion-rate-uplift.html) · [Bayesian Sequential Testing](074-bayesian-sequential-testing.html) · [Posterior](063-posterior.html) · [Conversion Rate (CR)](299-conversion-rate-cr.html) · [Incremental Conversions](394-incremental-conversions.html)

---

****More in Bayesian Inference****

> [Bayes’ Theorem](066-bayes-theorem.html) · [Bayesian Correction](164-bayesian-correction.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html) · [Binomial Likelihood](060-binomial-likelihood.html) · [Gaussian Processes (GPs)](054-gaussian-processes-gps.html) · [Marginal Likelihood (also called The Model Evidence or Integrated Likelihood)](062-marginal-likelihood-also-called-the-model-eviden.html) · [MCMC (Markov Chain Monte Carlo)](057-mcmc-markov-chain-monte-carlo.html) · [Parameter(s) of Interest](065-parameter-s-of-interest.html) · [Posterior](063-posterior.html) · [Posterior belief](061-posterior-belief.html) · [Posterior Probability](073-posterior-probability.html) · [Prior Belief (or Prior Probability)](064-prior-belief-or-prior-probability.html)

---

**Theme:** Bayesian Inference  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Posterior probability of uplift](https://insightful-data-lab.com/2025/08/29/posterior-probability-of-uplift/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)