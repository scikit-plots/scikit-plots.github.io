📉  ****Continuous Probabilistic Forecasts****

# Continuous Probabilistic Forecasts[#](#continuous-probabilistic-forecasts "Link to this heading")

**Forecasts expressed as continuous probability distributions over outcomes.**

## What it is[#](#what-it-is "Link to this heading")

A ****continuous probabilistic forecast**** is a probabilistic forecast for a ****continuous (real-valued)****
outcome — a full ****predictive distribution**** over the variable (a density or CDF), rather than a single
value or a class probability. It answers **what is the whole distribution of tomorrow’s demand, price, or
temperature?**

## How it’s represented[#](#how-it-s-represented "Link to this heading")

It can be given as a ****parametric**** distribution (e.g. a normal \(\mathcal{N}(\mu, \sigma^2)\) with a
forecast mean and variance), a set of ****quantiles****, or an ****ensemble**** of sampled trajectories — each a
way to describe the continuous outcome’s uncertainty.

## Why it’s useful[#](#why-it-s-useful "Link to this heading")

From one object it exposes ****every**** downstream quantity — the mean, any ****quantile****, a ****prediction
interval****, or a ****tail probability****. Because it lives on a continuum (unlike a discrete / categorical
probabilistic forecast), it is scored with the ****CRPS****.

---

****Mind map — connected ideas****

> [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Strictly Proper Scoring Rules](234-strictly-proper-scoring-rules.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html)

---

****More in Risk & Probabilistic Forecasting****

> [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html) · [Return Distribution](225-return-distribution.html)

---

**Theme:** Risk & Probabilistic Forecasting  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Continuous Probabilistic Forecasts](https://insightful-data-lab.com/2025/08/23/continuous-probabilistic-forecasts/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)