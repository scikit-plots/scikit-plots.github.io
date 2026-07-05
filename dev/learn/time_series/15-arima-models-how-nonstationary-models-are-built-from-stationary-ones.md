# ARIMA Models: How Nonstationary Models Are Built from Stationary Ones[#](#arima-models-how-nonstationary-models-are-built-from-stationary-ones "Link to this heading")

****Stage 6 · 🏗️ Building & Forecasting Models**** · Lesson 15 of 18 · **advanced**

[◀ Previous · Order Selection for Time Series Models](14-order-selection-for-time-series-models.html) · Next · SARIMA Models: Seasonal ARIMA <16-sarima-models-seasonal-arima> ▶

## The core idea[#](#the-core-idea "Link to this heading")

ARMA needs a ****stationary**** series, but real data trends and drifts. ****ARIMA**** bridges the gap with
one move: ****difference the series until it is stationary****, fit an ordinary ****ARMA**** to the
differenced version, and the model inherits ARMA’s whole toolkit. The ****“I”**** stands for
****Integrated**** — the series must be **un**-differenced (integrated) to recover the original.

## The model[#](#the-model "Link to this heading")

An ****ARIMA(p, d, q)**** applies the \(d\)-th difference \((1-B)^d\) before the ARMA machinery:

\[\phi(B)\,(1 - B)^d\, x\_t = \theta(B)\, w\_t.\]

Here \((1-B)^d\) is the ****differencing operator****, \(\phi(B)\) the AR polynomial and
\(\theta(B)\) the MA polynomial. A series needing \(d\) differences to become stationary is
called ****integrated of order**** \(d\), or \(I(d)\).

## Choosing d[#](#choosing-d "Link to this heading")

One difference (\(d = 1\)) removes a ****linear**** trend; two (\(d = 2\)) removes a
****quadratic**** one; seasonal patterns need a ****seasonal**** difference (next lesson). Pick the
****smallest**** \(d\) that makes the ADF / KPSS tests read stationary — ****over-differencing****
inflates the variance and injects artificial correlation, so more is not better.

## Forecasting back[#](#forecasting-back "Link to this heading")

Fitting happens on the ****differenced**** scale, but forecasts are wanted on the ****original**** one. The
model ****“integrates”**** — cumulatively sums — its differenced-scale predictions back up to the level
of the raw series, carrying the forecast ****uncertainty**** with it. In `statsmodels` this is all
handled by `ARIMA(y, order=(p, d, q))`.

> **See also**
> ****Related lessons:**** [A Gentle Introduction to Stationarity](03-a-gentle-introduction-to-stationarity.html) · [Understanding ARMA Processes](06-understanding-arma-processes.html) · [SARIMA Models: Seasonal ARIMA](16-sarima-models-seasonal-arima.html) · [Order Selection for Time Series Models](14-order-selection-for-time-series-models.html)

****Source**** (context, re-expressed in our own words): <https://insightful-data-lab.com/2026/01/17/arima-models-how-nonstationary-models-are-built-from-stationary-ones/>

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: advanced](../../_tags/level-advanced.html)