📉  ****Predicting Percentiles****

# Predicting Percentiles[#](#predicting-percentiles "Link to this heading")

**Forecasting specific percentiles to convey the outcome distribution.**

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

****Predicting percentiles**** means forecasting specific ****percentiles**** (quantiles) of the outcome
distribution — the value below which a given ****percentage**** of outcomes fall — instead of only a single
mean. A percentile is a quantile stated as a percent: the 0.9 quantile is the ****90th percentile****.

## Why percentiles[#](#why-percentiles "Link to this heading")

A handful of percentiles (say the ****10th, 50th and 90th****) sketch the ****range**** of outcomes and their
****best- and worst-case**** scenarios, exposing ****uncertainty**** and enabling ****asymmetric**** decisions —
without committing to a parametric distribution.

## How it’s done[#](#how-it-s-done "Link to this heading")

Percentiles are produced by ****quantile regression**** (and its tree / boosting variants), each trained on
the ****pinball loss**** for its level; stacking many percentiles approximates the ****full distribution****.

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Point Forecasts](233-point-forecasts.html)

---

> **Hint**
> ****More in Risk & Probabilistic Forecasting****

[Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html) · [Return Distribution](225-return-distribution.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Predicting Percentiles](https://insightful-data-lab.com/2025/08/22/predicting-percentiles/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)