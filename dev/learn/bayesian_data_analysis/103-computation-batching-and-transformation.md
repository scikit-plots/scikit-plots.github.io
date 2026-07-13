# Computation: batching and transformation[#](#computation-batching-and-transformation "Link to this heading")

****Part 4 · Stage 12 · 🏗️ Hierarchical Regression**** · Lesson 103 of 144 · **advanced**

[◀ Previous · Varying intercepts and slopes](102-varying-intercepts-and-slopes.html) · [Next · Analysis of variance and the batching of coeﬃcients ▶](104-analysis-of-variance-and-the-batching-of-coefficients.html) · [↑ Section](index.html)

## Making batched models sample[#](#making-batched-models-sample "Link to this heading")

A model with several batches of exchangeable coefficients — varying intercepts, varying slopes, their
covariance — is easy to **write** and can be hard to **fit**. The geometry of hierarchical posteriors, first
met at eight schools, returns in force here, and two transformations make these models tractable.

## The funnel, at scale[#](#the-funnel-at-scale "Link to this heading")

Each batch carries the same pathology: when its scale \(\tau\_b\) is small, the coefficients in that
batch are squeezed into a narrow neck whose curvature the sampler cannot follow, and NUTS reports
divergences (Stage 9). With multiple batches the funnels compound. The ****non-centred**** parameterisation
is the standard cure — write each coefficient as a standard-normal draw scaled and shifted by the batch
parameters, so the raw parameters have a geometry independent of \(\tau\_b\):

\[\beta\_j = \mu\_b + \tau\_b \, \eta\_j, \qquad \eta\_j \sim \mathrm{N}(0, 1).\]

Apply it per batch, and — for varying intercepts and slopes together — to the ****whole coefficient vector
at once**** through the Cholesky factor of the group covariance.

```
import pymc as pm
with pm.Model():
    mu = pm.Normal("mu", 0, 5, shape=2)
    chol, _, _ = pm.LKJCholeskyCov("cov", n=2, eta=2,
                                   sd_dist=pm.HalfNormal.dist(1.0), compute_corr=True)
    z = pm.Normal("z", 0, 1, shape=(n_groups, 2))        # flat geometry
    ab = pm.Deterministic("ab", mu + z @ chol.T)         # correlated, non-centred
    mu_i = ab[grp, 0] + ab[grp, 1] * x
    pm.Normal("y", mu_i, pm.HalfNormal("s", 1), observed=y)

```

## Transformation and scaling[#](#transformation-and-scaling "Link to this heading")

The second lever is the same one that helped Gibbs. ****Centre and scale predictors**** so intercepts and
slopes decorrelate and share a common metric; a \(\mathrm{N}(0, 1)\) prior then means the same thing
everywhere, and the sampler sees a roughly spherical posterior. Where a batch is data-rich, the
****centred**** parameterisation is actually better conditioned — so the choice of centred versus non-centred
is per batch, decided by how much information each group carries, exactly as in the eight-schools lesson.

## Practical workflow[#](#practical-workflow "Link to this heading")

Three habits keep batched models honest. ****Standardise inputs**** before fitting. ****Default to
non-centred**** for batches with weak data per group, centred for strong. And ****read the diagnostics****
per batch — divergences, \(\hat{R}\), and bulk/tail ESS for each \(\tau\_b\) — because a single
badly-parameterised batch can stall an otherwise healthy model. Batching organises the model; these
transformations are what let the sampler explore it.

> **Hint**
> ****Related lessons:**** [Varying intercepts and slopes](102-varying-intercepts-and-slopes.html) · [Hamiltonian Monte Carlo for a hierarchical model](079-hamiltonian-monte-carlo-for-a-hierarchical-model.html) · [Eﬃcient Gibbs samplers](075-efficient-gibbs-samplers.html) · [Analysis of variance and the batching of coeﬃcients](104-analysis-of-variance-and-the-batching-of-coefficients.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/06/computation-batching-and-transformation/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)