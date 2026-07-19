# Multinomial Model for Categorical Data[#](#multinomial-model-for-categorical-data "Link to this heading")

****Part 1 · Stage 3 · 🧮 Multiparameter Models**** · Lesson 023 of 144 · **beginner**

[◀ Previous · Normal Data with a Conjugate Prior Distribution](022-normal-data-with-a-conjugate-prior-distribution.html) · [Next · Multivariate Normal Model with Known Variance ▶](024-multivariate-normal-model-with-known-variance.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Beyond two categories[#](#beyond-two-categories "Link to this heading")

Generalise the binomial from two outcomes to \(k\). Each observation falls in exactly one of
\(k\) categories with probabilities \(\theta = (\theta\_1, \dots, \theta\_k)\),
\(\sum\_j \theta\_j = 1\), and the counts \(y = (y\_1, \dots, y\_k)\) follow a ****multinomial****
likelihood:

\[p(y \mid \theta) \;\propto\; \prod\_{j=1}^{k} \theta\_j^{\,y\_j} .\]

Poll responses, survey categories, and the components of the mixture models in Part V all live here.

## The Dirichlet prior[#](#the-dirichlet-prior "Link to this heading")

The conjugate prior on the simplex is the ****Dirichlet****, the Beta’s multivariate sibling:
\(\theta \sim \mathrm{Dirichlet}(\alpha\_1, \dots, \alpha\_k)\), with density proportional to
\(\prod\_j \theta\_j^{\,\alpha\_j - 1}\). Same functional form as the likelihood — so the update is
again pure counting:

\[\theta \mid y \;\sim\; \mathrm{Dirichlet}(\alpha\_1 + y\_1,\; \dots,\; \alpha\_k + y\_k).\]

Each \(\alpha\_j\) is a ****prior count**** in category \(j\), and \(\sum\_j \alpha\_j\) is the
prior sample size. \(\mathrm{Dirichlet}(1, \dots, 1)\) is uniform on the simplex; Jeffreys’ choice
is all \(\alpha\_j = \tfrac12\).

## Contrasts come free[#](#contrasts-come-free "Link to this heading")

The real payoff is that questions about ****differences**** are answered directly from draws — no delta
method, no covariance algebra:

```
import numpy as np
y = np.array([420, 380, 200])            # candidate A, B, undecided
alpha = np.ones(3)                       # uniform prior
draws = np.random.dirichlet(alpha + y, size=20_000)
lead = draws[:, 0] - draws[:, 1]         # posterior of the A - B margin
lead.mean(), (lead > 0).mean()           # P(A leads B | data) ≈ 0.91

```

## Two structural facts[#](#two-structural-facts "Link to this heading")

Marginally, each \(\theta\_j\) is \(\mathrm{Beta}(\alpha\_j,\ \alpha\_0 - \alpha\_j)\) — collapse
the other categories and the binomial reappears. And the components are ****negatively correlated**** by
construction: they must sum to one, so probability given to one category is taken from another. That
constraint is exactly what makes the simplex the natural home for mixture weights in Stage 16.

> **Hint**
> ****Related lessons:**** [Estimating a Probability from Binomial Data](011-estimating-a-probability-from-binomial-data.html) · [Setting up and interpreting mixture models](134-setting-up-and-interpreting-mixture-models.html) · [Dirichlet process prior distributions](140-dirichlet-process-prior-distributions.html) · [Models for multivariate and multinomial responses](111-models-for-multivariate-and-multinomial-responses.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/multinomial-model-for-categorical-data/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)