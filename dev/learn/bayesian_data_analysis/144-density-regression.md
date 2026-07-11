# Density regression[#](#density-regression "Link to this heading")

****Part 5 · Stage 16 · ♾️ Mixtures & Nonparametric Bayes**** · Lesson 144 of 144 · **advanced**

[◀ Previous · Hierarchical dependence](143-hierarchical-dependence.html)

## The whole distribution as a function of x[#](#the-whole-distribution-as-a-function-of-x "Link to this heading")

The final synthesis. Ordinary regression models how the ****mean**** of \(y\) changes with predictors;
even flexible regressions (splines, GPs) usually still assume the **shape** of the conditional distribution
is fixed. ****Density regression**** removes that last assumption, letting the ****entire**** conditional
distribution \(p(y \mid x)\) — its variance, skewness, modality, everything — vary with \(x\).

## Why the mean is not enough[#](#why-the-mean-is-not-enough "Link to this heading")

Sometimes the interesting effect is not on the average. A treatment might not shift the mean response but
****split**** it into responders and non-responders — a change from one mode to two. Income dispersion may
widen with education while the mean barely moves. Any model that reports only \(\mathrm{E}[y \mid x]\)
is blind to these, and they are often the substantive finding.

## Dependent Dirichlet processes[#](#dependent-dirichlet-processes "Link to this heading")

The tool is a DP mixture whose ingredients ****depend on**** \(x\) — a ****dependent Dirichlet process****
(MacEachern). The mixture that generates \(y\) has weights and/or component parameters that are
functions of the predictors, so the whole conditional density is free to change smoothly across the
covariate space:

\[p(y \mid x) = \sum\_{k=1}^{\infty} \pi\_k(x) \, f\bigl(y \mid \theta\_k(x)\bigr),\]

with \(\pi\_k(x)\) and \(\theta\_k(x)\) varying with \(x\) — for instance weights from a
covariate-dependent stick-breaking, or component means that are themselves regressions or Gaussian
processes in \(x\).

```
import pymc as pm
# covariate-dependent mixture: component means are regressions in x
K = 15
with pm.Model():
    beta = pm.Beta("beta", 1, pm.Gamma("alpha", 1, 1), shape=K)
    w = pm.Deterministic("w", beta * pm.math.concatenate(
        [[1.0], pm.math.cumprod(1 - beta)[:-1]]))
    coef = pm.Normal("coef", 0, 1, shape=(K, X.shape[1]))    # each component a regression
    mus = X @ coef.T                                          # component means depend on x
    # observation drawn from the x-dependent mixture (weights could depend on x too)
    pm.NormalMixture("y", w=w, mu=mus, sigma=pm.HalfNormal("s", 1, shape=K), observed=y)

```

## The synthesis, and the close[#](#the-synthesis-and-the-close "Link to this heading")

Density regression ****unites the whole book****. It is a regression (Part IV), made flexible by a mixture
(this stage), rendered nonparametric by a Dirichlet process (the last lessons), often with Gaussian-process
or spline components (Part V) and hierarchical sharing across groups (throughout) — and fitted, checked
and compared by the computational and model-checking machinery of Parts II and III. It is the most
general regression in this course: predictors may reshape the response distribution in ****any**** smooth way,
with full posterior uncertainty over the entire family of conditional densities. From Bayes’ rule for a
single unknown to an infinite, covariate-indexed family of distributions — the arc of Bayesian data
analysis, from its one idea to its fullest expression.

> **See also**
> ****Related lessons:**** [Dirichlet process mixtures](141-dirichlet-process-mixtures.html) · [Gaussian process regression](129-gaussian-process-regression.html) · [Hierarchical dependence](143-hierarchical-dependence.html) · [Mixture models for classification and regression](138-mixture-models-for-classification-and-regression.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/12/13/density-regression/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)