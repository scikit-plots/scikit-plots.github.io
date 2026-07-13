# Conditional and marginal posterior approximations[#](#conditional-and-marginal-posterior-approximations "Link to this heading")

****Part 3 · Stage 10 · 🎛️ Modal & Variational Approximation**** · Lesson 085 of 144 · **intermediate**

[◀ Previous · Finding marginal posterior modes using EM](084-finding-marginal-posterior-modes-using-em.html) · [Next · Example: hierarchical normal model (continued) ▶](086-example-hierarchical-normal-model-continued.html) · [↑ Section](index.html)

## Approximate in stages[#](#approximate-in-stages "Link to this heading")

A hierarchical posterior \(p(\theta, \phi \mid y)\) is hard as a whole and easy in pieces. Factor it,

\[p(\theta, \phi \mid y) = \underbrace{p(\phi \mid y)}\_{\text{marginal, hard}}
\; \underbrace{p(\theta \mid \phi, y)}\_{\text{conditional, often easy}} ,\]

and treat the two factors differently. The ****conditional**** is frequently a standard distribution — the
Gibbs conditionals of Stage 9 are exactly these. The ****marginal**** for the hyperparameters is
low-dimensional, so it can be approximated well, or evaluated on a grid.

## The recipe[#](#the-recipe "Link to this heading")

Approximate \(p(\phi \mid y)\) — by a normal at its mode, or on a grid — then draw:

1. draw \(\phi^{(s)}\) from the approximate marginal;
2. draw \(\theta^{(s)} \sim p(\theta \mid \phi^{(s)}, y)\), ****exactly****, from the conditional.

The result is approximate joint draws, and crucially they ****propagate uncertainty in**** \(\phi\), in
contrast to empirical Bayes, which fixes \(\hat{\phi}\) and understates every interval. This is
precisely what the conjugate hierarchical model of Stage 5 did with its two-dimensional grid.

```
import numpy as np
from scipy import stats
# 1. approximate the low-dimensional marginal p(phi | y) on a grid
logm = np.array([log_marginal(p, y) for p in grid])       # theta integrated out
w = np.exp(logm - logm.max()); w /= w.sum()
phi = np.random.choice(grid, size=4000, p=w)              # draws from the marginal
# 2. exact conditional draws given each phi
theta = stats.norm(cond_mean(phi, y), cond_sd(phi, y)).rvs()

```

## The marginal is where the work is[#](#the-marginal-is-where-the-work-is "Link to this heading")

Computing \(p(\phi \mid y) = \int p(\theta, \phi \mid y) \, d\theta\) requires integrating the group
parameters out. Conjugacy does it in closed form; otherwise a ****Laplace approximation of the inner
integral****, evaluated at each \(\phi\), is the standard device. That nested-Laplace idea, applied to
latent Gaussian models, is the engine of ****INLA**** — accurate, and far faster than MCMC for the model
class it covers.

## Why it still matters[#](#why-it-still-matters "Link to this heading")

Two reasons, both practical. The factorisation tells you ****where the difficulty lives****: almost always in
the hyperparameters, whose posterior is the funnel-shaped, weakly identified part. And it explains the
family relationship among methods — EM maximises the marginal, empirical Bayes plugs in its maximiser,
this approach ****integrates**** over it, and full MCMC samples the joint. They differ only in how honestly
they treat \(p(\phi \mid y)\).

> **Hint**
> ****Related lessons:**** [Averaging Over Nuisance Parameters](020-averaging-over-nuisance-parameters.html) · [Finding marginal posterior modes using EM](084-finding-marginal-posterior-modes-using-em.html) · [Example: hierarchical normal model (continued)](086-example-hierarchical-normal-model-continued.html) · [Other approximations](089-other-approximations.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/22/conditional-and-marginal-posterior-approximations/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)