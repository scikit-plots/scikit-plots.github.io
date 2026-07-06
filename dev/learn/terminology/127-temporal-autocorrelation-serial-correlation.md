📈  ****Temporal autocorrelation (Serial Correlation)****

# Temporal autocorrelation (Serial Correlation)[#](#temporal-autocorrelation-serial-correlation "Link to this heading")

**Correlation of a time series with its own past values.**

## What it is[#](#what-it-is "Link to this heading")

****Temporal autocorrelation**** (or ****serial correlation****) is when the values of a ****time
series correlate with their own past**** — the value at time \(t\) depends partly on
\(t-1, t-2, \dots\). It is the defining property of time-series data and the most common
way the IID assumption breaks.

## The measure[#](#the-measure "Link to this heading")

The ****autocorrelation function (ACF)**** at lag \(k\) is

\[\rho\_k = \frac{\operatorname{Cov}(X\_t, X\_{t-k})}{\sigma^2},\]

the correlation between the series and its own lag-\(k\) copy, where \(\sigma^2\) is
the series variance. Stock prices (today near yesterday), temperature and weekly website
traffic all show it.

## Why it matters[#](#why-it-matters "Link to this heading")

First, it ****violates IID**** — past strongly influences future, so models that assume
independence are wrong. Second, it ****drives forecasting****: ARIMA and SARIMA explicitly model
autocorrelation, and ****ACF/PACF**** plots reveal the AR and MA orders. Third, it is a
****diagnostic****: the ****Durbin-Watson**** test checks regression residuals, and autocorrelated
residuals signal a misspecified model.

## Positive, negative, and reading the plot[#](#positive-negative-and-reading-the-plot "Link to this heading")

****Positive**** autocorrelation means high tends to follow high (****momentum****); ****negative****
means high tends to follow low (****mean-reversion****). On an ACF plot, strong spikes at lags
1, 2 and 7 would suggest ****weekly seasonality****.

---

****Mind map — connected ideas****

> [IID (Independent and Identically Distributed)](126-iid-independent-and-identically-distributed.html) · [Time Series](010-time-series.html) · [Blocked Splits (Single Holdout)](128-blocked-splits-single-holdout.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Signal Processing](009-signal-processing.html) · [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html)

---

****More in Signal Processing & Time Series****

> [ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html)

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Temporal autocorrelation (Serial Correlation)](https://insightful-data-lab.com/2025/08/24/temporal-autocorrelation-serial-correlation/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)