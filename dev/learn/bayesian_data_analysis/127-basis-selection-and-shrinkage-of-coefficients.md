# Basis selection and shrinkage of coeﬃcients[#](#basis-selection-and-shrinkage-of-coefficients "Link to this heading")

****Part 5 · Stage 15 · 🌊 Basis Functions & Gaussian Processes**** · Lesson 127 of 144 · **advanced**

[◀ Previous · Splines and weighted sums of basis functions](126-splines-and-weighted-sums-of-basis-functions.html) · [Next · Non-normal models and regression surfaces ▶](128-non-normal-models-and-regression-surfaces.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## How smooth should the curve be?[#](#how-smooth-should-the-curve-be "Link to this heading")

A basis expansion poses one question: how many functions, or equivalently how wiggly a fit? Choosing the
knot count by hand or by cross-validation is crude. The Bayesian answer inverts the problem — use
****many**** basis functions and let a ****prior on the coefficients**** determine the effective smoothness,
so the data, not a discrete choice, set the flexibility.

## The penalized-spline idea[#](#the-penalized-spline-idea "Link to this heading")

Lay down a rich basis — more knots than you could need — and place a prior that ****penalises roughness****.
The standard device is a prior on the ****differences**** between adjacent coefficients: if neighbours are
tied together, the curve cannot wiggle sharply.

\[\beta\_k - \beta\_{k-1} \sim \mathrm{N}(0, \tau^2), \quad\text{equivalently}\quad
\beta\_k \sim \mathrm{N}(\beta\_{k-1}, \tau^2),\]

a ****random-walk**** prior on the coefficients. The smoothing scale \(\tau\) is the one knob, and —
this is the elegant part — it is ****estimated from the data**** as an ordinary variance parameter. Small
\(\tau\) forces a smooth curve; large \(\tau\) permits wiggliness; its posterior finds the
balance.

```
import pymc as pm
with pm.Model():
    tau = pm.HalfNormal("tau", 1)                        # smoothing scale, ESTIMATED
    z = pm.Normal("z", 0, 1, shape=B.shape[1])
    beta = pm.Deterministic("beta", pm.math.cumsum(z * tau))   # random-walk (P-spline) prior
    pm.Normal("y", B @ beta, pm.HalfNormal("s", 1), observed=y)

```

## Smoothness as a variance component[#](#smoothness-as-a-variance-component "Link to this heading")

The reframing is the whole point: ****the amount of smoothing is a variance parameter****, so choosing it
becomes **estimating** it, with all the hierarchical machinery of this book. Adaptive smoothing —
different roughness in different regions — follows by letting \(\tau\) vary. And for ****selecting****
which basis functions matter, a ****sparsity**** prior (the horseshoe of the regularisation lesson) drives
irrelevant coefficients to zero, choosing the basis automatically.

## Why it matters[#](#why-it-matters "Link to this heading")

Two payoffs. ****No discrete model selection**** — instead of fitting many knot counts and comparing, fit
once with a rich basis and let the prior shrink to the right complexity, uncertainty in the smoothness
included. And a ****unifying view****: penalised splines are hierarchical models, their smoothing parameter a
variance component, so the batching and regularisation stages apply directly. This is the bridge to
Gaussian processes, where the basis becomes infinite and the smoothing prior becomes a covariance
function.

> **Hint**
> ****Related lessons:**** [Splines and weighted sums of basis functions](126-splines-and-weighted-sums-of-basis-functions.html) · [Regularization and dimension reduction](096-regularization-and-dimension-reduction.html) · [Regression coeﬃcients exchangeable in batches](099-regression-coefficients-exchangeable-in-batches.html) · [Non-normal models and regression surfaces](128-non-normal-models-and-regression-surfaces.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/basis-selection-and-shrinkage-of-coe%ef%ac%83cients/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)