# Informative Prior Distributions[#](#informative-prior-distributions "Link to this heading")

****Part 1 · Stage 2 · 📍 Single-Parameter Models & Priors**** · Lesson 014 of 144 · **beginner**

[◀ Previous · Summarizing Posterior Inference](013-summarizing-posterior-inference.html) · [Next · Normal Distribution with Known Variance ▶](015-normal-distribution-with-known-variance.html)

## Using what you know[#](#using-what-you-know "Link to this heading")

An ****informative prior**** deliberately encodes substantive knowledge about a parameter before the
current data arrive — from previous studies, physical constraints, or expert judgement. Its purpose is
not to bias the answer toward a preferred conclusion but to stop the analysis from pretending to know
nothing when, in fact, a great deal is known.

## Priors as pseudo-data[#](#priors-as-pseudo-data "Link to this heading")

Conjugate priors make “how much” precise: their hyperparameters read as ****prior observations****. In the
Beta–Binomial, \(\mathrm{Beta}(\alpha, \beta)\) acts like \(\alpha\) prior successes and
\(\beta\) prior failures, an effective prior sample size of \(\alpha + \beta\). In the
Poisson–Gamma, \(\mathrm{Gamma}(\alpha, \beta)\) acts like \(\alpha\) ****pseudo-events****
observed in \(\beta\) ****pseudo-exposure****. This is the honest way to calibrate an informative
prior: ask **how many observations is my belief worth?**

```
from scipy import stats
# "I've seen roughly 20 conversions in 100 visits before" -> Beta(20, 80)
prior = stats.beta(20, 80)
prior.mean(), prior.std()            # 0.20, ~0.04   (prior sample size 100)
# 5 conversions in 40 new visits:
post = stats.beta(20 + 5, 80 + 35)   # exact conjugate update
post.mean()                          # 0.179 — pulled from 0.125 toward 0.20

```

## Eliciting a prior[#](#eliciting-a-prior "Link to this heading")

Elicitation usually works backwards from summaries an expert can state: a plausible ****central value****
and a range they would be surprised to see violated. Match those to a distribution’s mean and spread,
then ****check the implications**** — draw from the prior, simulate data (a ****prior predictive check****),
and ask whether the simulated datasets look like ones the world could produce. A prior that generates
absurd data is wrong, however reasonable it looked as a density.

## The discipline[#](#the-discipline "Link to this heading")

Informative priors carry real risk: with sparse data, they can dominate, and a confidently wrong prior
yields a confidently wrong posterior. Three habits keep them honest. ****State**** the prior and its
justification explicitly. ****Report**** its effective sample size, so readers see how much it contributes.
And run a ****sensitivity analysis**** — refit under reasonable alternatives, and say so when conclusions
move. Between the extremes of an informative prior and a deliberately vague one lies the
****weakly informative**** prior of the coming lessons.

> **See also**
> ****Related lessons:**** [Posterior as a Compromise Between Data and Prior Information](012-posterior-as-a-compromise-between-data-and-prior-information.html) · [Noninformative Prior Distributions](018-noninformative-prior-distributions.html) · [Weakly Informative Prior Distributions](019-weakly-informative-prior-distributions.html) · [Informative Prior Distribution for Cancer Rates](017-informative-prior-distribution-for-cancer-rates.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/11/09/informative-prior-distributions/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)