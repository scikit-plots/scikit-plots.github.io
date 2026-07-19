# Hamiltonian Monte Carlo for a hierarchical model[#](#hamiltonian-monte-carlo-for-a-hierarchical-model "Link to this heading")

****Part 3 · Stage 9 · ⛓️ MCMC: Gibbs, Metropolis & HMC**** · Lesson 079 of 144 · **intermediate**

[◀ Previous · Hamiltonian Monte Carlo](078-hamiltonian-monte-carlo.html) · [Next · Stan: developing a computing environment ▶](080-stan-developing-a-computing-environment.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## HMC meets the funnel[#](#hmc-meets-the-funnel "Link to this heading")

Hierarchical models are where HMC’s power and its fragility both appear. Return to eight schools in its
****centred**** form, \(\theta\_j \sim \mathrm{N}(\mu, \tau)\), and watch the sampler struggle exactly
where Gibbs crawled.

## The geometry[#](#the-geometry "Link to this heading")

Plot \(\log \tau\) against any \(\theta\_j\). The joint posterior is a ****funnel****: when
\(\tau\) is large, the \(\theta\_j\) are spread widely; when \(\tau\) is small, they are
squeezed into a narrow neck. The posterior’s ****curvature**** therefore changes by orders of magnitude
along \(\tau\), and a leapfrog step size that is stable in the wide mouth is catastrophically too
large in the neck.

The symptom is ****divergences****, and they cluster at small \(\tau\) — precisely the region that
decides whether the schools should be pooled. The sampler reports a value for \(\tau\); it is biased
away from zero, because the neck was never explored.

## The cure is a change of coordinates[#](#the-cure-is-a-change-of-coordinates "Link to this heading")

Write the same model so that the group parameters no longer depend on \(\tau\):

\[\theta\_j = \mu + \tau \, \eta\_j, \qquad \eta\_j \sim \mathrm{N}(0, 1).\]

This is the ****non-centred**** parameterisation. The sampler now moves in \((\mu, \tau, \eta)\), where
\(\eta\) has a fixed standard-normal geometry independent of \(\tau\). The funnel is gone; one
step size fits everywhere.

```
import pymc as pm
with pm.Model():
    mu  = pm.Normal("mu", 0, 5)
    tau = pm.HalfCauchy("tau", 5)
    eta = pm.Normal("eta", 0, 1, shape=8)             # <- flat geometry
    theta = pm.Deterministic("theta", mu + tau * eta) # <- recovered by transformation
    pm.Normal("y", theta, sigma=sigma_j, observed=y)
    idata = pm.sample(target_accept=0.9)
idata.sample_stats["diverging"].sum()                 # must be 0

```

## Which parameterisation, when[#](#which-parameterisation-when "Link to this heading")

Not always non-centred. When each group has ****plenty of data**** — large \(n\_j\), or a large
\(\tau\) — the likelihood pins each \(\theta\_j\) down and the ****centred**** form is better
conditioned; forcing the non-centred version then **creates** the correlation it was meant to remove. The
rule of thumb: ****weak data per group → non-centred; strong data per group → centred****, and with mixed
groups, some models parameterise them differently.

The general lesson is the one that closes this stage. HMC’s efficiency is determined by the posterior’s
****geometry****, and geometry is something the modeller controls through parameterisation. A divergence is
not a complaint about the algorithm; it is information about the model.

> **Hint**
> ****Related lessons:**** [Hamiltonian Monte Carlo](078-hamiltonian-monte-carlo.html) · [Example: parallel experiments in eight schools](037-example-parallel-experiments-in-eight-schools.html) · [Eﬃcient Gibbs samplers](075-efficient-gibbs-samplers.html) · [Weakly Informative Priors for Variance Parameters](039-weakly-informative-priors-for-variance-parameters.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/22/hamiltonian-monte-carlo-for-a-hierarchical-model/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)