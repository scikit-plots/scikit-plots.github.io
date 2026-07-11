# Continuous model expansion[#](#continuous-model-expansion "Link to this heading")

****Part 2 · Stage 6 · 🔍 Model Checking & Comparison**** · Lesson 048 of 144 · **intermediate**

[◀ Previous · Model comparison using Bayes factors](047-model-comparison-using-bayes-factors.html) · [Next · Implicit assumptions and model expansion: an example ▶](049-implicit-assumptions-and-model-expansion-an-example.html)

## Don’t choose — embed[#](#don-t-choose-embed "Link to this heading")

Model comparison presumes a ****discrete**** menu: \(M\_1\) or \(M\_2\). But rival models are usually
special cases of a richer one, and the more informative move is to ****embed**** them in a continuous
family, fit it, and let the posterior for the extra parameter say how much of each the data want. The
choice becomes an ****estimate****, and its uncertainty is reported rather than hidden.

## The pattern[#](#the-pattern "Link to this heading")

Introduce a parameter whose values recover the candidates as limits:

* Normal errors versus heavy tails: fit a \(t\) with ****unknown degrees of freedom**** \(\nu\).
  \(\nu \to \infty\) is the normal; a posterior for \(\nu\) concentrated near 4 says the data
  want heavy tails, and by how much.
* Complete versus no pooling: the hierarchical model with unknown \(\tau\) already ****contains****
  both, at \(\tau = 0\) and \(\tau \to \infty\).
* Fixed versus varying slopes: allow varying slopes with a variance parameter that can shrink to zero.
* Linear versus nonlinear: add a spline or GP term whose amplitude can vanish.

Each replaces a hypothesis test with a ****continuous parameter and a posterior****.

```
import pymc as pm
with pm.Model():
    # embeds normal (nu -> inf) and heavy-tailed alternatives in one model
    nu = pm.Gamma("nu", alpha=2, beta=0.1)      # weakly informative, mass over 2..50
    sigma = pm.HalfNormal("sigma", 1)
    pm.StudentT("y", nu=nu, mu=mu, sigma=sigma, observed=y)
# posterior for nu answers "how non-normal?" instead of "normal: yes/no?"

```

## Why this is better[#](#why-this-is-better "Link to this heading")

Three reasons. It ****propagates uncertainty****: selecting a model and then analysing as if it were true
ignores the uncertainty in the selection, and understates the final intervals. It avoids the
****discontinuity**** of a decision rule that flips on an arbitrary threshold. And it turns a failed
posterior predictive check into a ****research direction****: the check told you **which** feature was missed;
the expansion adds a parameter for exactly that feature and asks the data how big it is.

## The discipline[#](#the-discipline "Link to this heading")

Expansion is not licence to add everything. Each new parameter needs a ****weakly informative prior****
(otherwise a barely-identified addition wanders), and the expanded model must itself be ****checked**** —
the loop from the first lesson of this stage. Nor is expansion free: it can make the geometry harder
(the funnel), so diagnostics matter more. But the direction of travel is right, and it is the workflow
that the remainder of this course follows: fit, check, find the misfit, ****expand****, refit.

> **See also**
> ****Related lessons:**** [Model comparison based on predictive performance](046-model-comparison-based-on-predictive-performance.html) · [Implicit assumptions and model expansion: an example](049-implicit-assumptions-and-model-expansion-an-example.html) · [The Place of Model Checking in Applied Bayesian Statistics](040-the-place-of-model-checking-in-applied-bayesian-statistics.html) · [Robust regression using t-distributed errors](117-robust-regression-using-t-distributed-errors.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/11/10/continuous-model-expansion/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)