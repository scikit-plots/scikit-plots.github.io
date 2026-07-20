# Exponential Smoothing Models[#](#exponential-smoothing-models "Link to this heading")

****Stage 6 · 🏗️ Building & Forecasting Models**** · Lesson 18 of 18 · **advanced**

[◀ Previous · Beyond One-Step Ahead Predictions](17-beyond-one-step-ahead-predictions.html) · [↑ Section](index.html)

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## The idea[#](#the-idea "Link to this heading")

****Exponential smoothing**** forecasts with a ****weighted average of past observations****, where the
weights ****decay exponentially**** into the past — recent data counts most, older data fades but never
fully vanishes. It is a different lineage from ARIMA, built around ****components**** (level, trend,
season) rather than autocorrelations.

## Simple smoothing[#](#simple-smoothing "Link to this heading")

The simplest form, ****Simple Exponential Smoothing (SES)****, tracks a single ****level**** and suits
series with ****no trend or seasonality****:

\[\hat{x}\_{t+1} = \alpha\, x\_t + (1 - \alpha)\, \hat{x}\_t, \qquad 0 < \alpha < 1.\]

The smoothing parameter \(\alpha\) sets the memory: near 1 reacts fast to recent values, near 0
stays smooth and sluggish. Its forecasts are ****flat****.

## Adding trend and season[#](#adding-trend-and-season "Link to this heading")

Two extensions handle richer data. ****Holt’s linear**** method adds a ****trend**** component (a second
parameter \(\beta\)), giving sloped forecasts. ****Holt–Winters**** adds a ****seasonal**** component too
(a third parameter \(\gamma\)), either ****additive**** or ****multiplicative**** — the standard choice
for series with ****both**** trend and seasonality. Together these form the ****ETS**** (Error–Trend–Seasonal)
family.

## Smoothing or ARIMA?[#](#smoothing-or-arima "Link to this heading")

The two approaches are ****complementary****, not rivals: ARIMA describes a series through its
****autocorrelations****, exponential smoothing through its ****trend and seasonal structure****. Which wins
is ****empirical**** — smoothing often shines on strongly trended, seasonal data, ARIMA on stationary,
mean-reverting data. In `statsmodels` these live in `SimpleExpSmoothing`, `Holt` and
`ExponentialSmoothing` (Holt–Winters).

> **Hint**
> ****Related lessons:**** [ARIMA Models: How Nonstationary Models Are Built from Stationary Ones](15-arima-models-how-nonstationary-models-are-built-from-stationary-ones.html) · [SARIMA Models: Seasonal ARIMA](16-sarima-models-seasonal-arima.html) · [Beyond One-Step Ahead Predictions](17-beyond-one-step-ahead-predictions.html) · [What Are Time Series, and How Are They Used?](01-what-are-time-series-and-how-are-they-used.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: <https://insightful-data-lab.com/2026/01/17/exponential-smoothing-models/> (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: time series](../../_tags/topic-time-series.html) [level: advanced](../../_tags/level-advanced.html)