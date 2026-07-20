📉  ****Return Distribution****

# Return Distribution[#](#return-distribution "Link to this heading")

**The distribution of asset returns, central to financial risk modelling.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

A ****return distribution**** is the probability distribution of an asset’s (or portfolio’s) ****returns**** over
a period — the range of possible returns and how likely each is. From a price series
\((S\_0, \dots, S\_n)\), the simple return is

\[R\_t = \frac{S\_t - S\_{t-1}}{S\_{t-1}}\]

(or, equivalently for many purposes, the ****log return****).

## Why it matters[#](#why-it-matters "Link to this heading")

Every downside-risk measure is read ****off this distribution**** — for instance, ****Value-at-Risk**** is a
tail ****quantile**** of it. Model the return distribution and you can ****price**** risk.

## The reality: fat tails[#](#the-reality-fat-tails "Link to this heading")

Empirical returns are ****not**** normal — they have ****heavy tails**** and ****skewness****, so extreme moves
happen far more often than a Gaussian predicts. Assuming normality ****understates**** tail risk;
heavy-tailed (****Student-t****) or ****location-scale**** models fit better.

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Value-at-Risk (VaR)](226-value-at-risk-var.html) · [Risk Forecast](227-risk-forecast.html) · [Probability Distribution](240-probability-distribution.html) · [Normal Distribution](238-normal-distribution.html) · [Quantile Level](255-quantile-level.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html)

---

> **Hint**
> ****More in Risk & Probabilistic Forecasting****

[Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Return Distribution](https://insightful-data-lab.com/2025/08/23/return-distribution/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)