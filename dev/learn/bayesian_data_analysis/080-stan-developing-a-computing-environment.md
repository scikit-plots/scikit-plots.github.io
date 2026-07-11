# Stan: developing a computing environment[#](#stan-developing-a-computing-environment "Link to this heading")

****Part 3 · Stage 9 · ⛓️ MCMC: Gibbs, Metropolis & HMC**** · Lesson 080 of 144 · **intermediate**

[◀ Previous · Hamiltonian Monte Carlo for a hierarchical model](079-hamiltonian-monte-carlo-for-a-hierarchical-model.html) · [Next · Finding posterior modes ▶](081-finding-posterior-modes.html)

## A language for models[#](#a-language-for-models "Link to this heading")

Stan is a probabilistic programming language: you declare data, parameters and a model, and Stan compiles
that declaration into C++ that computes the log posterior ****and its gradient**** by automatic
differentiation, then samples it with an adaptive HMC variant. The point is separation of concerns — the
statistician states the model; the machine derives the calculus and tunes the sampler.

## The blocks[#](#the-blocks "Link to this heading")

A Stan program is organised so that its structure mirrors the probability model, which is itself a
discipline: what is data, what is unknown, what is derived.

```
data {
  int<lower=0> J;                 // number of schools
  vector[J] y;                    // estimated effects
  vector<lower=0>[J] sigma;       // known standard errors
}
parameters {
  real mu;
  real<lower=0> tau;
  vector[J] eta;                  // non-centred
}
transformed parameters {
  vector[J] theta = mu + tau * eta;
}
model {
  mu ~ normal(0, 5);
  tau ~ cauchy(0, 5);
  eta ~ std_normal();
  y ~ normal(theta, sigma);       // likelihood
}

```

Constraints (`<lower=0>`) are not assertions but ****transformations****: Stan samples an unconstrained
\(\log \tau\) internally and applies the Jacobian, which is why HMC never proposes a negative
variance.

## NUTS[#](#nuts "Link to this heading")

Plain HMC has two free parameters: the step size and the ****number of leapfrog steps****. Too few and the
sampler random-walks; too many and the trajectory curls back on itself, wasting computation. The
****No-U-Turn Sampler**** (Hoffman and Gelman) removes the second: it doubles the trajectory forward and
backward until the path begins to double back on itself, then samples a point from it. Doubling in both
directions is what preserves reversibility. The step size is tuned during warm-up to hit a target
acceptance rate.

```
from cmdstanpy import CmdStanModel
import arviz as az
fit = CmdStanModel(stan_file="eight_schools.stan").sample(data=data, adapt_delta=0.9)
az.summary(az.from_cmdstanpy(fit))         # same diagnostics, whatever the backend

```

## Why it changed practice[#](#why-it-changed-practice "Link to this heading")

Three things. ****Gradients for free****, so HMC became usable by people who do not want to differentiate
hierarchical likelihoods by hand. ****Diagnostics by default**** — R-hat, ESS, divergences and energy
reported without asking, which made unchecked sampling embarrassing rather than normal. And a
****declarative model**** that can be read, reviewed and reparameterised as a statement about the world
rather than as an algorithm. PyMC, NumPyro and BlackJAX offer the same bargain in Python. The remaining
craft is the modelling — which is where Parts IV and V go.

> **See also**
> ****Related lessons:**** [Hamiltonian Monte Carlo](078-hamiltonian-monte-carlo.html) · [Computing environments](067-computing-environments.html) · [Computation and Software](009-computation-and-software.html) · [Debugging Bayesian computing](068-debugging-bayesian-computing.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/11/22/stan-developing-a-computing-environment/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)