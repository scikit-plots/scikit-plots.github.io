# Computing environments[#](#computing-environments "Link to this heading")

****Part 3 · Stage 8 · 🧰 Simulation Basics**** · Lesson 067 of 144 · **intermediate**

[◀ Previous · How many simulation draws are needed?](066-how-many-simulation-draws-are-needed.html) · [Next · Debugging Bayesian computing ▶](068-debugging-bayesian-computing.html) · [↑ Section](index.html)

## The tools, and what they hide[#](#the-tools-and-what-they-hide "Link to this heading")

Bayesian computation is now something you ****declare**** rather than implement. You write the model —
priors, likelihood — and a ****probabilistic programming language**** derives the log posterior, differentiates
it, and runs an adaptive sampler. Understanding what the layers do is what lets you diagnose them when
they fail.

## The Python stack[#](#the-python-stack "Link to this heading")

* ****``scipy.stats``**** — closed-form distributions, conjugate updates, direct simulation. Reach here
  first; the Beta–Binomial needs no sampler.
* ****PyMC**** — model declaration in Python, gradients via PyTensor, sampling with ****NUTS****. Idiomatic and
  interactive.
* ****Stan**** (via `cmdstanpy`) — a dedicated modelling language, the reference implementation of NUTS,
  and the fastest path for large hierarchical models.
* ****NumPyro / BlackJAX**** — JAX-based, for GPU acceleration and very large models.
* ****ArviZ**** — the common currency: an `InferenceData` object holding draws, diagnostics and predictive
  samples, whatever produced them.

```
import pymc as pm, arviz as az
with pm.Model() as m:
    theta = pm.Beta("theta", 1, 1)
    pm.Binomial("y", n=10, p=theta, observed=8)
    idata = pm.sample(2000, tune=1000, chains=4, random_seed=0)
az.summary(idata)          # r_hat, ess_bulk, ess_tail, mcse — read these first

```

## What automatic differentiation buys[#](#what-automatic-differentiation-buys "Link to this heading")

The gradient of the log posterior is what makes ****Hamiltonian Monte Carlo**** possible, and computing it
by hand for a hierarchical model is error-prone drudgery. Autodiff makes it exact and free, which is why
the modern default sampler is gradient-based. The cost is a ****constraint****: parameters must be
continuous, so discrete unknowns are marginalised out rather than sampled — a change in how models are
written, not merely in how they are fitted.

## Reproducibility[#](#reproducibility "Link to this heading")

Simulation results are not deterministic unless you make them so. Set the ****seed****, record the library
****versions****, save the `InferenceData` rather than re-running, and run ****multiple chains**** from
dispersed starting points — the last of which is not a courtesy but a prerequisite for the convergence
diagnostics of the next stage. A result you cannot reproduce is a result you cannot debug.

> **Hint**
> ****Related lessons:**** [Computation and Software](009-computation-and-software.html) · [Debugging Bayesian computing](068-debugging-bayesian-computing.html) · [Stan: developing a computing environment](080-stan-developing-a-computing-environment.html) · [Hamiltonian Monte Carlo](078-hamiltonian-monte-carlo.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/11/computing-environments/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)