# Importance sampling[#](#importance-sampling "Link to this heading")

****Part 3 · Stage 8 · 🧰 Simulation Basics**** · Lesson 065 of 144 · **intermediate**

[◀ Previous · Direct simulation and rejection sampling](064-direct-simulation-and-rejection-sampling.html) · [Next · How many simulation draws are needed? ▶](066-how-many-simulation-draws-are-needed.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Draw from the wrong distribution, then correct[#](#draw-from-the-wrong-distribution-then-correct "Link to this heading")

Rejection sampling throws draws away. ****Importance sampling**** keeps them all and ****reweights**** instead.
Sample from a convenient proposal \(g\), and correct for having used the wrong distribution by
weighting each draw by how much the target wants it relative to the proposal.

## The identity[#](#the-identity "Link to this heading")

For any \(g\) whose support covers the target,

\[\mathrm{E}\_{p}[h(\theta)] = \int h(\theta) \, \frac{p(\theta \mid y)}{g(\theta)} \, g(\theta) \,
d\theta \;\approx\; \frac{\sum\_{s=1}^{S} w\_s \, h(\theta^{(s)})}{\sum\_{s=1}^{S} w\_s},
\qquad w\_s = \frac{q(\theta^{(s)})}{g(\theta^{(s)})},\]

with \(\theta^{(s)} \sim g\) and \(q \propto p(\theta \mid y)\) the unnormalised posterior.
Dividing by \(\sum\_s w\_s\) gives the ****self-normalised**** estimator — which is why the normalising
constant of the posterior is never needed.

## The weights are the whole story[#](#the-weights-are-the-whole-story "Link to this heading")

Everything hinges on the ****variance of the weights****. If a few draws carry nearly all the weight, the
estimate is effectively based on a handful of points. The standard summary is the ****effective sample
size****:

\[S\_{\text{eff}} = \frac{\bigl(\sum\_{s} w\_s\bigr)^2}{\sum\_{s} w\_s^2} .\]

Equal weights give \(S\_{\text{eff}} = S\); one dominant weight gives \(S\_{\text{eff}} \approx 1\).
Worse, when \(g\) has ****lighter tails**** than the target, the weights can have ****infinite variance****
and the estimator has no central limit theorem at all — it will look stable, then jump.

## Pareto smoothing[#](#pareto-smoothing "Link to this heading")

The modern repair, from Stage 6’s LOO lesson, is ****PSIS****: fit a generalised Pareto distribution to the
largest weights and replace them with the expected order statistics of that fit. This stabilises the
estimate and — the real prize — the fitted shape \(\hat{k}\) ****diagnoses**** the problem. Weights have
finite variance when \(\hat{k} < 1/2\); values above \(0.7\) warn that the proposal is a poor
match.

```
import numpy as np
logw = log_q(draws) - g.logpdf(draws)                 # always work in logs
logw -= logw.max()                                    # stabilise before exponentiating
w = np.exp(logw)
ess = w.sum() ** 2 / (w ** 2).sum()                   # effective sample size
est = (w * h(draws)).sum() / w.sum()                  # self-normalised estimate

```

## Where it is used[#](#where-it-is-used "Link to this heading")

Importance sampling rarely fits a posterior from scratch — like rejection, it degrades exponentially
with dimension. Its value is as a ****correction****: reweighting a variational or Laplace approximation
toward the true posterior; computing ****leave-one-out**** predictions from a single MCMC fit (PSIS-LOO);
diagnosing prior sensitivity by reweighting to a perturbed prior; and inside particle filters. Use it to
adjust a nearly-right answer, not to find one.

> **Hint**
> ****Related lessons:**** [Direct simulation and rejection sampling](064-direct-simulation-and-rejection-sampling.html) · [Distributional approximations](063-distributional-approximations.html) · [Model comparison based on predictive performance](046-model-comparison-based-on-predictive-performance.html) · [How many simulation draws are needed?](066-how-many-simulation-draws-are-needed.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/11/importance-sampling/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)