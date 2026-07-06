📈  ****Bayesian Time Series****

# Bayesian Time Series[#](#bayesian-time-series "Link to this heading")

**Time-series modelling in a Bayesian framework, yielding full posterior uncertainty over parameters and forecasts.**

## Why go Bayesian for time series[#](#why-go-bayesian-for-time-series "Link to this heading")

Classical models — ARIMA, exponential smoothing — fix their parameters and estimate
them by maximum likelihood, returning a single point forecast. Real forecasting often
needs more: ****uncertainty quantification**** (a full distribution of future values, not
one number), ****flexibility**** (priors encoding trend, smoothness, seasonality, and
handling missing data), and ****online updating**** (re-forecasting as new data lands).
Bayesian methods deliver all three through ****posterior distributions****.

## The general framework[#](#the-general-framework "Link to this heading")

Model a series \(y\_{1:T}\) with latent parameters \(\theta\):

\[p(\theta \mid y\_{1:T}) \propto p(y\_{1:T} \mid \theta)\, p(\theta),\]

where the prior \(p(\theta)\) encodes structure (smoothness, trend, seasonality)
and the likelihood \(p(y\_{1:T} \mid \theta)\) is often Gaussian or Poisson.
Forecasts come from the ****posterior predictive****, which integrates over parameter
uncertainty rather than plugging in a point estimate:

\[p(y\_{T+h} \mid y\_{1:T}) = \int p(y\_{T+h} \mid \theta, y\_{1:T})\, p(\theta \mid y\_{1:T})\, d\theta.\]

## The model families[#](#the-model-families "Link to this heading")

* ****Bayesian ARIMA/ARMA**** — ARIMA with priors on \(\phi, \theta, \sigma^2\);
  inference by MCMC or variational methods, yielding posterior forecasts.
* ****State-space models / dynamic linear models (DLMs)**** — a hidden state evolves and
  emits observations,

  \[x\_t = F x\_{t-1} + w\_t, \qquad y\_t = H x\_t + v\_t,\]

  covering local-level and trend-plus-seasonality decompositions; inference via the
  ****Kalman filter**** (conjugate Gaussian) or a ****particle filter**** (nonlinear /
  non-Gaussian).
* ****Bayesian structural time series (BSTS)**** — decomposes into trend + seasonality +
  regressors + holiday effects; the engine behind Google’s ****CausalImpact**** for
  estimating intervention effects (A/B tests, policy evaluation).
* ****Gaussian-process time series**** — a GP prior on the latent function,
  \(f \sim \mathcal{GP}(0, k(t,t'))\), with the kernel \(k\) encoding
  smoothness and periodicity; flexible but heavy on long series.
* ****Bayesian VAR**** — multivariate autoregression with shrinkage (Minnesota) priors on
  the coefficient matrices to tame overfitting.

## Inference toolkit[#](#inference-toolkit "Link to this heading")

Conjugate ****Gibbs sampling**** (Normal–Inverse-Gamma for AR models), ****Hamiltonian
Monte Carlo**** (Stan, PyMC), ****variational inference**** for speed, and ****particle MCMC****
for nonlinear state spaces.

## Trade-offs[#](#trade-offs "Link to this heading")

The payoff is full ****posterior predictive distributions****, uncertainty over both
parameters and future values, principled priors for domain knowledge, and graceful
handling of missing data and regime shifts. The cost is ****computation**** (MCMC on large
data), the need for ****careful prior choice****, and ****scaling**** limits (GPs on long
series).

---

****Mind map — connected ideas****

> [Time Series](010-time-series.html) · [Bayesian Inference.](375-bayesian-inference.html) · [Posterior](063-posterior.html) · [Bayesian Decision Theory (BDT)](051-bayesian-decision-theory-bdt.html) · [Bayesian Neural Networks (BNNs)](055-bayesian-neural-networks-bnns.html)

---

****More in Signal Processing & Time Series****

> [ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html) · [Simple Baseline Methods](248-simple-baseline-methods.html)

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Bayesian Time Series](https://insightful-data-lab.com/2025/08/29/bayesian-time-series/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)