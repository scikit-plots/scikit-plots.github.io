# Overdispersed Poisson regression for police stops[#](#overdispersed-poisson-regression-for-police-stops "Link to this heading")

****Part 4 · Stage 13 · 🔗 Generalized Linear Models**** · Lesson 109 of 144 · **advanced**

[◀ Previous · Weakly informative priors for logistic regression](108-weakly-informative-priors-for-logistic-regression.html) · [Next · State-level opinons from national polls ▶](110-state-level-opinons-from-national-polls.html) · [↑ Section](index.html)

## Counts with too much variance[#](#counts-with-too-much-variance "Link to this heading")

The Poisson model forces a rigid tie: variance equals mean. Real count data almost never obey it —
stop counts, disease cases, accident tallies vary far more than Poisson allows, because unmodelled
heterogeneity inflates the spread. This lesson works through the canonical applied example and the fix
for ****overdispersion****.

## The stop-and-frisk study[#](#the-stop-and-frisk-study "Link to this heading")

Gelman, Fagan and Kiss analysed roughly 125,000 pedestrian stops by the New York police over fifteen
months, asking whether minority pedestrians were stopped more often than a race-neutral policy would
predict. The count of stops of ethnic group \(e\) in precinct \(p\) is modelled as Poisson,
with an ****offset**** for the group’s baseline rate of prior arrests — the appropriate denominator, since
stops should be compared against involvement in crime, not raw population:

\[y\_{ep} \sim \mathrm{Poisson}\bigl(n\_{ep} \, e^{\mu + \alpha\_e + \beta\_p + \epsilon\_{ep}}\bigr),
\qquad \epsilon\_{ep} \sim \mathrm{N}(0, \sigma^2),\]

where \(\alpha\_e\) is the ethnic-group effect, \(\beta\_p\) a precinct effect, and
\(n\_{ep}\) the arrest-based offset. The per-observation \(\epsilon\_{ep}\) is the crucial term.

## Overdispersion, modelled honestly[#](#overdispersion-modelled-honestly "Link to this heading")

That \(\epsilon\_{ep}\) — an individual-level normal error inside the log rate — is what turns a
Poisson into an ****overdispersed**** Poisson. It lets each cell’s rate deviate from what the fixed effects
predict, absorbing the excess variance that a plain Poisson would deny. Without it, the model forces
variance to equal mean, the residuals blow past that ceiling, and every standard error comes out far
too small — a confident, wrong answer about a charged question.

```
import pymc as pm
with pm.Model():
    mu = pm.Normal("mu", 0, 5)
    a = pm.Normal("a", 0, 1, shape=n_eth)                # ethnic-group effects
    s_p = pm.HalfNormal("s_p", 1)
    b = pm.Normal("b", 0, s_p, shape=n_prec)             # precinct effects (pooled)
    s_e = pm.HalfNormal("s_e", 1)
    eps = pm.Normal("eps", 0, s_e, shape=n_obs)          # <- overdispersion term
    rate = pm.math.exp(mu + a[eth] + b[prec] + eps) * n_offset
    pm.Poisson("y", rate, observed=stops)

```

## The finding, and the method’s point[#](#the-finding-and-the-method-s-point "Link to this heading")

Controlling for precinct and for race-specific arrest rates, the analysis found that Black and Hispanic
pedestrians were stopped ****more**** than whites — the disparity survived the controls that might have
explained it away. Two methodological lessons carry beyond the application. The ****offset**** encodes the
right comparison: rates per unit of a relevant baseline, not raw counts. And the ****overdispersion term****
is what makes the uncertainty honest — an ordinary Poisson would have reported spuriously precise
estimates on a question where precision claims have real consequences. Diagnosing variance in excess of
the mean, and modelling it, is not optional refinement; it is the difference between a defensible finding
and an artefact.

> **Hint**
> ****Related lessons:**** [Standard generalized linear model likelihoods](106-standard-generalized-linear-model-likelihoods.html) · [Working with generalized linear models](107-working-with-generalized-linear-models.html) · [Overdispersed versions of standard models](114-overdispersed-versions-of-standard-models.html) · [Hierarchical models for batches of variance components](105-hierarchical-models-for-batches-of-variance-components.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/06/overdispersed-poisson-regression-for-police-stops/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)