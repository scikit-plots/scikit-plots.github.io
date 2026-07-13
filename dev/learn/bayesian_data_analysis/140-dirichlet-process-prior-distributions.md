# Dirichlet process prior distributions[#](#dirichlet-process-prior-distributions "Link to this heading")

****Part 5 · Stage 16 · ♾️ Mixtures & Nonparametric Bayes**** · Lesson 140 of 144 · **advanced**

[◀ Previous · Bayesian histograms](139-bayesian-histograms.html) · [Next · Dirichlet process mixtures ▶](141-dirichlet-process-mixtures.html) · [↑ Section](index.html)

## A prior over distributions[#](#a-prior-over-distributions "Link to this heading")

The finite mixtures of this stage all fixed, or struggled to infer, the number of components. The
****Dirichlet process**** removes the bound entirely: it is a prior over ****probability distributions
themselves****, supporting a **countably infinite** number of components, of which any finite dataset uses a
finite but data-determined number. It is the foundation of Bayesian nonparametric modelling.

## The definition[#](#the-definition "Link to this heading")

A Dirichlet process \(\mathrm{DP}(\alpha, H)\) is specified by two things: a ****base distribution****
\(H\), the “mean” around which the random distribution is centred, and a ****concentration parameter****
\(\alpha > 0\), governing how much a draw deviates from \(H\). A draw \(G \sim
\mathrm{DP}(\alpha, H)\) is itself a (discrete) probability distribution — the DP is a distribution **over
distributions**.

## The stick-breaking construction[#](#the-stick-breaking-construction "Link to this heading")

The DP becomes concrete through ****stick-breaking****, which builds \(G\) explicitly. Start with a unit
stick; repeatedly break off a Beta-distributed fraction; the pieces are the mixture weights, each
attached to a location drawn from \(H\):

\[\beta\_k \sim \mathrm{Beta}(1, \alpha), \quad
\pi\_k = \beta\_k \prod\_{j=1}^{k-1}(1 - \beta\_j), \quad
\theta\_k \sim H, \qquad
G = \sum\_{k=1}^{\infty} \pi\_k \, \delta\_{\theta\_k}.\]

The weights \(\pi\_k\) ****decay**** (each break takes a fraction of what remains), so although there are
infinitely many components, a handful carry most of the mass — the reason a finite dataset engages only
finitely many.

```
import numpy as np
def stick_breaking(alpha, K_trunc):                      # truncated DP weights
    betas = np.random.beta(1, alpha, size=K_trunc)
    remaining = np.concatenate([[1.0], np.cumprod(1 - betas)[:-1]])
    return betas * remaining                             # pi_k, summing to ~1

# small alpha -> few dominant components; large alpha -> many, closer to H

```

## The concentration parameter[#](#the-concentration-parameter "Link to this heading")

\(\alpha\) tunes complexity. ****Small**** \(\alpha\) concentrates the mass on a ****few**** components,
so the data are explained by few clusters; ****large**** \(\alpha\) spreads it over ****many****, approaching
the base distribution \(H\). Because \(\alpha\) controls the expected number of occupied
components, it can be given its own prior and ****inferred**** — the model learns not just the components but
how many to use.

## Why it matters[#](#why-it-matters "Link to this heading")

The DP dissolves the model-selection problem this stage opened with. There is ****no**** \(K\) to choose
or to jump between: the number of components is unbounded a priori and ****determined by the data**** a
posteriori, growing gracefully as more data arrive. What remains is to attach a likelihood to each
component — placing a smooth kernel at each atom \(\theta\_k\) — which is the ****Dirichlet process
mixture**** of the next lesson, the workhorse of nonparametric density estimation and clustering.

> **Hint**
> ****Related lessons:**** [Unspecified number of mixture components](137-unspecified-number-of-mixture-components.html) · [Dirichlet process mixtures](141-dirichlet-process-mixtures.html) · [Bayesian histograms](139-bayesian-histograms.html) · [Bayesian analysis of conjugate hierarchical models](035-bayesian-analysis-of-conjugate-hierarchical-models.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/12/13/dirichlet-process-prior-distributions/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)