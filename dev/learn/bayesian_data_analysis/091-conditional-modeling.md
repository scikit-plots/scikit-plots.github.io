# Conditional modeling[#](#conditional-modeling "Link to this heading")

****Part 4 · Stage 11 · 📈 Regression Foundations**** · Lesson 091 of 144 · **advanced**

[◀ Previous · Unknown normalizing factors](090-unknown-normalizing-factors.html) · [Next · Bayesian analysis of classical regression ▶](092-bayesian-analysis-of-classical-regression.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Model y given x, not (x, y)[#](#model-y-given-x-not-x-y "Link to this heading")

Almost every applied model is a ****regression****: a distribution for an outcome \(y\) ****conditional
on**** predictors \(x\). The move is so routine that its justification goes unexamined. Why is it
legitimate to model \(p(y \mid x, \theta)\) and simply ****ignore**** the distribution of \(x\)?

## The factorisation[#](#the-factorisation "Link to this heading")

Write the joint model for everything observed, with parameters \(\theta\) for the conditional and
\(\psi\) for the predictors:

\[p(x, y \mid \theta, \psi) = \underbrace{p(y \mid x, \theta)}\_{\text{what you care about}}
\; \underbrace{p(x \mid \psi)}\_{\text{nuisance}} .\]

If \(\theta\) and \(\psi\) are ****distinct**** and ****a priori independent****, then the second factor
contributes nothing to \(p(\theta \mid x, y)\): it cancels in the normalisation. Conditional
modelling is therefore not an approximation but an exact consequence — under exactly the conditions of
the ****ignorability**** lesson in Stage 7, transposed from data collection to predictors.

## When it fails[#](#when-it-fails "Link to this heading")

The conditions are not automatic, and each failure is a known pathology:

* ****Measurement error in**** \(x\) — the observed predictor is not the one the outcome responds to, so
  the parameters are linked and \(p(x \mid \psi)\) re-enters the likelihood.
* ****Missing predictors**** — imputing them requires a model for \(x\).
* ****Selection on**** \(x\) ****or**** \(y\) — if inclusion depends on the outcome, the conditional
  likelihood is wrong (Stage 7 again).
* ****Shared parameters**** — a design in which \(\psi\) informs \(\theta\) breaks distinctness.

## What conditioning buys[#](#what-conditioning-buys "Link to this heading")

You are relieved of modelling the predictors’ joint distribution, which is usually complicated,
high-dimensional, and irrelevant to the question. You may then choose \(p(y \mid x, \theta)\) to
suit the outcome — normal, binomial, Poisson (Stage 13) — and the same posterior machinery applies.

```
import pymc as pm
with pm.Model():
    beta = pm.Normal("beta", 0, 2.5, shape=X.shape[1])    # predictors standardised
    sigma = pm.HalfNormal("sigma", 1)
    pm.Normal("y", X @ beta, sigma, observed=y)           # x is conditioned on, not modelled
    idata = pm.sample()

```

One caution to carry into Part IV: conditioning on \(x\) makes the model ****agnostic about causation****.
\(p(y \mid x)\) is a statement about association; whether the coefficient is a causal effect depends
on the data-collection lessons, not on the regression.

> **Hint**
> ****Related lessons:**** [Bayesian analysis of classical regression](092-bayesian-analysis-of-classical-regression.html) · [Goals of regression analysis](094-goals-of-regression-analysis.html) · [Data-collection models and ignorability](051-data-collection-models-and-ignorability.html) · [Standard generalized linear model likelihoods](106-standard-generalized-linear-model-likelihoods.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/23/conditional-modeling/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)