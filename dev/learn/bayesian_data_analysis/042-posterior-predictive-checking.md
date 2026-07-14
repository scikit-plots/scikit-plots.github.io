# Posterior predictive checking[#](#posterior-predictive-checking "Link to this heading")

****Part 2 · Stage 6 · 🔍 Model Checking & Comparison**** · Lesson 042 of 144 · **intermediate**

[◀ Previous · Do the Inferences from the Model Make Sense?](041-do-the-inferences-from-the-model-make-sense.html) · [Next · Graphical posterior predictive checks ▶](043-graphical-posterior-predictive-checks.html) · [↑ Section](index.html)

## Let the model generate data[#](#let-the-model-generate-data "Link to this heading")

The central technique of Part II is disarmingly simple: ****if the model fits, data simulated from it
should look like the data you actually saw.**** Simulate many replicated datasets from the fitted model,
compare them to the real one, and any ****systematic**** difference is a failure of the model.

## The posterior predictive distribution[#](#the-posterior-predictive-distribution "Link to this heading")

Replicated data \(y^{\text{rep}}\) are drawn from the ****posterior predictive distribution**** —
the likelihood averaged over posterior uncertainty in the parameters:

\[p(y^{\text{rep}} \mid y) = \int p(y^{\text{rep}} \mid \theta) \; p(\theta \mid y) \; d\theta .\]

In simulation this is one line per draw: for each posterior draw \(\theta^{(s)}\), generate a full
dataset \(y^{\text{rep}(s)} \sim p(y \mid \theta^{(s)})\). Note what is averaged in — parameter
uncertainty ****and**** sampling variability, exactly the two sources present in the real data.

## Test quantities[#](#test-quantities "Link to this heading")

You cannot compare whole datasets by eye at scale, so choose a ****test quantity**** \(T(y, \theta)\)
summarising the feature you care about: the maximum, the number of zeros, a lag-1 autocorrelation, the
variance-to-mean ratio. Unlike a classical test statistic, \(T\) may depend on the ****parameters****.
The ****posterior predictive**** \(p\)-value is the probability that the replicated data are more
extreme than what you observed:

\[p\_B = \Pr\bigl(T(y^{\text{rep}}, \theta) \ge T(y, \theta) \;\bigm|\; y\bigr)
\;\approx\; \frac{1}{S} \sum\_{s=1}^{S}
\mathbf{1}\bigl\{T(y^{\text{rep}(s)}, \theta^{(s)}) \ge T(y, \theta^{(s)})\bigr\} .\]

Values near 0 or 1 mean the observed data are ****atypical**** of the model in that respect.

```
import numpy as np, pymc as pm
with model:
    ppc = pm.sample_posterior_predictive(idata)
yrep = ppc.posterior_predictive["y"].values.reshape(-1, len(y))

T = lambda d: d.max()                                # any feature you care about
p_B = (np.array([T(r) for r in yrep]) >= T(y)).mean()
p_B                                                  # ≈ 0.5: unremarkable; ≈ 0 or 1: misfit

```

## Read it as a diagnostic, not a verdict[#](#read-it-as-a-diagnostic-not-a-verdict "Link to this heading")

Two honest caveats. The check ****uses the data twice**** — to fit and to test — so \(p\_B\) is
conservative, tending to concentrate near 0.5; it is not calibrated like a frequentist \(p\)-value
and is not “the probability the model is true”. And a check can only find what its test quantity looks
for: choosing \(T\) = the sample mean will almost always pass, because the model was fitted to match
the mean. ****Choose test quantities the model does not automatically reproduce****, and ones that matter for
your purpose. The point is never to accept or reject, but to learn ****where**** the model misses.

> **Hint**
> ****Related lessons:**** [The Place of Model Checking in Applied Bayesian Statistics](040-the-place-of-model-checking-in-applied-bayesian-statistics.html) · [Graphical posterior predictive checks](043-graphical-posterior-predictive-checks.html) · [Model checking for the educational testing example](044-model-checking-for-the-educational-testing-example.html) · [Measures of predictive accuracy](045-measures-of-predictive-accuracy.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/10/posterior-predictive-checking/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)