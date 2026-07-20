# Normal and related mixture approximations[#](#normal-and-related-mixture-approximations "Link to this heading")

****Part 3 · Stage 10 · 🎛️ Modal & Variational Approximation**** · Lesson 083 of 144 · **intermediate**

[◀ Previous · Boundary-avoiding priors for modal summaries](082-boundary-avoiding-priors-for-modal-summaries.html) · [Next · Finding marginal posterior modes using EM ▶](084-finding-marginal-posterior-modes-using-em.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## One normal is rarely enough[#](#one-normal-is-rarely-enough "Link to this heading")

The Laplace approximation places a single normal at a single mode. Real posteriors are skewed,
heavy-tailed, or ****multimodal**** — a mixture likelihood has one mode per labelling, a weakly identified
model has ridges. The natural repair is to approximate with a ****mixture**** of normals, one component per
mode.

## Building the mixture[#](#building-the-mixture "Link to this heading")

Run the optimiser from many ****dispersed starting points****, collect the distinct modes
\(\hat{\theta}\_k\) and their curvatures \(\Sigma\_k\), and weight each component by the posterior
mass it accounts for — the Laplace estimate of the local integral:

\[p(\theta \mid y) \;\approx\; \sum\_{k} \omega\_k \,
\mathrm{N}\bigl(\theta \mid \hat{\theta}\_k, \Sigma\_k\bigr),
\qquad
\omega\_k \;\propto\; p(\hat{\theta}\_k \mid y) \; |\Sigma\_k|^{1/2} .\]

The determinant factor is doing real work: a ****broad, shallow**** mode can hold more probability than a
****narrow, tall**** one, so mixture weights must account for width, not just height.

## Use heavier tails[#](#use-heavier-tails "Link to this heading")

If the approximation will serve as a ****proposal**** or an ****importance-sampling**** density, replace each
normal by a multivariate \(t\) with a few degrees of freedom. Light tails are the failure mode that
matters: a proposal thinner than the target produces weights with infinite variance, and the estimate
degrades without warning (Stage 8).

```
import numpy as np
from scipy import optimize, stats

modes = [optimize.minimize(neg_log_post, x0, method="BFGS") for x0 in dispersed_starts]
modes = dedupe(modes)                                    # distinct optima only
logw = [-m.fun + 0.5 * np.log(np.linalg.det(m.hess_inv)) for m in modes]
w = np.exp(logw - max(logw)); w /= w.sum()               # mixture weights
comps = [stats.multivariate_t(m.x, m.hess_inv, df=4) for m in modes]   # heavy tails

```

## Honest limits[#](#honest-limits "Link to this heading")

Two. Modes found are modes ****searched for****: an optimiser started nowhere near a component will never
report it, and in high dimensions dispersed starts cover the space poorly. And the approximation’s
quality has no internal diagnostic — importance weights (with their \(\hat{k}\)) give one from
outside.

Still, the construction is the conceptual bridge to what follows. Fitting the ****best member of a chosen
family**** to a posterior, by optimising a divergence rather than by curvature at a mode, is precisely
****variational inference**** — and it is the workhorse for models too large to sample.

> **Hint**
> ****Related lessons:**** [Distributional approximations](063-distributional-approximations.html) · [Finding posterior modes](081-finding-posterior-modes.html) · [Variational inference](087-variational-inference.html) · [Importance sampling](065-importance-sampling.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/22/normal-and-related-mixture-approximations/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)