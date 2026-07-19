# Example: population toxicokinetics[#](#example-population-toxicokinetics "Link to this heading")

****Part 5 · Stage 15 · 🌊 Basis Functions & Gaussian Processes**** · Lesson 125 of 144 · **advanced**

[◀ Previous · Example: serial dilution assay](124-example-serial-dilution-assay.html) · [Next · Splines and weighted sums of basis functions ▶](126-splines-and-weighted-sums-of-basis-functions.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## A mechanistic model, fit hierarchically[#](#a-mechanistic-model-fit-hierarchically "Link to this heading")

How does an inhaled solvent move through the body — absorbed, distributed among tissues, metabolised,
exhaled? Gelman, Bois and Jiang answered this for tetrachloroethylene with a model that fuses three
threads of this book: a ****mechanistic**** differential-equation model of physiology, a ****hierarchical****
treatment of person-to-person variation, and ****informative priors**** grounded in real biology.

## The physiological model[#](#the-physiological-model "Link to this heading")

The body is divided into ****compartments**** — well-perfused tissues, poorly-perfused tissues, fat, and the
liver where metabolism occurs — and the flow of the compound between them is governed by a system of
****ordinary differential equations****. The parameters are physical quantities: blood flows, tissue
volumes, partition coefficients, metabolic rates. The concentration over time is the ODE solution, and
the likelihood compares it to measured blood or breath concentrations.

\[\frac{dC\_{\text{tissue}}}{dt} = \frac{Q\_{\text{tissue}}}{V\_{\text{tissue}}}
\Bigl(C\_{\text{art}} - \frac{C\_{\text{tissue}}}{\lambda\_{\text{tissue}}}\Bigr) - (\text{metabolism}),\]

one such equation per compartment, coupled through the arterial concentration.

## Hierarchy and physiological priors[#](#hierarchy-and-physiological-priors "Link to this heading")

Each subject has their own physiological parameters, drawn from a ****population**** distribution — partial
pooling, so a subject with sparse data borrows from the group. And because every parameter is a genuine
physiological variable, ****informative priors**** are not a convenience but a duty: a tissue volume has a
known plausible range, a blood flow a measured typical value. The priors carry decades of physiology.

```
import pymc as pm
with pm.Model():
    # population means of log physiological parameters, with literature-based priors
    mu = pm.Normal("mu", mu=prior_means, sigma=prior_sds, shape=n_params)
    tau = pm.HalfNormal("tau", 1, shape=n_params)
    theta = pm.Normal("theta", mu, tau, shape=(n_subj, n_params))   # per-subject, pooled
    C_pred = solve_pbpk_odes(theta, dosing)                         # ODE solution
    pm.Lognormal("y", mu=pm.math.log(C_pred), sigma=sigma, observed=concentration)

```

## Why it is a landmark[#](#why-it-is-a-landmark "Link to this heading")

The analysis shows Bayesian inference ****automatically propagating**** the uncertainty in a large,
mechanistic, hierarchical model — the many parameters, the ODE nonlinearity, the person-to-person spread,
all carried into the predictions without approximation. Posterior predictive simulation checks the fit
and its sensitivity to the priors, exactly the discipline of Stage 6. The lesson for Part V: nonlinearity
here is ****scientific****, dictated by physiology, not a flexible curve — and Bayesian methods let a genuine
mechanistic model be fit with honest uncertainty. The lessons that follow relax that structure, replacing
mechanism with flexible ****basis functions**** when the true form is unknown.

> **Hint**
> ****Related lessons:**** [Example: serial dilution assay](124-example-serial-dilution-assay.html) · [Bayesian analysis of conjugate hierarchical models](035-bayesian-analysis-of-conjugate-hierarchical-models.html) · [Hierarchical decision analysis for home radon](060-hierarchical-decision-analysis-for-home-radon.html) · [Splines and weighted sums of basis functions](126-splines-and-weighted-sums-of-basis-functions.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/09/example-population-toxicokinetics/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)