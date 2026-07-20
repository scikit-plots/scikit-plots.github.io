# Eﬃcient Gibbs samplers[#](#efficient-gibbs-samplers "Link to this heading")

****Part 3 · Stage 9 · ⛓️ MCMC: Gibbs, Metropolis & HMC**** · Lesson 075 of 144 · **intermediate**

[◀ Previous · Example: hierarchical normal model](074-example-hierarchical-normal-model.html) · [Next · Eﬃcient Metropolis jumping rules ▶](076-efficient-metropolis-jumping-rules.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Fixing what slows Gibbs down[#](#fixing-what-slows-gibbs-down "Link to this heading")

Gibbs moves parallel to the coordinate axes. Its efficiency is therefore governed entirely by the
****posterior correlation**** among the parameters it updates separately: a narrow diagonal ridge is
traversed in tiny axis-aligned steps. Three standard cures attack that correlation directly.

## Reparameterise[#](#reparameterise "Link to this heading")

Change coordinates so the posterior is closer to spherical.

* ****Centring predictors.**** In \(y = \alpha + \beta x\), an uncentred \(x\) makes
  \(\alpha\) and \(\beta\) strongly correlated; subtracting \(\bar{x}\) makes them nearly
  independent, and Gibbs mixes immediately.
* ****Non-centred hierarchies.**** Replace \(\theta\_j \sim \mathrm{N}(\mu, \tau^2)\) with
  \(\theta\_j = \mu + \tau \eta\_j\), \(\eta\_j \sim \mathrm{N}(0, 1)\). The funnel of the previous
  lesson vanishes because \(\eta\) no longer depends on \(\tau\).
* ****Rescaling.**** Put parameters on comparable scales so no single conditional dominates.

Which parameterisation wins depends on the data: ****centred**** works when groups are informative (large
\(n\_j\), large \(\tau\)); ****non-centred**** when they are not. Hierarchical models with weak data
per group want the non-centred form.

## Block[#](#block "Link to this heading")

Update correlated parameters ****jointly****, drawing from their joint conditional. In a conjugate linear
model the entire coefficient vector \(\beta\) is drawn in one multivariate normal step rather than
coordinate by coordinate, and correlation among coefficients stops mattering at all.

```
import numpy as np
from scipy import stats
# blocked draw of the whole coefficient vector, given sigma^2
V = np.linalg.inv(X.T @ X / sigma**2 + np.linalg.inv(Sigma0))
m = V @ (X.T @ y / sigma**2 + np.linalg.inv(Sigma0) @ mu0)
beta = stats.multivariate_normal(m, V).rvs()      # one step, any correlation

```

## Augment[#](#augment "Link to this heading")

Add ****auxiliary variables**** that make the conditionals conjugate. A \(t\) likelihood is a
scale-mixture of normals: introduce per-observation scale parameters and every conditional becomes
standard. Probit regression given latent normal utilities is conjugate throughout. You sample in a
bigger space, then ****drop the extra columns**** — marginalisation, again.

## The residual limit[#](#the-residual-limit "Link to this heading")

Even a well-tuned Gibbs sampler explores by ****random walk****, and its cost grows quadratically with the
distance it must travel. Reparameterising and blocking buy constants, sometimes large ones. Escaping the
random walk itself requires ****gradients****, which is Hamiltonian Monte Carlo.

> **Hint**
> ****Related lessons:**** [Gibbs sampler](069-gibbs-sampler.html) · [Example: hierarchical normal model](074-example-hierarchical-normal-model.html) · [Using Gibbs and Metropolis as building blocks](071-using-gibbs-and-metropolis-as-building-blocks.html) · [Computation: batching and transformation](103-computation-batching-and-transformation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/21/e%ef%ac%83cient-gibbs-samplers/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)