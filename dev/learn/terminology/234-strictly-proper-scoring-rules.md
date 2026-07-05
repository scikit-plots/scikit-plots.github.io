📉  ****Strictly Proper Scoring Rules****

# Strictly Proper Scoring Rules[#](#strictly-proper-scoring-rules "Link to this heading")

**Scoring rules minimised only by reporting the true probability distribution.**

## What it is[#](#what-it-is "Link to this heading")

A ****scoring rule**** assigns a numerical score to a ****probabilistic forecast**** given the outcome that
materializes. It is ****proper**** if the forecaster’s **expected** score is maximized by reporting the ****true****
distribution, and ****strictly proper**** if that maximum is ****unique**** — attained **only** at the truth:

\[S(p, q) \;\le\; S(q, q) \quad \text{for all } p, q, \qquad \text{with equality} \iff p = q.\]

## Why it matters[#](#why-it-matters "Link to this heading")

Strict propriety makes ****honesty optimal****: a forecaster cannot improve the expected score by hedging or
shading probabilities away from their true beliefs. That single property is why these rules serve ****both****
as ****training objectives**** (to calibrate probabilistic models) and as ****evaluation metrics**** (to rank
forecasts fairly). Foundational reference: Gneiting & Raftery (2007).

## Common examples[#](#common-examples "Link to this heading")

The ****logarithmic score****, which is also ****local**** (it depends only on the density assigned to what
actually happened):

\[S(q, x) = \log q(x) \quad\text{(its negative, } -\log q(x)\text{, is the log loss / NLL).}\]

Others include the ****Brier score**** for probabilities and the ****CRPS**** and ****pinball (quantile) loss**** for
full distributions and quantiles.

---

****Mind map — connected ideas****

> [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probability Forecasts](235-probability-forecasts.html) · [Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Point Forecasts](233-point-forecasts.html) · [Quantile Regression](254-quantile-regression.html) · [Forecast Error](250-forecast-error.html)

---

****More in Risk & Probabilistic Forecasting****

> [Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Pinball Loss (a.k.a. Quantile Loss)](404-pinball-loss-a-k-a-quantile-loss.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html)

---

**Theme:** Risk & Probabilistic Forecasting  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Strictly Proper Scoring Rules](https://insightful-data-lab.com/2025/08/22/strictly-proper-scoring-rules/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)