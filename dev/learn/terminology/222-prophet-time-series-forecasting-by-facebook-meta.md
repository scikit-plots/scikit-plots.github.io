📈  ****Prophet — Time Series Forecasting by Facebook (Meta)****

# Prophet — Time Series Forecasting by Facebook (Meta)[#](#prophet-time-series-forecasting-by-facebook-meta "Link to this heading")

**An open-source library for decomposable time-series forecasting with trend and seasonality.**

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

****Prophet**** is an ****open-source forecasting library**** from Facebook (now Meta) that makes time-series
forecasting ****simple, scalable and interpretable**** — designed for business data with ****trends,
seasonality and holidays****, and usable without deep statistical expertise.

## The decomposable model[#](#the-decomposable-model "Link to this heading")

Prophet models a series as a sum of interpretable components,

\[y(t) = g(t) + s(t) + h(t) + \varepsilon\_t,\]

where \(g(t)\) is the ****trend**** (linear, or logistic with saturation
\(g(t) = \frac{C}{1 + \exp(-k(t - m))}\), plus automatic ****changepoints****), \(s(t)\) is
****seasonality**** (a Fourier series for weekly, yearly or custom cycles), \(h(t)\) captures
****holidays and events**** from a supplied list, and \(\varepsilon\_t\) is noise.

## Strengths and limits[#](#strengths-and-limits "Link to this heading")

Prophet is ****user-friendly**** (just a `ds`/`y` DataFrame), ****interpretable**** (each component is
separable), ****robust**** to missing data and outliers, detects changepoints automatically, and
****scales**** across many series. Its limits follow from its ****additive**** design: it does not model
autoregressive correlations, it suits ****daily/weekly/monthly**** business data rather than
high-frequency signals, and it is ****less powerful than LSTMs or Transformers**** on complex patterns.

## In practice[#](#in-practice "Link to this heading")

```
from prophet import Prophet

# df has two columns: ds (datestamp) and y (value)
model = Prophet()
model.fit(df)

future = model.make_future_dataframe(periods=90)
forecast = model.predict(future)
model.plot(forecast)
model.plot_components(forecast)

```

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Time Series](010-time-series.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Signal Processing](009-signal-processing.html) · [Stockout Rate](221-stockout-rate.html)

---

> **Hint**
> ****More in Signal Processing & Time Series****

[ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html) · [Simple Baseline Methods](248-simple-baseline-methods.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Prophet — Time Series Forecasting by Facebook (Meta)](https://insightful-data-lab.com/2025/08/23/prophet-time-series-forecasting-by-facebook-meta/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)