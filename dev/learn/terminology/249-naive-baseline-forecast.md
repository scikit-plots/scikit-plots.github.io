📈  ****Naïve Baseline Forecast****

# Naïve Baseline Forecast[#](#naive-baseline-forecast "Link to this heading")

**A baseline predicting the next value equals the most recent observation.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

A ****naïve baseline forecast**** is the simplest possible forecast — use the ****last observed value**** as the
prediction for the next period (the random-walk forecast). Its seasonal cousin, the ****seasonal naïve****,
uses the value from one season ago:

\[\hat{y}\_{t+1} = y\_t \qquad\text{(naïve)}, \qquad\qquad \hat{y}\_{t+h} = y\_{t+h-m} \quad\text{(seasonal naïve, period } m).\]

## Why it matters[#](#why-it-matters "Link to this heading")

It is the ****benchmark every model must beat****. If a complex model cannot outperform **“just repeat the
last value”**, the complexity is not paying off. It is also the reference in the ****denominator of MASE****,
computed on the ****in-sample (training)**** series so the benchmark does not leak future information.

## Which variant[#](#which-variant "Link to this heading")

The plain naïve suits ****non-seasonal**** data; the ****seasonal naïve**** is the right reference when there is a
clear period (set \(m = 12\) for monthly data with yearly seasonality, not \(m = 1\)). Cheap,
robust, and — for noisy or short series — surprisingly hard to beat.

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Forecast Error](250-forecast-error.html) · [Simple Baseline Methods](248-simple-baseline-methods.html) · [Seasonal Lag](247-seasonal-lag.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Point Forecasts](233-point-forecasts.html)

---

> **Hint**
> ****More in Signal Processing & Time Series****

[ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html) · [Simple Baseline Methods](248-simple-baseline-methods.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Naïve Baseline Forecast](https://insightful-data-lab.com/2025/08/22/naive-baseline-forecast/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)