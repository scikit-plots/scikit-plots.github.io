# Latent Gaussian process models[#](#latent-gaussian-process-models "Link to this heading")

****Part 5 · Stage 15 · 🌊 Basis Functions & Gaussian Processes**** · Lesson 131 of 144 · **advanced**

[◀ Previous · Example: birthdays and birthdates](130-example-birthdays-and-birthdates.html) · [Next · Functional data analysis ▶](132-functional-data-analysis.html) · [↑ Section](index.html)

## Gaussian processes for non-Gaussian data[#](#gaussian-processes-for-non-gaussian-data "Link to this heading")

Gaussian-process regression as introduced assumes a ****Gaussian**** likelihood — continuous, normally-noised
observations. Most GP applications are not like that: the outcome is binary, a count, a category. A
****latent**** Gaussian process handles them by putting the GP ****inside**** the model, on an unobserved
function that is then passed through a link and a non-Gaussian likelihood — exactly the GLM move, with a
GP where the linear predictor used to be.

## The construction[#](#the-construction "Link to this heading")

Let a latent function \(f\) have a GP prior, and let the observations depend on it through a link:

\[f \sim \mathcal{GP}(0, k), \qquad
g\bigl(\mathrm{E}[y\_i]\bigr) = f(x\_i), \qquad
y\_i \sim \text{ExponentialFamily}.\]

For binary data this is ****GP classification**** — a logistic link on a smoothly varying latent function,
giving a probability surface that bends with the inputs. For counts it is a ****log-Gaussian Cox process**** —
a Poisson whose log-rate is a GP, the natural model for events whose intensity varies smoothly over space
or time.

```
import pymc as pm
with pm.Model():
    ell = pm.Gamma("ell", 2, 1); eta = pm.HalfNormal("eta", 1)
    cov = eta**2 * pm.gp.cov.ExpQuad(1, ls=ell)
    gp = pm.gp.Latent(cov_func=cov)                      # explicit latent function
    f = gp.prior("f", X=X)                               # the latent GP values
    pm.Bernoulli("y", p=pm.math.sigmoid(f), observed=y)  # non-Gaussian likelihood

```

## The computational cost[#](#the-computational-cost "Link to this heading")

The price is real. With a Gaussian likelihood the latent function integrates out analytically; with a
non-Gaussian one it ****cannot****, so \(f\) must be sampled or approximated. This is precisely the
****latent Gaussian model**** class that motivated ****INLA**** back in the computation stage — nested Laplace
approximation was built for exactly this structure, and is far faster than MCMC here. Sampling the latent
values with HMC also invites the funnel geometry of hierarchical models, so non-centred parameterisations
and careful diagnostics apply.

## Why it matters[#](#why-it-matters "Link to this heading")

Latent GPs are the general-purpose tool for ****flexible, non-Gaussian regression****: spatial disease
mapping (a Cox process over geography), smoothly-varying classification boundaries, time-varying rates.
They unify the threads of Part V — the GP supplies the flexible function, the link and likelihood handle
the data type, and the computation connects back to the approximation methods built earlier. Wherever a
smooth latent surface drives non-normal observations, a latent Gaussian process is the model.

> **Hint**
> ****Related lessons:**** [Gaussian process regression](129-gaussian-process-regression.html) · [Other approximations](089-other-approximations.html) · [Standard generalized linear model likelihoods](106-standard-generalized-linear-model-likelihoods.html) · [Functional data analysis](132-functional-data-analysis.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/latent-gaussian-process-models/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)