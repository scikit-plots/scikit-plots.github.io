📉  ****Pinball Loss (a.k.a. Quantile Loss)****

# Pinball Loss (a.k.a. Quantile Loss)[#](#pinball-loss-a-k-a-quantile-loss "Link to this heading")

**The loss minimised by an accurate quantile forecast.**

## What it is[#](#what-it-is "Link to this heading")

****Pinball loss**** (a.k.a. ****quantile loss****) scores a ****quantile**** forecast by penalizing errors
****asymmetrically**** — under- and over-prediction get different weights set by the target quantile
\(\tau\):

\[L\_\tau(y, \hat{y}) = \max\big(\tau(y - \hat{y}),\ (\tau - 1)(y - \hat{y})\big).\]

Minimizing it makes \(\hat{y}\) approach the true \(\tau\)-quantile.

## Why asymmetry[#](#why-asymmetry "Link to this heading")

For a high quantile (say \(\tau = 0.9\)), ****under****-predicting is penalized far more than over-predicting,
pushing the forecast ****up**** to cover the upper tail — exactly what you want for a 90% ****prediction interval****.
At \(\tau = 0.5\) the two weights match and pinball loss reduces to (half) the ****MAE****.

## Where it’s used[#](#where-it-s-used "Link to this heading")

It trains and evaluates ****quantile regressors**** and probabilistic models that output ****intervals**** rather than
points, without assuming any distribution. A caveat: fitting several quantiles independently can cause
****quantile crossing****, where a lower quantile’s forecast exceeds a higher one’s.

---

**Theme:** [Risk & Probabilistic Forecasting](index.html#term-theme-risk)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Mean Absolute Error (MAE)](408-mean-absolute-error-mae.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Strictly Proper Scoring Rules](234-strictly-proper-scoring-rules.html) · [Root Mean Squared Error (RMSE)](426-root-mean-squared-error-rmse.html) · [MASE (Mean Absolute Scaled Error)](403-mase-mean-absolute-scaled-error.html)

---

> **Hint**
> ****More in Risk & Probabilistic Forecasting****

[Continuous Probabilistic Forecasts](230-continuous-probabilistic-forecasts.html) · [Continuous Ranked Probability Score (CRPS)](402-continuous-ranked-probability-score-crps.html) · [Deterministic forecasts](242-deterministic-forecasts.html) · [Full Distribution](229-full-distribution.html) · [Point Forecasts](233-point-forecasts.html) · [Predicting Percentiles](252-predicting-percentiles.html) · [Prediction Intervals (PI)](253-prediction-intervals-pi.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Probabilistic Scoring](228-probabilistic-scoring.html) · [Probability Forecasts](235-probability-forecasts.html) · [Quantile Forecasts](232-quantile-forecasts.html) · [Quantile Level](255-quantile-level.html) · [Quantile Regression](254-quantile-regression.html) · [Return Distribution](225-return-distribution.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Pinball Loss (a.k.a. Quantile Loss)](https://insightful-data-lab.com/2025/08/19/pinball-loss-a-k-a-quantile-loss/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: advanced](../../_tags/level-advanced.html)