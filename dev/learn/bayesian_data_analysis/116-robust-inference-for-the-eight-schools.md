# Robust inference for the eight schools[#](#robust-inference-for-the-eight-schools "Link to this heading")

****Part 4 · Stage 14 · 🛡️ Robustness & Missing Data**** · Lesson 116 of 144 · **advanced**

[◀ Previous · Posterior inference and computation](115-posterior-inference-and-computation.html) · [Next · Robust regression using t-distributed errors ▶](117-robust-regression-using-t-distributed-errors.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Robustness meets the canonical example[#](#robustness-meets-the-canonical-example "Link to this heading")

The eight-schools model has run through this book as the archetype of hierarchical inference. Here it
returns as a test of ****robustness****: what happens to the pooling when the population distribution of
school effects is given ****heavy tails**** instead of the usual normal?

## The standard model, recalled[#](#the-standard-model-recalled "Link to this heading")

The original assumes the true school effects are drawn from a normal population:

\[y\_j \sim \mathrm{N}(\theta\_j, \sigma\_j^2), \qquad \theta\_j \sim \mathrm{N}(\mu, \tau^2).\]

The normal population is what drives the shrinkage — every school pulled toward \(\mu\) by an amount
set by \(\tau\). But it also encodes an assumption: that no school’s true effect is a genuine
****outlier****. A normal population makes a school far from \(\mu\) very improbable, so the model shrinks
it hard, whether or not that is warranted.

## The robust version[#](#the-robust-version "Link to this heading")

Replace the normal population with a \(t\):

\[\theta\_j \sim t\_\nu(\mu, \tau).\]

Now the population itself tolerates outliers. A school whose observed effect is genuinely extreme is
****shrunk less**** — the heavy-tailed population grants that a true effect can lie far from the centre, so
the model does not force it back as aggressively. Ordinary schools are still pooled as before; only the
apparent outlier is treated differently.

```
import pymc as pm
with pm.Model():
    mu  = pm.Normal("mu", 0, 5)
    tau = pm.HalfCauchy("tau", 5)
    nu  = pm.Gamma("nu", 2, 0.1)                         # population tail weight
    eta = pm.StudentT("eta", nu=nu, mu=0, sigma=1, shape=8)   # non-centred, heavy-tailed
    theta = pm.Deterministic("theta", mu + tau * eta)
    pm.Normal("y", theta, sigma=sigma_j, observed=y)

```

## What the comparison shows[#](#what-the-comparison-shows "Link to this heading")

Two lessons, both general. First, on the eight-schools data the robust and normal fits are ****similar**** —
none of the eight effects is a dramatic outlier, so heavy tails change little, which is itself
reassuring: the robust model does not distort an already-well-behaved analysis. Robustness that only
acts when needed is the goal. Second, the value of the exercise is the ****sensitivity check**** it
constitutes — fitting both and comparing is exactly the prior-robustness discipline of Stage 6, applied
to the population distribution. If the conclusions had diverged, that divergence would itself be the
finding: a signal that one school was driving the result and that the normal assumption was doing more
work than the data justified.

## The closing point[#](#the-closing-point "Link to this heading")

Robustness completes the hierarchical story. The normal population is a **choice**, and the
\(t\)-population is the tool for asking how much that choice matters. Fitting the robust version
costs almost nothing and answers a question every hierarchical analysis should ask: are my pooled
estimates a property of the data, or an artefact of assuming no outliers? Stage 14 turns next from
outliers to the other great departure from clean data — ****missingness****.

> **Hint**
> ****Related lessons:**** [Example: parallel experiments in eight schools](037-example-parallel-experiments-in-eight-schools.html) · [Aspects of robustness](113-aspects-of-robustness.html) · [Posterior inference and computation](115-posterior-inference-and-computation.html) · [Continuous model expansion](048-continuous-model-expansion.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/07/robust-inference-for-the-eight-schools/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)