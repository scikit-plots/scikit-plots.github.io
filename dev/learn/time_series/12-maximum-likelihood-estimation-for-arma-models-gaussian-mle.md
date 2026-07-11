# Maximum Likelihood Estimation for ARMA Models (Gaussian MLE)[#](#maximum-likelihood-estimation-for-arma-models-gaussian-mle "Link to this heading")

****Stage 5 · 🧮 Estimation**** · Lesson 12 of 18 · **advanced**

[◀ Previous · Preliminary Estimation for AR Models and the Yule–Walker Equations](11-preliminary-estimation-for-ar-models-and-the-yule-walker-equations.html) · [Next · Diagnostics After Fitting a Time Series Model ▶](13-diagnostics-after-fitting-a-time-series-model.html)

## The likelihood[#](#the-likelihood "Link to this heading")

If the ARMA process is driven by ****Gaussian**** white noise, then the whole sample
\((x\_1, \dots, x\_n)\) is ****multivariate normal**** with a covariance matrix determined by the
parameters. ****Maximum likelihood**** picks the \((\boldsymbol{\phi}, \boldsymbol{\theta},
\sigma\_w^2)\) that make the observed data ****most probable**** under that model.

## The innovations trick[#](#the-innovations-trick "Link to this heading")

Working with the raw \(n \times n\) covariance is expensive. The standard route rewrites the
likelihood through the ****one-step prediction errors**** (“innovations”) and their variances —
computed cheaply by the ****innovations algorithm**** or a ****Kalman filter****. This turns the likelihood
into a product over time and avoids inverting a large matrix.

## A harder optimisation[#](#a-harder-optimisation "Link to this heading")

Unlike Yule–Walker, there is ****no closed form**** — the likelihood is ****nonlinear****, especially in the
****moving-average**** parameters, so it must be ****maximised numerically****. That optimisation can be
finicky, which is exactly why good ****starting values**** (from Yule–Walker or the Hannan–Rissanen
method) matter. One further choice: the ****conditional**** likelihood fixes the initial values, while
the ****exact**** likelihood models them too.

## Why it’s the default[#](#why-it-s-the-default "Link to this heading")

Maximum likelihood is ****consistent****, ****asymptotically normal****, and ****efficient**** — the
lowest-variance estimates available — and, remarkably, its ****asymptotic distribution is the same
even when the data are not Gaussian****. That combination is why `statsmodels`’ `ARIMA` fits by
****exact MLE**** (via a state-space / Kalman filter) by default.

> **See also**
> ****Related lessons:**** [Preliminary Estimation for AR Models and the Yule–Walker Equations](11-preliminary-estimation-for-ar-models-and-the-yule-walker-equations.html) · [Understanding ARMA Processes](06-understanding-arma-processes.html) · [Order Selection for Time Series Models](14-order-selection-for-time-series-models.html) · [Diagnostics After Fitting a Time Series Model](13-diagnostics-after-fitting-a-time-series-model.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/17/maximum-likelihood-estimation-for-arma-models-gaussian-mle/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: advanced](../../_tags/level-advanced.html)