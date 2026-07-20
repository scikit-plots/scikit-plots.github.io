# Designed experiments[#](#designed-experiments "Link to this heading")

****Part 2 · Stage 7 · 🗳️ Data Collection & Decisions**** · Lesson 053 of 144 · **intermediate**

[◀ Previous · Sample surveys](052-sample-surveys.html) · [Next · Sensitivity and the role of randomization ▶](054-sensitivity-and-the-role-of-randomization.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Choosing the mechanism yourself[#](#choosing-the-mechanism-yourself "Link to this heading")

In a survey the inclusion mechanism is something you must ****discover****. In an experiment you ****choose****
it. That is the whole advantage: the assignment mechanism \(p(W \mid y, \phi)\) — which units get
treatment, \(W\_i \in \{0, 1\}\) — is ****known, controlled, and probabilistic**** by construction, so
ignorability is guaranteed rather than assumed.

## Causal inference as missing data[#](#causal-inference-as-missing-data "Link to this heading")

Each unit has two ****potential outcomes****: \(y\_i(1)\) under treatment and \(y\_i(0)\) under
control. You observe exactly one. The causal effect \(y\_i(1) - y\_i(0)\) is therefore unobservable
for every individual — one of its two terms is always ****missing****. Causal inference **is** a missing-data
problem, and the assignment mechanism **is** the missingness mechanism:

\[\Pr\bigl(W \mid y(0), y(1), X, \phi\bigr) .\]

Complete randomisation makes this depend on ****nothing**** (the parallel of MCAR). Stratified or blocked
randomisation makes it depend only on ****covariates**** \(X\) (the parallel of MAR, ignorable given
\(X\)). Either way the mechanism factors out — **provided** the design variables are in the model.

## The Bayesian analysis[#](#the-bayesian-analysis "Link to this heading")

Once ignorability holds, fitting is unremarkable: model the outcome, include the design, and read the
causal effect off the posterior. Blocking becomes a hierarchical term; the estimand is a function of
draws.

```
import pymc as pm
with pm.Model():
    a_block = pm.Normal("a_block", 0, pm.HalfNormal("s", 1), shape=n_blocks)  # blocking
    tau  = pm.Normal("tau", 0, 1)                    # treatment effect
    mu   = a_block[block] + tau * W
    pm.Normal("y", mu, pm.HalfNormal("sigma", 1), observed=y)
    idata = pm.sample()
# P(effect > 0 | data) is a count over draws; the design justified the model

```

## Design earns you the likelihood[#](#design-earns-you-the-likelihood "Link to this heading")

Two consequences worth stating. ****Blocking on a covariate**** must be matched by ****including it in the
model****: randomising within blocks and then ignoring blocks discards the design’s benefit and can
mis-state uncertainty. And randomisation buys ****ignorability, not precision**** — a badly designed
randomised experiment gives an unbiased answer with an interval too wide to act on. The next lesson
asks exactly what randomisation does and does not protect against.

> **Hint**
> ****Related lessons:**** [Data-collection models and ignorability](051-data-collection-models-and-ignorability.html) · [Sensitivity and the role of randomization](054-sensitivity-and-the-role-of-randomization.html) · [Observational studies](055-observational-studies.html) · [Regression for causal inference: incumbency and voting](093-regression-for-causal-inference-incumbency-and-voting.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/11/designed-experiments/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)