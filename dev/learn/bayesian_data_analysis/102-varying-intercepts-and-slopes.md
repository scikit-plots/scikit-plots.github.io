# Varying intercepts and slopes[#](#varying-intercepts-and-slopes "Link to this heading")

****Part 4 · Stage 12 · 🏗️ Hierarchical Regression**** · Lesson 102 of 144 · **advanced**

[◀ Previous · Interpreting a normal prior distribution as extra data](101-interpreting-a-normal-prior-distribution-as-extra-data.html) · [Next · Computation: batching and transformation ▶](103-computation-batching-and-transformation.html) · [↑ Section](index.html)

## Let the relationship itself vary[#](#let-the-relationship-itself-vary "Link to this heading")

A varying-intercept model lets each group have its own baseline but forces a ****common slope**** — every
group responds to the predictor identically. Often that is wrong: the effect of income on voting differs
by state, the effect of a treatment differs by clinic. The ****varying-intercept, varying-slope**** model
lets both the level **and** the response vary by group, pooling each toward a common value.

## The model[#](#the-model "Link to this heading")

Write the coefficient ****vector**** for group \(j\) — intercept and slope together — as a draw from a
common multivariate distribution:

\[\begin{split}y\_i = \alpha\_{j[i]} + \beta\_{j[i]} \, x\_i + \epsilon\_i, \qquad
\begin{pmatrix} \alpha\_j \\ \beta\_j \end{pmatrix}
\sim \mathrm{N}\!\left(
\begin{pmatrix} \mu\_\alpha \\ \mu\_\beta \end{pmatrix}, \;
\Sigma \right).\end{split}\]

The notation \(j[i]\) — group \(j\) containing observation \(i\) — is the multilevel
convention: the data \(y\_i\) exist at the individual level, and the grouping enters as an index, not
as a reordering. Each group’s intercept and slope are ****partially pooled**** toward the population means,
by amounts the data determine through \(\Sigma\).

```
import pymc as pm
with pm.Model():
    mu = pm.Normal("mu", 0, 5, shape=2)                  # population (intercept, slope)
    sd = pm.HalfNormal("sd", 1, shape=2)                 # scales of each
    L = pm.LKJCholeskyCov("L", n=2, eta=2,               # correlation + scales
                          sd_dist=pm.HalfNormal.dist(1))
    z = pm.Normal("z", 0, 1, shape=(n_groups, 2))
    ab = pm.Deterministic("ab", mu + z @ L.T)            # non-centred group coeffs
    mu_i = ab[group, 0] + ab[group, 1] * x
    pm.Normal("y", mu_i, pm.HalfNormal("s", 1), observed=y)

```

## Fixed effects are a special case[#](#fixed-effects-are-a-special-case "Link to this heading")

The multilevel frame ****subsumes**** the classical distinction. A “fixed effect” is the limit of a random
effect as its group-level variance goes to ****infinity**** — no pooling, each group estimated on its own
data. A single pooled coefficient is the ****zero-variance**** limit. The varying-slope model sits between,
and — crucially — ****estimates where****, rather than forcing you to choose. There is no separate machinery
for fixed versus random; there is one model with a variance the data inform.

## Why pool the slopes[#](#why-pool-the-slopes "Link to this heading")

The same argument as always, now for effects rather than means. A group with little data gets an
****unstable**** slope on its own; pooling toward the population slope stabilises it, trading a little bias
for a large variance reduction. Groups with ample data are barely moved. And the population-level
\(\mu\_\beta\) and \(\Sigma\) are themselves of interest: they describe ****how much**** the effect
varies across groups — often the substantive question. The one subtlety, addressed next, is that
intercepts and slopes typically ****covary****, and modelling that correlation is what \(\Sigma\) is for.

> **Hint**
> ****Related lessons:**** [Regression coeﬃcients exchangeable in batches](099-regression-coefficients-exchangeable-in-batches.html) · [Computation: batching and transformation](103-computation-batching-and-transformation.html) · [Analysis of variance and the batching of coeﬃcients](104-analysis-of-variance-and-the-batching-of-coefficients.html) · [Exchangeability and hierarchical models](034-exchangeability-and-hierarchical-models.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/24/varying-intercepts-and-slopes/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)