# Variational inference[#](#variational-inference "Link to this heading")

****Part 3 · Stage 10 · 🎛️ Modal & Variational Approximation**** · Lesson 087 of 144 · **intermediate**

[◀ Previous · Example: hierarchical normal model (continued)](086-example-hierarchical-normal-model-continued.html) · [Next · Expectation propagation ▶](088-expectation-propagation.html) · [↑ Section](index.html)

## Turn inference into optimisation[#](#turn-inference-into-optimisation "Link to this heading")

MCMC samples the posterior; ****variational inference**** **approximates** it, by choosing the member of a
tractable family \(\mathcal{Q}\) that is closest to it. Inference becomes optimisation, which scales
to models and datasets where sampling is hopeless.

## The ELBO[#](#the-elbo "Link to this heading")

Closeness is measured by Kullback–Leibler divergence, and the decomposition is exact:

\[\log p(y) = \underbrace{\mathrm{E}\_{q}\bigl[\log p(\theta, y)\bigr] - \mathrm{E}\_{q}\bigl[\log q(\theta)\bigr]}\_{\text{ELBO}(q)}
\;+\; \mathrm{KL}\bigl(q(\theta) \,\|\, p(\theta \mid y)\bigr) .\]

Since \(\log p(y)\) is fixed and the KL term is non-negative, ****maximising the ELBO minimises the
divergence**** — and the intractable evidence never has to be computed. The ELBO’s two pieces read
naturally: fit the joint density well, but keep the approximation’s entropy high.

## Families, and the mean-field default[#](#families-and-the-mean-field-default "Link to this heading")

The commonest choice factorises the posterior across parameters — the ****mean-field**** family,
\(q(\theta) = \prod\_k q\_k(\theta\_k)\) — usually with Gaussian factors on an unconstrained scale.
****ADVI**** automates the whole thing: transform constrained parameters, fit a Gaussian, optimise the ELBO
by stochastic gradients using automatic differentiation.

```
import pymc as pm
with model:
    approx = pm.fit(n=30_000, method="advi")     # optimise the ELBO
    idata = approx.sample(2000)                  # draws from q, not from the posterior

```

## The direction of the KL[#](#the-direction-of-the-kl "Link to this heading")

Everything that goes wrong follows from ****which**** KL is minimised. \(\mathrm{KL}(q \| p)\) is
****mode-seeking****: it heavily penalises putting \(q\) mass where \(p\) has none, and barely
penalises the reverse. So \(q\) prefers to cover one mode and ****underestimate variance**** and tails.
A mean-field family compounds this: forcing independence across correlated parameters shrinks the
approximation’s spread further.

The consequences are systematic, not random. VI point estimates are often excellent; VI ****uncertainties
are usually too narrow****; and multimodal posteriors are typically represented by one mode. In a
hierarchical model, VI will underestimate \(\tau\)’s uncertainty exactly where it matters.

## Check it, always[#](#check-it-always "Link to this heading")

Unlike MCMC, VI has no \(\hat{R}\) — the optimiser converging says nothing about whether
\(\mathcal{Q}\) ****contains**** anything close to the posterior. Diagnostics exist and should be used:
****PSIS**** importance-reweighting of the VI draws (whose \(\hat{k}\) flags a bad approximation), and
****simulation-based calibration****. Use VI for exploration, for very large models, and as an initialiser —
and never report a VI interval without checking it.

> **Hint**
> ****Related lessons:**** [Distributional approximations](063-distributional-approximations.html) · [Expectation propagation](088-expectation-propagation.html) · [Normal and related mixture approximations](083-normal-and-related-mixture-approximations.html) · [Importance sampling](065-importance-sampling.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/22/variational-inference/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)