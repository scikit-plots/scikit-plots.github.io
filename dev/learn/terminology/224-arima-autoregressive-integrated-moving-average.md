📈  ****ARIMA (AutoRegressive Integrated Moving Average)****

# ARIMA (AutoRegressive Integrated Moving Average)[#](#arima-autoregressive-integrated-moving-average "Link to this heading")

**A classic model combining autoregression, differencing and moving-average terms for forecasting.**

## What it is[#](#what-it-is "Link to this heading")

****ARIMA (AutoRegressive Integrated Moving Average)**** is a classical statistical model for
****time-series forecasting**** that predicts future values from a series’ ****own past****. It fuses three
ideas — ****autoregression (AR)****, ****integration / differencing (I)**** and ****moving average (MA)**** — and
describes a series by its ****autocorrelations**** rather than by explicit trend or seasonality. A model
is written ****ARIMA(p, d, q)****.

## The three parameters[#](#the-three-parameters "Link to this heading")

Each letter is one parameter. ****p**** is the ****AR order**** — how many lagged past **values** the current
value is regressed on. ****d**** is the ****differencing order**** — how many times the series is differenced
to make it ****stationary**** (removing trend). ****q**** is the ****MA order**** — how many past **error** terms
feed the forecast. In backshift form,

\[\phi\_p(B)\,(1 - B)^d\, y\_t = \theta\_q(B)\,\varepsilon\_t,\]

where \(B\) is the backshift operator (\(B y\_t = y\_{t-1}\)), \(\phi\_p\) and
\(\theta\_q\) are the AR and MA polynomials, and \((1 - B)^d\) applies the differencing.
Setting parameters to zero recovers the simpler ****AR****, ****MA**** and ****ARMA**** models.

## Building one (Box-Jenkins)[#](#building-one-box-jenkins "Link to this heading")

The Box-Jenkins recipe has three stages. First, make the series ****stationary**** by differencing,
checked with a unit-root test such as the ****Dickey-Fuller**** test. Next, pick ****p**** and ****q****: the
****ACF**** (autocorrelation function) guides ****q****, the ****PACF**** (partial autocorrelation function)
guides ****p****, and among candidates you choose the one with the lowest ****AIC**** (or BIC). Finally,
****validate the residuals**** — they should be uncorrelated white noise; if not, revisit the orders.

## Strengths, limits, and SARIMA[#](#strengths-limits-and-sarima "Link to this heading")

ARIMA is ****flexible**** and ****interpretable**** for ****linear, univariate**** series — finance, demand,
sales — and gives stable longer-term forecasts. But it ****assumes a linear autocorrelation structure****,
****requires stationarity****, and struggles with non-linear patterns where ****LSTMs or Transformers****
do better. For periodic data, the ****SARIMA**** extension adds seasonal terms, written
\(\text{ARIMA}(p, d, q)(P, D, Q)\_m\) with season length \(m\).

---

****Mind map — connected ideas****

> [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [Time Series](010-time-series.html) · [Bayesian Time Series](052-bayesian-time-series.html) · [Seasonality](329-seasonality.html) · [Temporal autocorrelation (Serial Correlation)](127-temporal-autocorrelation-serial-correlation.html)

---

****More in Signal Processing & Time Series****

> [Bayesian Time Series](052-bayesian-time-series.html) · [Forecast Error](250-forecast-error.html) · [Forecasting Benchmarks](245-forecasting-benchmarks.html) · [Forecasting Competitions](251-forecasting-competitions.html) · [Log-Space](257-log-space.html) · [Low-pass Filtering](005-low-pass-filtering.html) · [LSTM — Long Short-Term Memory Networks](223-lstm-long-short-term-memory-networks.html) · [M-Competitions (Makridakis Competitions)](244-m-competitions-makridakis-competitions.html) · [Naïve Baseline Forecast](249-naive-baseline-forecast.html) · [Prophet — Time Series Forecasting by Facebook (Meta)](222-prophet-time-series-forecasting-by-facebook-meta.html) · [Seasonal Lag](247-seasonal-lag.html) · [Seasonality](329-seasonality.html) · [Signal Processing](009-signal-processing.html) · [Simple Baseline Methods](248-simple-baseline-methods.html)

---

**Theme:** [Signal Processing & Time Series](index.html#term-theme-signal)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [ARIMA (AutoRegressive Integrated Moving Average)](https://insightful-data-lab.com/2025/08/23/arima-autoregressive-integrated-moving-average/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)