# Unequal variances and correlations[#](#unequal-variances-and-correlations "Link to this heading")

****Part 4 · Stage 11 · 📈 Regression Foundations**** · Lesson 097 of 144 · **advanced**

[◀ Previous · Regularization and dimension reduction](096-regularization-and-dimension-reduction.html) · [Next · Including numerical prior information ▶](098-including-numerical-prior-information.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## When the errors are not i.i.d.[#](#when-the-errors-are-not-i-i-d "Link to this heading")

Classical regression assumes \(y \sim \mathrm{N}(X\beta, \sigma^2 I)\) — errors with ****equal
variance**** and ****no correlation****. Real errors routinely violate both: measurements of differing
precision, variance that grows with the mean, observations clustered in time or space. The general
normal linear model replaces \(\sigma^2 I\) with a full covariance \(\Sigma\):

\[y \mid \beta, \Sigma \sim \mathrm{N}(X\beta, \; \Sigma).\]

## Known \(\Sigma\): reduce to the standard case[#](#known-sigma-reduce-to-the-standard-case "Link to this heading")

If \(\Sigma\) is known, a single transformation recovers everything. Factor \(\Sigma = L
L^{\top}\) (Cholesky) and multiply through by \(L^{-1}\):

\[\underbrace{L^{-1} y}\_{y^{\*}} = \underbrace{L^{-1} X}\_{X^{\*}} \beta + \epsilon^{\*},
\qquad \epsilon^{\*} \sim \mathrm{N}(0, I).\]

The transformed model is ordinary regression, so its posterior mean is the ****generalized least squares****
estimate \(\hat{\beta} = (X^{\top}\Sigma^{-1}X)^{-1} X^{\top}\Sigma^{-1}y\). The ****diagonal**** case —
uncorrelated but unequal variances, \(\Sigma = \mathrm{diag}(\sigma\_i^2)\) — is ****weighted least
squares****, with each observation weighted by its precision \(1/\sigma\_i^2\). Whitening and weighting
are the same operation, one general and one diagonal.

```
import numpy as np
L = np.linalg.cholesky(Sigma)                    # Sigma = L L^T
Xs = np.linalg.solve(L, X)                        # L^{-1} X  (whitened design)
ys = np.linalg.solve(L, y)                        # L^{-1} y
beta_gls = np.linalg.lstsq(Xs, ys, rcond=None)[0] # OLS on whitened data == GLS

```

## Unknown \(\Sigma\): model it[#](#unknown-sigma-model-it "Link to this heading")

Usually \(\Sigma\) is unknown, and here the Bayesian treatment separates cleanly from the classical
one: rather than plug in an estimate, give \(\Sigma\) a ****structure with its own parameters**** and
infer everything jointly.

* ****Variances a function of a predictor**** — \(\log \sigma\_i = \gamma\_0 + \gamma\_1 z\_i\), letting the
  data learn how the noise scales.
* ****Correlation from structure**** — an AR(1) covariance for time series, a distance-decaying kernel for
  spatial data (Stage 15), a compound-symmetry block for grouped data.
* ****Hierarchical variances**** — a prior across the \(\sigma\_i\) when there are many.

The posterior then propagates uncertainty in \(\Sigma\) into the coefficients — which plug-in GLS
ignores, understating the intervals exactly as empirical Bayes did.

```
import pymc as pm
with pm.Model():
    beta = pm.Normal("beta", 0, 2.5, shape=X.shape[1])
    g = pm.Normal("g", 0, 1, shape=2)
    sigma = pm.Deterministic("sigma", pm.math.exp(g[0] + g[1] * z))   # variance model
    pm.Normal("y", X @ beta, sigma, observed=y)                       # heteroscedastic

```

## Why it matters[#](#why-it-matters "Link to this heading")

Ignoring unequal variance does not bias \(\hat{\beta}\), but it makes the standard errors ****wrong****
and the estimator ****inefficient**** — the tidy printout is confidently miscalibrated. Correlated errors are
worse: treating clustered or serially dependent observations as independent ****overstates**** the effective
sample size, producing intervals far too narrow. Modelling \(\Sigma\) is what makes the uncertainty
honest, and it is the doorway to the mixed models and Gaussian processes ahead.

> **Hint**
> ****Related lessons:**** [Bayesian analysis of classical regression](092-bayesian-analysis-of-classical-regression.html) · [Including numerical prior information](098-including-numerical-prior-information.html) · [Models for multivariate and multinomial responses](111-models-for-multivariate-and-multinomial-responses.html) · [Gaussian process regression](129-gaussian-process-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2025/11/23/unequal-variances-and-correlations/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: data analysis](../../_tags/topic-data-analysis.html) [domain: bayesian](../../_tags/domain-bayesian.html) [level: advanced](../../_tags/level-advanced.html)