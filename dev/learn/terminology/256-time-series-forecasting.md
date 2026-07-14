📈  ****Time Series Forecasting****

# Time Series Forecasting[#](#time-series-forecasting "Link to this heading")

**Predicting future values of a time-ordered series.**

## What it is[#](#what-it-is "Link to this heading")

****Time series forecasting**** predicts ****future values**** of a ****time-ordered**** series from its past. Unlike
ordinary supervised learning — where rows are independent and can be shuffled — a time series has
****memory****: order matters, and each observation is ****dependent**** on its neighbors.

## The components[#](#the-components "Link to this heading")

A series decomposes into a ****trend**** (long-term drift up or down), ****seasonality**** (regular patterns at a
****fixed**** period), ****cycles**** (longer, ****aperiodic**** swings with no fixed length), and ****noise**** (the
irregular residual). Modeling means ****separating**** these.

## Stationarity and diagnostics[#](#stationarity-and-diagnostics "Link to this heading")

Many methods need ****stationarity**** (constant mean and variance); non-stationary series are made modelable
by ****differencing**** (removes trend / seasonality from the mean) and a ****log / Box-Cox**** transform
(stabilizes variance). Choose the model ****after**** diagnostics — time, seasonal and ****lag**** plots, and the
****ACF / PACF**** — and evaluate with ****rolling-origin backtesting****, reporting error by ****horizon**** and
publishing ****intervals****, not just points.

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Seasonal Lag](247-seasonal-lag.html) · [Log-Space](257-log-space.html) · [Seasonality](329-seasonality.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Forecast Error](250-forecast-error.html) · [Point Forecasts](233-point-forecasts.html)

---

> **Hint**
> ****More in Signal Processing & Time Series****

[ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Time Series Forecasting](https://insightful-data-lab.com/2025/08/22/time-series-forecasting/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)