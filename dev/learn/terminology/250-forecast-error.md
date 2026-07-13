📈  ****Forecast Error****

# Forecast Error[#](#forecast-error "Link to this heading")

**The difference between a forecast and the realised value.**

## What it is[#](#what-it-is "Link to this heading")

****Forecast error**** is the gap between what happened and what was predicted — the residual

\[e\_t = y\_t - \hat{y}\_t.\]

A single error means little; forecast quality is summarized by ****aggregating**** errors into metrics.

## Common metrics[#](#common-metrics "Link to this heading")

****MAE**** \(= \frac{1}{N}\sum\_t |y\_t - \hat{y}\_t|\) is robust and interpretable, and the forecast that
minimizes it is the ****median****. ****RMSE**** \(= \sqrt{\frac{1}{N}\sum\_t (y\_t - \hat{y}\_t)^2}\) penalizes
large misses more and is minimized by the ****mean****, but is harder to read. ****MAPE**** (mean absolute
**percentage** error) is scale-free but ****explodes**** when actuals are near zero; ****sMAPE**** is a bounded
symmetric variant, still shaky near zero. ****MASE**** scales MAE by a naive forecast’s error, making it
****scale-free**** and interpretable (\(<1\) beats naive).

## Use several[#](#use-several "Link to this heading")

No single metric tells the whole story — ****MAPE**** can look great while ****bias**** quietly builds, and
****MAE**** can hide a few enormous misses — so report several: an absolute metric (MAE / RMSE), a scaled one
(MASE), and a ****bias**** measure.

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Point Forecasts](233-point-forecasts.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Average Absolute Error (AAE)](246-average-absolute-error-aae.html) · [Time Series Forecasting](256-time-series-forecasting.html) · [Relative accuracy](258-relative-accuracy.html)

---

> **Hint**
> ****More in Signal Processing & Time Series****

[ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html) · [Simple Baseline Methods](248-simple-baseline-methods.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Forecast Error](https://insightful-data-lab.com/2025/08/22/forecast-error/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)