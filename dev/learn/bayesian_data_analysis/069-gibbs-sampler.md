# Gibbs sampler[#](#gibbs-sampler "Link to this heading")

****Part 3 · Stage 9 · ⛓️ MCMC: Gibbs, Metropolis & HMC**** · Lesson 069 of 144 · **intermediate**

[◀ Previous · Debugging Bayesian computing](068-debugging-bayesian-computing.html) · [Next · Metropolis and Metropolis-Hastings algorithms ▶](070-metropolis-and-metropolis-hastings-algorithms.html) · [↑ Section](index.html)

## Sampling one coordinate at a time[#](#sampling-one-coordinate-at-a-time "Link to this heading")

Rejection and importance sampling collapse in high dimensions because they try to hit the posterior in
****all**** coordinates at once. ****Markov chain Monte Carlo**** gives up independent draws and instead builds
a chain whose stationary distribution **is** the posterior. The ****Gibbs sampler**** is the simplest such
chain: update each parameter in turn, drawing it from its ****full conditional**** distribution given the
current values of all the others.

## The algorithm[#](#the-algorithm "Link to this heading")

For \(\theta = (\theta\_1, \dots, \theta\_d)\), one sweep at iteration \(t\) is

\[\theta\_1^{(t)} \sim p\bigl(\theta\_1 \mid \theta\_2^{(t-1)}, \dots, \theta\_d^{(t-1)}, y\bigr), \quad
\theta\_2^{(t)} \sim p\bigl(\theta\_2 \mid \theta\_1^{(t)}, \theta\_3^{(t-1)}, \dots, y\bigr), \;\dots\]

Each draw conditions on the ****most recent**** value of every other coordinate. Note there is no accept/reject
step — Gibbs is the special case of Metropolis–Hastings whose proposal **is** the full conditional, for
which the acceptance probability is identically ****one****. A \(d\)-dimensional problem becomes
\(d\) one-dimensional ones.

## Where the conditionals come from[#](#where-the-conditionals-come-from "Link to this heading")

Conjugacy, which is why Part I’s algebra returns here as ****infrastructure****. In the normal hierarchical
model each conditional is a standard distribution:

```
import numpy as np
from scipy import stats
# y_j ~ N(theta_j, sigma_j^2);  theta_j ~ N(mu, tau^2)
for t in range(n_iter):
    V = 1 / (1 / sigma**2 + 1 / tau**2)                    # theta_j | mu, tau, y
    m = V * (ybar / sigma**2 + mu / tau**2)
    theta = stats.norm(m, np.sqrt(V)).rvs()
    mu = stats.norm(theta.mean(), tau / np.sqrt(J)).rvs()  # mu | theta, tau
    ss = ((theta - mu) ** 2).sum()                         # tau^2 | theta, mu
    tau = np.sqrt(ss / stats.chi2(J - 1).rvs())

```

## Strengths and the failure mode[#](#strengths-and-the-failure-mode "Link to this heading")

Gibbs is ****tuning-free**** and every draw is accepted, which made it the engine of BUGS and JAGS. But it
moves only ****along the coordinate axes****, so when parameters are strongly ****correlated**** in the
posterior, each step is tiny relative to the diagonal ridge the chain must traverse. Successive draws
become nearly identical, mixing crawls, and the effective sample size collapses.

Two remedies define the rest of this stage: ****reparameterise**** so the coordinates are less correlated,
or ****block**** highly dependent parameters and update them jointly. And where a conditional has no
closed form, a Metropolis step can be substituted for that coordinate — the hybrid that the next two
lessons build.

> **Hint**
> ****Related lessons:**** [Metropolis and Metropolis-Hastings algorithms](070-metropolis-and-metropolis-hastings-algorithms.html) · [Using Gibbs and Metropolis as building blocks](071-using-gibbs-and-metropolis-as-building-blocks.html) · [Example: hierarchical normal model](074-example-hierarchical-normal-model.html) · [Direct simulation and rejection sampling](064-direct-simulation-and-rejection-sampling.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/12/gibbs-sampler/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)