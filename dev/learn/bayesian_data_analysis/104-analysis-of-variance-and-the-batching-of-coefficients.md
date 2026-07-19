# Analysis of variance and the batching of coeﬃcients[#](#analysis-of-variance-and-the-batching-of-coefficients "Link to this heading")

****Part 4 · Stage 12 · 🏗️ Hierarchical Regression**** · Lesson 104 of 144 · **advanced**

[◀ Previous · Computation: batching and transformation](103-computation-batching-and-transformation.html) · [Next · Hierarchical models for batches of variance components ▶](105-hierarchical-models-for-batches-of-variance-components.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## ANOVA, rebuilt as a hierarchy[#](#anova-rebuilt-as-a-hierarchy "Link to this heading")

Classical analysis of variance partitions variation among ****sources**** — main effects, interactions,
residual — and tests each with an \(F\) statistic. The Bayesian view keeps the partition but changes
its meaning: each source of variation is a ****batch of exchangeable coefficients**** with its own variance
component, and ANOVA becomes the estimation of those variances.

## The reframing[#](#the-reframing "Link to this heading")

A two-way layout with factors \(A\) and \(B\) and their interaction becomes

\[y\_i = \mu + a\_{j[i]} + b\_{k[i]} + (ab)\_{jk[i]} + \epsilon\_i,\]

with each batch drawn from its own distribution,

\[a\_j \sim \mathrm{N}(0, \sigma\_A^2), \quad
b\_k \sim \mathrm{N}(0, \sigma\_B^2), \quad
(ab)\_{jk} \sim \mathrm{N}(0, \sigma\_{AB}^2), \quad
\epsilon\_i \sim \mathrm{N}(0, \sigma\_y^2).\]

The classical ****mean squares**** are essentially estimates of these variance components. But where ANOVA
asks “is \(\sigma\_A^2\) exactly zero?” — a point null — the hierarchical model ****estimates each
:math:`sigma`****, which is almost always the more useful quantity. How large the batch of effects is
matters more than whether it is precisely null.

```
import pymc as pm
with pm.Model():
    mu = pm.Normal("mu", 0, 5)
    sA = pm.HalfNormal("sA", 1); sB = pm.HalfNormal("sB", 1); sAB = pm.HalfNormal("sAB", 1)
    a  = pm.Normal("a", 0, sA, shape=nA)                 # batch A
    b  = pm.Normal("b", 0, sB, shape=nB)                 # batch B
    ab = pm.Normal("ab", 0, sAB, shape=(nA, nB))         # interaction batch
    mu_i = mu + a[jA] + b[jB] + ab[jA, jB]
    pm.Normal("y", mu_i, pm.HalfNormal("sy", 1), observed=y)
    # posteriors for sA, sB, sAB ARE the analysis of variance

```

## Finite and superpopulation variance[#](#finite-and-superpopulation-variance "Link to this heading")

Gelman’s framing sharpens what a variance component **means**. The ****superpopulation**** standard deviation
describes the distribution from which the batch of effects is drawn — relevant to a **new**, unobserved
level. The ****finite-population**** standard deviation is the actual spread of the effects you **have** — the
\(nA\) levels in this study. They differ when the batch is small, and the distinction answers a real
question: are you generalising to new levels, or summarising these?

## Why the batched view wins[#](#why-the-batched-view-wins "Link to this heading")

Three advantages over the \(F\)-test tradition. It handles ****unbalanced**** and ****complex**** designs
uniformly, where classical ANOVA formulas fragment. It gives ****partial pooling**** of the effects within
each batch, stabilising estimates that classical ANOVA leaves noisy. And it reports ****magnitudes with
uncertainty**** rather than a reject/retain verdict on a null nobody believes exactly. ANOVA was never
really about testing; it was about ****decomposing variation****, and the hierarchical model does that
directly — the same batching that ran through this entire stage, applied to designed factors.

> **Hint**
> ****Related lessons:**** [Regression coeﬃcients exchangeable in batches](099-regression-coefficients-exchangeable-in-batches.html) · [Varying intercepts and slopes](102-varying-intercepts-and-slopes.html) · [Hierarchical models for batches of variance components](105-hierarchical-models-for-batches-of-variance-components.html) · [Computation: batching and transformation](103-computation-batching-and-transformation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/06/analysis-of-variance-and-the-batching-of-coe%ef%ac%83cients/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)