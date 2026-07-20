📉  ****Quantile Forecasts****

# Quantile Forecasts[#](#quantile-forecasts "Link to this heading")

**Forecasts of specific quantiles of the outcome distribution.**

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

A ****quantile forecast**** expresses the prediction not as one number but as one or more ****conditional
quantiles**** of the future value’s distribution — for example the 10th, 50th and 90th percentiles. The
0.5 level is the ****median****; a pair like 0.1 / 0.9 brackets the outcome, saying it is unlikely (\(\le\)
10%) to fall below the lower or above the upper. Formally the \(\tau\)-quantile forecast satisfies

\[\Pr\!\left(Y \le \hat{y}\_\tau \mid X\right) = \tau.\]

## Why use them[#](#why-use-them "Link to this heading")

They convey ****uncertainty and asymmetry**** directly: you can act differently when under- and over-shooting
carry different costs, ****without**** assuming a parametric (e.g. Gaussian) shape for the distribution.

## How they’re scored[#](#how-they-re-scored "Link to this heading")

Quantile forecasts are evaluated with the ****pinball (quantile) loss****, matched to each level; the
****CRPS**** (Continuous Ranked Probability Score) generalizes it by integrating the pinball loss across
****all**** quantiles, giving a single distributional score.

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Quantile Regression](254-quantile-regression.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Point Forecasts](233-point-forecasts.html)

---

> **Hint**
> ****More in Risk & Probabilistic Forecasting****

[Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html) · [Return Distribution](225-return-distribution.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Quantile Forecasts](https://insightful-data-lab.com/2025/08/23/quantile-forecasts/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)