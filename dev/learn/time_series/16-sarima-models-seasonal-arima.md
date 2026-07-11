# SARIMA Models: Seasonal ARIMA[#](#sarima-models-seasonal-arima "Link to this heading")

****Stage 6 · 🏗️ Building & Forecasting Models**** · Lesson 16 of 18 · **advanced**

[◀ Previous · ARIMA Models: How Nonstationary Models Are Built from Stationary Ones](15-arima-models-how-nonstationary-models-are-built-from-stationary-ones.html) · [Next · Beyond One-Step Ahead Predictions ▶](17-beyond-one-step-ahead-predictions.html)

## The seasonal problem[#](#the-seasonal-problem "Link to this heading")

Plain ARIMA handles ****trend**** but not ****seasonality**** — a pattern that repeats every \(s\) steps
(12 for monthly data, 4 for quarterly). ****SARIMA**** extends it by adding a ****second, seasonal**** ARIMA
operating at the seasonal lag, so one model captures ****both**** short-term and season-to-season
structure.

## The notation[#](#the-notation "Link to this heading")

A SARIMA is written ****SARIMA(p, d, q)(P, D, Q)**** with seasonal period ****s****. The first triple is the
ordinary non-seasonal part; the second is its ****seasonal mirror**** — \(P\) seasonal AR terms,
\(D\) seasonal differences, \(Q\) seasonal MA terms — each acting at multiples of \(s\).
In operator form the two multiply:

\[\Phi\_P(B^s)\,\phi\_p(B)\,(1-B)^d\,(1-B^s)^D\, x\_t
= \Theta\_Q(B^s)\,\theta\_q(B)\, w\_t.\]

## The seasonal difference[#](#the-seasonal-difference "Link to this heading")

The workhorse is the ****seasonal difference**** \((1 - B^s)\), which subtracts the value from ****one
full season ago****:

\[\nabla\_s x\_t = x\_t - x\_{t-s}.\]

Just as ordinary differencing removes a trend, this removes a ****repeating seasonal**** pattern. Data
with ****both**** trend and seasonality may need ****both**** a regular difference (\(d\)) and a seasonal
one (\(D\)). Spikes in the ACF / PACF at lags \(s, 2s, \dots\) point to the seasonal orders.

## Fitting and pitfalls[#](#fitting-and-pitfalls "Link to this heading")

In `statsmodels` this is `SARIMAX(order=(p,d,q), seasonal_order=(P,D,Q,s))`. Two cautions:
seasonal terms ****cost parameters****, so imposing them on a ****non-seasonal**** series adds noise and can
****degrade**** forecasts; and for ****multiple**** overlapping seasonalities (say daily **and** weekly),
specialised tools like ****TBATS**** or ****Prophet**** fit better than a single seasonal period.

> **See also**
> ****Related lessons:**** [ARIMA Models: How Nonstationary Models Are Built from Stationary Ones](15-arima-models-how-nonstationary-models-are-built-from-stationary-ones.html) · [A Gentle Introduction to Stationarity](03-a-gentle-introduction-to-stationarity.html) · [Exponential Smoothing Models](18-exponential-smoothing-models.html) · [Beyond One-Step Ahead Predictions](17-beyond-one-step-ahead-predictions.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/17/sarima-models-seasonal-arima/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: advanced](../../_tags/level-advanced.html)