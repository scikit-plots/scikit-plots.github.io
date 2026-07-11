# Hierarchical models for batches of variance components[#](#hierarchical-models-for-batches-of-variance-components "Link to this heading")

****Part 4 · Stage 12 · 🏗️ Hierarchical Regression**** · Lesson 105 of 144 · **advanced**

[◀ Previous · Analysis of variance and the batching of coeﬃcients](104-analysis-of-variance-and-the-batching-of-coefficients.html) · [Next · Standard generalized linear model likelihoods ▶](106-standard-generalized-linear-model-likelihoods.html)

## When the variances themselves have structure[#](#when-the-variances-themselves-have-structure "Link to this heading")

The ANOVA lesson gave every source of variation its own standard deviation: \(\sigma\_A\),
\(\sigma\_B\), \(\sigma\_{AB}\), and so on. A complex design can have ****many**** such variance
components — crossed and nested factors, multiway interactions — and they are not unrelated. When there
are enough of them, the natural move is the one this whole part has been making: treat the ****variance
components as a batch**** and model them hierarchically too.

## A hierarchy on the standard deviations[#](#a-hierarchy-on-the-standard-deviations "Link to this heading")

Give the collection of batch scales a common prior with its own parameters:

\[y\_i = \mu + \sum\_{m} \beta^{(m)}\_{j\_m[i]} + \epsilon\_i, \qquad
\beta^{(m)}\_j \sim \mathrm{N}(0, \sigma\_m^2), \qquad
\sigma\_m \sim \text{half-}\mathrm{N}(0, \tau^2),\]

where each \(\sigma\_m\) is the spread of variance-component batch \(m\), and the
\(\sigma\_m\) are themselves drawn from a shared distribution with hyperscale \(\tau\). The
variance components are now ****partially pooled**** toward each other — a component estimated from few levels
borrows from the others, exactly as the group means did one level down.

```
import pymc as pm
with pm.Model():
    tau = pm.HalfNormal("tau", 1)                        # hyperscale over components
    sigma = pm.HalfNormal("sigma", tau, shape=n_components)   # batch of scales, pooled
    # each factor's effects drawn from its own (pooled) scale, non-centred
    effects = [pm.Normal(f"b{m}", 0, 1, shape=n_levels[m]) * sigma[m]
               for m in range(n_components)]
    mu_i = mu + sum(e[idx[m]] for m, e in enumerate(effects))
    pm.Normal("y", mu_i, pm.HalfNormal("sy", 1), observed=y)

```

## Why pool variances[#](#why-pool-variances "Link to this heading")

The same logic that pools means, one storey higher. A variance component estimated from ****few levels**** is
badly determined on its own — a two-level factor gives almost no information about its own spread — and
pooling toward the other components stabilises it. This matters most in the designs where classical ANOVA
is least reliable: many factors, few levels each, unbalanced cells. The estimate of any one
\(\sigma\_m\) improves by borrowing from the ensemble.

## The finite-population reminder[#](#the-finite-population-reminder "Link to this heading")

The distinction from the ANOVA lesson persists at this level. For a factor with a handful of levels, the
****finite-population**** standard deviation — the spread of the effects actually present — is often the
meaningful summary, and it is estimated more precisely than the ****superpopulation**** scale, which
describes hypothetical new levels. Report the one that answers the question. This closes the hierarchical
regression stage: the batching idea, applied first to coefficients and then to their variances, turns a
tangle of factors into one coherent model whose every scale is estimated with appropriate pooling. Part
IV now leaves the normal likelihood behind.

> **See also**
> ****Related lessons:**** [Analysis of variance and the batching of coeﬃcients](104-analysis-of-variance-and-the-batching-of-coefficients.html) · [Regression coeﬃcients exchangeable in batches](099-regression-coefficients-exchangeable-in-batches.html) · [Weakly Informative Priors for Variance Parameters](039-weakly-informative-priors-for-variance-parameters.html) · [Varying intercepts and slopes](102-varying-intercepts-and-slopes.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/12/06/hierarchical-models-for-batches-of-variance-components/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)