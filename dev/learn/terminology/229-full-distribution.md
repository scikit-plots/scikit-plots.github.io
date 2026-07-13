📉  ****Full Distribution****

# Full Distribution[#](#full-distribution "Link to this heading")

**Predicting the entire outcome distribution rather than a single value.**

## What it is[#](#what-it-is "Link to this heading")

Forecasting the ****full distribution**** means predicting the ****entire**** predictive distribution — the
complete CDF / PDF over all possible outcomes — rather than a ****summary**** of it. A point forecast
collapses it to one number; a quantile forecast reports a few points; the full distribution keeps
****everything****.

## The richest target[#](#the-richest-target "Link to this heading")

From the full distribution you can ****derive any summary**** after the fact — the mean, the median, any
****quantile****, a ****prediction interval****, the probability of exceeding a threshold, or a risk measure such
as ****VaR****. Nothing about the uncertainty is discarded.

## How it’s judged[#](#how-it-s-judged "Link to this heading")

Because it is a whole distribution, it is scored by a rule that reads the ****entire shape**** against the
outcome — the ****CRPS****, which compares the forecast CDF to the observation’s step CDF — not a point-error
metric like MAE.

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Point Forecasts](233-point-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Probability Distribution](240-probability-distribution.html) · [Probabilistic Scoring](228-probabilistic-scoring.html)

---

> **Hint**
> ****More in Risk & Probabilistic Forecasting****

[Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html) · [Return Distribution](225-return-distribution.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Full Distribution](https://insightful-data-lab.com/2025/08/23/full-distribution/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)