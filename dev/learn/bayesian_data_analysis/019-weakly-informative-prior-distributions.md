# Weakly Informative Prior Distributions[#](#weakly-informative-prior-distributions "Link to this heading")

****Part 1 · Stage 2 · 📍 Single-Parameter Models & Priors**** · Lesson 019 of 144 · **beginner**

[◀ Previous · Noninformative Prior Distributions](018-noninformative-prior-distributions.html) · [Next · Averaging Over Nuisance Parameters ▶](020-averaging-over-nuisance-parameters.html) · [↑ Section](index.html)

## The sensible middle[#](#the-sensible-middle "Link to this heading")

Between an informative prior that asserts a specific belief and a noninformative one that tries to
assert nothing lies the ****weakly informative**** prior — the modern default. It deliberately contains
****less**** information than is actually available, but enough to ****regularise****: to keep the inference
inside the range of physically or scientifically plausible values, and to stabilise estimation when the
data are weak.

## What it does[#](#what-it-does "Link to this heading")

A weakly informative prior is chosen by asking what values are ****conceivable****, not what values are
**likely**. On a standardised logistic-regression coefficient, a \(\mathrm{N}(0, 2.5^2)\) prior says:
an odds ratio of 2 or 5 is unremarkable, an odds ratio of \(10^6\) is not. That single, mild
statement:

* ****prevents separation**** — the infinite coefficients of a perfectly separated logistic fit become
  finite (a problem met again in Part IV);
* ****tames weak identification**** — parameters the data barely constrain get finite posteriors instead
  of wandering chains;
* ****shrinks noise**** — as in the cancer-rate example, small-\(n\) estimates stop being extreme;
* leaves conclusions ****essentially unchanged**** where the data are strong.

## Common defaults[#](#common-defaults "Link to this heading")

```
import pymc as pm
with pm.Model():
    # coefficients (predictors standardised): mild, symmetric, finite-tailed
    beta = pm.Normal("beta", mu=0, sigma=2.5, shape=k)
    # scale parameters: positive, heavy-tailed near zero, no hard upper bound
    sigma = pm.HalfNormal("sigma", sigma=1)        # or pm.HalfCauchy("sigma", 1)

```

For ****variance**** parameters in hierarchies, a ****half-normal**** or ****half-Cauchy**** on the standard
deviation is standard practice — it allows the group-level scale to be near zero (complete pooling)
without the pathologies of the once-popular inverse-gamma-with-tiny-parameters.

## Scale matters[#](#scale-matters "Link to this heading")

A weakly informative prior is a statement about ****units****. \(\mathrm{N}(0, 2.5^2)\) is mild for a
coefficient on a standardised predictor and wildly informative for one measured in dollars, so
****standardise predictors**** (or scale the prior to the data). And the standard defence applies: run the
****prior predictive check**** — simulate data from the prior alone and confirm the simulated datasets are
merely varied, not absurd. A prior generating impossible data is too weak, not too strong.

> **Hint**
> ****Related lessons:**** [Noninformative Prior Distributions](018-noninformative-prior-distributions.html) · [Informative Prior Distributions](014-informative-prior-distributions.html) · [Weakly Informative Priors for Variance Parameters](039-weakly-informative-priors-for-variance-parameters.html) · [Weakly informative priors for logistic regression](108-weakly-informative-priors-for-logistic-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/weakly-informative-prior-distributions/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)