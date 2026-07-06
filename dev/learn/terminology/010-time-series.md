📈  ****Time Series****

# Time Series[#](#time-series "Link to this heading")

**Observations indexed in time order, where sequence and dependence carry information.**

## What it is[#](#what-it-is "Link to this heading")

A ****time series**** is a sequence of observations recorded in time order, usually at
equal spacing:

\[Y\_t, \quad t = 1, 2, \dots, T,\]

where \(Y\_t\) is the value at time \(t\). The defining feature is that
****order matters**** — rows are not exchangeable the way they are in ordinary tabular
data, because each value is related to those around it. Everyday examples include
daily stock prices, monthly unemployment, hourly temperature, 15-minute
electricity usage and a patient’s heart rate over time.

## The four components[#](#the-four-components "Link to this heading")

A series is often decomposed into structure plus randomness:

* ****Trend**** — long-run drift up or down (rising house prices).
* ****Seasonality**** — a repeating pattern of **fixed** period (sales peaking every
  December).
* ****Cyclic**** — wave-like swings of **no fixed** length (business cycles).
* ****Noise**** — the residual that trend and seasonality do not explain.

Additively, \(Y\_t = \text{Trend}\_t + \text{Seasonality}\_t + \text{Noise}\_t\)
(a multiplicative form fits when the seasonal swing grows with the level).

## Types[#](#types "Link to this heading")

* ****Univariate**** vs ****multivariate**** — one series, or several measured together
  (sales + temperature + promo spend).
* ****Stationary**** vs ****non-stationary**** — a stationary series has constant mean and
  variance with no trend or seasonality. Most real data is non-stationary;
  differencing or detrending is used to make it stationary, and a test such as the
  ****Augmented Dickey-Fuller (ADF)**** test checks it.

## Modelling approaches[#](#modelling-approaches "Link to this heading")

* ****Classical statistics**** — AR, MA, ARMA, ****ARIMA**** (adds differencing for
  trend), ****SARIMA**** (adds seasonality) and ****exponential smoothing****
  (Holt-Winters).
* ****General ML on lag features**** — reshape the series into a supervised table of
  lagged values and fit Random Forest or gradient boosting (XGBoost).
* ****Deep learning**** — ****RNN / LSTM / GRU****, ****Temporal Convolutional Networks****,
  and Transformer variants (Informer, TimesNet) for long or multivariate series.

## Forecasting vs analysis[#](#forecasting-vs-analysis "Link to this heading")

Two distinct goals: ****forecasting**** predicts future values (tomorrow’s
temperature), while ****analysis**** explains structure — detecting trend, decomposing
seasonality, or flagging anomalies in a sensor stream.

## Evaluation metrics[#](#evaluation-metrics "Link to this heading")

Forecasts are scored with ****MAE****, ****MSE****, ****RMSE****, and percentage errors
****MAPE****, ****sMAPE**** and ****WAPE****. Choose carefully: MAPE explodes when actual
values are near zero and penalises over- and under-prediction asymmetrically;
sMAPE and WAPE are more robust for intermittent or zero-heavy data.

## Pitfalls and edge cases[#](#pitfalls-and-edge-cases "Link to this heading")

* ****Leakage from random splits**** — the single biggest mistake. A shuffled
  train/test split lets the model peek at the future. Always split **by time**
  (train on the past, test on the later portion) with a temporal / rolling-window
  scheme.
* ****Look-ahead features**** — every feature must be computable from information
  available **at prediction time**; rolling statistics must not include the current
  or future point.
* ****Autocorrelation**** — residuals are usually correlated in time, which breaks the
  i.i.d. assumption behind ordinary error bars.
* ****Non-stationarity and regime change**** — relationships drift, so a model fit on
  old data can silently degrade.
* ****Seasonality mismatch**** — the model must capture the right period (weekly **and**
  yearly cycles can coexist).

## Worked example — decompose, then split by time[#](#worked-example-decompose-then-split-by-time "Link to this heading")

```
import pandas as pd
from statsmodels.tsa.seasonal import seasonal_decompose

# y: a pandas Series on a daily DatetimeIndex with weekly seasonality
parts = seasonal_decompose(y, model="additive", period=7)
trend, seasonal, resid = parts.trend, parts.seasonal, parts.resid

# temporal hold-out: NEVER shuffle a time series
split = int(len(y) * 0.8)
train, test = y.iloc[:split], y.iloc[split:]

```

---

****Mind map — connected ideas****

> [Time Series Forecasting](256-time-series-forecasting.html) · [ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Seasonality](329-seasonality.html) · [Temporal autocorrelation (Serial Correlation)](127-temporal-autocorrelation-serial-correlation.html) · [Time-based splits (a.k.a. Temporal Cross-Validation, Rolling Window Validation)](381-time-based-splits-a-k-a-temporal-cross-validatio.html) · [Signal Processing](009-signal-processing.html)

---

****More in Signal Processing & Time Series****

> [ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html)

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Time Series](https://insightful-data-lab.com/2025/08/30/time-series/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)