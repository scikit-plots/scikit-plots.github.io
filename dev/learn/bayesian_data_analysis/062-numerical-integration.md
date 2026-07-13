# Numerical integration[#](#numerical-integration "Link to this heading")

****Part 3 · Stage 8 · 🧰 Simulation Basics**** · Lesson 062 of 144 · **intermediate**

[◀ Previous · Personal vs. institutional decision analysis](061-personal-vs-institutional-decision-analysis.html) · [Next · Distributional approximations ▶](063-distributional-approximations.html) · [↑ Section](index.html)

## Every Bayesian answer is an integral[#](#every-bayesian-answer-is-an-integral "Link to this heading")

Posterior expectations, marginal distributions, predictive densities, the evidence: all are integrals
of the form \(\int h(\theta) \, p(\theta \mid y) \, d\theta\). Part I evaded them with conjugacy;
the bioassay showed how quickly that fails. Part III is about computing them when no formula exists.

## Deterministic quadrature[#](#deterministic-quadrature "Link to this heading")

The classical approach evaluates the integrand on a ****grid**** and sums with weights:

\[\int h(\theta) \, p(\theta \mid y) \, d\theta \;\approx\;
\sum\_{k=1}^{K} w\_k \, h(\theta\_k) \, p(\theta\_k \mid y) .\]

Simple rules (trapezoid, Simpson) use equally spaced points; ****Gaussian quadrature**** places them
cleverly and achieves high accuracy with few evaluations. In ****one or two dimensions**** this is superb —
it is exactly what the bioassay grid did, and what the conjugate hierarchical model did for
\((\alpha, \beta)\).

```
import numpy as np
from scipy import integrate
grid = np.linspace(-5, 10, 400)
dens = np.exp(log_posterior(grid) - log_posterior(grid).max())
dens /= integrate.trapezoid(dens, grid)              # normalise
integrate.trapezoid(grid * dens, grid)               # E[theta | y]

```

## The wall[#](#the-wall "Link to this heading")

Quadrature dies of ****dimensionality****. A grid of \(K\) points per dimension costs \(K^d\)
evaluations: 100 points in 10 dimensions is \(10^{20}\) — impossible. Worse, in high dimensions
almost all of that grid lies where the posterior has ****no mass****. The posterior of a modern model
concentrates in a thin, curved shell whose position you do not know in advance; enumerating the space is
hopeless.

## Monte Carlo turns the problem around[#](#monte-carlo-turns-the-problem-around "Link to this heading")

Instead of choosing points and weighting by density, ****draw points from the density**** and weight
equally:

\[\int h(\theta) \, p(\theta \mid y) \, d\theta \;\approx\;
\frac{1}{S} \sum\_{s=1}^{S} h\bigl(\theta^{(s)}\bigr), \qquad
\theta^{(s)} \sim p(\theta \mid y).\]

The error shrinks like \(1/\sqrt{S}\) — ****regardless of dimension****. That independence from
\(d\) is the single fact on which all of modern Bayesian computation rests. The catch, of course, is
the premise: how do you draw from a distribution you can only evaluate up to a constant? The remaining
lessons of Part III are answers to that question.

> **Hint**
> ****Related lessons:**** [Distributional approximations](063-distributional-approximations.html) · [Direct simulation and rejection sampling](064-direct-simulation-and-rejection-sampling.html) · [Example: Bayesian analysis of a bioassay experiment (logistic, nonconjugate)](026-example-bayesian-analysis-of-a-bioassay-experiment-logistic-nonconjugate.html) · [How many simulation draws are needed?](066-how-many-simulation-draws-are-needed.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/11/numerical-integration/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)