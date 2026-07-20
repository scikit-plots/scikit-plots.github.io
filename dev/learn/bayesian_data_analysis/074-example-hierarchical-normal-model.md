# Example: hierarchical normal model[#](#example-hierarchical-normal-model "Link to this heading")

****Part 3 · Stage 9 · ⛓️ MCMC: Gibbs, Metropolis & HMC**** · Lesson 074 of 144 · **intermediate**

[◀ Previous · Eﬀective number of simulation draws](073-effective-number-of-simulation-draws.html) · [Next · Eﬃcient Gibbs samplers ▶](075-efficient-gibbs-samplers.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Gibbs, worked through[#](#gibbs-worked-through "Link to this heading")

The hierarchical normal model of Stage 5 has closed-form conditionals at every level, which makes it the
canonical Gibbs example — and a useful place to watch a sampler misbehave. Take \(J\) groups,
\(n\_j\) observations each:

\[y\_{ij} \sim \mathrm{N}(\theta\_j, \sigma^2), \qquad
\theta\_j \sim \mathrm{N}(\mu, \tau^2), \qquad
p(\mu, \log \sigma, \log \tau) \propto 1 .\]

The unknowns are the group means \(\theta\), the population mean \(\mu\), and the two variances.

## The four conditionals[#](#the-four-conditionals "Link to this heading")

Each is a Stage 2 or Stage 3 result, reused:

\[\theta\_j \mid \cdot \sim \mathrm{N}\!\left(
\frac{\frac{n\_j}{\sigma^2}\bar{y}\_{\cdot j} + \frac{1}{\tau^2}\mu}
{\frac{n\_j}{\sigma^2} + \frac{1}{\tau^2}}, \;
\left(\frac{n\_j}{\sigma^2} + \frac{1}{\tau^2}\right)^{-1}\right),
\qquad
\mu \mid \cdot \sim \mathrm{N}\!\left(\bar{\theta}, \; \frac{\tau^2}{J}\right),\]

with \(\sigma^2\) and \(\tau^2\) drawn from scaled inverse-\(\chi^2\) distributions built
from the within- and between-group sums of squares. Cycle through them and the chain converges to the
joint posterior — no tuning, no rejections.

```
import numpy as np
from scipy import stats
for t in range(n_iter):
    V = 1.0 / (n_j / sigma**2 + 1.0 / tau**2)                  # theta | mu, sigma, tau, y
    m = V * (n_j * ybar_j / sigma**2 + mu / tau**2)
    theta = stats.norm(m, np.sqrt(V)).rvs()
    mu = stats.norm(theta.mean(), tau / np.sqrt(J)).rvs()      # mu | theta, tau
    ss_w = ((y - theta[group]) ** 2).sum()                     # sigma^2 | theta, y
    sigma = np.sqrt(ss_w / stats.chi2(n).rvs())
    ss_b = ((theta - mu) ** 2).sum()                           # tau^2 | theta, mu
    tau = np.sqrt(ss_b / stats.chi2(J - 1).rvs())

```

## Watch it stick[#](#watch-it-stick "Link to this heading")

Now look at what the chain does when \(\tau\) wanders near ****zero****. The conditional for
\(\theta\_j\) collapses onto \(\mu\); the conditional for \(\tau^2\) is then built from
\(\theta\_j\) that are all nearly equal, so it stays small. The two conditionals ****trap each other****,
and the sampler crawls through the neck of the funnel from eight schools. Gibbs does not diverge or warn
— it simply mixes so slowly that the low-\(\tau\) region is under-visited, and \(\hat{R}\) may
look fine on a short run.

## The lesson[#](#the-lesson "Link to this heading")

Closed-form conditionals guarantee ****correctness in the limit****, not ****efficiency in practice****. The
diagnosis is posterior ****correlation between levels****, and the two cures are the subject of the next
lesson: reparameterise so the levels decouple, or update them jointly.

> **Hint**
> ****Related lessons:**** [Gibbs sampler](069-gibbs-sampler.html) · [Eﬃcient Gibbs samplers](075-efficient-gibbs-samplers.html) · [Normal model with exchangeable parameters](036-normal-model-with-exchangeable-parameters.html) · [Example: hierarchical normal model (continued)](086-example-hierarchical-normal-model-continued.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/12/example-hierarchical-normal-model/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: intermediate](../../_tags/level-intermediate.html)