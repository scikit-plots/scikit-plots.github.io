# Computation and Software[#](#computation-and-software "Link to this heading")

****Part 1 · Stage 1 · 🎲 The Bayesian Idea**** · Lesson 009 of 144 · **beginner**

[◀ Previous · Some Useful Results from Probability Theory](008-some-useful-results-from-probability-theory.html) · [Next · Bayesian Inference in Applied Statistics ▶](010-bayesian-inference-in-applied-statistics.html) · [↑ Section](index.html)

## Why computation matters[#](#why-computation-matters "Link to this heading")

Bayes’ rule is one line, but the posterior it defines is usually ****intractable****: the evidence
\(p(y) = \int p(y \mid \theta) p(\theta) d\theta\) has no closed form once the model has more than
a couple of parameters. For most of the twentieth century that was a fatal obstacle. What made
Bayesian analysis practical is ****computation**** — and specifically, the decision to stop trying to
**evaluate** posteriors and instead ****sample**** from them.

## Samples are enough[#](#samples-are-enough "Link to this heading")

The pivotal insight is that a large collection of draws \(\theta^{(1)}, \dots, \theta^{(S)}\) from
\(p(\theta \mid y)\) answers every question you would have asked of the density. Means, intervals,
tail probabilities, and the posterior of ****any function**** of the parameters are all obtained by
summarising draws:

\[\mathrm{E}[h(\theta) \mid y] \;\approx\; \frac{1}{S} \sum\_{s=1}^{S} h\bigl(\theta^{(s)}\bigr),\]

with Monte Carlo error shrinking like \(1/\sqrt{S}\). Simulation also propagates uncertainty for
free — no delta method, no Jacobians (as the previous lesson noted).

## The modern stack[#](#the-modern-stack "Link to this heading")

In Python the workflow is standardised. ****``scipy.stats``**** covers the conjugate and closed-form cases
directly; ****PyMC**** (or ****Stan****) expresses a model declaratively and samples it with ****HMC/NUTS****; and
****ArviZ**** handles the diagnostics and plots that step 3 demands:

```
import pymc as pm, arviz as az

with pm.Model() as m:
    theta = pm.Beta("theta", 1, 1)
    pm.Binomial("y", n=10, p=theta, observed=8)
    idata = pm.sample(2000, tune=1000, chains=4)

az.summary(idata)      # mean, sd, 94% HDI, r_hat, ess
az.plot_trace(idata)   # visual convergence check

```

## Never trust unchecked draws[#](#never-trust-unchecked-draws "Link to this heading")

Sampling is approximate, so the output must be ****audited**** before it is believed: \(\hat{R}\)
close to 1.0 (chains agree), an adequate ****effective sample size****, and ****no divergences****. A sampler
that has not converged produces confident nonsense. This is why the computation stages of this course
(Part III) devote as much attention to ****diagnosing**** samplers as to running them — and why “the folk
theorem” holds that computational trouble usually signals a problem with the ****model****, not just the
algorithm.

> **Hint**
> ****Related lessons:**** [The three steps of Bayesian data analysis](001-the-three-steps-of-bayesian-data-analysis.html) · [Bayesian Inference in Applied Statistics](010-bayesian-inference-in-applied-statistics.html) · [Inference and assessing convergence](072-inference-and-assessing-convergence.html) · [Stan: developing a computing environment](080-stan-developing-a-computing-environment.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/computation-and-software/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)