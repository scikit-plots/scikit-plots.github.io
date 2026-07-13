📈  ****Seasonality****

# Seasonality[#](#seasonality "Link to this heading")

**Regular, calendar-linked cycles in a time series.**

## What it is[#](#what-it-is "Link to this heading")

****Seasonality**** is a pattern in a time series that ****repeats at fixed, regular intervals**** — driven by
seasonal factors such as the time of year, the month, the day of the week or the hour of the day.
Unlike a ****trend**** (a long-term rise or fall), seasonality is ****periodic****, recurring with a fixed
frequency. In a decomposition, a series splits into trend, seasonal and residual parts,
\(y\_t = T\_t + S\_t + \varepsilon\_t\), with \(S\_t\) the seasonal component.

## Examples[#](#examples "Link to this heading")

Retail sales spike every December, ice-cream demand rises each summer, website traffic dips every
weekend, and electricity load peaks on hot afternoons. In each case the same shape returns on a
predictable cycle.

## Detecting it[#](#detecting-it "Link to this heading")

Seasonality shows up as a ****repeating shape**** in a line plot, and is confirmed with ****seasonal
subseries**** or ****decomposition**** plots and with the ****autocorrelation function (ACF)****, which spikes at
the ****seasonal lag**** — for example lag 12 for monthly data with yearly seasonality.

## Handling it in models[#](#handling-it-in-models "Link to this heading")

Several tools absorb it: ****seasonal differencing**** removes it, ****SARIMA**** adds seasonal
\((P, D, Q)\_m\) terms, ****Prophet**** fits it with a Fourier series, and simpler models use
****seasonal dummy variables****. Getting seasonality right is essential for accurate forecasting —
ignoring it leaves systematic, repeating errors in the residuals.

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Time Series](010-time-series.html) · [Seasonal Lag](247-seasonal-lag.html) · [Signal Processing](009-signal-processing.html) · [Temporal autocorrelation (Serial Correlation)](127-temporal-autocorrelation-serial-correlation.html)

---

> **Hint**
> ****More in Signal Processing & Time Series****

[ARIMA (AutoRegressive Integrated Moving Average)](224-arima-autoregressive-integrated-moving-average.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Signal Processing](009-signal-processing.html) · [Simple Baseline Methods](248-simple-baseline-methods.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Seasonality](https://insightful-data-lab.com/2025/08/20/seasonality/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)