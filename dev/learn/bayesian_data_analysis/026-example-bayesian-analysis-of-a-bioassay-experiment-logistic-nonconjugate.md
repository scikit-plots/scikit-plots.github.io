# Example: Bayesian analysis of a bioassay experiment (logistic, nonconjugate)[#](#example-bayesian-analysis-of-a-bioassay-experiment-logistic-nonconjugate "Link to this heading")

****Part 1 · Stage 3 · 🧮 Multiparameter Models**** · Lesson 026 of 144 · **beginner**

[◀ Previous · Multivariate Normal with Unknown Mean and Variance](025-multivariate-normal-with-unknown-mean-and-variance.html) · [Next · Summary of Elementary Modeling and Computation ▶](027-summary-of-elementary-modeling-and-computation.html) · [↑ Section](index.html)

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## Where the closed forms end[#](#where-the-closed-forms-end "Link to this heading")

Every posterior so far has had a formula. This one does not, and that is the point. In a ****bioassay****,
groups of animals receive increasing ****doses**** \(x\_i\) of a compound and the number of ****deaths****
\(y\_i\) out of \(n\_i\) is recorded. A typical experiment is tiny — four dose groups, five
animals each.

## The logistic dose–response model[#](#the-logistic-doseresponse-model "Link to this heading")

Deaths are binomial with a dose-dependent probability, modelled on the ****log-odds**** scale:

\[y\_i \sim \mathrm{Binomial}(n\_i,\, \theta\_i), \qquad
\mathrm{logit}(\theta\_i) = \log\frac{\theta\_i}{1 - \theta\_i} = \alpha + \beta x\_i .\]

Here \(\beta\) is the ****dose effect**** — the scientific question is usually whether
\(\beta > 0\). A Beta prior cannot help: the parameters \((\alpha, \beta)\) enter through a
nonlinear link, so ****no conjugate prior exists**** and the posterior

\[p(\alpha, \beta \mid y) \;\propto\; p(\alpha, \beta)
\prod\_{i} \bigl[\mathrm{logit}^{-1}(\alpha + \beta x\_i)\bigr]^{y\_i}
\bigl[1 - \mathrm{logit}^{-1}(\alpha + \beta x\_i)\bigr]^{n\_i - y\_i}\]

has no closed form. This is the normal situation in applied work; Stage 2’s tidy algebra was the
exception.

## Compute it on a grid[#](#compute-it-on-a-grid "Link to this heading")

With only ****two**** parameters, you can simply ****evaluate**** the unnormalised posterior over a grid,
normalise by summing, and sample from the discrete approximation. It is brute force, and it is exact
enough to be a benchmark for the samplers of Part III.

```
import numpy as np
from scipy.special import expit

x = np.array([-0.86, -0.30, -0.05, 0.73])       # log dose
n = np.array([5, 5, 5, 5]); y = np.array([0, 1, 3, 5])

a, b = np.meshgrid(np.linspace(-5, 10, 400), np.linspace(-10, 40, 400))
th = expit(a[..., None] + b[..., None] * x)     # broadcast over dose groups
logpost = (y * np.log(th) + (n - y) * np.log1p(-th)).sum(-1)   # flat prior
post = np.exp(logpost - logpost.max()); post /= post.sum()
(post.sum(axis=0) @ np.linspace(-5, 10, 400))   # E[alpha | y], etc.

```

## Reading the answer[#](#reading-the-answer "Link to this heading")

The posterior for \((\alpha, \beta)\) is ****skewed and correlated**** — no normal approximation would
capture its banana shape well — and \(\Pr(\beta > 0 \mid y)\) is essentially 1: the dose kills.
Because any function of draws is itself a posterior draw, the ****LD50**** (the dose at which
\(\theta = 0.5\), namely \(-\alpha / \beta\)) comes free, with a wide and asymmetric interval
that a plug-in estimate would badly misrepresent. Grids work in two dimensions; beyond three or four
they die of dimensionality — which is precisely why Part III exists.

> **Hint**
> ****Related lessons:**** [Standard generalized linear model likelihoods](106-standard-generalized-linear-model-likelihoods.html) · [Numerical integration](062-numerical-integration.html) · [Normal Approximations to the Posterior Distribution](028-normal-approximations-to-the-posterior-distribution.html) · [Summary of Elementary Modeling and Computation](027-summary-of-elementary-modeling-and-computation.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/example-bayesian-analysis-of-a-bioassay-experiment-logistic-nonconjugate/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)