📈  ****Windows (in Time-Series)****

# Windows (in Time-Series)[#](#windows-in-time-series "Link to this heading")

**Fixed spans over which time-series features or aggregates are computed.**

## What it is[#](#what-it-is "Link to this heading")

In time-series analysis and monitoring, a ****window**** is a ****slice of time**** over which you compute a
statistic — a mean, sum, baseline or anomaly score. The window defines ****how much past data**** counts,
and it can ****stay fixed****, ****slide forward****, or ****expand****.

## The three types[#](#the-three-types "Link to this heading")

A ****fixed window**** always covers a set period — “weekly sales, Monday to Sunday”. A ****rolling (or
sliding) window**** moves forward step by step, recomputing as it goes — “a 7-day rolling average of
temperature” — and is the workhorse for smoothing, baselines and anomaly detection. An ****expanding
window**** starts at a point and ****grows**** as data arrives — “cumulative average sales since launch”.

## Baseline vs current[#](#baseline-vs-current "Link to this heading")

Monitoring usually compares two windows. A ****baseline window**** — a rolling average over the last N
weeks — defines what “normal” looks like. A short ****current window**** — the last 24 hours to 7 days —
shows whether recent behaviour has ****deviated**** from that baseline.

## An example[#](#an-example "Link to this heading")

For API monitoring, a rolling ****8-week baseline**** gives an average latency of ****200ms****. The
****current 24-hour window**** shows ****350ms****. Because 350ms far exceeds the baseline, the comparison
****flags performance degradation**** — the same windowed-comparison logic that underlies drift detection
and leading indicators.

---

****Mind map — connected ideas****

> [Sliding Window (Rolling Window) Cross-Validation](129-sliding-window-rolling-window-cross-validation.html) · [Expanding Window Cross-Validation](130-expanding-window-cross-validation.html) · [Time Series](010-time-series.html) · [Monitoring Pipelines](162-monitoring-pipelines.html) · [Drift Detection](138-drift-detection.html) · [Leading Indicators](169-leading-indicators.html)

---

****More in Signal Processing & Time Series****

> [ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html)

---

**Theme:** Signal Processing & Time Series  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Windows (in Time-Series)](https://insightful-data-lab.com/2025/08/23/windows-in-time-series-data-analysis/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)