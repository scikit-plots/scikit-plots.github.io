# Functional data analysis[#](#functional-data-analysis "Link to this heading")

****Part 5 · Stage 15 · 🌊 Basis Functions & Gaussian Processes**** · Lesson 132 of 144 · **advanced**

[◀ Previous · Latent Gaussian process models](131-latent-gaussian-process-models.html) · [Next · Density estimation and regression ▶](133-density-estimation-and-regression.html) · [↑ Section](index.html)

## When each observation is a curve[#](#when-each-observation-is-a-curve "Link to this heading")

Sometimes a single data point is an entire ****function****: a growth curve for one child, a daily
temperature profile, a spectrum, a gait cycle. ****Functional data analysis**** treats these curves as the
unit of analysis, and Bayesian methods bring to it what they bring everywhere — a generative model with
propagated uncertainty over the functions themselves.

## Representing functions[#](#representing-functions "Link to this heading")

The observed curves are noisy, irregularly sampled realisations of underlying smooth functions, so the
first step is a ****smooth representation****. Two routes, both from this stage: expand each curve in a
****basis**** and model its coefficients, or model each curve as a draw from a ****Gaussian process****. Either
turns an infinite-dimensional object into something estimable, with the smoothing priors of the earlier
lessons controlling how rough each curve may be.

\[y\_{ij} = f\_i(t\_{ij}) + \epsilon\_{ij}, \qquad
f\_i \sim \mathcal{GP}(\mu, k) \;\;\text{or}\;\; f\_i(t) = \sum\_k \beta\_{ik} B\_k(t),\]

with a ****hierarchical**** structure across curves: the \(f\_i\) share a common mean function and
covariance, so each individual curve borrows strength from the population — the batching idea, applied to
whole functions.

## Analysing the functions[#](#analysing-the-functions "Link to this heading")

Once represented, the functions become objects to explore. ****Functional principal components**** find the
dominant modes of variation — the few characteristic ways the curves differ from their mean, a
dimension reduction on function space. Curves can be ****registered**** (aligned in time to separate
variation in **shape** from variation in **timing**), regressed on covariates (****function-on-scalar****), or
used as predictors (****scalar-on-function****).

```
import pymc as pm
# hierarchical functional model: each curve a GP deviation around a shared mean
with pm.Model():
    mean_coef = pm.Normal("mean_coef", 0, 1, shape=K)         # population mean curve
    tau = pm.HalfNormal("tau", 1)
    dev = pm.Normal("dev", 0, tau, shape=(n_curves, K))       # per-curve deviations, pooled
    f = (mean_coef + dev) @ B.T                               # individual smooth curves
    pm.Normal("y", f[curve_id, t_idx], pm.HalfNormal("s", 1), observed=y)

```

## Where it sits[#](#where-it-sits "Link to this heading")

Functional data analysis is the natural ****culmination**** of the flexible-modelling stage: it combines
basis expansions and Gaussian processes (to represent curves), hierarchical models (to pool across
curves), and dimension reduction (to summarise them) into one framework for data whose fundamental unit
is a function. It closes Part V’s parametric-nonlinear thread — from mechanistic ODE models through
splines and Gaussian processes to whole-function data — and hands off to the final stage, where the
flexibility comes not from smooth functions but from ****mixtures**** and infinite-dimensional
****nonparametric**** priors.

> **Hint**
> ****Related lessons:**** [Gaussian process regression](129-gaussian-process-regression.html) · [Basis selection and shrinkage of coeﬃcients](127-basis-selection-and-shrinkage-of-coefficients.html) · [Hierarchical models for batches of variance components](105-hierarchical-models-for-batches-of-variance-components.html) · [Latent Gaussian process models](131-latent-gaussian-process-models.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/functional-data-analysis/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)