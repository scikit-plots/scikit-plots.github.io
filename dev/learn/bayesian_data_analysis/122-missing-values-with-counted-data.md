# Missing values with counted data[#](#missing-values-with-counted-data "Link to this heading")

****Part 4 · Stage 14 · 🛡️ Robustness & Missing Data**** · Lesson 122 of 144 · **advanced**

[◀ Previous · Example: multiple imputation for a series of polls](121-example-multiple-imputation-for-a-series-of-polls.html) · [Next · Example: an opinion poll in Slovenia ▶](123-example-an-opinion-poll-in-slovenia.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Imputation beyond the normal[#](#imputation-beyond-the-normal "Link to this heading")

The multivariate-normal imputation of the previous stage assumed continuous variables. ****Count**** data —
disease cases, survey tallies, event frequencies — need imputation on their own terms: a fractional or
negative imputed count is nonsense, so the imputation model must respect the discreteness.

## Model the counts directly[#](#model-the-counts-directly "Link to this heading")

The Bayesian principle is unchanged: treat missing counts as ****unknown parameters**** and give them a
count likelihood, so imputations are proper draws from a Poisson or binomial rather than rounded normals.

\[y\_i^{\text{mis}} \sim \mathrm{Poisson}(\lambda\_i), \qquad
\log \lambda\_i = X\_i \beta,\]

with the same linear-predictor machinery as the GLM stage. A missing count is drawn from its posterior
predictive Poisson, guaranteeing a non-negative integer, and — if the counts are overdispersed — a
****negative binomial**** imputation carries the extra variance, exactly as robustness demanded for observed
counts.

```
import pymc as pm
with pm.Model():
    beta = pm.Normal("beta", 0, 1, shape=k)
    rate = pm.math.exp(X @ beta)
    # observed counts constrain beta; missing entries are drawn as integer parameters
    pm.Poisson("y", mu=rate, observed=y_counts_with_missing)   # masked array
    idata = pm.sample()

```

## The offset subtlety[#](#the-offset-subtlety "Link to this heading")

Counts usually come with an ****exposure**** — population at risk, area, time — and a missing count often
sits beside a **known** exposure. The imputation must condition on it: impute the ****rate**** from the model,
then scale by the observed exposure to draw the count, so a small-population cell gets a correspondingly
small imputed count. Ignoring the offset would impute as if every cell had the same exposure, distorting
exactly the comparison the counts were meant to support.

## Where it fits[#](#where-it-fits "Link to this heading")

The lesson generalises the point that ****imputation inherits the likelihood****: use a normal model and you
impute normals; use a count model and you impute counts. Getting the imputation distribution right — its
support, its variance, its offset — is what keeps completed data coherent with the process that generated
them. It closes the mechanics of missing data; the next example puts the whole apparatus, ignorability
and imputation together, on a real survey.

> **Hint**
> ****Related lessons:**** [Multiple imputation](119-multiple-imputation.html) · [Standard generalized linear model likelihoods](106-standard-generalized-linear-model-likelihoods.html) · [Overdispersed Poisson regression for police stops](109-overdispersed-poisson-regression-for-police-stops.html) · [Example: an opinion poll in Slovenia](123-example-an-opinion-poll-in-slovenia.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/missing-values-with-counted-data/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)