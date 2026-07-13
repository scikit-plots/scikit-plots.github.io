# Multivariate Normal Model with Known Variance[#](#multivariate-normal-model-with-known-variance "Link to this heading")

****Part 1 · Stage 3 · 🧮 Multiparameter Models**** · Lesson 024 of 144 · **beginner**

[◀ Previous · Multinomial Model for Categorical Data](023-multinomial-model-for-categorical-data.html) · [Next · Multivariate Normal with Unknown Mean and Variance ▶](025-multivariate-normal-with-unknown-mean-and-variance.html) · [↑ Section](index.html)

## Vectors instead of scalars[#](#vectors-instead-of-scalars "Link to this heading")

Extend the normal model to \(d\) dimensions: observations \(y\_i \sim \mathrm{N}(\theta,
\Sigma)\) are now ****vectors****, \(\theta\) is a mean vector, and \(\Sigma\) is a known
\(d \times d\) covariance matrix. With a conjugate prior \(\theta \sim \mathrm{N}(\mu\_0,
\Lambda\_0)\), every scalar formula from Stage 2 survives — with matrices in place of numbers.

## Precision matrices add[#](#precision-matrices-add "Link to this heading")

Working with ****precision matrices**** (\(\Sigma^{-1}\), \(\Lambda\_0^{-1}\)) makes the result a
direct translation of the scalar case. The posterior is normal, precisions add, and the mean is a
precision-weighted average:

\[\theta \mid y \sim \mathrm{N}(\mu\_n, \Lambda\_n), \qquad
\Lambda\_n^{-1} = \Lambda\_0^{-1} + n\,\Sigma^{-1},\]\[\mu\_n = \Lambda\_n \left( \Lambda\_0^{-1} \mu\_0 + n\, \Sigma^{-1} \bar{y} \right).\]

Set \(d = 1\) and these collapse to the scalar formulas exactly. A flat prior
(\(\Lambda\_0^{-1} \to 0\)) gives \(\theta \mid y \sim \mathrm{N}(\bar{y}, \Sigma / n)\).

```
import numpy as np
Sigma = np.array([[1.0, 0.5], [0.5, 2.0]])          # known covariance
L0    = np.array([[10.0, 0.0], [0.0, 10.0]])        # vague prior covariance
mu0   = np.zeros(2)
Y = np.random.multivariate_normal([1.0, -1.0], Sigma, size=30)
n, ybar = len(Y), Y.mean(axis=0)

Ln = np.linalg.inv(np.linalg.inv(L0) + n * np.linalg.inv(Sigma))
mun = Ln @ (np.linalg.inv(L0) @ mu0 + n * np.linalg.inv(Sigma) @ ybar)

```

## Correlation carries information[#](#correlation-carries-information "Link to this heading")

The genuinely multivariate feature is that \(\Sigma\) ****couples**** the components: observing one
coordinate informs the others whenever they are correlated. The posterior for \(\theta\) inherits a
full covariance, so any ****contrast**** \(c^{\top}\theta\) (a difference of means, a linear
combination) has posterior \(\mathrm{N}(c^{\top}\mu\_n,\ c^{\top}\Lambda\_n c)\) — computed from
draws with a single dot product. Assuming \(\Sigma\) known is of course a fiction, which the next
lesson removes.

> **Hint**
> ****Related lessons:**** [Normal Distribution with Known Variance](015-normal-distribution-with-known-variance.html) · [Multivariate Normal with Unknown Mean and Variance](025-multivariate-normal-with-unknown-mean-and-variance.html) · [Averaging Over Nuisance Parameters](020-averaging-over-nuisance-parameters.html) · [Gaussian process regression](129-gaussian-process-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/09/multivariate-normal-model-with-known-variance/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: beginner](../../_tags/level-beginner.html)