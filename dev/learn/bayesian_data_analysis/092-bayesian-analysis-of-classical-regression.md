# Bayesian analysis of classical regression[#](#bayesian-analysis-of-classical-regression "Link to this heading")

****Part 4 · Stage 11 · 📈 Regression Foundations**** · Lesson 092 of 144 · **advanced**

[◀ Previous · Conditional modeling](091-conditional-modeling.html) · [Next · Regression for causal inference: incumbency and voting ▶](093-regression-for-causal-inference-incumbency-and-voting.html)

## The normal linear model[#](#the-normal-linear-model "Link to this heading")

The workhorse of applied statistics, read Bayesianly. With \(n\) observations, \(k\) predictors
in a matrix \(X\), coefficients \(\beta\) and noise variance \(\sigma^2\):

\[y \mid \beta, \sigma^2, X \sim \mathrm{N}(X\beta, \; \sigma^2 I).\]

Everything from Stage 3’s normal model carries over, with \(X\beta\) in place of a scalar mean.

## Noninformative prior[#](#noninformative-prior "Link to this heading")

Take the standard \(p(\beta, \sigma^2) \propto 1/\sigma^2\). The posterior factors exactly as before
— conditional for the coefficients, marginal for the variance:

\[\beta \mid \sigma^2, y \sim \mathrm{N}\bigl(\hat{\beta}, \; \sigma^2 (X^{\top} X)^{-1}\bigr),
\qquad
\sigma^2 \mid y \sim \text{Inv-}\chi^2\bigl(n - k, \; s^2\bigr),\]

where \(\hat{\beta} = (X^{\top}X)^{-1} X^{\top} y\) is the ****least-squares estimate**** and
\(s^2 = \frac{1}{n-k}(y - X\hat{\beta})^{\top}(y - X\hat{\beta})\). Marginalising \(\sigma^2\)
gives a ****multivariate**** \(t\) for \(\beta\) — the heavy tails again the price of not knowing the
noise scale.

## The classical results, reinterpreted[#](#the-classical-results-reinterpreted "Link to this heading")

The posterior mean of \(\beta\) ****is**** the least-squares estimate; the posterior covariance ****is****
\(s^2 (X^{\top}X)^{-1}\); the marginal for each coefficient ****is**** a \(t\) on \(n - k\)
degrees of freedom. Every number in a regression printout is recovered — but reinterpreted: the interval
is now a probability statement about \(\beta\), and the \(t\) arises by ****integration**** rather
than by a sampling-distribution argument.

## Sampling without MCMC[#](#sampling-without-mcmc "Link to this heading")

Because the factorisation is exact, joint draws are direct — no chain, no diagnostics:

```
import numpy as np
from scipy import stats
n, k = X.shape
XtX_inv = np.linalg.inv(X.T @ X)
beta_hat = XtX_inv @ X.T @ y
s2 = ((y - X @ beta_hat) ** 2).sum() / (n - k)

sigma2 = (n - k) * s2 / stats.chi2(n - k).rvs(4000)                   # marginal draw
beta = np.array([stats.multivariate_normal(beta_hat, s * XtX_inv).rvs()
                 for s in sigma2])                                     # conditional draw
np.percentile(beta[:, 1], [2.5, 97.5])       # posterior interval for the 2nd coefficient

```

## What the closed form hides[#](#what-the-closed-form-hides "Link to this heading")

Three assumptions are doing quiet work: ****normal errors**** (relaxed in Stage 14), ****constant variance and
independence**** (relaxed later in this stage), and an \(X^{\top}X\) that is ****invertible**** and
well-conditioned. When \(k\) approaches \(n\), or predictors are collinear, the noninformative
posterior is diffuse or improper — and the remedy is a ****prior****, which is exactly regularisation.

> **See also**
> ****Related lessons:**** [Conditional modeling](091-conditional-modeling.html) · [Normal Data with a Noninformative Prior Distribution](021-normal-data-with-a-noninformative-prior-distribution.html) · [Regularization and dimension reduction](096-regularization-and-dimension-reduction.html) · [Goals of regression analysis](094-goals-of-regression-analysis.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2025/11/23/bayesian-analysis-of-classical-regression/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)