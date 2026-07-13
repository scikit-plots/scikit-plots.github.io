# Preliminary Estimation for AR Models and the Yule–Walker Equations[#](#preliminary-estimation-for-ar-models-and-the-yulewalker-equations "Link to this heading")

****Stage 5 · 🧮 Estimation**** · Lesson 11 of 18 · **advanced**

[◀ Previous · Sample ACF and Sample PACF](10-sample-acf-and-sample-pacf.html) · [Next · Maximum Likelihood Estimation for ARMA Models (Gaussian MLE) ▶](12-maximum-likelihood-estimation-for-arma-models-gaussian-mle.html) · [↑ Section](index.html)

## The idea[#](#the-idea "Link to this heading")

The ****Yule–Walker**** method is the simplest way to fit an ****AR(p)**** model: it is ****method of
moments**** — match the model’s theoretical autocovariances to the ones you measure, and solve for
the coefficients. No optimisation, no starting values.

## The equations[#](#the-equations "Link to this heading")

Multiplying the AR recursion by lagged values and taking expectations links the coefficients to the
autocovariances through a ****Toeplitz**** linear system:

\[\Gamma\_p\, \boldsymbol{\phi} = \boldsymbol{\gamma}\_p, \qquad
\Gamma\_p = \big[\gamma(i-j)\big]\_{i,j=1}^{p}, \quad
\boldsymbol{\gamma}\_p = \big(\gamma(1), \dots, \gamma(p)\big)^{\!\top}.\]

Because \(\Gamma\_p\) is a full-rank symmetric Toeplitz matrix, the solution
\(\boldsymbol{\phi} = \Gamma\_p^{-1}\boldsymbol{\gamma}\_p\) always exists.

## Plugging in the data[#](#plugging-in-the-data "Link to this heading")

Replace each \(\gamma(\cdot)\) with its ****sample**** counterpart \(\hat{\gamma}(\cdot)\) to
get \(\hat{\boldsymbol{\phi}} = \hat{\Gamma}\_p^{-1}\hat{\boldsymbol{\gamma}}\_p\), and read off
the noise variance as
\(\hat{\sigma}\_w^2 = \hat{\gamma}(0) - \hat{\boldsymbol{\phi}}^{\!\top}\hat{\boldsymbol{\gamma}}\_p\).
The ****Durbin–Levinson recursion**** solves the system without an explicit inverse; in `statsmodels`
this is `yule_walker`.

## Why it’s a good start[#](#why-it-s-a-good-start "Link to this heading")

For a genuine ****AR(p)****, Yule–Walker estimators are ****consistent****, ****asymptotically normal****, and
****as efficient as maximum likelihood**** — and they always return a ****causal (stationary)**** model.
That reliability makes them the standard ****preliminary estimate**** and a natural ****starting point****
for the likelihood methods below. (For ****ARMA**** the same idea works but is ****no longer efficient****,
so it is used only to seed the optimiser.)

> **Hint**
> ****Related lessons:**** [Best Linear Predictor of a Stationary Process](09-best-linear-predictor-of-a-stationary-process.html) · [Sample ACF and Sample PACF](10-sample-acf-and-sample-pacf.html) · [Maximum Likelihood Estimation for ARMA Models (Gaussian MLE)](12-maximum-likelihood-estimation-for-arma-models-gaussian-mle.html) · [Understanding ARMA Processes](06-understanding-arma-processes.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/17/preliminary-estimation-for-ar-models-and-the-yule-walker-equations/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: advanced](../../_tags/level-advanced.html)