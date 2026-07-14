# Direct simulation and rejection sampling[#](#direct-simulation-and-rejection-sampling "Link to this heading")

****Part 3 · Stage 8 · 🧰 Simulation Basics**** · Lesson 064 of 144 · **intermediate**

[◀ Previous · Distributional approximations](063-distributional-approximations.html) · [Next · Importance sampling ▶](065-importance-sampling.html) · [↑ Section](index.html)

## When you can draw directly[#](#when-you-can-draw-directly "Link to this heading")

Some posteriors can be sampled ****exactly****, with no iteration. Conjugate models are the obvious case —
`stats.beta(a + y, b + n - y).rvs()` is an exact posterior draw. So are models that ****factor****: the
normal model with unknown variance draws \(\sigma^2\) from its marginal, then \(\mu\) from its
conditional, giving exact joint draws. Direct simulation is the gold standard: independent draws, no
convergence to diagnose.

## Rejection sampling[#](#rejection-sampling "Link to this heading")

When direct draws are unavailable but the ****unnormalised**** density \(q(\theta) \propto p(\theta
\mid y)\) can be evaluated, rejection sampling manufactures exact draws from a proposal
\(g(\theta)\) you **can** sample. The requirement is an ****envelope****: a constant \(M\) with
\(q(\theta) \le M \, g(\theta)\) everywhere.

The algorithm is three lines. Draw \(\theta^{\*} \sim g\); draw \(u \sim \mathrm{Uniform}(0,1)\);
****accept**** \(\theta^{\*}\) if

\[u \;\le\; \frac{q(\theta^{\*})}{M \, g(\theta^{\*})} .\]

Accepted draws are ****exact**** samples from the target — no approximation, no burn-in. The acceptance
probability is \(1/M\) (for normalised \(q\)), so \(M\) measures the waste.

```
import numpy as np
from scipy import stats

g = stats.t(df=4, loc=mode, scale=scale)             # heavy-tailed proposal, must cover target
M = np.exp((log_q(grid) - g.logpdf(grid)).max())     # envelope constant, found numerically
out = []
while len(out) < 1000:
    th = g.rvs()
    if np.random.rand() <= np.exp(log_q(th) - np.log(M) - g.logpdf(th)):
        out.append(th)
accept_rate = 1000 / n_proposed                       # ≈ 1/M

```

## Two failure modes[#](#two-failure-modes "Link to this heading")

If the envelope condition is ****violated**** anywhere — a proposal with lighter tails than the target — the
draws are silently ****wrong****, not merely inefficient. Hence the standing advice to use a heavy-tailed
proposal (a \(t\), not a normal), and to find \(M\) by maximising the log-ratio rather than
guessing.

And even a valid envelope becomes useless in high dimensions: the acceptance rate falls ****exponentially****
with \(d\), because a proposal that is a decent match in each coordinate is a poor match in all of
them at once. Rejection sampling survives as a component — for univariate draws, for truncated
distributions (reject anything outside the support) — but not as a general engine. That role belongs to
****MCMC****, which abandons independent draws in exchange for scaling.

> **Hint**
> ****Related lessons:**** [Numerical integration](062-numerical-integration.html) · [Importance sampling](065-importance-sampling.html) · [Distributional approximations](063-distributional-approximations.html) · [Gibbs sampler](069-gibbs-sampler.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/11/direct-simulation-and-rejection-sampling/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)