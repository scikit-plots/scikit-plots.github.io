# Observational studies[#](#observational-studies "Link to this heading")

****Part 2 · Stage 7 · 🗳️ Data Collection & Decisions**** · Lesson 055 of 144 · **intermediate**

[◀ Previous · Sensitivity and the role of randomization](054-sensitivity-and-the-role-of-randomization.html) · [Next · Censoring and truncation ▶](056-censoring-and-truncation.html)

## When you cannot randomise[#](#when-you-cannot-randomise "Link to this heading")

Most questions cannot be settled by an experiment: you cannot randomise people to smoke, to be poor, or
to live near a highway. In an ****observational study**** the treatment was chosen — by the units, by
doctors, by circumstance — and the assignment mechanism is ****unknown****. Everything then depends on
whether ignorability can be recovered by conditioning.

## Ignorability conditional on covariates[#](#ignorability-conditional-on-covariates "Link to this heading")

The working assumption is that treatment is as good as random ****given the observed covariates****:

\[\Pr\bigl(W \mid y(0), y(1), X\bigr) = \Pr(W \mid X)
\qquad \text{(``no unmeasured confounding'')}.\]

This is the MAR condition transposed to causal inference. Its opposite — assignment depending on the
unobserved potential outcomes — is the MNAR case, and it is ****not testable****: two datasets identical in
\((y\_{\text{obs}}, W, X)\) are consistent with both. No amount of data settles it; only knowledge of
**why** treatment was assigned can.

## Two routes to conditioning[#](#two-routes-to-conditioning "Link to this heading")

Given the assumption, the estimand is recovered by conditioning on \(X\) — either by ****modelling the
outcome**** \(p(y \mid W, X)\) and averaging its predictions over the covariate distribution, or by
modelling the ****propensity**** \(e(x\_i) = \Pr(W\_i = 1 \mid x\_i)\) and comparing units of like
propensity.

```
import pymc as pm
with pm.Model():
    beta = pm.Normal("beta", 0, 2.5, shape=X.shape[1])
    tau  = pm.Normal("tau", 0, 1)
    pm.Normal("y", X @ beta + tau * W, pm.HalfNormal("s", 1), observed=y)
    idata = pm.sample()
# ATE = posterior mean of predictions with W=1 minus W=0, averaged over the sample

```

Bayesian practice tends to favour the outcome model — it uses the posterior directly, propagates
uncertainty, and permits hierarchical structure — while treating the propensity as a ****diagnostic****:
where the treated and untreated propensity distributions barely overlap, the comparison is an
extrapolation, and no model can rescue it.

## Which covariates?[#](#which-covariates "Link to this heading")

Include the variables that ****affect assignment****, and the pre-treatment variables that affect the
outcome. But conditioning is not universally benign: adjusting for a variable on the causal pathway
**between** treatment and outcome removes part of the effect you want, and adjusting for a ****collider****
can create bias where none existed. Covariate choice requires ****causal reasoning about the mechanism****,
not a search over predictors — and the final report should say, plainly, how strong an unmeasured
confounder would need to be to change the conclusion.

> **See also**
> ****Related lessons:**** [Sensitivity and the role of randomization](054-sensitivity-and-the-role-of-randomization.html) · [Designed experiments](053-designed-experiments.html) · [Regression for causal inference: incumbency and voting](093-regression-for-causal-inference-incumbency-and-voting.html) · [Assembling the matrix of explanatory variables](095-assembling-the-matrix-of-explanatory-variables.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/11/11/observational-studies/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)