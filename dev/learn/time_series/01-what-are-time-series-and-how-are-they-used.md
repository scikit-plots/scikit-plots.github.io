# What Are Time Series, and How Are They Used?[#](#what-are-time-series-and-how-are-they-used "Link to this heading")

****Stage 1 · 🧭 Orientation**** · Lesson 01 of 18 · **beginner**

[Next · Getting Started with R ▶](02-getting-started-with-r.html) · [↑ Section](index.html)

## What it is[#](#what-it-is "Link to this heading")

A ****time series**** is a sequence of observations recorded ****in time order****, usually at regular
intervals — daily sales, hourly temperature, quarterly GDP. Written \(\{x\_t\}\) for
\(t = 1, \dots, T\), its defining feature is that the ****index is time**** and the ordering is
part of the data: each point is related to the ones before it.

## The moving parts[#](#the-moving-parts "Link to this heading")

Classical analysis decomposes a series into a few recurring components:

* ****trend**** — the long-run drift up or down;
* ****seasonality**** — a ****fixed-period**** repeating pattern (weekly, monthly, yearly);
* ****cyclic**** behaviour — wandering swings of ****no fixed length****;
* ****residual / irregular**** — the noise left once the rest is removed.

`statsmodels`’ `seasonal_decompose` splits trend, seasonal and residual parts as an additive
or multiplicative sum. A useful subtlety: a series with ****cycles but no fixed-length
seasonality**** can still be stationary.

## Why order matters[#](#why-order-matters "Link to this heading")

Because neighbouring points are ****dependent****, time series break the ****i.i.d.**** assumption most
machine learning rests on. You cannot shuffle rows or use ordinary k-fold cross-validation — that
leaks future information into the past. Order is not a nuisance here; it is the ****signal**** that
makes forecasting possible at all.

## Where it’s used[#](#where-it-s-used "Link to this heading")

Two complementary goals recur across every domain:

* ****analysis**** — understand the structure (trend, seasonality, autocorrelation);
* ****forecasting**** — predict future values, ideally with uncertainty intervals.

Typical applications include demand, price and capacity forecasting; monitoring and anomaly
detection; economics and finance; weather and climate; and any sensor or telemetry stream.

> **Hint**
> ****Related lessons:**** [A Gentle Introduction to Stationarity](03-a-gentle-introduction-to-stationarity.html) · [Getting Started with R](02-getting-started-with-r.html) · [ARIMA Models: How Nonstationary Models Are Built from Stationary Ones](15-arima-models-how-nonstationary-models-are-built-from-stationary-ones.html) · [Exponential Smoothing Models](18-exponential-smoothing-models.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/17/what-are-time-series-and-how-are-they-used/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: beginner](../../_tags/level-beginner.html)