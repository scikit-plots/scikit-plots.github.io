# Example: hierarchical normal model (continued)[#](#example-hierarchical-normal-model-continued "Link to this heading")

****Part 3 · Stage 10 · 🎛️ Modal & Variational Approximation**** · Lesson 086 of 144 · **intermediate**

[◀ Previous · Conditional and marginal posterior approximations](085-conditional-and-marginal-posterior-approximations.html) · [Next · Variational inference ▶](087-variational-inference.html) · [↑ Section](index.html)

## The same model, approximated[#](#the-same-model-approximated "Link to this heading")

Return to the hierarchical normal model that Stage 9 sampled with Gibbs, and apply the machinery of this
stage instead. It is a fair test: the answers are known, so every approximation can be scored.

\[y\_{ij} \sim \mathrm{N}(\theta\_j, \sigma^2), \qquad
\theta\_j \sim \mathrm{N}(\mu, \tau^2), \qquad \phi = (\mu, \sigma, \tau).\]

## Why the joint mode fails[#](#why-the-joint-mode-fails "Link to this heading")

Maximise \(p(\theta, \phi \mid y)\) jointly and the optimiser walks straight to the degenerate point:
every \(\theta\_j\) equal to \(\mu\), and \(\tau = 0\). The joint density there is
****unbounded**** — the likelihood of the group parameters concentrates without limit as the population
variance shrinks. The joint mode is not merely a poor summary; it does not exist as a finite maximum.

## Marginal mode, via EM[#](#marginal-mode-via-em "Link to this heading")

Integrate the \(\theta\_j\) out and maximise the marginal \(p(\phi \mid y)\) instead. EM does this
without doing the integral: the E-step supplies conditional means ****and variances**** of the
\(\theta\_j\), and the M-step’s update for \(\tau^2\) includes those variances, so it cannot
collapse to zero. The degeneracy disappears the moment the nuisance parameters are averaged rather than
maximised.

```
import numpy as np
for _ in range(200):
    V = 1 / (n_j / sigma**2 + 1 / tau**2)                  # E-step
    Etheta = V * (n_j * ybar_j / sigma**2 + mu / tau**2)
    mu = Etheta.mean()                                     # M-step
    tau = np.sqrt(np.mean((Etheta - mu) ** 2 + V))         # + V prevents collapse
# then: Laplace around (mu, log sigma, log tau) for approximate uncertainty

```

## Then the conditional[#](#then-the-conditional "Link to this heading")

Having a marginal for \(\phi\) — from EM plus curvature, or from a grid — the previous lesson’s
recipe completes the picture: draw \(\phi\), then draw each \(\theta\_j\) ****exactly**** from its
normal conditional. The group-level answers inherit the hyperparameter uncertainty, which is what
distinguishes this from empirical Bayes.

## What the comparison teaches[#](#what-the-comparison-teaches "Link to this heading")

Against long-run MCMC, the modal approximation is accurate for \(\mu\) and for the \(\theta\_j\)
in data-rich groups, and least accurate for \(\tau\) — the parameter whose posterior is skewed,
bounded below, and often heaped near zero. That is the general pattern: ****approximations fail on the
variance parameters of hierarchies****, which are precisely the parameters that decide how much pooling
occurs. Use modal methods for speed and starting values; check the conclusions that hinge on
\(\tau\) against a sampler.

> **Hint**
> ****Related lessons:**** [Example: hierarchical normal model](074-example-hierarchical-normal-model.html) · [Finding marginal posterior modes using EM](084-finding-marginal-posterior-modes-using-em.html) · [Conditional and marginal posterior approximations](085-conditional-and-marginal-posterior-approximations.html) · [Boundary-avoiding priors for modal summaries](082-boundary-avoiding-priors-for-modal-summaries.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/22/example-hierarchical-normal-model-2/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)