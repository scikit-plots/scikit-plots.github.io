# Splines and weighted sums of basis functions[#](#splines-and-weighted-sums-of-basis-functions "Link to this heading")

****Part 5 · Stage 15 · 🌊 Basis Functions & Gaussian Processes**** · Lesson 126 of 144 · **advanced**

[◀ Previous · Example: population toxicokinetics](125-example-population-toxicokinetics.html) · [Next · Basis selection and shrinkage of coeﬃcients ▶](127-basis-selection-and-shrinkage-of-coefficients.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Flexibility from fixed pieces[#](#flexibility-from-fixed-pieces "Link to this heading")

When a relationship is clearly nonlinear but no mechanism dictates its form, model it as a ****weighted sum
of basis functions**** — simple fixed building blocks whose linear combination can approximate any smooth
curve. The model stays ****linear in its coefficients****, so all the regression machinery still applies;
only the design matrix changes.

## The construction[#](#the-construction "Link to this heading")

Replace the predictor \(x\) with a set of \(K\) ****basis functions**** \(B\_k(x)\) and regress on
those:

\[f(x) = \sum\_{k=1}^{K} \beta\_k \, B\_k(x), \qquad
y\_i = \sum\_k \beta\_k B\_k(x\_i) + \epsilon\_i .\]

The bases are chosen, not learned. ****B-splines**** — smooth, local, bump-shaped functions each supported on
a short interval — are the standard choice: local support means each coefficient controls the curve only
near its knot, giving stable, interpretable flexibility. ****Splines**** stitch low-degree polynomials
together at ****knots**** with smoothness enforced at the joins.

```
import numpy as np, pymc as pm
from patsy import dmatrix
B = np.asarray(dmatrix("bs(x, df=12, degree=3)", {"x": x}))   # B-spline basis matrix
with pm.Model():
    beta = pm.Normal("beta", 0, 1, shape=B.shape[1])          # basis coefficients
    pm.Normal("y", B @ beta, pm.HalfNormal("s", 1), observed=y)

```

## The bias-variance knob[#](#the-bias-variance-knob "Link to this heading")

The number of basis functions sets flexibility. ****Too few**** knots and the curve is too stiff to follow
the data — bias. ****Too many**** and it chases noise — variance, a wiggly overfit. The classical response is
to tune \(K\) by cross-validation; the Bayesian response, in the next lesson, is more elegant — use
****many**** basis functions and let a ****prior shrink**** their coefficients, so the data decide the effective
smoothness rather than a discrete knot count.

## Why the basis view unifies[#](#why-the-basis-view-unifies "Link to this heading")

Splines are just ****regression with a cleverly chosen design matrix****, which is why everything transfers:
priors on the coefficients, hierarchical structure, the same sampler. A basis expansion also connects
directly to the batching stage — the spline coefficients are a ****batch**** of related parameters, ripe for
a shared prior — and forward to Gaussian processes, which are the infinite-basis limit of this same idea.
Flexible curves, built from fixed pieces and fit by ordinary means.

> **Hint**
> ****Related lessons:**** [Basis selection and shrinkage of coeﬃcients](127-basis-selection-and-shrinkage-of-coefficients.html) · [Non-normal models and regression surfaces](128-non-normal-models-and-regression-surfaces.html) · [Assembling the matrix of explanatory variables](095-assembling-the-matrix-of-explanatory-variables.html) · [Gaussian process regression](129-gaussian-process-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/splines-and-weighted-sums-of-basis-functions/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)