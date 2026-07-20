# Dirichlet process mixtures[#](#dirichlet-process-mixtures "Link to this heading")

****Part 5 · Stage 16 · ♾️ Mixtures & Nonparametric Bayes**** · Lesson 141 of 144 · **advanced**

[◀ Previous · Dirichlet process prior distributions](140-dirichlet-process-prior-distributions.html) · [Next · Beyond density estimation ▶](142-beyond-density-estimation.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Putting a likelihood on the process[#](#putting-a-likelihood-on-the-process "Link to this heading")

A Dirichlet process draw is a ****discrete**** distribution — a countable set of atoms — so it cannot model
continuous data directly. The ****Dirichlet process mixture**** (DPM) fixes this by using the DP not for the
data but for the ****parameters****: each atom \(\theta\_k\) is the parameter of a smooth kernel, and the
data are drawn from the resulting infinite mixture. This is **the** workhorse of Bayesian nonparametrics.

## The model[#](#the-model "Link to this heading")

Draw a random distribution from the DP; draw each observation’s parameter from it; draw the observation
from a kernel at that parameter:

\[G \sim \mathrm{DP}(\alpha, H), \qquad
\theta\_i \sim G, \qquad
y\_i \sim f(y \mid \theta\_i).\]

Because \(G\) is discrete, the \(\theta\_i\) ****repeat**** — several observations share the same
drawn value — and points sharing a \(\theta\_i\) form a ****cluster****. With a normal kernel this is an
infinite mixture of Gaussians whose number of occupied components is learned, dissolving the
\(K\)-selection problem entirely.

## The Chinese restaurant process[#](#the-chinese-restaurant-process "Link to this heading")

Integrating \(G\) out gives the ****Chinese restaurant process****, the DPM’s computational heart and its
clearest intuition. Customers (observations) enter a restaurant and choose tables (clusters): a new
customer joins an existing table with probability proportional to how many already sit there, and starts
a ****new**** table with probability proportional to \(\alpha\):

\[\Pr(\text{join table } k) \propto n\_k, \qquad
\Pr(\text{new table}) \propto \alpha .\]

This “rich get richer” rule produces a few large clusters and a tail of small ones, and — crucially —
lets the number of clusters ****grow with the data****. It is the basis of the collapsed Gibbs samplers
(Neal’s algorithms) that fit DPMs by reseating one customer at a time.

```
import pymc as pm
K = 20                                                   # truncation level (generous)
with pm.Model():
    alpha = pm.Gamma("alpha", 1, 1)                      # concentration, inferred
    beta = pm.Beta("beta", 1, alpha, shape=K)            # stick-breaking fractions
    w = pm.Deterministic("w", beta * pm.math.concatenate(
        [[1.0], pm.math.cumprod(1 - beta)[:-1]]))        # mixture weights
    mu = pm.Normal("mu", 0, 5, shape=K)                  # atom locations ~ H
    pm.NormalMixture("y", w=w, mu=mu, sigma=pm.HalfNormal("s", 1, shape=K), observed=y)

```

## Why it matters[#](#why-it-matters "Link to this heading")

The DPM delivers what the stage promised: ****density estimation and clustering with the number of
components learned, not chosen****. It adapts complexity to the data — more data can reveal more clusters —
and gives a full posterior over partitions, honestly expressing uncertainty about **how many** groups there
are and **which** points belong together. In practice a ****truncated**** stick-breaking (a generous finite
\(K\) with most weights near zero) makes it fit with standard HMC. From here the nonparametric idea
extends outward: to functionals beyond the density, to shared clustering across groups, and to
covariate-dependent distributions — the final three lessons.

> **Hint**
> ****Related lessons:**** [Dirichlet process prior distributions](140-dirichlet-process-prior-distributions.html) · [Beyond density estimation](142-beyond-density-estimation.html) · [Setting up and interpreting mixture models](134-setting-up-and-interpreting-mixture-models.html) · [Density regression](144-density-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/13/dirichlet-process-mixtures/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)