📈  ****Seasonal Lag****

# Seasonal Lag[#](#seasonal-lag "Link to this heading")

**The offset to the same point in a previous season, used in seasonal models.**

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

A ****lag**** is a past value of the series, \(y\_{t-k}\); the ****seasonal lag**** is the lag equal to the
****seasonal period**** \(m\) — the value from the ****same point one cycle ago****:

\[\text{seasonal lag: } y\_{t-m}, \qquad \text{seasonal difference: } y\_t - y\_{t-m}.\]

## Common periods[#](#common-periods "Link to this heading")

The period is set by the calendar of the data: \(m = 12\) for ****monthly**** data with yearly
seasonality, \(m = 7\) for ****daily**** data with weekly seasonality, \(m = 24\) for ****hourly**** data
with daily cycles.

## Where it’s used[#](#where-it-s-used "Link to this heading")

The seasonal lag underlies the ****seasonal naïve**** forecast (\(\hat{y}\_t = y\_{t-m}\)), ****seasonal
differencing**** (which strips out seasonality), and ****lag features**** in ML forecasting. A large
****autocorrelation**** at the seasonal lag is the signature of seasonality.

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Time Series Forecasting](256-time-series-forecasting.html) · [Seasonality](329-seasonality.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Log-Space](257-log-space.html) · [Temporal autocorrelation (Serial Correlation)](127-temporal-autocorrelation-serial-correlation.html) · [Simple Baseline Methods](248-simple-baseline-methods.html)

---

> **Hint**
> ****More in Signal Processing & Time Series****

[ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html) · [Simple Baseline Methods](248-simple-baseline-methods.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Seasonal Lag](https://insightful-data-lab.com/2025/08/22/seasonal-lag/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)