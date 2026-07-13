# Gaussian process regression[#](#gaussian-process-regression "Link to this heading")

****Part 5 · Stage 15 · 🌊 Basis Functions & Gaussian Processes**** · Lesson 129 of 144 · **advanced**

[◀ Previous · Non-normal models and regression surfaces](128-non-normal-models-and-regression-surfaces.html) · [Next · Example: birthdays and birthdates ▶](130-example-birthdays-and-birthdates.html) · [↑ Section](index.html)

## A prior over functions[#](#a-prior-over-functions "Link to this heading")

Basis expansions build a flexible curve from a ****finite**** set of functions. A ****Gaussian process**** takes
the idea to its limit: a prior directly over ****functions themselves****, with no fixed basis. Instead of
parameterising a curve and putting priors on coefficients, a GP places a distribution on the space of
smooth functions and conditions it on the data.

## The definition[#](#the-definition "Link to this heading")

A Gaussian process is a distribution over functions such that the values at ****any finite set of inputs****
are jointly multivariate normal. It is specified completely by two objects: a ****mean function****
\(m(x)\) (often taken as zero) and a ****covariance function**** — the ****kernel**** — \(k(x, x')\):

\[f \sim \mathcal{GP}\bigl(m(x), \, k(x, x')\bigr), \qquad
\bigl(f(x\_1), \dots, f(x\_n)\bigr) \sim \mathrm{N}(m, K), \;\; K\_{ij} = k(x\_i, x\_j).\]

The kernel is the whole model. It sets how strongly the function values at two inputs covary, and
therefore what kinds of functions are probable — smooth, wiggly, periodic, or trending.

## The kernel encodes assumptions[#](#the-kernel-encodes-assumptions "Link to this heading")

The most common choice, the ****squared-exponential**** kernel, encodes smooth, infinitely differentiable
functions:

\[k(x, x') = \sigma^2 \exp\!\left(-\frac{\lVert x - x' \rVert^2}{2 \ell^2}\right),\]

with two interpretable hyperparameters: the ****length-scale**** \(\ell\) — how far apart inputs must be
before their function values decorrelate, i.e. how wiggly the curve — and the ****signal variance****
\(\sigma^2\) — the amplitude. Other kernels encode other beliefs: ****Matérn**** for rougher functions,
****periodic**** for cycles, ****linear**** for trends. And kernels ****compose**** — sums and products of kernels
build structured functions from simple parts, the key to the next lesson.

```
import pymc as pm
with pm.Model():
    ell = pm.Gamma("ell", 2, 1)                          # length-scale
    eta = pm.HalfNormal("eta", 1)                        # amplitude
    cov = eta**2 * pm.gp.cov.ExpQuad(1, ls=ell)          # squared-exponential kernel
    gp = pm.gp.Marginal(cov_func=cov)
    gp.marginal_likelihood("y", X=x[:, None], y=y, sigma=pm.HalfNormal("s", 1))

```

## Prediction and the cost[#](#prediction-and-the-cost "Link to this heading")

Conditioning the joint normal on observed points gives a ****closed-form**** posterior over the function at
new inputs — a predictive mean and, crucially, a predictive ****variance**** that widens away from the data,
so a GP says “I don’t know” where it has seen nothing. The catch is computational: prediction requires
****inverting the**** \(n \times n\) ****covariance matrix****, an \(O(n^3)\) operation that becomes
prohibitive beyond a few thousand points. Sparse approximations, inducing points, and basis-function
approximations (the previous lesson, in reverse) are the standard escapes. What you buy for that cost is
nonparametric flexibility with calibrated uncertainty — a curve that adapts to the data and honestly
reports where it cannot.

> **Hint**
> ****Related lessons:**** [Non-normal models and regression surfaces](128-non-normal-models-and-regression-surfaces.html) · [Example: birthdays and birthdates](130-example-birthdays-and-birthdates.html) · [Latent Gaussian process models](131-latent-gaussian-process-models.html) · [Splines and weighted sums of basis functions](126-splines-and-weighted-sums-of-basis-functions.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/gaussian-process-regression/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)