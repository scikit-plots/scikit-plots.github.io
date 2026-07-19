# Weakly informative priors for logistic regression[#](#weakly-informative-priors-for-logistic-regression "Link to this heading")

****Part 4 · Stage 13 · 🔗 Generalized Linear Models**** · Lesson 108 of 144 · **advanced**

[◀ Previous · Working with generalized linear models](107-working-with-generalized-linear-models.html) · [Next · Overdispersed Poisson regression for police stops ▶](109-overdispersed-poisson-regression-for-police-stops.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## When flat priors fail[#](#when-flat-priors-fail "Link to this heading")

Logistic regression has a specific, common pathology: ****separation****. If some combination of predictors
perfectly (or nearly perfectly) predicts the outcome, the maximum-likelihood coefficient runs off to
****infinity**** — the likelihood keeps rising as the coefficient grows, with no maximum. Improper flat
priors inherit the problem: the posterior is improper, and standard software returns absurd estimates
with enormous standard errors. Separation is not rare; it appears even with large samples and few
predictors.

## The weakly informative fix[#](#the-weakly-informative-fix "Link to this heading")

Gelman, Jakulin, Pittau and Su proposed a default that solves this cleanly. Two steps: ****scale**** the
predictors, then put a ****heavy-tailed prior**** on the coefficients.

\[\beta\_j \sim \mathrm{Cauchy}(0, s\_j), \qquad
s\_0 = 10 \;\; (\text{intercept}), \quad s\_j = 2.5 \;\; (\text{scaled predictors}).\]

The recipe centres every nonbinary predictor at mean 0 and scales it to standard deviation 0.5, so that
a unit change is a two-SD shift and the scale 2.5 means the same thing across coefficients. The prior is
****weakly informative****: it barely constrains coefficients in the plausible range but rules out the
absurd — a logistic coefficient of 40, implying an effect no finite dataset could support.

```
import pymc as pm
# scale nonbinary predictors to mean 0, sd 0.5 (per Gelman et al. 2008)
Xs = (X - X.mean(0)) / (2 * X.std(0))
with pm.Model():
    b0 = pm.Cauchy("b0", 0, 10)                          # intercept
    b = pm.StudentT("b", nu=1, mu=0, sigma=2.5, shape=Xs.shape[1])   # Cauchy = t(1)
    p = pm.math.sigmoid(b0 + Xs @ b)
    pm.Bernoulli("y", p=p, observed=y)

```

## Why Cauchy[#](#why-cauchy "Link to this heading")

The choice of a heavy tail is deliberate, and it balances two demands. The tails must be ****heavy enough****
not to over-shrink a coefficient that really is large — a genuine strong effect should survive. But the
prior must be ****proper and informative enough**** to give a finite answer under separation, which a flat
prior cannot. The Cauchy — Student-\(t\) with one degree of freedom — sits at exactly that balance:
its tails are heavier than any normal, so large true coefficients are respected, yet its mass near zero
provides the gentle shrinkage that tames separation and ****always yields an answer****.

## The general lesson[#](#the-general-lesson "Link to this heading")

This is the template for weakly informative priors everywhere. Not the false neutrality of a flat prior,
which secretly asserts that a coefficient of 100 is as plausible as one of 1; and not a tight informative
prior that overrides the data. A weakly informative prior encodes what any analyst knows before seeing
the data — that effects on a sensible scale are not astronomically large — and that mild knowledge is
often exactly enough to turn an ill-posed problem into a well-behaved one.

> **Hint**
> ****Related lessons:**** [Working with generalized linear models](107-working-with-generalized-linear-models.html) · [Weakly Informative Prior Distributions](019-weakly-informative-prior-distributions.html) · [Standard generalized linear model likelihoods](106-standard-generalized-linear-model-likelihoods.html) · [Regularization and dimension reduction](096-regularization-and-dimension-reduction.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/06/weakly-informative-priors-for-logistic-regression/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)