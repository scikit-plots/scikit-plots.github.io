# Eﬀective number of simulation draws[#](#effective-number-of-simulation-draws "Link to this heading")

****Part 3 · Stage 9 · ⛓️ MCMC: Gibbs, Metropolis & HMC**** · Lesson 073 of 144 · **intermediate**

[◀ Previous · Inference and assessing convergence](072-inference-and-assessing-convergence.html) · [Next · Example: hierarchical normal model ▶](074-example-hierarchical-normal-model.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Correlated draws carry less information[#](#correlated-draws-carry-less-information "Link to this heading")

An MCMC chain’s draws are ****dependent**** by construction: each is a perturbation of the last. A thousand
such draws therefore say less about the posterior than a thousand independent ones. The ****effective
sample size**** measures how much less.

## The definition[#](#the-definition "Link to this heading")

If the chain’s autocorrelation at lag \(t\) is \(\rho\_t\), then

\[S\_{\text{eff}} = \frac{S}{1 + 2 \sum\_{t=1}^{\infty} \rho\_t} .\]

Independent draws (\(\rho\_t = 0\)) give \(S\_{\text{eff}} = S\). Positively autocorrelated draws
— the usual case for random-walk Metropolis and Gibbs — give \(S\_{\text{eff}} \ll S\). The estimate
truncates the sum once the estimated \(\rho\_t\) becomes noise, and in practice pools information
across chains.

## Better than independent[#](#better-than-independent "Link to this heading")

A pleasing surprise: the sum can be ****negative****. When successive draws are ****anticorrelated****, the
effective sample size ****exceeds**** the number of iterations, \(S\_{\text{eff}} > S\). Hamiltonian
Monte Carlo, and the NUTS sampler in particular, routinely achieves this for parameters whose posterior
is close to Gaussian with little dependence on the others — the chain deliberately overshoots, so
consecutive draws sit on opposite sides of the mode. For such problems MCMC beats independent sampling.

## Bulk and tail[#](#bulk-and-tail "Link to this heading")

One number is not enough. ****bulk-ESS**** governs the precision of the mean and standard deviation;
****tail-ESS**** governs the extreme quantiles, and a chain that mixes briskly through the centre can crawl
in the tails. Report both, and require both above roughly ****400**** before trusting any summary — including
\(\hat{R}\) itself, whose reliability depends on adequate ESS.

```
import arviz as az
az.summary(idata)                    # ess_bulk, ess_tail, mcse_mean, mcse_sd, r_hat
az.ess(idata, method="tail")         # tail-ESS explicitly
az.plot_autocorr(idata, var_names=["tau"])   # where does rho_t decay to zero?

```

## Don’t thin[#](#don-t-thin "Link to this heading")

A persistent habit deserves retiring. ****Thinning**** — keeping every tenth draw — does not improve
inference. Discarding draws throws away information; the effective sample size of the thinned chain is
at best what the full chain already carried, and if the draws are anticorrelated, thinning actively
****destroys**** the advantage. The only legitimate reason to thin is ****memory****. If ESS is too low, the
answer is a better sampler, a reparameterisation, or a longer run — never a smaller one.

> **Hint**
> ****Related lessons:**** [Inference and assessing convergence](072-inference-and-assessing-convergence.html) · [How many simulation draws are needed?](066-how-many-simulation-draws-are-needed.html) · [Eﬃcient Metropolis jumping rules](076-efficient-metropolis-jumping-rules.html) · [Hamiltonian Monte Carlo](078-hamiltonian-monte-carlo.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/12/e%ef%ac%80ective-number-of-simulation-draws/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)