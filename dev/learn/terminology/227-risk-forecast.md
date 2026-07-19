📉  ****Risk Forecast****

# Risk Forecast[#](#risk-forecast "Link to this heading")

**A forward-looking estimate of potential loss or adverse outcomes.**

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

A ****risk forecast**** predicts a risk measure — most often ****VaR**** or ****Expected Shortfall**** — for a
****future**** period. Because VaR is a quantile, forecasting it means forecasting the \(\tau\)-****quantile
of future returns**** given today’s information; the quantity is ****unobserved**** and estimated ahead of time.

## How it’s done[#](#how-it-s-done "Link to this heading")

Methods forecast the future ****return distribution**** (or just its ****scale****): ****GARCH****-family volatility
models (forecast the variance, then scale a distributional quantile), ****historical simulation****, ****Extreme
Value Theory**** for the far tail, ****quantile regression****, and hybrids of these.

## How it’s judged[#](#how-it-s-judged "Link to this heading")

By ****backtesting****: over a long out-of-sample run, the fraction of days the loss ****breaches**** the forecast
VaR should match the stated level (about 1% of days for 99% VaR). Too many breaches means risk was
****under-forecast****. This discipline is vital for banks, risk managers and regulators.

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Value-at-Risk (VaR)](226-value-at-risk-var.html) · [Return Distribution](225-return-distribution.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Quantile Regression](254-quantile-regression.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Forecast Error](250-forecast-error.html)

---

> **Hint**
> ****More in Risk & Probabilistic Forecasting****

[Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Risk Forecast](https://insightful-data-lab.com/2025/08/23/risk-forecast/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)