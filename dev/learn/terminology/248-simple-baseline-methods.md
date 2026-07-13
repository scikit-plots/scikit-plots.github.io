📈  ****Simple Baseline Methods****

# Simple Baseline Methods[#](#simple-baseline-methods "Link to this heading")

**Easy reference forecasts (last value, mean) that stronger models must beat.**

## What they are[#](#what-they-are "Link to this heading")

****Simple baseline methods**** are a small family of trivially simple forecasts used to set a ****statistical
baseline**** before anything complex. The staples: the ****mean**** method (forecast the historical ****average****,
which smooths away seasonality), the ****naïve**** method (carry the ****last value**** forward — a random walk),
the ****seasonal naïve**** (carry the value from ****one season ago****), and the ****drift**** method (naïve plus a
****trend**** equal to the average historical change).

## The drift formula[#](#the-drift-formula "Link to this heading")

\[\hat{y}\_{T+h} = y\_T + h \cdot \frac{y\_T - y\_1}{T-1},\]

equivalent to drawing a line through the ****first and last**** observations and extrapolating it forward.

## Why use them[#](#why-use-them "Link to this heading")

They are ****cheap and transparent****, and any sophisticated model must ****beat**** them to earn its
complexity. Choose by structure — the ****mean**** for a flat series, the ****naïve**** for a random walk, the
****seasonal naïve**** for strong seasonality, ****drift**** for a trend — and note that ****averaging**** several
often improves accuracy. **KISS: keep it sophisticatedly simple.**

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Seasonal Lag](247-seasonal-lag.html) · [Forecast Error](250-forecast-error.html) · [Time Series Forecasting](256-time-series-forecasting.html) · [Forecasting Competitions](251-forecasting-competitions.html)

---

> **Hint**
> ****More in Signal Processing & Time Series****

[ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Simple Baseline Methods](https://insightful-data-lab.com/2025/08/22/simple-baseline-methods/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)