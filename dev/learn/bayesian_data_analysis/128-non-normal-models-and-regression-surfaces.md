# Non-normal models and regression surfaces[#](#non-normal-models-and-regression-surfaces "Link to this heading")

****Part 5 · Stage 15 · 🌊 Basis Functions & Gaussian Processes**** · Lesson 128 of 144 · **advanced**

[◀ Previous · Basis selection and shrinkage of coeﬃcients](127-basis-selection-and-shrinkage-of-coefficients.html) · [Next · Gaussian process regression ▶](129-gaussian-process-regression.html) · [↑ Section](index.html)

## Flexibility in two directions at once[#](#flexibility-in-two-directions-at-once "Link to this heading")

Basis expansions handle a nonlinear function of ****one**** predictor. Two generalisations complete the
flexible-regression picture: non-normal ****outcomes**** with a flexible predictor, and flexible functions of
****several**** predictors — a regression ****surface**** rather than a curve.

## Flexible GLMs[#](#flexible-glms "Link to this heading")

The basis idea composes with the generalized linear model. Keep the link and the non-normal likelihood,
but let the linear predictor be a ****spline**** instead of a straight line — a logistic regression whose
log-odds is a smooth function of a continuous covariate, a Poisson whose log-rate bends:

\[g\bigl(\mathrm{E}[y\_i]\bigr) = \sum\_k \beta\_k B\_k(x\_i),\]

with the smoothing prior of the previous lesson on the \(\beta\_k\). Binary and count outcomes gain
flexible dose-response shapes without abandoning the GLM machinery.

## Regression surfaces[#](#regression-surfaces "Link to this heading")

For a function of several predictors, one-dimensional bases combine. ****Tensor-product**** splines build a
multivariate basis from the products of univariate ones; ****additive models**** keep things tractable by
summing separate smooth functions, \(f(x\_1, x\_2) = f\_1(x\_1) + f\_2(x\_2)\), sacrificing interactions
for interpretability and far fewer parameters.

\[\mathrm{E}[y] = f\_1(x\_1) + f\_2(x\_2) + \cdots, \qquad f\_j \text{ each a smooth spline.}\]
```
import numpy as np, pymc as pm
# additive model: a smooth term per predictor, each with its own smoothing scale
with pm.Model():
    contributions = []
    for j, Bj in enumerate(basis_matrices):             # one B-spline basis per predictor
        tau_j = pm.HalfNormal(f"tau_{j}", 1)
        z = pm.Normal(f"z_{j}", 0, 1, shape=Bj.shape[1])
        contributions.append(Bj @ (pm.math.cumsum(z) * tau_j))
    eta = sum(contributions)
    pm.Bernoulli("y", logit_p=eta, observed=y)           # flexible additive logistic

```

## The curse, and the bridge[#](#the-curse-and-the-bridge "Link to this heading")

Flexibility in many dimensions meets the ****curse of dimensionality****: a full tensor-product basis grows
exponentially with the number of predictors, so a surface over ten inputs is hopeless by basis expansion
alone. Additive models dodge it by forbidding interactions; the truly general tool handles arbitrary
smooth surfaces ****without**** an explicit growing basis — the ****Gaussian process****, which specifies
smoothness through a covariance function over inputs and is the subject of the next lessons. Basis methods
take flexible regression a long way; Gaussian processes take the same idea to its infinite-dimensional
conclusion.

> **Hint**
> ****Related lessons:**** [Splines and weighted sums of basis functions](126-splines-and-weighted-sums-of-basis-functions.html) · [Standard generalized linear model likelihoods](106-standard-generalized-linear-model-likelihoods.html) · [Gaussian process regression](129-gaussian-process-regression.html) · [Basis selection and shrinkage of coeﬃcients](127-basis-selection-and-shrinkage-of-coefficients.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/non-normal-models-and-regression-surfaces/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)