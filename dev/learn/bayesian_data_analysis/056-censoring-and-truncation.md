# Censoring and truncation[#](#censoring-and-truncation "Link to this heading")

****Part 2 · Stage 7 · 🗳️ Data Collection & Decisions**** · Lesson 056 of 144 · **intermediate**

[◀ Previous · Observational studies](055-observational-studies.html) · [Next · Bayesian decision theory in diﬀerent contexts ▶](057-bayesian-decision-theory-in-different-contexts.html) · [↑ Section](index.html)

## Two ways data go missing[#](#two-ways-data-go-missing "Link to this heading")

Both words describe incomplete observation, and confusing them yields a wrong likelihood. The
distinction is what you know about the units you did not fully see.

* ****Censoring****: the unit ****is**** in your dataset, but its value is known only to lie in a range. A
  patient still alive at the end of a trial has survival time \(> c\). A scale reading “over 100 kg”.
* ****Truncation****: the unit is ****absent entirely****. Only patients who survived long enough to enrol
  appear; light sources fainter than the telescope’s limit are never recorded. You do not know how many
  you missed.

## The likelihoods differ[#](#the-likelihoods-differ "Link to this heading")

For ****censoring****, the censored observation contributes the probability of the event it represents —
the survival function, not the density:

\[p(y \mid \theta) = \prod\_{i \, \text{obs}} f(y\_i \mid \theta)
\prod\_{i \, \text{cens}} \bigl[1 - F(c\_i \mid \theta)\bigr] .\]

For ****truncation****, every observed value must be ****renormalised**** by the probability of being observed
at all, because the sample space itself is restricted:

\[p(y \mid \theta) = \prod\_{i} \frac{f(y\_i \mid \theta)}{\Pr(\text{observed} \mid \theta)}
= \prod\_{i} \frac{f(y\_i \mid \theta)}{1 - F(c \mid \theta)} .\]

Ignore the denominator and you fit a model to a biased sample — the truncated-normal demonstration from
the data-collection lesson, where the sample mean converged confidently to the wrong number.

## In code[#](#in-code "Link to this heading")

Both are one line in a modern PPL, which is precisely why the distinction must be made ****before****
coding:

```
import pymc as pm
with pm.Model():
    mu, sigma = pm.Normal("mu", 0, 10), pm.HalfNormal("sigma", 5)
    # censoring: value known only to exceed c (unit IS in the data)
    pm.Censored("y_cens", pm.Normal.dist(mu, sigma), lower=None, upper=c, observed=y)
    # truncation: values beyond c never enter the sample at all
    pm.Truncated("y_trunc", pm.Normal.dist(mu, sigma), lower=c, observed=y)

```

## Censoring is ignorable, truncation less so[#](#censoring-is-ignorable-truncation-less-so "Link to this heading")

Where the censoring ****time**** is fixed in advance, or depends only on observed quantities, the mechanism
is ignorable in the technical sense — the censored contributions must appear in the likelihood, but no
separate model for \(\phi\) is needed. When censoring depends on the ****unobserved**** value itself —
patients withdrawing **because** they are deteriorating — the mechanism is ****MNAR****, and the analysis
must model why they left. That is not a computational difficulty but an ****identification**** one: the
data are silent, and the answer will move with the assumption. Report the sensitivity.

> **Hint**
> ****Related lessons:**** [Bayesian inference requires a model for data collection](050-bayesian-inference-requires-a-model-for-data-collection.html) · [Data-collection models and ignorability](051-data-collection-models-and-ignorability.html) · [Missing values with counted data](122-missing-values-with-counted-data.html) · [Multiple imputation](119-multiple-imputation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/11/censoring-and-truncation/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)